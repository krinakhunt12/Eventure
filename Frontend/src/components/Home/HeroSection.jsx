import React from "react";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";
// Using Unsplash image for hero section
const heroImgUrl = "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=900&q=80";

const stats = [
  { number: "500K+", label: "Active Students" },
  { number: "12K+", label: "Events Created" },
  { number: "200+", label: "Universities" },
  { number: "98%", label: "Satisfaction Rate" },
];

const HeroSection = () => (
  <div className="relative overflow-hidden bg-gradient-to-r from-[#bbdefb] to-[#e3f2fd] pb-12">
    {/* Complex wave bottom edge */}
    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 30L60 40C120 50 240 70 360 60C480 50 600 10 720 20C840 30 960 80 1080 80C1200 80 1320 30 1380 10L1440 0V120H0V30Z" fill="#e3f2fd" />
    </svg>
    
    <div className="max-w-7xl mx-auto px-6 pt-20 flex flex-col md:flex-row items-center justify-between min-h-[500px]">
      {/* Left: Content - Polygon Background */}
      <div className="md:w-1/2 text-left z-10 relative pl-10">
        <div className="absolute -left-10 top-0 w-full h-full -skew-x-12 bg-white/30 -z-10"></div>
        
        <div className="inline-flex items-center px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4 mr-2" />
          Empowering Campus Communities
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-primary font-['ClashDisplay']">
          Discover, Connect, <br className="hidden md:block" />
          <span className="text-secondary">Thrive Together</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-xl font-['Satoshi'] leading-relaxed italic">
          Unlock your potential with campus events that inspire, educate, and connect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Button className="bg-primary-button hover:bg-primary-button text-white px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            className="border-2 border-primary px-8 py-4 text-lg rounded-full shadow-sm transition-all duration-300 hover:scale-105 group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-left bg-white/50 p-3 rounded-lg backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-gray-600 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right: Image - Circular with Notch */}
      <div className="md:w-1/2 flex justify-end items-center mt-10 md:mt-0 z-10">
        <div className="relative">
          <div className="absolute -inset-4 bg-white rounded-full shadow-xl"></div>
          <img
            src={heroImgUrl}
            alt="Students collaborating on campus"
            className="relative w-96 h-96 object-cover rounded-full border-8 border-white shadow-lg clip-notch"
          />
        </div>
      </div>
    </div>
  </div>
);
export default HeroSection; 