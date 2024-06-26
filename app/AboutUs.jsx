"use client";

import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect } from "react";

export default function AboutSection() {
  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger)

    gsap.from('#about-section', {
      scrollTrigger: '#about-section',
      y: 300,
      opacity: 0,
      duration: 0.35,
    })

    gsap.to('#about-section', {
      scrollTrigger: '#about-section',
      y: 0,
      opacity: 1,
    })
  }, [])

  return (
    <section className="px-4 py-8 md:py-16 max-w-[100vw] w-[100vw] lg:py-16 lg:px-16">
      <div 
        id="about-section"
        className="grid lg:grid-cols-2 gap-20 md:gap-24 lg:gap-0 items-center bg-[#0a0a0a] text-white rounded-[50px] px-6 py-6 lg:py-12 lg:px-32 md:max-w-2xl lg:max-w-6xl 2xl:max-w-[1400px] mx-auto"
      >
        <img 
          src="https://media.hirehiddentalent.com/images/homepage-images/abel-home" 
          alt="Abel" 
          width="350" 
          className="w-full scale-[120%] lg:w-3/4 lg:scale-[140%]"
        />
        <div className="flex flex-col gap-6 md:gap-10">
          <h2 className="text-[29px] md:text-[42px] text-center">Your Guide to <span className="text-hidden-teal-dark">Greatness</span></h2>
          <p className="text-justify">
            It's not work if you love what you do, and we love to connect businesses and professionals to create a seamless career match. 
            Our passion stems from observing years of ghosted candidates, endless interviews, quick turnover, and unfilled positions even at the most desirable companies. 
            With decades of experience, we are breaking the mold in human resources by approaching recruiting with total transparency and the highest level of care from 
            start to finish. Whether you're looking for your next candidate or career, Hidden Talent is equipped with the tools and services to find a job fit that's made to last.
          </p>
          <Link 
            href="/about" 
            className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#ffffff] hover:to-[#ffffff] hover:text-hidden-teal border border-[#0a0a0a] hover:border-hidden-teal text-center rounded-full py-5 uppercase font-semibold text-lg text-white px-12 w-full md:w-fit mx-auto"
          >
            Hear our story
          </Link>
        </div>
      </div>
    </section>
  )
}
