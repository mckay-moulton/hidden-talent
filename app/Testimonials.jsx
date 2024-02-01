"use client"

import { motion } from "framer-motion"

export default function TestimonialSection() {
  return (
    <section className="grid gap-12 py-16 md:pb-32 lg:grid-cols-2  max-w-[100vw] w-[100vw] lg:py-24 justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: 200 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.35 }}
        className="text-[29px] md:text-[42px] text-center lg:col-span-2"
      >
        Hear From Our <span className="text-hidden-teal">Clients</span>
      </motion.h2>
      <div className="grid lg:grid-cols-[auto_92.5vw_auto]">
      {/* <div className="grid lg:grid-cols-2 lg:grid-rows-2"> */}
        <motion.img 
          src="/slanted-arrows-down.svg" 
          alt="" 
          width="96" 
          className="w-[3vw] hidden lg:block relative -top-[10%] -left-0" 
          initial={{ opacity: 0, y: 200 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.35 }} 
        />
        <div className="px-4 lg:px-16 grid gap-8 md:gap-24 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-x-40 lg:gap-y-16 justify-items-center justify-center justify-content-center  items-center lg:items-start content-center mx-auto h-fit">
          <TestimonialAlt
            quote={`I've worked with many executive search firms over my 30-year career in city management. Abel Johnson is by far one of the best recruiters I have ever worked with. Unlike some executive search firms that simply put a list of prospective candidates together hoping one or more will be acceptable to their client, Abel works diligently to find and screen the right candidate for the position. This approach saves his clients considerable time and frustration by eliminating marginal candidates or candidates who are job shopping. I found working with Abel to be easy and enjoyable. He is very responsive to his client's needs and goes above and beyond to make sure the recruitment process runs smoothly. I definitely recommend Abel to anyone looking to fill a mid-management or executive level position in their organization.
            `}
            author="Troy Butzlaff, CEO/President, Anthenian Partners"
            style="lg:row-span-2 lg:self-center"
            icon={
              <img src="/testimonial-man-1.svg" alt="" height="200" className="absolute md:bottom-4 -left-16 w-auto h-[400px] md:h-[400px] md:-left-[80px] top-[calc(50%-200px)]" />
            }
          />
          <Testimonial 
            quote={`Abel Johnson is a fantastic recruiter! 
            If you're looking for someone that handles all aspects of the recruiting process - 
            from understanding exactly what you're looking for, to designing job postings, to posting, to screening, to interviewing, 
            to keeping you on track, to offers, to onboarding, etc. - then he's your guy!  He's a professional, a great communicator and fun to work with.  
            Our clients have been really happy and genuinely satisfied with his 'white glove' approach.
            `}
            author="David Jeppson, Co-Founder, BestDayHR"
            style="lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1 lg:self-end"
            icon={
              <img src="/testimonial-man-2.svg" alt="" height="200" className="absolute  -left-16 w-auto h-[400px] md:h-[440px] md:-left-[90px] top-[calc(50%-220px)] " />
            }
          />
          <Testimonial 
            quote={`I am so impressed with Abel’s professionalism and fun personality. He helped find our non-profit organization, a high quality Executive Director. Greatly appreciate him.
            `}
            author="Kathy Figueredo, Board President, Elmore Cty Domestic Violence Council"
            style="lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2"
            icon={
              <img src="/employer-testimonial-woman-2.svg" alt="" height="230" className="absolute md:bottom-4 -left-[102px] w-auto h-[400px] md:h-[400px] md:-left-[120px] top-[calc(50%-200px)]" />
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