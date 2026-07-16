import Academics from '@/components/Academics';
import WhyChooseUs from '@/components/WhyChooseUs';

export const metadata = {
  title: 'Academics - Essence Public School',
  description: 'Explore our comprehensive academic programs from Pre-Primary to Senior Secondary with modern teaching methodologies.',
};

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      <Academics />
      <WhyChooseUs />
    </div>
  );
}