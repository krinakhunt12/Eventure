import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const team = [
  {
    name: "Shubham Kumar",
    role: "Founder & Lead Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Aditi Sharma",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Backend Engineer",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Priya Singh",
    role: "Community Manager",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const About = () => (
  <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] text-primary relative overflow-hidden py-10 sm:py-14 md:py-20 px-2 sm:px-4">
      {/* Geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-[20%] right-[15%] w-52 h-52 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-['ClashDisplay'] uppercase">
            About <span className="text-secondary">Eventure</span>
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[#2a6168] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-md sm:max-w-xl md:max-w-2xl mx-auto font-['Satoshi']">
            Empowering campus communities through seamless event discovery, management, and participation.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-xl sm:max-w-2xl md:max-w-4xl w-full mb-10 sm:mb-14 md:mb-16 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-white/40 flex flex-col items-center hover:shadow-lg transition-all">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-secondary mb-3 sm:mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 text-primary font-['ClashDisplay']">OUR MISSION</h2>
              <p className="text-secondary/90 text-center font-['Satoshi'] text-sm sm:text-base">
                To connect students, organizers, and administrators, making campus life vibrant and accessible for all through technology and design.
              </p>
            </div>
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-white/40 flex flex-col items-center hover:shadow-lg transition-all">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-secondary mb-3 sm:mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 8v8" />
              </svg>
              <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 text-primary font-['ClashDisplay']">OUR VISION</h2>
              <p className="text-secondary/90 text-center font-['Satoshi'] text-sm sm:text-base">
                To be the leading platform for campus engagement, fostering growth, creativity, and collaboration in every institution.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-5xl mb-10 sm:mb-14 md:mb-16 mx-auto">
          <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-primary text-center font-['ClashDisplay']">
            MEET <span className="text-secondary">THE TEAM</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {team.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 flex flex-col items-center border border-white/40 hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-3 sm:mb-4 object-cover border-2 sm:border-4 border-white/50 hover:border-[#2a6168]/50 transition-colors" 
                />
                <h4 className="font-semibold text-base sm:text-lg text-primary mb-0.5 sm:mb-1 font-['ClashDisplay']">{member.name}</h4>
                <p className="text-secondary/80 text-xs sm:text-sm font-['Satoshi']">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full max-w-md sm:max-w-2xl md:max-w-3xl mb-10 sm:mb-14 md:mb-16 mx-auto">
          <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-primary text-center font-['ClashDisplay']">
            CONTACT <span className="text-secondary">US</span>
          </h3>
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-white/40 text-center hover:shadow-lg transition-all">
            <p className="mb-1 sm:mb-2 text-secondary/90 font-['Satoshi'] text-sm sm:text-base">
              Have questions, feedback, or want to collaborate?
            </p>
            <a 
              href="mailto:hello@Eventure.com" 
              className="text-secondary font-semibold hover:underline font-['Satoshi'] text-sm sm:text-base"
            >
              hello@Eventure.com
            </a>
          </div>
        </div>

        <div className="text-center text-secondary/80 mt-6 sm:mt-8 font-['Satoshi'] text-xs sm:text-sm">
          Built with love by a passionate team of developers and designers.
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default About;