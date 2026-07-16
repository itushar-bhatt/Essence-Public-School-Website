import Gallery from '@/components/Gallery';

export const metadata = {
  title: 'Gallery - Essence Public School',
  description: 'Explore photo galleries of Essence Public School campus, events, sports, and celebrations.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Gallery />
    </div>
  );
}