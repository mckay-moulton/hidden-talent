"use client"

import Link from "next/link";

import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";

export default function IntroSection() {
  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger)

    gsap.from('#bumper-left', {
      scrollTrigger: '#bumper-left',
      left: -200,
      opacity: 0,
      duration: 0.35,
    })

    gsap.to('#bumper-left', {
      scrollTrigger: '#bumper-left',
      left: 0,
      opacity: 1,
    })
    gsap.from('#bumper-right', {
      scrollTrigger: '#bumper-right',
      left: -200,
      opacity: 0,
      duration: 0.35,
    })

    gsap.to('#bumper-right', {
      scrollTrigger: '#bumper-right',
      left: 0,
      opacity: 1,
    })
  }, [])

  return (
    <div className="relative grid grid-cols-[auto_1fr_auto]">
      <img src="/bumper-left.svg" id="bumper-left" width="24" className="hidden lg:block lg:w-10 mt-32 opacity-0" />
      <section className='flex flex-col gap-8 lg:gap-16 px-4 py-12 lg:py-16 items-center relative'>
        <motion.h1 initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className='text-3xl text-center'>
          Delivering <span className='text-hidden-teal'>Great People</span> to <span className='text-hidden-teal'>Great Companies</span>
        </motion.h1>
        <div className='flex flex-col gap-8 lg:gap-24 lg:flex-row max-w-[1280px]'>
          <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className='relative flex flex-col md:flex-row gap-8  border-2 border-hidden-teal rounded-[50px] p-6 md:p-12 md:mt-12 w-fit mx-auto'>
            <p className='order-2 max-w-[50ch] md:pl-24'>
              Changing careers is exciting but often overwhelming. You have drive, passion, and expertise that can make a difference in a company, but it is hard to know where to start and how to find engaging work that will be worth making the switch.
            </p>
            <img src="/janitor.svg" alt="" width="182" className='relative justify-center self-center md:absolute md:left-2' />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className='relative flex flex-col md:flex-row gap-8  border-2 border-hidden-teal rounded-[50px] p-6 md:p-12 md:mt-12 w-fit mx-auto'>
            <p className='order-2 max-w-[50ch] md:pr-24'>
              Hiring your next team member is an opportunity to build upon what you love in your business. You want to find someone that truly matches your company's culture, mission, and values, and you know you have a lot to offer the right candidate.
            </p>
            <img src="/businesswoman.svg" alt="" width="107" className='relative justify-center self-center md:absolute md:right-2' />
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className='border-2 border-hidden-teal rounded-[50px] p-6 md:p-12 md:mt-12 w-fit mx-auto max-w-[1024px] flex flex-col gap-8'>
          <h2 className='text-xl text-center'>We bring employees and employers together.</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 items-center text-center'>
            <div className='grid gap-4 justify-items-center'>
              <img src="handshake.svg" alt="" width="115" />
              <p><span className='block text-hidden-teal text-3xl font-bold'>100+</span> <span className='block'>jobs</span> placed</p>
            </div>
            <div className='grid gap-4 justify-items-center'>
              <img src="office-buildings.svg" alt="" width="115" />
              <p><span className='block text-hidden-teal text-3xl font-bold'>16</span> <span className='block'>industries</span> served</p>
            </div>
            <div className='grid gap-4 justify-items-center'>
              <img src="networking.svg" alt="" width="115" />
              <p><span className='block text-hidden-teal text-3xl font-bold'>50</span> <span className='block'>professionals</span> helped</p>
            </div>
            <div className='grid gap-4 justify-items-center'>
              <img src="experience.svg" alt="" width="115" />
              <p><span className='block text-hidden-teal text-3xl font-bold'>10</span> <span className='block'>years</span> experience</p>
            </div>
          </div>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="mt-8">
          <Link href="/" className='bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#03D8D4] hover:to-[hsl(179,97%,46%)] text-center rounded-full py-5 uppercase font-semibold text-lg text-white w-full md:w-fit px-12'>Start your search</Link>
        </motion.p>
      </section>
      <img src="/bumper-left.svg" id="bumper-right" width="24" className="hidden lg:block lg:w-10 mt-32 opacity-0" style={{ transform: 'scaleX(-1)'}} />
    </div>
  )
}