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
    <div id="about-section" className="bg-[#0A0A0A] text-white rounded-[50px] px-4 py-6 md:px-8 md:py-12 flex flex-col gap-8 md:gap-14 lg:flex-row w-fit lg:max-w-[1453px] mx-auto relative lg:pl-[30vw] lg:px-[8vw] lg:py-[5vw]">
      <img src="https://media.hirehiddentalent.com/images/homepage-images/abel-home?w=750" className="w-[120%] max-w-[100vw] relative -left-[9.5%] md:w-full md:left-auto lg:absolute lg:w-2/5 lg:order-1 lg:left-12 lg:-top-10" />
         <div className="hidden lg:block lg:order-1 lg:w-full"></div>
         <div className="flex flex-col gap-8 lg:order-2">
           <p>
             It's not work if you love what you do, and we love to connect businesses and professionals to create a seamless career match. 
             Our passion stems from observing years of ghosted candidates, endless interviews, quick turnover, and unfilled positions even at the most desirable companies. 
             With decades of experience, we are breaking the mold in human resources by approaching recruiting with total transparency and the highest level of care from 
             start to finish. Whether you're looking for your next candidate or career, Hidden Talent is equipped with the tools and services to find a job fit that's made to last.
           </p>
           <Link href="/about" className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#03D8D4] hover:to-[hsl(179,97%,46%)] text-center rounded-full py-5 uppercase font-semibold text-lg text-[#0a0a0a] lg:w-fit lg:px-16 lg:self-center">Hear our story</Link>
         </div>
    </div>
  )
}
