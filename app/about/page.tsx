import About from '@/components/About';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'About Us - Essence Public School',
  description: 'Learn about Essence Public School\'s history, mission, vision, and our commitment to excellence in education since 1995.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <About />
      <Stats />
      <Testimonials />
    </div>
  );
}