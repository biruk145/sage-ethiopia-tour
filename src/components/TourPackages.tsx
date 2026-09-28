import React, { useState } from 'react';
import { Tour } from '../types';

interface TourPackagesProps {
  tours: Tour[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function TourPackages({ tours, activeCategory, onCategoryChange }: TourPackagesProps) {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center space-y-3 mb-12">
        <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs">Curated Expeditions</span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-emerald">Popular Tour Packages</h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Choose from carefully crafted itineraries designed to showcase the authentic spirit and breathtaking beauty of Ethiopia.
        </p>
        
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
          {/* 1. All Tours */}
          <button 
            onClick={() => onCategoryChange('all')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md ${
              activeCategory === 'all' 
                ? 'bg-brand-emerald text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Tours
          </button>

          {/* 2. Addis Ababa City Tour */}
          <div className="relative group/filter z-20">
            <button 
              onClick={() => onCategoryChange('daytour')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1 ${
                activeCategory === 'daytour' || activeCategory === 'fullday' || activeCategory === 'halfday'
                  ? 'bg-brand-emerald text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <i className={`fa-solid fa-city mr-1 ${activeCategory === 'daytour' || activeCategory === 'fullday' || activeCategory === 'halfday' ? 'text-amber-300' : 'text-brand-gold'}`}></i> 
              Addis Ababa City Tour
              <i className="fa-solid fa-chevron-down text-[10px] ml-1 transition-transform group-hover/filter:rotate-180"></i>
            </button>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 opacity-0 invisible group-hover/filter:opacity-100 group-hover/filter:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover/filter:translate-y-0 shadow-xl rounded-xl z-50">
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden py-1 flex flex-col">
                <button 
                  onClick={() => onCategoryChange('fullday')} 
                  className={`text-left px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${activeCategory === 'fullday' ? 'text-brand-emerald font-bold' : 'text-gray-700'}`}
                >
                  Full Day tour
                </button>
                <button 
                  onClick={() => onCategoryChange('halfday')} 
                  className={`text-left px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 border-t border-gray-50 ${activeCategory === 'halfday' ? 'text-brand-emerald font-bold' : 'text-gray-700'}`}
                >
                  Half-Day tour
                </button>
              </div>
            </div>
          </div>

          {/* 3. Cultural Tours */}
          <button 
            onClick={() => onCategoryChange('cultural')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === 'cultural'
                ? 'bg-brand-emerald text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <i className={`fa-solid fa-masks-theater mr-1 ${activeCategory === 'cultural' ? 'text-amber-300' : 'text-brand-gold'}`}></i> Cultural Tours
          </button>

          {/* 4. Festivals */}
          <button 
            onClick={() => onCategoryChange('festival')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === 'festival'
                ? 'bg-brand-emerald text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <i className={`fa-solid fa-music mr-1 ${activeCategory === 'festival' ? 'text-amber-300' : 'text-brand-gold'}`}></i> Festivals
          </button>

          {/* 5. Adventure and Trekking */}
          <button 
            onClick={() => onCategoryChange('adventure')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === 'adventure'
                ? 'bg-brand-emerald text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <i className={`fa-solid fa-mountain mr-1 ${activeCategory === 'adventure' ? 'text-amber-300' : 'text-brand-gold'}`}></i> Adventure & Trekking
          </button>

          {/* 6. Historical Circuit */}
          <button 
            onClick={() => onCategoryChange('historical')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === 'historical'
                ? 'bg-brand-emerald text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <i className={`fa-solid fa-monument mr-1 ${activeCategory === 'historical' ? 'text-amber-300' : 'text-brand-gold'}`}></i> Historical Circuit
          </button>
        </div>
      </div>

      {/* Tour Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.length > 0 ? (
          tours.map(tour => (
            <div 
              key={tour.id} 
              onClick={() => setSelectedTour(tour)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                {tour.price && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-emerald shadow-sm">
                    {tour.price}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-serif text-xl font-bold">{tour.title}</h3>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  {tour.id !== 1 && (
                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                      <span className="flex items-center"><i className="fa-regular fa-clock text-brand-gold mr-1"></i> {tour.durationLabel}</span>
                      <span className="flex items-center"><i className="fa-solid fa-location-dot text-brand-gold mr-1"></i> {tour.destination}</span>
                    </div>
                  )}
                  <p className={`text-gray-600 text-sm leading-relaxed ${tour.id === 1 ? 'line-clamp-6 text-gray-700' : 'mb-4 line-clamp-3'}`}>
                    {tour.description}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedTour(tour)}
                  className="w-full mt-auto bg-brand-sand border border-brand-gold text-brand-goldHover hover:bg-brand-gold hover:text-white py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  {tour.id === 1 ? 'Read More' : 'View Itinerary'} <i className="fa-solid fa-arrow-right text-xs"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No tours found matching your search criteria. Please try again.</p>
          </div>
        )}
      </div>

      {/* Tour Detail Modal */}
      {selectedTour && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setSelectedTour(null)}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 flex flex-col md:flex-row transform transition-transform">
            <button 
              onClick={() => setSelectedTour(null)}
              className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur text-gray-800 hover:text-brand-emerald w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            {/* Image side */}
            <div className="md:w-[45%] relative h-64 md:h-auto min-h-[300px]">
              <img src={selectedTour.image} alt={selectedTour.title} className="absolute inset-0 w-full h-full object-cover" />
              {selectedTour.price && (
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-brand-emerald shadow-sm">
                  {selectedTour.price}
                </div>
              )}
            </div>
            
            {/* Content side */}
            <div className="md:w-[55%] p-6 md:p-8 flex flex-col bg-white">
              <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-2">
                {selectedTour.category === 'daytour' || selectedTour.category === 'fullday' || selectedTour.category === 'halfday' 
                  ? 'Addis Ababa City Tour' 
                  : selectedTour.category === 'historical' 
                    ? 'Historical Circuit' 
                    : selectedTour.category === 'cultural' 
                      ? 'Cultural Tour' 
                      : selectedTour.category === 'festival' 
                        ? 'Festival Experience' 
                        : 'Adventure'}
              </span>
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">{selectedTour.title}</h3>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100">
                <span className="flex items-center bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <i className="fa-regular fa-clock text-brand-gold mr-2"></i> {selectedTour.durationLabel}
                </span>
                <span className="flex items-center bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <i className="fa-solid fa-location-dot text-brand-gold mr-2"></i> {selectedTour.destination}
                </span>
              </div>
              
              <div className="prose prose-sm text-gray-600 mb-8 flex-grow">
                <h4 className="text-lg font-bold text-gray-900 mb-3 font-serif">Overview</h4>
                <p className="leading-relaxed text-base whitespace-pre-line">{selectedTour.description}</p>
                
                {selectedTour.id !== 1 && (
                  <div className="mt-8 bg-brand-sand/30 p-5 rounded-xl border border-brand-gold/20">
                    <h4 className="font-bold text-brand-emerald mb-3 flex items-center gap-2">
                      <i className="fa-solid fa-clipboard-check text-brand-gold"></i> Included in this package
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                      <li className="flex items-center"><i className="fa-solid fa-check text-brand-emerald mr-2"></i> Expert local guide</li>
                      <li className="flex items-center"><i className="fa-solid fa-check text-brand-emerald mr-2"></i> Private or group transportation</li>
                      <li className="flex items-center"><i className="fa-solid fa-check text-brand-emerald mr-2"></i> Entrance fees</li>
                      <li className="flex items-center"><i className="fa-solid fa-check text-brand-emerald mr-2"></i> Authentic experiences</li>
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="mt-auto flex gap-4 pt-4">
                <button 
                  onClick={() => setSelectedTour(null)}
                  className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-semibold transition-colors"
                >
                  Close
                </button>
                <a 
                  href="#booking"
                  onClick={() => {
                    setSelectedTour(null);
                    setTimeout(() => {
                      // Automatically select the tour in the dropdown if we can
                      const tourSelect = document.getElementById('tour') as HTMLSelectElement;
                      if (tourSelect) {
                        tourSelect.value = selectedTour.title;
                        // Dispatch change event for React to pick it up
                        const event = new Event('change', { bubbles: true });
                        tourSelect.dispatchEvent(event);
                      }
                    }, 100);
                  }}
                  className="flex-[2] bg-brand-emerald hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <i className="fa-regular fa-calendar-check"></i> Request Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
