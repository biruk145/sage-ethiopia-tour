import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TourPackages from './components/TourPackages';
import Attractions from './components/Attractions';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { tours, attractions } from './data';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchDestination, setSearchDestination] = useState('');
  const [searchDuration, setSearchDuration] = useState('any');

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

  const filteredTours = useMemo(() => {
    return tours.filter(tour => {
      const matchCategory = activeCategory === 'all' 
        ? true 
        : activeCategory === 'daytour'
          ? (tour.category === 'daytour' || tour.category === 'fullday' || tour.category === 'halfday')
          : tour.category === activeCategory;
          
      const matchDestination = searchDestination === '' || tour.destination.toLowerCase().includes(searchDestination.toLowerCase()) || tour.title.toLowerCase().includes(searchDestination.toLowerCase());
      const matchDuration = searchDuration === 'any' || tour.duration === searchDuration;
      
      return matchCategory && matchDestination && matchDuration;
    });
  }, [activeCategory, searchDestination, searchDuration]);

  return (
    <div className="min-h-screen">
      <Header onNavigateToCategory={(category) => {
        handleCategoryChange(category);
        document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <main>
        <Hero onSearch={handleSearch} />
        <TourPackages 
          tours={filteredTours} 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />
        <Attractions 
          attractions={attractions} 
          onExplore={handleExploreAttraction}
        />
        <Gallery />
        <About />
        <Testimonials />
        <BookingSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

