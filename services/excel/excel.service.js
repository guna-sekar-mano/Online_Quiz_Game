import Exceljs from 'exceljs'
import moment from 'moment-timezone'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const exceltojson = async (file) => {
  try {
    const workbook = new Exceljs.Workbook()
    await workbook.xlsx.load(file)
    const worksheet = workbook.getWorksheet('Main')
    const headers = []
    const jsonData = []

    worksheet.getRow(1).eachCell((cell) => {
      headers.push(cell.value)
    })
    const images = worksheet.getImages()
    const imageMap = new Map()
    // eslint-disable-next-line no-inner-declarations
    function getImageAt (col, row) {
      for (const image of images) {
        const imageCol = image.range.tl.nativeCol
        const imageRow = image.range.tl.nativeRow
        if (imageCol === col && imageRow === row) {
          return workbook.getImage(+image.imageId)
        }
      }
      return null
    }
    for (const image of images) {
      const col = image.range.tl.nativeCol
      const row = image.range.tl.nativeRow
      const img = getImageAt(col, row)
      if (img) {
        const binaryData = Buffer.from(img.buffer, 'base64')
        const timestamp = new Date().getTime()
        const directoryPath = path.join(__dirname, '../../uploads', moment().format('YYYY_MM'))

        if (!fs.existsSync(directoryPath)) {
          fs.mkdirSync(directoryPath, { recursive: true })
        }
        const filename = `/${moment().format('YYYY_MM')}/${col}_${row}_${timestamp}.jpg`
        const tempFilePath = path.join(__dirname, '../../uploads', filename)
        fs.writeFileSync(tempFilePath, binaryData)
        imageMap.set(`${col}_${row}`, `uploads${filename}`)
      }
    }
    for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber++) {
      const rowData = {}
      const row = worksheet.getRow(rowNumber)
      row.eachCell((cell, colNumber) => {
        const header = headers[colNumber - 1]
        if (rowData) {
          rowData[header] = cell.value
        }
      })
      const col1image = `0_${rowNumber - 1}`
      const col2image = `6_${rowNumber - 1}`
      rowData['Image for Question'] = imageMap.get(col1image)
      rowData['Image for Explanation'] = imageMap.get(col2image)
      jsonData.push(rowData)
    }

    return jsonData.filter(d => d.Question !== undefined)
  } catch (err) {
    console.log(err)
  }
}
export { exceltojson }
