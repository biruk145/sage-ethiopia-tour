import React from 'react';

export default function Footer() {
  const recipientEmail = "birukshimels17@gmail.com";
  const emailSubject = encodeURIComponent("Inquiry - Sage Ethiopia Tours");
  const emailBody = encodeURIComponent(
    "Hello Biruk / Sage Ethiopia Tours,\n\nI visited your website and would like to inquire about your tour packages.\n\nBest regards,"
  );
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${emailSubject}&body=${emailBody}`;
  const mailtoFallback = `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBody}`;

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Open Google Mail compose in a new tab
    const newWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // If popup blocker intervened, redirect current window or fallback to mailto
      window.location.href = mailtoFallback;
    }
  };

  return (
    <footer id="contact" className="bg-brand-earth text-white pt-16 pb-8 border-t-4 border-brand-gold relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white text-xl font-bold font-serif shadow-md">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wide text-amber-100">SAGE ETHIOPIA TOUR</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Your trusted travel partner in the Land of Origins. Experiencing Ethiopia authentically since 2018.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors text-gray-300">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors text-gray-300">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors text-gray-300">
                <i className="fa-brands fa-twitter text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors text-gray-300">
                <i className="fa-brands fa-tripadvisor text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-amber-400 transition-colors"><i className="fa-solid fa-angle-right text-[10px] mr-2"></i>Home</a></li>
              <li><a href="#packages" className="hover:text-amber-400 transition-colors"><i className="fa-solid fa-angle-right text-[10px] mr-2"></i>Tour Packages</a></li>
              <li><a href="#attractions" className="hover:text-amber-400 transition-colors"><i className="fa-solid fa-angle-right text-[10px] mr-2"></i>Attractions</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors"><i className="fa-solid fa-angle-right text-[10px] mr-2"></i>About Sage</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot text-brand-gold mt-1 mr-3 w-4 text-center"></i>
                <span>Bole Road<br />Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center">
                <i className="fa-brands fa-whatsapp text-green-400 mr-3 w-4 text-center text-base"></i>
                <a 
                  href="https://wa.me/251922123341?text=Hello%20Sage%20Tours%2C%20I%20would%20like%20to%20inquire%20about%20your%20Ethiopia%20tour%20packages." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-300 transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
                  title="Click to open WhatsApp chat with Sage Tours (+2519 22123341)"
                >
                  <span>+2519 22123341</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-800/80 text-emerald-200 border border-emerald-600/40 group-hover:border-emerald-400 group-hover:text-white transition-colors">
                    WhatsApp
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope text-brand-gold mr-3 w-4 text-center"></i>
                <a 
                  href={gmailUrl}
                  onClick={handleEmailClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
                  title={`Click to open Gmail compose and email ${recipientEmail}`}
                >
                  <span className="underline decoration-brand-gold/40 hover:decoration-brand-gold">{recipientEmail}</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-brand-gold opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sage Tours Ethiopia. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
