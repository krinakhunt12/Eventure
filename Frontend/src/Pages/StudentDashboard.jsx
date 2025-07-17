import React from "react";
import { CalendarHeart, Users, Bookmark, Clock, ArrowRight, Bell, User } from "lucide-react";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";

// Mock student and dashboard data
const STUDENT = {
  name: "Alex Johnson",
};

const SUMMARY = [
  { label: "Registered Events", value: 5, icon: <CalendarHeart className="w-7 h-7 text-secondary" /> },
  { label: "Organized Events", value: 2, icon: <Users className="w-7 h-7 text-secondary" /> },
  { label: "Bookmarked Events", value: 3, icon: <Bookmark className="w-7 h-7 text-secondary" /> },
  { label: "Upcoming Events", value: 2, icon: <Clock className="w-7 h-7 text-secondary" /> },
];

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "AI & Robotics Workshop",
    date: "2024-07-10",
    time: "14:00",
    venue: "Lab 3, Tech Block",
    status: "Starts in 2 days",
    poster: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Tech Symposium 2024",
    date: "2024-07-15",
    time: "10:00",
    venue: "Auditorium A",
    status: "Starts in 1 week",
    poster: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Sports Meet",
    date: "2024-07-20",
    time: "09:00",
    venue: "Main Sports Ground",
    status: "Starts in 2 weeks",
    poster: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
  },
];

const NOTIFICATIONS = [
  { id: 1, message: "Your registration for 'AI & Robotics Workshop' is confirmed.", time: "2 hours ago" },
  { id: 2, message: "New event: 'Tech Symposium 2024' is now open for registration!", time: "1 day ago" },
  { id: 3, message: "Profile updated successfully.", time: "3 days ago" },
];

const QUICK_LINKS = [
  { label: "Browse Events", icon: <CalendarHeart className="w-5 h-5 mr-2" />, href: "/events" },
  { label: "Register for Event", icon: <ArrowRight className="w-5 h-5 mr-2" />, href: "/events" },
  { label: "View My Events", icon: <Bookmark className="w-5 h-5 mr-2" />, href: "/myevents" },
  { label: "Update Profile", icon: <User className="w-5 h-5 mr-2" />, href: "/profile" },
];

const StudentDashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="min-h-screen bg-primary py-10 px-4 font-poppins" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
              alt="Campus life hero"
              className="w-full h-56 object-cover object-center"
            />
          </div>
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 font-poppins">Welcome, {STUDENT.name}!</h1>
            <p className="text-lg text-secondary font-medium">Here’s a quick overview of your campus activity.</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {SUMMARY.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl shadow-md border border-[#E0E7EA] flex flex-col items-center p-6">
                <div className="mb-2">{item.icon}</div>
                <div className="text-2xl font-bold text-secondary font-poppins">{item.value}</div>
                <div className="text-sm text-primary font-medium text-center">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Upcoming Events */}
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-primary font-poppins">Upcoming Events</h2>
                <a href="/myevents" className="text-sm text-secondary hover:underline font-medium">View All</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {UPCOMING_EVENTS.length === 0 ? (
                  <div className="col-span-full text-center text-gray-500 text-lg py-8">No upcoming events.</div>
                ) : (
                  UPCOMING_EVENTS.slice(0, 3).map((event) => (
                    <div key={event.id} className="bg-white rounded-2xl shadow-md border border-[#E0E7EA] flex flex-col overflow-hidden">
                      {event.poster && (
                        <img src={event.poster} alt={event.title} className="w-full h-28 object-cover object-center" />
                      )}
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="text-lg font-bold text-primary font-poppins mb-1">{event.title}</div>
                        <div className="text-sm text-gray-500 mb-1">
                          {event.date} &bull; {event.time}
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-semibold">Venue:</span> {event.venue}
                        </div>
                        <div className="text-xs mt-2 px-3 py-1 rounded-full bg-[#B6E2D3] text-secondary w-max font-medium">{event.status}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="mb-4 flex items-center">
                <Bell className="w-5 h-5 text-secondary mr-2" />
                <h2 className="text-xl font-bold text-primary font-poppins">Quick Links</h2>
              </div>
              <div className="flex flex-col gap-3 mb-8">
                {QUICK_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center px-4 py-2 bg-white border border-[#E0E7EA] rounded-xl shadow-sm text-secondary font-medium hover:bg-[#B6E2D3] transition-colors"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Notifications */}
              <div className="mb-4 flex items-center">
                <Bell className="w-5 h-5 text-secondary mr-2" />
                <h2 className="text-xl font-bold text-primary font-poppins">Notifications</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-md border border-[#E0E7EA] p-4 flex flex-col gap-3">
                {NOTIFICATIONS.length === 0 ? (
                  <div className="text-gray-500 text-center py-6">No notifications.</div>
                ) : (
                  NOTIFICATIONS.map((note) => (
                    <div key={note.id} className="flex items-start gap-3">
                      <Bell className="w-4 h-4 text-[#7FC8A9] mt-1" />
                      <div>
                        <div className="text-sm text-primary font-medium">{note.message}</div>
                        <div className="text-xs text-gray-400">{note.time}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard; 