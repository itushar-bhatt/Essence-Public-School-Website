'use client';

import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, TrendingUp } from 'lucide-react';
import { schoolConfig } from '@/config/school.config';

const iconMap: { [key: string]: any } = {
  Users,
  GraduationCap,
  Award,
  TrendingUp,
};

export default function Stats() {
  const { stats } = schoolConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || Award;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary font-poppins mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}