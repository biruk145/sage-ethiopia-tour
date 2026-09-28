import React from 'react';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center sm:text-left">
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs">About Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-emerald leading-tight mt-1">
            Welcome to Sage Ethiopia Tour and Travel
          </h2>
          <p className="text-amber-800/80 font-medium text-sm sm:text-base mt-1">
            Your trusted local tour partner in Ethiopia.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          With <strong className="text-brand-emerald">6+ years of experience</strong> organizing Addis Ababa city tours, layover tours, cultural experiences, and Ethiopia adventures, we put our travelers first with genuine hospitality, personalized itineraries, and reliable service.
        </p>

        {/* Why Choose Us - Streamlined 3x2 Grid */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Why Travel With Us?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-lg mb-1">🕰️</div>
              <h4 className="font-bold text-brand-emerald text-sm mb-1">6+ Years of Experience</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Deep expertise across Ethiopian history, culture, and destinations.
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-lg mb-1">💳</div>
              <h4 className="font-bold text-brand-emerald text-sm mb-1">No Prepayment Required</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                We believe trust comes first. Enjoy your tour and pay at the end.
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-lg mb-1">👥</div>
              <h4 className="font-bold text-brand-emerald text-sm mb-1">Dedicated Local Team</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Professional guides, licensed drivers, and coordinated airport transfers.
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-lg mb-1">🇪🇹</div>
              <h4 className="font-bold text-brand-emerald text-sm mb-1">Authentic Culture</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Local cuisine, traditional coffee rituals, colorful markets, and sacred sites.
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-lg mb-1">🎯</div>
              <h4 className="font-bold text-brand-emerald text-sm mb-1">Tailored Schedules</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Customized for layovers, full-day visits, or multi-day expeditions.
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-lg mb-1">💰</div>
              <h4 className="font-bold text-brand-emerald text-sm mb-1">Fair & Honest Pricing</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Clear rates with no hidden fees and high standard vehicles and gear.
              </p>
            </div>
          </div>
        </div>

        {/* Compact Contact & Quote Card */}
        <div className="bg-brand-sand/40 border border-brand-gold/30 rounded-xl p-4 sm:p-5 space-y-2.5">
          <p className="font-serif italic text-brand-earth text-sm sm:text-base font-semibold">
            "Come as a traveler. Leave as a friend."
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-800 pt-1">
            <a 
              href="mailto:birukshimels17@gmail.com?subject=Inquiry%20-%20Sage%20Ethiopia%20Tours" 
              className="inline-flex items-center gap-1.5 hover:text-brand-emerald font-medium transition-colors"
            >
              <span>📧</span>
              <span className="underline decoration-brand-gold/60">birukshimels17@gmail.com</span>
            </a>
            <a 
              href="https://wa.me/251922123341?text=Hello%20Sage%20Tours%2C%20I%20would%20like%20to%20inquire%20about%20your%20Ethiopia%20tour%20packages." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 hover:text-green-700 font-medium transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-green-600 text-base"></i>
              <span>WhatsApp: +251 922123341</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
