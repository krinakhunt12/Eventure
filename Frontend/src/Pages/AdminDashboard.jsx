import React from "react";
import { FaCalendarAlt, FaUserCheck, FaUserTie, FaHourglassHalf, FaCheck, FaTimes, FaList, FaUsers, FaComments, FaUserGraduate, FaBolt } from "react-icons/fa";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";

// Mock data
const ADMIN = { name: "Admin" };
const TODAY = new Date().toLocaleDateString(undefined, { dateStyle: "full" });

const SUMMARY = [
  { label: "Total Events", value: 28, icon: <FaCalendarAlt className="w-6 h-6 sm:w-7 sm:h-7 text-[#2a6168]" /> },
  { label: "Pending Approvals", value: 4, icon: <FaHourglassHalf className="w-6 h-6 sm:w-7 sm:h-7 text-[#2a6168]" /> },
  { label: "Registered Students", value: 1200, icon: <FaUserGraduate className="w-6 h-6 sm:w-7 sm:h-7 text-[#2a6168]" /> },
  { label: "Active Organizers", value: 18, icon: <FaUserTie className="w-6 h-6 sm:w-7 sm:h-7 text-[#2a6168]" /> },
];

const PENDING_EVENTS = [
  { id: 1, title: "TechFest 2024", organizer: "Riya", date: "2024-07-15", venue: "Auditorium A" },
  { id: 2, title: "AI Workshop", organizer: "Aman", date: "2024-07-20", venue: "Lab 3, Tech Block" },
  { id: 3, title: "Sports Meet", organizer: "Priya", date: "2024-08-01", venue: "Main Sports Ground" },
  { id: 4, title: "Cultural Night", organizer: "Rahul", date: "2024-08-10", venue: "Open Air Theatre" },
];

const ACTIVITY_FEED = [
  { id: 1, message: "Riya submitted AI Workshop for approval", time: "2 hours ago", icon: <FaHourglassHalf className="text-[#2a6168] w-4 h-4" /> },
  { id: 2, message: "Aman registered 30 students for TechFest", time: "5 hours ago", icon: <FaUserCheck className="text-[#2a6168] w-4 h-4" /> },
  { id: 3, message: "Priya updated event details for Sports Meet", time: "Yesterday", icon: <FaBolt className="text-[#2a6168] w-4 h-4" /> },
  { id: 4, message: "Rahul submitted feedback for Cultural Night", time: "2 days ago", icon: <FaComments className="text-[#2a6168] w-4 h-4" /> },
];

const ADMIN_ACTIONS = [
  { label: "View All Events", icon: <FaList className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />, href: "/events" },
  { label: "Manage Organizers", icon: <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />, href: "/organizers" },
  { label: "View Feedback", icon: <FaComments className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />, href: "/feedback" },
  { label: "Manage Students", icon: <FaUserGraduate className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />, href: "/students" },
];

const AdminDashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="min-h-screen bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] py-6 sm:py-10 px-2 sm:px-4 md:px-6 relative overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[10%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-[20%] right-[15%] w-52 h-52 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto relative z-10">
          {/* Welcome Section */}
          <div className="mb-6 sm:mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#23424A] mb-1 font-['ClashDisplay']">
                WELCOME, <span className="text-[#2a6168]">{ADMIN.name}</span>
              </h1>
              <div className="text-[#4A4A4A]/80 font-medium mb-1 font-['Satoshi'] text-sm sm:text-base">{TODAY}</div>
              <div className="text-[#4A4A4A]/70 font-['Satoshi'] text-xs sm:text-sm">Manage events, organizers, and students efficiently from your dashboard.</div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {SUMMARY.map((item) => (
              <div 
                key={item.label} 
                className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 flex flex-col items-center p-5 sm:p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#2a6168] mb-0.5 sm:mb-1">{item.value}</div>
                <div className="text-xs sm:text-base text-[#23424A] font-medium text-center font-['Satoshi']">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/40 mb-6 sm:mb-10"></div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Event Approval Table */}
            <div className="md:col-span-2">
              <div className="mb-3 sm:mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h2 className="text-lg sm:text-2xl font-bold text-[#23424A] font-['ClashDisplay']">EVENT APPROVALS</h2>
                <a href="/events" className="text-xs sm:text-sm text-[#2a6168] hover:underline font-medium font-['Satoshi']">View All</a>
              </div>
              <div className="overflow-x-auto rounded-2xl shadow-lg border border-white/40 bg-white/30 backdrop-blur-md">
                <table className="min-w-full divide-y divide-white/40 text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-white/30 backdrop-blur-md">
                      <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-left font-bold text-[#23424A] uppercase tracking-wider font-['Satoshi']">Event Title</th>
                      <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-left font-bold text-[#23424A] uppercase tracking-wider font-['Satoshi']">Organizer</th>
                      <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-left font-bold text-[#23424A] uppercase tracking-wider font-['Satoshi']">Date</th>
                      <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-left font-bold text-[#23424A] uppercase tracking-wider font-['Satoshi']">Venue</th>
                      <th className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-left font-bold text-[#23424A] uppercase tracking-wider font-['Satoshi']">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PENDING_EVENTS.map((event) => (
                      <tr key={event.id} className="hover:bg-[#2a6168]/10 transition-colors">
                        <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 font-medium text-[#23424A] font-['Satoshi']">{event.title}</td>
                        <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-[#4A4A4A]/80 font-['Satoshi']">{event.organizer}</td>
                        <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-[#4A4A4A]/80 font-['Satoshi']">{event.date}</td>
                        <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-[#4A4A4A]/80 font-['Satoshi']">{event.venue}</td>
                        <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 flex gap-1 sm:gap-2">
                          <button className="flex items-center px-2 sm:px-3 py-1 sm:py-1.5 bg-[#2a6168] text-white rounded-lg hover:bg-[#23424A] transition-colors text-xs font-semibold font-['Satoshi']">
                            <FaCheck className="mr-1" /> Approve
                          </button>
                          <button className="flex items-center px-2 sm:px-3 py-1 sm:py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-xs font-semibold font-['Satoshi']">
                            <FaTimes className="mr-1" /> Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions & Activity Feed */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div>
                <div className="mb-2 sm:mb-4 flex items-center">
                  <FaList className="w-4 h-4 sm:w-5 sm:h-5 text-[#2a6168] mr-2" />
                  <h2 className="text-base sm:text-xl font-bold text-[#23424A] font-['ClashDisplay']">QUICK ACTIONS</h2>
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  {ADMIN_ACTIONS.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      className="flex items-center px-3 sm:px-4 py-2 sm:py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-xl text-[#23424A] font-medium hover:bg-[#2a6168]/10 transition-colors font-['Satoshi'] text-xs sm:text-base"
                    >
                      {action.icon}
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Recent Activity Feed */}
              <div>
                <div className="mb-2 sm:mb-4 flex items-center">
                  <FaBolt className="w-4 h-4 sm:w-5 sm:h-5 text-[#2a6168] mr-2" />
                  <h2 className="text-base sm:text-xl font-bold text-[#23424A] font-['ClashDisplay']">RECENT ACTIVITY</h2>
                </div>
                <div className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 max-h-48 sm:max-h-64 overflow-y-auto">
                  {ACTIVITY_FEED.length === 0 ? (
                    <div className="text-[#4A4A4A]/70 text-center py-4 sm:py-6 font-['Satoshi'] text-xs sm:text-base">No recent activity.</div>
                  ) : (
                    ACTIVITY_FEED.map((item) => (
                      <div key={item.id} className="flex items-start gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg hover:bg-white/40 transition">
                        {item.icon}
                        <div>
                          <div className="text-xs sm:text-sm text-[#23424A] font-medium font-['Satoshi']">{item.message}</div>
                          <div className="text-[10px] sm:text-xs text-[#4A4A4A]/60 font-['Satoshi']">{item.time}</div>
                        </div>
                      </div>
                    ))
                  )}
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

export default AdminDashboard;