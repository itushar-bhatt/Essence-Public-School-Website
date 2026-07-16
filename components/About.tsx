'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { schoolConfig } from '@/config/school.config';

export default function About() {
  const { about } = schoolConfig;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Our School</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A legacy of excellence in education, nurturing young minds for over two decades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* History */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Our History</h3>
            <p className="text-gray-700 leading-relaxed">{about.history}</p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">{about.mission}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">{about.vision}</p>
            </motion.div>
          </div>
        </div>

        {/* Principal's Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="relative w-48 h-48 mx-auto md:mx-0">
                <img
                  src={about.principalMessage.image}
                  alt={about.principalMessage.name}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 text-white">
              <h3 className="text-2xl font-bold mb-2 font-poppins">
                {about.principalMessage.name}
              </h3>
              <p className="text-secondary font-semibold mb-4">
                {about.principalMessage.designation}
              </p>
              <p className="text-gray-200 leading-relaxed italic text-lg">
                "{about.principalMessage.message}"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}