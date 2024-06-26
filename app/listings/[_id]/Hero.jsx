"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero({ listing }) {
  const compensation = Number(listing.fields.compensation).toLocaleString('en-US')
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center"
    >
      <img src={listing.fields.company.fields.logo.url} alt="" width="150" />
      <h1 className="text-[44px] md:text-[48px] leading-tight text-center">{listing.fields.jobTitle}</h1>
      <div className="flex flex-wrap justify-center gap-y-12 lg:justify-between items-end w-full max-w-4xl lg:gap-8 mx-auto p-8 mt-4">
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit">
          <img src="/building.svg" alt="" className="h-[32px] w-auto" />
          <Link href={listing.fields.company.fields.website} className="flex items-center gap-1">
            {listing.fields.company.fields.name}
            <img src="/external-link.svg" alt="external website" width={16} />
          </Link>
        </p>
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit"><img src="/maps-and-flags.svg" alt="" className="h-[28px] w-auto" />{listing.fields.location}</p>
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit"><img src={listing.fields.jobType === 'Full-time' ? '/full-time.svg' : '/part-time.svg'} alt="" className="h-[32px] w-auto" />{listing.fields.jobType}</p>
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit">
          <img src="/money.svg" alt="" className="h-[32px] w-auto" />
          ${compensation}
        </p>
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit"><img src="/calendar.svg" alt="" className="h-[28px] w-auto" />{new Date(listing.fields.postedDate).toLocaleDateString()}</p>
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit"><img src="/calendar-close.svg" alt="" className="h-[28px] w-auto" />{new Date(listing.fields.closeDate).toLocaleDateString()}</p>
      </div>
    </motion.div>
  )
}
