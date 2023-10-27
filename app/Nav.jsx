"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setScrollY(window.scrollY)

    const navbar = document.querySelector('#navbar')

    document.addEventListener('scroll', event => {
      if (window.scrollY < scrollY) {
        navbar.style.position = "sticky"
        navbar.style.boxShadow = "0 1px 2px 0 #0a0a0a33"
      } else {
        navbar.style.position = "static"
        navbar.style.boxShadow = "0 0 0 0 #0a0a0a33"
        setOpen(false)
      }

      if (window.scrollY === 0) {
        navbar.style.display = 'static'
        navbar.style.boxShadow = "0 0 0 0 #0a0a0a33"
      }
      
      setScrollY(window.scrollY)
    })
  }, [scrollY])

  return (
    <nav id="navbar" className="px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-6 flex justify-between items-center bg-white font-['Prompt'] tracking-[0.0125em] top-0 left-0 z-50">
      <Link href="/">
        <img
          src="/hidden-talent-logo-full-width.png"
          width="180"
          alt="Home"
          className="md:w-48 lg:hidden"
        />
        <img
          src="/hidden-talent-logo-full-width.png"
          width="486"
          height="68"
          alt="Home"
          className="hidden lg:block lg:w-[30vw]"
        />
      </Link>
      <button onClick={() => setOpen(!open)} className="lg:hidden">
        <Image 
          src="/icon_hamburger.svg"
          width="36"
          height="24"
          alt="Menu"
          className="md:w-12"
        />
      </button>
      {open && (
        <div className="lg:hidden absolute bg-white w-4/5 shadow h-screen left-0 top-0 px-4 py-8 flex flex-col gap-8 font-semibold text-xl z-10">
          <Link onClick={() => setOpen(false) } href="/">
            <img
              src="/hidden-talent-logo-full-width.png"
              width="180"
              alt="Home"
            />
          </Link>
          <NavLink onClick={() => setOpen(false) } href="/">Home</NavLink>
          <NavLink onClick={() => setOpen(false) } href="/about">Who We Are</NavLink>
          <NavLink onClick={() => setOpen(false) } href="/employers">For Employers</NavLink>
          <NavLink onClick={() => setOpen(false) } href="/job-seekers">For Job Seekers</NavLink>
          <NavLink onClick={() => setOpen(false) } href="/listings">Listings</NavLink>
          <NavLink onClick={() => setOpen(false) } href="/contact">Contact</NavLink>
        </div>
      )}
      <div className="hidden lg:flex font-semibold lg:gap-6 2xl:gap-12 items-center text-xl">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">Who We Are</NavLink>
        <NavLink href="/employers">For Employers</NavLink>
        <NavLink href="/job-seekers">For Job Seekers</NavLink>
        <NavLink href="/listings">Listings</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

function NavLink({ href = '/', children, ...props }) {
  const pathname = usePathname()
  return (
    <Link 
      href={href}
      style={{
        textDecoration: pathname.endsWith(href) ? 'underline 2px #07A6A2' : '',
        textUnderlineOffset: '4px',
        color: pathname.endsWith(href) ? '#07A6A2' : ''
      }}
      className="underline decoration-2 decoration-transparent hover:decoration-hidden-teal"
      {...props}
    >
      {children}
    </Link>
  )
}
