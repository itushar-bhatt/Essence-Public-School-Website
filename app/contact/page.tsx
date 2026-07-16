import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact Us - Essence Public School',
  description: 'Get in touch with Essence Public School. Find our address, phone number, email, and send us a message.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Contact />
    </div>
  );
}