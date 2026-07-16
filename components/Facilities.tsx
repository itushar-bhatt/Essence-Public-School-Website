'use client';

import { motion } from 'framer-motion';
import { schoolConfig } from '@/config/school.config';
import { 
  Monitor, 
  FlaskConical, 
  BookOpen, 
  Bus, 
  Trophy, 
  HeartPulse, 
  Music, 
  Trees, 
  Mic 
} from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Monitor,
  FlaskConical,
  BookOpen,
  Bus,
  Trophy,
  HeartPulse,
  Music,
  Trees,
  Mic,
};

export default function Facilities() {
  const { facilities } = schoolConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            World-class infrastructure designed to provide the best learning environment
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {facilities.map((facility, index) => {
            const IconComponent = iconMap[facility.icon] || Monitor;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white font-poppins">
                      {facility.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}