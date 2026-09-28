import React, { useState } from 'react';
import { Attraction } from '../types';

interface AttractionsProps {
  attractions: Attraction[];
  onExplore: (destination: string) => void;
}

export default function Attractions({ attractions, onExplore }: AttractionsProps) {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  return (
    <section id="attractions" className="py-20 bg-emerald-950 text-white relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-400 font-semibold uppercase tracking-widest text-xs">Unforgettable Destinations</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-amber-50 mt-2">Ethiopian Marvels</h2>
          </div>
          <p className="text-gray-300 max-w-md mt-4 md:mt-0 text-sm">
            Explore ancient civilizational roots, extreme volcanic landscapes, and endemic wildlife found nowhere else on earth.
          </p>
        </div>

        {/* Attractions Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedAttraction(attraction)}
              className="group relative rounded-2xl overflow-hidden shadow-2xl h-80 transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-emerald-900/40 hover:border-amber-400/50"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedAttraction(attraction);
                }
              }}
            >
              <img 
                src={attraction.image} 
                alt={attraction.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-amber-400 font-medium text-xs uppercase tracking-wider">{attraction.tag}</span>
                <h3 className="font-serif text-2xl font-bold text-white mb-1 group-hover:text-amber-200 transition-colors">{attraction.title}</h3>
                <p className="text-gray-300 text-xs line-clamp-2">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Details Modal */}
      {selectedAttraction && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedAttraction(null)}
        >
          <div 
            className="bg-white text-gray-900 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedAttraction(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              aria-label="Close details"
            >
              <i className="fa-solid fa-xmark text-base"></i>
            </button>

            {/* Destination Hero Image */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden flex-shrink-0">
              <img 
                src={selectedAttraction.image} 
                alt={selectedAttraction.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {selectedAttraction.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-2 text-white">
                  {selectedAttraction.title}
                </h3>
              </div>
            </div>

            {/* Destination Content Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              {/* Badges / Meta Info */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 pb-3 border-b border-gray-100">
                {selectedAttraction.location && (
                  <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full text-gray-800">
                    <i className="fa-solid fa-location-dot text-brand-gold"></i>
                    <span>{selectedAttraction.location}</span>
                  </span>
                )}
                {selectedAttraction.bestTimeToVisit && (
                  <span className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-amber-900">
                    <i className="fa-regular fa-calendar-check text-amber-600"></i>
                    <span>Best Time: {selectedAttraction.bestTimeToVisit}</span>
                  </span>
                )}
              </div>

              {/* Full Overview */}
              <div>
                <h4 className="font-serif text-lg font-bold text-brand-emerald mb-2">Destination Overview</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedAttraction.fullOverview || selectedAttraction.description}
                </p>
              </div>

              {/* Destination Key Highlights */}
              <div className="bg-brand-sand/30 border border-brand-gold/30 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-gray-800">
                <h5 className="font-bold text-brand-emerald mb-3 flex items-center gap-2 text-sm">
                  <i className="fa-solid fa-star text-amber-500"></i>
                  Key Highlights &amp; Experiences
                </h5>
                <ul className="space-y-2.5">
                  {(selectedAttraction.highlights || [
                    "Breathtaking scenery and unique Ethiopian landscapes",
                    "Guided by experienced local experts and drivers",
                    "Flexible scheduling with custom vehicle and itinerary options"
                  ]).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <i className="fa-solid fa-circle-check text-emerald-600 text-sm mt-0.5 flex-shrink-0"></i>
                      <span className="leading-snug">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button 
                  onClick={() => {
                    const dest = selectedAttraction.link;
                    setSelectedAttraction(null);
                    onExplore(dest);
                  }}
                  className="w-full sm:flex-1 bg-brand-emerald hover:bg-emerald-800 text-white py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-compass text-amber-300"></i>
                  <span>Browse {selectedAttraction.link} Tour Packages</span>
                </button>
                <button 
                  onClick={() => setSelectedAttraction(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold text-xs sm:text-sm transition-colors text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
