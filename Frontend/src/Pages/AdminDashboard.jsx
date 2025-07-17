import React from "react";
import { FaCalendarAlt, FaUserCheck, FaUserTie, FaHourglassHalf, FaCheck, FaTimes, FaList, FaUsers, FaComments, FaUserGraduate, FaBolt } from "react-icons/fa";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";

// Mock data
const ADMIN = { name: "Admin" };
const TODAY = new Date().toLocaleDateString(undefined, { dateStyle: "full" });

const SUMMARY = [
  { label: "Total Events", value: 28, icon: <FaCalendarAlt className="w-7 h-7 text-secondary" /> },
  { label: "Pending Approvals", value: 4, icon: <FaHourglassHalf className="w-7 h-7 text-secondary" /> },
  { label: "Registered Students", value: 1200, icon: <FaUserGraduate className="w-7 h-7 text-secondary" /> },
  { label: "Active Organizers", value: 18, icon: <FaUserTie className="w-7 h-7 text-secondary" /> },
];

const PENDING_EVENTS = [
  { id: 1, title: "TechFest 2024", organizer: "Riya", date: "2024-07-15", venue: "Auditorium A" },
  { id: 2, title: "AI Workshop", organizer: "Aman", date: "2024-07-20", venue: "Lab 3, Tech Block" },
  { id: 3, title: "Sports Meet", organizer: "Priya", date: "2024-08-01", venue: "Main Sports Ground" },
  { id: 4, title: "Cultural Night", organizer: "Rahul", date: "2024-08-10", venue: "Open Air Theatre" },
];

const ACTIVITY_FEED = [
  { id: 1, message: "Riya submitted AI Workshop for approval", time: "2 hours ago", icon: <FaHourglassHalf className="text-secondary w-4 h-4" /> },
  { id: 2, message: "Aman registered 30 students for TechFest", time: "5 hours ago", icon: <FaUserCheck className="text-secondary w-4 h-4" /> },
  { id: 3, message: "Priya updated event details for Sports Meet", time: "Yesterday", icon: <FaBolt className="text-secondary w-4 h-4" /> },
  { id: 4, message: "Rahul submitted feedback for Cultural Night", time: "2 days ago", icon: <FaComments className="text-secondary w-4 h-4" /> },
];

const ADMIN_ACTIONS = [
  { label: "View All Events", icon: <FaList className="w-5 h-5 mr-2" />, href: "/events" },
  { label: "Manage Organizers", icon: <FaUsers className="w-5 h-5 mr-2" />, href: "/organizers" },
  { label: "View Feedback", icon: <FaComments className="w-5 h-5 mr-2" />, href: "/feedback" },
  { label: "Manage Students", icon: <FaUserGraduate className="w-5 h-5 mr-2" />, href: "/students" },
];

const AdminDashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="min-h-screen bg-primary py-10 px-2 md:px-6 font-poppins" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-1">Welcome, <span className="text-secondary">{ADMIN.name}</span></h1>
              <div className="text-secondary font-medium mb-1">{TODAY}</div>
              <div className="text-gray-600">Manage events, organizers, and students efficiently from your dashboard.</div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {SUMMARY.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl shadow-md border border-[#E0E7EA] flex flex-col items-center p-7 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-3xl font-extrabold text-secondary mb-1">{item.value}</div>
                <div className="text-base text-primary font-medium text-center">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[#E0E7EA] mb-10"></div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Event Approval Table */}
            <div className="md:col-span-2">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-primary">Event Approvals</h2>
                <a href="/events" className="text-sm text-secondary hover:underline font-medium">View All</a>
              </div>
              <div className="overflow-x-auto rounded-2xl shadow border border-[#E0E7EA] bg-white">
                <table className="min-w-full divide-y divide-[#E0E7EA]">
                  <thead>
                    <tr className="bg-[#F6FAFB]">
                      <th className="px-6 py-4 text-left text-xs font-bold text-primary uppercase tracking-wider">Event Title</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-primary uppercase tracking-wider">Organizer</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-primary uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-primary uppercase tracking-wider">Venue</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-primary uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PENDING_EVENTS.map((event) => (
                      <tr key={event.id} className="hover:bg-[#B6E2D3]/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-primary">{event.title}</td>
                        <td className="px-6 py-4 text-gray-600">{event.organizer}</td>
                        <td className="px-6 py-4 text-gray-600">{event.date}</td>
                        <td className="px-6 py-4 text-gray-600">{event.venue}</td>
                        <td className="px-6 py-4 flex gap-2">
                          <button className="flex items-center px-3 py-1.5 bg-primary-button text-[var(--primary-button-text-color)] rounded-lg hover:bg-primary-button-hover transition-colors text-xs font-semibold"><FaCheck className="mr-1" /> Approve</button>
                          <button className="flex items-center px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-xs font-semibold"><FaTimes className="mr-1" /> Reject</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions & Activity Feed */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="mb-4 flex items-center">
                  <FaList className="w-5 h-5 text-secondary mr-2" />
                  <h2 className="text-xl font-bold text-primary">Quick Admin Actions</h2>
                </div>
                <div className="flex flex-col gap-3">
                  {ADMIN_ACTIONS.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      className="flex items-center px-4 py-3 bg-white border border-[#E0E7EA] rounded-xl shadow-sm text-secondary font-medium hover:bg-[#B6E2D3]/40 transition-colors"
                    >
                      {action.icon}
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Recent Activity Feed */}
              <div>
                <div className="mb-4 flex items-center">
                  <FaBolt className="w-5 h-5 text-secondary mr-2" />
                  <h2 className="text-xl font-bold text-primary">Recent Activity</h2>
                </div>
                <div className="bg-white rounded-2xl shadow-md border border-[#E0E7EA] p-4 flex flex-col gap-3 max-h-64 overflow-y-auto">
                  {ACTIVITY_FEED.length === 0 ? (
                    <div className="text-gray-500 text-center py-6">No recent activity.</div>
                  ) : (
                    ACTIVITY_FEED.map((item) => (
                      <div key={item.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#E0E7EA]/50 transition">
                        {item.icon}
                        <div>
                          <div className="text-sm text-primary font-medium">{item.message}</div>
                          <div className="text-xs text-gray-400">{item.time}</div>
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