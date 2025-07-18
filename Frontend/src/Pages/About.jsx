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
    <div className="min-h-screen bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] text-primary relative overflow-hidden py-20 px-4">
      {/* Geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10% left-10% w-64 h-64 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20% right-15% w-80 h-80 bg-white/15 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#23424A] mb-4 font-['ClashDisplay']">
            ABOUT <span className="text-[#4A4A4A]">EVENTURE</span>
          </h1>
          <div className="w-24 h-1 bg-[#2a6168] mx-auto mb-6"></div>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto font-['Satoshi']">
            Empowering campus communities through seamless event discovery, management, and participation.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-4xl w-full mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 flex flex-col items-center hover:shadow-lg transition-all">
              <svg className="w-10 h-10 text-[#2a6168] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <h2 className="text-2xl font-bold mb-2 text-[#23424A] font-['ClashDisplay']">OUR MISSION</h2>
              <p className="text-[#4A4A4A]/90 text-center font-['Satoshi']">
                To connect students, organizers, and administrators, making campus life vibrant and accessible for all through technology and design.
              </p>
            </div>
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 flex flex-col items-center hover:shadow-lg transition-all">
              <svg className="w-10 h-10 text-[#2a6168] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 8v8" />
              </svg>
              <h2 className="text-2xl font-bold mb-2 text-[#23424A] font-['ClashDisplay']">OUR VISION</h2>
              <p className="text-[#4A4A4A]/90 text-center font-['Satoshi']">
                To be the leading platform for campus engagement, fostering growth, creativity, and collaboration in every institution.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full max-w-5xl mb-16">
          <h3 className="text-2xl font-bold mb-6 text-[#23424A] text-center font-['ClashDisplay']">
            MEET <span className="text-[#4A4A4A]">THE TEAM</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white/30 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center border border-white/40 hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-white/50 hover:border-[#2a6168]/50 transition-colors" 
                />
                <h4 className="font-semibold text-lg text-[#23424A] mb-1 font-['ClashDisplay']">{member.name}</h4>
                <p className="text-[#4A4A4A]/80 text-sm font-['Satoshi']">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full max-w-3xl mb-16">
          <h3 className="text-2xl font-bold mb-6 text-[#23424A] text-center font-['ClashDisplay']">
            CONTACT <span className="text-[#4A4A4A]">US</span>
          </h3>
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 text-center hover:shadow-lg transition-all">
            <p className="mb-2 text-[#4A4A4A]/90 font-['Satoshi']">
              Have questions, feedback, or want to collaborate?
            </p>
            <a 
              href="mailto:hello@Eventure.com" 
              className="text-[#2a6168] font-semibold hover:underline font-['Satoshi']"
            >
              hello@Eventure.com
            </a>
          </div>
        </div>

        <div className="text-center text-[#4A4A4A]/80 mt-8 font-['Satoshi']">
          Built with love by a passionate team of developers and designers.
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default About;