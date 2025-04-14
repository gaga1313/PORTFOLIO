import React from "react";
import vit from "../assets/portfolio/mu.jpg";
import ola from "../assets/portfolio/OLA.png";
import raga from "../assets/portfolio/ragai.jpeg";
import brown from "../assets/portfolio/carney2.jpg"
import aarki from "../assets/portfolio/aarki_logo.jpeg"

const Workexperincedata = [
  {
    id: 1,
    Position: "Machine Learning Engineer",
    Company: "Aarki Inc.",
    Startdate: "May 2024",
    enddate: "September 2024",
    Place: "San Francisco, CA, USA",
    Logo: aarki,
    Details: [
      "Developed exploration strategy to identify high-value purchasers, reducing 35% of wasted spend at real-time bidding.",
      "Optimized stable diffusion model for display ad generation, improving animated ad retention KPI by 10%.",
      "Gained insights into ML model deployment across ad-tech stages through collaboration with MLOps team."
    ]
  },
  {
    id: 2,
    Position: "Research Assistant",
    Company: "Craney Institute for Brain Science",
    Startdate: "September 2023",
    enddate: "Present",
    Place: "Brown University, USA",
    Logo: brown,
    Details: [
      <>
        Evaluated large-scale generative diffusion models for shape bias, content classification, and 3D reasoning —{" "}
        <a href="https://arxiv.org/abs/2406.04138" target="_blank" rel="noreferrer" className="text-teal-400 underline">ICLR 2025</a>
      </>,
      "Distributed training and optimization of vision transformer (ViT) for classifying extant leaf fossils into closest families.",
      <>
        Implemented model explainability pipeline revealing different strategies used by the model to classify fossils —{" "}
        <a href="https://serre-lab.github.io/prj_fossil_unknown/" target="_blank" rel="noreferrer" className="text-teal-400 underline">website</a>
      </>
    ]
  },  
  {
    id: 3,
    Position: "Undergraduate Research Internship",
    Company: "Vidyalankar Institute of Technology",
    Startdate: "Dec 2021",
    enddate: "Oct 2022",
    Place: "Mumbai, India",
    Logo: vit,
    Details: [
      "Developed Fetal Heart Rate Classification model detecting abnormalities in fetus’s breathing patterns using feature processing for non-linear dynamical systems.",
      "Achieved an f1-score of 93% by training and evaluating ML classifiers (SVM, Random Forest, XGBoost) on extracted features"
    ]
  },
  {
    id: 4,
    Position: "Computer Vision Research Intern",
    Company: "Raga AI",
    Startdate: "Jan 2022",
    enddate: "Apr 2022",
    Place: "Remote, India",
    Logo: raga,
    Details: [
      "Developed a GAN based video drift detection system, revealing aberrant changes in the predictions of vision models with an accuracy of 85%.",
      "Designed 10+ evaluation metrics for bias detection and data leakage, ensuring model reliability in production environments.",
      "Presented the new root cause analysis tool for the large-scale computer vision models to the stakeholders."
    ]
  },
  {
    id: 5,
    Position: "Research Engineer Intern",
    Company: "Ola Electric Mobility Pvt. Ltd.",
    Startdate: "Jul 2021",
    enddate: "Dec 2021",
    Place: "Bangalore, India",
    Logo: ola,
    Details: [
      "Developed a deep learning-based vehicle tire damage detection system, managing data pipelines, model training, and deployment, achieving 82% accuracy.",
      "Deployed a large-scale ML system in production, reducing vehicle maintenance costs by 60%."
    ]
  }
];

const Portfolio = () => {
  return (
    <div
      name="Work"
      className="w-full h-full bg-gradient-to-b from-gray-800 via-black to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto px-6 py-20">
        <div className="pb-12">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Work Experience
          </h2>
        </div>

        {Workexperincedata.map((job) => (
          <div key={job.id} className="mb-10 border-b border-gray-700 pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {job.Logo && (
                  <img src={job.Logo} alt={job.Company} className="w-12 h-12 object-contain" />
                )}
                <div>
                  <h3 className="text-xl font-semibold">{job.Position}</h3>
                  <p className="text-sm text-gray-300">{job.Company}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{job.Startdate} – {job.enddate}</p>
                <p className="text-sm text-gray-400">{job.Place}</p>
              </div>
            </div>

            <ul className="mt-4 list-disc list-inside space-y-1 text-gray-200">
              {job.Details.map((point, idx) => (
                point && <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
