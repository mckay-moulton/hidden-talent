"use client"

import { motion } from "framer-motion"
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function UniqueSection() {
  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger)

    gsap.from('#unique', {
      scrollTrigger: '#unique',
      y: 200,
      opacity: 0,
      duration: 0.35,
    })

    gsap.to('#unique', {
      scrollTrigger: '#unique',
      y: 0,
      opacity: 1,
    })
  }, [])

  return (
    <section className='px-4 py-8 max-w-[100vw] w-[100vw] lg:py-16 lg:px-16'>
      <div
        id="unique"
        className='bg-[#0A0A0A] w-full text-white rounded-[50px] px-4 py-8 md:px-8 md:py-12 flex flex-col lg:flex lg:flex-row gap-16 md:gap-14 lg:gap-24 lg:max-w-[1453px] mx-auto relative lg:px-[8vw] lg:py-[5vw] justify-center justify-items-center items-center content-center'
      >
        <picture className="lg:order-2">
          <img src="https://media.hirehiddentalent.com/images/homepage-images/unique-section-image" alt="" width="350" className="relative scale-[120%] lg:scale-[175%]" />
        </picture>
        <div className="grid gap-4 lg:w-3/5">
          <h2 className="text-3xl text-center">How We're <span className="text-hidden-teal">Unique</span></h2>
          <p>
            When you partner with Hidden Talent for your search, you can expect more than just a recruitment agency. We become an extension of your business by offering a full cycle recruiting process that is organized, timely, and creative. We truly care about each of our clients and new hires alike and are committed to their continued success. We document every step of the hiring process so you can start day one with a fully downloadable personnel file, and check in with you and your newest recruit even after they start to make sure everything is going well. 
          </p>
        </div>
      </div>
    </section>
  )
}