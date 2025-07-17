import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const team = [
  {
    name: "Shubham Kumar",
    role: "Founder & Lead Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Aditi Sharma",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Backend Engineer",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Priya Singh",
    role: "Community Manager",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const About = () => (
  <>
    <Navbar />
    <div className="min-h-screen bg-primary text-primary font-poppins flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary">
        About Eventure
      </h1>
      <p className="text-lg md:text-xl text-secondary mb-10 text-center max-w-2xl">
        Empowering campus communities through seamless event discovery, management, and participation.
      </p>
      <div className="max-w-4xl w-full mb-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow p-8 border border-primary flex flex-col items-center">
            <svg className="w-10 h-10 text-[#7FC8A9] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
            <h2 className="text-2xl font-bold mb-2 text-primary">Our Mission</h2>
            <p className="text-gray-600 text-center">To connect students, organizers, and administrators, making campus life vibrant and accessible for all through technology and design.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 border border-primary flex flex-col items-center">
            <svg className="w-10 h-10 text-secondary mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 8v8" /></svg>
            <h2 className="text-2xl font-bold mb-2 text-primary">Our Vision</h2>
            <p className="text-gray-600 text-center">To be the leading platform for campus engagement, fostering growth, creativity, and collaboration in every institution.</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mb-16">
        <h3 className="text-2xl font-bold mb-6 text-secondary text-center">Meet the Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-[#E0E7EA]">
              <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#B6E2D3]" />
              <h4 className="font-semibold text-lg text-primary mb-1">{member.name}</h4>
              <p className="text-secondary text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-3xl mb-16">
        <h3 className="text-2xl font-bold mb-4 text-secondary text-center">Contact Us</h3>
        <div className="bg-white rounded-2xl shadow p-8 border border-[#E0E7EA] text-center">
          <p className="mb-2 text-gray-600">Have questions, feedback, or want to collaborate?</p>
          <a href="mailto:hello@Eventure.com" className="text-[#2CB67D] font-semibold hover:underline">hello@Eventure.com</a>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        Built with love by a passionate team of developers and designers.
      </div>
    </div>
    <Footer />
  </>
);

export default About; 