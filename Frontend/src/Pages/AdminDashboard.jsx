import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaCalendarAlt, FaUserCheck, FaUserTie, FaHourglassHalf,
  FaCheck, FaTimes, FaList, FaUsers, FaComments,
  FaUserGraduate, FaBolt,
} from "react-icons/fa";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";

const ADMIN = { name: "Admin" };
const TODAY = new Date().toLocaleDateString(undefined, { dateStyle: "full" });

const SUMMARY = [
  { label: "Total Events", value: 28, icon: <FaCalendarAlt className="w-6 h-6 text-secondary" /> },
  { label: "Pending Approvals", value: 4, icon: <FaHourglassHalf className="w-6 h-6 text-secondary" /> },
  { label: "Registered Students", value: 1200, icon: <FaUserGraduate className="w-6 h-6 text-secondary" /> },
  { label: "Active Organizers", value: 18, icon: <FaUserTie className="w-6 h-6 text-secondary" /> },
];

const ACTIVITY_FEED = [
  { id: 1, message: "Riya submitted AI Workshop for approval", time: "2 hours ago", icon: <FaHourglassHalf className="text-secondary w-4 h-4" /> },
  { id: 2, message: "Aman registered 30 students for TechFest", time: "5 hours ago", icon: <FaUserCheck className="text-secondary w-4 h-4" /> },
  { id: 3, message: "Priya updated event details for Sports Meet", time: "Yesterday", icon: <FaBolt className="text-secondary w-4 h-4" /> },
  { id: 4, message: "Rahul submitted feedback for Cultural Night", time: "2 days ago", icon: <FaComments className="text-secondary w-4 h-4" /> },
];

const ADMIN_ACTIONS = [
  { label: "View All Events", icon: <FaList className="mr-2" />, href: "/events" },
  { label: "Manage Organizers", icon: <FaUsers className="mr-2" />, href: "/organizers" },
  { label: "View Feedback", icon: <FaComments className="mr-2" />, href: "/feedback" },
  { label: "Manage Students", icon: <FaUserGraduate className="mr-2" />, href: "/students" },
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
      <div className="min-h-screen bg-primary py-10 px-4 relative overflow-hidden">
        {/* Background visuals */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[10%] left-[10%] w-40 h-40 bg-white/20 rounded-full blur-xl" />
          <div className="absolute bottom-[20%] right-[15%] w-52 h-52 bg-white/15 rounded-full blur-xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Welcome */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-primary font-['ClashDisplay']">
              WELCOME, <span className="text-secondary">{ADMIN.name}</span>
            </h1>
            <div className="text-secondary/80 font-medium mt-1">{TODAY}</div>
            <p className="text-secondary/70 text-sm">Manage events, organizers, and students efficiently from your dashboard.</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {SUMMARY.map((item) => (
              <div key={item.label} className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 p-5 flex flex-col items-center">
                <div className="mb-3">{item.icon}</div>
                <div className="text-2xl font-extrabold text-secondary">{item.value}</div>
                <div className="text-sm text-primary font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Event Approvals */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-primary font-['ClashDisplay']">EVENT APPROVALS</h2>
              <a href="/events" className="text-sm text-secondary hover:underline font-medium">View All</a>
            </div>

            <div className="overflow-x-auto rounded-2xl shadow-lg border border-white/40 bg-white/30 backdrop-blur-md">
              <table className="min-w-full text-sm divide-y divide-white/40">
                <thead className="bg-white/30">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-primary uppercase">Event Title</th>
                    <th className="px-6 py-3 text-left font-bold text-primary uppercase">Organizer</th>
                    <th className="px-6 py-3 text-left font-bold text-primary uppercase">Date</th>
                    <th className="px-6 py-3 text-left font-bold text-primary uppercase">Venue</th>
                    <th className="px-6 py-3 text-left font-bold text-primary uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingEvents.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-6 text-center text-secondary/70">No pending events.</td>
                    </tr>
                  ) : (
                    pendingEvents.map((event) => (
                      <tr key={event._id} className="hover:bg-secondary/10 transition">
                        <td className="px-6 py-4 text-primary font-medium">{event.title}</td>
                        <td className="px-6 py-4 text-secondary/80">{event.organizerName || "Unknown"}</td>
                        <td className="px-6 py-4 text-secondary/80">{event.date}</td>
                        <td className="px-6 py-4 text-secondary/80">{event.venue}</td>
                        <td className="px-6 py-4 flex gap-2">
                          <button
                            className="flex items-center px-3 py-1.5 bg-green-600 text-white rounded hover:bg-green-700 transition text-xs font-semibold"
                            onClick={() => handleApprove(event._id)}
                          >
                            <FaCheck className="mr-1" /> Approve
                          </button>
                          <button
                            className="flex items-center px-3 py-1.5 bg-red-100 text-red-700 rounded hover:bg-red-200 transition text-xs font-semibold"
                          >
                            <FaTimes className="mr-1" /> Reject
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
