import React from "react";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary border-t border-[#E0E7EA]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#90caf9] to-[#bbdefb] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary font-poppins">
                Eventure
              </span>
            </div>
            <p className="text-secondary mb-6 leading-relaxed">
              Transforming campus life through innovative event management and student engagement solutions.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6 font-poppins">Quick Links</h3>
            <div className="space-y-3">
              <a href="#" className="block text-secondary hover:text-primary transition-colors">Home</a>
              <a href="#" className="block text-secondary hover:text-primary transition-colors">Features</a>
              <a href="#" className="block text-secondary hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="block text-secondary hover:text-primary transition-colors">Testimonials</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6 font-poppins">Resources</h3>
            <div className="space-y-3">
              <a href="#" className="block text-secondary hover:text-primary transition-colors">Blog</a>
              <a href="#" className="block text-secondary hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="block text-secondary hover:text-primary transition-colors">Help Center</a>
              <a href="#" className="block text-secondary hover:text-primary transition-colors">API Status</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6 font-poppins">Company</h3>
            <div className="space-y-3">
              <a href="#" className="block text-secondary hover:text-primary transition-colors">About Us</a>
              <a href="#" className="block text-secondary hover:text-primary transition-colors">Careers</a>
              <a href="#" className="block text-secondary hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="block text-secondary hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6 font-poppins">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mt-1 mr-3 text-primary" />
                <span className="text-secondary">contact@Eventure.edu</span>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mt-1 mr-3 text-primary" />
                <span className="text-secondary">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-primary" />
                <span className="text-secondary">123 Campus Drive, Edu City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#E0E7EA] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Eventure. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;