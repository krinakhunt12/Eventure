import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary font-['Satoshi']">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center py-8 sm:py-12 px-2 sm:px-4">
        <div className="max-w-md sm:max-w-2xl md:max-w-4xl w-full bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 p-4 sm:p-8 mx-auto">
          {/* Updated heading with ClashDisplay font */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-primary font-['ClashDisplay'] tracking-tight">
            CONTACT <span className="text-secondary">US</span>
          </h1>
          
          {/* Updated paragraph with Satoshi font */}
          <p className="text-center text-secondary mb-6 sm:mb-8 font-['Satoshi'] text-sm sm:text-base">
            We'd love to hear from you! Fill out the form or reach us using the info below.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="text-green-600 font-semibold text-base sm:text-lg text-center mt-6 sm:mt-8 font-['Satoshi']">
                  Thank you for reaching out! We'll get back to you soon.
                </div>
              ) : (
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 font-['Satoshi']">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-primary px-2 sm:px-3 py-1.5 sm:py-2 focus:outline-none focus:ring-2 focus:ring-primary-button font-['Satoshi'] text-xs sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 font-['Satoshi']">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-primary px-2 sm:px-3 py-1.5 sm:py-2 focus:outline-none focus:ring-2 focus:ring-primary-button font-['Satoshi'] text-xs sm:text-base"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 font-['Satoshi']">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="mt-1 block w-full rounded-lg border border-primary px-2 sm:px-3 py-1.5 sm:py-2 focus:outline-none focus:ring-2 focus:ring-primary-button font-['Satoshi'] text-xs sm:text-base"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-button hover:bg-[#23424A] text-white py-2 sm:py-2.5 rounded-lg text-base sm:text-lg font-semibold transition-colors font-['Satoshi'] shadow-sm hover:shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Info & Map Placeholder */}
            <div className="flex flex-col items-center justify-center">
              <div className="mb-4 sm:mb-6 w-full space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 2a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8zm-4 18v-6" />
                  </svg>
                  <span className="text-gray-700 font-['Satoshi'] text-xs sm:text-base">hello@Eventure.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="text-gray-700 font-['Satoshi'] text-xs sm:text-base">Eventure HQ, College Road, City</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10a9 9 0 0118 0c0 7-9 13-9 13S3 17 3 10z" />
                  </svg>
                  <span className="text-gray-700 font-['Satoshi'] text-xs sm:text-base">+91 98765 43210</span>
                </div>
              </div>
              
              {/* Map Placeholder with glassmorphism effect */}
              <div className="w-full h-28 sm:h-40 bg-white/30 backdrop-blur-md rounded-lg flex items-center justify-center text-secondary font-semibold border border-white/40 font-['Satoshi'] text-xs sm:text-base">
                Map coming soon
              </div>
              
              {/* Social Media Links (optional) */}
              <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
                {['twitter', 'instagram', 'linkedin', 'facebook'].map((social) => (
                  <div key={social} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 hover:bg-primary-button/20 transition-colors">
                    <span className="text-secondary"></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;