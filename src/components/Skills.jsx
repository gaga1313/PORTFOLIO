import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
   
      title: "Keras",
      style: "shadow-blue-600",
    },
    {
      id: 2,
     
      title: "Pytorch",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      
      title: "Sklearn",
      style: "shadow-[#97ABC9]",
    },
    {
      id: 4,
     
      title: "Deep Graph Library",
      style: "shadow-green-600",
    },
    {
      id: 5,
      
      title: "Matlab",
      style: "shadow-white",
    },
    {
      id: 6,
  
      title: "OpenAI Gym",
      style: "shadow-[#26522C]",
    },
    {
      id: 7,
   
      title: "Python",
      style: "shadow-[#0B821B]",
    },
    {
      id: 8,
     
      title: "PostGress SQL",
      style: "shadow-orange-600",
    },
    {
      id: 9,
      
      title: "MongoDB",
      style: "shadow-red-400",
    },
    {
      id:10,
      title:"Django",
      style: "shadow-[#0B821B]",
    },
    {
      id: 11,
      
      title: "Flask",
      style: "shadow-[#ABC24D]",
    },
    {
      id:12,
      title:"C-Programming",
      style: "shadow-white",
    },
    {
      id: 13,
      
      title: "Windows",
      style: "shadow-blue-400",
    },  
     {
      id: 14,
      title: "Linux",
      style: "shadow-gray-400",
    },    
    {
      id:15,
      title:"GitHub",
      style: "shadow-[#97ABC9]",
    }
 
  ];

  return (
    <div
      name="Skills"
      className="w-full h-full  bg-gradient-to-b from-black  to-gray-800 text-white"
    >
     <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold md:border-b-4 border-gray-500 p-2 inline">
            TECHNOLOGIES AND SKILLS
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <p className="mt-4 text-lg font-semiblod">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
