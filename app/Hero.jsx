"use client";

import Link from "next/link";

import { motion, useScroll } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className='bg-[#0A0A0A] text-white rounded-[50px] px-4 py-6 md:px-8 md:py-12 flex flex-col gap-8 md:gap-14 lg:flex-row w-fit lg:max-w-[1453px] mx-auto relative lg:pr-[40vw] lg:px-[8vw] lg:py-[5vw]'>
      {/* <picture>
        <source srcset="https://media.hirehiddentalent.com/images/homepage-images/hero-image" media="(min-width: 1024px)" />
        <img 
        src="https://media.hirehiddentalent.com/images/homepage-images/hero-image?w=750"
        className='w-[120%] max-w-[100vw] relative left-[-12%] md:w-[80%] mx-auto md:left-[unset] lg:order-1 lg:w-[37.5%] 2xl:w-[40vw] lg:absolute lg:left-[unset] lg:right-[-2%] lg:top-[-12.5%]'
      />
      </picture> */}
      <img 
        src="https://media.hirehiddentalent.com/images/homepage-images/hero-image?w=750"
        className='w-[120%] max-w-[100vw] relative left-[-12%] md:w-[80%] mx-auto md:left-[unset] lg:order-1 lg:w-[37.5%] 2xl:w-[40vw] lg:absolute lg:left-[unset] lg:right-[-2%] lg:top-[-12.5%]'
      />
      <div className='flex flex-col gap-8 md:gap-14 lg:gap-12'>
        <div className='grid gap-2 md:gap-4 2xl:max-w-[50ch]'>
          <p className='text-4xl font-bold text-center md:text-5xl 2xl:text-6xl 2xl:leading-normal lg:text-left'>Creating a better world of recruiting</p>
          <p className='text-center lg:text-left md:text-xl lg:text-xl 2xl:text-2xl'>A white-glove recruitment experience for both you and your applicants</p>
        </div>
        <div className='grid gap-4 md:grid-cols-2 md:gap-14 lg:gap-6'>
          {/* <Link href="/" className='bg-gradient-to-b from-[#13A2B2] to-[#11b0ac] lg:from-[#0a0a0a00] lg:to-[#0a0a0a00] lg:border-2 lg:hover:from-[#13a2b2] lg:hover:to-[#11b0ac] lg:border-[#13a2b2] text-center rounded-full py-5 uppercase font-semibold text-lg'>Discover Top Talent</Link> */}
          {/* <Link href="/" className='bg-gradient-to-b from-[#13A2B2] to-[#11b0ac] lg:from-[#0a0a0a00] lg:to-[#0a0a0a00] lg:border-2 lg:hover:from-[#13a2b2] lg:hover:to-[#11b0ac] lg:border-[#13a2b2] text-center rounded-full py-5 uppercase font-semibold text-lg'>Explore New Positions</Link> */}
          <Link href="/employers" className='bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#03D8D4] hover:to-[hsl(179,97%,46%)] text-center rounded-full py-5 uppercase font-semibold text-lg  text-[#0a0a0a]'>Discover Top Talent</Link>
          <Link href="/job-seekers" className='bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#03D8D4] hover:to-[hsl(179,97%,46%)] text-center rounded-full py-5 uppercase font-semibold text-lg text-[#0a0a0a]'>Explore New Positions</Link>
        </div>
      </div>
    </motion.div>
  )
}