"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Card({ listing }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.35 }} 
      className="w-full p-6 border border-hidden-teal rounded-[20px] flex flex-col gap-8 items-center text-xl max-w-md"
    >
      <div className="flex justify-center gap-8 items-center">
        <img src={listing.fields.company?.fields?.logo.url} alt="" width="108" />
        <div className="flex flex-col gap-2">
          <span className="flex items-center content-center gap-2">
            <img src="building.svg" alt="" width="28" className="" />
            
            <Link href={listing.fields.company?.fields?.website || '#'} target="_blank" className="flex items-center justify-start gap-2">
              <span className="w-fit max-w-[10ch]">{listing.fields.company?.fields?.name}</span>
              <img src="/external-link.svg" alt="company website" width="16" />
            </Link>
            </span>
          <span className="flex items-center gap-2 leading-none"><img src="maps-and-flags.svg" alt="" width="28" className="" />{listing.fields.location}</span>
        </div>
      </div>
      <hr className="border-0.5 border-hidden-teal w-full opacity-50" />
      <h2 className="text-2xl md:text-[29px] text-center leading-tight">{listing.fields.jobTitle}</h2>
      
      <div className="flex justify-evenly w-full">
        <p className="flex items-center gap-2"><img src={listing.fields.jobType === 'Full-time' ? 'full-time.svg' : 'part-time.svg'} alt="" width="28" />{listing.fields.jobType}</p>
        <p className="flex items-center gap-2"><img src="money.svg" alt="" width="32" />${Number(listing.fields.compensation).toLocaleString('en-US')}</p>
      </div>
      <div className="flex justify-evenly w-full">
        <p className="flex items-center gap-2"><img src="calendar.svg" alt="" width="28" />{new Date(listing.fields.postedDate).toLocaleDateString()}</p>
        <p className="flex items-center gap-2"><img src="calendar-close.svg" alt="" width="32" />{new Date(listing.fields.closeDate).toLocaleDateString()}</p>
      </div>
      <Link
        href={`/listings/${listing._id}`}
        className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#ffffff] hover:to-[#ffffff] hover:text-hidden-teal border border-[#fff] hover:border-hidden-teal text-center rounded-full py-4 mt-2 uppercase font-semibold text-base text-white px-12 w-full"
      >
       Learn More
      </Link>
    </motion.div>
  )
}