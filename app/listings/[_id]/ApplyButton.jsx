"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ApplyButton({ link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.35 }} 
    >
      <Link 
        href={link}
        className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#ffffff] hover:to-[#ffffff] hover:text-hidden-teal border border-[#fff] hover:border-hidden-teal text-center rounded-full py-4 mt-2 uppercase font-semibold text-base text-white px-12 w-full"
      >
        Apply Now
      </Link>
    </motion.div>
  )
}
