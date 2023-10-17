import HeroSection from './Hero'
import IntroSection from './Intro'
import AboutSection from './AboutUs'
import ServicesSection from './Services'
import UniqueSection from './Unique'
import TestimonialSection from './Testimonials'
import Quote from './Quote'
import HomeFormSection from './HomeForm'

export const metadata = {
  title: 'Creating a better world of recruiting'
}

export default function HomePage() {
  return (
    <main>
      {/* hero section */}
      <section className='px-4 py-8  max-w-[100vw] w-[100vw] lg:py-16 lg:px-16'>
        <HeroSection />
      </section>
      {/* intro section */}
      <IntroSection />
      <section className="px-4 py-8  max-w-[100vw] w-[100vw] lg:py-16 lg:px-16">
        <AboutSection />
      </section>
      <ServicesSection />
      <UniqueSection />
      <TestimonialSection />
      <Quote 
        quote="“The only way to be truly satisfied is to do what you believe is great work, and the only way to do great work is to love what you do. If you haven't found it yet, keep looking and don't settle. As with all matters of the heart, you'll know when you find it.”"
        author="Steve Jobs, Founder of Apple"
      />
      <HomeFormSection />
    </main>
  )
}
