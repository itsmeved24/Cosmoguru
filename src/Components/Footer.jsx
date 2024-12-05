import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vedank-vansia-73167b270" },
    { name: "Github", url: "https://github.com/itsmeved24" },
    { name: "Behance", url: "https://www.behance.net/vedankvansia" },
    { name: "AboutMe", url: "https://drive.google.com/drive/folders/1AyRnwUjyJU2fb_ScKQ36ehasBLz5wBaS?usp=drive_link" },
  ];

  return (
    <div className="absolute bottom-6 left-0 w-full flex justify-center">
      <div
        className="flex space-x-6 py-2 px-4 rounded-full shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)", 
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)", 
        }}
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            <motion.div
              layoutId="highlight"
              className={`absolute inset-0 rounded-full ${
                activeIndex === index ? "bg-zinc-400" : "bg-zinc-600"
              }`}
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span
              className={`relative z-10 px-4 py-2 text-sm ${
                activeIndex === index ? "text-zinc-800" : "text-white"
              }`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
