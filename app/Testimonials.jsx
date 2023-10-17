"use client"

import { motion } from "framer-motion"

export default function TestimonialSection() {
  return (
    <section className="grid gap-12 py-16  max-w-[100vw] w-[100vw] lg:py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 200 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.35 }}
        className="text-3xl text-center"
      >
        Hear From Our <span className="text-hidden-teal">Clients</span>
      </motion.h2>
      <div className="grid lg:grid-cols-[auto_92.5vw_auto]">
        <motion.img 
          src="/slanted-arrows-down.svg" 
          alt="" 
          width="128" 
          className="w-[5vw] hidden lg:block relative top-[10%] -left-0" 
          initial={{ opacity: 0, y: 200 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.35 }} 
        />
        <div className="grid place-items-center px-4 gap-6 lg:gap-0 lg:px-48">
          <motion.div
            initial={{ opacity: 0, y: 200 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.35 }} 
            className="p-14 relative text-white grid place-items-center w-[90vw] h-[90vw] lg:w-[33vw] lg:h-[33vw] gap-4 lg:justify-self-start"
          >
            <img src="/speech-bubble-left.svg" alt="" className="absolute w-fit -z-10 -top-4 left-0 scale-125 md:scale-105" />
            <img src="/testimonial-woman-1.svg" alt="" className="absolute h-5/6 md:h-3/4 top-2.5 md:top-16 md:-left-24 lg:top-12 -left-[72px]" />
            <div className="flex flex-col gap-8">
              <p className="text-xs md:text-base lg:text-sm leading-relaxed lg:leading-[1.8] pl-2 md:max-w-[40ch]">
                “What sets Abel apart from others in the industry is the depth of expertise he brings to the table. 
                The guidance I received in tailoring my resume was invaluable, reflecting not just an understanding of the hiring process, 
                but also a nuanced grasp of my particular industry and role. Similarly, his counsel on interview techniques went beyond standard advice, 
                incorporating tactical and strategic elements that significantly enhanced my performance.”
              </p>
              <p className="text-xs md:text-base lg:text-sm italic text-center">Dina S., job seeker</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.35 }} 
            className="p-14 relative text-white grid place-items-center w-[90vw] h-[90vw] lg:w-[33vw] lg:h-[33vw] gap-4 lg:justify-self-end lg:-mt-96"
          >
            <img src="/speech-bubble-right.svg" alt="" className="absolute w-fit -z-10 -top-4 left-0 scale-125 md:scale-105" />
            <img src="/testimonial-man-1.svg" alt="" className="absolute h-5/6 md:h-3/4 top-2.5 lg:top-14 -right-[44px] md:right-16 md:top-14 lg:-right-6" />
            <div className="flex flex-col gap-4 w-full h-full justify-center items-center md:-mt-16 md:mr-24 lg:mr-0 lg:mt-0">
              <p className="text-xs md:text-base lg:text-sm leading-relaxed lg:leading-[1.8] md:max-w-[40ch] pl-2 md:pl-0">
                “As a job seeker working with Abel, I have valued his professionalism, promptness, and attention to detail throughout the recruitment process.
                He went above and beyond to understand my skills, experience, and preferences to help match me with job opportunities that aligned with my career goals.”
              </p>
              <p className="text-xs md:text-base lg:text-sm italic text-center">Joe M., job seeker</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.35 }} 
            className="p-14 relative text-white grid place-items-center w-[90vw] h-[90vw] lg:w-[33vw] lg:h-[33vw] gap-4 lg:-mt-44 lg:-ml-32"
          >
            <img src="/speech-bubble-left.svg" alt="" className="absolute w-fit -z-10 -top-0 left-0 scale-[135%] md:scale-105" />
            <img src="/testimonial-man-2.svg" alt="" className="absolute h-full lg:h-5/6 -top-8 md:-top-5 lg:top-3 -left-14 lg:-left-7" />
            <div className="flex flex-col gap-4 md:mt-12 md:ml-8 lg:mt-8 lg:ml-4">
              <p className="text-xs md:text-base lg:text-sm leading-relaxed lg:leading-[1.8] pl-4 md:max-w-[40ch]">
                "I am very grateful to have met Abel through a referral from a friend during my job employment search a few months ago. 
                Abel provided great counsel and professional advice to me, including assisting me in improving my resume, providing excellent interviewing tips, 
                and sharing various professional resources to ensure success and build up my confidence. Thanks to Abel's top-tier quality service, 
                I was able to secure a job offer within weeks and I would highly him. Abel is the real deal."
              </p>
              <p className="text-xs md:text-base lg:text-sm italic text-center">Duke T., job seeker</p>
            </div>
          </motion.div>
        </div>
        <motion.img 
          src="/slanted-arrows-up.svg" 
          alt="" 
          width="128" 
          className="w-[5vw] hidden lg:block relative top-[45%] -right-2" 
          initial={{ opacity: 0, y: 200 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.35 }} 
        />
      </div>
    </section>
  )
}