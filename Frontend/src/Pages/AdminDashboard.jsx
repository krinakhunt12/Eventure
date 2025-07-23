import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaCalendarAlt, FaUserCheck, FaUserTie, FaHourglassHalf,
  FaCheck, FaTimes, FaList, FaUsers, FaComments,
  FaUserGraduate, FaBolt, FaChevronRight, FaEllipsisH,FaBell 
} from "react-icons/fa";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";

const ADMIN = { name: "Admin" };
const TODAY = new Date().toLocaleDateString(undefined, { dateStyle: "full" });

const SUMMARY = [
  { label: "Total Events", value: 28, icon: <FaCalendarAlt className="w-5 h-5" />, trend: "up" },
  { label: "Pending Approvals", value: 4, icon: <FaHourglassHalf className="w-5 h-5" />, trend: "down" },
  { label: "Registered Students", value: 1200, icon: <FaUserGraduate className="w-5 h-5" />, trend: "up" },
  { label: "Active Organizers", value: 18, icon: <FaUserTie className="w-5 h-5" />, trend: "steady" },
];

const ACTIVITY_FEED = [
  { id: 1, message: "Riya submitted AI Workshop for approval", time: "2 hours ago", icon: <FaHourglassHalf className="text-secondary w-4 h-4" /> },
  { id: 2, message: "Aman registered 30 students for TechFest", time: "5 hours ago", icon: <FaUserCheck className="text-secondary w-4 h-4" /> },
  { id: 3, message: "Priya updated event details for Sports Meet", time: "Yesterday", icon: <FaBolt className="text-secondary w-4 h-4" /> },
  { id: 4, message: "Rahul submitted feedback for Cultural Night", time: "2 days ago", icon: <FaComments className="text-secondary w-4 h-4" /> },
];

const ADMIN_ACTIONS = [
  { label: "View All Events", icon: <FaList className="w-4 h-4" />, href: "/events" },
  { label: "Manage Organizers", icon: <FaUsers className="w-4 h-4" />, href: "/organizers" },
  { label: "View Feedback", icon: <FaComments className="w-4 h-4" />, href: "/feedback" },
  { label: "Manage Students", icon: <FaUserGraduate className="w-4 h-4" />, href: "/students" },
];

const AdminDashboard = () => {
  const [pendingEvents, setPendingEvents] = useState([]);

  useEffect(() => {
    const fetchPendingEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events/pending");
        const events = Array.isArray(res.data.events) ? res.data.events : [];
        setPendingEvents(events);
      } catch (error) {
        console.error("Error fetching pending events:", error);
        setPendingEvents([]);
      }
    };

    fetchPendingEvents();
  }, []);

  const handleApprove = async (eventId) => {
    try {
      await axios.put(`http://localhost:5000/api/events/approve/${eventId}`);
      setPendingEvents((prev) => prev.filter((event) => event._id !== eventId));
    } catch (error) {
      console.error("Error approving event:", error);
    }
  };

  return (
    <>
      <DashboardNavbar />
      <div className="min-h-screen bg-primary py-8 px-4 relative overflow-hidden">
        {/* Background visuals */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[20%] right-[15%] w-52 h-52 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-300" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary font-['ClashDisplay']">
                  Welcome back, <span className="text-secondary">{ADMIN.name}</span>
                </h1>
                <p className="text-secondary/80 mt-1">{TODAY}</p>
              </div>
              <div className="text-sm text-secondary/80">
                Last login: Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent mt-3 rounded-full" />
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {SUMMARY.map((item) => (
              <div 
                key={item.label} 
                className="bg-white/30 backdrop-blur-md rounded-xl border border-white/20 p-5 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]"
              >
                <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-white/50 rounded-lg shadow-sm">
                    {item.icon}
                  </div>
                  <div className="text-xs font-medium text-secondary/70 flex items-center gap-1">
                    {item.trend === "up" && "↑ 12%"}
                    {item.trend === "down" && "↓ 5%"}
                    {item.trend === "steady" && "→ Steady"}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold text-secondary">{item.value}</div>
                  <div className="text-sm text-primary/80 mt-1">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Event Approvals */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-primary font-['ClashDisplay']">Pending Approvals</h2>
                  <p className="text-sm text-secondary/80">Review and approve new event submissions</p>
                </div>
                <a 
                  href="/events" 
                  className="flex items-center text-sm text-secondary hover:text-primary-button transition-colors"
                >
                  View all events <FaChevronRight className="ml-1 w-3 h-3" />
                </a>
              </div>

              <div className="bg-white/30 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-white/20">
                    <thead className="bg-white/40">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-primary/80 uppercase tracking-wider">Event</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-primary/80 uppercase tracking-wider">Organizer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-primary/80 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-primary/80 uppercase tracking-wider">Venue</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-primary/80 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {pendingEvents.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="px-6 py-8 text-center">
                            <div className="flex flex-col items-center justify-center">
                              <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center mb-3">
                                <FaCheck className="text-secondary/60" />
                              </div>
                              <h3 className="text-sm font-medium text-primary">All caught up!</h3>
                              <p className="text-xs text-secondary/60 mt-1">No pending approvals</p>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        pendingEvents.map((event) => (
                          <tr key={event._id} className="hover:bg-white/20 transition-colors duration-150">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-8 w-8 bg-white/50 rounded-md flex items-center justify-center mr-3">
                                  <FaCalendarAlt className="text-primary w-3 h-3" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-primary">{event.title}</div>
                                  <div className="text-xs text-secondary/60">{event.category || "General"}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary/80">
                              {event.organizerName || "Unknown"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary/80">
                              {new Date(event.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary/80">
                              {event.venue}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                              <div className="flex justify-end space-x-2">
                                <button
                                  onClick={() => handleApprove(event._id)}
                                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
                                >
                                  Approve
                                </button>
                                <button
                                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
                                >
                                  Reject
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div>
                <h2 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <FaBolt className="mr-2 text-secondary" /> Quick Actions
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {ADMIN_ACTIONS.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      className="bg-white/30 backdrop-blur-md rounded-lg border border-white/20 p-4 flex flex-col items-center justify-center text-center hover:bg-white/40 transition-colors duration-200 group"
                    >
                      <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center mb-2 group-hover:bg-secondary/20 transition-colors">
                        {action.icon}
                      </div>
                      <span className="text-sm font-medium text-primary">{action.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Activity Feed */}
              <div>
                <h2 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <FaBell className="mr-2 text-secondary" /> Recent Activity
                </h2>
                <div className="bg-white/30 backdrop-blur-md rounded-xl border border-white/20 p-4 space-y-4">
                  {ACTIVITY_FEED.map((activity) => (
                    <div 
                      key={activity.id} 
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/20 transition-colors duration-150"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center">
                          {activity.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-primary">{activity.message}</p>
                        <p className="text-xs text-secondary/60 mt-1">{activity.time}</p>
                      </div>
                      <button className="text-secondary/40 hover:text-secondary transition-colors">
                        <FaEllipsisH className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <div className="text-center pt-2">
                    <a 
                      href="#" 
                      className="text-xs text-secondary/70 hover:text-secondary transition-colors inline-flex items-center"
                    >
                      View all activity <FaChevronRight className="ml-1 w-2 h-2" />
                    </a>
                  </div>
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