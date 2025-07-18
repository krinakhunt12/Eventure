import React, { useState } from "react";
import { FiMail, FiCheckCircle } from "react-icons/fi";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="w-full py-10 sm:py-14 md:py-20 bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-[20%] right-[15%] w-52 h-52 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-['ClashDisplay'] tracking-tight">
              NEVER MISS A <span className="text-secondary">CAMPUS EVENT</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-primary-button mb-4 sm:mb-6 md:mx-0 mx-auto"></div>
            <p className="text-base sm:text-lg md:text-xl text-secondary mb-6 sm:mb-8 font-['Satoshi']">
              Subscribe to our newsletter and stay updated with all the exciting events, workshops, and activities happening across campus.
            </p>
            
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-4 font-['ClashDisplay']">WHAT YOU'LL GET:</h3>
              <ul className="space-y-2 sm:space-y-3 text-secondary/90 font-['Satoshi'] text-sm sm:text-base">
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>Weekly event digests</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>Exclusive early access to popular events</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>Special offers for subscribers</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>Campus news and important announcements</span>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-5">
              <a href="#" className="text-secondary/80 hover:text-primary transition-colors" aria-label="Follow us on Twitter">
                <FaTwitter size={20} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a href="#" className="text-secondary/80 hover:text-primary transition-colors" aria-label="Follow us on Instagram">
                <FaInstagram size={20} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a href="#" className="text-secondary/80 hover:text-primary transition-colors" aria-label="Follow us on LinkedIn">
                <FaLinkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
              </a>
            </div>
          </div>
          
          {/* Newsletter Form - Glassmorphism Card */}
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-white/40 shadow-lg hover:shadow-xl transition-all">
            {submitted ? (
              <div className="text-center py-6 sm:py-8">
                <FiCheckCircle className="text-primary w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5" />
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3 font-['ClashDisplay']">THANK YOU!</h3>
                <p className="text-secondary/90 mb-4 sm:mb-6 font-['Satoshi'] text-sm sm:text-base">
                  You've been successfully subscribed to our newsletter.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary hover:text-primary font-medium transition-colors font-['Satoshi'] text-sm sm:text-base"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="bg-primary-button/10 p-3 sm:p-4 rounded-full">
                    <FiMail className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-center text-primary mb-2 sm:mb-4 font-['ClashDisplay']">
                  JOIN OUR COMMUNITY
                </h3>
                <p className="text-secondary/90 text-center mb-4 sm:mb-6 font-['Satoshi'] text-sm sm:text-base">
                  Enter your email to receive our weekly newsletter with all campus updates.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 sm:mb-5">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-white/40 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#2a6168] font-['Satoshi'] text-sm sm:text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-button hover:bg-[#23424A] text-white py-2.5 sm:py-3 rounded-xl font-medium font-['Satoshi'] transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
                  >
                    Subscribe Now
                  </button>
                </form>
                <p className="text-xs text-secondary/70 mt-3 sm:mt-4 text-center font-['Satoshi']">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;