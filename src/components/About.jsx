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

I m a dedicated computer science professional with a background in Machine Learning and Computer Vision, currently pursuing an MS in Computer Science at <span className="font-extrabold"> Brown University </span> with a 4.0 GPA. My experience includes working as a Machine Learning Engineer intern at Aarki, where I optimized ML models for ad-tech, and I am proficient in Python, C++, and parallel programming using MPI and CUDA. I am eager to apply my skills in designing and deploying algorithms while continuing to learn and grow in a collaborative environment.

I am always open to collaborative research opportunities. Please feel free to reach out on LinkedIn or at <span className="font-extrabold">ggaonkar.work@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default About;
