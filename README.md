# Essence Public School Website

A modern, responsive, and professional school website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Configuration-Driven Architecture** - Easy to customize for multiple schools
- 📱 **Fully Responsive** - Mobile-first design with hamburger menu
- ⚡ **Performance Optimized** - Image optimization, lazy loading, and static rendering
- 🎭 **Smooth Animations** - Framer Motion for engaging user experience
- 🔍 **SEO Optimized** - Dynamic metadata, Open Graph, and Twitter Cards
- ♿ **Accessible** - Semantic HTML, ARIA labels, and keyboard navigation
- 🎯 **Modern UI** - Premium design with smooth hover effects and transitions

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins (headings) & Inter (body)

## Project Structure

```
school/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── academics/page.tsx  # Academics page
│   ├── admissions/page.tsx # Admissions page
│   ├── gallery/page.tsx    # Gallery page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   ├── Footer.tsx          # Footer with links and social media
│   ├── Hero.tsx            # Hero section with animations
│   ├── Stats.tsx           # Statistics counter section
│   ├── About.tsx           # About section with principal's message
│   ├── WhyChooseUs.tsx     # Features grid
│   ├── Academics.tsx       # Academic programs
│   ├── Facilities.tsx      # Facilities grid
│   ├── Gallery.tsx         # Photo gallery with lightbox
│   ├── News.tsx            # News & events cards
│   ├── Testimonials.tsx    # Testimonial slider
│   ├── CTA.tsx             # Call to action section
│   └── Contact.tsx         # Contact form and info
├── config/
│   └── school.config.ts    # ⭐ Central configuration file
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # XML sitemap
└── tailwind.config.ts      # Tailwind configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd school
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization for Your School

### Easy Configuration

All school-specific content is in **`config/school.config.ts`**. To create a new school website:

1. Copy the entire project
2. Update `config/school.config.ts` with your school's information:
   - School name, tagline, and colors
   - Contact information
   - Navigation menu
   - Hero section content
   - About section (history, mission, vision, principal's message)
   - Statistics
   - Features
   - Academic programs
   - Facilities
   - Gallery images
   - News & events
   - Testimonials
   - Social media links
   - SEO metadata

3. Update the domain in:
   - `public/robots.txt`
   - `public/sitemap.xml`
   - `app/layout.tsx` (if needed)

4. Run `npm run dev` and see your school's website!

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder

### Other Platforms

The built application can be deployed to any platform that supports Next.js.

## Features Included

### Home Page
- Hero section with animated entrance
- Statistics counter
- About section with history, mission, vision
- Principal's message
- Why Choose Us (6 feature cards)
- Academic programs (4 levels)
- Facilities (9 facilities)
- Photo gallery with category filter and lightbox
- News & events
- Testimonials slider
- Call to action
- Contact form

### Animations
- Fade up on scroll
- Slide in effects
- Hover animations
- Smooth transitions
- Floating background shapes
- Button hover effects

### SEO
- Dynamic meta tags
- Open Graph tags
- Twitter Cards
- robots.txt
- sitemap.xml

### Performance
- Next.js Image optimization
- Lazy loading
- Code splitting
- Static rendering where possible

### Accessibility
- Semantic HTML5 elements
- ARIA labels
- Keyboard navigation support
- Proper color contrast
- Alt text for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License.

## Support

For support, email info@essencepublicschool.edu.in or create an issue in the repository.

---

Built with ❤️ for Essence Public School