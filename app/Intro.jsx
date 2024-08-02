"use client";

import Link from "next/link";

import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

import { useEffect } from "react";

export default function IntroSection() {
  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger);

    gsap.from("#bumper-left", {
      scrollTrigger: "#bumper-left",
      left: -200,
      opacity: 0,
      duration: 0.35,
    });
    gsap.to("#bumper-left", {
      scrollTrigger: "#bumper-left",
      left: 0,
      opacity: 1,
    });

    gsap.from("#bumper-right", {
      scrollTrigger: "#bumper-right",
      left: -200,
      opacity: 0,
      duration: 0.35,
    });
    gsap.to("#bumper-right", {
      scrollTrigger: "#bumper-right",
      left: 0,
      opacity: 1,
    });

    gsap.from("#intro-h1", {
      scrollTrigger: "#intro-h1",
      opacity: 0,
      y: 200,
      duration: 0.35,
    });
    gsap.to("#intro-h1", {
      scrollTrigger: "#intro-h1",
      opacity: 1,
      y: 0,
    });

    gsap.from("#changing-careers", {
      scrollTrigger: "#changing-careers",
      opacity: 0,
      y: 200,
      duration: 0.35,
    });
    gsap.to("#changing-careers", {
      scrollTrigger: "#changing-careers",
      opacity: 1,
      y: 0,
    });

    gsap.from("#hiring-your-team", {
      scrollTrigger: "#hiring-your-team",
      opacity: 0,
      y: 200,
      duration: 0.35,
    });
    gsap.to("#hiring-your-team", {
      scrollTrigger: "#hiring-your-team",
      opacity: 1,
      y: 0,
    });

    gsap.from("#stats", {
      scrollTrigger: "#stats",
      opacity: 0,
      y: 200,
      duration: 0.35,
    });
    gsap.to("#stats", {
      scrollTrigger: "#stats",
      opacity: 1,
      y: 0,
    });

    gsap.from("#start-your-search", {
      scrollTrigger: "#start-your-search",
      opacity: 0,
      y: 200,
      duration: 0.35,
    });
    gsap.to("#start-your-search", {
      scrollTrigger: "#start-your-search",
      opacity: 1,
      y: 0,
    });

    gsap.from("#talent", {
      scrollTrigger: "#talent",
      opacity: 0,
      y: 200,
      duration: 0.35,
    });
    gsap.to("#talent", {
      scrollTrigger: "#talent",
      opacity: 1,
      y: 0,
    });

    gsap.from("#talent-h2", {
      scrollTrigger: "#talent-h2",
      opacity: 0,
      y: 200,
      duration: 0.35,
    });
    gsap.to("#talent-h2", {
      scrollTrigger: "#talent-h2",
      opacity: 1,
      y: 0,
    });

    gsap.from("#areas-h2", {
      scrollTrigger: "#areas-h2",
      opacity: 0,
      y: 200,
      duration: 0.35,
    });
    gsap.to("#areas-h2", {
      scrollTrigger: "#areas-h2",
      opacity: 1,
      y: 0,
    });

    gsap.from("#areas-served", {
      scrollTrigger: "#areas-served",
      opacity: 0,
      y: 200,
      duration: 0.35,
    });
    gsap.to("#areas-served", {
      scrollTrigger: "#areas-served",
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <section className="relative grid grid-cols-[auto_1fr_auto] justify-center justify-items-center items-center justify-content-center mx-auto w-fit lg:w-full">
      <img
        src="/bumper-left.svg"
        id="bumper-left"
        width="24"
        className="hidden lg:block lg:w-10 mt-32 opacity-0"
      />
      <section className="flex flex-col gap-8 lg:gap-16 px-4 py-12 lg:py-16 items-center relative">
        <h1 id="intro-h1" className="text-[29px] md:text-[42px] text-center">
          Delivering <span className="text-hidden-teal">Great People</span> to{" "}
          <span className="text-hidden-teal md:block lg:inline">
            Great Companies
          </span>
        </h1>

        {/* <!-- New Banner Section --> */}
        <div className="flex items-center justify-center bg-[#07A6A2] py-8 w-full rounded-lg">
          <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl px-4">
            <div className="flex flex-col items-center mb-8 md:mb-0 mx-2">
              <span className="mb-2 text-xl">
                <b>ECDVC</b>
              </span>
              <a
                href="https://www.ecdvc.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://hidden-talent-images.s3.amazonaws.com/logos/ECDVC_black+(2).png"
                  alt="ECDVC Logo"
                  className="h-16"
                />
              </a>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0 mx-2">
              <span className="mb-3 text-xl">
                <b>Stack Construction</b>
              </span>
              <a
                href="https://stackconstruction.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://hidden-talent-images.s3.amazonaws.com/logos/Stack_New.png"
                  alt="Stack Logo"
                  className="h-16"
                />
              </a>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0 mx-2">
              <span className="mb-3 text-xl">
                <b>KIT</b>
              </span>
              <a
                href="https://www.kitwest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://hidden-talent-images.s3.amazonaws.com/logos/KIT_new.png"
                  alt="KIT Logo"
                  className="h-16"
                />
              </a>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0 mx-2">
              <span className="mb-3 text-xl">
                <b>Elmore County</b>
              </span>
              <a
                href="https://elmorecounty.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://hidden-talent-images.s3.amazonaws.com/logos/elmore.jpeg"
                  alt="Elmore County Logo"
                  className="h-16"
                />
              </a>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0 mx-2">
              <span className="mb-3 text-xl">
                <b>Agnew Beck</b>
              </span>
              <a
                href="https://agnewbeck.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://hidden-talent-images.s3.amazonaws.com/logos/AB_LOGO.jpg"
                  alt="Agnew Beck Logo"
                  className="h-16"
                />
              </a>
            </div>
          </div>
        </div>

        {/* <div className='flex flex-col gap-8 lg:gap-24 lg:flex-row max-w-[1280px]'>
          <div 
            id="changing-careers" 
            className='relative flex flex-col md:flex-row gap-8  border-2 border-hidden-teal rounded-[50px] p-6 md:p-12 md:mt-12 w-fit mx-auto'
          >
            <p className='order-2 max-w-[50ch] md:pl-24 text-justify'>
              Changing careers is exciting but often overwhelming. You have drive, passion, and expertise that can make a difference in a company, but it is hard to know where to start and how to find engaging work that will be worth making the switch.
            </p>
            <img src="/janitor.svg" alt="" width="182" className='relative justify-center self-center md:absolute md:left-2' />
          </div>
          <div 
            id="hiring-your-team" 
            className='relative flex flex-col md:flex-row gap-8  border-2 border-hidden-teal rounded-[50px] p-6 md:p-12 md:mt-12 w-fit mx-auto'
          >
            <p className='order-2 max-w-[50ch] md:pr-24 text-justify'>
              Hiring your next team member is an opportunity to build upon what you love in your business. You want to find someone that truly matches your company's culture, mission, and values, and you know you have a lot to offer the right candidate.
            </p>
            <img src="/businesswoman.svg" alt="" width="107" className='relative justify-center self-center md:absolute md:right-2' />
          </div>
        </div> */}
        <div
          id="stats"
          className="border-2 border-hidden-teal rounded-[50px] p-6 md:p-12 md:mt-12 w-fit max-w-[1024px] mx-auto flex flex-col gap-8"
        >
          <h2 className="text-xl text-center">
            We bring employees and employers together.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 items-center content-center text-center">
            <div className="grid  gap-4 items-center justify-center justify-items-center lg:h-full">
              <img src="handshake.svg" alt="" width="115" />
              <p className="self-end">
                <span className="block text-hidden-teal text-3xl font-bold">
                  100+
                </span>{" "}
                <span className="block">jobs</span> placed
              </p>
            </div>
            <div className="grid gap-4 items-center lg:h-full justify-items-center">
              <img src="office-buildings.svg" alt="" width="115" />
              <p className="self-end">
                <span className="block text-hidden-teal text-3xl font-bold">
                  5
                </span>{" "}
                <span className="block">industries</span> served
              </p>
            </div>
            <div className="grid gap-4 items-center lg:h-full justify-items-center">
              <img src="networking.svg" alt="" width="115" />
              <p className="self-end">
                <span className="block text-hidden-teal text-3xl font-bold">
                  50
                </span>{" "}
                <span className="block">professionals</span> helped
              </p>
            </div>
            <div className="grid gap-4 items-center lg:h-full justify-items-center">
              <img
                src="experience.svg"
                alt=""
                height="115"
                className="relative left-2.5"
              />
              <p>
                <span className="block text-hidden-teal text-3xl font-bold">
                  10
                </span>{" "}
                <span className="block">years</span> experience
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="grid gap-6 md:px-16">
            <h2
              id="talent-h2"
              className="text-[29px] md:text-[42px] text-center"
            >
              <span className="text-hidden-teal">Talent</span> We Have
              Discovered
            </h2>
            <div
              id="talent"
              className="border border-hidden-teal rounded-[20px] p-5 md:p-6 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-6 max-w-[620px] mx-auto"
            >
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/accountant.svg" alt="" width="25" />
                <span className="text-center">Accountant</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/accounting-assistant.svg" alt="" width="25" />
                <span className="text-center">Accounting Assistant</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/city-clerk.svg" alt="" width="25" />
                <span className="text-center">City Clerk</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/city-treasurer.svg" alt="" width="25" />
                <span className="text-center">City Treasurer</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/hr-director.svg" alt="" width="22" />
                <span className="text-center">Director of Human Resources</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/safety-director.svg" alt="" width="25" />
                <span className="text-center">Director of Safety</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/executive-assistant.svg" alt="" width="17" />
                <span className="text-center">Executive Assistant</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/executive-director.svg" alt="" width="21" />
                <span className="text-center">Executive Director</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/laborer.svg" alt="" width="21" />
                <span className="text-center">Laborer</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/licensed-counselor.svg" alt="" width="44" />
                <span className="text-center">Licensed Counselor</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/pool-service-technician.svg" alt="" width="25" />
                <span className="text-center">Pool Service Technician</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/project-manager.svg" alt="" width="22" />
                <span className="text-center">Project Manager</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/receptionist.svg" alt="" width="27" />
                <span className="text-center">Receptionist</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center">
                <img src="/senior-accountant.svg" alt="" width="27" />
                <span className="text-center">Senior Accountant</span>
              </div>
              <div className="grid gap-2.5 justify-center justify-items-center col-span-2 md:col-span-1">
                <img src="/site-superintendent.svg" alt="" width="25" />
                <span className="text-center">Site Superintendent</span>
              </div>
            </div>
          </div>
          <div id="areas" className="grid gap-6 md:px-16">
            <h2
              id="areas-h2"
              className="text-[29px] md:text-[42px] text-center"
            >
              Where We <span className="text-hidden-teal">Serve</span>
            </h2>
            <img
              id="areas-served"
              src="https://media.hirehiddentalent.com/images/homepage-images/areas-served"
              alt="Alaska, Oregon, Idaho, Montana, Wyoming, Nevada, Utah, Arizona, New Mexico"
            />
          </div>
        </div>
        <p id="start-your-search" className="mt-8">
          <Link
            href="/contact"
            className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#ffffff] hover:to-[#ffffff] hover:text-hidden-teal border border-[#fff] hover:border-hidden-teal text-center rounded-full py-5 uppercase font-semibold text-lg text-white px-12"
          >
            Start your search
          </Link>
        </p>
      </section>
      <img
        src="/bumper-left.svg"
        id="bumper-right"
        width="24"
        className="hidden lg:block lg:w-10 mt-32 opacity-0"
        style={{ transform: "scaleX(-1)" }}
      />
    </section>
  );
}
