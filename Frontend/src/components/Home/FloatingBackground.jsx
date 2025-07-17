import React from "react";

const FloatingBackground = () => (
  <div className="fixed inset-0 pointer-events-none scrollbar-hide">
    <div className="absolute top-20 left-10 w-32 h-32 bg-[#42a5f5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
    <div className="absolute top-40 right-20 w-24 h-24 bg-[#64b5f6] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
    <div className="absolute bottom-40 left-20 w-28 h-28 bg-[#90caf9] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
  </div>
);

export default FloatingBackground; 