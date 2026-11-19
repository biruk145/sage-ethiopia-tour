import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FeaturedDayTripsModal from './components/FeaturedDayTripsModal';
import TourSearchSection from './components/TourSearchSection';
import TourPackages from './components/TourPackages';
import Attractions from './components/Attractions';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import TourDetailModal from './components/TourDetailModal';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { tours, attractions } from './data';
import { Tour } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchDestination, setSearchDestination] = useState('');
  const [searchDuration, setSearchDuration] = useState('any');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isDayTripsModalOpen, setIsDayTripsModalOpen] = useState(false);
  const [brochureTour, setBrochureTour] = useState<Tour | null>(null);

  const handleSearch = (destination: string, category: string, duration: string) => {
    setSearchDestination(destination);
    setActiveCategory(category);
    setSearchDuration(duration);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchDestination('');
    setSearchDuration('any');
  };

  const handleExploreAttraction = (destination: string) => {
    setSearchDestination(destination);
    setActiveCategory('all');
    setSearchDuration('any');
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenGallery = () => {
    setIsGalleryOpen(true);
    setTimeout(() => {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleBookFromBrochure = (tour: Tour) => {
    setBrochureTour(null);
    setIsDayTripsModalOpen(false);
    setTimeout(() => {
      const tourSelect = document.getElementById('tour') as HTMLSelectElement;
      if (tourSelect) {
        tourSelect.value = tour.title;
        const event = new Event('change', { bubbles: true });
        tourSelect.dispatchEvent(event);
      }
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const filteredTours = useMemo(() => {
    return tours.filter(tour => {
      const matchCategory = activeCategory === 'all' 
        ? true 
        : activeCategory === 'daytour'
          ? (tour.category === 'daytour' || tour.category === 'fullday' || tour.category === 'halfday')
          : tour.category === activeCategory;
          
      let matchDestination = true;
      if (searchDestination && searchDestination.trim() !== '') {
        const query = searchDestination.trim().toLowerCase();
        const dest = tour.destination.toLowerCase();
        const title = tour.title.toLowerCase();
        
        // Direct or reverse substring match
        const directMatch = dest.includes(query) || title.includes(query) || query.includes(dest);
        
        // Token-based matching for compound destination queries
        const tokens = query.split(/[\s,&()/-]+/).filter(w => w.length >= 3 && !['and', 'the', 'for', 'day', 'tour', 'park', 'lake', 'mount'].includes(w));
        const tokenMatch = tokens.length > 0 && tokens.some(tok => dest.includes(tok) || title.includes(tok));
        
        matchDestination = directMatch || tokenMatch;
      }

      const matchDuration = searchDuration === 'any' || tour.duration === searchDuration;
      
      return matchCategory && matchDestination && matchDuration;
    });
  }, [activeCategory, searchDestination, searchDuration]);

  return (
    <div className="min-h-screen">
      <Header 
        onNavigateToCategory={(category) => {
          handleCategoryChange(category);
          document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
        }} 
        onOpenGallery={handleOpenGallery}
        onOpenFeaturedModal={() => setIsDayTripsModalOpen(true)}
      />
      <main>
        {/* Featured Day Trips Showcase Banner matching reference UI */}
        <FeaturedDayTripsModal
          tours={tours}
          onOpenBrochure={(tour) => setBrochureTour(tour)}
        />

        {/* Tour Search & Filter Section placed after featured day trips card as requested */}
        <TourSearchSection 
          onSearch={handleSearch} 
          tours={tours}
          currentDestination={searchDestination}
          currentCategory={activeCategory}
          currentDuration={searchDuration}
          onResetSearch={() => {
            setSearchDestination('');
            setActiveCategory('all');
            setSearchDuration('any');
          }}
        />

        <TourPackages 
          tours={filteredTours} 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />
        <Attractions 
          attractions={attractions} 
          onExplore={handleExploreAttraction}
        />
        <Gallery 
          isOpen={isGalleryOpen} 
          onToggle={() => setIsGalleryOpen(prev => !prev)} 
        />
        <About />
        <Testimonials />
        <BookingSection />
      </main>

      {/* Featured Day Trips Modal Dialog (Triggerable from Nav or button) */}
      <FeaturedDayTripsModal
        isModal={true}
        isOpen={isDayTripsModalOpen}
        onClose={() => setIsDayTripsModalOpen(false)}
        tours={tours}
        onOpenBrochure={(tour) => setBrochureTour(tour)}
      />

      {/* Tour Detail Modal (opens when clicking 'View trip brochure →') */}
      <TourDetailModal
        tour={brochureTour}
        onClose={() => setBrochureTour(null)}
        onBookNow={handleBookFromBrochure}
      />

      <Footer />
      <ScrollToTop />
    </div>
  );
}


