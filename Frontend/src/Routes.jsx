import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import EventList from "./Pages/EventList";
import StudentDashboard from "./Pages/StudentDashboard";
import OrganizerDashboard from "./Pages/OrganizerDashboard";
import MyEvents from "./Pages/MyEvents";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AdminDashboard from "./Pages/AdminDashboard";
import CreateEvent from "./Pages/CreateEvent";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/events" element={<EventList />} />
    <Route path="/dashboard" element={<StudentDashboard />} />
    <Route path="/organizer" element={<OrganizerDashboard />} />
    <Route path="/myevents" element={<MyEvents />} />
    <Route path="/features" element={<Features />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/create-event" element={<CreateEvent />} />
  </Routes>
);

export default AppRoutes; 