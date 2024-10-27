import React from "react";
import r1 from "../assets/portfolio/research-1.png";
import r2 from "../assets/portfolio/research-2.png";
import r3 from "../assets/portfolio/research-3.png";
import r4 from "../assets/portfolio/research-4.png";
import r5 from "../assets/portfolio/r5.png";
import r6 from "../assets/portfolio/r6.png";
const Portfolio = () => {
  const researchdata=[
    {
      id:1,
      src:r6,
      Title:"The 3D-PC: a benchmark for visual perspective taking in humans and machines",
      detail:"ICLR 2025 (pending)",
      link:"https://arxiv.org/abs/2406.04138"
    },
    {
      id:2,
      src:r2,
      Title:"Swift Medical Report Analysis using Computer Vision (SMRA-CV)",
      detail:"published in the International Research Journal of Engineering and Technology (IRJET)",
      link:"https://www.researchgate.net/publication/354114908_Swift_Medical_Report_Analysis_using_Computer_Vision_SMRA-CV"
    },
    {
      id:3,
      src:r1,
      Title:"Gradient Boosting Approach for Traffic Flow Prediction using CatBoost",
      detail:"published in the IEEE International Conference on Advances in Computing, Communication, and Control",
      link:"https://ieeexplore.ieee.org/document/9697133"
    },
    {
      id:4,
      src:r3,
      Title:"Education in AI Era: A Novel Approach to Enhance Learning and Development",
      detail:"” published in the International Journal of Science Engineering and Technology (IJSET)",
      link:"https://www.researchgate.net/publication/361932446_Education_in_AI_Era_A_Novel_Approach_to_Enhance_Learning_and_Development"
    },
    {
      id:5,
      src:r4,
      Title:"“Scientific Paper Recommendation” ",
      detail:"Paper “Scientific Paper Recommendation” published in IEEE International Conference for Convergence in Technology (I2CT)",
      link:"https://ieeexplore.ieee.org/document/10126196"
    },
    {
      id:6,
      src:r5,
      Title:"Concept-Citation Directed Graph Based Scientific Paper Recommendation - CCSPR",
      detail:"Under Review",
      link:" "
    },
    {
      id:7,
      src:r1,
      Title:"A Hybrid Method for Fetal Heart Rate Classification,",
      detail:"- (published) Indian patent Application No. 20221064091 - Date of Publication: November 18, 2022.",
      link:" "
    }
  ]
  return (
    <div
      name="Research"
      className="w-full h-full  bg-gradient-to-b from-black  to-gray-800 text-white"
    >
       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full py-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Research Papers & Patents 
          </p>
        </div>

         <section className="w-full flex flex-col justify-around bg-transparent">
        {researchdata.map((i)=>(
           <div class="group m-5 relative  overflow-hidden rounded-lg border-4 border-gray-800 hover:cursor-pointer">
           <img src={i.src} class="group-hover:scale-10 w-full " alt="research" />
           <div class="absolute bottom-0 left-0 box-border w-full bg-gray-800/60 transition-all duration-300  group-hover:h-full flex flex-col ">
             <h1 class="text-center text-2xl font-bold opacity-100 text-white m-10">{i.Title}</h1>
             <p class="hidden text-center group-hover:visible group-hover:block text-xl font-extrabold">{i.detail}
              </p>
              <a href={i.link} className="bg-gray-900 text-white font-semibold p-2 rounded-lg hidden mx-auto my-10 group-hover:visible group-hover:block">See More</a> 
           </div>
         </div>
        ))}
         </section>

      </div>
    </div>
  );
};

export default Portfolio;
