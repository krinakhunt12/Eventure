import React, { useState } from "react";

const TABS = [
  { label: "Registered Events", value: "registered" },
  { label: "Organized Events", value: "organized" },
  { label: "Bookmarked Events", value: "bookmarked" },
];

const EVENTS = {
  registered: [
    {
      id: 1,
      title: "AI & Robotics Workshop",
      datetime: "2024-07-10T14:00:00",
      venue: "Lab 3, Tech Block",
      role: "Participant",
      status: "Upcoming",
      poster: "https://via.placeholder.com/300x120?text=AI+Workshop",
    },
    {
      id: 2,
      title: "Cultural Fest Night",
      datetime: "2024-06-10T18:00:00",
      venue: "Open Air Theatre",
      role: "Participant",
      status: "Completed",
      poster: "https://via.placeholder.com/300x120?text=Cultural+Fest",
    },
  ],
  organized: [
    {
      id: 3,
      title: "Tech Symposium 2024",
      datetime: "2024-08-15T10:00:00",
      venue: "Auditorium A",
      role: "Organizer",
      status: "Upcoming",
      poster: "https://via.placeholder.com/300x120?text=Tech+Symposium",
    },
  ],
  bookmarked: [],
};

const STATUS_COLORS = {
  Upcoming: "bg-secondary text-secondary",
  Ongoing: "bg-[#7FC8A9] text-white",
  Completed: "bg-[#E0E7EA] text-secondary",
};

const MyEvents = () => {
  const [activeTab, setActiveTab] = useState("registered");
  const events = EVENTS[activeTab];

  return (
    <div className="min-h-screen bg-primary py-10 px-4 font-['Satoshi'] relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-[20%] right-[15%] w-52 h-52 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center font-['ClashDisplay'] tracking-tight">
          MY <span className="text-secondary">EVENTS</span>
        </h1>
        
        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 border-2 focus:outline-none focus:ring-2 focus:ring-primary-button font-['Satoshi'] ${
                activeTab === tab.value
                  ? "bg-primary-button text-white border-primary-button"
                  : "bg-white/30 backdrop-blur-md text-primary border-primary hover:bg-primary-button/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.length === 0 ? (
            <div className="col-span-full text-center text-secondary/80 text-lg py-16 bg-white/30 backdrop-blur-md rounded-2xl border border-white/40">
              {activeTab === "registered" && "No registered events yet."}
              {activeTab === "organized" && "You haven't organized any events yet."}
              {activeTab === "bookmarked" && "No bookmarked events yet."}
            </div>
          ) : (
            events.map((event) => (
              <div
                key={event.id}
                className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {event.poster && (
                  <img
                    src={event.poster}
                    alt={event.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-lg font-bold text-primary font-['ClashDisplay'] group-hover:text-primary transition-colors">
                      {event.title}
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      STATUS_COLORS[event.status] || "bg-gray-100 text-gray-700"
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  
                  <div className="text-sm text-secondary mb-2">
                    {new Date(event.datetime).toLocaleString(undefined, {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </div>
                  
                  <div className="mt-auto pt-3 border-t border-white/20">
                    <div className="text-sm text-secondary">
                      <span className="font-semibold">Venue:</span> {event.venue}
                    </div>
                    <div className="text-sm text-secondary">
                      <span className="font-semibold">Role:</span> {event.role}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyEvents;