import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Student Body President, MIT",
    text: "Eventure transformed how we organize events. Attendance increased by 300% in just one semester! The platform's intuitive interface made it easy for both organizers and attendees to engage with campus activities.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Event Coordinator, Stanford",
    text: "The analytics dashboard helped us understand what students really want. We've been able to tailor our events to student preferences, resulting in higher satisfaction rates and more meaningful campus experiences.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4
  },
  {
    name: "Dr. Emily Watson",
    role: "Dean of Students, Harvard",
    text: "Finally, a platform that puts student experience first. The automated scheduling and conflict detection have saved our staff countless hours while improving student participation across all campus events.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    name: "Jason Park",
    role: "CS Department Head, Berkeley",
    text: "The integration with our academic systems was seamless. Our students love having all campus activities in one place, and the mobile app makes access incredibly convenient.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4
  },
  {
    name: "Nia Johnson",
    role: "Student Activities Director, NYU",
    text: "From small club meetings to major campus festivals, Eventure handles it all. The attendance tracking and feedback features have revolutionized how we measure event success.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5
  }
];



const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10% left-10% w-64 h-64 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20% right-15% w-80 h-80 bg-white/15 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with custom font */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#23424A] mb-4 font-['ClashDisplay'] tracking-tight">
            LOVED BY <span className="text-[#4A4A4A]">CAMPUS LEADERS</span>
          </h2>
          <div className="w-24 h-1 bg-[#2a6168] mx-auto mb-6"></div>
          <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto font-['Satoshi']">
            Don't just take our word for it - hear from those who've transformed their campus communities
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/40 shadow-lg relative overflow-hidden">
            <div className="absolute top-8 left-8 text-[#2a6168]/10">
              <FaQuoteLeft size={60} />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/50 shadow-md hover:border-[#2a6168]/50 transition-colors"
                />
              </div>
              
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400' : 'text-[#4A4A4A]/30'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-[#4A4A4A]/90 mb-6 leading-relaxed font-['Satoshi']">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div>
                  <div className="text-[#23424A] font-semibold text-xl font-['ClashDisplay']">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-[#4A4A4A]/80 text-sm font-['Satoshi']">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md border border-white/40 hover:bg-[#2a6168] hover:text-white transition-colors"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md border border-white/40 hover:bg-[#2a6168] hover:text-white transition-colors"
          >
            <FaChevronRight />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-[#2a6168]' : 'bg-[#4A4A4A]/30'}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "300%", label: "Increase in engagement" },
            { value: "95%", label: "Of universities recommend" },
            { value: "4.9/5", label: "Average satisfaction rating" },
            { value: "100+", label: "Campuses empowered" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/30 backdrop-blur-md p-6 rounded-xl border border-white/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl font-bold text-[#23424A] font-['ClashDisplay']">{stat.value}</div>
              <div className="text-[#4A4A4A]/80 font-['Satoshi']">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
