"use client"

import { motion } from "framer-motion"

export default function H1() {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: 200 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.35 }} 
      className="text-[29px] md:text-[42px] text-center"
    >
      <span className="text-hidden-teal w-full">Explore</span> New Opportunities
    </motion.h1>
  )
}