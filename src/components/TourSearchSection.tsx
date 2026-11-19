import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Tour } from '../types';

export interface TourSearchSectionProps {
  onSearch: (destination: string, category: string, duration: string) => void;
  tours?: Tour[];
  currentDestination?: string;
  currentCategory?: string;
  currentDuration?: string;
  onResetSearch?: () => void;
}

interface DestinationSuggestion {
  name: string;
  region: string;
  category: string;
}

const TOUR_TYPE_OPTIONS = [
  { key: 'historical', label: 'Historical Circuit' },
  { key: 'cultural', label: 'Cultural' },
  { key: 'adventure', label: 'Adventure & Trekking' },
  { key: 'festival', label: 'Festivals' },
  { key: 'daytour', label: 'Addis Ababa & Day Tours' }
] as const;

const matchesTourCategory = (tour: Tour, catKey: string) => {
  if (catKey === 'all') return true;
  if (catKey === 'daytour') {
    return tour.category === 'daytour' || tour.category === 'fullday' || tour.category === 'halfday';
  }
  return tour.category === catKey;
};

export default function TourSearchSection({
  onSearch,
  tours = [],
  currentDestination = '',
  currentCategory = 'all',
  currentDuration = 'any',
  onResetSearch
}: TourSearchSectionProps) {
  const [destination, setDestination] = useState(currentDestination);
  const [category, setCategory] = useState(currentCategory);
  const [duration, setDuration] = useState(currentDuration);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const manualCategoryRef = useRef(false);
  const manualDurationRef = useRef(false);

  // Synchronize state when parent updates
  useEffect(() => {
    setDestination(currentDestination);
  }, [currentDestination]);

  useEffect(() => {
    const normalized =
      currentCategory === 'fullday' || currentCategory === 'halfday'
        ? 'daytour'
        : currentCategory;
    setCategory(normalized);
  }, [currentCategory]);

  useEffect(() => {
    setDuration(currentDuration);
  }, [currentDuration]);

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
    { name: "Bishoftu (Debre Zeyit)", region: "East Shewa Zone, Oromia Region (Crater Lakes & Resorts)", category: "Day Tours" },
    { name: "Mount Entoto", region: "Addis Ababa Ridge (Panoramic Views & Royal Palace)", category: "Day Tours" },
    { name: "Menagesha Suba", region: "Oromia Region (Ancient Primary Forest & Colobus Monkeys)", category: "Day Tours" },
    { name: "Awash National Park", region: "Great Rift Valley (Canyon Falls & Wildlife Safari)", category: "Day Tours" },
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

  // Helper to find matching tours for a destination query
  const getMatchingToursForDest = useCallback((destText: string) => {
    if (!tours || tours.length === 0) return [];
    if (!destText || !destText.trim()) return tours;

    const query = destText.trim().toLowerCase();
    const tokens = query.split(/[\s,&()/-]+/).filter(w => w.length >= 3 && !['and', 'the', 'for', 'day', 'tour', 'park', 'lake', 'mount'].includes(w));

    return tours.filter(tour => {
      const dest = tour.destination.toLowerCase();
      const title = tour.title.toLowerCase();
      const directMatch = dest.includes(query) || title.includes(query) || query.includes(dest);
      const tokenMatch = tokens.length > 0 && tokens.some(tok => dest.includes(tok) || title.includes(tok));
      return directMatch || tokenMatch;
    });
  }, [tours]);

  // Matching tours for current destination
  const matchingTours = useMemo(() => {
    return getMatchingToursForDest(destination);
  }, [destination, getMatchingToursForDest]);

  // Dynamically calculate available tour types for the selected destination
  const computeAvailableCategories = useCallback((destTours: Tour[]) => {
    const options = TOUR_TYPE_OPTIONS.map(def => {
      const count = destTours.filter(t => matchesTourCategory(t, def.key)).length;
      return {
        key: def.key,
        label: def.label,
        count
      };
    }).filter(opt => opt.count > 0);

    return {
      total: destTours.length,
      options
    };
  }, []);

  const availableCategories = useMemo(() => {
    return computeAvailableCategories(matchingTours);
  }, [matchingTours, computeAvailableCategories]);

  // Dynamically calculate available durations for the selected destination (and tour type)
  const computeAvailableDurations = useCallback((destTours: Tour[], activeCat: string) => {
    const filteredByCat = destTours.filter(t => matchesTourCategory(t, activeCat));
    const counts: Record<'1' | '3-5' | '7+', { count: number; labels: string[] }> = {
      '1': { count: 0, labels: [] },
      '3-5': { count: 0, labels: [] },
      '7+': { count: 0, labels: [] }
    };

    filteredByCat.forEach(t => {
      if (counts[t.duration]) {
        counts[t.duration].count += 1;
        if (t.durationLabel && !counts[t.duration].labels.includes(t.durationLabel)) {
          counts[t.duration].labels.push(t.durationLabel);
        }
      }
    });

    const options = [
      {
        key: '1',
        title: '1 Day / Day Tour',
        count: counts['1'].count,
        labels: counts['1'].labels.join(', ')
      },
      {
        key: '3-5',
        title: '3 - 5 Days',
        count: counts['3-5'].count,
        labels: counts['3-5'].labels.join(', ')
      },
      {
        key: '7+',
        title: '7+ Days Grand Circuit',
        count: counts['7+'].count,
        labels: counts['7+'].labels.join(', ')
      }
    ].filter(opt => opt.count > 0);

    return {
      total: filteredByCat.length,
      options
    };
  }, []);

  const availableDurations = useMemo(() => {
    return computeAvailableDurations(matchingTours, category);
  }, [matchingTours, category, computeAvailableDurations]);

  // Exact matches combining destination, tour type (category), and duration
  const exactMatches = useMemo(() => {
    return matchingTours.filter(tour => {
      const matchCategory = matchesTourCategory(tour, category);
      const matchDuration = duration === 'any' || tour.duration === duration;
      return matchCategory && matchDuration;
    });
  }, [matchingTours, category, duration]);

  // Resolve matching Tour Type & Duration automatically when destination changes
  const applyDestinationChange = useCallback((nextDest: string) => {
    const trimmed = nextDest.trim();
    if (!trimmed) {
      manualCategoryRef.current = false;
      manualDurationRef.current = false;
      setCategory('all');
      setDuration('any');
      onSearch(nextDest, 'all', 'any');
      return;
    }

    const matched = getMatchingToursForDest(nextDest);
    const cats = computeAvailableCategories(matched);

    let nextCategory = 'all';
    if (manualCategoryRef.current && cats.options.some(opt => opt.key === category)) {
      nextCategory = category;
    } else if (cats.options.length === 1) {
      nextCategory = cats.options[0].key;
    }

    const durs = computeAvailableDurations(matched, nextCategory);
    let nextDuration = 'any';
    if (manualDurationRef.current && durs.options.some(opt => opt.key === duration)) {
      nextDuration = duration;
    } else if (durs.options.length === 1) {
      nextDuration = durs.options[0].key;
    }

    setCategory(nextCategory);
    setDuration(nextDuration);
    onSearch(nextDest, nextCategory, nextDuration);
  }, [category, duration, getMatchingToursForDest, computeAvailableCategories, computeAvailableDurations, onSearch]);

  const handleSelectDestination = (item: DestinationSuggestion) => {
    setDestination(item.name);
    setIsDropdownOpen(false);
    manualCategoryRef.current = false;
    manualDurationRef.current = false;

    const matched = getMatchingToursForDest(item.name);
    const cats = computeAvailableCategories(matched);
    const nextCategory = cats.options.length === 1 ? cats.options[0].key : 'all';

    const durs = computeAvailableDurations(matched, nextCategory);
    const nextDuration = durs.options.length === 1 ? durs.options[0].key : 'any';

    setCategory(nextCategory);
    setDuration(nextDuration);
    onSearch(item.name, nextCategory, nextDuration);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    onSearch(destination, category, duration);
    // Smooth scroll to packages
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClearFilters = () => {
    manualCategoryRef.current = false;
    manualDurationRef.current = false;
    setDestination('');
    setCategory('all');
    setDuration('any');
    if (onResetSearch) {
      onResetSearch();
    } else {
      onSearch('', 'all', 'any');
    }
  };

  const hasActiveFilters = destination.trim() !== '' || category !== 'all' || duration !== 'any';

  return (
    <section id="search-tours-section" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border border-emerald-700/60 text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-6 border-b border-emerald-800/80 gap-3">
            <div>
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-1.5">
                <i className="fa-solid fa-compass text-sm"></i>
                <span>Find Your Ethiopian Expedition</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Search & Filter Tour Packages
              </h2>
            </div>
            
            <div className="flex items-center gap-3">
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="text-xs text-amber-300 hover:text-white transition-colors flex items-center gap-1.5 bg-emerald-900/80 hover:bg-emerald-800 px-3 py-1.5 rounded-full border border-emerald-700/60 cursor-pointer"
                >
                  <i className="fa-solid fa-rotate-left text-[11px]"></i>
                  <span>Reset Filters</span>
                </button>
              )}
              <span className="text-xs text-emerald-200/80 hidden sm:inline">
                {availableDurations.total} {availableDurations.total === 1 ? 'Tour' : 'Tours'} Available
              </span>
            </div>
          </div>

          {/* Search & Filter Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end text-gray-800">
            {/* 1. Destination Input */}
            <div ref={containerRef} className="text-left space-y-1 relative">
              <label className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                <i className="fa-solid fa-location-dot text-amber-400 mr-1"></i> Where to?
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="e.g. Addis Ababa, Lalibela..." 
                  value={destination}
                  onFocus={() => setIsDropdownOpen(true)}
                  onClick={() => setIsDropdownOpen(true)}
                  onChange={(e) => {
                    const val = e.target.value;
                    setDestination(val);
                    setIsDropdownOpen(true);
                    applyDestinationChange(val);
                  }}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-gold focus:outline-none pr-8 font-medium shadow-sm"
                  autoComplete="off"
                />
                {destination && (
                  <button
                    type="button"
                    onClick={() => {
                      setDestination('');
                      setIsDropdownOpen(true);
                      applyDestinationChange('');
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs w-4 h-4 flex items-center justify-center rounded-full"
                    title="Clear destination"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
              </div>

              {/* Autocomplete Dropdown */}
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
                            e.preventDefault();
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
                      No destinations matching "{destination}". Click Search to find all tours.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 2. Tour Type */}
            <div className="text-left space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  <i className="fa-solid fa-filter text-amber-400 mr-1"></i> Tour Type
                </label>
                {destination.trim() && (
                  <span className="text-[10px] font-bold text-amber-300 bg-emerald-900/90 px-2 py-0.5 rounded-full border border-amber-400/30">
                    {availableCategories.options.length} {availableCategories.options.length === 1 ? 'Type' : 'Types'}
                  </span>
                )}
              </div>
              <select 
                value={category}
                onChange={(e) => {
                  const newCat = e.target.value;
                  manualCategoryRef.current = newCat !== 'all';
                  setCategory(newCat);

                  const durs = computeAvailableDurations(matchingTours, newCat);
                  let nextDuration = duration;
                  if (!durs.options.some(opt => opt.key === duration)) {
                    nextDuration = durs.options.length === 1 ? durs.options[0].key : 'any';
                    manualDurationRef.current = false;
                  } else if (!manualDurationRef.current && durs.options.length === 1) {
                    nextDuration = durs.options[0].key;
                  }
                  setDuration(nextDuration);
                  onSearch(destination, newCat, nextDuration);
                }}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-gold focus:outline-none font-medium shadow-sm cursor-pointer"
              >
                <option value="all">
                  {destination.trim()
                    ? availableCategories.options.length > 0
                      ? `All Matching Types (${availableCategories.total}) • ${availableCategories.options.map(c => c.label).join(', ')}`
                      : 'No Matching Tour Types'
                    : `All Tour Types (${availableCategories.total} Tours)`}
                </option>
                {availableCategories.options.map(opt => (
                  <option key={opt.key} value={opt.key}>
                    {opt.label} ({opt.count} {opt.count === 1 ? 'tour' : 'tours'})
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Duration */}
            <div className="text-left space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  <i className="fa-solid fa-clock text-amber-400 mr-1"></i> Duration
                </label>
                {destination.trim() && (
                  <span className="text-[10px] font-bold text-amber-300 bg-emerald-900/90 px-2 py-0.5 rounded-full border border-amber-400/30">
                    {availableDurations.options.length} {availableDurations.options.length === 1 ? 'Option' : 'Options'}
                  </span>
                )}
              </div>
              <select 
                value={duration}
                onChange={(e) => {
                  const newDur = e.target.value;
                  manualDurationRef.current = newDur !== 'any';
                  setDuration(newDur);
                  onSearch(destination, category, newDur);
                }}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-gold focus:outline-none font-medium shadow-sm cursor-pointer"
              >
                <option value="any">
                  {destination.trim()
                    ? availableDurations.options.length > 0
                      ? `All Available Days (${availableDurations.total} ${availableDurations.total === 1 ? 'Tour' : 'Tours'})`
                      : 'No Available Days'
                    : `Any Duration (${availableDurations.total} Tours)`}
                </option>
                {availableDurations.options.map(opt => (
                  <option key={opt.key} value={opt.key}>
                    {opt.title} ({opt.count} {opt.count === 1 ? 'tour' : 'tours'}{opt.labels ? ` • ${opt.labels}` : ''})
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Submit Search Button */}
            <div>
              <button 
                type="submit" 
                className="w-full bg-brand-gold hover:bg-brand-goldHover active:bg-amber-600 text-white py-2.5 px-4 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>
                  {hasActiveFilters
                    ? `Search Tours (${exactMatches.length})`
                    : 'Search Tours'}
                </span>
              </button>
            </div>
          </form>

          {/* Inline notice when destination matches with Tour Type and Duration */}
          {destination.trim() !== '' && exactMatches.length > 0 && (
            <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-emerald-800/40 border border-emerald-500/40 text-emerald-50 flex flex-col gap-2.5">
              <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-semibold text-amber-300">
                  <i className="fa-solid fa-circle-check text-emerald-400"></i>
                  <span>
                    {exactMatches.length} {exactMatches.length === 1 ? 'Tour' : 'Tours'} matching "{destination}"
                    {category !== 'all' ? ` • ${category}` : ''}
                    {duration !== 'any' ? ` • ${duration === '1' ? '1 Day' : duration === '3-5' ? '3 - 5 Days' : '7+ Days'}` : ''}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-xs font-bold text-emerald-950 bg-amber-400 hover:bg-amber-300 px-3 py-1 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  View Below
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {exactMatches.slice(0, 6).map(tour => (
                  <button
                    key={tour.id}
                    type="button"
                    onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-left px-3 py-1.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-700/60 text-xs flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span className="font-semibold text-white">{tour.title}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-800 text-amber-300 capitalize">
                      {tour.category === 'fullday' || tour.category === 'halfday' ? 'Day Tour' : tour.category}
                    </span>
                    {tour.durationLabel && (
                      <span className="text-[10px] text-emerald-200/90">
                        • {tour.durationLabel}
                      </span>
                    )}
                  </button>
                ))}
                {exactMatches.length > 6 && (
                  <span className="text-xs text-emerald-200/80 self-center px-1">
                    +{exactMatches.length - 6} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Inline notice when destination has no match with selected Tour Type or Duration */}
          {destination.trim() !== '' && exactMatches.length === 0 && (
            <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-amber-500/15 border border-amber-400/40 text-amber-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start sm:items-center gap-2.5 text-xs sm:text-sm">
                <i className="fa-solid fa-circle-info text-amber-300 text-base shrink-0 mt-0.5 sm:mt-0"></i>
                <span>
                  {matchingTours.length > 0
                    ? `No "${destination}" tours match your selected Tour Type or Duration.`
                    : `No tours found matching "${destination}".`}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {matchingTours.length > 0 && (category !== 'all' || duration !== 'any') && (
                  <button
                    type="button"
                    onClick={() => {
                      setCategory('all');
                      setDuration('any');
                      onSearch(destination, 'all', 'any');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Show {matchingTours.length} {matchingTours.length === 1 ? 'Tour' : 'Tours'} for {destination}
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="px-3 py-1.5 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 text-amber-200 border border-emerald-700/60 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Reset All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
