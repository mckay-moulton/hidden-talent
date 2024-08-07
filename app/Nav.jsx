"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    setScrollY(window.scrollY);

    const navbar = document.querySelector("#navbar");

    document.addEventListener(
      "scroll",
      (event) => {
        if (window.scrollY === 0) {
          navbar.style.display = "static";
          navbar.style.boxShadow = "0 0 0 0 #0a0a0a33";
          return;
        }

        if (Math.abs(window.scrollY - scrollY) > 1) {
          if (window.scrollY < scrollY) {
            navbar.style.position = "sticky";
            navbar.style.boxShadow = "0 1px 2px 0 #0a0a0a33";
            setScrollingUp(true);
          } else {
            navbar.style.position = "static";
            navbar.style.boxShadow = "0 0 0 0 #0a0a0a33";
            setOpen(false);
            setScrollingUp(false);
          }

          setScrollY(window.scrollY);
        }
      },
      { passive: true }
    );
  }, [scrollY]);

  return (
    <>
      {/* {!scrollingUp && (
        <Link href="tel:(208) 994-1830" className="flex gap-2 bg-hidden-teal p-2.5 px-8 rounded-full text-white text-base justify-center w-fit items-center text-center sticky top-4 right-0">
          <img src="telephone.svg" alt="" width="24" className="invert" /> (208) 994-1830
        </Link>
      )} */}
      <nav
        id="navbar"
        className="w-full max-w-[100vw] sticky px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-6 flex justify-between items-center bg-white font-['Prompt'] tracking-[0.0125em] top-0 left-0 z-[100]"
      >
        <Link href="/">
          <img
            src="/hidden-talent-logo-full-width.png"
            width="180"
            alt="Home"
            className="md:w-72 lg:hidden"
          />
          <img
            src="/hidden-talent-logo-full-width.png"
            width="486"
            height="68"
            alt="Home"
            className="hidden lg:block lg:w-[20vw] 2xl:w-[25vw]"
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
            <Link onClick={() => setOpen(false)} href="/">
              <img
                src="/hidden-talent-logo-full-width.png"
                width="180"
                alt="Home"
              />
            </Link>
            {/* <NavLink onClick={() => setOpen(false)} href="/">
              Home
            </NavLink> */}
            <NavLink onClick={() => setOpen(false)} href="/employers">
              Employers
            </NavLink>
            <NavLink onClick={() => setOpen(false)} href="/job-seekers">
              Job Seekers
            </NavLink>
            <NavLink onClick={() => setOpen(false)} href="/listings">
              Job Listings
            </NavLink>
            <NavLink onClick={() => setOpen(false)} href="/talent-pool">
              Talent Pool
            </NavLink>{" "}
            {/* New Link */}
            <NavLink onClick={() => setOpen(false)} href="/about">
              About
            </NavLink>
            <NavLink onClick={() => setOpen(false)} href="/contact">
              Contact
            </NavLink>
            <Link
              href="tel:(208) 994-1830"
              className="flex gap-2 bg-hidden-teal p-2.5 px-8 rounded-full text-white justify-center w-fit"
            >
              <img src="telephone.svg" alt="" width="28" className="invert" />{" "}
              (208) 994-1830
            </Link>
          </div>
        )}
        <div className="hidden lg:flex font-semibold lg:gap-6 2xl:gap-12 items-center text-xl">
          {/* <NavLink href="/">Home</NavLink> */}
          <NavLink href="/employers">Employers</NavLink>
          <NavLink href="/job-seekers">Job Seekers</NavLink>
          <NavLink href="/listings">Job Listings</NavLink>
          <NavLink href="/talent-pool">Talent Pool</NavLink> {/* New Link */}
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          
          {/* Origional button size if it needs reverted */}
          {/* className="flex gap-2 bg-hidden-teal p-3 px-8 rounded-full text-white text-base justify-center w-fit items-center text-center" */}
          <Link
            href="tel:(208) 994-1830"
            className="flex gap-2 bg-hidden-teal p-3 px-4 rounded-full text-white text-base justify-center w-fit items-center text-center"
          >
            {/* <img src="telephone.svg" alt="phone number" width="24" className="invert" />{" "} */}
            <img
              src="telephone.svg"
              alt="phone icon"
              width="20"
              className="invert"
            />{" "}
            (208) 994-1830
          </Link>
        </div>
      </nav>
    </>
  );
}

function NavLink({ href = "/", children, ...props }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      style={{
        textDecoration: pathname.endsWith(href) ? "underline 2px #07A6A2" : "",
        textUnderlineOffset: "4px",
        color: pathname.endsWith(href) ? "#07A6A2" : "",
      }}
      className="underline decoration-2 decoration-transparent hover:decoration-hidden-teal"
      {...props}
    >
      {children}
    </Link>
  );
}
