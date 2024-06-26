"use client";

import { motion } from "framer-motion"

export default function Description() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 200 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.35 }} 
    >
      We are eager to help you find your dream job. Explore our open positions below and click the button to learn more.
    </motion.p>
  )
}