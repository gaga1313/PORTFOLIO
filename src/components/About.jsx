import React from "react";
import HeroImage from "../assets/portfolio/heroImage.jpeg";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20 mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="md:hidden block ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-[95%]  md:hidden block "
          />
        </div>

        <br />

        <p className="text-xl my-5">
        Hi there! Thanks for visiting my portfolio!

I’m a Master in CS student<span className="font-extrabold"> @ Brown University </span>& an enthusiastic Computer Vision researcher immersed in the world of Autonomous System Perception and Planning. My area of interest lies in Few-shot object detection and tracking, Behaviour estimation, and Path Planning. I have solid fundamentals in probability, statistics, and linear algebra. With a rich background in advanced classification networks and attention models, I'm eagerly seeking opportunities to contribute as a Perception and Motion Planning Engineer intern within the industry. 

I am always open to collaborative research opportunities. Please feel free to reach out on LinkedIn or at <span className="font-extrabold">ggaonkar.work@gmail.com.</span>
        </p>
      </div>
    </div>
  );
};

export default About;
