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
  Upcoming: "bg-[#B6E2D3] text-secondary",
  Ongoing: "bg-[#7FC8A9] text-white",
  Completed: "bg-[#E0E7EA] text-[#4A4A4A]",
};

const MyEvents = () => {
  const [activeTab, setActiveTab] = useState("registered");
  const events = EVENTS[activeTab];

  return (
    <div className="min-h-screen bg-primary py-10 px-4 font-poppins" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center font-poppins">My Events</h1>
        <div className="flex justify-center gap-4 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 border-2 focus:outline-none focus:ring-2 focus:ring-[#B6E2D3] font-poppins ${
                activeTab === tab.value
                  ? "bg-[#7FC8A9] text-white border-[#7FC8A9]"
                  : "bg-white text-secondary border-[#B6E2D3] hover:bg-[#B6E2D3]/40"
              }`}
              style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg py-16">
              {activeTab === "registered" && "No registered events yet."}
              {activeTab === "organized" && "You haven't organized any events yet."}
              {activeTab === "bookmarked" && "No bookmarked events yet."}
            </div>
          ) : (
            events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg border border-[#E0E7EA] flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {event.poster && (
                  <img
                    src={event.poster}
                    alt={event.title}
                    className="w-full h-32 object-cover object-center"
                  />
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-primary font-poppins">{event.title}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[event.status] || "bg-gray-100 text-gray-700"}`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-1">
                    {new Date(event.datetime).toLocaleString(undefined, {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Venue:</span> {event.venue}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Role:</span> {event.role}
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