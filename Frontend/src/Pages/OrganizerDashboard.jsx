import React, { useEffect, useState } from "react";
import axios from "axios";
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

const TODAY = new Date().toLocaleDateString(undefined, { dateStyle: "full" });

const OrganizerDashboard = () => {
  const [summary, setSummary] = useState({
    organized: 0,
    pending: 0,
    participants: 0,
    upcoming: 0,
  });
  const [events, setEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events");
        const evts = res.data || [];
        setEvents(evts);

        const organized = evts.length;
        const pending = evts.filter((e) => !e.isApproved).length;
        const upcoming = evts.filter((e) => new Date(e.date) >= new Date()).length;
        const participants = evts.reduce((sum, e) => sum + (e.registrations || 0), 0);

        setSummary({ organized, pending, upcoming, participants });
      } catch (err) {
        console.error("Error loading events:", err);
      }
    };

    fetchEvents();
  }, []);

  const STATUS_COLORS = {
    approved: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    completed: "bg-gray-200 text-gray-600",
  };

  return (
    <>
      <DashboardNavbar />
      <div className="min-h-screen bg-primary py-8 px-4 font-['Satoshi']">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-3xl font-bold text-primary font-['ClashDisplay']">
                WELCOME, <span className="text-secondary">Organizer</span>!
              </h1>
              <p className="text-secondary font-['Satoshi']">{TODAY}</p>
            </div>
            <div className="w-20 h-1 bg-primary-button mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { label: "Events Organized", value: summary.organized, icon: <FaCalendarAlt /> },
              { label: "Pending Approval", value: summary.pending, icon: <FaHourglassHalf /> },
              { label: "Total Participants", value: summary.participants, icon: <FaUsers /> },
              { label: "Upcoming Events", value: summary.upcoming, icon: <FaRegCalendarCheck /> },
            ].map((item) => (
              <div key={item.label} className="bg-white/30 backdrop-blur-md rounded-2xl border p-6 hover:shadow-lg">
                <div className="flex items-center">
                  <div className="p-3 bg-white/50 rounded-xl mr-4 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary font-['ClashDisplay']">
                      {item.value}
                    </h3>
                    <p className="text-sm text-primary font-['Satoshi'] mt-1">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-primary font-['ClashDisplay']">MY EVENTS</h2>
                  <p className="text-sm text-secondary/80">Manage your events</p>
                </div>
                <a
                  href="/create-event"
                  className="flex items-center px-4 py-2 bg-primary-button text-white rounded-xl hover:bg-[#23424A]"
                >
                  <FaPlus className="w-4 h-4 mr-2" /> Create New
                </a>
              </div>
              <div className="bg-white/30 backdrop-blur-md rounded-2xl border overflow-hidden">
                <table className="min-w-full divide-y divide-white/40">
                  <thead className="bg-white/50">
                    <tr>
                      {["Title", "Date", "Venue", "Status", "Actions"].map((h) => (
                        <th
                          key={h}
                          className="px-6 py-3 text-left text-xs font-semibold text-primary uppercase"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/40">
                    {Array.isArray(events) && events.map((evt) => {
                      const status = evt.isApproved
                        ? new Date(evt.date) < new Date()
                          ? "completed"
                          : "approved"
                        : "pending";
                      return (
                        <tr key={evt._id} className="hover:bg-white/30">
                          <td className="px-6 py-4 font-medium text-primary">{evt.title}</td>
                          <td className="px-6 py-4 text-secondary/80">{evt.date}</td>
                          <td className="px-6 py-4 text-secondary/80">{evt.venue}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[status]}`}>
                              {status.charAt(0).toUpperCase() + status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right text-sm">
                            <a href={`/events/${evt._id}`} className="text-secondary hover:underline mr-4">
                              View
                            </a>
                            {!evt.isApproved && (
                              <a href={`/events/edit/${evt._id}`} className="text-secondary hover:underline">
                                Edit
                              </a>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-primary mb-3 flex items-center">
                  <FaBell className="mr-2" /> QUICK ACTIONS
                </h2>
                <div className="space-y-3">
                  {[
                    { label: "Create New Event", href: "/create-event", icon: <FaPlus className="mr-2" /> },
                    { label: "Participant List", href: "/participants", icon: <FaList className="mr-2" /> },
                    { label: "Review Feedback", href: "/feedback", icon: <FaCommentDots className="mr-2" /> },
                  ].map((act) => (
                    <a
                      key={act.label}
                      href={act.href}
                      className="flex items-center px-4 py-3 bg-white/30 backdrop-blur-md border rounded-xl hover:bg-primary-button/20 text-secondary"
                    >
                      {act.icon}
                      {act.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-primary mb-3 flex items-center">
                  <FaBell className="mr-2" /> NOTIFICATIONS
                </h2>
                <div className="bg-white/30 backdrop-blur-md rounded-2xl border p-4 space-y-3">
                  {notifications.length === 0 ? (
                    <p className="text-center text-secondary/80 py-4">No notifications</p>
                  ) : (
                    notifications.map((n) => (
                      <div key={n.id} className="flex items-start gap-3 hover:bg-white/30 p-2 rounded-lg">
                        <FaCheckCircle className="w-4 h-4 text-primary" />
                        <div>
                          <p className="text-sm text-primary">{n.message}</p>
                          <p className="text-xs text-secondary/60 mt-1">{n.time}</p>
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

export default OrganizerDashboard;
