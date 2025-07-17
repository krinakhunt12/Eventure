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
  <section className="w-full py-20 bg-primary relative overflow-hidden">
    {/* Geometric background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute top-10% left-10% w-64 h-64 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20% right-15% w-80 h-80 bg-white/15 rounded-full blur-xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Section Header with custom font */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['ClashDisplay'] tracking-tight uppercase">
          By the <span className="text-secondary">Numbers</span>
        </h2>
        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-lg text-secondary max-w-2xl mx-auto font-['Satoshi']">
          Quantifying our impact across academic communities
        </p>
      </div>

      {/* Stats Grid - Glassmorphism Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {stats.map((stat) => (
          <div 
            key={stat.label} 
            className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon with geometric background */}
              <div className="p-4 mb-6 bg-white/50 rounded-xl w-20 h-20 flex items-center justify-center">
                {React.cloneElement(stat.icon, { className: "w-10 h-10 text-[#2a6168]" })}
              </div>
              
              {/* Stat Value with custom font */}
              <div className="text-5xl font-bold text-primary mb-2 font-['Satoshi']">
                {stat.value.toLocaleString()}+
              </div>
              
              {/* Stat Label */}
              <h3 className="text-xl font-semibold text-secondary mb-3 font-['ClashDisplay'] uppercase tracking-wider">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-secondary/80 mb-4 font-['Satoshi']">
                {stat.description}
              </p>
              
              {/* Trend Indicator */}
              <div className="flex items-center justify-center text-sm font-medium bg-primary px-3 py-1 rounded-full text-secondary">
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
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Testimonial with polygon shape */}
        <div className="lg:w-3/5 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 p-8 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#2a6168]/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-primary mb-6 font-['ClashDisplay']">
              <span className="text-secondary">Voices</span> from our community
            </h3>
            <blockquote className="text-xl italic text-secondary mb-6 font-['Satoshi'] leading-relaxed">
              "The platform's intuitive design helped us double event participation while cutting admin work in half."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center text-white mr-4">
                <span className="text-lg font-bold">SJ</span>
              </div>
              <div>
                <div className="font-semibold text-primary font-['Satoshi']">Dr. Sarah Johnson</div>
                <div className="text-sm text-secondary/70">Dean of Student Affairs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Events with timeline design */}
        <div className="lg:w-2/5 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 font-['ClashDisplay'] uppercase">
            <span className="text-secondary">UPCOMING</span> HIGHLIGHTS
          </h3>
          <div className="space-y-6 relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#2a6168]/20"></div>
            
            {[
              { date: "JUN 15-17", event: "Annual Tech Symposium" },
              { date: "JUL 22", event: "Cultural Fest 2023" },
              { date: "AUG 5", event: "Sports Championship Finals" }
            ].map((item, index) => (
              <div key={index} className="flex items-start relative pl-10">
                <div className="absolute left-0 mt-1 w-10 h-10 rounded-full bg-white border-3 border-primary flex items-center justify-center text-black text-xs font-bold font-['Satoshi']">
                  {item.date}
                </div>
                <div className="text-lg text-secondary font-['Satoshi']">{item.event}</div>
              </div>
            ))}
          </div>
          <button className="mt-8 px-6 py-3 bg-dark uppercase text-white rounded-xl hover:bg-[#23424A] transition flex items-center justify-center w-full font-['Satoshi'] font-medium">
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