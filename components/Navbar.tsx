'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { schoolConfig } from '@/config/school.config';
import Link from 'next/link';
import Image from 'next/image';
import SchoolLogo from '../images/SchoolLogo1.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo and School Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <div className="relative w-16 h-16 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={SchoolLogo}
                alt="Essence Public School Logo"
                fill
                sizes="64px"
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary font-poppins leading-tight">
                {schoolConfig.name}
              </h1>

              <p className="text-xs text-gray-600 italic mt-1 whitespace-nowrap">
                {schoolConfig.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-grow">
            {schoolConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group whitespace-nowrap"
              >
                {item.name}

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0">

            {/* Phone - Only show on XL screens */}
            <a
              href={`tel:${schoolConfig.contact.phone}`}
              className="hidden xl:flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />

              <span>
                {schoolConfig.contact.phone}
              </span>
            </a>

            {/* Admission Button */}
            <Link
              href="/admissions"
              className="bg-secondary text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Admission
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">

              {schoolConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200 space-y-3">

                <a
                  href={`tel:${schoolConfig.contact.phone}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-primary"
                >
                  <Phone className="w-4 h-4" />
                  <span>{schoolConfig.contact.phone}</span>
                </a>

                <a
                  href={`mailto:${schoolConfig.contact.email}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-primary"
                >
                  <Mail className="w-4 h-4" />
                  <span>{schoolConfig.contact.email}</span>
                </a>

                <Link
                  href="/admissions"
                  className="block bg-secondary text-primary text-center px-6 py-3 rounded-lg font-semibold mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admission
                </Link>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}