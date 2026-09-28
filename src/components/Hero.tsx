import React, { useState } from 'react';

interface HeroProps {
  onSearch: (destination: string, category: string, duration: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [destination, setDestination] = useState('');
  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState('any');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(destination, category, duration);
    // Smooth scroll to packages
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen hero-bg flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center text-white space-y-8 mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/60 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium animate-pulse">
          <i className="fa-solid fa-star text-brand-gold"></i> Experience Unrivaled Wonders of East Africa
        </div>
        
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-amber-50 drop-shadow-md">
          Discover the Magic of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">Ethiopia</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-gray-200 font-light leading-relaxed">
          From the ancient rock-hewn churches of Lalibela to the fiery otherworldly landscapes of Danakil. Journey through centuries of history with Sage Tours.
        </p>

        {/* Hero Search & Filter Bar */}
        <div className="max-w-4xl mx-auto mt-10 p-4 sm:p-6 rounded-2xl glass-card text-gray-800 shadow-2xl border border-white/40">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Search Input */}
            <div className="text-left space-y-1">
              <label className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
                <i className="fa-solid fa-location-dot text-brand-gold mr-1"></i> Destination
              </label>
              <input 
                type="text" 
                placeholder="Where to? (e.g., Lalibela)" 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3 py-2.5 bg-white/80 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-gold focus:outline-none"
              />
            </div>
            {/* Tour Category */}
            <div className="text-left space-y-1">
              <label className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
                <i className="fa-solid fa-filter text-brand-gold mr-1"></i> Tour Type
              </label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2.5 bg-white/80 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-gold focus:outline-none"
              >
                <option value="all">All Experiences</option>
                <option value="historical">Historical</option>
                <option value="cultural">Cultural</option>
                <option value="adventure">Adventure & Trekking</option>
                <option value="daytour">Day Tours</option>
              </select>
            </div>
            {/* Duration */}
            <div className="text-left space-y-1">
              <label className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
                <i className="fa-solid fa-clock text-brand-gold mr-1"></i> Duration
              </label>
              <select 
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-3 py-2.5 bg-white/80 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-gold focus:outline-none"
              >
                <option value="any">Any Duration</option>
                <option value="1">1 Day</option>
                <option value="3-5">3 - 5 Days</option>
                <option value="7+">7+ Days</option>
              </select>
            </div>
            {/* Submit Button */}
            <div>
              <button 
                type="submit" 
                className="w-full bg-brand-emerald hover:bg-brand-lightEmerald text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-magnifying-glass"></i> Explore Tours
              </button>
            </div>
          </form>
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
