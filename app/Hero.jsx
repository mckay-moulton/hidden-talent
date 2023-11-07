"use client";

import Link from "next/link";

import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function HeroSection() {
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
  }, [])

  return (
    <section
      className="px-4 py-8"
    >
      <div
        id="hero"
        className="bg-[#0a0a0a] text-white font-['Prompt'] rounded-[50px] px-4 py-6 md:px-8 md:py-12 lg:px-32 lg:py-16 flex flex-col lg:flex-row lg:items-center gap-16 md:gap-24 lg:gap-40 md:max-w-2xl lg:max-w-6xl 2xl:max-w-[1400px] mx-auto"
      >
        <img 
          src="https://media.hirehiddentalent.com/images/homepage-images/hero-image"
          className="relative scale-[120%] lg:scale-[200%] 2xl:scale-[160%] -left-2 lg:w-1/3 lg:order-2"
        />
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-1">
            <p className='text-[32px] font-bold text-center md:text-5xl 2xl:text-6xl !leading-tight lg:!leading-[1.15] tracking-[0.0125em]'>Creating a better world of recruiting</p>
            <p className='text-center text-[16px] font-light md:text-xl lg:text-xl 2xl:text-2xl  tracking-[0.0125em] leading-snug'>A white-glove recruitment experience for both you and your applicants</p>
          </div>
          <div className="grid gap-4 md:justify-center md:grid-cols-2">
            <Link
              href="/employers"
              className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#ffffff] hover:to-[#ffffff] hover:text-hidden-teal border border-[#0a0a0a] hover:border-hidden-teal text-center rounded-full py-5 uppercase font-medium text-lg text-white px-8"
            >
              Discover Top Talent
            </Link>
            <Link
              href="/listings"
              className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#ffffff] hover:to-[#ffffff] hover:text-hidden-teal border border-[#0a0a0a] hover:border-hidden-teal text-center rounded-full py-5 uppercase font-medium text-lg text-white px-8"
            >
              Explore New Positions
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
