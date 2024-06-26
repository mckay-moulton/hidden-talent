"use client"

import { useEffect } from "react"
import ContactForm from "./ContactForm"
import gsap from "gsap"
import _ScrollTrigger from "gsap/ScrollTrigger"

export default function HomeFormSection() {
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
    gsap.from('#contact-images', {
      scrollTrigger: '#contact-images',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#contact-images', {
      opacity: 1,
      scrollTrigger: '#contact-images',
      y: 0,
    })
  }, [])
  return (
    <section className="flex flex-col items-center gap-12 px-4 py-8 md:px-12 md:py-24 lg:px-32 lg:grid lg:grid-cols-2">
      <img 
        id="contact-images"
        src="https://media.hirehiddentalent.com/images/homepage-images/home-form-images"
      />
      <ContactForm id="contact-form" />
    </section>
  )
}