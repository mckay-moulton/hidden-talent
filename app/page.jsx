import IntroSection from './Intro'
import AboutSection from './AboutUs'
import ServicesSection from './Services'
import UniqueSection from './Unique'
import TestimonialSection from './Testimonials'
import Quote from './Quote'
import HomeFormSection from './HomeForm'
import HeroSection from './Hero'

export const metadata = {
  title: 'Creating a better world of recruiting'
}

export default function HomePage() {
  return (
    <main className='w-screen max-w-[100vw] overflow-x-clip'>
      <HeroSection />
      <IntroSection />
      <AboutSection />
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
