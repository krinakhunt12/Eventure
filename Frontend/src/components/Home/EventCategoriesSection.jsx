import React from "react";

// Dummy event categories data
const categories = [
  {
    name: "Cultural",
    description: "Music, dance, drama, and more to celebrate campus life.",
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: "120+ events this year",
    popularEvent: "Annual Cultural Fest",
    color: "bg-secondary"
  },
  {
    name: "Tech",
    description: "Workshops, hackathons, and talks for tech enthusiasts.",
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    stats: "85+ workshops conducted",
    popularEvent: "Hackathon 2023",
    color: "bg-secondary"
  },
  {
    name: "Sports",
    description: "Tournaments, fitness, and fun games for everyone.",
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    stats: "50+ tournaments organized",
    popularEvent: "Inter-College Cricket",
    color: "bg-secondary"
  },
  {
    name: "Academic",
    description: "Seminars, competitions, and educational events.",
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    stats: "65+ seminars hosted",
    popularEvent: "Research Symposium",
    color: "bg-secondary"
  },
  {
    name: "Social",
    description: "Networking, community service, and social causes.",
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    stats: "40+ community projects",
    popularEvent: "Volunteer Fair",
    color: "bg-secondary"
  },
  {
    name: "Career",
    description: "Job fairs, interviews, and professional development.",
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    stats: "30+ companies participating",
    popularEvent: "Annual Job Fair",
    color: "bg-secondary"
  },
];

const EventCategoriesSection = () => (
  <section className="w-full py-20 bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] relative overflow-hidden">
    {/* Geometric background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute top-10% left-10% w-64 h-64 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20% right-15% w-80 h-80 bg-white/15 rounded-full blur-xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Section Header with custom font */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['ClashDisplay'] tracking-tight uppercase">
          Explore Event <span className="text-secondary">Categories</span>
        </h2>
        <div className="w-24 h-1 bg-primary-button mx-auto mb-6"></div>
        <p className="text-lg text-secondary max-w-2xl mx-auto font-['Satoshi']">
          Discover diverse events across campuses to learn, compete, and connect with your community
        </p>
      </div>

      {/* Categories Grid - Glassmorphism Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div 
            key={cat.name}
            className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group"
          >
            {/* Icon with geometric background */}
            <div className={`p-4 mb-6 rounded-xl w-16 h-16 flex items-center justify-center ${cat.color} bg-opacity-80`}>
              {React.cloneElement(cat.icon, { 
                className: "w-8 h-8 text-primary group-hover:scale-110 transition-transform" 
              })}
            </div>
            
            {/* Category Name */}
            <h3 className="text-2xl font-bold text-primary mb-3 font-['ClashDisplay'] group-hover:text-primary transition-colors">
              {cat.name}
            </h3>
            
            {/* Description */}
            <p className="text-secondary/90 mb-5 font-['Satoshi'] leading-relaxed">
              {cat.description}
            </p>
            
            {/* Additional Info */}
            <div className="space-y-3 text-sm font-['Satoshi']">
              <div className="flex items-center text-sceondary">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {cat.stats}
              </div>
              <div className="flex items-center text-secondary">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Popular: {cat.popularEvent}
              </div>
            </div>
            
            {/* View Button */}
            <button className="mt-6 text-sm font-medium text-primary hover:text-primary flex items-center transition font-['Satoshi'] group">
              View events
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Additional Content - Glass Panel */}
      <div className="mt-16 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 p-8 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-button/10 rounded-full blur-2xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold text-primary mb-4 font-['ClashDisplay']">
              <span className="text-secondary">Cant't find</span> Your event?
            </h3>
            <p className="text-secondary mb-6 font-['Satoshi']">
              We're constantly expanding our categories. Suggest a new category and help shape
              the platform's future offerings.
            </p>
            <button className="px-6 py-3 bg-primary-button text-white rounded-xl hover:bg-[#23424A] transition flex items-center font-['Satoshi'] font-medium">
              Suggest a Category
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white/70 p-6 rounded-xl border border-white/90">
              <h4 className="font-semibold text-primary mb-4 font-['ClashDisplay']">Coming Soon:</h4>
              <ul className="grid grid-cols-2 gap-3 font-['Satoshi']">
                {["Entrepreneurship", "Arts & Crafts", "E-sports", "Food & Cooking"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-button mr-3"></div>
                    <span className="text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EventCategoriesSection;