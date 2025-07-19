import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Menu, X } from "lucide-react";

// Mock authenticated user data
const mockUser = {
  name: "Alex Johnson",
  role: "Student", // Change to "Admin" or "Organizer" to test
  avatar: "", // If empty, use initials
};

const NAV_LINKS = {
  Admin: [
    { label: "Dashboard", to: "/admin" },
    { label: "Events", to: "/events" },
    { label: "Users", to: "/users" },
    { label: "Feedback", to: "/feedback" },
    { label: "Settings", to: "/settings" },
  ],
  Organizer: [
    { label: "Dashboard", to: "/organizer" },
    { label: "My Events", to: "/myevents" },
    { label: "Create Event", to: "/create-event" },
    { label: "Messages", to: "/messages" },
  ],
  Student: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "My Events", to: "/myevents" },
    { label: "Browse Events", to: "/events" },
    { label: "Help", to: "/help" },
  ],
};

const DashboardNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const user = mockUser;
  const links = NAV_LINKS[user.role] || [];

  // Get initials from name
  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to={
            user.role === "Admin"
              ? "/admin"
              : user.role === "Organizer"
              ? "/organizer"
              : "/dashboard"
          }
          className="flex items-center gap-2 text-primary font-bold text-2xl tracking-tight hover:opacity-90"
        >
          <span className="text-primary px-2 py-1 font-extrabold">Eventure</span>
      
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-lg font-medium transition-colors duration-150 text-primary hover:bg-primary-button/80 hover:text-primary hover:shadow-md ${
                location.pathname === link.to ? "text-primary  shadow" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <button className="relative p-2 rounded-full hover:bg-primary-button/80 transition">
            <Bell className="w-6 h-6 text-primary" />
            <span className="absolute -top-1 -right-1 bg-secondary text-xs text-white rounded-full px-1.5 py-0.5 font-bold shadow">3</span>
          </button>

          {/* User Avatar/Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-2 focus:outline-none"
            >
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-9 h-9 rounded-full border-2 border-primary-button shadow"
                />
              ) : (
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-button text-primary font-bold text-lg border-2 border-primary-button shadow">
                  {getInitials(user.name)}
                </span>
              )}
              <span className="hidden sm:block text-primary font-medium">{user.name.split(" ")[0]}</span>
            </button>
            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50 animate-fade-in">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-primary hover:bg-primary/10 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  View Profile
                </Link>
                <Link
                  to="/account"
                  className="block px-4 py-2 text-primary hover:bg-primary/10 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  Account Settings
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-primary hover:bg-primary/10 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden p-2 rounded-md text-primary hover:bg-primary-button/80 focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary shadow-lg px-4 pb-4 animate-fade-in">
          <div className="flex flex-col gap-2 mt-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-lg font-medium transition-colors duration-150 text-primary hover:bg-primary-button/80 hover:text-primary hover:shadow-md ${
                  location.pathname === link.to ? "bg-primary-button text-primary shadow" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-primary/20 my-3"></div>
          <div className="flex items-center gap-3 mt-2">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-9 h-9 rounded-full border-2 border-primary-button shadow"
              />
            ) : (
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-button text-primary font-bold text-lg border-2 border-primary-button shadow">
                {getInitials(user.name)}
              </span>
            )}
            <span className="text-primary font-medium">{user.name}</span>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <Link
              to="/profile"
              className="block px-4 py-2 text-primary bg-white rounded-lg hover:bg-primary/10 transition"
              onClick={() => setMenuOpen(false)}
            >
              View Profile
            </Link>
            <Link
              to="/account"
              className="block px-4 py-2 text-primary bg-white rounded-lg hover:bg-primary/10 transition"
              onClick={() => setMenuOpen(false)}
            >
              Account Settings
            </Link>
            <button
              className="block w-full text-left px-4 py-2 text-primary bg-white rounded-lg hover:bg-primary/10 transition"
              onClick={() => setMenuOpen(false)}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default DashboardNavbar; 