import React from "react";
import { ArrowRight, Play, Users, Calendar, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

const CTASection = () => (
  <section className="w-full py-20 bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] relative overflow-hidden">
    {/* Geometric background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute top-10% left-10% w-64 h-64 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20% right-15% w-80 h-80 bg-white/15 rounded-full blur-xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 md:p-16 text-center border border-white/40 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary-button/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary-button/20 rounded-full translate-x-1/4 translate-y-1/4 blur-xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['ClashDisplay'] text-primary">
            READY TO <span className="text-secondary">TRANSFORM</span> YOUR CAMPUS?
          </h2>
          
          <div className="w-24 h-1 bg-primary-button mx-auto mb-8"></div>
          
          <p className="text-lg text-secondary mb-10 max-w-2xl mx-auto font-['Satoshi']">
            Join thousands of universities already using Eventure to create unforgettable student experiences
          </p>
          
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: <Users className="text-[#2a6168]" />, text: "500+ Campuses" },
              { icon: <Calendar className="text-[#2a6168]" />, text: "10,000+ Events" },
              { icon: <TrendingUp className="text-[#2a6168]" />, text: "3x Engagement" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/50 backdrop-blur-sm px-6 py-3 rounded-xl flex items-center gap-3 border border-white/70"
              >
                {stat.icon}
                <span className="font-semibold text-primary font-['Satoshi']">{stat.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button
              className="bg-primary-button hover:bg-[#23424A] text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 font-['Satoshi']"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#2a6168] text-[#2a6168] hover:bg-primary-button/10 px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 font-['Satoshi']"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12">
            <p className="text-sm text-secondary/80 mb-4 font-['Satoshi']">Trusted by leading universities worldwide</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Harvard", "Stanford", "MIT", "Oxford"].map((uni, index) => (
                <span 
                  key={index} 
                  className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg text-primary text-sm font-medium font-['Satoshi'] border border-white/90"
                >
                  {uni}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;