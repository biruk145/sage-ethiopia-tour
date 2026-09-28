import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "United Kingdom",
    text: "Our trip to the Simien Mountains was absolutely breathtaking. The guides from Sage Ethiopia Tour took care of every detail, allowing us to just soak in the incredible natural beauty. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "David Chen",
    location: "Canada",
    text: "The historical circuit exceeded all my expectations. Standing before the rock-hewn churches of Lalibela is an experience I will never forget. Their deep local knowledge made all the difference.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Spain",
    text: "From the bustling streets of Addis Ababa to the serene landscapes of the south, everything was flawlessly organized. The traditional coffee ceremonies were a beautiful and authentic cultural touch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center space-y-3 mb-16">
        <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs">Traveler Stories</span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900">What Our Guests Say</h2>
      </div>

      <div className="relative max-w-4xl mx-auto min-h-[250px] sm:min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center text-center px-4"
          >
            <i className="fa-solid fa-quote-left text-4xl text-brand-gold/30 mb-6"></i>
            <p className="text-lg md:text-2xl text-gray-700 font-serif italic mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center space-x-4">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-brand-gold"
              />
              <div className="text-left">
                <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                <span className="text-sm text-gray-500">{testimonials[currentIndex].location}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center space-x-2 mt-20 sm:mt-16">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-brand-gold w-8' : 'bg-gray-300 hover:bg-brand-gold/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
