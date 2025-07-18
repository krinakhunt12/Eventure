import React from "react";
import { CalendarHeart, Users, TrendingUp, Zap, Globe, Shield, BookOpen, MessageSquare, Award, BarChart2, ClipboardCheck, Bell } from "lucide-react";

const features = [
  {
    title: "Smart Event Scheduling",
    icon: <CalendarHeart className="w-6 h-6" />,
    desc: "AI-powered scheduling that prevents conflicts and optimizes attendance based on student preferences and availability.",
    benefits: [
      "Automated conflict detection",
      "Optimal timing suggestions",
      "Calendar sync with academic schedules"
    ]
  },
  {
    title: "Community Building",
    icon: <Users className="w-6 h-6" />,
    desc: "Foster meaningful connections through interest-based groups, mentorship programs, and collaborative event planning.",
    benefits: [
      "Interest-based matching",
      "Mentorship programs",
      "Collaborative spaces"
    ]
  },
  {
    title: "Real-time Analytics",
    icon: <TrendingUp className="w-6 h-6" />,
    desc: "Comprehensive dashboards with predictive insights, engagement metrics, and actionable recommendations.",
    benefits: [
      "Participation tracking",
      "Engagement heatmaps",
      "Predictive analytics"
    ]
  },
  {
    title: "Instant Notifications",
    icon: <Bell className="w-6 h-6" />,
    desc: "Smart push notifications that keep students informed without overwhelming them, with personalized timing.",
    benefits: [
      "Customizable preferences",
      "Smart timing algorithms",
      "Multi-channel delivery"
    ]
  },
  {
    title: "Academic Integration",
    icon: <BookOpen className="w-6 h-6" />,
    desc: "Seamless integration with academic calendars, course schedules, and university systems.",
    benefits: [
      "Course schedule sync",
      "Assignment deadline alerts",
      "Exam period awareness"
    ]
  },
  {
    title: "Feedback System",
    icon: <MessageSquare className="w-6 h-6" />,
    desc: "Built-in tools for collecting and analyzing student feedback to continuously improve events.",
    benefits: [
      "Real-time polls",
      "Anonymous feedback",
      "Sentiment analysis"
    ]
  },
  {
    title: "Achievement Tracking",
    icon: <Award className="w-6 h-6" />,
    desc: "Recognize and reward student participation with digital badges and certifications.",
    benefits: [
      "Skill-based badges",
      "Participation certificates",
      "Co-curricular records"
    ]
  },
  {
    title: "Advanced Reporting",
    icon: <BarChart2 className="w-6 h-6" />,
    desc: "Generate detailed reports for student organizations and administrative review.",
    benefits: [
      "Custom report builder",
      "Export to multiple formats",
      "Automated summaries"
    ]
  },
  {
    title: "Attendance Management",
    icon: <ClipboardCheck className="w-6 h-6" />,
    desc: "Effortless check-in systems with QR codes, NFC, and facial recognition options.",
    benefits: [
      "Multiple check-in methods",
      "Real-time attendance tracking",
      "Automated follow-ups"
    ]
  }
];

const FeaturesSection = () => (
  <section id="features" className="w-full py-10 sm:py-14 md:py-20 bg-primary relative overflow-hidden">
    {/* Geometric background elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute top-[10%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-[20%] right-[15%] w-52 h-52 sm:w-80 sm:h-80 bg-white/15 rounded-full blur-xl"></div>
    </div>
    
    <div className="max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-['ClashDisplay'] tracking-tight">
          EVERYTHING YOU NEED TO
          <span className="text-secondary"> Succeed</span>
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-primary-button mx-auto mb-4 sm:mb-6"></div>
        <p className="text-base sm:text-lg md:text-xl text-secondary max-w-md sm:max-w-xl md:max-w-3xl mx-auto font-['Satoshi']">
          Powerful features designed to enhance campus life and boost student engagement
        </p>
      </div>
      
      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 p-5 sm:p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full"
          >
            {/* Icon with geometric background */}
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-white/50 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary-button/20 transition-colors">
              {React.cloneElement(feature.icon, { 
                className: "w-6 h-6 text-primary group-hover:text-primary transition-colors" 
              })}
            </div>
            
            {/* Feature Title */}
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2 sm:mb-4 font-['ClashDisplay'] group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-secondary/90 mb-3 sm:mb-6 font-['Satoshi'] leading-relaxed text-sm sm:text-base md:text-lg">
              {feature.desc}
            </p>
            
            {/* Benefits List */}
            <div className="mt-auto pt-3 sm:pt-4 border-t border-white/20">
              <h4 className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3 font-['Satoshi']">KEY BENEFITS:</h4>
              <ul className="space-y-2 sm:space-y-3">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-4 h-4 mt-1 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-xs sm:text-sm text-secondary/90 font-['Satoshi']">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA Button */}
      <div className="mt-10 sm:mt-16 text-center">
        <button className="px-6 sm:px-8 py-2 sm:py-3 bg-primary-button text-white rounded-xl hover:bg-[#23424A] transition-colors font-medium font-['Satoshi'] shadow-sm hover:shadow-md hover:scale-105 transition-transform text-xs sm:text-sm md:text-base">
          Explore All Features
        </button>
      </div>
    </div>
  </section>
);

export default FeaturesSection;