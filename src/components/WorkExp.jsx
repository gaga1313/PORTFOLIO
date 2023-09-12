import React from "react";
const Workexperincedata= [
  {
    Position:"Research Assistant",
    Company:"Craney Institute for Brain Science" ,
    Startdate:"September 2023", enddate:"Present", 
    Place:"Brown University, USA",
    WorkDetail1:"Working on research alongside Dr. Thomas Serre and Drew Linsley, focusing on neural computations for harmonizing current Deep learning architectures with underlying visual perception.",
    WorkDetail2:" ",
    WorkDetail3:" ",
    id:1
  },
  {
    Position:"Undergraduate Research Internship ",Company:"Vidyalankar Institute of Technology, Guide: Professor Akhil Masurkar" ,Startdate:"Dec 2021", enddate:" Oct 2022", Place:"Mumbai, India",
    WorkDetail1:"Led AI/ML implementation part of the research focused on classifying fetal health using audio-based data from electronic stethoscopes.",
    WorkDetail2:"Used various feature extraction techniques such as Beats per minute, Recurrence Quantization analysis, 29 Statisticalfeatures (16 Time domain and 13 frequency domain) and chroma vector to extract data from digital stethoscope signals.",
    WorkDetail3:"Implemented signal processing techniques, including Recurrent Quantification Analysis and Spectral Analysis on audio data, that performed with a test accuracy of 93%.",
    id:2
  },
  {
    Position:"Computer Vision Research Intern",
    Company:"Raga AI" ,
    Startdate:"January 2022", enddate:"April 2022", 
    Place:"Remote,India",
    WorkDetail1:"Implemented Dual Adversarial GAN network for data drift detection, identifying the need to retrain deep learning classifiers.",
    WorkDetail2:"Developed metrics for Root Cause Analysis of an object detection task ",
    WorkDetail3:" ",
    id:3
},
{
  Position:"Research Engineer Intern at Ola Electric Mobility Pvt. Ltd.",
  Company:"Computer Vision Researcher in Ola Electric AI Team " ,Startdate:"July 2021", enddate:"Dec 2021",
  Place:"Banglore,India",
  WorkDetail1:"Developed a classical computer vision-based approach for tire damage detection on vehicles, with an overall accuracy of 72%.",
  WorkDetail2:"Led the research by categorizing damages found in vehicle tires, leading data collection drives, and designing an approach for working under the constraint of a very limited amount of data.",
  WorkDetail3:" ",
  id:4
}   ];
const Portfolio = () => {
  return (
    <div
      name="Work"
      className="w-full h-full bg-gradient-to-b from-gray-800 via-black to-black text-white"
    >
       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full py-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-500">
            Work Experience
          </p>
        </div>
        {Workexperincedata.map((i) => (
        <div className='flex flex-col border-b-2 pb-4 m-4'>

          <div className='flex flex-row    justify-between  '>
          <div className='flex flex-col m-2'>
            <span className='font-bold text-lg'>{i.Position}</span>
            <span className='font-sm text-m '>{i.Company}</span>
          </div>
          <div className='flex flex-col'>
            <span className='font-bold'>{i.Startdate}-{i.enddate}</span>
            <span className='font-extralight'>{i.Place}</span>
          </div>
          </div>

          <div className='flex flex-col'>
          <span className='text-semibold p-1'><span></span>{i.WorkDetail1}</span>
          <span className='text-semibold p-1'><span></span>{i.WorkDetail2}</span>
          
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Portfolio;
