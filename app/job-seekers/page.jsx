"use client";

import Link from "next/link";

import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Quote from "../Quote";

export default function JobSeekersPage() {
  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger)

    gsap.from('#hero-image', {
      scrollTrigger: '#hero-image',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#hero-image', {
      scrollTrigger: '#hero-image',
      opacity: 1,
      y: 0,
    })
    gsap.from('#hero', {
      scrollTrigger: '#hero',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#hero', {
      scrollTrigger: '#hero',
      opacity: 1,
      y: 0,
    })

    gsap.from('#help-h2', {
      scrollTrigger: '#help-h2',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#help-h2', {
      scrollTrigger: '#help-h2',
      opacity: 1,
      y: 0,
    })
    gsap.from('#resume-building', {
      scrollTrigger: '#resume-building',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#resume-building', {
      scrollTrigger: '#resume-building',
      opacity: 1,
      y: 0,
    })
    gsap.from('#digital-networking', {
      scrollTrigger: '#digital-networking',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#digital-networking', {
      scrollTrigger: '#digital-networking',
      opacity: 1,
      y: 0,
    })
    gsap.from('#interviewing-tactics', {
      scrollTrigger: '#interviewing-tactics',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#interviewing-tactics', {
      scrollTrigger: '#interviewing-tactics',
      opacity: 1,
      y: 0,
    })
    gsap.from('#job-offer-counsel', {
      scrollTrigger: '#job-offer-counsel',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#job-offer-counsel', {
      scrollTrigger: '#job-offer-counsel',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#resume-heading', {
      scrollTrigger: '#resume-heading',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#resume-heading', {
      scrollTrigger: '#resume-heading',
      opacity: 1,
      y: 0,
    })
    gsap.from('#set-the-stage', {
      scrollTrigger: '#set-the-stage',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#set-the-stage', {
      scrollTrigger: '#set-the-stage',
      opacity: 1,
      y: 0,
    })
    gsap.from('#why-practice-matters', {
      scrollTrigger: '#why-practice-matters',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#why-practice-matters', {
      scrollTrigger: '#why-practice-matters',
      opacity: 1,
      y: 0,
    })
    gsap.from('#resume-footer', {
      scrollTrigger: '#resume-footer',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#resume-footer', {
      scrollTrigger: '#resume-footer',
      opacity: 1,
      y: 0,
    })
    gsap.from('#resume-center-line', {
      scrollTrigger: '#resume-center-line',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#resume-center-line', {
      scrollTrigger: '#resume-center-line',
      opacity: 1,
      y: 0,
    })
    gsap.from('#network-heading', {
      scrollTrigger: '#network-heading',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#network-heading', {
      scrollTrigger: '#network-heading',
      opacity: 1,
      y: 0,
    })
    gsap.from('#network-footer', {
      scrollTrigger: '#network-footer',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#network-footer', {
      scrollTrigger: '#network-footer',
      opacity: 1,
      y: 0,
    })
    gsap.from('#network-center-line', {
      scrollTrigger: '#network-center-line',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#network-center-line', {
      scrollTrigger: '#network-center-line',
      opacity: 1,
      y: 0,
    })
    gsap.from('#build-new-connections', {
      scrollTrigger: '#build-new-connections',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#build-new-connections', {
      scrollTrigger: '#build-new-connections',
      opacity: 1,
      y: 0,
    })
    gsap.from('#who-you-know', {
      scrollTrigger: '#who-you-know',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#who-you-know', {
      scrollTrigger: '#who-you-know',
      opacity: 1,
      y: 0,
    })

    gsap.from('#offer-heading', {
      scrollTrigger: '#offer-heading',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#offer-heading', {
      scrollTrigger: '#offer-heading',
      opacity: 1,
      y: 0,
    })
    gsap.from('#offer-footer', {
      scrollTrigger: '#offer-footer',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#offer-footer', {
      scrollTrigger: '#offer-footer',
      opacity: 1,
      y: 0,
    })
    gsap.from('#offer-center-line', {
      scrollTrigger: '#offer-center-line',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#offer-center-line', {
      scrollTrigger: '#offer-center-line',
      opacity: 1,
      y: 0,
    })
    gsap.from('#establish-your-terms', {
      scrollTrigger: '#establish-your-terms',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#establish-your-terms', {
      scrollTrigger: '#establish-your-terms',
      opacity: 1,
      y: 0,
    })
    gsap.from('#approach', {
      scrollTrigger: '#approach',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#approach', {
      scrollTrigger: '#approach',
      opacity: 1,
      y: 0,
    })

    gsap.from('#interview-center-line', {
      scrollTrigger: '#interview-center-line',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#interview-center-line', {
      scrollTrigger: '#interview-center-line',
      opacity: 1,
      y: 0,
    })
    gsap.from('#interview-heading', {
      scrollTrigger: '#interview-heading',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#interview-heading', {
      scrollTrigger: '#interview-heading',
      opacity: 1,
      y: 0,
    })
    gsap.from('#interview-footer', {
      scrollTrigger: '#interview-footer',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#interview-footer', {
      scrollTrigger: '#interview-footer',
      opacity: 1,
      y: 0,
    })

    gsap.from('#set-the-stage-0', {
      scrollTrigger: '#set-the-stage-0',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#set-the-stage-0', {
      scrollTrigger: '#set-the-stage-0',
      opacity: 1,
      y: 0,
    })

    gsap.from('#little-help', {
      scrollTrigger: '#little-help',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#little-help', {
      scrollTrigger: '#little-help',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#gemstone-h2', {
      scrollTrigger: '#gemstone-h2',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#gemstone-h2', {
      scrollTrigger: '#gemstone-h2',
      opacity: 1,
      y: 0,
    })

    gsap.from('#gemstone-p', {
      scrollTrigger: '#gemstone-p',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#gemstone-p', {
      scrollTrigger: '#gemstone-p',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#emerald', {
      scrollTrigger: '#emerald',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#emerald', {
      scrollTrigger: '#emerald',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#sapphire', {
      scrollTrigger: '#sapphire',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#sapphire', {
      scrollTrigger: '#sapphire',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#black-diamond', {
      scrollTrigger: '#black-diamond',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#black-diamond', {
      scrollTrigger: '#black-diamond',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#services-h2', {
      scrollTrigger: '#services-h2',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#services-h2', {
      scrollTrigger: '#services-h2',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#services-p', {
      scrollTrigger: '#services-p',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#services-p', {
      scrollTrigger: '#services-p',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#find-job', {
      scrollTrigger: '#find-job',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#find-job', {
      scrollTrigger: '#find-job',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#linkedin-enhancement', {
      scrollTrigger: '#linkedin-enhancement',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#linkedin-enhancement', {
      scrollTrigger: '#linkedin-enhancement',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#mock-interview', {
      scrollTrigger: '#mock-interview',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#mock-interview', {
      scrollTrigger: '#mock-interview',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#job-offer-consult', {
      scrollTrigger: '#job-offer-consult',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#job-offer-consult', {
      scrollTrigger: '#job-offer-consult',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#ats-analysis', {
      scrollTrigger: '#ats-analysis',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#ats-analysis', {
      scrollTrigger: '#ats-analysis',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#hidden-gem-spotlight', {
      scrollTrigger: '#hidden-gem-spotlight',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#hidden-gem-spotlight', {
      scrollTrigger: '#hidden-gem-spotlight',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#testimonials-h2', {
      scrollTrigger: '#testimonials-h2',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#testimonials-h2', {
      scrollTrigger: '#testimonials-h2',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#testimonial-1', {
      scrollTrigger: '#testimonial-1',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#testimonial-1', {
      scrollTrigger: '#testimonial-1',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#testimonial-2', {
      scrollTrigger: '#testimonial-2',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#testimonial-2', {
      scrollTrigger: '#testimonial-2',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#testimonial-3', {
      scrollTrigger: '#testimonial-3',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#testimonial-3', {
      scrollTrigger: '#testimonial-3',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#consult-h2', {
      scrollTrigger: '#consult-h2',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#consult-h2', {
      scrollTrigger: '#consult-h2',
      opacity: 1,
      y: 0,
    })
    
    gsap.from('#consult-link', {
      scrollTrigger: '#consult-link',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#consult-link', {
      scrollTrigger: '#consult-link',
      opacity: 1,
      y: 0,
    })
  }, [])

  return (
    <main className="w-screen max-w-[100vw] overflow-x-clip">
      {/* hero */}
      <section className="px-4 py-8 flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 md:max-w-2xl lg:max-w-[1600px] lg:px-16 lg:py-16 items-center mx-auto">
        <img id="hero-image" src="https://media.hirehiddentalent.com/images/job-seekers-page-images/job-seekers-hero" alt="" />
        <div id="hero" className="bg-[#0a0a0a] text-white px-6 py-10 lg:px-12 lg:py-16 flex flex-col items-center gap-8 rounded-[20px] max-w-7xl mx-auto w-full">
          <h1 className="text-4xl lg:text-[42px] text-center">Find Your <span className="text-hidden-teal-dark">Tribe</span></h1>
          <p className="text-justify">
            We are in an age where our work is so much more than hitting that 9-5 mark every day for 40 years. 
            You want to wake up excited to go to work and spend your working hours making a difference in things you care about. 
            You certainly don't want to waste your talent at a company that doesn't fulfill you, or even worse, appreciate you. 
            At Hidden Talent, we partner with companies across the most desirable industries, 
            giving you a first-look at positions that not only elevate your career but match your values. 
            Through our supportive expertise, you can develop the necessary tools and skills to stand out from the crowd. 
            If you've been waiting for the right time to make a move, we can give you the guidance you need to take the leap.
          </p>
          <Link 
            href="/contact" 
            className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#ffffff] hover:to-[#ffffff] hover:text-hidden-teal border border-[#0a0a0a] hover:border-hidden-teal text-center rounded-full py-5 uppercase font-semibold text-lg text-white px-12"
          >
            Learn More
          </Link>
        </div>
      </section>
      {/* gemstone packages */}
      <section className="px-4 py-8 md:px-8 lg:py-16 grid lg:grid-cols-3 justify-center justify-items-center gap-6 sm:gap-12 max-w-[1536px] mx-auto">
        <h2 id="gemstone-h2" className="text-[29px] lg:text-[42px] text-center border-2 border-hidden-teal rounded-[20px] px-4 py-6 w-full lg:w-fit lg:px-14 lg:col-span-3"><span className="text-hidden-teal">Gemstone</span> Packages</h2>
        <p id="gemstone-p" className="max-w-[90ch] text-justify lg:col-span-3">
          Take advantage of our packaged job seeker services and get support every step of the way. 
          From building your resume to preparing for an interview, Hidden Talent packages are designed to help you land your dream job. 
          Through our guidance and support, you can develop strategies and skills to progress your career.
        </p>
        {/* emerald card */}
        <div id="emerald" className="border-4 border-[#15B28C] rounded-[20px] max-w-md overflow-hidden">
          {/* card header */}
          <div className="bg-[#15B28C] text-white flex justify-between px-4 py-2.5 md:p-8">
            <img src="/diamond-white.svg" alt="" width="32" className="md:w-[52px]" />
            <div className="grid justify-items-center">
              <h3 className="font-medium text-2xl md:text-3xl leading-normal">Emerald</h3>
              <span className="font-[Prompt] font-medium text-3xl md:text-[42px] leading-normal">$100</span>
            </div>
            <img src="/diamond-white.svg" alt="" width="32" className="md:w-[52px]" />
          </div>
          {/* card body */}
          <div className="px-4 py-4 md:p-8 md:text-xl">
            <ul className="grid gap-6 md:leading-[35px]">
              <li className="grid gap-2.5">
                <span className="flex gap-2.5 items-center"><img src="/diamond-emerald.svg" alt="" width="24" className="md:w-8" /> 30 Minute Consultation</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Resume review and best practices</li>
                  <li>How to market and sell yourself</li>
                </ul>
              </li>
              <li>
                <span className="flex gap-2.5 items-center"><img src="/diamond-emerald.svg" alt="" width="24" className="md:w-8" /> Resume Examples</span>
              </li>
              <li>
                <span className="flex gap-2.5 items-center"><img src="/diamond-emerald.svg" alt="" width="24" className="md:w-8" /> Updated Resume Review</span>
              </li>
              <li className="grid gap-2">
                <span className="flex gap-2.5"><img src="/diamond-emerald.svg" alt="" width="24" className="md:w-8" /> Career Search Tactics</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Identify the right job for you</li>
                  <li>Discover your dream job</li>
                </ul>
              </li>
              <li className="grid gap-2">
                <span className="flex gap-2.5 items-center"><img src="/diamond-emerald.svg" alt="" width="24" className="md:w-8" /> Hidden Gem Support Group</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Meet twice a month to share ideas and strategies</li>
                  <li>Support and encouragement</li>
                </ul>
              </li>
              <li className="grid gap-2 text-[#B3B3B3]">
                <span className="flex gap-2.5 items-center"><img src="/diamond-gray.svg" alt="" width="24" className="md:w-8" /> LinkedIn Enhancement</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Build your profile</li>
                  <li>Leverage and build your network</li>
                </ul>
              </li>
              <li className="grid gap-2 text-[#B3B3B3]">
                <span className="flex gap-2.5 items-center"><img src="/diamond-gray.svg" alt="" width="24" className="md:w-8" /> Interview Tactics</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Prepare for an interview</li>
                  <li>Stand out from the crowd</li>
                </ul>
              </li>
              <li className="text-[#B3B3B3]">
                <span className="flex gap-2.5 items-center"><img src="/diamond-gray.svg" alt="" width="24" className="md:w-8" /> 30 Minute Mock Interview</span>
              </li>
              <li className="grid gap-2 text-[#B3B3B3]">
                <span className="flex gap-2.5 items-center"><img src="/diamond-gray.svg" alt="" width="24" className="md:w-8" /> Job Offer Consultation</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Review of offer letter</li>
                  <li>Compensation negotiation</li>
                </ul>
              </li>
              <li className="grid gap-2 text-[#B3B3B3]">
                <span className="flex gap-2.5 items-center"><img src="/diamond-gray.svg" alt="" width="24" className="md:w-8" /> Hidden Gem Spotlight</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Creative spotlights on Hidden Talent social channels </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* sapphire card */}
        <div id="sapphire" className="border-4 border-hidden-teal rounded-[20px] max-w-md overflow-hidden">
          {/* card header */}
          <div className="bg-hidden-teal text-white flex justify-between px-4 py-2.5 md:p-8">
            <img src="/diamond-white.svg" alt="" width="32" className="md:w-[52px]" />
            <div className="grid justify-items-center">
              <h3 className="font-medium text-2xl md:text-3xl leading-normal">Sapphire</h3>
              <span className="font-[Prompt] font-medium text-3xl md:text-[42px] leading-normal">$175</span>
            </div>
            <img src="/diamond-white.svg" alt="" width="32" className="md:w-[52px]" />
          </div>
          {/* card body */}
          <div className="px-4 py-4 md:p-8 md:text-xl">
            <ul className="grid gap-6 md:leading-[35px]">
              <li className="grid gap-2.5">
                <span className="flex gap-2.5 items-center"><img src="/diamond-sapphire.svg" alt="" width="24" className="md:w-8" /> 30 Minute Consultation</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Resume review and best practices</li>
                  <li>How to market and sell yourself</li>
                </ul>
              </li>
              <li>
                <span className="flex gap-2.5 items-center"><img src="/diamond-sapphire.svg" alt="" width="24" className="md:w-8" /> Resume Examples</span>
              </li>
              <li>
                <span className="flex gap-2.5 items-center"><img src="/diamond-sapphire.svg" alt="" width="24" className="md:w-8" /> Updated Resume Review</span>
              </li>
              <li className="grid gap-2">
                <span className="flex gap-2.5"><img src="/diamond-sapphire.svg" alt="" width="24" className="md:w-8" /> Career Search Tactics</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Identify the right job for you</li>
                  <li>Discover your dream job</li>
                </ul>
              </li>
              <li className="grid gap-2">
                <span className="flex gap-2.5 items-center"><img src="/diamond-sapphire.svg" alt="" width="24" className="md:w-8" /> Hidden Gem Support Group</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Meet twice a month to share ideas and strategies</li>
                  <li>Support and encouragement</li>
                </ul>
              </li>
              <li className="grid gap-2">
                <span className="flex gap-2.5 items-center"><img src="/diamond-sapphire.svg" alt="" width="24" className="md:w-8" /> LinkedIn Enhancement</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Build your profile</li>
                  <li>Leverage and build your network</li>
                </ul>
              </li>
              <li className="grid gap-2">
                <span className="flex gap-2.5 items-center"><img src="/diamond-sapphire.svg" alt="" width="24" className="md:w-8" /> Interview Tactics</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Prepare for an interview</li>
                  <li>Stand out from the crowd</li>
                </ul>
              </li>
              <li className="text-[#B3B3B3]">
                <span className="flex gap-2.5 items-center"><img src="/diamond-gray.svg" alt="" width="24" className="md:w-8" /> 30 Minute Mock Interview</span>
              </li>
              <li className="grid gap-2 text-[#B3B3B3]">
                <span className="flex gap-2.5 items-center"><img src="/diamond-gray.svg" alt="" width="24" className="md:w-8" /> Job Offer Consultation</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Review of offer letter</li>
                  <li>Compensation negotiation</li>
                </ul>
              </li>
              <li className="grid gap-2 text-[#B3B3B3]">
                <span className="flex gap-2.5 items-center"><img src="/diamond-gray.svg" alt="" width="24" className="md:w-8" /> Hidden Gem Spotlight</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Creative spotlights on Hidden Talent social channels </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* black diamond card */}
        <div id="black-diamond" className="border-4 border-[#262626] rounded-[20px] max-w-md overflow-hidden">
          {/* card header */}
          <div className="bg-[#262626] text-white flex justify-between px-4 py-2.5 md:p-8">
            <img src="/diamond-white.svg" alt="" width="32" className="md:w-[52px]" />
            <div className="grid justify-items-center">
              <h3 className="font-medium text-2xl md:text-3xl leading-normal">Black Diamond</h3>
              <span className="font-[Prompt] font-medium text-3xl md:text-[42px] leading-normal">$250</span>
            </div>
            <img src="/diamond-white.svg" alt="" width="32" className="md:w-[52px]" />
          </div>
          {/* card body */}
          <div className="px-4 py-4 md:p-8 md:text-xl">
            <ul className="grid gap-6 md:leading-[35px]">
              <li className="grid gap-2.5">
                <span className="flex gap-2.5 items-center"><img src="/diamond-black.svg" alt="" width="24" className="md:w-8" /> 30 Minute Consultation</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Resume review and best practices</li>
                  <li>How to market and sell yourself</li>
                </ul>
              </li>
              <li>
                <span className="flex gap-2.5 items-center"><img src="/diamond-black.svg" alt="" width="24" className="md:w-8" /> Resume Examples</span>
              </li>
              <li>
                <span className="flex gap-2.5 items-center"><img src="/diamond-black.svg" alt="" width="24" className="md:w-8" /> Updated Resume Review</span>
              </li>
              <li className="grid gap-2">
                <span className="flex gap-2.5"><img src="/diamond-black.svg" alt="" width="24" className="md:w-8" /> Career Search Tactics</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Identify the right job for you</li>
                  <li>Discover your dream job</li>
                </ul>
              </li>
              <li className="grid gap-2">
                <span className="flex gap-2.5 items-center"><img src="/diamond-black.svg" alt="" width="24" className="md:w-8" /> Hidden Gem Support Group</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Meet twice a month to share ideas and strategies</li>
                  <li>Support and encouragement</li>
                </ul>
              </li>
              <li className="grid gap-2">
                <span className="flex gap-2.5 items-center"><img src="/diamond-black.svg" alt="" width="24" className="md:w-8" /> LinkedIn Enhancement</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Build your profile</li>
                  <li>Leverage and build your network</li>
                </ul>
              </li>
              <li className="grid gap-2">
                <span className="flex gap-2.5 items-center"><img src="/diamond-black.svg" alt="" width="24" className="md:w-8" /> Interview Tactics</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Prepare for an interview</li>
                  <li>Stand out from the crowd</li>
                </ul>
              </li>
              <li className="text">
                <span className="flex gap-2.5 items-center"><img src="/diamond-black.svg" alt="" width="24" className="md:w-8" /> 30 Minute Mock Interview</span>
              </li>
              <li className="grid gap-2">
                <span className="flex gap-2.5 items-center"><img src="/diamond-black.svg" alt="" width="24" className="md:w-8" /> Job Offer Consultation</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Review of offer letter</li>
                  <li>Compensation negotiation</li>
                </ul>
              </li>
              <li className="grid gap-2">
                <span className="flex gap-2.5 items-center"><img src="/diamond-black.svg" alt="" width="24" className="md:w-8" /> Hidden Gem Spotlight</span>
                <ul className="list-disc list-inside pl-4">
                  <li>Creative spotlights on Hidden Talent social channels </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="px-4 py-8 md:px-8 lg:py-16 grid lg:grid-cols-3 md:grid-cols-2 lg:flex lg:flex-wrap justify-center justify-items-center gap-12 sm:gap-12 lg:gap-16 max-w-[1280px] mx-auto">
        <h2 id="services-h2" className="text-[29px] lg:text-[42px] text-center border-2 border-hidden-teal rounded-[20px] px-4 py-6 w-full lg:w-fit lg:px-14 md:col-span-2 lg:col-span-3">
          <span className="text-hidden-teal">À La Carte</span> Services
        </h2>
        <p id="services-p" className="max-w-[90ch] text-justify md:col-span-2 lg:col-span-3">
          Searching for your next career can be overwhelming, especially if you have been out of the job market for a while. 
          With our a la carte job seeker services, you can get the focused help you need where it counts. 
          Even if you are confident in your resume or interviewing skills, it never hurts to get a professional review to really stand out from the crowd.
        </p>
        <div id="find-job" className="grid justify-items-center gap-2.5 leading-normal max-w-[350px]">
          <img src="/find-job.svg" alt="" width="120" className="ml-6" />
          <h3 className="text-2xl font-normal">Find Me a Job</h3>
          <p className="text-center">
            Receive 10 job postings aligned with your qualifications and interests.
          </p>
          <p className="text-3xl text-hidden-teal font-medium font-[Prompt]">$150</p>
        </div>
        <div id="linkedin-enhancement" className="grid justify-items-center gap-2.5 leading-normal max-w-[350px]">
          <img src="/digital-networking.svg" alt="" width="120" />
          <h3 className="text-2xl font-normal">LinkedIn Enhancement</h3>
          <p className="text-center">
            Build your profile and learn how to leverage and build your network.
          </p>
          <p className="text-3xl text-hidden-teal font-medium font-[Prompt]">$100</p>
        </div>
        <div id="mock-interview" className="grid justify-items-center gap-2.5 leading-normal max-w-[350px]">
          <img src="/interview-tactics.svg" alt="" width="132" />
          <h3 className="text-2xl font-normal">30 Min. Mock Interview</h3>
          <p className="text-center">
            Realistic interview to prepare you for the real one.
          </p>
          <p className="text-3xl text-hidden-teal font-medium font-[Prompt]">$100</p>
        </div>
        <div id="job-offer-consult" className="grid justify-items-center gap-2.5 leading-normal max-w-[350px]">
          <img src="/job-offer-counsel.svg" alt="" width="89" />
          <h3 className="text-2xl font-normal">Job Offer Consult</h3>
          <p className="text-center">
            Review of the offer and negotiation of compensation and benefits.
          </p>
          <p className="text-3xl text-hidden-teal font-medium font-[Prompt]">$50</p>
        </div>
        <div id="ats-analysis" className="grid justify-items-center gap-2.5 leading-normal max-w-[350px] md:col-span-2 lg:col-span-1">
          <img src="/ats-analysis.svg" alt="" width="124" />
          <h3 className="text-2xl font-normal">ATS Analysis</h3>
          <p className="text-center">
            A full scan and report of your resume, strength, and barriers. 
          </p>
          <p className="text-3xl text-hidden-teal font-medium font-[Prompt]">$75</p>
        </div>
        <div id="hidden-gem-spotlight" className="grid justify-items-center gap-2.5 leading-normal max-w-[350px] md:col-span-2 lg:col-span-1">
          <img src="/diamond-hidden-teal.svg" alt="" width="124" />
          <h3 className="text-2xl font-normal">Hidden Gem Spotlight</h3>
          <p className="text-center">
            Be in the Hidden Talent spotlight with creative social media representation. 
          </p>
          <p className="text-3xl text-hidden-teal font-medium font-[Prompt]">$75</p>
        </div>
      </section>
      {/* testimonials */}
      <section className="px-4 py-8 md:px-8 lg:py-16 flex flex-col lg:grid lg:grid-cols-3 items-center justify-center justify-items-center gap-6 sm:gap-16 2xl:gap-32 max-w-[1550px] mx-auto">
        <h2 id="testimonials-h2" className="text-[29px] lg:text-[42px] text-center border-2 border-hidden-teal rounded-[20px] px-4 py-6 w-full lg:w-fit lg:px-14 md:col-span-2 lg:col-span-3 mb-8">
          Hear From Our<span className="text-hidden-teal"> Hidden Gems</span>
        </h2>
        <div id="testimonial-1" className="p-2.5 border-2 border-hidden-teal rounded-[20px] relative max-w-[450px] w-full">
          <img src="/employer-testimonial-man-1.svg"  alt="" width="116" className="absolute -left-[70px] top-[calc(50%-200px)]" />
          <div className="p-12 grid gap-2.5 text-hidden-teal border-2 rounded-[20px] border-hidden">
            <p className="text-lg leading-normal text-center">
              Abel provided great counsel and professional advice to me, including assisting me in improving my resume, 
              providing excellent interviewing tips, and sharing various professional resources to ensure success and build up my confidence. 
              Thanks to Abel's top-tier quality service, I was able to secure a job offer within weeks and I would highly recommend anyone reading this to reach out to him. 
              Abel is the real deal.
            </p>
            <p className="text-right italic">
              Duke Trinh
            </p>
          </div>
        </div>
        <div id="testimonial-2" className="p-2.5 border-2 border-hidden-teal bg-hidden-teal rounded-[20px] relative max-w-[450px]">
          <img src="/employer-testimonial-woman-1.svg"  alt="" width="185" className="absolute -left-[128px] md:-left-[130px] top-[calc(50%-200px)]" />
          <div className="p-12 grid gap-2.5 text-white border-2 rounded-[20px] border-white">
            <p className="text-lg leading-normal text-center">
              From the very beginning, Abel's dedication to providing top-notch service was evident. 
              He possesses a remarkable level of expertise and a genuine commitment to helping others. 
              His guidance and support were instrumental in navigating through various challenges, and his positive attitude made the entire process enjoyable. 
              Abel's professionalism sets a high standard in the industry. His attention to detail, prompt communication, and willingness to go the extra mile 
              truly make him an asset to anyone seeking assistance. He not only meets expectations but consistently exceeds them.
            </p>
            <p className="text-right italic">
              Laura Smith
            </p>
          </div>
        </div>
        <div id="testimonial-1" className="p-2.5 border-2 border-hidden-teal rounded-[20px] relative max-w-[450px]">
          <img src="/employer-testimonial-woman-2.svg"  alt="" width="164" className="absolute -left-[106px] md:-left-[110px] top-[calc(50%-200px)]" />
          <div className="p-12 grid gap-2.5 text-hidden-teal border-2 rounded-[20px] border-hidden">
            <p className="text-lg leading-normal text-center">
              Abel is a goldmine of information! Not only can he provide general guidelines and strategies for finding a job, 
              he really digs deep to discover your true interests and potential to help you find a career and position that will align with you. 
              He was very patient and thorough when reviewing my resume to ensure I had everything covered while keeping it concise and engaging. 
              If you are looking for work, I highly recommend connecting with him for one-off support or investing in one of his job seeker packages. 
              It is well worth it!
            </p>
            <p className="text-right italic">
              Heather Leigh
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 py-8 md:px-8 lg:py-16 grid justify-center justify-items-center gap-6 sm:gap-12 max-w-[1536px] mx-auto">
        <h2 id="consult-h2" className="text-center text-[29px] md:text-[42px]">
          Unsure where to start or what you need most? <br />
          Schedule a <span className="text-hidden-teal">FREE</span> 15 minute consult with us!
        </h2>
        <Link id="consult-link" href="/contact"  className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#ffffff] hover:to-[#ffffff] hover:text-hidden-teal border border-white hover:border-hidden-teal text-center rounded-full py-5 uppercase font-semibold text-lg text-white px-12">
          Schedule Consult
        </Link>
      </section>
      <Quote 
        quote="“The person passionate about what he or she is doing will outwork and outlast the guy motivated solely by making money.”"
        author="Reid Hoffman, Co-founder of LinkedIn"
      />
    </main>
  )
}