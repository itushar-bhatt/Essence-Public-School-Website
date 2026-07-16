'use client';

import { motion } from 'framer-motion';
import { schoolConfig } from '@/config/school.config';
import { 
  Users, 
  Monitor, 
  FlaskConical, 
  Trophy, 
  Shield, 
  Sparkles 
} from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Users,
  Monitor,
  FlaskConical,
  Trophy,
  Shield,
  Sparkles,
};

export default function WhyChooseUs() {
  const { features } = schoolConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We provide a nurturing environment that fosters academic excellence and holistic development
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Users;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-secondary/20"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                    <div className="relative w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white group-hover:text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary font-poppins group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
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