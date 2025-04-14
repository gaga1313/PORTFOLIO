import React from "react";

const skills = {
  "Programming Languages": [
    "Python", "C++", "SQL", "JAX", "TensorFlow", "PyTorch", "Spark", "OpenMP", "MPI", "Cuda"
  ],
  "Machine Learning": [
    "Supervised Learning", "Data Science", "RLHF", "LLMs", "Multimodal Transformers", "Diffusion Models", "Probability", "Statistics"
  ],
  "Systems Infrastructure": [
    "Distributed Training", "Inference Optimization", "AWS", "Linux"
  ],
  "Web Development": [
    "Django", "Flask", "ReactJS", "RDBMS", "Agile Development", "HTML", "CSS", "Git"
  ],
  "Databases": [
    "MySQL", "PostgreSQL", "Kafka", "Redash", "ClickHouse"
  ]
};

const Skills = () => {
  return (
    <div
      name="Skills"
      className="w-full min-h-screen px-6 py-24 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold inline-block border-b-4 border-teal-500 pb-2">
            Skills & Technologies
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Tools I’ve mastered over time—across research, engineering, and product-building.
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(skills).map(([category, tools], idx) => (
            <div key={idx}>
              <h2 className="text-2xl md:text-3xl font-bold text-teal-400 mb-6 tracking-tight">
                {category}
              </h2>
              <div className="flex flex-wrap gap-4">
                {tools.map((skill, i) => (
                  <div
                    key={i}
                    className="px-5 py-2 bg-gray-800/70 text-white rounded-full border border-teal-600 shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 text-sm sm:text-base"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
