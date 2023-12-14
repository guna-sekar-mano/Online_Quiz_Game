const filterformat = (fieldArray, globalFilter) => {
  try {
    const filter = { $or: fieldArray.filter((field1) => field1 !== '_id').map(field => ({ [field]: { $regex: globalFilter, $options: 'i' } })) }
    globalFilter = globalFilter !== '' ? filter : {}
    return globalFilter
  } catch (err) {
    console.log(err)
  }
}

export { filterformat }
