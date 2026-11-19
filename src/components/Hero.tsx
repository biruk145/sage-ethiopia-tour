import React from 'react';

interface HeroProps {
  onSearch?: (destination: string, category: string, duration: string) => void;
  onExploreTours?: () => void;
}

export default function Hero({ onExploreTours }: HeroProps) {
  const scrollToFeatured = () => {
    document.getElementById('featured-day-trips')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSearch = () => {
    document.getElementById('search-tours-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] hero-bg flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center text-white space-y-8 mt-6 sm:mt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/70 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium animate-pulse">
          <i className="fa-solid fa-star text-brand-gold"></i> Premier Ethiopia Tour Operator
        </div>
        
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-amber-50 drop-shadow-md uppercase">
          DISCOVER THE MAGIC OF{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
            ETHIOPIA
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-gray-200 font-light leading-relaxed drop-shadow">
          From ancient rock-hewn churches to volcanic landscapes and rich tribal heritage, explore the Land of Origins with Sage Ethiopia Tours.
        </p>

        {/* Hero Quick Action Buttons leading to the featured card and search section */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:pt-4">
          <button
            onClick={scrollToFeatured}
            className="px-8 py-3.5 bg-brand-gold hover:bg-brand-goldHover active:bg-amber-600 text-white font-bold text-sm sm:text-base rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
          >
            <span className="text-amber-200 text-xs">✦</span>
            <span>View Featured Day Trips</span>
            <i className="fa-solid fa-arrow-down text-xs ml-1"></i>
          </button>

          <button
            onClick={scrollToSearch}
            className="px-8 py-3.5 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-400/40 text-white font-semibold text-sm sm:text-base rounded-xl backdrop-blur-md shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
          >
            <i className="fa-solid fa-magnifying-glass text-amber-300 text-sm"></i>
            <span>Search All Packages</span>
          </button>
        </div>

        {/* Quick Stats Banner */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-amber-100/90 text-sm">
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl font-bold text-amber-300">100%</span>
            <span className="text-xs uppercase tracking-wider">Authentic Experiences</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl font-bold text-amber-300">5,000+</span>
            <span className="text-xs uppercase tracking-wider">Happy Travelers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl font-bold text-amber-300">Certified</span>
            <span className="text-xs uppercase tracking-wider">Local Experts</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl font-bold text-amber-300">24/7</span>
            <span className="text-xs uppercase tracking-wider">On-Ground Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
