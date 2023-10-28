"use client"

import Link from "next/link";
import ContactForm from "../ContactForm";

import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Quote from "../Quote";

export default function ContactPage() {
  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger)

    gsap.from('#hero', {
      scrollTrigger: '#hero',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#hero', {
      scrollTrigger: '#hero',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#contact-images', {
      scrollTrigger: '#contact-images',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#contact-images', {
      scrollTrigger: '#contact-images',
      opacity: 1,
      y: 0,
    })

    gsap.from('#link-phone', {
      scrollTrigger: '#link-phone',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#link-phone', {
      scrollTrigger: '#link-phone',
      opacity: 1,
      y: 0,
    })

    gsap.from('#link-email', {
      scrollTrigger: '#link-email',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#link-email', {
      scrollTrigger: '#link-email',
      opacity: 1,
      y: 0,
    })

    gsap.from('#link-location', {
      scrollTrigger: '#link-location',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#link-location', {
      scrollTrigger: '#link-location',
      opacity: 1,
      y: 0,
    })
  }, [])


  return (
    <main className="grid place-items-center py-4 pb-0 lg:py-16 lg:pb-0 gap-6 lg:gap-24 mx-auto">
      
      <section id="contact-images" className="grid lg:grid-cols-2 items-center gap-8 lg:gap-24 px-4 py-8 max-w-[1600px]">
        <div className="relative w-full">
          <img src="arrow-outline-teal.png" alt="" className="absolute scale-[125%] right-[12.5%] top-[12.5%]" />
          <img src="https://media.hirehiddentalent.com/images/contact-page-images/shaking-hands" alt="" className="relative z-50" />
        </div>
        <ContactForm />
      </section>
      <section id="hero" className="flex flex-col gap-4 md:gap-16 px-4 py-0 md:flex-row md:justify-center md:items-center max-w-none">
        <div className="flex justify-evenly md:absolute md:-left-0 md:w-[12.5%] lg:-left-8">
          <img src="small-arrow-solid.svg" alt="" width="32" className="rotate-180 md:w-12 lg:w-12" />
          <img src="small-arrow-solid.svg" alt="" width="32" className="rotate-180 md:w-12 lg:w-12" />
          <img src="small-arrow-solid.svg" alt="" width="32" className="rotate-180 md:w-12 lg:w-12" />
        </div>
        <p className=" font-['Prompt'] text-xl lg:text-2xl text-center md:max-w-[75%] lg:max-w-[75%]">
          We love helping people find the next step in their career or for their company. 
          Even if you find that you don't need our services, we are still here to offer guidance and direction, no matter what you decide to do next.
        </p>
        <div className="flex justify-evenly md:absolute md:-right-2 md:w-[12.5%] lg:-right-6">
          <img src="small-arrow-solid.svg" alt="" width="32" className="md:w-12 lg:w-12" />
          <img src="small-arrow-solid.svg" alt="" width="32" className="md:w-12 lg:w-12" />
          <img src="small-arrow-solid.svg" alt="" width="32" className="md:w-12 lg:w-12" />
        </div>
      </section>
      <div className="flex flex-col lg:flex-row md:justify-center lg:justify-evenly lg:w-full lg:max-w-none items-center gap-8 md:gap-16 px-2 py-8">
        <Link id="link-phone" href="tel:(208) 994-1830" className="flex flex-col lg:flex-row gap-2 md:gap-3 items-center text-xl md:text-2xl"><img src="phone.svg" width="36" alt="" className="md:w-12" /> (208) 994-1830</Link>
        <Link id="link-email" href="mailto:abel@hirehiddentalent.com" className="flex flex-col lg:flex-row gap-2 md:gap-3 items-center text-xl md:text-2xl"><img src="email.svg" width="36" alt="" className="md:w-12" /> abel@hirehiddentalent.com</Link>
        <Link id="link-location" href="https://maps.app.goo.gl/Ws7jxzTt3f8cMgx87" className="flex flex-col lg:flex-row gap-2 md:gap-3 items-center text-xl md:text-2xl"><img src="location.svg" width="36" alt="" className="md:w-12" /> Operated in Idaho, serving nationally</Link>
      </div>
      <Quote 
        quote="“Hiring is the most important people function you have, and most of us aren't as good at it as we think. Refocusing your resources on hiring better will have a higher return than almost any training program you can develop.”"
        author="Laszlo Bock, Co-founder and CEO of Humu and Author of Work Rules"
      />
    </main>
  )
}