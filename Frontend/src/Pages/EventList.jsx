import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Sample static event data
const EVENTS = [
  {
    id: 1,
    title: "Tech Symposium 2024",
    description: "A gathering of tech enthusiasts with workshops, talks, and hackathons.",
    datetime: "2024-07-15T10:00:00",
    venue: "Auditorium A",
    organizedBy: "Computer Science Department",
    category: "Technical",
    status: "Open",
    poster: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Cultural Fest Night",
    description: "An evening of music, dance, and drama performances by students.",
    datetime: "2024-06-10T18:00:00",
    venue: "Open Air Theatre",
    organizedBy: "Cultural Club",
    category: "Cultural",
    status: "Closed",
    poster: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Annual Sports Meet",
    description: "Track and field events, team sports, and fun games for all.",
    datetime: "2024-08-05T09:00:00",
    venue: "Main Sports Ground",
    organizedBy: "Sports Committee",
    category: "Sports",
    status: "Open",
    poster: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "AI & Robotics Workshop",
    description: "Hands-on sessions on building and programming robots.",
    datetime: "2024-05-20T14:00:00",
    venue: "Lab 3, Tech Block",
    organizedBy: "Robotics Club",
    category: "Technical",
    status: "Closed",
    poster: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  // Additional events
  {
    id: 5,
    title: "Entrepreneurship Bootcamp",
    description: "A week-long bootcamp for aspiring student entrepreneurs.",
    datetime: "2024-09-01T10:00:00",
    venue: "Innovation Hub",
    organizedBy: "Entrepreneurship Cell",
    category: "Technical",
    status: "Open",
    poster: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Photography Contest",
    description: "Showcase your photography skills and win exciting prizes!",
    datetime: "2024-06-25T16:00:00",
    venue: "Art Gallery",
    organizedBy: "Photography Club",
    category: "Cultural",
    status: "Open",
    poster: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    title: "Debate Championship",
    description: "Inter-college debate competition on trending topics.",
    datetime: "2024-07-28T11:00:00",
    venue: "Seminar Hall B",
    organizedBy: "Debate Society",
    category: "Technical",
    status: "Open",
    poster: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "Yoga & Wellness Camp",
    description: "A day of yoga, meditation, and wellness workshops.",
    datetime: "2024-05-30T07:00:00",
    venue: "Central Park",
    organizedBy: "Wellness Club",
    category: "Sports",
    status: "Closed",
    poster: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "Music Battle",
    description: "Battle of the bands: compete, perform, and win!",
    datetime: "2024-08-12T18:00:00",
    venue: "Auditorium B",
    organizedBy: "Music Club",
    category: "Cultural",
    status: "Open",
    poster: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    title: "Coding Marathon",
    description: "24-hour coding challenge for all levels.",
    datetime: "2024-07-22T09:00:00",
    venue: "Computer Lab 1",
    organizedBy: "Coding Club",
    category: "Technical",
    status: "Open",
    poster: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    title: "Startup Pitch Day",
    description: "Pitch your startup idea to a panel of investors and win seed funding.",
    datetime: "2024-09-15T14:00:00",
    venue: "Innovation Hub",
    organizedBy: "Entrepreneurship Cell",
    category: "Technical",
    status: "Open",
    poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    title: "Inter-College Quiz Bowl",
    description: "Compete with the brightest minds in a fast-paced quiz competition.",
    datetime: "2024-08-20T10:00:00",
    venue: "Seminar Hall C",
    organizedBy: "Quiz Club",
    category: "Technical",
    status: "Open",
    poster: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 13,
    title: "Dance Fiesta",
    description: "A night of energetic dance performances and competitions.",
    datetime: "2024-08-25T18:00:00",
    venue: "Auditorium C",
    organizedBy: "Dance Club",
    category: "Cultural",
    status: "Open",
    poster: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    title: "Table Tennis Tournament",
    description: "Singles and doubles table tennis matches for all skill levels.",
    datetime: "2024-09-10T09:00:00",
    venue: "Sports Complex",
    organizedBy: "Sports Committee",
    category: "Sports",
    status: "Open",
    poster: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    title: "Literary Fest",
    description: "Poetry, storytelling, and creative writing competitions.",
    datetime: "2024-08-30T11:00:00",
    venue: "Library Hall",
    organizedBy: "Literary Club",
    category: "Cultural",
    status: "Open",
    poster: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
];

const CATEGORY_COLORS = {
  Technical: "bg-[#B6E2D3] text-secondary",
  Cultural: "bg-pink-100 text-pink-700",
  Sports: "bg-green-100 text-green-700",
};

const STATUS_COLORS = {
  Open: "bg-green-200 text-green-800",
  Closed: "bg-red-200 text-red-800",
};

function isPast(dateStr) {
  return new Date(dateStr) < new Date();
}

const FILTERS = [
  { label: "Upcoming", value: "upcoming" },
  { label: "Past", value: "past" },
];

const EventList = () => {
  const [filter, setFilter] = useState("upcoming");

  const filteredEvents = EVENTS.filter((event) =>
    filter === "upcoming" ? !isPast(event.datetime) : isPast(event.datetime)
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-primary py-10 px-4 text-secondary font-sans font-poppins" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 font-poppins" style={{ color: '#23424A', fontFamily: 'Poppins, Inter, sans-serif' }}>
            College Events
          </h1>
          <div className="flex justify-center mb-8 gap-4">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 border-2 focus:outline-none focus:ring-2 focus:ring-primary-button ${
                  filter === f.value
                    ? "bg-primary-button text-[var(--primary-button-text-color)] border-primary-button"
                    : "bg-white text-primary-button border-primary hover:bg-primary-button/40"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredEvents.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 text-lg">No events found.</div>
            ) : (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg border border-[#E0E7EA] flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={event.poster}
                    alt={event.title}
                    className="w-full h-40 object-cover object-center"
                  />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-primary-button text-[var(--primary-button-text-color)]`}>
                        {event.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.status === 'Open'
                          ? 'bg-primary-button text-[var(--primary-button-text-color)]'
                          : 'bg-primary text-primary'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">{event.title}</h2>
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(event.datetime).toLocaleString(undefined, {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </div>
                    <div className="text-gray-700 mb-3 flex-1">{event.description}</div>
                    <div className="text-sm text-gray-600 mb-1">
                      <span className="font-semibold">Venue:</span> {event.venue}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      <span className="font-semibold">Organized By:</span> {event.organizedBy}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventList; 