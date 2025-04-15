import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Research" },
    { id: 4, link: "Work" },
    { id: 5, link: "Projects" },
    { id: 6, link: "Skills" },
    { id: 7, link: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20 px-6">
        <h1 className="text-3xl md:text-4xl font-signature text-black font-bold tracking-wide">
          Gaurav Gaonkar
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-black font-medium text-lg cursor-pointer relative group"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-black md:hidden z-50"
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {nav && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center space-y-8 transition-all duration-300">
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              onClick={() => setNav(false)}
              className="text-black text-3xl font-semibold hover:text-green-600 transition"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
