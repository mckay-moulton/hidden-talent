"use client"

import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger)

    gsap.from('#hero', {
      scrollTrigger: '#hero',
      y: 200,
      opacity: 0,
      duration: 0.35,
    })

    gsap.to('#hero', {
      scrollTrigger: '#hero',
      y: 0,
      opacity: 1,
    })

    gsap.from('#hero-left', {
      scrollTrigger: '#hero-left',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#hero-left', {
      scrollTrigger: '#hero-left',
      y: 0,
      opacity: 1,
    })

    gsap.from('#hero-right', {
      scrollTrigger: '#hero-left',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })

    gsap.to('#hero-right', {
      scrollTrigger: '#hero-left',
      y: 0,
      opacity: 1,
    })

    gsap.from('#values', {
      scrollTrigger: '#values',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#values', {
      scrollTrigger: '#values',
      y: 0,
      opacity: 1,
    })

    gsap.from('#heart-left', {
      scrollTrigger: '#heart-left',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#heart-left', {
      scrollTrigger: '#heart-left',
      y: 0,
      opacity: 1,
    })
    gsap.from('#heart-right', {
      scrollTrigger: '#heart-right',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#heart-right', {
      scrollTrigger: '#heart-right',
      y: 0,
      opacity: 1,
    })
    
    gsap.from('#integrity-left', {
      scrollTrigger: '#integrity-left',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#integrity-left', {
      scrollTrigger: '#integrity-left',
      y: 0,
      opacity: 1,
    })
    gsap.from('#integrity-right', {
      scrollTrigger: '#integrity-right',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#integrity-right', {
      scrollTrigger: '#integrity-right',
      y: 0,
      opacity: 1,
    })

    gsap.from('#resilience-left', {
      scrollTrigger: '#resilience-left',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#resilience-left', {
      scrollTrigger: '#resilience-left',
      y: 0,
      opacity: 1,
    })
    gsap.from('#resilience-right', {
      scrollTrigger: '#resilience-right',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#resilience-right', {
      scrollTrigger: '#resilience-right',
      y: 0,
      opacity: 1,
    })

    gsap.from('#excellence-left', {
      scrollTrigger: '#excellence-left',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#excellence-left', {
      scrollTrigger: '#excellence-left',
      y: 0,
      opacity: 1,
    })
    gsap.from('#excellence-right', {
      scrollTrigger: '#excellence-right',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#excellence-right', {
      scrollTrigger: '#excellence-right',
      y: 0,
      opacity: 1,
    })

    gsap.from('#meet-abel-banner', {
      scrollTrigger: '#meet-abel-banner',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#meet-abel-banner', {
      scrollTrigger: '#meet-abel-banner',
      y: 0,
      opacity: 1,
    })
    gsap.from('#meet-abel-1', {
      scrollTrigger: '#meet-abel-1',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#meet-abel-1', {
      scrollTrigger: '#meet-abel-1',
      y: 0,
      opacity: 1,
    })

    gsap.from('#abel-bio-mobile', {
      scrollTrigger: '#abel-bio-mobile',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#abel-bio-mobile', {
      scrollTrigger: '#abel-bio-mobile',
      y: 0,
      opacity: 1,
    })
    gsap.from('#pride-mobile', {
      scrollTrigger: '#pride-mobile',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#pride-mobile', {
      scrollTrigger: '#pride-mobile',
      y: 0,
      opacity: 1,
    })
    gsap.from('#passion-mobile', {
      scrollTrigger: '#passion-mobile',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#passion-mobile', {
      scrollTrigger: '#passion-mobile',
      y: 0,
      opacity: 1,
    })

    gsap.from('#talents-h2-mobile', {
      scrollTrigger: '#talents-h2-mobile',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#talents-h2-mobile', {
      scrollTrigger: '#talents-h2-mobile',
      y: 0,
      opacity: 1,
    })
    gsap.from('#greasy-mechanic-mobile', {
      scrollTrigger: '#greasy-mechanic-mobile',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#greasy-mechanic-mobile', {
      scrollTrigger: '#greasy-mechanic-mobile',
      y: 0,
      opacity: 1,
    })
    gsap.from('#home-diy-mobile', {
      scrollTrigger: '#home-diy-mobile',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#home-diy-mobile', {
      scrollTrigger: '#home-diy-mobile',
      y: 0,
      opacity: 1,
    })
    gsap.from('#avid-reader-mobile', {
      scrollTrigger: '#avid-reader-mobile',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#avid-reader-mobile', {
      scrollTrigger: '#avid-reader-mobile',
      y: 0,
      opacity: 1,
    })
    gsap.from('#spanish-speaker-mobile', {
      scrollTrigger: '#spanish-speaker-mobile',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#spanish-speaker-mobile', {
      scrollTrigger: '#spanish-speaker-mobile',
      y: 0,
      opacity: 1,
    })
    gsap.from('#history-buff-mobile', {
      scrollTrigger: '#history-buff-mobile',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#history-buff-mobile', {
      scrollTrigger: '#history-buff-mobile',
      y: 0,
      opacity: 1,
    })
    gsap.from('#world-traveler-mobile', {
      scrollTrigger: '#world-traveler-mobile',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#world-traveler-mobile', {
      scrollTrigger: '#world-traveler-mobile',
      y: 0,
      opacity: 1,
    })
    gsap.from('#meet-abel-2', {
      scrollTrigger: '#meet-abel-2',
      opacity: 0,
      y: 200,
      duration: 0.35,
    })
    gsap.to('#meet-abel-2', {
      scrollTrigger: '#meet-abel-2',
      y: 0,
      opacity: 1,
    })

  }, [])

  return (
    <main>
      <section className="px-4 py-16 max-w-[100vw] w-[100vw] md:px-6 lg:py-24 lg:px-8 bg-gradient-to-r from-[#11B0AC] to-[#13A2B2] grid lg:grid-cols-[1fr_3fr_1fr]">
        <div id="hero-left" className="hidden lg:block w-full">
          <img src="https://media.hirehiddentalent.com/images/about-page-images/about-hero-left-words" alt="" width="210" className="mx-auto" />
        </div>
        <div id="hero" className="bg-white px-4 py-24 md:px-8 rounded-[20px] grid gap-4 relative">
          <h1 className="bg-white bg-opacity-25 backdrop-blur-[1px] rounded-[6px] text-3xl text-center z-10 lg:bg-opacity-0">Why We're Different</h1>
          <div className="flex">
            <img  src="https://media.hirehiddentalent.com/images/about-page-images/about-hero-image-1" alt="" className="absolute w-1/3 md:w-1/5 lg:w-1/4 -top-12 -left-8 md:-left-4 lg:-top-16 lg:-left-20 z-0" />
            <img src="https://media.hirehiddentalent.com/images/about-page-images/about-hero-image-2" alt="" className="absolute w-1/3 md:w-1/5 lg:w-1/4 -bottom-12 -right-8 md:-bottom-16 md:-right-8 lg:-right-20 lg:-bottom-16 z-0" />
          </div>
          <p className="lg:max-w-[55ch] justify-self-center text-justify">
            At Hidden Talent, our mission is to help our clients discover and connect talented people to engaging and rewarding work by creating a white-glove experience 
            through honesty, humility, and empathy. We seek to inspire a positive change in all things hiring and are actively working to make a positive impact within 
            the industry. We know what we do affects people's lives and we don't take it for granted.
          </p>
          <p className="lg:max-w-[55ch] justify-self-center text-justify">
            Founder Abel witnessed firsthand just how disconnected the recruiting industry has become and was saddened by the state of things. 
            He knew there was a better way to go about this process, and after many years in the industry, he decided to branch out on his own. 
            He established Hidden Talent in 2022 to begin executing this vision and his white-glove approach immediately took off.
          </p>
          <p className="z-10 lg:max-w-[55ch] justify-self-center text-justify">
            Hidden Talent looks beyond people on paper by recognizing every person as a human being and treats each person with the dignity and respect they deserve. 
            With how critical a strong company culture is today, we don't just fill roles for the sake of it. 
            We approach hiring with the goal of finding someone who will bring enthusiasm and positivity to their job every day. We all want to engage in meaningful work 
            and find a company where we feel valued and a part of something larger than ourselves. With Hidden Talent, your search will be rewarding and successful no matter 
            what you are looking for.
          </p>
        </div>
        <div id="hero-right" className="hidden lg:block w-full">
          <img src="https://media.hirehiddentalent.com/images/about-page-images/about-hero-right-words" alt="" width="210" className="mx-auto" />
        </div>
      </section>
      <section className="px-6 py-16 max-w-[100vw] w-[100vw] lg:py-24 lg:px-8 grid gap-12 md:gap-16">
        <h2 id="values" className="text-3xl text-center"><span className="text-hidden-teal">Values</span> That Drive Us</h2>
        <div className="w-full grid gap-x-4 grid-cols-[25fr_75fr] md:pr-[20vw] md:-ml-2">
          <div id="heart-left" className="flex items-center justify-center">
            <span className="text-5xl md:text-7xl font-bold absolute bg-white p-2">H</span>
            <svg width="2" height="100" className="h-full">
              <line x1="0" y1="0" x2="0" y2="5000" style={{ stroke: '#03D8D4', strokeWidth: '2px' }} />
            </svg>
          </div>
          <div id="heart-right" className="flex flex-col gap-4 items-center">
              <div className="flex flex-col items-center gap-2">
                <img src="/heart.svg" alt="" width="40" />
                <h3 className="text-hidden-teal text-2xl">Heart</h3>
              </div>
              <p className="text-justify">
                In recruiting, you can do all of the screening, pretests, calculated risks, and more on any candidate, but these are logical metrics. 
                A workplace becomes much more like a family for a lot of companies, and a career becomes a matter of passion over practicality. 
                We recognize this important distinction and approach hiring from the heart to find that perfect match for both parties.
              </p>
              <p className="text-justify">
                A big part of the heart we bring to our work is through humor, passion, and personality. 
                We are people doing what we love, and with that we want to share that joy with others. A job search or candidate search doesn't 
                have to be stiff and stressful, and we bring the levity and life that keeps things light. For us, the bonds we build are ones we want to last, 
                and these relationships are strengthened by the humanity we bring to every interaction.
              </p>
          </div>
          <div id="integrity-left" className="flex items-center justify-center">
            <span className="text-5xl md:text-7xl font-bold absolute bg-white p-2">I</span>
            <svg width="2" height="100" className="h-full">
              <line x1="0" y1="0" x2="0" y2="5000" style={{ stroke: '#03D8D4', strokeWidth: '2px' }} />
            </svg>
          </div>
          <div id="integrity-right" className="flex flex-col gap-4 items-center">
              <div className="flex flex-col items-center gap-2 mt-12 md:mt-24">
                <img src="/integrity.svg" alt="" height="40" />
                <h3 className="text-hidden-teal text-2xl">Integrity</h3>
              </div>
              <p className="text-justify">
                Relationships are the backbone of successful job seeking and job placing. 
                To build these relationships, there has to be a high level of trust. 
                In everything we do, we act with integrity to build trust and bring transparency to every stage of the hiring process. 
                We strive to act in honesty and integrity for both job seekers and employers so they always have someone they can count on for advice and counsel.
              </p>
              <p className="text-justify">
                Transparency is an element that has been deeply missing from the recruiting industry, 
                and we believe things need to be done differently to reestablish trust between candidates and prospective employers. 
                Further, we don't shy away from hard truths and are willing to share facts with sincerity and solutions to get you the success you are looking for in your search.
              </p>
          </div>
          <div id="resilience-left" className="flex items-center justify-center">
            <span className="text-5xl md:text-7xl font-bold absolute bg-white p-2">R</span>
            <svg width="2" height="100" className="h-full">
              <line x1="0" y1="0" x2="0" y2="5000" style={{ stroke: '#03D8D4', strokeWidth: '2px' }} />
            </svg>
          </div>
          <div id="resilience-right" className="flex flex-col gap-4 items-center">
              <div className="flex flex-col items-center gap-2 mt-12 md:mt-24">
                <img src="/resilience.svg" alt="" height="40" />
                <h3 className="text-hidden-teal text-2xl">Resilience</h3>
              </div>
              <p className="text-justify">
                Many hiring managers and recruiters know firsthand that finding the right person for the job is not something that happens overnight. 
                It takes grit and persistence to continue to adapt to new obstacles and changes in the job market to attract quality talent. 
                Your success is our success, and we take pride in rising to the challenge and thinking outside the box to help you find the right fit for you.
              </p>
              <p className="text-justify">
                Beyond our tenacity, we believe in efficiency in our work and consistent communication. 
                We maintain a quick turnaround time in each step of the hiring process so you are always in the loop on how things are going and what to expect next. 
                Whether it's your dream job or dream candidate, we know how critical it is to act fast before they move on to the next opportunity.
              </p>
          </div>
          <div id="excellence-left" className="flex items-center justify-center">
            <span className="text-5xl md:text-7xl font-bold absolute bg-white p-2">E</span>
            <svg width="2" height="100" className="h-full">
              <line x1="0" y1="0" x2="0" y2="5000" style={{ stroke: '#03D8D4', strokeWidth: '2px' }} />
            </svg>
          </div>
          <div id="excellence-right" className="flex flex-col gap-4 items-center">
              <div className="flex flex-col items-center gap-2 mt-12 md:mt-24">
                <img src="/excellence.svg" alt="" height="40" />
                <h3 className="text-hidden-teal text-2xl">Excellence</h3>
              </div>
              <p className="text-justify">
                On top of each core value, we infuse the highest level of excellence. 
                We value the journey you take with us and aim higher than just good, fine, or great. 
                We bring 110% to every search and want you to know that we will never settle for anything less. 
                At every phase of our search together, we take the time to thoroughly understand your needs and interests so we can move forward successfully and efficiently.
              </p>
              <p className="text-justify">
                With Hidden Talent, you can expect nothing but the best when it comes to service, commitment, and energy invested in your search. 
                We aren't looking to just fill a chair on your team or just get you any old job that comes your way. 
                We sincerely want to help you achieve greatness in your company or your career and will take the necessary steps to get you there.
              </p>
          </div>
        </div>
      </section>
      <section>
        {/* banner */}
        <div id="meet-abel-banner" className="flex justify-center items-center relative bg-gradient-to-r from-[#1DDDD9] to-[#13A2B2] p-8 md:p-10">
          <span className="text-3xl text-center text-white w-fit">Meet Abel</span>
          <div className="flex gap-4 absolute -left-96 md:-left-48 lg:-left-2">
            <img src="arrow-outline-right.svg" width="64" alt="" />
            <img src="arrow-outline-right.svg" width="64" alt="" />
            <img src="arrow-outline-right.svg" width="64" alt="" />
            <img src="arrow-outline-right.svg" width="64" alt="" />
            <img src="arrow-outline-right.svg" width="64" alt="" />
            <img src="arrow-outline-right.svg" width="64" alt="" />
          </div>
          <div className="flex gap-4 absolute -right-96 md:-right-48 lg:-right-2 rotate-180">
            <img src="arrow-outline-right.svg" width="64" alt="" />
            <img src="arrow-outline-right.svg" width="64" alt="" />
            <img src="arrow-outline-right.svg" width="64" alt="" />
            <img src="arrow-outline-right.svg" width="64" alt="" />
            <img src="arrow-outline-right.svg" width="64" alt="" />
            <img src="arrow-outline-right.svg" width="64" alt="" />
          </div>
        </div>
        <div className="px-6 py-16 lg:py-24 lg:px-8 grid gap-8">
          <div id="meet-abel-1" className="grid md:max-w-lg lg:max-w-7xl lg:grid-cols-[5fr_9fr] mx-auto">
            <img 
              src="https://media.hirehiddentalent.com/images/about-page-images/abel-about-1" 
              alt="" 
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 50px), 0% calc(100% - 25px)',
              }}
              className="lg:hidden"
            />
            <img 
              src="https://media.hirehiddentalent.com/images/about-page-images/abel-about-1" 
              alt="" 
              style={{
                clipPath: 'polygon(0% 0%, calc(100% - 25px) 0%, calc(100% - 100px) 100% , 0% 100%',
              }}
              className="hidden lg:block lg:ml-8"
            />
            <div className="lg:flex lg:items-center">
              <div className="relative h-[50px] -mt-8 lg:hidden">
                <div  
                  style={{
                    content: '',
                    position: 'absolute',
                    background: 'rgb(4 189 185)',
                    width: '100%',
                    height: '52px',
                    clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                />
                <div 
                  style={{
                    postion: 'absolute',
                    background: 'white',
                    content: '',
                    width: '100%',
                    height: '105%',
                    top: '-50px',
                    left: '0',
                    zIndex: 1,
                    clipPath: 'polygon(2px calc(50% + 2px), calc(100% - 2px) 2px, calc(100% - 2px) 100%, 2px 100%)',
                    
                  }}
                />
              </div>
              <div className="relative w-[75px] h-full hidden lg:block lg:-ml-8">
                <div 
                  style={{
                    content: 'hello',
                    background: 'rgb(4 189 185)',
                    height: '100%',
                    width: '75px',
                    clipPath: 'polygon(calc(100% - 4px) 0, 100% 0, 100% 100%, 0% 100%)'
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 1,
                    clipPath: 'polygon(calc(100% - 2px) calc(0% + 2px), 100% calc(0% + 2px), 100% calc(100% - 2px), calc(0% + 2px) calc(100% - 2px))',
                  }}
                />
              </div>
              <p
                className="p-4 md:px-8 text-justify border-2 border-hidden-teal border-t-0 lg:border-t-2 lg:border-l-0 rounded-[0_0_20px_20px] lg:rounded-[0_20px_20px_0] h-full grid content-center"
              >
                Abel was born and raised in Albuquerque, New Mexico. 
                He attended college at Boise State University in Idaho where he earned two Bachelor's degrees, 
                one in Marketing and one in Human Resource Management. Abel has lived in Idaho since 2011 working in various recruiting and human resource roles. 
                From Corporate Recruiter to Business Partner to Director of Human Resources, he has gained experience in every facet of the recruiting industry and 
                is passionate about bringing a higher level of excellence to this essential process. 
                He started Hidden Talent in 2022 and has been thrilled to serve both companies and professionals in their hiring needs.
              </p>
            </div>
          </div>
          <div id="meet-abel-2-mobile" className="mt-8 max-w-lg lg:hidden mx-auto">
            <div id="abel-bio-mobile">
              <img
                src="https://media.hirehiddentalent.com/images/about-page-images/abel-about-2" 
                alt="" 
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 75px), 50% 100%, 0% calc(100% - 75px))'
                }}
              />
            </div>
            {/* pride */}
            <div 
              id="pride-mobile"
              className="bg-hidden-teal p-6 py-24 flex flex-col gap-6 -mt-8 text-white"
              style={{
                clipPath: 'polygon(0% 0%, 50% 75px, 100% 0%, 100% calc(100% - 75px), 50% 100%, 0% calc(100% - 75px)'
              }}
            >
              <h3 className="text-2xl text-center">Things I'm <span className="underline">Proud</span> of</h3>
              <p className="flex flex-col items-center gap-2 w-fit mx-auto justify-center text-center max-w-[30ch]"><img src="award.svg" alt="" width="24" />Avid CUPA-HR Western Regional HR Excellence Award</p>
              <p className="flex flex-col items-center gap-2 w-fit mx-auto text-center justify-center"><img src="award.svg" alt="" width="24" />CUPA-HR National HR Excellence Award</p>
              <p className="flex flex-col items-center gap-2 w-fit mx-auto text-center"><img src="award.svg" alt="" width="24" />Guest keynote speaker at 2019 NAEOP</p>
            </div>
            {/* passion */}
            <div id="passion-mobile" className="relative">
              <div 
                className="p-6 py-24 flex flex-col gap-6 bg-white relative z-10 -mt-8"
                style={{ clipPath: 'polygon(calc(0% + 2px) calc(0% + 2px), 50% 77px, calc(100% - 2px) calc(0% + 2px), calc(100% - 2px) calc(100% - 77px), 50% calc(100% - 2px), calc(0% + 2px) calc(100% - 77px)' }}  
              >
                <h3 className="text-2xl text-center">Topics I'm <span className="text-hidden-teal underline decoration-hidden-teal">Passionate</span> About</h3>
                <p className="flex gap-2 w-fit mx-auto"><img src="speech-bubble.svg" alt="" width="24" /> Emotional intelligence</p>
                <p className="flex gap-2 w-fit mx-auto"><img src="speech-bubble.svg" alt="" width="24" /> Psychological Safety</p>
                <p className="flex gap-2 w-fit mx-auto"><img src="speech-bubble.svg" alt="" width="24" /> Servant Leadership</p>
              </div>
              <div 
                style={{
                  content: '',
                  position: 'absolute',
                  background: 'rgb(4 178 185)',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  clipPath: 'polygon(0% 0%, 50% 75px, 100% 0%, 100% calc(100% - 75px), 50% 100%, 0% calc(100% - 75px)'
                }}
              />
            </div>
            {/* talents */}
            <div className="p-6 py-16 flex flex-col items-center gap-4">
              <h3 id="talents-h2-mobile" className="text-2xl text-center mb-4">My Hidden <span className="text-hidden-teal underline decoration-hidden-teal">Talents</span></h3>
              <div id="greasy-mechanic-mobile" className="flex flex-col gap-2 items-center">
                <p className="flex flex-col items-center gap-4">
                  <img src="greasy-mechanic.svg" alt="" width="48" />
                  Greasy Mechanic
                </p>
                <div className="relative w-fit pl-6">
                  <svg className="w-1 h-16">
                    <line x1="0" x2="0" y1="0" y2="50" stroke="#69E2E0" width="4" />
                  </svg>
                  <img src="small-arrow-solid.svg" width="24" className="-rotate-90 relative right-3 bottom-3" />
                </div>
              </div>
              <div id="home-diy-mobile" className="flex flex-col gap-2 items-center">
                <p className="flex flex-col items-center gap-4">
                  <img src="home-diy.svg" alt="" width="48" />
                  Home DIYer
                </p>
                <div className="relative w-fit pl-6">
                  <svg className="w-1 h-16">
                    <line x1="0" x2="0" y1="0" y2="50" stroke="#69E2E0" width="4" />
                  </svg>
                  <img src="small-arrow-solid.svg" width="24" className="-rotate-90 relative right-3 bottom-3" />
                </div>
              </div>
              <div id="avid-reader-mobile" className="flex flex-col gap-2 items-center">
                <p className="flex flex-col items-center gap-4">
                  <img src="reader.svg" alt="" width="48" />
                  Avid Reader
                </p>
                <div className="relative w-fit pl-6">
                  <svg className="w-1 h-16"> 
                    <line x1="0" x2="0" y1="0" y2="50" stroke="#69E2E0" width="4" />
                  </svg>
                  <img src="small-arrow-solid.svg" width="24" className="-rotate-90 relative right-3 bottom-3" />
                </div>
              </div>
              <div id="spanish-speaker-mobile" className="flex flex-col gap-2 items-center">
                <p className="flex flex-col items-center gap-4">
                  <img src="espanol.svg" alt="" width="48" />
                  Spanish Speaker
                </p>
                <div className="relative w-fit pl-6">
                  <svg className="w-1 h-16"> 
                    <line x1="0" x2="0" y1="0" y2="50" stroke="#69E2E0" width="4" />
                  </svg>
                  <img src="small-arrow-solid.svg" width="24" className="-rotate-90 relative right-3 bottom-3" />
                </div>
              </div>
              <div id="history-buff-mobile" className="flex flex-col gap-2 items-center">
                <p className="flex flex-col items-center gap-4">
                  <img src="history-buff.svg" alt="" width="48" />
                  History Buff
                </p>
                <div className="relative w-fit pl-6">
                  <svg className="w-1 h-16"> 
                    <line x1="0" x2="0" y1="0" y2="50" stroke="#69E2E0" width="4" />
                  </svg>
                  <img src="small-arrow-solid.svg" width="24" className="-rotate-90 relative right-3 bottom-3" />
                </div>
              </div>
              <div id="world-traveler-mobile" className="flex flex-col gap-2 items-center">
                <p className="flex flex-col items-center gap-4">
                  <img src="traveler.svg" alt="" width="48" />
                  World Traveler
                </p>
                {/* <div className="relative w-fit pl-6">
                  <svg className="w-1 h-16"> 
                    <line x1="0" x2="0" y1="0" y2="50" stroke="#69E2E0" width="4" />
                  </svg>
                  <img src="small-arrow-solid.svg" width="24" className="-rotate-90 relative right-3 bottom-3" />
                </div> */}
              </div>
            </div>
          </div>
          <div id="meet-abel-2" className="grid-cols-[5_7.8fr] py-16 items-center max-w-7xl mx-auto hidden lg:flex">
            {/* talents */}
            <div className="flex flex-col gap-8 justify-items-end lg:w-fit items-end">
              <h3 className="text-2xl text-center w-full">My Hidden <span className="text-hidden-teal underline decoration-hidden-teal">Talents</span></h3>
              <div className="flex gap-4 items-center">
                <p className="font-medium w-fit">Greasy Mechanic</p>
                <img src="greasy-mechanic.svg" alt="" width="40" />
                <div className="flex items-center">
                  <img src="small-arrow-solid.svg" alt="" width="24" />
                  <svg width="154" height="4" className="mt-0.5">
                    <line x1="0" x2="130" y1="0" y2="0" stroke="#69E2E0" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <p className="font-medium w-fit">Home DIYer</p>
                <img src="home-diy.svg" alt="" width="40" />
                <div className="flex items-center">
                  <img src="small-arrow-solid.svg" alt="" width="24" />
                  <svg width="204" height="4" className="mt-0.5">
                    <line x1="0" x2="180" y1="0" y2="0" stroke="#69E2E0" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <p className="font-medium w-fit">Avid Reader</p>
                <img src="reader.svg" alt="" width="40" />
                <div className="flex items-center">
                  <img src="small-arrow-solid.svg" alt="" width="24" />
                  <svg width="254" height="4" className="mt-0.5">
                    <line x1="0" x2="230" y1="0" y2="0" stroke="#69E2E0" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <p className="font-medium w-fit">Spanish Speaker</p>
                <img src="espanol.svg" alt="" width="40" />
                <div className="flex items-center">
                  <img src="small-arrow-solid.svg" alt="" width="24" />
                  <svg width="254" height="4" className="mt-0.5">
                    <line x1="0" x2="230" y1="0" y2="0" stroke="#69E2E0" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <p className="font-medium w-fit">History Buff</p>
                <img src="history-buff.svg" alt="" width="40" />
                <div className="flex items-center">
                  <img src="small-arrow-solid.svg" alt="" width="24" />
                  <svg width="204" height="4" className="mt-0.5">
                    <line x1="0" x2="180" y1="0" y2="0" stroke="#69E2E0" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <p className="font-medium w-fit">World Traveler</p>
                <img src="traveler.svg" alt="" width="40" />
                <div className="flex items-center">
                  <img src="small-arrow-solid.svg" alt="" width="24" />
                  <svg width="154" height="4" className="mt-0.5">
                    <line x1="0" x2="130" y1="0" y2="0" stroke="#69E2E0" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 w-3/5">
              <img 
                src="https://media.hirehiddentalent.com/images/about-page-images/abel-about-2" 
                alt=""
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 75px) 0%, 100% 50%, calc(100% - 75px) 100%, 0% 100%)'
                }}
              />
              <div className="grid grid-rows-2 gap-6">
                <div 
                  className="bg-gradient-to-r from-[#11B0AC] to-[#13A2B2] text-white flex flex-col justify-between gap-4 p-8"
                  style={{
                    width: 'calc(100% + 75px)',
                    marginRight: '75px',
                    position: 'relative',
                    right: '75px',
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, calc(0% + 75px) 100%)',
                    borderRadius: '0 20px 20px 0',
                  }}
                >
                  <h3 className="text-center">Things I'm <span className="underline">Proud</span> of</h3>
                  <p className="flex gap-2 text-base pl-4"><img src="award.svg" alt="" width="32" /> Avid CUPA-HR Western Regional HR Excellence Award</p>
                  <p className="flex gap-2 text-base pl-8"><img src="award.svg" alt="" width="32" /> CUPA-HR National HR Excellence Award</p>
                  <p className="flex gap-2 text-base pl-12"><img src="award.svg" alt="" width="32" /> Guest keynote speaker at 2019 NAEOP</p>
                </div>
                <div className="relative">
                  <div 
                    style={{
                      width: 'calc(100% + 75px)',
                      height: '100%',
                      position: 'absolute',
                      right: 0,
                      backgroundColor: '#15CCC8',
                      zIndex: 0,
                      bottom: 0,
                      content: '',
                      clipPath: 'polygon(calc(0% + 75px) 0%, 100% 0%, 100% 100%, 0% 100%',
                      // borderRadius: '0 20px 20px 0'
                    }}
                    className="rounded-[0_20px_20px_0]"
                  />
                    
                  <div 
                    className="flex flex-col justify-between gap-4 p-8 h-full bg-white"
                    style={{
                      width: 'calc(100% + 75px)',
                      position: 'absolute',
                      right: '0',
                      // clipPath: 'polygon(77px 3px, calc(100% - 2px) 2px, calc(100% - 2px) calc(100% - 2px), 2px calc(100% - 2px)',
                      clipPath: 'polygon(77px 2px, calc(100% - 2px) 2px, calc(100% - 2px)  calc(100% - 2px), 2px 100%)',
                      borderRadius: '0 20px 20px 0',
                      border: '1px solid #15ccc8'
                    }}
                  >
                    <h3 className="text-center pl-[75px]">Topics I'm <span className="underline text-hidden-teal decoration-hidden-teal">Passionate</span> About</h3>
                    <p className="flex gap-2 text-base pl-12"><img src="speech-bubble.svg" alt="" width="32" />Emotional Intelligence</p>
                    <p className="flex gap-2 text-base pl-8"><img src="speech-bubble.svg" alt="" width="32" />Psychological Safety</p>
                    <p className="flex gap-2 text-base pl-4"><img src="speech-bubble.svg" alt="" width="32" />Servant Leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
