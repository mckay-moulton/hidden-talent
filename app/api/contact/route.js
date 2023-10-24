const Mailgun = require('mailgun.js')
const formData = require('form-data')
const mailgun = new Mailgun(formData)

export async function GET() {
  return Response.json({ error_message: 'Invalid request' })
}

export async function POST(request) {
  const { name, city, email, phone, inquiry, details } = await request.json()
  console.log('request', name, city, email, phone, inquiry, details)

  const DOMAIN = process.env.MG_DOMAIN
  const API_KEY = process.env.MG_API_KEY
  const mg = mailgun.client({
    username: 'api',
    key: API_KEY,
  })

  let success = false

  const now = new Date()

  const customerEmail = {
    from: `Hidden Talent <${process.env.MAIL_FROM}>`,
    to: email,
    subject: 'Contact request received',
    html: `
      <h1>Your contact request has been received!</h1>
      <p>Thank you for choosing Hidden Talent! We will be in touch with you soon.</p> 
    `
  }

  const staffEmail = {
    from: `Hidden Talent <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_TO,
    subject: `Contact request received at ${now}`,
    html: `
        <p>Date: ${now}</p>
        <p>Name: ${name}</p>
        <p>City: ${city}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Inquiry Type: ${inquiry}}</p>
        <p>Details: ${details}</p>
      `
  }

  await mg.messages.create(DOMAIN, staffEmail)
    .then(async response => {
      if (response.status === 200) {
        await mg.messages.create(DOMAIN, customerEmail)
        .then(async (response) => {
          if (response.status === 200) {

            


            // res.status(200).json({ success: true })
            // return Response.json({ success: true })
            success = true
          } else {
            success = false
            // return Response.json({ error_message: 'mailgun error', status: response.status })
            // res.status(500).json({ error_message: 'client mail gun error', status: response.status, })
          }
        })
      } else {
        // res.status(500).json({ error_message: 'mail gun error', status: response.status, })
      }
    })

    if (success) {
      return Response.json({ success: true })
    } else {
      return Response.json({ error_message: 'error sending message' })
    }

  // return Response.json({ message: 'successful post request' })
}