import React from "react";
import TypeWriter from "../components/Typewriter";
import HeroImage from "../assets/portfolio/gaurav.jpeg";
import { FaGithub, FaLinkedin, FaGraduationCap } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import mu from "../assets/portfolio/mu.jpg";
import OLA from "../assets/portfolio/OLA.png";
import Brown_University_Logo_full from "../assets/portfolio/Brown_University_Logo_full.png";
import Stealth from "../assets/portfolio/ragai.jpeg";
import carney from "../assets/portfolio/carney2.jpg";
import aarki from "../assets/portfolio/aarki_logo.jpeg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const University = [
  { id: 1, src: aarki },
  { id: 2, src: Brown_University_Logo_full },
  { id: 3, src: carney },
  { id: 4, src: mu },
  { id: 5, src: OLA },
  { id: 6, src: Stealth },
];

const Home = () => {
  const typeWriter = ["Machine Learning & Computer Vision Engineer"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      name="Home"
      className="min-h-screen w-full bg-gradient-to-b from-white via-white to-gray-800 flex flex-col justify-between overflow-hidden pt-20"
    >
      {/* Hero Section */}
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-6rem)]">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4">
          <h2 className="text-2xl text-gray-800 font-semibold">Hi! 👋</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-tight">
            I'm Gaurav
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl">
            <TypeWriter data={typeWriter} />
          </p>

          {/* Resume + Icons */}
          <div className="flex flex-wrap justify-center md:justify-start mt-6 gap-4">
            <a
              href="https://drive.google.com/file/d/1s8flZhFxkF1_f8ZW81_vAmw-YhtzSEW6/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-b from-green-500 to-green-300 px-4 py-2 text-lg rounded-xl hover:scale-105 transition"
            >
              Resume
            </a>

            {/* Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/gaurav-gaonkar-38481818b/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={25} className="text-gray-700 hover:text-green-500 transition" />
              </a>
              <a
                href="https://github.com/gaga1313"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={25} className="text-gray-700 hover:text-green-500 transition" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=ox1pP3EAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <FaGraduationCap size={25} className="text-gray-700 hover:text-green-500 transition" />
              </a>
              <Link to="Contact" smooth duration={500}>
                <HiOutlineMail size={25} className="text-gray-700 hover:text-green-500 transition cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mb-10 md:mb-0 md:ml-16 mt-10 md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-xl"
          />
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full px-4 py-10 md:px-20">
        <h2 className="text-center text-xl text-gray-700 font-semibold mb-6">
          Affiliations & Collaborations
        </h2>
        <Slider {...settings}>
          {University.map(({ id, src }) => (
            <div key={id} className="px-4 flex justify-center items-center">
              <img
                src={src}
                alt={`logo-${id}`}
                className="h-24 w-auto object-contain mx-auto transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
