import CTA from '@/components/CTA';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Admissions - Essence Public School',
  description: 'Apply for admissions at Essence Public School. Join our community of learners for the 2026-27 academic session.',
};

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen">
      <CTA />
      <Contact />
    </div>
  );
}