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
      className="h-full w-full bg-gradient-to-b from-white via-white to-gray-800 flex flex-col justify-around overflow-hidden"
    >
      {/* Top Hero Section */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center md:mt-5 mt-5 h-full">
          <h2 className="text-2xl text-gray-800 font-semibold mt-8">Hi! 👋</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black">I'm Gaurav</h1>
          <p className="text-gray-600 text-xl mt-4">
            <TypeWriter data={typeWriter} />
          </p>

          <div className="flex flex-row my-10 md:my-0">
            <p className="text-white bg-gradient-to-b from-green-500 to-green-300 p-2 text-xl hover:scale-y-110 duration-300 rounded-xl my-8">
              <a href="https://drive.google.com/file/d/1s8flZhFxkF1_f8ZW81_vAmw-YhtzSEW6/view" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </p>
            <div className="flex flex-row justify-between p-2 mx-6">
              <a href="https://www.linkedin.com/in/gaurav-gaonkar-38481818b/" target="_blank" rel="noopener noreferrer">
                <p className="mx-2 bg-slate-300 p-2 rounded-2xl hover:scale-90 duration-300 my-6">
                  <FaLinkedin size={25} />
                </p>
              </a>
              <a href="https://github.com/gaga1313" target="_blank" rel="noopener noreferrer">
                <p className="mx-2 bg-slate-300 p-2 rounded-2xl hover:scale-90 duration-300 my-6">
                  <FaGithub size={25} />
                </p>
              </a>
              <a href="https://scholar.google.com/citations?user=ox1pP3EAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <p className="mx-2 bg-slate-300 p-2 rounded-2xl hover:scale-90 duration-300 my-6">
                  <FaGraduationCap size={25} />
                </p>
              </a>
              <Link to="Contact" smooth duration={500}>
                <p className="mx-2 bg-slate-300 p-2 rounded-2xl hover:scale-90 duration-300 my-6">
                  <HiOutlineMail size={25} />
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="ml-20 mr-10 mt-5 p-20 hidden md:block">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl h-[40%] mx-10 w-2/3 mt-20 rounded-full hidden md:block md:w-full shadow-lg border-white"
          />
        </div>
      </div>

      {/* Affiliations Carousel */}
      <h2 className="text-center text-xl text-gray-700 font-semibold mt-10 mb-4">
        Affiliations & Collaborations
      </h2>
      <div className="w-full px-4 pb-12 md:px-20">
        <Slider {...settings}>
          {University.map(({ id, src }) => (
            <div key={id} className="px-4 flex justify-center items-center">
              <img
                src={src}
                alt={`logo-${id}`}
                className="h-32 w-auto object-contain mx-auto transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
