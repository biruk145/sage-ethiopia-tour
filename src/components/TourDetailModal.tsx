import React, { useState, useEffect } from 'react';
import { Tour } from '../types';
import addisAbabaEnaImage from '../assets/images/addis_ababa_ena.jpg';
import ashendaImage from '../assets/images/ashenda_ena.png';
import mountEntotoFallbackImage from '../assets/images/mount_entoto_park.webp';
import addisCityTourFallbackImage from '../assets/images/addis_ababa_city_tour.webp';

interface TourDetailModalProps {
  tour: Tour | null;
  onClose: () => void;
  onBookNow: (tour: Tour) => void;
}

export default function TourDetailModal({ tour, onClose, onBookNow }: TourDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'overview'>('itinerary');

  // Lock background scroll when modal is open and handle ESC key
  useEffect(() => {
    if (!tour) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [tour, onClose]);

  // Reset tab to itinerary whenever a new tour is opened
  useEffect(() => {
    if (tour) {
      setActiveTab('itinerary');
    }
  }, [tour]);

  if (!tour) return null;

  // Derive structured itinerary from tour.itinerary or intelligently parse description / provide days
  const getStructuredItinerary = () => {
    if (tour.itinerary && tour.itinerary.length > 0) {
      return tour.itinerary;
    }

    // Parse bullets or paragraphs from description
    const lines = tour.description.split('\n').filter(l => l.trim().length > 0);
    const bulletDays: { day: string | number; title: string; description: string }[] = [];

    lines.forEach((line) => {
      const clean = line.trim();
      if (clean.startsWith('•') || clean.startsWith('-') || clean.startsWith('*')) {
        const content = clean.replace(/^[•\-*]\s*/, '');
        const colonIdx = content.indexOf(':');
        if (colonIdx > 0 && colonIdx < 50) {
          bulletDays.push({
            day: `Stop ${bulletDays.length + 1}`,
            title: content.slice(0, colonIdx).trim(),
            description: content.slice(colonIdx + 1).trim()
          });
        } else {
          bulletDays.push({
            day: `Stop ${bulletDays.length + 1}`,
            title: content.slice(0, 45) + (content.length > 45 ? '...' : ''),
            description: content
          });
        }
      }
    });

    if (bulletDays.length >= 2) {
      return bulletDays;
    }

    // Default multi-day or single-day flow based on duration
    const isSingleDay = tour.duration === '1' || tour.durationLabel.includes('hour') || tour.durationLabel.includes('1 Day');
    if (isSingleDay) {
      return [
        {
          day: 'Morning',
          title: 'Hotel Pickup & Historic Exploration',
          description: `Meet your certified local guide at your accommodation. Begin the journey discovering ${tour.destination}'s iconic landmarks, rich heritage, and authentic cultural touchpoints.`
        },
        {
          day: 'Midday',
          title: 'Authentic Ethiopian Lunch & Coffee Ritual',
          description: 'Savor an authentic communal Ethiopian culinary experience with freshly baked injera, flavorful stews, followed by an aromatic traditional coffee ceremony with frankincense.'
        },
        {
          day: 'Afternoon',
          title: 'Artisanal Markets, Panoramic Views & Return',
          description: 'Explore vibrant local artisan quarters, panoramic highland viewpoints, and capture memorable photos before comfortable private drop-off at your hotel or the airport.'
        }
      ];
    }

    return [
      {
        day: 'Day 1',
        title: `Arrival & Journey to ${tour.destination}`,
        description: `Arrive and meet your tour team. Scenic flight or private 4WD transit toward ${tour.destination}, soaking in changing Ethiopian topography and vibrant local towns.`
      },
      {
        day: 'Day 2',
        title: 'Deep Heritage & Landscape Immersion',
        description: `Full day dedicated to exploring the core highlights of ${tour.title}. Guided walks through ancient architectural monuments, geological wonders, and endemic highland nature.`
      },
      {
        day: 'Day 3',
        title: 'Local Culture, Traditions & Community Encounter',
        description: 'Engage respectfully with local elders, artisans, and communities. Enjoy authentic traditional hospitality, folk music, and breathtaking sunset horizons.'
      },
      {
        day: 'Final Day',
        title: 'Scenic Return & Farewell Feast',
        description: 'Morning exploration and souvenir browsing. Farewell traditional Ethiopian feast with honey wine (tej) before private airport transfer.'
      }
    ];
  };

  const itineraryList = getStructuredItinerary();

  // Curate inclusions & exclusions
  const inclusions = tour.inclusions || [
    'Professional licensed English-speaking local guide',
    'All ground transportation in well-maintained 4WD / air-conditioned minivan',
    'All entrance fees to national parks, UNESCO heritage sites & monasteries',
    'Traditional Ethiopian coffee ceremony experience',
    'Bottled spring water throughout all excursion drives',
    'Airport & hotel pickups and drop-offs',
    'Local scout and community ranger fees where mandated'
  ];

  const exclusions = tour.exclusions || [
    'International and domestic flight tickets (available upon request)',
    'Alcoholic beverages and personal souvenir purchases',
    'Discretionary tips and gratuities for driver and local guides',
    'Travel and medical insurance',
    'Personal photography permits for specialized indoor museums'
  ];

  const categoryLabel = 
    tour.category === 'daytour' || tour.category === 'fullday' || tour.category === 'halfday' 
      ? 'Addis Ababa City Tour' 
      : tour.category === 'historical' 
        ? 'Historical Circuit' 
        : tour.category === 'cultural' 
          ? 'Cultural Tour' 
          : tour.category === 'festival' 
            ? 'Festival Experience' 
            : 'Adventure Expedition';

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-modal-title"
    >
      <div 
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col border border-amber-900/10 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-30 bg-black/60 hover:bg-black/90 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 cursor-pointer"
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark text-base sm:text-lg"></i>
        </button>

        {/* Modal Hero Header with Minimized Image Height */}
        <div className="relative h-36 sm:h-44 md:h-48 w-full flex-shrink-0 overflow-hidden bg-gray-900">
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
            className="w-full h-full object-cover object-center opacity-90 max-h-48"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/45 to-transparent"></div>
          
          {/* Header Bar: Category Badge and Direct Book Now Button */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-5 right-14 sm:right-16 flex items-center justify-between gap-2 z-20">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-brand-gold/95 backdrop-blur-md text-emerald-950 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                {categoryLabel}
              </span>
            </div>

            {/* Direct Header Book Now Action Button */}
            <button
              onClick={() => {
                onClose();
                onBookNow(tour);
              }}
              className="bg-brand-emerald hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-1.5 sm:gap-2 border border-emerald-400/40 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <i className="fa-regular fa-calendar-check text-brand-gold text-xs"></i>
              <span>Book Now</span>
              <i className="fa-solid fa-arrow-right text-[10px] hidden sm:inline"></i>
            </button>
          </div>

          {/* Hero Bottom Content */}
          <div className="absolute bottom-2.5 left-3 sm:bottom-3.5 sm:left-5 right-3 sm:right-5 text-white">
            <h2 id="tour-modal-title" className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-amber-50 leading-tight drop-shadow-md">
              {tour.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1.5 text-xs text-gray-200">
              {tour.durationLabel && (
                <span className="flex items-center gap-1 bg-black/45 backdrop-blur-sm px-2 py-0.5 rounded-md">
                  <i className="fa-regular fa-clock text-amber-300 text-[11px]"></i>
                  <span>{tour.durationLabel}</span>
                </span>
              )}
              <span className="flex items-center gap-1 bg-black/45 backdrop-blur-sm px-2 py-0.5 rounded-md">
                <i className="fa-solid fa-location-dot text-amber-300 text-[11px]"></i>
                <span>{tour.destination}</span>
              </span>
              <span className="hidden sm:flex items-center gap-1 bg-black/45 backdrop-blur-sm px-2 py-0.5 rounded-md">
                <i className="fa-solid fa-shield-halved text-green-400 text-[11px]"></i>
                <span>100% Guaranteed</span>
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center border-b border-gray-200 bg-gray-50/80 px-4 sm:px-6 sticky top-0 z-20">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'itinerary'
                ? 'border-brand-gold text-brand-emerald bg-white shadow-sm -mb-px rounded-t-lg'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <i className="fa-solid fa-route text-brand-gold"></i>
            <span>Full Itinerary</span>
            <span className="bg-amber-100 text-amber-900 text-[10px] px-2 py-0.5 rounded-full font-bold ml-1">
              {itineraryList.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('inclusions')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'inclusions'
                ? 'border-brand-gold text-brand-emerald bg-white shadow-sm -mb-px rounded-t-lg'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <i className="fa-solid fa-clipboard-check text-brand-gold"></i>
            <span>Inclusions & Services</span>
          </button>

          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'border-brand-gold text-brand-emerald bg-white shadow-sm -mb-px rounded-t-lg'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <i className="fa-solid fa-circle-info text-brand-gold"></i>
            <span>Tour Overview</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-grow space-y-6">
          {/* TAB 1: FULL ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-serif font-bold text-gray-900 text-base flex items-center gap-2">
                    <i className="fa-solid fa-compass text-brand-gold"></i>
                    Tailored Daily Journey
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                    Our itineraries are flexible. We can customize schedules, pickups, and destinations to match your pace.
                  </p>
                </div>
                <span className="inline-flex items-center text-xs text-brand-emerald font-semibold bg-emerald-100/70 px-3 py-1.5 rounded-lg whitespace-nowrap self-start sm:self-auto">
                  <i className="fa-solid fa-check-double mr-1.5"></i> Fully Guided
                </span>
              </div>

              {/* Timeline Steps */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-200/90 space-y-8 my-4 ml-2">
                {itineraryList.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle icon on timeline */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-brand-emerald text-white font-bold text-xs flex items-center justify-center border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>

                    <div className="bg-white border border-gray-100 hover:border-amber-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-gold bg-amber-50 px-2.5 py-0.5 rounded-md">
                          {typeof item.day === 'number' ? `Day ${item.day}` : item.day}
                        </span>
                        <span className="text-xs text-gray-400">
                          <i className="fa-solid fa-location-crosshairs mr-1"></i> {tour.destination}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-gray-900 text-base sm:text-lg mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: INCLUSIONS & EXCLUSIONS */}
          {activeTab === 'inclusions' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inclusions Card */}
                <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-4 text-brand-emerald">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm shadow">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-gray-900 text-lg">What's Included</h4>
                      <p className="text-xs text-gray-500">Provided by Sage Ethiopia Tours</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-gray-700">
                        <i className="fa-solid fa-circle-check text-emerald-600 mt-1 mr-2.5 text-sm flex-shrink-0"></i>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions Card */}
                <div className="bg-rose-50/50 border border-rose-200/70 rounded-2xl p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-4 text-rose-700">
                    <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center text-sm shadow">
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-gray-900 text-lg">What's Excluded</h4>
                      <p className="text-xs text-gray-500">Not included in base tour package</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-gray-600">
                        <i className="fa-solid fa-circle-xmark text-rose-400 mt-1 mr-2.5 text-sm flex-shrink-0"></i>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Trust & Guarantee Banner */}
              <div className="bg-brand-sand/40 border border-brand-gold/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold text-white flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <div className="text-center sm:text-left">
                  <h5 className="font-bold text-gray-900 text-sm">No Upfront Payment Required</h5>
                  <p className="text-gray-600 text-xs mt-0.5">
                    We believe trust comes first. Reserve your dates now and pay comfortably after completing your tour experience in Ethiopia.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="prose max-w-none">
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">About This Experience</h4>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {tour.description}
                </p>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-center">
                  <i className="fa-solid fa-calendar-day text-brand-gold text-lg mb-1 block"></i>
                  <span className="text-[10px] uppercase text-gray-400 font-bold block">Duration</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-800">{tour.durationLabel || 'Custom'}</span>
                </div>
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-center">
                  <i className="fa-solid fa-map-pin text-brand-gold text-lg mb-1 block"></i>
                  <span className="text-[10px] uppercase text-gray-400 font-bold block">Destination</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-800 truncate block">{tour.destination}</span>
                </div>
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-center">
                  <i className="fa-solid fa-tags text-brand-gold text-lg mb-1 block"></i>
                  <span className="text-[10px] uppercase text-gray-400 font-bold block">Category</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-800 capitalize truncate block">{tour.category}</span>
                </div>
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-center">
                  <i className="fa-solid fa-shield-cat text-brand-gold text-lg mb-1 block"></i>
                  <span className="text-[10px] uppercase text-gray-400 font-bold block">Confirmation</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-700">Instant / Direct</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer without close and book now buttons as requested */}
        <div className="px-5 py-3.5 bg-gray-50/90 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2 text-brand-emerald font-semibold">
            <i className="fa-solid fa-circle-check text-brand-gold"></i>
            <span>Custom Quote & Personalized Itinerary on Request</span>
          </div>
          <span className="hidden sm:inline text-gray-400">Sage Ethiopia Tours</span>
        </div>
      </div>
    </div>
  );
}
