import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    title: "Event Discovery & Registration",
    description: "Easily browse, search, and register for a wide variety of campus events tailored to your interests.",
    icon: (
      <svg className="w-8 h-8 text-primary-button" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
  },
  {
    title: "Personalized Dashboards",
    description: "Get a personalized dashboard with your registered, organized, and bookmarked events, plus notifications.",
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
    ),
  },
  {
    title: "Bookmark & Share Events",
    description: "Save your favorite events and share them with friends using social media or direct links.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" /></svg>
    ),
  },
  {
    title: "Organizer Tools & Analytics",
    description: "Organizers can create, manage, and analyze events with powerful tools and real-time analytics.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 17a4 4 0 01-4-4V5a4 4 0 018 0v8a4 4 0 01-4 4zm0 0v4m-4 0h8" /></svg>
    ),
  },
  {
    title: "Admin Controls & Approvals",
    description: "Admins have full control over event approvals, user management, and platform settings.",
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: "Mobile Friendly",
    description: "Enjoy a seamless experience on any device with our fully responsive, mobile-first design.",
    icon: (
      <svg className="w-8 h-8 text-primary-button" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-5 4h.01" /></svg>
    ),
  },
  {
    title: "Notifications & Reminders",
    description: "Stay updated with real-time notifications and reminders for your upcoming events.",
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
    ),
  },
  {
    title: "Secure & Private",
    description: "Your data is protected with industry-standard security and privacy practices.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.104.896-2 2-2s2 .896 2 2v1a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1c0-1.104.896-2 2-2z" /></svg>
    ),
  },
];

const Features = () => (
  <>
    <Navbar />
    <div className="min-h-screen bg-primary text-primary font-poppins flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary">
        Platform Features
      </h1>
      <p className="text-lg md:text-xl text-secondary mb-10 text-center max-w-2xl">
        Discover all the ways Eventure makes campus event management and participation seamless, fun, and impactful for everyone.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg border border-primary flex flex-col items-center p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h2 className="text-xl font-bold mb-2 text-primary text-center">{feature.title}</h2>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-2 text-secondary">And much more coming soon!</h3>
        <p className="text-gray-500 max-w-xl mx-auto">
          We’re constantly adding new features and improvements based on your feedback. Stay tuned for updates and let us know what you’d love to see next!
        </p>
      </div>
    </div>
    <Footer />
  </>
);

export default Features; 