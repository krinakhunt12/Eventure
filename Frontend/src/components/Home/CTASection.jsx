import React from "react";
import { ArrowRight, Play, Users, Calendar, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

const CTASection = () => (
  <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] relative overflow-hidden">
    {/* Geometric background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute top-[10%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-[20%] right-[15%] w-52 h-52 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-xl"></div>
    </div>
    
    <div className="max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
      <div className="bg-white/30 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 text-center border border-white/40 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-primary-button/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-40 sm:h-40 bg-primary-button/20 rounded-full translate-x-1/4 translate-y-1/4 blur-xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-['ClashDisplay'] text-primary leading-tight">
            READY TO <span className="text-secondary">TRANSFORM</span> YOUR CAMPUS?
          </h2>
          
          <div className="w-16 sm:w-24 h-1 bg-primary-button mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-base sm:text-lg md:text-xl text-secondary mb-6 sm:mb-10 max-w-md sm:max-w-xl md:max-w-2xl mx-auto font-['Satoshi']">
            Join thousands of universities already using Eventure to create unforgettable student experiences
          </p>
          
          {/* Stats row */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              { icon: <Users className="text-primary" />, text: "500+ Campuses" },
              { icon: <Calendar className="text-primary" />, text: "10,000+ Events" },
              { icon: <TrendingUp className="text-primary" />, text: "3x Engagement" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center gap-2 sm:gap-3 border border-white/70"
              >
                {stat.icon}
                <span className="font-semibold text-primary font-['Satoshi'] text-sm sm:text-base">{stat.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5">
            <Button
              className="bg-primary-button hover:bg-[#23424A] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 font-['Satoshi']"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary-button/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 font-['Satoshi']"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 sm:mt-12">
            <p className="text-xs sm:text-sm text-secondary/80 mb-2 sm:mb-4 font-['Satoshi']">Trusted by leading universities worldwide</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {["Harvard", "Stanford", "MIT", "Oxford"].map((uni, index) => (
                <span 
                  key={index} 
                  className="bg-white/70 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-primary text-xs sm:text-sm font-medium font-['Satoshi'] border border-white/90"
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