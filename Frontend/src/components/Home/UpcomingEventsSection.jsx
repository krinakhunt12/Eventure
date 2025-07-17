import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";

const upcomingEvents = [
  {
    id: 1,
    title: "Startup Pitch Day",
    date: "2024-09-15",
    time: "2:00 PM - 5:00 PM",
    location: "Innovation Hub, Downtown",
    description: "Pitch your startup idea to a panel of investors and win seed funding. Open to all entrepreneurs with innovative ideas. Winners receive $10,000 in funding and mentorship opportunities.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    price: "Free",
    category: "Business",
    seats: 50,
  },
  {
    id: 2,
    title: "Dance Fiesta",
    date: "2024-08-25",
    time: "6:00 PM - 11:00 PM",
    location: "Grand Ballroom, City Center",
    description: "A night of energetic dance performances and competitions featuring salsa, hip-hop, and contemporary styles. Professional judges and amazing prizes for winners. Food and drinks available.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    price: "$15-$25",
    category: "Arts",
    seats: 120,
  },
  {
    id: 3,
    title: "Table Tennis Tournament",
    date: "2024-09-10",
    time: "9:00 AM - 6:00 PM",
    location: "Sports Complex, Westside",
    description: "Singles and doubles table tennis matches for all skill levels. Categories for beginners, intermediate, and advanced players. Trophies and cash prizes for winners. Equipment provided.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
    price: "$10 registration",
    category: "Sports",
    seats: 32,
  },
];

const UpcomingEventsSection = () => (
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
          UPCOMING <span className="text-[#4A4A4A]">EVENTS</span>
        </h2>
        <div className="w-24 h-1 bg-[#2a6168] mx-auto mb-6"></div>
        <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto font-['Satoshi']">
          Discover exciting events happening soon. Join us for unforgettable experiences!
        </p>
      </div>
      
      {/* Events Grid - Glassmorphism Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group flex flex-col"
          >
            {/* Event Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#2a6168] shadow-sm">
                {event.category}
              </div>
            </div>
            
            {/* Event Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-[#23424A] group-hover:text-[#2a6168] transition-colors font-['ClashDisplay']">
                  {event.title}
                </h3>
                <span className="bg-[#2a6168]/10 text-[#2a6168] text-xs font-medium px-2.5 py-0.5 rounded font-['Satoshi']">
                  {event.seats} seats left
                </span>
              </div>
              
              {/* Event Details */}
              <div className="space-y-2 mb-4 font-['Satoshi']">
                <div className="flex items-center text-[#4A4A4A]/90">
                  <FaCalendarAlt className="mr-2 text-[#2a6168]" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center text-[#4A4A4A]/90">
                  <FaClock className="mr-2 text-[#2a6168]" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-[#4A4A4A]/90">
                  <FaMapMarkerAlt className="mr-2 text-[#2a6168]" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-[#4A4A4A]/90">
                  <FaTicketAlt className="mr-2 text-[#2a6168]" />
                  <span>{event.price}</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-[#4A4A4A]/90 mb-5 flex-1 font-['Satoshi']">
                {event.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex space-x-3 mt-auto">
                <button className="flex-1 bg-[#2a6168] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#23424A] transition duration-300 font-['Satoshi']">
                  Register Now
                </button>
                <button className="flex-1 border border-[#2a6168] text-[#2a6168] hover:bg-[#2a6168]/10 font-medium py-2 px-4 rounded-lg transition duration-300 font-['Satoshi']">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="bg-white/30 backdrop-blur-md border-2 border-[#2a6168] text-[#2a6168] hover:bg-[#2a6168] hover:text-white font-medium py-2 px-6 rounded-full transition duration-300 font-['Satoshi']">
          View All Events
        </button>
      </div>
    </div>
  </section>
);

export default UpcomingEventsSection;
