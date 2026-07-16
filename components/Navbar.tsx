'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { schoolConfig } from '@/config/school.config';
import Link from 'next/link';

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
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and School Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              {schoolConfig.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary font-poppins">
                {schoolConfig.name}
              </h1>
              <p className="text-xs text-gray-600 italic">{schoolConfig.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {schoolConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a href={`tel:${schoolConfig.contact.phone}`} className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>{schoolConfig.contact.phone}</span>
              </a>
            </div>
            <Link
              href="/admissions"
              className="bg-secondary text-primary px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
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
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a
                  href={`tel:${schoolConfig.contact.phone}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary"
                >
                  <Phone className="w-4 h-4" />
                  <span>{schoolConfig.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${schoolConfig.contact.email}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary"
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