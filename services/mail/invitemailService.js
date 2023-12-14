import nodemailer from 'nodemailer'
const sendinviteMail = (data, userId) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: data.Email,
      subject: 'SKILL GAMER Invitation',
      text: `SKILL GAMER Invitation Link : ${process.env.EMAIL_INVITE_LINK}?refid=${userId}`
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error)
      } else {
        console.log('Email Sent')
        resolve({ status: 'Email Sent' })
      }
    })
  })
}
export default sendinviteMail
