import React, { useState } from 'react';
import { tours } from '../data';
import { createOrder } from '../lib/supabase';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    date: '',
    guests: '1',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateAmount = (tourTitle: string, guestsCount: string) => {
    const selectedTour = tours.find(t => t.title === tourTitle);
    if (!selectedTour) return 0;
    const numericPrice = parseFloat(selectedTour.price.replace(/[^0-9.]/g, '')) || 0;
    const guestsNum = parseInt(guestsCount, 10) || 1;
    return numericPrice * guestsNum;
  };

  const selectedTour = tours.find(t => t.title === formData.tour);
  const estimatedAmount = calculateAmount(formData.tour, formData.guests);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const tourTitle = formData.tour || 'Custom Tour Inquiry';
      const totalAmount = calculateAmount(tourTitle, formData.guests);

      // Store checkout order data directly on Supabase
      await createOrder({
        name: formData.name,
        email_address: formData.email,
        booking: tourTitle,
        subscription: 'standard',
        total_amount: totalAmount,
        date: formData.date || new Date().toISOString().split('T')[0],
        phone: formData.phone,
        guests: formData.guests,
        message: formData.message,
        status: 'pending'
      });

      setSubmittedData({ ...formData });
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        tour: '',
        date: '',
        guests: '1',
        message: ''
      });
    } catch (error: any) {
      console.error("Error submitting booking: ", error);
      setErrorMessage(error?.message || "Something went wrong saving your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-sand/30 relative">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="md:w-[38%] bg-brand-emerald text-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-amber-300 font-semibold uppercase tracking-widest text-xs mb-3 block">Plan Your Journey</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Book Your Adventure</h2>
              <p className="text-emerald-100 mb-6 text-sm leading-relaxed">
                Ready to explore the wonders of Ethiopia? Fill out the form, and our travel team will get back to you within 24 hours to confirm your itinerary and custom travel details.
              </p>

              {estimatedAmount > 0 && (
                <div className="bg-emerald-900/60 border border-emerald-600/60 rounded-xl p-4 mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-emerald-300 font-medium mb-1">
                    Estimated Booking Total
                  </div>
                  <div className="text-2xl font-bold text-amber-300 font-serif">
                    ${estimatedAmount.toLocaleString()} USD
                  </div>
                  <div className="text-xs text-emerald-200 mt-1">
                    {formData.guests} {parseInt(formData.guests) === 1 ? 'Guest' : 'Guests'} &bull; {selectedTour?.price || '$0'} each
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4 text-sm text-emerald-50 pt-6 border-t border-emerald-800/60">
              <div className="flex items-center gap-3">
                <i className="fa-brands fa-whatsapp w-5 text-green-400 text-lg"></i>
                <a 
                  href="https://wa.me/251922123341?text=Hello%20Sage%20Tours%2C%20I%20would%20like%20to%20inquire%20about%20your%20Ethiopia%20tour%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors inline-flex items-center gap-2 group"
                  title="Click to open WhatsApp chat with Sage Tours"
                >
                  <span>+2519 22123341</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-900/80 text-emerald-200 border border-emerald-700/60 group-hover:border-emerald-400 group-hover:text-white transition-colors">
                    WhatsApp
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope w-5 text-amber-300"></i>
                <a 
                  href="mailto:birukshimels17@gmail.com?subject=Inquiry%20-%20Sage%20Ethiopia%20Tours" 
                  className="hover:text-amber-300 transition-colors underline decoration-emerald-600/40 hover:decoration-amber-300"
                  title="Click to send email to birukshimels17@gmail.com"
                >
                  birukshimels17@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot w-5 text-amber-300"></i>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="md:w-[62%] p-8 md:p-10">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[420px]">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                  <i className="fa-solid fa-check text-3xl text-brand-emerald"></i>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  Booking Request Received!
                </h3>

                <p className="text-gray-600 text-sm max-w-md">
                  Thank you, <strong>{submittedData?.name || 'Traveler'}</strong>! We have received your order for <strong>{submittedData?.tour || 'Tour Package'}</strong>. Our travel team will follow up via <strong>{submittedData?.email}</strong>.
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      setSubmittedData(null);
                    }}
                    className="px-6 py-2.5 bg-brand-emerald hover:bg-emerald-800 text-white rounded-xl transition-colors text-xs font-semibold shadow-md flex items-center gap-2"
                  >
                    <i className="fa-regular fa-plus"></i>
                    <span>Book Another Tour</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-brand-emerald outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-brand-emerald outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-brand-emerald outline-none transition-all" placeholder="+251 9... / +1 (555)..." />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                    <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-brand-emerald outline-none transition-all bg-white">
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="tour" className="block text-sm font-medium text-gray-700 mb-1">Tour Package *</label>
                    <select id="tour" name="tour" required value={formData.tour} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-brand-emerald outline-none transition-all bg-white">
                      <option value="">-- Select a Tour --</option>
                      {tours.map(tour => (
                        <option key={tour.id} value={tour.title}>{tour.title} ({tour.price})</option>
                      ))}
                      <option value="Custom">Custom / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                    <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-brand-emerald outline-none transition-all" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements or Special Notes</label>
                  <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-brand-emerald outline-none transition-all resize-none" placeholder="Dietary needs, airport pick-up, private vehicle request..." />
                </div>
                
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center gap-2">
                    <i className="fa-solid fa-circle-exclamation text-red-500"></i>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-gold hover:bg-brand-goldHover text-white py-3 rounded-lg font-bold transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <><i className="fa-solid fa-circle-notch fa-spin"></i> Submitting Order to Supabase...</>
                  ) : (
                    <>
                      <i className="fa-regular fa-calendar-check"></i>
                      <span>
                        Submit Booking Request {estimatedAmount > 0 ? `($${estimatedAmount.toLocaleString()} USD)` : ''}
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
