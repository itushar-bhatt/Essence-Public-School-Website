import { StaticImageData } from "next/image";
import SchoolImage from "../images/School.png"

export interface SchoolConfig {
  // Branding
  name: string;
  tagline: string;
  logo?: string;
  
  // Colors
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  
  // Contact Information
  contact: {
    address: string;
    phone: string;
    email: string;
    workingHours: string;
    mapEmbedUrl?: string;
  };
  
  // Social Media
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  
  // Navigation
  navigation: Array<{
    name: string;
    href: string;
  }>;
  
  // Hero Section
  hero: {
    headline: string;
    subheading: string;
    image: StaticImageData;
    ctaButtons: Array<{
      text: string;
      href: string;
      variant: 'primary' | 'secondary';
    }>;
  };
  
  // About Section
  about: {
    history: string;
    mission: string;
    vision: string;
    principalMessage: {
      name: string;
      designation: string;
      message: string;
      image: string;
    };
  };
  
  // Statistics
  stats: Array<{
    label: string;
    value: string;
    icon: string;
  }>;
  
  // Why Choose Us Features
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  
  // Academic Programs
  academics: Array<{
    title: string;
    description: string;
    subjects: string[];
    image: string;
    link: string;
  }>;
  
  // Facilities
  facilities: Array<{
    name: string;
    description: string;
    icon: string;
    image: string;
  }>;
  
  // Gallery
  gallery: Array<{
    category: string;
    images: Array<{
      url: string;
      alt: string;
    }>;
  }>;
  
  // News & Events
  news: Array<{
    title: string;
    date: string;
    category: string;
    excerpt: string;
    image: string;
  }>;
  
  // Testimonials
  testimonials: Array<{
    name: string;
    role: 'parent' | 'student' | 'teacher';
    message: string;
    image: string;
    rating: number;
  }>;
  
  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}

export const schoolConfig: SchoolConfig = {
  // Branding
  name: "Essence Public School",
  tagline: "Inspiring Minds, Building Futures",
  
  // Colors
  colors: {
    primary: "#0B3D91",
    secondary: "#F4B400",
    accent: "#F5F5F5",
  },
  
  // Contact Information
  contact: {
    address: "Khora Colony, Hayat Nagar, Opp CNG Petrol Pump, Ghaziabad, Uttar Pradesh 201020, India",
    phone: "+91 9999083299",
    email: "info@essencepublicschool.edu.in",
    workingHours: "Monday - Friday: 8:00 AM - 3:00 PM",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3471363390036!2d77.34065387550031!3d28.619356375672016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce524b9e6b32d%3A0x930365f7150d6a32!2sEssence%20Public%20School!5e0!3m2!1sen!2sin!4v1784283340208!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22strict-origin-when-cross-origin",
  },
  
  // Social Media
  socialMedia: {
    facebook: "https://facebook.com/essencepublicschool",
    twitter: "https://twitter.com/essencepublic",
    instagram: "https://instagram.com/essencepublicschool",
    linkedin: "https://linkedin.com/company/essence-public-school",
    youtube: "https://youtube.com/@essencepublicschool",
  },
  
  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Academics", href: "/#academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Facilities", href: "/#facilities" },
    { name: "Gallery", href: "/#gallery" },
    { name: "News & Events", href: "/#news" },
    { name: "Contact", href: "/#contact" },
  ],


  // Hero Section
  hero: {
    headline: "Empowering Young Minds for a Brighter Tomorrow",
    subheading: "Admissions Open for Session 2026-27",
    image: SchoolImage,
    ctaButtons: [
      { text: "Apply Now", href: "/admissions", variant: "primary" },
      { text: "Contact Us", href: "/contact", variant: "secondary" },
    ],
  },
  
  // About Section
  about: {
    history: "Established in 1995, Essence Public School has been a beacon of excellence in education for over 28 years. Founded with a vision to provide holistic education that nurtures intellectual, physical, emotional, and social development, we have grown from a small institution to one of the most respected schools in the region.",
    mission: "To provide a stimulating learning environment that encourages curiosity, creativity, and critical thinking, preparing students to become responsible global citizens who contribute positively to society.",
    vision: "To be a leading educational institution that empowers students to achieve academic excellence while developing strong character, ethical values, and a lifelong love for learning.",
    principalMessage: {
      name: "Dr. Sarah Johnson",
      designation: "Principal",
      message: "At Essence Public School, we believe every child is unique and has infinite potential. Our dedicated faculty and state-of-the-art facilities create the perfect environment for students to explore, learn, and grow. We are committed to nurturing not just academic excellence but also character, creativity, and compassion. Together, we build futures that shine bright.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    },
  },
  
  // Statistics
  stats: [
    { label: "Students", value: "2500+", icon: "Users" },
    { label: "Teachers", value: "150+", icon: "GraduationCap" },
    { label: "Years of Excellence", value: "28+", icon: "Award" },
    { label: "Success Rate", value: "98%", icon: "TrendingUp" },
  ],
  
  // Why Choose Us Features
  features: [
    {
      title: "Experienced Teachers",
      description: "Highly qualified and dedicated faculty with years of teaching experience and passion for nurturing young minds.",
      icon: "Users",
    },
    {
      title: "Smart Classrooms",
      description: "Technology-enabled classrooms with interactive smart boards, digital learning tools, and modern teaching aids.",
      icon: "Monitor",
    },
    {
      title: "Modern Labs",
      description: "State-of-the-art science, computer, and mathematics laboratories equipped with the latest equipment and technology.",
      icon: "FlaskConical",
    },
    {
      title: "Sports Excellence",
      description: "Comprehensive sports programs with professional coaching in cricket, basketball, swimming, athletics, and more.",
      icon: "Trophy",
    },
    {
      title: "Safe Campus",
      description: "24/7 security, CCTV surveillance, and strict safety protocols ensure a secure learning environment for all students.",
      icon: "Shield",
    },
    {
      title: "Holistic Development",
      description: "Focus on overall personality development through arts, music, dance, drama, and various extracurricular activities.",
      icon: "Sparkles",
    },
  ],
  
  // Academic Programs
  academics: [
    {
      title: "Pre Primary",
      description: "Play-based learning environment that fosters creativity, social skills, and foundational knowledge through engaging activities.",
      subjects: ["Language Skills", "Number Work", "Environmental Studies", "Art & Craft", "Music & Dance", "Physical Education"],
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
      link: "/academics#pre-primary",
    },
    {
      title: "Primary",
      description: "Comprehensive curriculum building strong academic foundations while encouraging curiosity and independent thinking.",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer Science", "Art", "Physical Education"],
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80",
      link: "/academics#primary",
    },
    {
      title: "Middle School",
      description: "Advanced learning with focus on conceptual understanding, critical thinking, and practical application of knowledge.",
      subjects: ["English", "Mathematics", "Science", "Social Science", "Hindi", "Sanskrit", "Computer Science", "Art Education"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
      link: "/academics#middle",
    },
    {
      title: "Senior Secondary",
      description: "Specialized streams (Science, Commerce, Humanities) with expert guidance for board exams and career preparation.",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Accountancy", "Business Studies", "Economics", "History", "Political Science"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110a6f2?w=600&q=80",
      link: "/academics#senior-secondary",
    },
  ],
  
  // Facilities
  facilities: [
    {
      name: "Computer Lab",
      description: "Advanced computer laboratory with high-speed internet, latest software, and one-to-one student-computer ratio.",
      icon: "Monitor",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    },
    {
      name: "Science Lab",
      description: "Well-equipped laboratories for Physics, Chemistry, and Biology with modern apparatus and safety equipment.",
      icon: "FlaskConical",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    },
    {
      name: "Library",
      description: "Extensive collection of books, journals, and digital resources fostering a love for reading and research.",
      icon: "BookOpen",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80",
    },
    {
      name: "Transport",
      description: "Safe and reliable fleet of buses with GPS tracking, covering all major areas of the city.",
      icon: "Bus",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80",
    },
    {
      name: "Sports Complex",
      description: "Indoor and outdoor sports facilities including basketball court, cricket ground, swimming pool, and gymnasium.",
      icon: "Trophy",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&q=80",
    },
    {
      name: "Medical Room",
      description: "Fully equipped medical facility with qualified nurse and regular health checkups for students.",
      icon: "HeartPulse",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    },
    {
      name: "Music Room",
      description: "Dedicated space for vocal and instrumental music with a variety of instruments and professional instructors.",
      icon: "Music",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
    },
    {
      name: "Playground",
      description: "Spacious playground with separate areas for different age groups, promoting physical fitness and teamwork.",
      icon: "Trees",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&q=80",
    },
    {
      name: "Auditorium",
      description: "Modern auditorium with seating capacity of 500, perfect for assemblies, events, and cultural programs.",
      icon: "Mic",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80",
    },
  ],
  
  // Gallery
  gallery: [
    {
      category: "Campus",
      images: [
        { url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80", alt: "School Building" },
        { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80", alt: "Main Entrance" },
        { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3a?w=800&q=80", alt: "Classroom" },
        { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80", alt: "Library" },
      ],
    },
    {
      category: "Events",
      images: [
        { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", alt: "Annual Day" },
        { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80", alt: "Science Fair" },
        { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80", alt: "Cultural Program" },
        { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80", alt: "Award Ceremony" },
      ],
    },
    {
      category: "Sports",
      images: [
        { url: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80", alt: "Sports Day" },
        { url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80", alt: "Cricket Match" },
        { url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80", alt: "Athletics" },
        { url: "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=800&q=80", alt: "Basketball" },
      ],
    },
    {
      category: "Celebrations",
      images: [
        { url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80", alt: "Independence Day" },
        { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80", alt: "Republic Day" },
        { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80", alt: "Annual Function" },
        { url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80", alt: "Festival Celebration" },
      ],
    },
  ],
  
  // News & Events
  news: [
    {
      title: "Admissions Open for 2026-27 Academic Session",
      date: "2025-12-15",
      category: "Admissions",
      excerpt: "We are now accepting applications for the upcoming academic session. Limited seats available. Apply now to secure your child's future at Essence Public School.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110a6f2?w=600&q=80",
    },
    {
      title: "Annual Sports Day 2025 - A Grand Success",
      date: "2025-12-10",
      category: "Events",
      excerpt: "Our annual sports day witnessed enthusiastic participation from students across all grades. The event showcased exceptional talent and sportsmanship.",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&q=80",
    },
    {
      title: "Science Exhibition Winners Announced",
      date: "2025-12-05",
      category: "Achievements",
      excerpt: "Congratulations to all winners of the Inter-House Science Exhibition. The projects displayed innovation, creativity, and scientific temper.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    },
    {
      title: "Winter Vacation Notice",
      date: "2025-12-01",
      category: "Holiday Notice",
      excerpt: "School will remain closed from December 24, 2025 to January 5, 2026 for winter vacation. Classes will resume on January 6, 2026.",
      image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=600&q=80",
    },
  ],
  
  // Testimonials
  testimonials: [
    {
      name: "Mr. Rajesh Kumar",
      role: "parent",
      message: "Essence Public School has been instrumental in shaping my child's future. The teachers are dedicated, the curriculum is comprehensive, and the focus on holistic development is remarkable. My child has grown not just academically but also in confidence and character.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "student",
      message: "I love being a student at Essence Public School. The teachers are supportive, the facilities are excellent, and there are so many opportunities to learn and grow. I've made lifelong friends here and developed skills that will help me forever.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      rating: 5,
    },
    {
      name: "Mrs. Anjali Verma",
      role: "teacher",
      message: "Teaching at Essence Public School is a rewarding experience. The administration supports innovative teaching methods, and we have the resources to provide quality education. Seeing our students succeed and grow is the greatest joy.",
      image: "https://images.unsplash.com/photo-1580892047527-72de7777b6e8?w=200&q=80",
      rating: 5,
    },
    {
      name: "Mr. & Mrs. Gupta",
      role: "parent",
      message: "The school's emphasis on both academics and extracurricular activities is exactly what we were looking for. Our daughter has excelled in sports and academics simultaneously. The communication with parents is excellent.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      rating: 5,
    },
    {
      name: "Arjun Singh",
      role: "student",
      message: "The school provides a perfect balance of studies and fun. The labs are well-equipped, the library has amazing books, and the sports facilities are top-notch. I'm proud to be an Essence student.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      rating: 5,
    },
  ],
  
  // SEO
  seo: {
    title: "Essence Public School - Inspiring Minds, Building Futures | Premier CBSE School",
    description: "Essence Public School is a premier educational institution offering quality education from Pre-Primary to Senior Secondary. Admissions open for 2026-27. Nurturing excellence since 1995.",
    keywords: [
      "Essence Public School",
      "best school in Delhi",
      "CBSE school",
      "quality education",
      "premier school",
      "holistic development",
      "admissions open",
      "top school India",
    ],
    ogImage: "/images/School.png",
  },
}