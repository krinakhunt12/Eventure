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
    <div className="min-h-screen flex flex-col bg-primary font-sans font-poppins" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl border border-[#E0E7EA] p-8 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6 text-primary font-poppins">Contact Us</h1>
          <p className="text-center text-secondary mb-8">We'd love to hear from you! Fill out the form or reach us using the info below.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="text-green-600 font-semibold text-lg text-center mt-8">Thank you for reaching out! We'll get back to you soon.</div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-primary px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-button"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-primary px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-button"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="mt-1 block w-full rounded-lg border border-primary px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-button"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-button hover:bg-primary-button-hover text-[var(--primary-button-text-color)] py-2 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            {/* Contact Info & Map Placeholder */}
            <div className="flex flex-col items-center justify-center">
              <div className="mb-6 w-full">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-secondary mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 2a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8zm-4 18v-6" /></svg>
                  <span className="text-gray-700">hello@Eventure.com</span>
                </div>
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-secondary mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  <span className="text-gray-700">Eventure HQ, College Road, City</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-secondary mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10a9 9 0 0118 0c0 7-9 13-9 13S3 17 3 10z" /></svg>
                  <span className="text-gray-700">+91 98765 43210</span>
                </div>
              </div>
              <div className="w-full h-40 bg-[#E0E7EA] rounded-lg flex items-center justify-center text-secondary font-semibold">
                {/* Map Placeholder */}
                Map coming soon
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