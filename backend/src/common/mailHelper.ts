import nodemailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid'
import * as env from '../config/env.config'

const createTransporter = async (): Promise<nodemailer.Transporter> => {
  return nodemailer.createTransport(
    sgTransport({
      apiKey: env.SENDGRID_API_KEY,
    })
  )
}

export const sendMail = async (
  mailOptions: nodemailer.SendMailOptions
): Promise<nodemailer.SentMessageInfo> => {
  const transporter = await createTransporter()
  return transporter.sendMail(mailOptions)
}
