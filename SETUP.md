# Setup Guide - Essence Public School Website

This guide will help you set up and run the school website on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.17 or later) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## Installation Steps

### 1. Install Dependencies

Open your terminal/command prompt in the project directory and run:

```bash
npm install
```

This will install all required dependencies including:
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- clsx & tailwind-merge

### 2. Run Development Server

```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### 4. Start Production Server

```bash
npm run start
```

## Project Structure Overview

```
school/
├── config/
│   └── school.config.ts    ← MAIN CONFIGURATION FILE
├── app/
│   ├── layout.tsx          ← Root layout
│   ├── page.tsx            ← Home page
│   ├── about/page.tsx      ← About page
│   ├── academics/page.tsx  ← Academics page
│   ├── admissions/page.tsx ← Admissions page
│   ├── gallery/page.tsx    ← Gallery page
│   └── contact/page.tsx    ← Contact page
├── components/             ← Reusable components
├── lib/                    ← Utility functions
└── public/                 ← Static assets
```

## Customization Guide

### Quick Start - Create a New School Website

1. **Copy the project folder** to a new location

2. **Update `config/school.config.ts`** with your school's information:
   - School name and tagline
   - Colors (primary, secondary, accent)
   - Contact details (address, phone, email)
   - Navigation menu items
   - Hero section content
   - About section (history, mission, vision, principal's message)
   - Statistics
   - Features (Why Choose Us)
   - Academic programs
   - Facilities
   - Gallery images
   - News & events
   - Testimonials
   - Social media links
   - SEO metadata

3. **Update domain in SEO files**:
   - `public/robots.txt` - Update sitemap URL
   - `public/sitemap.xml` - Update all URLs
   - `app/layout.tsx` - Update metadata if needed

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Visit** [http://localhost:3000](http://localhost:3000)

### Configuration File Structure

The `config/school.config.ts` file contains all school-specific data:

```typescript
export const schoolConfig = {
  // Branding
  name: "School Name",
  tagline: "Your Tagline",
  colors: {
    primary: "#0B3D91",
    secondary: "#F4B400",
    accent: "#F5F5F5"
  },
  
  // Contact
  contact: {
    address: "...",
    phone: "...",
    email: "...",
    workingHours: "..."
  },
  
  // Navigation
  navigation: [...],
  
  // All content sections
  hero: {...},
  about: {...},
  stats: [...],
  features: [...],
  academics: [...],
  facilities: [...],
  gallery: [...],
  news: [...],
  testimonials: [...],
  
  // SEO
  seo: {...}
}
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
npm run dev -- -p 3001
```

### TypeScript Errors

If you see TypeScript errors about missing modules, ensure all dependencies are installed:

```bash
npm install
```

### Images Not Loading

Images are loaded from Unsplash. Ensure you have an internet connection. To use local images:

1. Place images in the `public/` folder
2. Update the config to use local paths (e.g., `/images/school-building.jpg`)

### Build Errors

If you encounter build errors:

1. Delete the `.next` folder: `rm -rf .next`
2. Reinstall dependencies: `npm install`
3. Try building again: `npm run build`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

### Deploy to Other Platforms

The built application (`.next` folder) can be deployed to any platform that supports Next.js.

## Environment Variables

For production, you may want to add environment variables:

1. Create `.env.local` file:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourschool.edu.in
   ```

2. Use in code:
   ```typescript
   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
   ```

## Performance Optimization

The website is already optimized with:
- ✅ Next.js Image optimization
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Static rendering
- ✅ Font optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Need Help?

If you encounter any issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the configuration file carefully
3. Ensure all dependencies are installed
4. Check the browser console for errors

## Next Steps

After setup:
1. Customize the configuration file
2. Add your school's images
3. Update contact information
4. Test all pages
5. Deploy to production

---

**Happy coding! 🚀**