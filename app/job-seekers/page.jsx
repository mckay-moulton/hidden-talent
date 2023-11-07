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
      {/* help */}
      <section className="px-4 py-16 md:px-8 md:py-16 lg:px-16 flex flex-col gap-12 md:gap-16 lg:gap-24">
        <h2 id="help-h2" className="text-4xl lg:text-[42px] text-center">Where We Can <span className="text-hidden-teal">Help</span></h2>
        <div className="grid md:grid-cols-2 lg:flex gap-y-16 gap-x-0 lg:gap-x-40 items-center justify-items-center justify-center">
          <div id="resume-building" className="flex flex-col items-center gap-4">
            <img src="/resume.svg" alt="" width="112" />
            <span className="text-xl md:text-2xl font-semibold font-['Prompt']">Resume Building</span>
          </div>
          <div id="digital-networking" className="flex flex-col items-center gap-4">
            <img src="/digital-networking.svg" alt="" width="143" />
            <span className="text-xl md:text-2xl font-semibold font-['Prompt']">Digital Networking</span>
          </div>
          <div id="interviewing-tactics" className="flex flex-col items-center gap-4">
            <img src="/interview-tactics.svg" alt="" width="157" />
            <span className="text-xl md:text-2xl font-semibold font-['Prompt']">Interviewing Tactics</span>
          </div>
          <div id="job-offer-counsel" className="flex flex-col items-center gap-4">
            <img src="/job-offer-counsel.svg" alt="" width="105" />
            <span className="text-xl md:text-2xl font-semibold font-['Prompt']">Job Offer Counsel</span>
          </div>
        </div>
      </section>
      {/* perfect resume */}
      <section className="py-16 flex flex-col items-center gap-12 md:gap-16 lg:gap-24 relative">
        <svg id="resume-center-line" className="absolute left-[calc(50%-1px)] -z-10 h-full">
          <line x1="0" x2="0" y1="0" y2="3500" stroke="#13AAB0" strokeWidth="2px" />
        </svg>
        <div id="resume-heading" className="bg-gradient-to-r from-[#11B0AC] to-[#13A2B2] w-full py-6 lg:py-12 relative">
          <h2 className="text-center text-4xl lg:text-[42px] text-white max-w-[12ch] lg:max-w-none mx-auto">Craft the <br className="lg:hidden" /> Perfect Resume</h2>
          {/* left arrows */}
          <div className="absolute top-[calc(50%-19px)] md:top-[calc(50%-25px)] lg:top-[calc(50%-36px)] flex gap-4 -left-[310px] md:-left-[250px] lg:-left-12">
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
          </div>
          {/* right arrows */}
          <div className="absolute top-[calc(50%-19px)] md:top-[calc(50%-25px)] lg:top-[calc(50%-36px)] flex gap-4 -right-[310px] md:-right-[250px] lg:-right-12">
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
          </div>
        </div>  
        <div id="set-the-stage-0" className="flex flex-col gap-4 md:gap-2 px-8">
          <h3 className="text-2xl md:text-3xl text-center md:text-start md:ml-8 text-hidden-teal bg-white md:w-fit md:self-end lg:-mb-16 2xl:-mb-20 lg:mr-8">Set the Stage</h3>
          <div className="flex flex-col md:flex-row md:items-center max-w-7xl">
            <p className="text-justify border-2 border-hidden-teal p-4 py-8 md:px-8 pb-16 md:pb-8 md:pl-16 lg:p-10 lg:py-16 lg:pl-24 rounded-[20px] bg-white md:order-2">
              Resumes have long been a staple in the hiring process, but their purpose has morphed over the years. 
              Up until recently, resumes were a chronology of prior work history and skills that qualified you for the job. 
              However, in modern times, these types of resumes don't really allow your qualifications to jump off the page, 
              and can lead to you being overlooked for a role even if you are the best fit for it. 
              After all, your resume is only viewed for less than 1 minute on average by a recruiter, 
              so it needs to quickly catch their attention and hold it long enough to showcase how well-suited you are for the position. 
            </p>
            <img src="https://media.hirehiddentalent.com/images/job-seekers-page-images/set-the-stage-0" alt="" className="h-auto mx-auto w-5/6 md:w-[27%] lg:w-1/4 -mt-12 md:mt-0 md:-mr-12 z-50 " />
          </div>
        </div>
        <div id="little-help" className="flex flex-col gap-4 md:gap-2 px-8">
          <h3 className="text-2xl md:text-3xl text-center md:text-start md:ml-8 md:pr-8 text-hidden-teal bg-white md:w-fit md:self-start md:mb-0 lg:-mb-0">A Little Help Goes a Long Way</h3>
          <div className="flex flex-col md:flex-row md:items-center max-w-7xl relative">
          <img src="/little-help.svg" alt="" className="relative h-[250px] -top-12 md:-top-0 w-auto mx-auto order-2 md:order-1 md:h-full md:absolute md:scale-105 lg:scale-[115%] md:-right-28 lg:-right-20" />
            {/* <img src="/little-help.svg" alt="" className="h-auto w-1/4 mx-auto md:w-[230px] lg:w-[230px] -mt-12 md:mt-0 md:-mr-12 lg:-mr-20 md:pb-0 lg:pb-0 z-10 order-2 md:order-2 md:absolute md:right-0" /> */}
            <p className="text-justify bg-hidden-teal p-4 py-8 pb-16 md:px-8 lg:px-16 md:pb-8 md:pr-48 lg:p-10 lg:py-16 lg:pr-48 rounded-[20px] text-white order-1">
              Hidden Talent can help you modernize your resume and stand out from the others in the candidate pool. 
              By making some essential and simple tweaks, you can create a resume that works to your advantage. 
              Resumes are a marketing tool to sell yourself to the companies you want to work for, and by crafting them purposefully, 
              you can seamlessly connect the dots between you and the job you want. The best part? A great resume is often much simpler and shorter than people think. 
              You don't need to be a graphic designer to create a glowing resume. All those artistic bells and whistles are often distracting and frankly unprofessional, 
              which means the recruiter may gloss right over all of the amazing things you can bring to the table.
              <br /><br />
              It is all too common for resumes to be created once and then updated with each new position or promotion. 
              Rather than putting down every new job since 1982, you want to simplify yourself and your qualifications down to the key points. 
              If you're applying for a role with an accounting firm as their Office Manager, 
              you don't need to include your summer job at the local car wash when you were an undergrad. 
              Instead, pick out the experiences that gave you the most relevant experience for that job. 
              It's much more impactful to develop a resume that is truly tailored to the position you are applying for.
            </p>
          </div>
        </div>
        <div id="resume-footer" className="px-8">
          <p className="text-justify border-2 border-hidden-teal p-4 py-8 md:px-8 lg:p-10 lg:py-16 rounded-[20px] bg-white max-w-7xl mx-auto">
            Even though a great resume is simple, that doesn't mean it is always easy. 
            Hidden Talent has the expertise and experience to help you cherry pick your resume so you can always put your best foot forward. 
            We can analyze the job you are applying for and help you build a resume that shows your strengths for that specific role. 
            Together, we can create a resume that really captures who you are.
          </p>
        </div>
      </section>
      {/* nail interview */}
      <section className="py-16 flex flex-col items-center gap-12 md:gap-16 lg:gap-24 relative">
        <svg id="interview-center-line" className="absolute left-[calc(50%-1px)] -z-10 h-full">
          <line x1="0" x2="0" y1="0" y2="3500" stroke="#13AAB0" strokeWidth="2px" />
        </svg>
        <div id="interview-heading" className="bg-gradient-to-r from-[#11B0AC] to-[#13A2B2] w-full py-6 lg:py-12 relative">
          <h2 className="text-center text-4xl lg:text-[42px] text-white max-w-[12ch] lg:max-w-none mx-auto">Nail Your Next Interview <br className="lg:hidden" /></h2>
          {/* left arrows */}
          <div className="absolute top-[calc(50%-19px)] md:top-[calc(50%-25px)] lg:top-[calc(50%-36px)] flex gap-4 -left-[310px] md:-left-[250px] lg:-left-12">
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
          </div>
          {/* right arrows */}
          <div className="absolute top-[calc(50%-19px)] md:top-[calc(50%-25px)] lg:top-[calc(50%-36px)] flex gap-4 -right-[310px] md:-right-[250px] lg:-right-12">
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
          </div>
        </div>  
        <div id="set-the-stage" className="flex flex-col gap-4 md:gap-0 px-8">
          <h3 className="text-2xl md:text-3xl text-center md:text-start md:ml-8 text-hidden-teal bg-white md:w-fit md:self-start md:-mb-2 lg:-mb-[72px] 2xl:-mb-[84px]">Set the Stage</h3>
          <div className="flex flex-col md:flex-row md:items-center max-w-7xl">
            <p className="text-justify border-2 border-hidden-teal p-4 py-8 md:px-8 pb-16 md:pb-8 md:pr-16 lg:p-10 lg:py-16 lg:pr-24 rounded-[20px] bg-white">
              We've all been there in the lobby of an unfamiliar office with sweaty palms and our best outfit on, 
              nervously waiting for an interview. Interviews are often the deciding factor in hiring someone, 
              meaning even if you are the top contender on paper, you likely won't get the job if you bomb the interview. 
              With those stakes, it makes sense that you would feel pressured and anxious waiting to be interviewed,
               but with the right preparation, you can confidently step into any interview.
            </p>
            <img src="https://media.hirehiddentalent.com/images/job-seekers-page-images/set-the-stage" alt="" className="h-auto mx-auto w-5/6 md:w-[27%] lg:w-1/4 -mt-12 md:mt-0 md:-ml-12" />
          </div>
        </div>
        <div id="why-practice-matters" className="flex flex-col gap-4 md:gap-2 px-8">
          <h3 className="text-2xl md:text-3xl text-center md:text-start md:ml-8 md:pr-8 text-hidden-teal bg-white md:w-fit md:self-end md:mb-0 lg:-mb-0">Why Practice Matters</h3>
          <div className="flex flex-col md:flex-row md:items-center max-w-7xl relative">
            {/* <img src="https://media.hirehiddentalent.com/images/job-seekers-page-images/why-practice-matters" alt="" className="h-auto w-1/4 mx-auto md:w-[140px] lg:w-[140px] -mt-12 md:mt-0 md:-mr-12 lg:-mr-20 md:pb-0 lg:pb-0 z-10 order-2 md:order-1 md:absolute" /> */}
            <img src="https://media.hirehiddentalent.com/images/job-seekers-page-images/why-practice-matters" alt="" className="h-[250px] relative -top-12 md:-top-0 w-auto mx-auto order-2 md:order-1 md:h-full md:absolute md:scale-105 lg:scale-[115%] md:-left-[2.5%] lg:left-0" />
            <p className="text-justify bg-hidden-teal p-4 py-8 pb-16 md:px-8 md:pb-8 md:pl-40 lg:p-10 lg:py-16 lg:pl-48 lg:px-16 rounded-[20px] text-white order-1 md:order-2">
              Hidden Talent understands both sides of the interviewing process, giving prospective employees a unique advantage. 
              We can give you insight into what hiring managers are looking for and thinking so you can get into that headspace 
              and answer questions masterfully. Preparing beforehand with our tips and techniques is a sure-fire way to go into 
              your interview with the confidence needed to land the job.
              <br /><br />
              With interviews, practice makes perfect. There isn't a special phrase or exact amount of eye contact that seals the deal during an interview. 
              The only real way to ensure success in the interviewing process is to prepare. 
              We support this essential practice by conducting mock interviews together and roleplaying various questions and responses, 
              as well as nonverbal factors like body language. We also provide different strategies for phone, virtual, and 
              in-person interviews so you can strut your stuff in every format. Interviewing is not a natural phenomenon, 
              which is why it is so critical to take the time to practice before you set foot in your prospective workplace.
            </p>
          </div>
        </div>
        <div id="interview-footer" className="px-8">
          <p className="text-justify border-2 border-hidden-teal p-4 py-8 md:px-8 lg:p-10 lg:py-16 rounded-[20px] bg-white max-w-7xl mx-auto">
            So many jobs are offered based on how well the interview goes, 
            and we want you to be able to tackle every stage with flying colors. 
            Even if you are perfectly confident that you are qualified for the role, 
            it can still take time and commitment to master the art of interviewing. 
            Let's work together on identifying strengths and weaknesses so you can go boldly into any interview ready to wow them.
          </p>
        </div>
      </section>
      {/* network */}
      <section className="py-16 flex flex-col items-center gap-12 md:gap-16 lg:gap-24 relative">
        <svg id="network-center-line" className="absolute left-[calc(50%-1px)] -z-10 h-full">
          <line x1="0" x2="0" y1="0" y2="3500" stroke="#13AAB0" strokeWidth="2px" />
        </svg>
        <div id="network-heading" className="bg-gradient-to-r from-[#11B0AC] to-[#13A2B2] w-full py-6 lg:py-12 relative">
          <h2 className="text-center text-4xl lg:text-[42px] text-white max-w-[12ch] lg:max-w-none mx-auto">Expand Your <br className="lg:hidden" /> Network</h2>
          {/* left arrows */}
          <div className="absolute top-[calc(50%-19px)] md:top-[calc(50%-25px)] lg:top-[calc(50%-36px)] flex gap-4 -left-[310px] md:-left-[250px] lg:-left-12">
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
          </div>
          {/* right arrows */}
          <div className="absolute top-[calc(50%-19px)] md:top-[calc(50%-25px)] lg:top-[calc(50%-36px)] flex gap-4 -right-[310px] md:-right-[250px] lg:-right-12">
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
          </div>
        </div>  
        <div id="build-new-connections" className="flex flex-col gap-4 md:gap-2 px-8">
          <h3 className="text-2xl md:text-3xl text-center md:text-start md:ml-8 text-hidden-teal bg-white md:w-fit md:self-end md:-mb-3 lg:-mb-[70px] lg:mr-8 2xl:-mb-20">Build New Connections</h3>
          <div className="flex flex-col md:flex-row md:items-center max-w-7xl">
            <p className="text-justify border-2 border-hidden-teal p-4 py-8 md:px-8 pb-16 md:pb-8 md:pl-16 lg:p-10 lg:py-16 lg:pl-24 rounded-[20px] bg-white md:order-2">
              We've all been there in the lobby of an unfamiliar office with sweaty palms and our best outfit on, 
              nervously waiting for an interview. Interviews are often the deciding factor in hiring someone, 
              meaning even if you are the top contender on paper, you likely won't get the job if you bomb the interview. 
              With those stakes, it makes sense that you would feel pressured and anxious waiting to be interviewed,
               but with the right preparation, you can confidently step into any interview.
            </p>
            <img src="https://media.hirehiddentalent.com/images/job-seekers-page-images/build-new-connections" alt="" className="h-auto mx-auto w-5/6 md:w-[27%] lg:w-1/4 -mt-12 md:mt-0 md:-mr-12  z-10" />
          </div>
        </div>
        <div id="who-you-know" className="flex flex-col gap-4 md:gap-2 px-8">
          <h3 className="text-2xl md:text-3xl text-center md:text-start md:ml-8 md:pr-8 text-hidden-teal bg-white md:w-fit md:self-start md:mb-0 lg:-mb-0">Who You Know Makes a Difference</h3>
          <div className="flex flex-col md:flex-row md:items-center max-w-7xl">
            <img src="/who-you-know.svg" alt="" className="h-[250px] w-auto mx-auto relative -top-12 md:-top-0 order-2 md:order-1 md:h-full md:absolute md:scale-105 lg:scale-[115%] md:-right-12 lg:-right-4" />
            {/* <img src="/who-you-know.svg" alt="" className="h-auto w-1/4 mx-auto md:w-[184px] lg:w-[180px] -mt-12 md:mt-0 md:-ml-12 lg:-ml-16 md:pb-0 lg:pb-0 z-10 order-2 md:order-2 md:absolute md:right-0" /> */}
            <p className="text-justify bg-hidden-teal p-4 py-8 pb-16 md:px-8 md:pb-8 md:pr-48 lg:p-10 lg:py-16 lg:pr-48 lg:px-16 rounded-[20px] text-white order-1 md:order-1">
              Hidden Talent understands how to use social media and digital networking effectively to grow your reach and opportunities. 
              LinkedIn is the leading space for professionals to connect with each other online, and is much more than just superficial posts. 
              This platform has capitalized on the value of building a presence that others will discover and want to connect with. 
              We can not only help you get started on LinkedIn, but create a polished profile that will attract the right interest. 
              If you aren't putting yourself out there where you can be seen by potential employers, then you might miss opportunities that would be right up your alley.
              <br /><br />
              Even people that have had LinkedIn profiles for years may still be missing out on their true potential in digital networking. 
              Being on social media as a professional goes beyond simply existing online. To successfully expand your network, 
              you have to be active and present on these platforms by purposefully and proactively connecting with people in the industries 
              or communities you are looking to grow into. Even further, you have to develop your own personal brand that will speak to the 
              individuals that you really want to get to know and potentially work with one day. You may be surprised that the best opportunities 
              are not the ones you apply for, but the ones people reach out to you about online.
            </p>
          </div>
        </div>
        <div id="network-footer" className="px-8">
          <p className="text-justify border-2 border-hidden-teal p-4 py-8 md:px-8 lg:p-10 lg:py-16 rounded-[20px] bg-white max-w-7xl mx-auto">
            Putting yourself out there can be scary, but in the long run, it can pay off immensely. 
            With our support, you can establish a strong personal brand online and develop powerful connections. 
            Connect with us and see how we can help you open yourself up to even more opportunities in digital spaces like LinkedIn.
          </p>
        </div>
      </section>
      {/* job offer */}
      <section className="py-16 flex flex-col items-center gap-12 md:gap-16 lg:gap-24 relative">
        <svg id="offer-center-line" className="absolute left-[calc(50%-1px)] -z-10 h-full">
          <line x1="0" x2="0" y1="0" y2="4000" stroke="#13AAB0" strokeWidth="2px" />
        </svg>
        <div id="offer-heading" className="bg-gradient-to-r from-[#11B0AC] to-[#13A2B2] w-full py-6 lg:py-12 relative">
          <h2 className="text-center text-4xl lg:text-[42px] text-white max-w-[12ch] lg:max-w-none mx-auto">Attain the Best<br className="lg:hidden" /> Job Offer</h2>
          {/* left arrows */}
          <div className="absolute top-[calc(50%-19px)] md:top-[calc(50%-25px)] lg:top-[calc(50%-36px)] flex gap-4 -left-[310px] md:-left-[250px] lg:-left-12">
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20" />
          </div>
          {/* right arrows */}
          <div className="absolute top-[calc(50%-19px)] md:top-[calc(50%-25px)] lg:top-[calc(50%-36px)] flex gap-4 -right-[310px] md:-right-[250px] lg:-right-12">
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
            <img src="arrow-outline-right.svg" alt="" width="48" className="md:w-16 lg:w-20 rotate-180" />
          </div>
        </div>  
        <div id="establish-your-terms" className="flex flex-col gap-4 md:gap-2 px-8">
          <h3 className="text-2xl md:text-3xl text-center md:text-start md:ml-8 text-hidden-teal bg-white md:w-fit md:self-start lg:-mb-16 2xl:-mb-20">Establish Your Terms</h3>
          <div className="flex flex-col md:flex-row md:items-center max-w-7xl">
            <p className="text-justify border-2 border-hidden-teal p-4 py-8 md:px-8 pb-16 md:pb-8 md:pr-16 lg:p-10 lg:py-16 lg:pr-24 rounded-[20px] bg-white">
              The call finally comes in: you got the job.
              This is a moment you have been waiting for, and the excitement drowns out everything else. 
              It's very natural to get caught up in the rush of it all and forget some of the things you need 
              in order to make a job switch work for you. Sometimes you may be inclined to accept the terms and 
              ignore the gaps out of eagerness to please or start things off on the right foot. 
              While this isn't a bad thing, you are almost certainly underestimating the leverage and value you 
              have as a newcomer to the company and will ultimately sell yourself short with this mindset.
            </p>
            <img src="https://media.hirehiddentalent.com/images/job-seekers-page-images/establish-your-terms" alt="" className="h-auto mx-auto w-5/6 md:w-[27%] lg:w-1/4 -mt-12 md:mt-0 md:-ml-12  z-10" />
          </div>
        </div>
        <div id="approach" className="flex flex-col gap-4 md:gap-2 px-8">
          <h3 className="text-2xl md:text-3xl text-center md:text-start md:ml-8 md:pr-8 text-hidden-teal bg-white md:w-fit md:self-end md:mb-0 lg:mb-0">It's All in the Approach</h3>
          <div className="flex flex-col md:flex-row md:items-center max-w-7xl">
            <img src="/approach.svg" alt="" className="h-[250px] w-auto mx-auto relative -top-12 md:-top-0 order-2 md:order-1 md:h-full md:absolute md:scale-80 lg:scale-[115%] md:-left-48 lg:-left-36" />
            {/* <img src="/approach.svg" alt="" className="h-auto w-1/2 mx-auto md:w-[275px] lg:w-[275px] -mt-12 md:mt-0 md:-mr-12 lg:-mr-32 md:pb-0 lg:pb-0 z-10 order-2 md:order-1 md:absolute md:-left-16" /> */}
            <p className="text-justify bg-hidden-teal p-4 py-8 pb-16 md:px-8 md:pb-8 md:pl-48 lg:p-10 lg:py-16 lg:pl-48 lg:px-16 rounded-[20px] text-white order-1 md:order-2">
              Hidden Talent understands how tricky or even uncomfortable it can be to navigate a job offer and ask for what you want out of your new position. 
              After all, you have just been on the other side of the table being scrutinized and compared to dozens if not hundreds of other applicants, 
              trying to impress and prove how worthy you are of this role. Once that offer comes in, though, it is essential to switch tactfully from 
              this position into a negotiation mentality. As recruiters ourselves, we have the experience, knowledge, and resources to counsel you on 
              this process and help you identify the areas of the offer that are up for negotiation, all without the risk of losing the opportunity completely.
              <br /><br />
              There are two common mistakes that people make when accepting a job offer. 
              One is accepting all terms and conditions without even thinking about questioning the offer, or in most cases, simply being too afraid to ask. 
              Another is requesting too much for the company to deliver on. Neither of these methods treat the offer as an agreement, which is the true foundation of any job. 
              Two parties, the company and the candidate, come together to determine clear expectations and standards for the role and set the tone for the job going forward. 
              If something is vague in the offer, it could lead to problems down the road, but if you come on too strong, the company could pull the offer and move on to 
              someone more willing to compromise.
            </p>
          </div>
        </div>
        <div id="offer-footer" className="px-8">
          <p className="text-justify border-2 border-hidden-teal p-4 py-8 md:px-8 lg:p-10 lg:py-16 rounded-[20px] bg-white max-w-7xl mx-auto">
            Getting your ideal job offer takes having an honest yet professional conversation with the company, and we can help you navigate this skillfully. 
            Let's talk about what you want out of the job and find the right words to attain all the things you need with your new position without creating 
            bad blood with your new boss.
          </p>
        </div>
      </section>
      <Quote 
        quote="“The person passionate about what he or she is doing will outwork and outlast the guy motivated solely by making money.”"
        author="Reid Hoffman, Co-founder of LinkedIn"
      />
    </main>
  )
}