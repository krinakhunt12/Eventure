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
  <section className="w-full py-20 bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] relative overflow-hidden">
    {/* Geometric background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute top-10% left-10% w-64 h-64 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20% right-15% w-80 h-80 bg-white/15 rounded-full blur-xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Section Header with custom font */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['ClashDisplay'] tracking-tight">
          ORGANIZERS <span className="text-secondary">SPOTLIGHT</span>
        </h2>
        <div className="w-24 h-1 bg-primary-button mx-auto mb-6"></div>
        <p className="text-lg text-secondary max-w-3xl mx-auto font-['Satoshi']">
          Meet the passionate team behind our amazing events and initiatives
        </p>
      </div>
      
      {/* Organizers Grid - Glassmorphism Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {organizers.map((org) => (
          <div
            key={org.id}
            className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 flex flex-col items-center p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group"
          >
            {/* Avatar with badge */}
            <div className="relative mb-6">
              <img
                src={org.avatar}
                alt={org.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-white/50 group-hover:border-[#2a6168]/50 transition-colors"
              />
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-primary-button text-white text-xs font-medium px-4 py-1 rounded-full font-['Satoshi'] shadow-sm">
                {org.role.split(' ')[0]}
              </div>
            </div>
            
            {/* Organizer Info */}
            <h3 className="text-xl font-bold text-primary mb-2 font-['ClashDisplay'] group-hover:text-[#2a6168] transition-colors">
              {org.name}
            </h3>
            <div className="text-secondary/80 text-sm mb-4 font-medium font-['Satoshi']">
              {org.role}
            </div>
            <p className="text-secondary/90 text-center text-sm mb-6 px-2 font-['Satoshi']">
              {org.bio}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-auto">
              <a 
                href={org.social.linkedin} 
                className="text-secondary/80 hover:text-[#2a6168] transition-colors"
                aria-label={`Connect with ${org.name} on LinkedIn`}
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href={org.social.twitter} 
                className="text-secondary/80 hover:text-[#2a6168] transition-colors"
                aria-label={`Follow ${org.name} on Twitter`}
              >
                <FaTwitter size={18} />
              </a>
              <a 
                href={`mailto:${org.social.email}`} 
                className="text-secondary/80 hover:text-[#2a6168] transition-colors"
                aria-label={`Email ${org.name}`}
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OrganizersSpotlightSection;