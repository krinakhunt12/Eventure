import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const organizers = [
  {
    id: 1,
    name: "Aditi Sharma",
    role: "Cultural Club President",
    bio: "Passionate about music, dance, and bringing students together for unforgettable experiences.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Tech Society Lead",
    bio: "Loves coding, hackathons, and inspiring innovation on campus.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Sports Committee Head",
    bio: "Dedicated to promoting fitness, teamwork, and fun through sports events.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 4,
    name: "Shubham Kumar",
    role: "Entrepreneurship Cell Coordinator",
    bio: "Empowering students to turn ideas into reality and build startups.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
];

const OrganizersSpotlightSection = () => (
  <section className="w-full py-10 sm:py-14 md:py-20 bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] relative overflow-hidden">
    {/* Geometric background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute top-[10%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-[20%] right-[15%] w-52 h-52 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-xl"></div>
    </div>
    
    <div className="max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-['ClashDisplay'] tracking-tight">
          ORGANIZERS <span className="text-secondary">SPOTLIGHT</span>
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-primary-button mx-auto mb-4 sm:mb-6"></div>
        <p className="text-base sm:text-lg md:text-xl text-secondary max-w-md sm:max-w-2xl md:max-w-3xl mx-auto font-['Satoshi']">
          Meet the passionate team behind our amazing events and initiatives
        </p>
      </div>
      
      {/* Organizers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
        {organizers.map((org) => (
          <div
            key={org.id}
            className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 flex flex-col items-center p-5 sm:p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group"
          >
            {/* Avatar with badge */}
            <div className="relative mb-4 sm:mb-6">
              <img
                src={org.avatar}
                alt={org.name}
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover border-2 sm:border-4 border-white/50 group-hover:border-primary/50 transition-colors"
              />
              <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 bg-primary-button text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-0.5 sm:py-1 rounded-full font-['Satoshi'] shadow-sm">
                {org.role.split(' ')[0]}
              </div>
            </div>
            
            {/* Organizer Info */}
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-1 sm:mb-2 font-['ClashDisplay'] group-hover:text-primary transition-colors">
              {org.name}
            </h3>
            <div className="text-secondary/80 text-xs sm:text-sm mb-2 sm:mb-4 font-medium font-['Satoshi']">
              {org.role}
            </div>
            <p className="text-secondary/90 text-center text-xs sm:text-sm mb-4 sm:mb-6 px-1 sm:px-2 font-['Satoshi']">
              {org.bio}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4 mt-auto">
              <a 
                href={org.social.linkedin} 
                className="text-secondary/80 hover:text-primary transition-colors"
                aria-label={`Connect with ${org.name} on LinkedIn`}
              >
                <FaLinkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a 
                href={org.social.twitter} 
                className="text-secondary/80 hover:text-primary transition-colors"
                aria-label={`Follow ${org.name} on Twitter`}
              >
                <FaTwitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a 
                href={`mailto:${org.social.email}`} 
                className="text-secondary/80 hover:text-primary transition-colors"
                aria-label={`Email ${org.name}`}
              >
                <FaEnvelope size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OrganizersSpotlightSection;