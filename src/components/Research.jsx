import React from "react";
import r1 from "../assets/portfolio/research-1.png";
import r2 from "../assets/portfolio/research-2.png";
import r3 from "../assets/portfolio/research-3.png";
import r4 from "../assets/portfolio/research-4.png";
import r6 from "../assets/portfolio/r6.png";

const Research = () => {
  const researchData = [
    {
      id: 1,
      src: r6,
      title: "The 3D-PC: a benchmark for visual perspective taking in humans and machines",
      detail: "ICLR 2025",
      link: "https://arxiv.org/abs/2406.04138",
    },
    {
      id: 2,
      src: r2,
      title: "Swift Medical Report Analysis using Computer Vision (SMRA-CV)",
      detail: "International Research Journal of Engineering and Technology (IRJET)",
      link: "https://www.researchgate.net/publication/354114908_Swift_Medical_Report_Analysis_using_Computer_Vision_SMRA-CV",
    },
    {
      id: 3,
      src: r1,
      title: "Gradient Boosting Approach for Traffic Flow Prediction using CatBoost",
      detail: "IEEE International Conference on Advances in Computing, Communication, and Control",
      link: "https://ieeexplore.ieee.org/document/9697133",
    },
    {
      id: 4,
      src: r3,
      title: "Education in AI Era: A Novel Approach to Enhance Learning and Development",
      detail: "International Journal of Science Engineering and Technology (IJSET)",
      link: "https://www.researchgate.net/publication/361932446_Education_in_AI_Era_A_Novel_Approach_to_Enhance_Learning_and_Development",
    },
    {
      id: 5,
      src: r4,
      title: "Scientific Paper Recommendation",
      detail: "IEEE International Conference for Convergence in Technology (I2CT)",
      link: "https://ieeexplore.ieee.org/document/10126196",
    },
  ];

  return (
    <div
      name="Research"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 py-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Research Papers & Patents
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {researchData.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm mt-3">{item.detail}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md font-medium"
                >
                  See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
