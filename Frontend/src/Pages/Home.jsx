import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingBackground from "../components/Home/FloatingBackground";
import HeroSection from "../components/Home/HeroSection";
import MostPopularEvents from "../components/Home/MostPopularEvents";
import FeaturesSection from "../components/Home/FeaturesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CTASection from "../components/Home/CTASection";
import EventCategoriesSection from "../components/Home/EventCategoriesSection";
import UpcomingEventsSection from "../components/Home/UpcomingEventsSection";
import OrganizersSpotlightSection from "../components/Home/OrganizersSpotlightSection";
import PlatformStatsSection from "../components/Home/PlatformStatsSection";
import NewsletterSection from "../components/Home/NewsletterSection";

const Home = () => {
  return (
    <div className="scrollbar-hide bg-primary">
       <Navbar />
       <div className="min-h-screen bg-primary text-[#4A4A4A] font-sans font-poppins overflow-hidden scrollbar-hide" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
      {/* <FloatingBackground />    */}
      <HeroSection />
      <PlatformStatsSection />
      <EventCategoriesSection />
      <MostPopularEvents />
      <UpcomingEventsSection />
      <OrganizersSpotlightSection />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <CTASection />
      <Footer />
    </div>
    </div>
   
  );
};

export default Home;