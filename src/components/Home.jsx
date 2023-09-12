import React from "react";
import TypeWriter from "../components/Typewriter";
import HeroImage from "../assets/portfolio/heroImage.jpeg"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import mu from "../assets/portfolio/mu.jpg";
import OLA from "../assets/portfolio/OLA.png";
import Brown_University_Logo_full from "../assets/portfolio/Brown_University_Logo_full.png";
import Stealth from "../assets/portfolio/Stealth.png";
import CV from "../assets/portfolio/Gaurav_Gaonkar_CV.pdf"
import carney from "../assets/portfolio/carney2.jpg"

 const University=[   
    {
      id: 1,
      src: Brown_University_Logo_full,
    },
    {
      id: 2,
      src: carney,
    },
    {
      id: 3,
      src: mu,
    },
    {
      id: 4,
      src: OLA,
    },
    {
      id: 5,
      src: Stealth,
    },]

const Home = () => {
  const typeWriter = ["Deep Learning Researcher", "Perception Engineer", "Reinforcement Learning Engineer"];

  return (
    <div
      name="Home"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 flex flex-col justify-around overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center  justify-center h-full  md:flex-row">
        <div className="flex flex-col justify-center md:mt-5 mt-5  h-full ">
        <h2 className="md:text-2xl mt-20 my-5 font-bold text-white md:mt-0 md:my-5">
            Hey!
          </h2>
          <h2 className="md:text-3xl text-5xl font-bold text-white">
          I'm Gaurav Gaonkar
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          <span className="text-gray-500 text-2xl md:text-2xl font-bold py-2 max-w-full md:max-w-md mt-10 ">
          {' '} <span className=" text-3xl md:text-2xl"><TypeWriter  data={typeWriter} />
             </span></span>
          </p>
 
          <div className="flex flex-row my-10 md:my-0">
          <p className="text-white bg-gradient-to-b from-green-500 to-green-300 p-2 md:p-2 sm:mx-[-1] text-xl hover:scale-y-110 duration-300 hover:text-xl  
        hover:text-white rounded-xl my-8 ">
            <a href={CV} download>Resume</a> 
         </p>
         <div className=" flex flex-row justify-between p-2 mx-6 ">
              <p className="mx-2 bg-slate-300 p-2 rounded-2xl hover:scale-90 duration-300 my-6">
                <a href="https://www.linkedin.com/in/gaurav-gaonkar-38481818b/" > <> <FaLinkedin size={25} />
        </></a>
        </p>
        <p className="mx-2  bg-slate-300 p-2 rounded-2xl hover:scale-90 duration-300 my-6" >
                <a href="https://github.com/gaga1313" > <> <FaGithub size={25} />
        </></a>
        </p>
        <p className="mx-2  bg-slate-300 p-2 rounded-2xl hover:scale-90 duration-300 my-6" >
        <Link to="Contact" smooth duration={500}>
        <HiOutlineMail size={25} />
            </Link>
        </p>
            </div>
          </div>
        </div>

        <div className="ml-20 mr-10 mt-5 p-20   hidden md:block">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl h-[40%] mx-10 w-2/3 mt-20 hidden md:block  md:w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-0 md:gap-4  bg-white md:p-5 p-5 mb-5">
          {University.map(({ id, src }) => (
            <div key={id} className="max-h-32 m-3">
              <img
                src={src}
                alt="uni"
                className="rounded-md duration-200 max-h-32 hover:scale-105 overflow-hidden mx-auto"
              />
            
            </div>
          ))}
        </div>
    </div>
  );
};

export default Home;
