const Mailgun = require('mailgun.js')
const formData = require('form-data')
const mailgun = new Mailgun(formData)

import { MongoClient } from 'mongodb'

export async function GET() {
  return Response.json({ error_message: 'Invalid request' })
}

// export async function POST(request) {
//   const formData = await request.formData()

//   const DOMAIN = process.env.MG_DOMAIN
//   const API_KEY = process.env.MG_API_KEY
//   const mg = mailgun.client({
//     username: 'api',
//     key: API_KEY,
//   })

//   const email = formData.get('email')
//   const resume = formData.get('resume')

//   console.log('resume', resume)


//   if (resume) {
//     const customerEmail = {
//     from: `Hidden Talent <${process.env.MAIL_FROM}>`,
//     to: email,
//     subject: 'Contact request received',
//     html: `
//       <h1>Your contact request has been received!</h1>
//       <p>Thank you for choosing Hidden Talent! We will be in touch with you soon.</p> 
//     `
//   }

//   const staffEmail = {
//     from: `Hidden Talent <${process.env.MAIL_FROM}>`,
//     to: process.env.MAIL_TO,
//     subject: `Contact request received at `,
//     attachment: resume,
//   }

//   await mg.messages.create(DOMAIN, staffEmail)
//     .then(async response => {
//       if (response.status === 200) {
//         await mg.messages.create(DOMAIN, customerEmail)
//         .then(async (response) => {
//           if (response.status === 200) {
//             success = true
//           }
//         })
//       }
//     })

//     return Response.json({ message: 'resume received' })
//   }
//   return Response.json({ message: 'hello world'})
// }


export async function POST(request) {
  const { name, city, email, phone, inquiry, service, heardAbout, details } = await request.json()
  // console.log('request', name, city, email, phone, inquiry, jobTitle, minPay, maxPay, timelineStart, timelineEnd, fieldType, desiredRole, details)

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

  const packageName = () => {
    if (service === 'black') return 'Black Diamond'
    if (service === 'sapphire') return 'Sapphire'
    if (service === 'emerald') return 'Emerald'
    if (service === 'service') return 'A La Carte'

    return 'Keep me in mind for job opportunities'
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
        <p>Inquiry Type: ${inquiry}</p>
        ${inquiry === 'job' && `<p>Which package are you interested in?: ${packageName()}</p>`}
        <p>How did you hear about us?: ${heardAbout}</p>
        <p>Details: ${details}</p>
      `
  }

  await mg.messages.create(DOMAIN, staffEmail)
    .then(async response => {
      if (response.status === 200) {
        await mg.messages.create(DOMAIN, customerEmail)
        .then(async (response) => {
          if (response.status === 200) {
            success = true
          }
        })
      }
    })

    if (success) {
      const mongo = new MongoClient(process.env.MONGO_URI)
      
      try {
        await mongo.connect()
        const client = mongo.db('VarialCMS')
        const contentModels = await client.collection('content_models')
        const contents = await client.collection('contents')
        const contactRequests = await contentModels.findOne({ 'name.plural': 'contact-requests' })

        await contents.insertOne({
          contentModel: contactRequests._id,
          fields: {
            name,
            city,
            email,
            phoneNumber: phone,
            inquiryType: inquiry,
            inquiryDetails: details,
          },
          published: true,
          createdAt: now,
          updatedAt: now,
          __v: 0,
        })
      } catch (error) {
        console.error('MongoDB Error', error)
      }
      

      return Response.json({ success: true })
    } else {
      return Response.json({ error_message: 'error sending message' })
    }
}