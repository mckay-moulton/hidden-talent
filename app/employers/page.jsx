"use client"

// export const metadata = {
//   title: 'Uncover Hidden Gems'
// }

import { Square_Peg } from "next/font/google"
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Link from "next/link";
import Quote from "../Quote";

const SquarePeg = Square_Peg({ subsets: ['latin' ], weight: ['400']})

export default function EmployersPage() {
  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger)

    gsap.from('#hero', {
      scrollTrigger: '#hero',
      opacity: 0,
      duration: 0.35,
    })
    gsap.to('#hero', {
      scrollTrigger: '#hero',
      opacity: 1,
    })
    gsap.from('#big-arrow-pc', {
      scrollTrigger: '#big-arrow-pc',
      opacity: 0,
      duration: 0.35,
    })
    gsap.to('#big-arrow-pc', {
      scrollTrigger: '#big-arrow-pc',
      opacity: 1,
    })


    gsap.from('#big-arrow-mobile', {
      scrollTrigger: '#big-arrow-mobile',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#big-arrow-mobile', {
      scrollTrigger: '#big-arrow-mobile',
      opacity: 1,
      y: 0,
    })
    gsap.from('#our-approach', {
      scrollTrigger: '#our-approach',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#our-approach', {
      scrollTrigger: '#our-approach',
      opacity: 1,
      y: 0,
    })
    gsap.from('#center-line', {
      scrollTrigger: '#center-line',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#center-line', {
      scrollTrigger: '#center-line',
      opacity: 1,
      y: 0,
    })

    gsap.from('#step1', {
      scrollTrigger: '#step1',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step1', {
      scrollTrigger: '#step1',
      opacity: 1,
      y: 0,
    })
    gsap.from('#step2', {
      scrollTrigger: '#step2',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step2', {
      scrollTrigger: '#step2',
      opacity: 1,
      y: 0,
    })
    gsap.from('#step3', {
      scrollTrigger: '#step3',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step3', {
      scrollTrigger: '#step3',
      opacity: 1,
      y: 0,
    })
    gsap.from('#step4', {
      scrollTrigger: '#step4',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step4', {
      scrollTrigger: '#step4',
      opacity: 1,
      y: 0,
    })
    gsap.from('#step5', {
      scrollTrigger: '#step5',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step5', {
      scrollTrigger: '#step5',
      opacity: 1,
      y: 0,
    })
    gsap.from('#step6', {
      scrollTrigger: '#step6',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step6', {
      scrollTrigger: '#step6',
      opacity: 1,
      y: 0,
    })
    gsap.from('#step7', {
      scrollTrigger: '#step7',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step7', {
      scrollTrigger: '#step7',
      opacity: 1,
      y: 0,
    })
    gsap.from('#step8', {
      scrollTrigger: '#step8',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step8', {
      scrollTrigger: '#step8',
      opacity: 1,
      y: 0,
    })
    gsap.from('#step9', {
      scrollTrigger: '#step9',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step9', {
      scrollTrigger: '#step9',
      opacity: 1,
      y: 0,
    })
    gsap.from('#step10', {
      scrollTrigger: '#step10',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step10', {
      scrollTrigger: '#step10',
      opacity: 1,
      y: 0,
    })
    gsap.from('#step11', {
      scrollTrigger: '#step11',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step11', {
      scrollTrigger: '#step11',
      opacity: 1,
      y: 0,
    })
    gsap.from('#step12', {
      scrollTrigger: '#step12',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step12', {
      scrollTrigger: '#step12',
      opacity: 1,
      y: 0,
    })
    gsap.from('#step13', {
      scrollTrigger: '#step13',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#step13', {
      scrollTrigger: '#step13',
      opacity: 1,
      y: 0,
    })
    gsap.from('#last-step', {
      scrollTrigger: '#last-step',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#last-step', {
      scrollTrigger: '#last-step',
      opacity: 1,
      y: 0,
    })

    gsap.from('#additional-services', {
      scrollTrigger: '#additional-services',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#additional-services', {
      scrollTrigger: '#additional-services',
      opacity: 1,
      y: 0,
    })
  }, [])

  return (
    <main>
      
      {/* hero */}
      <section className="px-4 py-8 lg:px-16 lg:py-24 pb-0 lg:pb-0 relative flex flex-col gap-16 items-center">
        <div id="hero" className="bg-[#0a0a0a] text-white px-6 py-10 lg:px-12 lg:py-16 flex flex-col gap-8 rounded-[20px] max-w-7xl mx-auto">
          <h1 className="text-3xl text-center">Uncover Hidden Gems</h1>
          <p className="text-justify">
            Hiring and recruiting top talent is a huge task for any company to tackle, regardless of their HR team and staffing needs. 
            Knowing the ins and outs of any given position, job market, and talent pool is no easy feat, 
            which is why Hidden Talent can bring so much value to your business. We offer a full-cycle, 
            white-glove recruitment experience where we plug into your organization and recruit as an extension of you. 
            We get to know your company's values, ideals, needs, and goals to fully understand the right type of talent to fill the role, 
            and strategically market this position to bring you only the best.
          </p>
          <p className="text-justify">
            Through our 12-step recruitment process, you can easily get the professional support you need to attract leaders and innovators to your organization. 
            We value a strong and vibrant company culture just like you do, 
            and we take great pride in carefully addressing every stage of the hiring process to ensure you find someone that is as passionate as you are about what they do. 
            By taking the time to conduct the necessary research, screenings, and dialogues for the role, 
            Hidden Talent finds the diamonds in the rough who are not only qualified for the role but excited to join your team.
          </p>
        </div>
        <img
          id="big-arrow-pc" 
          src="/arrow-big.svg" alt=""
          className="absolute -top-64 -z-10 hidden lg:block lg:w-[1085px] self-center" 
        />
        <div className="relative grid place-items-center lg:-mt-0">
          <img id="big-arrow-mobile" src="/arrow-big.svg" alt="" className="relative -z-10 top-0 left-0 lg:hidden w-full" />
          <h2 id="our-approach" className="text-3xl w-full text-center lg:w-fit  lg:px-32 py-4 lg:py-6 border-2 border-[#03D8D4] rounded-[20px] absolute lg:relative bg-white lg:mt-8">Our Approach</h2>
        </div>
      </section>
      {/* steps */}
      <section className="flex flex-col items-center gap-[82px] lg:gap-24 px-4 py-[82px] lg:pt-[280px] relative max-w-[1600px] mx-auto">
        <svg id="center-line" className="h-full lg:absolute top-0 left-[calc(50%-8px)] hidden lg:block">
          <line x1="0" x2="0" y1="0" y2="5875" stroke="#03d8d4" strokeWidth="4" />
        </svg>
        {/* step 1 */}
        <div id="step1" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-start lg:px-2">
          <div className="bg-[#03D8D4] rounded-[20px] p-2 relative lg:self-start">
            <div className="bg-[#0a0a0a] absolute -top-6 -right-2 lg:-top-8 lg:-right-8 p-4 rounded-full">
              <img src="/step1.svg" width="24" alt="" className="lg:w-10 aspect-square" />
            </div>
            <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
              <svg className="h-[50px]">
                <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
              </svg>
              <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
            </div>
            <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
              <h3 className="text-center">
                Step 1:
                <br />
                Conduct Position Intake Analysis
              </h3>
              <p className="text-justify">
                The first step in the process is centered around getting to know you and your company. 
                It is very difficult to effectively fill a role without understanding the larger picture of your business. 
              </p>
              <p className="text-justify">
                We take the time to go through your organization with you to get a clear idea of your mission, your values, 
                the current team members, the growth of the company, and most importantly, what you are really looking for in your next employee.
              </p>
            </div>
          </div>
          <div className="items-center hidden lg:flex">
            <img src="small-arrow-solid.svg" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="#03d8d4" strokeWidth="4" />
            </svg>
          </div>
        </div>
        {/* step 2 */}
        <div id="step2" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-end lg:px-2 lg:-mt-48">
          <div className="lg:order-2">
            <div className="bg-[#03D8D4] rounded-[20px] p-2 relative lg:self-start lg:order-2">
              <div className="bg-[#0a0a0a] absolute -top-6 -left-2 lg:-top-8 lg:-left-8 p-4 rounded-full">
                <img src="/step2.svg" width="24" alt="" className="lg:w-10 aspect-square" />
              </div>
              <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
                <svg className="h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
              </div>
              <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
                <h3 className="text-center">
                  Step 2:
                  <br />
                  Conduct Simple Compensation Analysis
                </h3>
                <p className="text-justify">
                  Once we have a strong understanding of you and the business, we begin researching the job you are looking to fill. 
                  It can be hard to know how much a position should pay, especially if it's been a while since this seat has been empty at your company. 
                  The reality is that old pay ranges may be outdated in the current job market, 
                  which means you won't be competitive against other employers to get the best of the best. 
                </p>
                <p className="text-justify">
                  We conduct an analysis of the position to see what that role pays for your industry, both in your area and around the country. 
                  With this level of transparency and raw data, 
                  you can make an educated decision about how much you want to pay for the role to attract the right talent to your organization.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-0 px-8 ">
              <div className="grid grid-cols-[auto_auto_1fr] items-start">
                <svg className="w-[50px] h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                  <line x1="2" x2="50" y1="48" y2="48" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <div className="flex pt-[32px] gap-4">
                  <img src="small-arrow-solid.svg" alt="" width="24" className="rotate-180 -mt-0.5" />
                  <img src="diamond.svg" alt="" width="36" />
                </div>
                <div className={SquarePeg.className}>
                  <p className="pt-[32px] ml-2 text-xl lg:text-2xl">
                    Not sure which job level you are searching for? We can pull data for up to 2 levels to help you make the right choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center hidden lg:flex lg:order-1 rotate-180 lg:-ml-4">
            <img src="small-arrow-solid.svg" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="#03d8d4" strokeWidth="4" />
            </svg>
          </div>
        </div>
        {/* step 3 */}
        <div id="step3" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-start lg:px-2 lg:-mt-48">
          <div className="lg:order-1">
            <div className="bg-[#03D8D4] rounded-[20px] p-2 relative lg:self-start">
              <div className="bg-[#0a0a0a] absolute -top-6 -right-2 lg:-top-8 lg:-right-8 p-4 rounded-full">
                <img src="/step3.svg" width="24" alt="" className="lg:w-10 aspect-square" />
              </div>
              <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
                <svg className="h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
              </div>
              <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
                <h3 className="text-center">
                  Step 3:
                  <br />
                  Create Job Announcement & Marketing Flyer
                </h3>
                <p className="text-justify">
                  The next step is to get the word out there that your company is hiring and has an amazing opportunity for the right candidate. 
                  Again, you may have an old job description somewhere from when you listed the job before. 
                  Whether it was 2 months ago or 10 years ago, it is always a good idea to review and revise the job description to make sure it speaks to your current needs, 
                  expectations, and perks. 
                </p>
                <p className="text-justify">
                  We can help craft an enticing job description that really sells your company to job seekers, 
                  and once you are happy with it, we can create digital marketing that you can use to promote the opportunity on your social media, website, and more.
                </p>
              </div>
            </div>
            {/* post script */}
            {/* <div className="flex flex-col gap-0 px-8 absolute">
              <div className="grid grid-cols-[auto_auto_1fr] items-start">
                <svg className="w-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                  <line x1="2" x2="50" y1="48" y2="48" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <div className="flex pt-[32px] gap-4">
                  <img src="small-arrow-solid.svg" alt="" width="24" className="rotate-180 -mt-0.5" />
                  <img src="diamond.svg" alt="" width="36" />
                </div>
                <div className={SquarePeg.className}>
                  <p className="pt-[32px] ml-2 text-xl lg:text-2xl">
                    Not sure which job level you are searching for? We can pull data for up to 2 levels to help you make the right choice.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="items-center hidden lg:flex lg:order-2 lg:-ml-4">
            <img src="small-arrow-solid.svg" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="#03d8d4" strokeWidth="4" />
            </svg>
          </div>
        </div>
        {/* step 4 */}
        <div id="step4" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-end lg:px-2 lg:-mt-48">
          <div className="lg:order-2">
            <div className="bg-[#03D8D4] rounded-[20px] p-2 relative">
              <div className="bg-[#0a0a0a] absolute -top-6 -left-2 lg:-top-8 lg:-left-8 p-4 rounded-full">
                <img src="/step4.svg" width="24" alt="" className="lg:w-10 aspect-square" />
              </div>
              <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
                <svg className="h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
              </div>
              <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
                <h3 className="text-center">
                  Step 4:
                  <br />
                  Recommend Job Boards
                </h3>
                <p className="text-justify">
                  In addition to a competitive salary, attractive job description, and eye-catching graphics, 
                  it is important to know where to put all of this information so the right candidates can find it. 
                  We recommend job boards based on all of these details and an understanding of your particular industry. 
                  In some cases, Craigslist might be the perfect place to post the position, and for other roles, a private job board may be the necessary avenue to take.  
                </p>
                <p className="text-justify">
                  With our tailored recruitment strategy, we can provide you with a roadmap on where to post jobs and attract top talent.
                </p>
              </div>
            </div>
            {/* post script */}
            <div className="flex flex-col gap-0 px-8">
              <div className="grid grid-cols-[auto_auto_1fr] items-start">
                <svg className="w-[50px] h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                  <line x1="2" x2="50" y1="48" y2="48" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <div className="flex pt-[32px] gap-4">
                  <img src="small-arrow-solid.svg" alt="" width="24" className="rotate-180 -mt-0.5" />
                  <img src="diamond.svg" alt="" width="36" />
                </div>
                <div className={SquarePeg.className}>
                  <p className="pt-[32px] ml-2 text-xl lg:text-2xl">
                    We are already connected with job boards that your job can be posted to.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center hidden lg:flex lg:order-1 rotate-180 lg:-ml-4">
            <img src="small-arrow-solid.svg" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="#03d8d4" strokeWidth="4" />
            </svg>
          </div>
        </div>
        {/* step 5 */}
        <div id="step5" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-start lg:px-2 lg:-mt-48">
          <div className="lg:order-1">
            <div className="bg-[#03D8D4] rounded-[20px] p-2 relative">
              <div className="bg-[#0a0a0a] absolute -top-6 -right-2 lg:-top-8 lg:-right-8 p-4 rounded-full">
                <img src="/step5.svg" width="24" alt="" className="lg:w-10 aspect-square" />
              </div>
              <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
                <svg className="h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
              </div>
              <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
                <h3 className="text-center">
                  Step 5:
                  <br />
                  Post to Job Boards
                </h3>
                <p className="text-justify">
                  Now that you know where you want to advertise the open position, it's time to actually put it out there. 
                  We manage the job posting and handle every step so you can trust that everything is taken care of. 
                </p>
                <p className="text-justify">
                  We know time is of the essence, so we get these jobs live online as quickly as possible so you can start collecting applications right away.
                </p>
              </div>
            </div>
            {/* post script */}
            <div className="flex flex-col gap-0 px-8">
              <div className="grid grid-cols-[auto_auto_1fr] items-start">
                
                
                <div className={SquarePeg.className}>
                  <p className="pt-[32px] mr-2 text-xl lg:text-2xl">
                    We use our social media channels to further promote the position within our network and to your accounts too.
                  </p>
                </div>
                <div className="flex pt-[32px] gap-4">
                  <img src="diamond.svg" alt="" width="36" />
                  <img src="small-arrow-solid.svg" alt="" width="24" className="-mt-0.5" />
                </div>
                <svg className="w-[50px] h-[50px]">
                  <line x1="50" x2="50" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                  <line x1="2" x2="50" y1="48" y2="48" stroke="#03d8d4" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </div>
          <div className="items-center hidden lg:flex lg:order-2 lg:-ml-4">
            <img src="small-arrow-solid.svg" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="#03d8d4" strokeWidth="4" />
            </svg>
          </div>
        </div>
        {/* step 6 */}
        <div id="step6" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-end lg:px-2 lg:-mt-48">
          <div className="lg:order-2">
            <div className="bg-[#03D8D4] rounded-[20px] p-2 relative">
              <div className="bg-[#0a0a0a] absolute -top-6 -left-2 lg:-top-8 lg:-left-8 p-4 rounded-full">
                <img src="/step6.svg" width="24" alt="" className="lg:w-10 aspect-square" />
              </div>
              <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
                <svg className="h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
              </div>
              <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
                <h3 className="text-center">
                  Step 6:
                  <br />
                  Create Tailored Interview Questions
                </h3>
                <p className="text-justify">
                  While the job is collecting applicants, it is important to begin preparing for interviews. 
                  Many companies have a few lists of questions that they like to use, but in some instances, these may not be fleshed out enough to get you the information you want. 
                  In order to find the right people, you have to ask the right questions.  
                </p>
                <p className="text-justify">
                  We can help you craft tailored, behavioral-based interview questions that really test the knowledge, skills, and abilities of the candidate. 
                  We also screen for culture, so we look beyond a body with an MBA to really see the personality, attitude, and values within each candidate to see how well they align with your company.
                </p>
              </div>
            </div>
            {/* post script */}
            <div className="flex flex-col gap-0 px-8">
              <div className="grid grid-cols-[auto_auto_1fr] items-start">
                <svg className="w-[50px] h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                  <line x1="2" x2="50" y1="48" y2="48" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <div className="flex pt-[32px] gap-4">
                  <img src="small-arrow-solid.svg" alt="" width="24" className="rotate-180 -mt-0.5" />
                  <img src="diamond.svg" alt="" width="36" />
                </div>
                <div className={SquarePeg.className}>
                  <p className="pt-[32px] ml-2 text-xl lg:text-2xl">
                    We offer unlimited behavioral-based interview questions for you to choose from for the qualities you want.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center hidden lg:flex lg:order-1 rotate-180 lg:-ml-4">
            <img src="small-arrow-solid.svg" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="#03d8d4" strokeWidth="4" />
            </svg>
          </div>
        </div>
        {/* step 7 */}
        <div id="step7" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-start lg:px-2 lg:-mt-48">
          <div className="lg:order-1">
            <div className="bg-[#03D8D4] rounded-[20px] p-2 relative">
              <div className="bg-[#0a0a0a] absolute -top-6 -right-2 lg:-top-8 lg:-right-8 p-4 rounded-full">
                <img src="/step7.svg" width="24" alt="" className="lg:w-10 aspect-square" />
              </div>
              <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
                <svg className="h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
              </div>
              <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
                <h3 className="text-center">
                  Step 7:
                  <br />
                  Paper Pre-Screen Applicants
                </h3>
                <p className="text-justify">
                  As the applications are coming in, we personally take the time to go through each and every applicant thoroughly. 
                  We review their skills, resumes, and other supporting details to give everyone a fair chance and ensure we don't skip over anyone that could be the right fit.  
                </p>
                <p className="text-justify">
                  Trying to manage this as an employer is far too time-consuming, but with our help, 
                  you can get the most value out of your job posting and know with certainty that no talent was hidden in the candidate pool.
                </p>
              </div>
            </div>
            {/* post script */}
            <div className="flex flex-col gap-0 px-8">
              <div className="grid grid-cols-[auto_auto_1fr] items-start">
                <div className={SquarePeg.className}>
                  <p className="pt-[32px] mr-2 text-xl lg:text-2xl">
                    We go through every single applicant, whether it’s 10 or 200, and export all data for a side-by-side comparison. 
                  </p>
                </div>
                <div className="flex pt-[32px] gap-4">
                  <img src="diamond.svg" alt="" width="36" />
                  <img src="small-arrow-solid.svg" alt="" width="24" className="-mt-0.5" />
                </div>
                <svg className="w-[50px] h-[50px]">
                  <line x1="50" x2="50" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                  <line x1="2" x2="50" y1="48" y2="48" stroke="#03d8d4" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </div>
          <div className="items-center hidden lg:flex lg:order-2 lg:-ml-4">
            <img src="small-arrow-solid.svg" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="#03d8d4" strokeWidth="4" />
            </svg>
          </div>
        </div>
        {/* step 8 */}
        <div id="step8" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-end lg:px-2 lg:-mt-48">
          <div className="lg:order-2">
            <div className="bg-[#03D8D4] rounded-[20px] p-2 relative">
              <div className="bg-[#0a0a0a] absolute -top-6 -left-2 lg:-top-8 lg:-left-8 p-4 rounded-full">
                <img src="/step8.svg" width="24" alt="" className="lg:w-10 aspect-square" />
              </div>
              <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
                <svg className="h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
              </div>
              <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
                <h3 className="text-center">
                  Step 8:
                  <br />
                  Conduct All Interviews
                </h3>
                <p className="text-justify">
                  After the applicants have been screened, we start on the interviewing process. 
                  This can vary depending on how you like to conduct interviews within your company, 
                  but can all be handled directly by us or in collaboration with you. We know that hiring someone 
                  is a very personal decision even in a professional world, so we welcome your involvement at any stage you see fit. 
                </p>
                <p className="text-justify">
                  Whether we conduct one phone interview or all three rounds of interviewing, we always record the conversations 
                  and send thorough notes to the employer so you can always make an educated decision. 
                  As a bonus, all of these documents, forms, and questions are available for download directly from us so it is 
                  all ready to go in their personnel file for their first day of work.  
                </p>
              </div>
            </div>
            {/* post script */}
            <div className="flex flex-col gap-0 px-8">
              <div className="grid grid-cols-[auto_auto_1fr] items-start">
                <svg className="w-[50px] h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                  <line x1="2" x2="50" y1="48" y2="48" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <div className="flex pt-[32px] gap-4">
                  <img src="small-arrow-solid.svg" alt="" width="24" className="rotate-180 -mt-0.5" />
                  <img src="diamond.svg" alt="" width="36" />
                </div>
                <div className={SquarePeg.className}>
                  <p className="pt-[32px] ml-2 text-xl lg:text-2xl">
                    All notes will be recorded and shared with you so you can hear the interview right from the candidate themself.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center hidden lg:flex lg:order-1 rotate-180 lg:-ml-4">
            <img src="small-arrow-solid.svg" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="#03d8d4" strokeWidth="4" />
            </svg>
          </div>
        </div>
        {/* step 9 */}
        <div id="step9" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-start lg:px-2 lg:-mt-48">
          <div className="lg:order-1">
            <div className="bg-[#03D8D4] rounded-[20px] p-2 relative">
              <div className="bg-[#0a0a0a] absolute -top-6 -right-2 lg:-top-8 lg:-right-8 p-4 rounded-full">
                <img src="/step9.svg" width="24" alt="" className="lg:w-10 aspect-square" />
              </div>
              <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
                <svg className="h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
              </div>
              <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
                <h3 className="text-center">
                  Step 9:
                  <br />
                  Conduct Reference Checks
                </h3>
                <p className="text-justify">
                  As certain candidates begin to stand out in interviews, you may want to hear from their references 
                  to see if what they have said about themselves holds up. We do all of the leg work on these reference 
                  checks to help save you time and guarantee efficiency and thoroughness.   
                </p>
                <p className="text-justify">
                  The real value isn't necessarily in just doing the reference check, but in asking the right questions to 
                  glean things that could be huge assets or red flags. Even if the reference isn't a glowing review, 
                  this doesn't mean the candidate can't proceed or be considered for the role anymore. 
                  It is often helpful just to understand what areas you can help develop and where you can support your new employee as they join your team.
                </p>
              </div>
            </div>
            {/* post script */}
            {/* <div className="flex flex-col gap-0 px-8">
              <div className="grid grid-cols-[auto_auto_1fr] items-start">
                <div className={SquarePeg.className}>
                  <p className="pt-[32px] mr-2 text-xl lg:text-2xl">
                    We go through every single applicant, whether it’s 10 or 200, and export all data for a side-by-side comparison. 
                  </p>
                </div>
                <div className="flex pt-[32px] gap-4">
                  <img src="diamond.svg" alt="" width="36" />
                  <img src="small-arrow-solid.svg" alt="" width="24" className="-mt-0.5" />
                </div>
                <svg className="w-[50px] h-[50px]">
                  <line x1="50" x2="50" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                  <line x1="2" x2="50" y1="48" y2="48" stroke="#03d8d4" strokeWidth="4" />
                </svg>
              </div>
            </div> */}
          </div>
          <div className="items-center hidden lg:flex lg:order-2 lg:-ml-4">
            <img src="small-arrow-solid.svg" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="#03d8d4" strokeWidth="4" />
            </svg>
          </div>
        </div>
        {/* step 10  */}
        <div id="step10" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-end lg:px-2 lg:-mt-48">
          <div className="lg:order-2">
            <div className="bg-[#03D8D4] rounded-[20px] p-2 relative">
              <div className="bg-[#0a0a0a] absolute -top-6 -left-2 lg:-top-8 lg:-left-8 p-4 rounded-full">
                <img src="/step10.svg" width="24" alt="" className="lg:w-10 aspect-square" />
              </div>
              <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
                <svg className="h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
              </div>
              <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
                <h3 className="text-center">
                  Step 10:
                  <br />
                  Make Verbal Offer & Create Written Offer
                </h3>
                <p className="text-justify">
                  After the searching, screening, and interviewing, you are ready to hire “the one” that stood out from the rest. 
                  A lot of companies may not have an official job offer template, and often write this up on the fly. 
                  We can give you tools, tips, and insights needed to craft an attractive job offer, or we can write one for you to give you a polished template to use in the future. 
                </p>
                <p className="text-justify">
                  Additionally, we handle the actual offers with the candidate verbally and written. 
                  Though it may seem disconnected, having this third-party approach makes it much easier on you as the employer when negotiating begins. 
                  We negotiate all of the terms with them from salary and start date to terms of their employment. 
                  All of this takes the pressure off of you and your new employee so you can start day one on a fresh, positive note. 
                </p>
              </div>
            </div>
            {/* post script */}
            {/* <div className="flex flex-col gap-0 px-8">
              <div className="grid grid-cols-[auto_auto_1fr] items-start">
                <svg className="w-[50px] h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                  <line x1="2" x2="50" y1="48" y2="48" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <div className="flex pt-[32px] gap-4">
                  <img src="small-arrow-solid.svg" alt="" width="24" className="rotate-180 -mt-0.5" />
                  <img src="diamond.svg" alt="" width="36" />
                </div>
                <div className={SquarePeg.className}>
                  <p className="pt-[32px] ml-2 text-xl lg:text-2xl">
                    All notes will be recorded and shared with you so you can hear the interview right from the candidate themself.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="items-center hidden lg:flex lg:order-1 rotate-180 lg:-ml-4">
            <img src="small-arrow-solid.svg" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="#03d8d4" strokeWidth="4" />
            </svg>
          </div>
        </div>
        {/* step 11 */}
        <div id="step11" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-start lg:px-2 lg:-mt-48">
          <div className="lg:order-1">
            <div className="bg-[#03D8D4] rounded-[20px] p-2 relative">
              <div className="bg-[#0a0a0a] absolute -top-6 -right-2 lg:-top-8 lg:-right-8 p-4 rounded-full">
                <img src="/step11.svg" width="24" alt="" className="lg:w-10 aspect-square" />
              </div>
              <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
                <svg className="h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
              </div>
              <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
                <h3 className="text-center">
                  Step 11:
                  <br />
                  Conduct Background Check (Additional Fee)
                </h3>
                <p className="text-justify">
                  Now that you have a great new candidate ready to join your team, 
                  it is wise to finish the process with a background check to make sure everything is on the up and up. 
                  We submit the background check and handle all of the paperwork, all with one additional fee to process with a third-party organization.   
                </p>
                <p className="text-justify">
                  Once it comes back, we can review it with you to see if anything concerning is listed in their records. 
                  Not everything in a background check is a nail in the coffin, but it is important for you to be aware of 
                  any criminal history just to have the full picture and catch any real red flags.
                </p>
              </div>
            </div>
            {/* post script */}
            <div className="flex flex-col gap-0 px-8">
              <div className="grid grid-cols-[auto_auto_1fr] items-start">
                <div className={SquarePeg.className}>
                  <p className="pt-[32px] mr-2 text-xl lg:text-2xl">
                    We are also able to provide a credit check and a motor vehicle report so you get a clear picture of everything.
                  </p>
                </div>
                <div className="flex pt-[32px] gap-4">
                  <img src="diamond.svg" alt="" width="36" />
                  <img src="small-arrow-solid.svg" alt="" width="24" className="-mt-0.5" />
                </div>
                <svg className="w-[50px] h-[50px]">
                  <line x1="50" x2="50" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                  <line x1="2" x2="50" y1="48" y2="48" stroke="#03d8d4" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </div>
          <div className="items-center hidden lg:flex lg:order-2 lg:-ml-4">
            <img src="small-arrow-solid.svg" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="#03d8d4" strokeWidth="4" />
            </svg>
          </div>
        </div>
        {/* step 12  */}
        <div id="step12" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-end lg:px-2 lg:-mt-48">
          <div className="lg:order-2">
            <div className="bg-[#03D8D4] rounded-[20px] p-2 relative">
              <div className="bg-[#0a0a0a] absolute -top-6 -left-2 lg:-top-8 lg:-left-8 p-4 rounded-full">
                <img src="/step12.svg" width="24" alt="" className="lg:w-10 aspect-square" />
              </div>
              <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
                <svg className="h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
              </div>
              <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
                <h3 className="text-center">
                  Step 12:
                  <br />
                  Facilitate On-Boarding
                </h3>
                <p className="text-justify">
                  Finally, you are ready to bring your new employee aboard your team. 
                  This is where you and your team take the reins to continue building this relationship and rapport. 
                  While we don't come onsite to physically onboard your new recruit, we have every resource available to help get things started right.  
                </p>
                <p className="text-justify">
                  We provide counsel to facilitate successful onboarding, and have plenty of articles, checklists, 
                  and more to keep their first week engaging and on track. We also check in after they have been hired to make sure 
                  everything is going well and see where else we can support you and your team.
                </p>
              </div>
            </div>
            {/* post script */}
            <div className="flex flex-col gap-0 px-8">
              <div className="grid grid-cols-[auto_auto_1fr] items-start">
                <svg className="w-[50px] h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                  <line x1="2" x2="50" y1="48" y2="48" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <div className="flex pt-[32px] gap-4">
                  <img src="small-arrow-solid.svg" alt="" width="24" className="rotate-180 -mt-0.5" />
                  <img src="diamond.svg" alt="" width="36" />
                </div>
                <div className={SquarePeg.className}>
                  <p className="pt-[32px] ml-2 text-xl lg:text-2xl">
                    We can help you make their first week fun using creative onboarding techniques to welcome them to the team.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center hidden lg:flex lg:order-1 rotate-180 lg:-ml-4">
            <img src="small-arrow-solid.svg" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="#03d8d4" strokeWidth="4" />
            </svg>
          </div>
        </div>
        {/* step 13 */}
        <div id="step13" className="lg:w-1/2 lg:flex lg:items-center lg:gap-6 lg:self-start lg:px-2 lg:-mt-48">
          <div className="lg:order-1">
            <div className="bg-[#03D8D4] rounded-[20px] p-2 relative">
              {/* <div className="bg-[#0a0a0a] absolute -top-6 -right-2 lg:-top-8 lg:-right-8 p-4 rounded-full">
                <img src="/step11.svg" width="24" alt="" className="lg:w-10 aspect-square" />
              </div> */}
              <div className="absolute -top-[74px] left-[calc(50%-4px)] lg:hidden">
                <svg className="h-[50px]">
                  <line x1="0" x2="0" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                </svg>
                <img src="/small-arrow-solid.svg" width="24" alt="" className="-rotate-90 relative right-[11px]" />
              </div>
              <div className="border-2 border-white rounded-[20px] flex flex-col gap-8 p-4 items-center">
                {/* <h3 className="text-center">
                  Step 11:
                  <br />
                  Conduct Background Check (Additional Fee)
                </h3> */}
                <p className="text-justify">
                  Now that you have found the right candidate and have them working on your team, our work is still not done. 
                  We want to make sure that everything is going well after their first day. 
                  We continue to check in with you after the first week, month, and beyond to ensure that this is a fit made to last. 
                  You can also submit feedback to us directly via our survey so we can continue to improve our processes and services to better serve business owners just like you.
                </p>
                {/* <p className="text-justify">
                  Once it comes back, we can review it with you to see if anything concerning is listed in their records. 
                  Not everything in a background check is a nail in the coffin, but it is important for you to be aware of 
                  any criminal history just to have the full picture and catch any real red flags.
                </p> */}
              </div>
            </div>
            {/* post script */}
            {/* <div className="flex flex-col gap-0 px-8">
              <div className="grid grid-cols-[auto_auto_1fr] items-start">
                <div className={SquarePeg.className}>
                  <p className="pt-[32px] mr-2 text-xl lg:text-2xl">
                    We are also able to provide a credit check and a motor vehicle report so you get a clear picture of everything.
                  </p>
                </div>
                <div className="flex pt-[32px] gap-4">
                  <img src="diamond.svg" alt="" width="36" />
                  <img src="small-arrow-solid.svg" alt="" width="24" className="-mt-0.5" />
                </div>
                <svg className="w-[50px] h-[50px]">
                  <line x1="50" x2="50" y1="0" y2="50" stroke="#03d8d4" strokeWidth="4" />
                  <line x1="2" x2="50" y1="48" y2="48" stroke="#03d8d4" strokeWidth="4" />
                </svg>
              </div>
            </div> */}
          </div>
          <div className="items-center hidden lg:flex lg:order-2 lg:-ml-4">
            <img src="small-arrow-solid.svg" className="opacity-0" />
            <svg className="w-[100px] h-[4px] pt-[1px]">
              <line x1="0" x2="100" y1="0" y2="0" stroke="white" strokeWidth="4" />
            </svg>
          </div>
        </div>
        <img id="last-step" src="/last-step.svg" alt="" width="375" className="w-full lg:max-w-[300px] lg:self-center z-[100] lg:-mt-60" />
      </section>
      <section className="px-4 py-8 lg:px-16 lg:py-24 flex flex-col gap-16 items-center">
        <div id="additional-services" className="bg-[#0a0a0a] text-white px-6 py-10 lg:px-16 lg:py-16 flex flex-col gap-16 rounded-[20px] max-w-7xl mx-auto">
          <h2 className="text-3xl text-center">Additional <span className="text-hidden-teal-dark">Services</span></h2>
          <div className="flex flex-col gap-4">
            <h3 className="text-hidden-teal-dark text-center">Application Tracking System (ATS) Support</h3>
            <div className="grid lg:grid-cols-[auto_1fr] justify-items-center gap-4 lg:items-center lg:gap-16">
              <img src="/ats.svg" width="48" alt="" className="lg:w-28" />
              <p className="text-justify">
                Implementing and choosing a new applicant tracking system can be cumbersome, 
                especially with so many options and functions to choose from. 
                Our experience over the years has given us real-world insight into 
                how these systems work and which ones will be best suited for your company's needs. 
                We can be your project manager during the whole process to help you not only find the best solution but also 
                implement it efficiently and effectively. Whether you have a system you hate or have never used an ATS before, 
                we can work with you to find something you will be happy with for years to come.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-hidden-teal-dark text-center">Recruitment Support</h3>
            <div className="grid lg:grid-cols-[auto_1fr] justify-items-center gap-4 lg:items-center lg:gap-16">
              <img src="/recruitment-support.svg" width="48" alt="" className="lg:w-28" />
              <p className="text-justify">
                Need help with anything else? We are here to help. 
                We provide one-off consultations to discuss other areas of hiring and recruitment that you have questions about. 
                Contact us to see where else we can support you and your business as you expand your team.
              </p>
            </div>
          </div>
          <Link href="/contact" className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#03D8D4] hover:to-[hsl(179,97%,46%)] text-center rounded-full py-5 uppercase font-semibold text-lg  text-[#0a0a0a] w-full lg:w-fit lg:px-24 mx-auto">
            Get Started
          </Link>
        </div>
      </section>
      <Quote 
        quote="“If you hire people just because they can do a job, they'll work for your money. But if you hire people who believe what you believe, they'll work for you with blood, sweat, and tears.”"
        author="Simon Sinek, Author"
      />
    </main>
  )
}