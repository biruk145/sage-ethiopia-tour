import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Example images for the gallery
const galleryImages = [
  "/IMG_3118.JPG",
  "/IMG_3123.JPG",
  "/IMG_6605.jpeg",
  "/IMG_6051.jpeg",
  "/IMG_6089.jpeg",
  "/IMG_6244.jpeg"
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center space-y-3 mb-12">
        <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs">Capturing Moments</span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900">Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto pt-4">
          A glimpse into the unforgettable experiences and breathtaking landscapes our guests have enjoyed.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-200"
          >
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <i className="fa-solid fa-expand text-white text-3xl drop-shadow-md"></i>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-[110] text-white/70 hover:text-white w-12 h-12 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark text-4xl"></i>
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Enlarged gallery view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
