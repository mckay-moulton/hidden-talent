"use client";

import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesSection() {
  // useEffect(() => {
  //   gsap.registerPlugin(_ScrollTrigger)

  //   gsap.from('#services-h2', {
  //     scrollTrigger: '.services-h2',
  //     opacity: 0,
  //     y: 300,
  //     duration: 0.35,
  //   })

  //   gsap.to('#services-h2', {
  //     scrollTrigger: '.services-h2',
  //     opacity: 1,
  //     y: 0,
  //   })

  //   gsap.from('#services-intro', {
  //     scrollTrigger: '.services-intro',
  //     opacity: 0,
  //     y: 300,
  //     duration: 0.35,
  //   })

  //   gsap.to('#services-intro', {
  //     scrollTrigger: '.services-intro',
  //     opacity: 1,
  //     y: 0,
  //   })

  //   gsap
  // }, [])

  return (
    <div className="grid lg:grid-cols-[auto_1fr_auto] relative ">
      <motion.img src="up-arrows.svg" alt="" width="128" className="w-[5vw] hidden lg:block relative top-[10%]" initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} />
      <section className="px-4 py-12 lg:py-16 grid gap-8 lg:gap-24 lg:grid-cols-[1fr_auto_1fr] max-w-[100ch] mx-auto">
        <div className="flex flex-col gap-4 lg:col-span-3">
          <motion.h2 initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} id="services-h2" className="text-[29px] lg:text-[42px] text-center">Services That <span className="text-hidden-teal">Inspire</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} id="services-intro" className="max-w-[90ch] self-center">
            At Hidden Talent, we believe that recruiting should empower employers and employees alike. 
            That's why we provide services, tools, and resources for both sides of the process so each of you can find the match that is right for you.
          </motion.p>
        </div>
        <div className="grid grid-rows-[auto_1fr_1fr_1fr_1fr_auto] gap-12 justify-center justify-items-center">
          <motion.h3 
            initial={{ opacity: 0, y: 200 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.35 }} 
            className="text-2xl text-center p-4 border-2 border-hidden-teal rounded-[20px] w-full lg:w-fit lg:px-24"
          >
            Build Your <span className="text-hidden-teal">Team</span>
          </motion.h3>
          <div className="flex flex-col gap-2 items-center">
            <motion.img 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              src="job-analysis.svg" height="60" 
            />
            <motion.h4 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-xl mt-4"
            >  
              Job Analysis
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-center max-w-[25ch]"
            >
              Creating a competitive job starts with understanding the market. We analyze the job description, salary, and more to attract the candidates that fit your culture.
            </motion.p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <motion.img 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              src="listing-management.svg" height="60" 
            />
            <motion.h4 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-xl mt-4"
            >  
              Listing Management
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-center max-w-[25ch]"
            >
              It is hard to know where to start looking for candidates. We utilize the right listing platforms and put together a tailored marketing plan to attract the best talent.
            </motion.p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <motion.img 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              src="screening-interviewing.svg" height="60" 
            />
            <motion.h4 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-xl mt-4"
            >  
              Screening & Interviewing
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-center max-w-[25ch]"
            >
              Once you have a candidate pool, you want to proceed with the best applicants. We thoroughly screen all applications and conduct interviews to get to the right fit.
            </motion.p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <motion.img 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              src="offers-and-onboarding.svg" height="60" 
            />
            <motion.h4 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-xl mt-4"
            >  
              Offers and Onboarding
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-center max-w-[25ch]"
            >
              Negotiations can detract from the excitement of finding the right fit. We conduct the conversations and offers to ensure a smooth onboarding for your new recruit.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 200 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.35 }} 
          >
            <Link href="/employers" className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#ffffff] hover:to-[#ffffff] hover:text-hidden-teal border border-[#fff] hover:border-hidden-teal text-center rounded-full py-5 uppercase font-semibold text-lg text-white px-12 w-full md:w-fit mx-auto">Learn more</Link>
          </motion.div>
        </div>
        
        <svg width="2" height="2100" className="hidden lg:block">
          <line x1="0" y1="0" x2="0" y2="2100" style={{ stroke: '#03D8D4', strokeWidth: '4px' }} />
        </svg>
        <hr className="lg:hidden text-hidden-teal my-12" />
        <div className="grid grid-rows-[auto_1fr_1fr_1fr_1fr_auto] gap-12 justify-center justify-items-center">
          <motion.h3 
            initial={{ opacity: 0, y: 200 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.35 }} 
            className="text-2xl text-center p-4 border-2 border-hidden-teal rounded-[20px] w-full lg:w-fit lg:px-24"
          >
            Develop Your <span className="text-hidden-teal">Talent</span>
          </motion.h3>
          <div className="flex flex-col gap-2 items-center">
            <motion.img 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              src="resume.svg" height="60" 
            />
            <motion.h4 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-xl mt-4"
            >  
              Resume Building
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-center max-w-[25ch]"
            >
              You've already got all the pieces to an amazing picture of talent and passion. You just need the expertise to put it all together in a way that showcases your skills.
            </motion.p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <motion.img 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              src="digital-networking.svg" height="60" 
            />
            <motion.h4 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-xl mt-4"
            >  
              Digital Networking
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-center max-w-[25ch]"
            >
              Many of our professional relationships are developed in the digital world. Our experience can help you get linked up online to build the right connections.
            </motion.p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <motion.img 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              src="interview-tactics.svg" height="60" 
            />
            <motion.h4 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-xl mt-4"
            >  
              Interviewing Tactics
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-center max-w-[25ch]"
            >
              With our insight and guidance, you will better understand how to make any interview work to your advantage. You'll never sweat through your suit again.
            </motion.p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <motion.img 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              src="job-offer-counsel.svg" height="60" 
            />
            <motion.h4 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-xl mt-4"
            >  
              Job Offer Counsel
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }} 
              className="text-center max-w-[25ch]"
            >
              After rounds of interviewing, it's exciting to finally get the call. We can help you navigate your job offer so you get everything you're looking for in your new position. 
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 200 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.35 }} 
          >
            <Link href="/job-seekers" className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#ffffff] hover:to-[#ffffff] hover:text-hidden-teal border border-[#fff] hover:border-hidden-teal text-center rounded-full py-5 uppercase font-semibold text-lg text-white px-12 w-full md:w-fit mx-auto">Learn more</Link>
          </motion.div>
        </div>
      </section>
      <motion.img src="down-arrows.svg" alt="" width="128" className="w-[5vw] hidden lg:block relative top-[65%]" initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} />
    </div>
  )
}