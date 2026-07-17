import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Academics from '@/components/Academics';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import News from '@/components/News';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import { ADLaM_Display } from 'next/font/google';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <About />
      <WhyChooseUs />
      <Academics />
      <Facilities />
      <Gallery />
      <News />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
}