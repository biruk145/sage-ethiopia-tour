import React, { useState } from 'react';
import { Tour } from '../types';
import TourDetailModal from './TourDetailModal';
import addisAbabaEnaImage from '../assets/images/addis_ababa_ena.jpg';
import ashendaImage from '../assets/images/ashenda_ena.png';
import mountEntotoFallbackImage from '../assets/images/mount_entoto_park.webp';
import addisCityTourFallbackImage from '../assets/images/addis_ababa_city_tour.webp';

interface TourPackagesProps {
  tours: Tour[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function TourPackages({ tours, activeCategory, onCategoryChange }: TourPackagesProps) {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [showAllTours, setShowAllTours] = useState(false);

  const INITIAL_LIMIT = 6;
  const initialTours = tours.slice(0, INITIAL_LIMIT);
  const remainingTours = tours.slice(INITIAL_LIMIT);
  const hasMore = tours.length > INITIAL_LIMIT;

  const renderTourCard = (tour: Tour) => (
    <div 
      key={tour.id} 
      onClick={() => setSelectedTour(tour)}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
    >
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          onError={(e) => {
            if (tour.category === 'festival' || tour.id === 1) {
              e.currentTarget.src = ashendaImage;
            } else if (tour.id === 26) {
              e.currentTarget.src = mountEntotoFallbackImage;
            } else if (tour.id === 14) {
              e.currentTarget.src = addisCityTourFallbackImage;
            } else {
              e.currentTarget.src = addisAbabaEnaImage;
            }
          }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white font-serif text-lg sm:text-xl font-bold leading-tight">{tour.title}</h3>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
            {tour.durationLabel && (
              <span className="flex items-center"><i className="fa-regular fa-clock text-brand-gold mr-1"></i> {tour.durationLabel}</span>
            )}
            <span className="flex items-center"><i className="fa-solid fa-location-dot text-brand-gold mr-1"></i> {tour.destination}</span>
          </div>
          <p 
            style={{ fontSize: '16px', fontWeight: 'normal' }}
            className={`text-gray-600 text-base font-normal leading-relaxed ${tour.category === 'festival' || tour.id === 1 ? 'line-clamp-6 text-gray-700' : 'mb-4 line-clamp-3'}`}
          >
            {tour.description}
          </p>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setSelectedTour(tour);
          }}
          className="w-full mt-auto bg-brand-sand border border-brand-gold text-brand-goldHover hover:bg-brand-gold hover:text-white py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
        >
          {tour.category === 'festival' || tour.id === 1 ? 'Read More' : 'View Itinerary'} <i className="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>
    </div>
  );

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

      {/* Initial 6 Tour Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialTours.length > 0 ? (
          initialTours.map(tour => renderTourCard(tour))
        ) : (
          <div className="col-span-full text-center py-12 px-4 bg-gray-50/80 rounded-3xl border border-gray-100 max-w-lg mx-auto shadow-sm">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-amber-50 text-brand-gold flex items-center justify-center text-2xl shadow-sm">
              <i className="fa-solid fa-compass"></i>
            </div>
            <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">No tours found matching this filter</h3>
            <p className="text-gray-500 text-sm mb-5">
              Explore other durations or view all our handcrafted Ethiopian adventures.
            </p>
            <button
              onClick={() => onCategoryChange('all')}
              className="px-6 py-2.5 bg-brand-emerald hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <i className="fa-solid fa-rotate-left"></i>
              <span>Show All Tours</span>
            </button>
          </div>
        )}
      </div>

      {/* More Tours Button */}
      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              const nextState = !showAllTours;
              setShowAllTours(nextState);
              if (!nextState) {
                document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-brand-emerald hover:bg-emerald-800 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
          >
            <span>{showAllTours ? 'Show Less Tours' : `More Tours (${remainingTours.length} More)`}</span>
            <i className={`fa-solid ${showAllTours ? 'fa-chevron-up' : 'fa-arrow-down'} text-sm text-brand-gold transition-transform group-hover:scale-110`}></i>
          </button>
        </div>
      )}

      {/* More Tours Section */}
      {hasMore && showAllTours && (
        <div className="mt-14 pt-12 border-t border-gray-200/80 animate-fadeIn" id="more-tours-section">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-3 border-b border-gray-100">
            <div>
              <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs">Complete Collection</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                More Tours ({remainingTours.length})
              </h3>
            </div>
            <p className="text-gray-500 text-sm mt-2 sm:mt-0">
              Discover all of our authentic journeys & historical expeditions across Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingTours.map(tour => renderTourCard(tour))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => {
                setShowAllTours(false);
                document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm transition-colors cursor-pointer"
            >
              <i className="fa-solid fa-chevron-up text-xs"></i>
              <span>Show Less Tours</span>
            </button>
          </div>
        </div>
      )}

      {/* Tour Detail Modal Component */}
      <TourDetailModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        onBookNow={(tour) => {
          setSelectedTour(null);
          setTimeout(() => {
            const tourSelect = document.getElementById('tour') as HTMLSelectElement;
            if (tourSelect) {
              tourSelect.value = tour.title;
              const event = new Event('change', { bubbles: true });
              tourSelect.dispatchEvent(event);
            }
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />
    </section>
  );
}
