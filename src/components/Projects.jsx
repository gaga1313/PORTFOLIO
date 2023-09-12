import React from "react";
import p1 from "../assets/portfolio/p1.png";
import p2 from "../assets/portfolio/p2.png";
import p3 from "../assets/portfolio/p3.png";
import p4 from "../assets/portfolio/p4.png";
import p5 from "../assets/portfolio/p5.png";
import p6 from "../assets/portfolio/p6.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: p1,
      Title:"Image Captioning ",
      Desc: "Created an encoder-decoder deep learning network for performing image captioning. Implemented encoder network using VGG16 convolution network-based architecture and decoder network using soft Attention model.",
    },
    {
      id: 2,
      src: p2,
      Title:"Road Semantic Segmentation",
      Desc:"The project aimed to create a convolution network-based road segmentation architecture using the research Fully Convolution Network for Semantic Segmentation."
    },
    {
      id: 3,
      src: p3,
      Title:"Scientific Paper Recommendation,",
      Desc:"Researched several benchmark paper recommendation systems and created a Concept-Citation directed graph with 18,000 research papers and with a training pipeline of GraphSage neural network to perform link prediction tasks."
    },
    {
      id: 4,
      src: p4,
      Title:"Traffic flow prediction",
      Desc:"The project aimed at creating an end-to-end data-driven traffic flow prediction application to reduce congestion within the designated area.During the research"
    },
    {
      id: 5,
      src: p5,
      Title:"Realtime social distancing alert system",
      Desc:"Successfully created a system capable of working at a frame rate of 22 fps and gave voice commands alerting the area where more than 50 individuals violated social distancing."
    },
    {
      id: 6,
      src: p6,
      Title:"Bone Abnormality Detection",
      Desc:"The project aimed at creating a computer vision system detecting anomalies in musculoskeletal radiographs. My role was to research current approaches and benchmarks and develop a deep learning-based interpretable system "
    },
  ];

  return (
    <div
      name="Projects"
      className="w-full h-full  bg-gradient-to-b from-gray-800 via-black to-black text-white"
    >
     <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div class="flex min-h-screen items-center justify-center bg-transparent">
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map((i) => (
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-full">
                  <img
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={i.src}
                    alt="research"
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-3xl font-bold text-white">
                    {i.Title}
                  </h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {i.Desc}
                  </p>
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
