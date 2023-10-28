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
        <div className="px-4 lg:px-16 grid gap-8 md:gap-16 2xl:grid-cols-3 2xl:gap-32 justify-items-center justify-center justify-content-center lg:pl-32 items-center mx-auto">
          <Testimonial 
            quote={`What sets Abel apart from others in the industry is the depth of expertise he brings to the table. 
              The guidance I received in tailoring my resume was invaluable, reflecting not just an understanding of the hiring process, 
              but also a nuanced grasp of my particular industry and role. Similarly, 
              his counsel on interview techniques went beyond standard advice, incorporating tactical and strategic elements that significantly enhanced my performance.
            `}
            author="Dina S., job seeker"
            icon={
              <img src="/testimonial-woman-1.svg" alt="" height="200" className="absolute md:bottom-4 -left-24 w-auto h-[400px] md:h-[400px] md:-left-[120px]" />
            }
          />
          <Testimonial 
            quote={`As a job seeker working with Abel, I have valued his professionalism, promptness, and attention to detail throughout the recruitment process. 
            He went above and beyond to understand my skills, experience, and preferences to help match me with job opportunities that aligned with my career goals.
            `}
            author="Joe M., job seeker"
            icon={
              <img src="/testimonial-man-1.svg" alt="" height="200" className="absolute md:bottom-4 -left-16 w-auto h-[400px] md:h-[400px] md:-left-[80px]" />
            }
          />
          <Testimonial 
            quote={`I am very grateful to have met Abel  during my job employment search. 
            Abel provided great counsel and advice to me, including assisting me in improving my resume, providing excellent interviewing tips, 
            and sharing professional resources to ensure success and build up my confidence. Thanks to Abel's top-tier quality service, 
            I was able to secure a job offer within weeks. Abel is the real deal.
            `}
            author="Duke T., job seeker"
            icon={
              <img src="/testimonial-man-2.svg" alt="" height="230" className="absolute md:bottom-4 -left-16 w-auto h-[400px] md:h-[400px] md:-left-[80px]" />
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
      className={`relative border-2 border-hidden-teal p-8 rounded-[20px] grid grid-rows-[1fr_auto] justify-end items-center font-light md:max-w-[430px] lg:w-full pl-16 md:pl-12 md:pr-12 h-[520px] ${style}`}
    >
      {icon}
      <p className="text-justify leading-relaxed self-center text-hidden-teal">“{quote}”</p>
      <p className="italic text-end text-hidden-teal">{author}</p>
    </motion.div>
  )
}