"use client"

import { useEffect, useState } from "react"

export default function ContactForm({ id }) {
  const [inquiryType, setInquiryType] = useState('talent')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const date = new Date(Date.now())
  const month = date.getMonth() + 1
  const formattedDate = `${date.getFullYear()}-${month < 10 ? '0' + (month) : month}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`

  function handleSubmit(event) {
    event.preventDefault()

    setSending(true)

    const { name, city, email, phone, inquiry, jobTitle, minPay, maxPay, timelineStart, timelineEnd, fieldType, desiredRole, details } = event.target

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
        jobTitle: jobTitle !== undefined ? jobTitle.value : '',
        minPay: minPay !== undefined ? minPay.value : 0,
        maxPay: maxPay !== undefined ? maxPay.value : 0,
        timelineStart: timelineStart !== undefined ? timelineStart.value : '',
        timelineEnd: timelineEnd !== undefined ? timelineEnd.value : '',
        fieldType: fieldType !== undefined ? fieldType.value : '',
        desiredRole: desiredRole !== undefined ? desiredRole.value : '',
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
          <option value="job">Looking for my dream job</option>
        </select>
      </div>
      {/* {inquiryType === 'talent' ? (
        <> */}
          <div style={{ display: inquiryType === 'talent' ? 'flex' : 'none' }} className="flex flex-col gap-1">
            <label htmlFor="jobTitle">What is the job title?</label>
            <input 
              id="jobTitle"
              name="jobTitle"
              placeholder="Engineer"
            />
          </div>
          <fieldset style={{ display: inquiryType === 'talent' ? 'flex' : 'none' }} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 w-full">
            <legend className="mb-1">What is the pay range?</legend>
              <div className="relative w-full">
                <label htmlFor="minPay" className="absolute top-1 right-2 text-hidden-teal text-xs">Min</label>
                <input 
                  id="minPay"
                  name="minPay"
                  type="number"
                  placeholder="10000"
                  className="w-full"
                />
              </div>
              <span className="text-2xl font-black">-</span>
              <div className="relative w-full">
                <label htmlFor="maxPay" className="absolute top-1 right-2 text-hidden-teal text-xs">Max</label>
                <input
                  id="maxPay"
                  name="maxPay"
                  type="number"
                  placeholder="30000"
                  className="w-full"
                />
              </div>
          </fieldset>
          <fieldset style={{ display: inquiryType === 'talent' ? 'flex' : 'none' }} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 w-full">
            <legend className="mb-1">What is the timeline to get started?</legend>
              <div className="relative w-full">
                <label htmlFor="timelineStart" className="absolute top-1 right-2 text-white text-xs">Start</label>
                <input 
                  id="timelineStart"
                  name="timelineStart"
                  type="date"
                  defaultValue={formattedDate}
                  className="w-full py-3.5 text-sm"
                />
              </div>
              <span className="text-2xl font-black">-</span>
              <div className="relative w-full">
                <label htmlFor="timelineEnd" className="absolute top-1 right-2 text-white text-xs">End</label>
                <input
                  id="timelineEnd"
                  name="timelineEnd"
                  type="date"
                  defaultValue={formattedDate}
                  className="w-full py-3.5 text-sm"
                />
              </div>
          </fieldset>
        {/* </>
      ) : (
        <> */}
          <div style={{ display: inquiryType !== 'talent' ? 'flex' : 'none' }} className="flex flex-col gap-1">
            <label htmlFor="fieldType" className="leading-snug">
              What fields/industries are you looking to work in?
            </label>
            <input 
              id="fieldType"
              name="fieldType"
              placeholder="Accounting, management, tech, etc."
            />
          </div>
          <div style={{ display: inquiryType !== 'talent' ? 'flex' : 'none' }} className="flex flex-col gap-1">
            <label htmlFor="desiredRole">
              What role would you like?
            </label>
            <input 
              id="desiredRole"
              name="desiredRole"
              placeholder="Accountant, mechanic, etc."
            />
          </div>
        {/* </> */}
      
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