import React, { useState, useRef, useEffect, useMemo } from 'react';

interface HeroProps {
  onSearch: (destination: string, category: string, duration: string) => void;
}

interface DestinationSuggestion {
  name: string;
  region: string;
  category: string;
}

export default function Hero({ onSearch }: HeroProps) {
  const [destination, setDestination] = useState('');
  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState('any');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Curated list of destinations with full address / region details
  const destinationList: DestinationSuggestion[] = useMemo(() => [
    { name: "Addis Ababa", region: "Capital City, Shewa Highlands, Central Ethiopia", category: "City & Day Tours" },
    { name: "Lalibela", region: "Lasta Mountains, North Wollo, Amhara Region", category: "Historical Circuit" },
    { name: "Danakil Depression & Erta Ale", region: "Afar Triangle, Great Rift Valley, North-Eastern Ethiopia", category: "Adventure & Geological" },
    { name: "Simien Mountains", region: "North Gondar Zone, Amhara Region (Roof of Africa)", category: "Adventure & Trekking" },
    { name: "Gondar", region: "Central Gondar, Amhara Region (Royal Castles)", category: "Historical Circuit" },
    { name: "Axum (Aksum)", region: "Central Tigray, Northern Ethiopia (Ancient Empire & Obelisks)", category: "Historical Circuit" },
    { name: "Omo Valley", region: "South Ethiopia Regional State (Tribal & Indigenous Cultures)", category: "Cultural Tours" },
    { name: "Bale Mountains", region: "Bale Zone, Oromia Region (Sanetti Plateau & Afro-Alpine)", category: "Wildlife & Trekking" },
    { name: "Debre Libanos", region: "North Shewa Zone, Oromia Region (Blue Nile Gorge & Monastery)", category: "Day Tours" },
    { name: "Wonchi Crater Lake", region: "South West Shewa Zone, Oromia Region (Volcanic Lake & Hiking)", category: "Day Tours" },
    { name: "Bahir Dar & Lake Tana", region: "Lake Tana Shore, Amhara Region (Island Monasteries & Blue Nile Falls)", category: "Historical & Nature" },
    { name: "Harar Jugol", region: "Harari Region, Eastern Ethiopia (Fortified Historic Islamic City)", category: "Historical & Cultural" }
  ], []);

  // Filter destinations based on query
  const filteredSuggestions = useMemo(() => {
    const q = destination.trim().toLowerCase();
    if (!q) return destinationList;
    return destinationList.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.region.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  }, [destination, destinationList]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectDestination = (item: DestinationSuggestion) => {
    setDestination(item.name);
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDropdownOpen(false);
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
        
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-amber-50 drop-shadow-md uppercase">
          Explore the Land of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">Origins</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-gray-200 font-light leading-relaxed">
          From the ancient rock-hewn churches of Lalibela to the fiery otherworldly landscapes of Danakil. Journey through centuries of history with Sage Tours.
        </p>

        {/* Hero Search & Filter Bar */}
        <div className="max-w-4xl mx-auto mt-10 p-4 sm:p-6 rounded-2xl glass-card text-gray-800 shadow-2xl border border-white/40">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Search Input with Pop-up Autocomplete list */}
            <div ref={containerRef} className="text-left space-y-1 relative">
              <label className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
                <i className="fa-solid fa-location-dot text-brand-gold mr-1"></i> Destination
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Where to? (e.g., Lalibela, Addis Ababa)" 
                  value={destination}
                  onFocus={() => setIsDropdownOpen(true)}
                  onClick={() => setIsDropdownOpen(true)}
                  onChange={(e) => {
                    setDestination(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  className="w-full px-3 py-2.5 bg-white/95 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-gold focus:outline-none pr-8"
                  autoComplete="off"
                />
                {destination && (
                  <button
                    type="button"
                    onClick={() => {
                      setDestination('');
                      setIsDropdownOpen(true);
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs w-4 h-4 flex items-center justify-center rounded-full"
                    title="Clear"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
              </div>

              {/* Pop-up dropdown list with full address/region */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden max-h-72 overflow-y-auto w-[280px] sm:w-[320px]">
                  <div className="px-3 py-2 bg-emerald-950 text-amber-300 text-[11px] font-bold uppercase tracking-wider flex items-center justify-between">
                    <span>Popular Destinations</span>
                    <span className="text-[10px] text-gray-300 normal-case font-normal">Select or type</span>
                  </div>
                  
                  {filteredSuggestions.length > 0 ? (
                    <ul className="divide-y divide-gray-100">
                      {filteredSuggestions.map((item, idx) => (
                        <li 
                          key={idx}
                          onMouseDown={(e) => {
                            e.preventDefault(); // Prevents input blur before click registers
                            handleSelectDestination(item);
                          }}
                          className="px-3 py-2.5 hover:bg-amber-50 cursor-pointer transition-colors text-left flex items-start gap-2.5 group"
                        >
                          <div className="mt-0.5 text-brand-gold group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-location-dot text-sm"></i>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-semibold text-gray-900 text-sm group-hover:text-emerald-900">
                                {item.name}
                              </span>
                              <span className="text-[10px] bg-emerald-50 text-brand-emerald px-1.5 py-0.5 rounded font-medium shrink-0">
                                {item.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 truncate mt-0.5">
                              {item.region}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-4 text-center text-xs text-gray-500">
                      No destinations matching "{destination}". Press search to query all tours.
                    </div>
                  )}
                </div>
              )}
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
