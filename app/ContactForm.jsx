"use client"

import { useEffect, useState } from "react"

import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger)

    gsap.from('#contact-form', {
      scrollTrigger: '#contact-form',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#contact-form', {
      scrollTrigger: '#contact-form',
      opacity: 1,
      y: 0,
    })
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)

    const { name, city, email, phone, inquiry, details } = event.target

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
        details: details.value,
      }),
    })
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        setSent(true)
      }

      setLoading(false)
    })
    .catch(error => {
      console.error(error)
      setLoading(false)
    })
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="bg-[#0a0a0a] p-4 lg:p-10 text-white rounded-[20px] grid gap-5 lg:gap-8 w-full"
    >
      <h1 className="text-3xl text-center">Let's Get <span className="text-hidden-teal-dark">Started</span></h1>
      <label htmlFor="name" className="grid gap-2 md:text-xl">
        Name
        <input 
          id="name" 
          name="name"
          placeholder="John Doe"
          required 
          className="rounded p-2 md:p-4 md:text-xl" 
        />
      </label>
      <label htmlFor="city" className="grid gap-2 md:text-xl">
        City & State
        <input 
          id="city" 
          name="city"
          required
          placeholder="Boise, ID" 
          className="rounded p-2 md:p-4 md:text-xl" 
        />
      </label>
      <label htmlFor="email" className="grid gap-2 md:text-xl">
        Email
        <input 
          type="email"
          id="email" 
          name="email"
          required
          placeholder="someone@somewhere.com" 
          className="rounded p-2 md:p-4 md:text-xl" 
        />
      </label>
      <label htmlFor="phone" className="grid gap-2 md:text-xl">
        Phone Number
        <input 
          id="phone" 
          name="phone"
          required
          placeholder="(555) 555-5555" 
          className="rounded p-2 md:p-4 md:text-xl" 
        />
      </label>
      <label htmlFor="inquiry" className="grid gap-2 md:text-xl">
        Inquiry
        <select
          id="inquiry"
          name="inquiry"
          className="rounded p-2 md:p-4 md:text-xl"
        >
          <option value="talent">I am seeking talent</option>
          <option value="positions">I am seeking positions</option>
        </select>
      </label>
      <label htmlFor="details" className="grid gap-2 md:text-xl text-[#0a0a0a]">
        Inquiry Details
        <textarea
          id="details"
          name="details"
          className="rounded p-2 md:p-4 md:text-xl"
          rows="4"
        >
        </textarea>
      </label>
      <button
        disabled={loading || sent}
        className="md:text-xl mt-4 bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[hsl(179,97%,43%)] hover:to-[hsl(179,97%,46%)] disabled:from-[hsl(179,30%,53%)] disabled:to-[hsl(179,30%,56%)] text-center rounded-full py-5 uppercase font-semibold text-lg  text-[#0a0a0a]"
      >
        {sent ? (
          <span className="flex justify-center items-center gap-4">Sent <img src="check-mark.svg" width={24} alt="" /></span>
        ) : (
          <>
            {loading ? (
              <span className="flex justify-center items-center gap-4">Sending... <img src="loading.svg" width={24} alt="loading" className="animate-spin" /></span>
            ): (
              <span>Start your search</span>
            )}
          </>
        )}
       
      </button>
    </form>
  )
}