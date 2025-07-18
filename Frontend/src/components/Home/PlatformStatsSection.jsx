import React from "react";

// Dummy platform stats data
const stats = [
  {
    label: "Colleges",
    value: 120,
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 26h20M8 10v4m4-4v4m4-4v4m4-4v4M4 10h20v14H4V10z" />
      </svg>
    ),
    description: "Partner institutions hosting events",
    trend: "+12% this year"
  },
  {
    label: "Events",
    value: 350,
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    description: "Events created this academic year",
    trend: "+24% from last year"
  },
  {
    label: "Users",
    value: 5000,
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    description: "Active student participants",
    trend: "+1,200 new users"
  },
  {
    label: "Organizers",
    value: 80,
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    description: "Verified event organizers",
    trend: "+15 new organizers"
  },
];

const PlatformStatsSection = () => (
  <section className="w-full py-10 sm:py-14 md:py-20 bg-primary relative overflow-hidden">
    {/* Geometric background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute top-[10%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-[20%] right-[15%] w-52 h-52 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-xl"></div>
    </div>
    
    <div className="max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-['ClashDisplay'] tracking-tight uppercase">
          By the <span className="text-secondary">Numbers</span>
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-white mx-auto mb-4 sm:mb-6"></div>
        <p className="text-base sm:text-lg md:text-xl text-secondary max-w-md sm:max-w-2xl md:max-w-3xl mx-auto font-['Satoshi']">
          Quantifying our impact across academic communities
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mb-10 sm:mb-20">
        {stats.map((stat) => (
          <div 
            key={stat.label} 
            className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 p-5 sm:p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon with geometric background */}
              <div className="p-3 sm:p-4 mb-4 sm:mb-6 bg-white/50 rounded-xl w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center">
                {React.cloneElement(stat.icon, { className: "w-8 h-8 sm:w-10 sm:h-10 text-primary" })}
              </div>
              
              {/* Stat Value with custom font */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2 font-['Satoshi']">
                {stat.value.toLocaleString()}+
              </div>
              
              {/* Stat Label */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-2 sm:mb-3 font-['ClashDisplay'] uppercase tracking-wider">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-secondary/80 mb-2 sm:mb-4 font-['Satoshi']">
                {stat.description}
              </p>
              
              {/* Trend Indicator */}
              <div className="flex items-center justify-center text-xs sm:text-sm font-medium bg-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-secondary">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Content - Asymmetrical Layout */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        {/* Testimonial with polygon shape */}
        <div className="lg:w-3/5 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 p-5 sm:p-8 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 sm:-right-20 sm:-top-20 w-32 h-32 sm:w-64 sm:h-64 bg-primary-button/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-lg sm:text-2xl font-bold text-primary mb-3 sm:mb-6 font-['ClashDisplay']">
              <span className="text-secondary">Voices</span> from our community
            </h3>
            <blockquote className="text-base sm:text-xl italic text-secondary mb-3 sm:mb-6 font-['Satoshi'] leading-relaxed">
              "The platform's intuitive design helped us double event participation while cutting admin work in half."
            </blockquote>
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-dark flex items-center justify-center text-white mr-3 sm:mr-4">
                <span className="text-base sm:text-lg font-bold">SJ</span>
              </div>
              <div>
                <div className="font-semibold text-primary font-['Satoshi'] text-xs sm:text-base">Dr. Sarah Johnson</div>
                <div className="text-xs sm:text-sm text-secondary/70">Dean of Student Affairs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Events with timeline design */}
        <div className="lg:w-2/5 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 p-5 sm:p-8">
          <h3 className="text-lg sm:text-2xl font-bold text-primary mb-3 sm:mb-6 font-['ClashDisplay'] uppercase">
            <span className="text-secondary">UPCOMING</span> HIGHLIGHTS
          </h3>
          <div className="space-y-4 sm:space-y-6 relative">
            {/* Timeline line */}
            <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-0.5 bg-primary-button/20"></div>
            
            {[
              { date: "JUN 15-17", event: "Annual Tech Symposium" },
              { date: "JUL 22", event: "Cultural Fest 2023" },
              { date: "AUG 5", event: "Sports Championship Finals" }
            ].map((item, index) => (
              <div key={index} className="flex items-start relative pl-7 sm:pl-10">
                <div className="absolute left-0 mt-1 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white border-2 sm:border-3 border-primary flex items-center justify-center text-black text-xs sm:text-base font-bold font-['Satoshi']">
                  {item.date}
                </div>
                <div className="text-sm sm:text-lg text-secondary font-['Satoshi']">{item.event}</div>
              </div>
            ))}
          </div>
          <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-dark uppercase text-white rounded-xl hover:bg-[#23424A] transition flex items-center justify-center w-full font-['Satoshi'] font-medium text-xs sm:text-sm md:text-base">
            Explore all events
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default PlatformStatsSection;