"use client"

import { motion } from "framer-motion"

export default function HomeFormSection() {
  return (
    <section className="grid gap-12 lg:gap-24 lg:grid-cols-2 px-4 py-16 md:px-12 md:py-24 lg:px-32  max-w-[100vw] w-[100vw] lg:py-24 items-center">
      <motion.img 
        src="https://media.hirehiddentalent.com/images/homepage-images/home-form-images"
        alt=""
        initial={{ opacity: 0, y: 200 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.35 }}
        className="max-h-[1300px]"
      />
      <motion.form
        initial={{ opacity: 0, y: 200 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.35 }}
        className="bg-[#0a0a0a] text-white px-5 py-8 md:px-8 rounded-[20px] grid gap-6 md:gap-8 justify-self-center w-full h-fit"
      >
        <h2 className="text-3xl text-center max-w-[15ch] lg:max-w-full mx-auto"><span className="text-hidden-teal">Change</span> The Way You Hire</h2>
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
            <option>I am seeking talent</option>
            <option>I am seeking positions</option>
          </select>
        </label>
        <label htmlFor="details" className="grid gap-2 md:text-xl">
          Inquiry Details
          <textarea
            id="details"
            name="details"
            className="rounded p-2 md:p-4 md:text-xl"
            rows="4"
          >
          </textarea>
        </label>
        <button className="md:text-xl mt-4 bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#03D8D4] hover:to-[hsl(179,97%,46%)] text-center rounded-full py-5 uppercase font-semibold text-lg  text-[#0a0a0a]">
          Start your search
        </button>
      </motion.form>
    </section>
  )
}