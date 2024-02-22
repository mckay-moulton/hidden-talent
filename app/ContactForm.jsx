"use client"

import { useEffect, useState } from "react"

export default function ContactForm({ id }) {
  const [inquiryType, setInquiryType] = useState('talent')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    setSending(true)

    const { name, city, email, phone, inquiry, service, heardAbout, details } = event.target

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        city: city.value,
        email: email.value,
        phone: phone.value,
        inquiry: inquiry.value,
        service: inquiry.value === 'job' ? service.value : undefined,
        heardAbout: heardAbout.value,
        details: details.value,
      })
    })
    .then(response => response.json())
    .then(response => {
      setSending(false)
      console.log('response', response)
      if (response.success) {
        setSent(true)
      }

      
    })
    .catch(error => {
      console.error(error)
      setSending(false)
    })
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="bg-[#0a0a0a] text-white w-full max-w-3xl p-4 py-8 md:p-8 rounded-[20px] text-lg flex flex-col gap-5"
    >
      <h2 className="text-[29px] md:text-[42px] text-center leading-tight"><span className="text-hidden-teal-dark">Change</span> the Way <br className="md:hidden" /> You Hire</h2>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input 
          id="name"
          name="name"
          required={true}
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city">City & State</label>
        <input 
          id="city"
          name="city"
          required={true}
          placeholder="Boise, ID"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input 
          id="email"
          name="email"
          required={true}
          placeholder="someone@somewhere.com"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone">Phone Number</label>
        <input 
          id="phone"
          name="phone"
          required={true}
          placeholder="(555) 555-5555"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="inquiry">Inquiry Type</label>
        <select
          id="inquiry"
          name="inquiry"
          onChange={event => setInquiryType(event.target.value)}
        >
          <option value="talent">I am seeking talent</option>
          <option value="job">I am searching for my dream job</option>
        </select>
      </div>
      {inquiryType === 'job' && (
        <div className="flex flex-col gap-1">
          <label htmlFor="service">Which package or service are you interested in?</label>
          <select id="service" name="service">
            <option value="black">Black Diamond</option>
            <option value="sapphire">Sapphire</option>
            <option value="emerald">Emerald</option>
            <option value="service">A La Carte Service</option>
            <option value="opportunities">Keep me in mind for job opportunities</option>
          </select>
        </div>
      )}
      <div className="flex flex-col gap-1">
        <label htmlFor="heardAbout">How did you hear about us?</label>
        <input 
          id="heardAbout"
          name="heardAbout"
          placeholder="(Google, LinkedIn, Facebook, Instagram, Referral)"
          required={true}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="details">Inquiry Details</label>
        <textarea 
          id="details"
          name="details"
          placehoder="Questions or comments"
          rows="4"
        />
      </div>
      <button
        disabled={sending || sent}
        className="group mt-1.5 bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#ffffff] hover:to-[#ffffff] hover:text-hidden-teal disabled:from-[hsl(179,30%,53%)] disabled:to-[hsl(179,30%,56%)] disabled:hover:text-white border disabled:hover:border-[#0a0a0a] border-[#0a0a0a] hover:border-hidden-teal text-center rounded-full py-5 uppercase font-semibold text-lg text-white px-12 w-full md:w-fit mx-auto"
      >
        {sent ? (
          <span className="flex gap-2 items-center">Successfully sent <img src="check-mark.svg" alt="" width="24" className="invert group-hover:invert-0 group-disabled:invert" /></span>
        ) : (
          <span>
            {sending ? (
              <span className="flex items-center gap-2">Sending <img src="loading.svg" alt="" width="24" className="invert animate-spin" /></span>
            ) : (
              'Start Your Search'
            )}
          </span>
        )}
      </button>
    </form>
  )
}