"use client"

import { Square_Peg } from "next/font/google"
import { motion } from "framer-motion"

const SquarePeg = Square_Peg({ subsets: ['latin' ], weight: ['400']})

export default function Quote({ quote = "", author = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.35 }} 
      className="relative bg-gradient-to-r from-[#13A2B2] to-[#11B0AC] text-white p-4 lg:p-8 lg:pr-12 overflow-hidden w-screen"
    >
      <img src="/diagonal-up-right-arrow.svg" alt="" className="absolute -top-4 -left-4 w-2/5 lg:w-[12vw]" width="128" />
      <img src="/diagonal-down-left-arrow.svg" alt="" className="absolute -bottom-4 -right-4 w-2/5 lg:w-[12vw] lg:-bottom-4" width="128" />
      <div className="p-4 lg:p-8 border-2 rounded-sm grid gap-4 lg:gap-12 text-center">
      
        <p className="text-2xl lg:text-4xl font-thin"><span className={SquarePeg.className}>{quote}</span></p>
        <p className="text-sm lg:text-xl italic text-['Prompt']">{author}</p>
      </div>
      
    </motion.section>
  )
}