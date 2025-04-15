import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20 mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl my-5">
        I'm a CS Master’s graduate from Brown University with a strong research background in machine learning, computer vision, and large-scale deep learning model optimization. My research, published at venues like ICLR, focused on bridging the gap between human perception and state of the art computer vision models. With over two years of experience as an ML and Research Engineer at top tech companies, I’m passionate about building impactful AI systems and am actively seeking opportunities in applied ML, AI research, or engineering roles. Please feel free to reach out on LinkedIn or at <span className="font-extrabold">ggaonkar.work@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default About;
