import React from "react";
import {
  FaCalendarAlt,
  FaHourglassHalf,
  FaUsers,
  FaRegCalendarCheck,
  FaPlus,
  FaList,
  FaCommentDots,
  FaCheckCircle,
  FaBell,
} from "react-icons/fa";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";

// Mock data
const ORGANIZER = { name: "Riya" };
const TODAY = new Date().toLocaleDateString(undefined, { dateStyle: "full" });

const SUMMARY = [
  { label: "Events Organized", value: 6, icon: <FaCalendarAlt className="w-6 h-6 text-secondary" /> },
  { label: "Pending Approval", value: 2, icon: <FaHourglassHalf className="w-6 h-6 text-secondary" /> },
  { label: "Total Participants", value: 320, icon: <FaUsers className="w-6 h-6 text-secondary" /> },
  { label: "Upcoming Events", value: 3, icon: <FaRegCalendarCheck className="w-6 h-6 text-secondary" /> },
];

const EVENTS = [
  { id: 1, title: "TechFest 2024", date: "2024-07-15", venue: "Auditorium A", status: "Approved", registrations: 120 },
  { id: 2, title: "AI Workshop", date: "2024-07-20", venue: "Lab 3, Tech Block", status: "Pending", registrations: 45 },
  { id: 3, title: "Sports Meet", date: "2024-08-01", venue: "Main Sports Ground", status: "Approved", registrations: 80 },
  { id: 4, title: "Cultural Night", date: "2024-08-10", venue: "Open Air Theatre", status: "Completed", registrations: 75 },
];

const NOTIFICATIONS = [
  { id: 1, message: "TechFest 2024 approved.", time: "1 hour ago" },
  { id: 2, message: "New participants registered for AI Workshop.", time: "3 hours ago" },
  { id: 3, message: "Feedback received for Cultural Night.", time: "Yesterday" },
];

const ACTIONS = [
  { label: "Create New Event", icon: <FaPlus className="w-4 h-4 mr-2" />, href: "/create-event" },
  { label: "View Participant List", icon: <FaList className="w-4 h-4 mr-2" />, href: "/participants" },
  { label: "Review Feedback", icon: <FaCommentDots className="w-4 h-4 mr-2" />, href: "/feedback" },
  { label: "Manage Approvals", icon: <FaCheckCircle className="w-4 h-4 mr-2" />, href: "/approvals" },
];

const CHART_DATA = [
  { event: "TechFest", participants: 120 },
  { event: "AI Workshop", participants: 45 },
  { event: "Sports Meet", participants: 80 },
  { event: "Cultural Night", participants: 75 },
];

const STATUS_COLORS = {
  Approved: "bg-[#B6E2D3] text-secondary",
  Pending: "bg-yellow-100 text-yellow-700",
  Completed: "bg-[#E0E7EA] text-[#4A4A4A]",
};

const OrganizerDashboard = () => {
  const maxParticipants = Math.max(...CHART_DATA.map((e) => e.participants));

  return (
    <>
      <DashboardNavbar />
      <div className="min-h-screen bg-primary py-8 px-4 font-poppins">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-primary mb-1">Welcome, {ORGANIZER.name}!</h1>
                <p className="text-secondary font-medium">{TODAY}</p>
              </div>
              <p className="text-gray-600 mt-2 md:mt-0 md:text-right">Check your events, stats, and actions below.</p>
            </div>
            <div className="w-20 h-1 bg-primary-button mt-4 rounded-full"></div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {SUMMARY.map((item) => (
              <div 
                key={item.label} 
                className="bg-white rounded-lg shadow-sm border border-[#E0E7EA] p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-[#E0E7EA] mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">{item.value}</h3>
                    <p className="text-sm text-primary mt-1">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Events Table - Main Content */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-primary">My Events</h2>
                  <p className="text-sm text-gray-600 mt-1">Manage your upcoming and past events</p>
                </div>
                <a 
                  href="/create-event" 
                  className="flex items-center justify-center px-4 py-2 bg-primary-button text-white rounded-lg mt-3 sm:mt-0 hover:bg-[#2a6168] transition"
                >
                  <FaPlus className="w-4 h-4 mr-2" />
                  Create New
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-[#E0E7EA] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#E0E7EA]">
                    <thead className="bg-[#F6FAFB]">
                      <tr>
                        {["Title", "Date", "Venue", "Status", "Registrations", "Actions"].map((head) => (
                          <th 
                            key={head} 
                            className="px-6 py-3 text-left text-xs font-semibold text-primary uppercase tracking-wider"
                          >
                            {head}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-[#E0E7EA]">
                      {EVENTS.map((event) => (
                        <tr 
                          key={event.id} 
                          className="hover:bg-[#B6E2D3]/20 transition"
                        >
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-primary">
                            {event.title}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {event.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {event.venue}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[event.status]}`}>
                              {event.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center font-bold text-secondary">
                            {event.registrations}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-secondary hover:underline mr-4">View</a>
                            <a href="#" className="text-secondary hover:underline">Edit</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-[#E0E7EA] mr-3">
                    <FaBell className="w-4 h-4 text-secondary" />
                  </div>
                  <h2 className="text-lg font-bold text-primary">Quick Actions</h2>
                </div>
                <div className="space-y-3">
                  {ACTIONS.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      className="flex items-center px-4 py-3 bg-white border border-[#E0E7EA] rounded-lg shadow-sm text-secondary font-medium hover:bg-[#B6E2D3]/30 transition"
                    >
                      {action.icon}
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Notifications */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-[#E0E7EA] mr-3">
                    <FaBell className="w-4 h-4 text-secondary" />
                  </div>
                  <h2 className="text-lg font-bold text-primary">Notifications</h2>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-[#E0E7EA] p-4 space-y-3">
                  {NOTIFICATIONS.length === 0 ? (
                    <p className="text-center text-gray-500 py-4">No notifications</p>
                  ) : (
                    NOTIFICATIONS.map((note) => (
                      <div 
                        key={note.id} 
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#E0E7EA]/50 transition"
                      >
                        <div className="p-2 rounded-full bg-[#B6E2D3] text-secondary">
                          <FaBell className="w-3 h-3" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary">
                            {note.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">{note.time}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Chart */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-[#E0E7EA] mr-3">
                    <FaUsers className="w-4 h-4 text-secondary" />
                  </div>
                  <h2 className="text-lg font-bold text-primary">Participants per Event</h2>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-[#E0E7EA] p-5">
                  {CHART_DATA.map((bar) => (
                    <div key={bar.event} className="mb-4">
                      <div className="flex justify-between mb-2 text-sm">
                        <span className="font-medium text-primary">{bar.event}</span>
                        <span className="font-bold text-secondary">{bar.participants}</span>
                      </div>
                      <div className="w-full bg-[#E0E7EA] rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full bg-[#7FC8A9]" 
                          style={{ width: `${(bar.participants / maxParticipants) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrganizerDashboard;