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
    <section className="w-full py-20 bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10% left-10% w-64 h-64 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20% right-15% w-80 h-80 bg-white/15 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#23424A] mb-4 font-['ClashDisplay'] tracking-tight">
              NEVER MISS A <span className="text-[#4A4A4A]">CAMPUS EVENT</span>
            </h2>
            <div className="w-24 h-1 bg-[#2a6168] mb-6 md:mx-0 mx-auto"></div>
            <p className="text-lg text-[#4A4A4A] mb-8 font-['Satoshi']">
              Subscribe to our newsletter and stay updated with all the exciting events, workshops, and activities happening across campus.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#23424A] mb-4 font-['ClashDisplay']">WHAT YOU'LL GET:</h3>
              <ul className="space-y-3 text-[#4A4A4A]/90 font-['Satoshi']">
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#2a6168] mt-1 mr-3 flex-shrink-0" />
                  <span>Weekly event digests</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#2a6168] mt-1 mr-3 flex-shrink-0" />
                  <span>Exclusive early access to popular events</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#2a6168] mt-1 mr-3 flex-shrink-0" />
                  <span>Special offers for subscribers</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-[#2a6168] mt-1 mr-3 flex-shrink-0" />
                  <span>Campus news and important announcements</span>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-5">
              <a href="#" className="text-[#4A4A4A]/80 hover:text-[#2a6168] transition-colors" aria-label="Follow us on Twitter">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-[#4A4A4A]/80 hover:text-[#2a6168] transition-colors" aria-label="Follow us on Instagram">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-[#4A4A4A]/80 hover:text-[#2a6168] transition-colors" aria-label="Follow us on LinkedIn">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
          
          {/* Newsletter Form - Glassmorphism Card */}
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-lg hover:shadow-xl transition-all">
            {submitted ? (
              <div className="text-center py-8">
                <FiCheckCircle className="text-[#2a6168] w-14 h-14 mx-auto mb-5" />
                <h3 className="text-2xl font-bold text-[#23424A] mb-3 font-['ClashDisplay']">THANK YOU!</h3>
                <p className="text-[#4A4A4A]/90 mb-6 font-['Satoshi']">
                  You've been successfully subscribed to our newsletter.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#2a6168] hover:text-[#23424A] font-medium transition-colors font-['Satoshi']"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-[#2a6168]/10 p-4 rounded-full">
                    <FiMail className="text-[#2a6168] w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-[#23424A] mb-4 font-['ClashDisplay']">
                  JOIN OUR COMMUNITY
                </h3>
                <p className="text-[#4A4A4A]/90 text-center mb-6 font-['Satoshi']">
                  Enter your email to receive our weekly newsletter with all campus updates.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-5 py-3 rounded-xl border border-white/40 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#2a6168] font-['Satoshi']"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#2a6168] hover:bg-[#23424A] text-white py-3 rounded-xl font-medium font-['Satoshi'] transition-colors shadow-md hover:shadow-lg"
                  >
                    Subscribe Now
                  </button>
                </form>
                <p className="text-xs text-[#4A4A4A]/70 mt-4 text-center font-['Satoshi']">
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