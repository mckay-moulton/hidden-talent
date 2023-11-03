"use client"

import { motion } from "framer-motion"

export default function TestimonialSection() {
  return (
    <section className="grid gap-12 py-16  max-w-[100vw] w-[100vw] lg:py-24 justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: 200 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.35 }}
        className="text-[29px] md:text-[42px] text-center"
      >
        Hear From Our <span className="text-hidden-teal">Clients</span>
      </motion.h2>
      <div className="grid lg:grid-cols-[auto_92.5vw_auto]">
        <motion.img 
          src="/slanted-arrows-down.svg" 
          alt="" 
          width="96" 
          className="w-[3vw] hidden lg:block relative -top-[10%] -left-2" 
          initial={{ opacity: 0, y: 200 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.35 }} 
        />
        <div className="px-4 lg:px-16 grid gap-8 md:gap-16 2xl:grid-cols-3 2xl:gap-32 justify-items-center justify-center justify-content-center lg:pl-32 items-center content-center mx-auto">
          
          <Testimonial 
            quote={`As a job seeker working with Abel, I have valued his professionalism, promptness, and attention to detail throughout the recruitment process. 
            He went above and beyond to understand my skills, experience, and preferences to help match me with job opportunities that aligned with my career goals.
            `}
            author="Joe M., job seeker"
            icon={
              <img src="/testimonial-man-1.svg" alt="" height="200" className="absolute md:bottom-4 -left-16 w-auto h-[400px] md:h-[400px] md:-left-[80px]" />
            }
          />
          <TestimonialAlt 
            quote={`Abel Johnson is a fantastic recruiter! 
            If you're looking for someone that handles all aspects of the recruiting process - 
            from understanding exactly what you're looking for, to designing job postings, to posting, to screening, to interviewing, 
            to keeping you on track, to offers, to onboarding, etc. - then he's your guy!  He's a professional, a great communicator and fun to work with.  
            Our clients have been really happy and genuinely satisfied with his 'white glove' approach.
            `}
            author="David Jeppson, Co-Founder, BestDayHR"
            icon={
              <img src="/testimonial-man-2.svg" alt="" height="200" className="absolute lg:bottom-[calc(50%-180px)]  -left-16 w-auto h-[400px] md:h-[440px] md:-left-[90px]" />
            }
          />
          <Testimonial 
            quote={`I appreciated the approach, emphasis on both client and candidate experience, 
            willingness to provide support and counsel throughout the process, friendliness and the focus on achieving a great outcome for all parties. 
            Thank you!
            `}
            author="Cade Wambolt, Managing Director, Idaho Accounting Services"
            icon={
              <img src="/testimonial-woman-1.svg" alt="" height="230" className="absolute md:bottom-4 -left-24 w-auto h-[400px] md:h-[400px] md:-left-[120px]" />
            }
          />
        </div>
        <motion.img 
          src="/slanted-arrows-up.svg" 
          alt="" 
          width="96" 
          className="w-[3vw] hidden lg:block relative top-[10%] -right-2" 
          initial={{ opacity: 0, y: 200 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.35 }} 
        />
      </div>
    </section>
  )
}

function Testimonial({ quote, author, icon = <></>, style = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.35 }} 
      className={`relative border-2 border-hidden-teal p-8 rounded-[20px] grid gap-4 grid-rows-[1fr_auto] justify-end items-center font-light md:max-w-[430px] lg:w-full pl-16 md:pl-12 md:pr-12  h-fit ${style}`}
    >
      {icon}
      <p className="text-justify leading-relaxed self-center text-hidden-teal">“{quote}”</p>
      <p className="italic text-end text-hidden-teal">{author}</p>
    </motion.div>
  )
}

function TestimonialAlt({ quote, author, icon = <></>, style = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.35 }} 
      className={`relative border-2 bg-hidden-teal text-white border-hidden-teal p-4 rounded-[20px] flex flex-col gap-4 justify-end items-center content-center font-light md:max-w-[430px] lg:w-full pl-4 md:pl-4 md:pr-4  h-fit ${style}`}
    >
      <div className="p-4 pl-8 flex flex-col gap-4 border-2 rounded-[20px]">
        {icon}
        <p className="text-justify leading-relaxed self-center">“{quote}”</p>
        <p className="italic text-end">{author}</p>
      </div>
    </motion.div>
  )
}