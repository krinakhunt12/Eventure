import React, { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary font-sans font-poppins" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
      <nav className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#90caf9] to-[#bbdefb] rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold font-poppins" style={{ color: '#23424A', fontFamily: 'Poppins, Inter, sans-serif' }}>
            Eventure
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-medium text-primary hover:text-secondary transition-colors font-poppins"
              style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-[#bbdefb]"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="default"
                className="w-full bg-primary-button hover:bg-[#1976d2] text-white"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-purple-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-gray-700 font-medium hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <Link to="/login">
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-[#bbdefb]"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="default"
                className="w-full bg-primary-button hover:bg-[#1976d2] text-white"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
