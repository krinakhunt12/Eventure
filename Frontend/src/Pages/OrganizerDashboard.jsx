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
  FaChevronRight,
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
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary font-['ClashDisplay']">
                  WELCOME, <span className="text-secondary">Organizer</span>!
                </h1>
                <p className="text-sm text-secondary/80 mt-1">Here's what's happening with your events</p>
              </div>
              <p className="text-secondary font-['Satoshi'] mt-2 md:mt-0">{TODAY}</p>
            </div>
            <div className="w-20 h-1 bg-primary-button mt-4 rounded-full" />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Events Organized", value: summary.organized, icon: <FaCalendarAlt /> },
              { label: "Pending Approval", value: summary.pending, icon: <FaHourglassHalf /> },
              { label: "Total Participants", value: summary.participants, icon: <FaUsers /> },
              { label: "Upcoming Events", value: summary.upcoming, icon: <FaRegCalendarCheck /> },
            ].map((item) => (
              <div 
                key={item.label} 
                className="bg-white/30 backdrop-blur-md rounded-xl border border-white/20 p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
              >
                <div className="flex items-center">
                  <div className="p-3 bg-white/50 rounded-lg mr-4 text-primary shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary font-['ClashDisplay']">
                      {item.value}
                    </h3>
                    <p className="text-sm text-primary/80 font-['Satoshi'] mt-1">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Events Table Section */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-primary font-['ClashDisplay']">MY EVENTS</h2>
                  <p className="text-sm text-secondary/80">Manage your events and registrations</p>
                </div>
                <a
                  href="/create-event"
                  className="flex items-center px-4 py-2.5 bg-primary-button text-white rounded-lg hover:bg-[#23424A] transition-colors duration-300 shadow-sm"
                >
                  <FaPlus className="w-4 h-4 mr-2" /> Create New
                </a>
              </div>
              
              <div className="bg-white/30 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-white/20">
                    <thead className="bg-white/40">
                      <tr>
                        {["Title", "Date", "Venue", "Status", "Actions"].map((h) => (
                          <th
                            key={h}
                            className="px-6 py-3 text-left text-xs font-medium text-primary/80 uppercase tracking-wider"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {Array.isArray(events) && events.map((evt) => {
                        const status = evt.isApproved
                          ? new Date(evt.date) < new Date()
                            ? "completed"
                            : "approved"
                          : "pending";
                        return (
                          <tr key={evt._id} className="hover:bg-white/20 transition-colors duration-150">
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-primary">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 bg-white/50 rounded-lg flex items-center justify-center mr-3">
                                  <FaCalendarAlt className="text-primary" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium">{evt.title}</div>
                                  <div className="text-xs text-primary/60">{evt.registrations || 0} participants</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary/80">
                              {new Date(evt.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary/80">
                              {evt.venue}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[status]}`}>
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                              <div className="flex space-x-2 justify-end">
                                <a 
                                  href={`/events/${evt._id}`} 
                                  className="text-primary hover:text-primary-button transition-colors px-2 py-1 rounded"
                                >
                                  View
                                </a>
                                {!evt.isApproved && (
                                  <a 
                                    href={`/events/edit/${evt._id}`} 
                                    className="text-primary hover:text-primary-button transition-colors px-2 py-1 rounded"
                                  >
                                    Edit
                                  </a>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {events.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-secondary/80">No events found. Create your first event!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div>
                <h2 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <FaBell className="mr-2 text-primary-button" /> QUICK ACTIONS
                </h2>
                <div className="space-y-3">
                  {[
                    { label: "Create New Event", href: "/create-event", icon: <FaPlus className="mr-3" /> },
                    { label: "Participant List", href: "/participants", icon: <FaList className="mr-3" /> },
                    { label: "Review Feedback", href: "/feedback", icon: <FaCommentDots className="mr-3" /> },
                  ].map((act) => (
                    <a
                      key={act.label}
                      href={act.href}
                      className="flex items-center justify-between px-4 py-3 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg hover:bg-primary-button/10 text-secondary transition-colors duration-300 group"
                    >
                      <div className="flex items-center">
                        <span className="group-hover:text-primary-button transition-colors duration-300">
                          {act.icon}
                        </span>
                        <span className="font-medium">{act.label}</span>
                      </div>
                      <FaChevronRight className="w-3 h-3 text-primary/50 group-hover:text-primary-button transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Notifications */}
              <div>
                <h2 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <FaBell className="mr-2 text-primary-button" /> RECENT ACTIVITY
                </h2>
                <div className="bg-white/30 backdrop-blur-md rounded-xl border border-white/20 p-4 space-y-3 shadow-sm">
                  {notifications.length === 0 ? (
                    <div className="text-center py-6">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/40 mb-3">
                        <FaBell className="text-primary/60" />
                      </div>
                      <h3 className="text-sm font-medium text-primary">No notifications</h3>
                      <p className="mt-1 text-xs text-primary/60">Activity will appear here</p>
                    </div>
                  ) : (
                    notifications.map((n) => (
                      <div 
                        key={n.id} 
                        className="flex items-start gap-3 hover:bg-white/20 p-3 rounded-lg transition-colors duration-150"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-8 w-8 rounded-full bg-white/40 flex items-center justify-center">
                            <FaCheckCircle className="w-3 h-3 text-primary-button" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-primary truncate">{n.message}</p>
                          <p className="text-xs text-primary/60 mt-1">{n.time}</p>
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