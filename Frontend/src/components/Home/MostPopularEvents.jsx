import React from "react";

const popularEvents = [
  {
    id: 1,
    title: "Tech Symposium 2024",
    description: "A gathering of tech enthusiasts with workshops, talks, and hackathons.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    date: "June 15-17, 2024",
    location: "Main Auditorium",
    category: "Technology",
    registrations: 320
  },
  {
    id: 2,
    title: "Cultural Fest Night",
    description: "An evening of music, dance, and drama performances by students from across colleges.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    date: "July 22, 2024",
    location: "Open Air Theater",
    category: "Cultural",
    registrations: 450
  },
  {
    id: 3,
    title: "Annual Sports Meet",
    description: "Track and field events, team sports, and fun games for all skill levels.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
    date: "August 5-7, 2024",
    location: "University Stadium",
    category: "Sports",
    registrations: 280
  },
  {
    id: 4,
    title: "Music Battle",
    description: "Battle of the bands: compete, perform, and win exciting prizes!",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    date: "September 10, 2024",
    location: "Student Center",
    category: "Music",
    registrations: 180
  },
  {
    id: 5,
    title: "Startup Pitch Competition",
    description: "Showcase your innovative ideas to investors and win funding.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    date: "October 5, 2024",
    location: "Business School",
    category: "Entrepreneurship",
    registrations: 95
  },
  {
    id: 6,
    title: "Science Exhibition",
    description: "Display your research projects and compete for awards.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
    date: "November 12-14, 2024",
    location: "Science Block",
    category: "Academic",
    registrations: 210
  },
  {
    id: 7,
    title: "Film Festival",
    description: "Screening of student-made short films and documentaries.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    date: "December 3-5, 2024",
    location: "Media Arts Center",
    category: "Arts",
    registrations: 150
  },
  {
    id: 8,
    title: "Career Fair",
    description: "Connect with top employers and explore internship opportunities.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    date: "January 15, 2025",
    location: "Convention Center",
    category: "Professional",
    registrations: 500
  },
];

const MostPopularEvents = () => (
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
          FEATURED <span className="text-secondary">CAMPUS EVENTS</span>
        </h2>
        <div className="w-24 h-1 bg-primary-button mx-auto mb-6"></div>
        <p className="text-lg text-secondary max-w-2xl mx-auto font-['Satoshi']">
          Discover the most anticipated events happening across campuses this year
        </p>
      </div>

      {/* Events Grid - Glassmorphism Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group"
          >
            {/* Event Image */}
            <div className="relative overflow-hidden h-48">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Category Badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#2a6168]">
                {event.category}
              </div>
            </div>
            
            {/* Event Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3 font-['ClashDisplay'] group-hover:text-[#2a6168] transition-colors">
                {event.title}
              </h3>
              <p className="text-secondary/90 mb-4 font-['Satoshi']">{event.description}</p>
              
              {/* Event Meta */}
              <div className="space-y-3 text-sm text-secondary/90 mb-5 font-['Satoshi']">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#2a6168]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#2a6168]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-[#2a6168]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {event.registrations} registered
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 px-3 py-2 bg-primary-button text-white text-sm rounded-lg hover:bg-[#23424A] transition flex items-center justify-center font-['Satoshi']">
                  Register Now
                </button>
                <button className="px-3 py-2 border border-[#2a6168] text-[#2a6168] text-sm rounded-lg hover:bg-primary-button/10 transition flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-white/30 backdrop-blur-md border-2 border-[#2a6168] text-[#2a6168] rounded-xl hover:bg-primary-button hover:text-white transition flex items-center mx-auto font-['Satoshi'] font-medium">
          View All Upcoming Events
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Testimonial Section - Glass Panel */}
      <div className="mt-16 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 p-8 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-button/10 rounded-full blur-2xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
            <div className="bg-white/70 p-6 rounded-xl border border-white/90 h-full">
              <h3 className="text-xl font-bold text-primary mb-4 font-['ClashDisplay']">
                <span className="text-[#2a6168]">WHY ATTEND</span> THESE EVENTS?
              </h3>
              <ul className="space-y-3 font-['Satoshi']">
                {[
                  "Network with peers and professionals",
                  "Develop new skills and knowledge",
                  "Showcase your talents",
                  "Explore career opportunities",
                  "Have fun and make memories"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary-button mt-2 mr-3"></div>
                    <span className="text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold text-primary mb-4 font-['ClashDisplay']">
              WHAT OUR <span className="text-[#2a6168]">ATTENDEES SAY</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote: "The Tech Symposium helped me land my first internship through networking with company reps.",
                  name: "Alex Chen",
                  role: "Computer Science Student"
                },
                {
                  quote: "Cultural Fest was the highlight of my year - performing on stage was unforgettable!",
                  name: "Priya Sharma",
                  role: "Dance Team Member"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/70 p-5 rounded-xl border border-white/90">
                  <svg className="w-6 h-6 text-[#2a6168] mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-secondary/90 mb-3 italic font-['Satoshi']">"{testimonial.quote}"</p>
                  <div className="text-sm font-['Satoshi']">
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-secondary/70">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MostPopularEvents;