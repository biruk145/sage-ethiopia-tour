import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Tour } from '../types';
import bishoftuImage from '../assets/images/bishoftu_crater_lake_1793440320898.jpg';
import entotoImage from '../assets/images/entoto_park_panoramic_1793440550697.jpg';
import menageshaImage from '../assets/images/menagesha_suba_forest_1793440562227.jpg';
import addisFullDayImage from '../assets/images/addis_full_day_tour_1793441798209.jpg';
import wonchiImage from '../assets/images/wonchi_crater_lake_1793441810264.jpg';
import mountEntotoFallbackImage from '../assets/images/mount_entoto_park.webp';
import addisCityTourFallbackImage from '../assets/images/addis_ababa_city_tour.webp';

export interface FeaturedDayTripItem {
  id: number;
  categoryTag: string;
  title: string;
  tagline: string;
  image: string;
  tourId: number;
}

interface FeaturedDayTripsProps {
  tours: Tour[];
  onOpenBrochure: (tour: Tour) => void;
  onTalkToTeam?: (tour: Tour) => void;
  isModal?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function FeaturedDayTripsModal({
  tours,
  onOpenBrochure,
  onTalkToTeam,
  isModal = false,
  isOpen = true,
  onClose
}: FeaturedDayTripsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // The 7 Day Trips requested by the user
  const dayTrips: FeaturedDayTripItem[] = useMemo(() => [
    {
      id: 1,
      tourId: 14,
      categoryTag: "HISTORY & URBAN HERITAGE",
      title: "Addis Ababa Full Day City Tour",
      tagline: "Holy Trinity Cathedral, fossil Lucy at the National Museum, panoramic Entoto views, and authentic cultural feasts.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QWyUklCEyn9S3lWwZbYBV2wDLroC0ugpqfqf0e1-eDggHWytBaK4vUWXoVCGLDaje22La7h1bR7xVBJ-umeDze4kgyzJqIIOMH7H5jSA4xbRx0Yo_YZUvdfOVOppTLcyC8CKUJ=s1360-w1360-h1020-rw"
    },
    {
      id: 2,
      tourId: 7,
      categoryTag: "EXPRESS CITY HIGHLIGHTS",
      title: "Addis Ababa Half-Day City Tour",
      tagline: "Tomoca coffee culture, Entoto panoramic viewpoint, and National Museum essentials tailored for short visits and layovers.",
      image: "https://www.jebenatoursethiopia.com/uploads/blog-28.webp"
    },
    {
      id: 3,
      tourId: 8,
      categoryTag: "HISTORY & HERITAGE",
      title: "Debre Libanos Monastery",
      tagline: "Ancient faith, dramatic gorges and the landscapes of the Ethiopian highlands.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxIvDY69CuNZ9mUF0nXntAjt5LGaMBotkRHb5m4-a2XvK8hbNUdCBKRE&s=10"
    },
    {
      id: 4,
      tourId: 9,
      categoryTag: "NATURE & VOLCANIC LAKES",
      title: "Wonchi Crater Lake",
      tagline: "Sitting in the shadow of Mount Wonchi: extinct volcanic crater lake, boat rides, and ancient island monasteries.",
      image: wonchiImage
    },
    {
      id: 5,
      tourId: 25,
      categoryTag: "RESORTS & CRATER LAKES",
      title: "Bishoftu Crater Lakes & Resort Excursion",
      tagline: "Five volcanic crater lakes, serene boat cruises, birdwatching, and lakeside fresh tilapia dining in the Great Rift Valley.",
      image: bishoftuImage
    },
    {
      id: 6,
      tourId: 26,
      categoryTag: "PANORAMIC VIEWS & PALACE",
      title: "Mount Entoto Natural Park",
      tagline: "Historic birthplace of Addis Ababa at 3,200m altitude, Emperor Menelik's royal palace, and modern eco-park canopy walks.",
      image: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qo49dZM0ra4F5dANySOFvvpaYDXpuAoRqkcfHpso_z4a1x6NmZ1b62YcFfnXBJZp8Z5jz-akuvqnqET6ZZSmYKJVrmSIGCrG_mj36Ju-LL72lWAtwAOjr-DhiXjPqrGGzL4SE=s1360-w1360-h1020-rw"
    },
    {
      id: 7,
      tourId: 27,
      categoryTag: "WILDLIFE & ANCIENT FOREST",
      title: "Menagesha Suba Imperial Forest & Wildlife Trek",
      tagline: "Africa's oldest conservation forest, 400-year-old giant junipers, acrobatic colobus monkeys, and Mount Wechecha ridges.",
      image: menageshaImage
    }
  ], []);

  const total = dayTrips.length;
  const currentTrip = dayTrips[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation & escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (isModal && e.key === 'Escape' && onClose) onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isModal, onClose]);

  // Subtle auto-advance when not paused by user hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6500);
    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  // Lock background scroll if displayed as a modal dialog
  useEffect(() => {
    if (isModal && isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isModal, isOpen]);

  const handleBrochureClick = () => {
    const matchedTour = tours.find(t => t.id === currentTrip.tourId) || tours[0];
    onOpenBrochure(matchedTour);
    if (isModal && onClose) {
      onClose();
    }
  };

  const handleTalkClick = () => {
    const matchedTour = tours.find(t => t.id === currentTrip.tourId) || tours[0];
    if (onTalkToTeam) {
      onTalkToTeam(matchedTour);
    } else {
      // Default to WhatsApp direct inquiry with prefilled message
      const msg = encodeURIComponent(`Hello Sage Ethiopia Tours! I am interested in inquiring about the "${currentTrip.title}" day tour.`);
      window.open(`https://wa.me/251922123341?text=${msg}`, '_blank', 'noopener,noreferrer');
    }
    if (isModal && onClose) {
      onClose();
    }
  };

  if (isModal && !isOpen) return null;

  const contentCard = (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/11] sm:aspect-[16/9] md:aspect-[21/9] min-h-[460px] sm:min-h-[500px] md:min-h-[540px] shadow-2xl flex flex-col justify-between p-6 sm:p-10 md:p-12 text-white border border-white/10 group select-none transition-all duration-300"
    >
      {/* Background Slides with crossfade */}
      {dayTrips.map((trip, idx) => (
        <div
          key={trip.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={trip.image}
            alt={trip.title}
            onError={(e) => {
              if (trip.tourId === 26) {
                e.currentTarget.src = mountEntotoFallbackImage;
              } else if (trip.tourId === 14) {
                e.currentTarget.src = addisCityTourFallbackImage;
              }
            }}
            className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Deep cinematic gradient overlay matching the reference image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40" />
        </div>
      ))}

      {/* Top Bar: Category diamond tag + Counter Badge / Close button */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase drop-shadow-md">
          <span className="text-amber-400 text-sm">✦</span>
          <span>{currentTrip.categoryTag}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-white/90 border border-white/15 shadow-sm">
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>
          )}
        </div>
      </div>

      {/* Middle/Bottom Text & Action Buttons */}
      <div className="relative z-10 my-auto sm:my-0 sm:mt-auto sm:mb-8 max-w-3xl">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
          {currentTrip.title}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 font-light max-w-2xl mt-3 sm:mt-4 leading-relaxed drop-shadow">
          {currentTrip.tagline}
        </p>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-6">
          <button
            onClick={handleBrochureClick}
            className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold text-xs sm:text-sm md:text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>View trip brochure</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>

          <button
            onClick={handleTalkClick}
            className="bg-transparent hover:bg-white/15 active:bg-white/20 border border-white/35 text-white font-medium text-xs sm:text-sm md:text-base px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <i className="fa-brands fa-whatsapp text-green-400 text-sm"></i>
            <span>Talk to the team</span>
          </button>
        </div>
      </div>

      {/* Bottom Bar: Horizontal Dash Indicators & Navigation Arrows */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/15">
        {/* Dash Indicators */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {dayTrips.map((trip, idx) => (
            <button
              key={trip.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to ${trip.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 sm:w-10 bg-white shadow-sm'
                  : 'w-3.5 sm:w-5 bg-white/35 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrev}
            aria-label="Previous day trip"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/45 hover:bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-md"
          >
            <i className="fa-solid fa-arrow-left text-xs sm:text-sm"></i>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next day trip"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/45 hover:bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-md"
          >
            <i className="fa-solid fa-arrow-right text-xs sm:text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );

  // If rendered as a Modal Popup
  if (isModal) {
    return (
      <div
        className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Featured Day Trips Showcase"
      >
        <div
          className="w-full max-w-6xl max-h-[92vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {contentCard}
        </div>
      </div>
    );
  }

  // If rendered inline as the featured section
  return (
    <section id="featured-day-trips" className="pt-24 sm:pt-28 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      <div className="mb-4 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-brand-gold uppercase">
          <span>✦</span>
          <span>FEATURED DAY TRIPS</span>
        </div>
        <span className="text-xs text-gray-500 hidden sm:inline-block">
          Explore curated 1-day expeditions departing from Addis Ababa
        </span>
      </div>
      {contentCard}
    </section>
  );
}
