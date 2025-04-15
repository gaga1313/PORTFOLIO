import React from "react";
import p1 from "../assets/portfolio/p1.png";
import p2 from "../assets/portfolio/p2.png";
import p3 from "../assets/portfolio/research-5.png";
import p4 from "../assets/portfolio/p4.png";
import p5 from "../assets/portfolio/p10.jpeg";
import p6 from "../assets/portfolio/p6.png";
import p7 from "../assets/portfolio/p7.png";
import p8 from "../assets/portfolio/p8.gif";
import p9 from "../assets/portfolio/p9.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: p7,
      title: "Visual Foundation Model",
      desc: "Explored how vision and language models struggle with real-world physics simulations and reasoning.",
      git: "https://github.com/gaga1313/vfm",
    },
    {
      id: 2,
      src: p8,
      title: "CUDA Programming",
      desc: "Developed highly optimized CUDA kernels for 2D/3D convolution using shared/constant memory and MPI.",
      git: "https://github.com/gaga1313/CudaConvolutionKernels",
    },
    {
      id: 3,
      src: p9,
      title: "LOCNET",
      desc: "Optimized ResNet50 jointly for object classification and depth estimation with increased shape bias.",
      git: "https://github.com/gaga1313/LOCNet",
    },
    {
      id: 4,
      src: p1,
      title: "Image Captioning",
      desc: "Built an encoder-decoder model with VGG16 and soft attention mechanism for image captioning.",
      git: "https://github.com/gaga1313/Image-Captioning",
    },
    {
      id: 5,
      src: p2,
      title: "Road Semantic Segmentation",
      desc: "Created a fully convolutional network (FCN) for semantic segmentation of road scenes.",
      git: "https://github.com/gaga1313/Road-Segmentation",
    },
    {
      id: 6,
      src: p3,
      title: "Scientific Paper Recommendation",
      desc: "Used GraphSAGE on concept-citation graph of 100K papers for link prediction and paper suggestion.",
      git: "https://github.com/gaga1313/Scientific-Paper-Recommendation",
    },
    {
      id: 7,
      src: p4,
      title: "Traffic Flow Prediction",
      desc: "Designed a data-driven application for traffic congestion forecasting using statistical models.",
      git: "https://github.com/gaga1313/Traffic-Flow-Prediction",
    },
    {
      id: 8,
      src: p5,
      title: "E-commerce Web App",
      desc: "Built a full-stack e-commerce app for renting scientific equipment across institutions.",
      git: "https://github.com/gaga1313/Re-Source",
    },
    {
      id: 9,
      src: p6,
      title: "Bone Abnormality Detection",
      desc: "Developed a CV model to detect musculoskeletal anomalies in X-rays with interpretable features.",
      git: "https://github.com/gaga1313/Abnormality-Detection-in-Musculoskeletal-Radiographs",
    },
  ];

  return (
    <section
      name="Projects"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block pb-1">
            Projects
          </h2>
          <p className="mt-4 text-gray-300">A collection of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {portfolios.map(({ id, src, title, desc, git }) => (
            <div
              key={id}
              className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition duration-300"
            >
              <img
                src={src}
                alt={title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-300">{desc}</p>
                <a
                  href={git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
