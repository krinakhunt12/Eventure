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
  { label: "Events Organized", value: 6, icon: <FaCalendarAlt className="w-6 h-6" /> },
  { label: "Pending Approval", value: 2, icon: <FaHourglassHalf className="w-6 h-6" /> },
  { label: "Total Participants", value: 320, icon: <FaUsers className="w-6 h-6" /> },
  { label: "Upcoming Events", value: 3, icon: <FaRegCalendarCheck className="w-6 h-6" /> },
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
  Approved: "bg-secondary text-secondary",
  Pending: "bg-yellow-100 text-yellow-700",
  Completed: "bg-[#E0E7EA] text-secondary",
};

const OrganizerDashboard = () => {
  const maxParticipants = Math.max(...CHART_DATA.map((e) => e.participants));

  return (
    <>
      <DashboardNavbar />
      <div className="min-h-screen bg-primary py-8 px-4 font-['Satoshi'] relative overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[10%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-[20%] right-[15%] w-52 h-52 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Welcome Section */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-primary mb-1 font-['ClashDisplay'] tracking-tight">
                  WELCOME, <span className="text-secondary">{ORGANIZER.name}!</span>
                </h1>
                <p className="text-secondary font-medium font-['Satoshi']">{TODAY}</p>
              </div>
              <p className="text-secondary/80 mt-2 md:mt-0 md:text-right font-['Satoshi']">
                Check your events, stats, and actions below.
              </p>
            </div>
            <div className="w-20 h-1 bg-primary-button mt-4 rounded-full"></div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {SUMMARY.map((item) => (
              <div 
                key={item.label} 
                className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-xl bg-white/50 mr-4">
                    {React.cloneElement(item.icon, { className: "w-6 h-6 text-primary" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary font-['ClashDisplay']">{item.value}</h3>
                    <p className="text-sm text-primary mt-1 font-['Satoshi']">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Events Table - Main Content */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-primary font-['ClashDisplay']">MY EVENTS</h2>
                  <p className="text-sm text-secondary/80 mt-1 font-['Satoshi']">Manage your upcoming and past events</p>
                </div>
                <a 
                  href="/create-event" 
                  className="flex items-center justify-center px-4 py-2 bg-primary-button text-white rounded-xl mt-3 sm:mt-0 hover:bg-[#23424A] transition font-['Satoshi'] shadow-sm hover:shadow-md"
                >
                  <FaPlus className="w-4 h-4 mr-2" />
                  Create New
                </a>
              </div>
              
              <div className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-white/40">
                    <thead className="bg-white/50">
                      <tr>
                        {["Title", "Date", "Venue", "Status", "Registrations", "Actions"].map((head) => (
                          <th 
                            key={head} 
                            className="px-6 py-3 text-left text-xs font-semibold text-primary uppercase tracking-wider font-['Satoshi']"
                          >
                            {head}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/40">
                      {EVENTS.map((event) => (
                        <tr 
                          key={event.id} 
                          className="hover:bg-white/30 transition"
                        >
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-primary font-['Satoshi']">
                            {event.title}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-secondary/80 font-['Satoshi']">
                            {event.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-secondary/80 font-['Satoshi']">
                            {event.venue}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[event.status]} font-['Satoshi']`}>
                              {event.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center font-bold text-secondary font-['ClashDisplay']">
                            {event.registrations}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium font-['Satoshi']">
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
                  <div className="p-2 rounded-lg bg-white/50 mr-3">
                    <FaBell className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold text-primary font-['ClashDisplay']">QUICK ACTIONS</h2>
                </div>
                <div className="space-y-3">
                  {ACTIONS.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      className="flex items-center px-4 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-xl text-secondary font-medium hover:bg-primary-button/20 transition font-['Satoshi']"
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
                  <div className="p-2 rounded-lg bg-white/50 mr-3">
                    <FaBell className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold text-primary font-['ClashDisplay']">NOTIFICATIONS</h2>
                </div>
                <div className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 p-4 space-y-3">
                  {NOTIFICATIONS.length === 0 ? (
                    <p className="text-center text-secondary/80 py-4 font-['Satoshi']">No notifications</p>
                  ) : (
                    NOTIFICATIONS.map((note) => (
                      <div 
                        key={note.id} 
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/30 transition font-['Satoshi']"
                      >
                        <div className="p-2 rounded-full bg-secondary text-secondary">
                          <FaBell className="w-3 h-3" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary">
                            {note.message}
                          </p>
                          <p className="text-xs text-secondary/60 mt-1">{note.time}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Chart */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-white/50 mr-3">
                    <FaUsers className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold text-primary font-['ClashDisplay']">PARTICIPANTS</h2>
                </div>
                <div className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 p-5">
                  {CHART_DATA.map((bar) => (
                    <div key={bar.event} className="mb-4">
                      <div className="flex justify-between mb-2 text-sm font-['Satoshi']">
                        <span className="font-medium text-primary">{bar.event}</span>
                        <span className="font-bold text-secondary">{bar.participants}</span>
                      </div>
                      <div className="w-full bg-white/50 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full bg-primary-button" 
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