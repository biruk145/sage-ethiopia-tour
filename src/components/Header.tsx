import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigateToCategory?: (category: string) => void;
}

export default function Header({ onNavigateToCategory }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
      id="main-header"
    >
      <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-white rounded-b-2xl transition-all ${isScrolled ? 'glass-nav shadow-xl mt-0' : 'bg-transparent mt-0 sm:mt-2'}`}>
        {/* Brand Logo */}
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white text-xl font-bold font-serif shadow-md group-hover:scale-105 transition-transform">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-wide text-amber-100">SAGE ETHIOPIA TOUR</span>
            <span className="text-[10px] tracking-widest text-amber-300 uppercase font-medium">Ethiopia Voyages</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
          <a href="#home" className="hover:text-amber-300 hover:scale-110 inline-block transition-all duration-300 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gold hover:after:w-full after:transition-all">Home</a>
          
          <div className="relative group hover:scale-110 transition-all duration-300">
            <a href="#packages" className="hover:text-amber-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gold hover:after:w-full after:transition-all flex items-center gap-1 cursor-pointer">
              Tour Packages <i className="fa-solid fa-chevron-down text-[10px] transition-transform group-hover:rotate-180"></i>
            </a>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-emerald-950/95 backdrop-blur-md border border-emerald-800/50 rounded-xl shadow-xl overflow-visible py-1 flex flex-col scale-90 origin-top-left">
                {/* 1. Nested Dropdown for Addis Ababa City Tour */}
                <div className="relative group/nested">
                  <button onClick={() => onNavigateToCategory?.('daytour')} className="w-full text-left px-4 py-2.5 text-gray-200 hover:bg-emerald-800 hover:text-amber-300 transition-all duration-300 text-sm flex justify-between items-center group-hover/nested:bg-emerald-800 group-hover/nested:text-amber-300 border-b border-emerald-800/30">
                    <span className="group-hover/nested:pl-2 transition-all duration-300">Addis Ababa City Tour</span>
                    <i className="fa-solid fa-chevron-right text-[10px]"></i>
                  </button>
                  
                  <div className="absolute top-0 left-full ml-1 w-48 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 transform -translate-x-2 group-hover/nested:translate-x-0 z-50">
                    <div className="bg-emerald-950/95 backdrop-blur-md border border-emerald-800/50 rounded-xl shadow-xl overflow-hidden py-1 flex flex-col">
                      <button onClick={() => onNavigateToCategory?.('fullday')} className="text-left px-4 py-2.5 text-gray-200 hover:bg-emerald-800 hover:text-amber-300 hover:pl-6 transition-all duration-300 text-sm border-b border-emerald-800/30">Full Day tour</button>
                      <button onClick={() => onNavigateToCategory?.('halfday')} className="text-left px-4 py-2.5 text-gray-200 hover:bg-emerald-800 hover:text-amber-300 hover:pl-6 transition-all duration-300 text-sm">Half-Day tour</button>
                    </div>
                  </div>
                </div>

                <button onClick={() => onNavigateToCategory?.('cultural')} className="text-left px-4 py-2.5 text-gray-200 hover:bg-emerald-800 hover:text-amber-300 hover:pl-6 transition-all duration-300 text-sm border-b border-emerald-800/30">Cultural</button>
                <button onClick={() => onNavigateToCategory?.('festival')} className="text-left px-4 py-2.5 text-gray-200 hover:bg-emerald-800 hover:text-amber-300 hover:pl-6 transition-all duration-300 text-sm border-b border-emerald-800/30">Festival</button>
                <button onClick={() => onNavigateToCategory?.('adventure')} className="text-left px-4 py-2.5 text-gray-200 hover:bg-emerald-800 hover:text-amber-300 hover:pl-6 transition-all duration-300 text-sm border-b border-emerald-800/30">Adventure</button>
                <button onClick={() => onNavigateToCategory?.('historical')} className="text-left px-4 py-2.5 text-gray-200 hover:bg-emerald-800 hover:text-amber-300 hover:pl-6 transition-all duration-300 text-sm last:border-0">Historical</button>
              </div>
            </div>
          </div>

          <a href="#attractions" className="hover:text-amber-300 hover:scale-110 inline-block transition-all duration-300 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gold hover:after:w-full after:transition-all">Attractions</a>
          <a href="#gallery" className="hover:text-amber-300 hover:scale-110 inline-block transition-all duration-300 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gold hover:after:w-full after:transition-all">Gallery</a>
          <a href="#about" className="hover:text-amber-300 hover:scale-110 inline-block transition-all duration-300 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gold hover:after:w-full after:transition-all">About Sage</a>
          <a href="#contact" className="hover:text-amber-300 hover:scale-110 inline-block transition-all duration-300 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gold hover:after:w-full after:transition-all">Contact Us</a>
        </div>

        {/* Header Action Button (Book Now) */}
        <div className="hidden md:flex items-center space-x-3">
          <a href="#booking" className="bg-brand-gold hover:bg-brand-goldHover text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
            <i className="fa-solid fa-compass text-xs"></i> Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-emerald-800 transition-colors" 
          aria-label="Toggle Navigation"
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-y-0 right-0 w-72 bg-brand-emerald text-white z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out shadow-2xl flex flex-col justify-between md:hidden`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between pb-6 border-b border-emerald-700">
            <span className="font-serif text-xl font-bold text-amber-200">SAGE ETHIOPIA TOUR</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white p-2"
            >
              <i className="fa-solid fa-xmark text-2xl"></i>
            </button>
          </div>
          <div className="mt-8 flex flex-col space-y-4 text-base font-medium">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-300 transition-colors">Home</a>
            <a href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-300 transition-colors">Tour Packages</a>
            <a href="#attractions" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-300 transition-colors">Attractions</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-300 transition-colors">Gallery</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-300 transition-colors">About Sage</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-300 transition-colors">Contact Us</a>
          </div>
        </div>
        <div className="p-6 border-t border-emerald-700">
          <a 
            href="#booking" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-brand-gold hover:bg-brand-goldHover text-white py-3 rounded-xl font-semibold text-center block shadow-lg"
          >
            Book Your Tour
          </a>
          <p className="text-xs text-center text-emerald-300 mt-4">Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </header>
  );
}

