import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLink, FaCheckCircle, FaChartBar } from "react-icons/fa";

const Leetcode = () => {
  const username = "gaga1313"; // Replace with your Leetcode username
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);
        setStats(res.data);
      } catch (err) {
        console.error("Failed to fetch Leetcode stats", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div
      name="Leetcode"
      className="w-full py-24 px-6 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold inline-block border-b-4 border-teal-500 pb-2">
            Leetcode Journey
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            I don’t solve problems to compete — I solve them because I love the rhythm of thinking, learning, and growing.
          </p>
        </div>

        {/* Content Layout */}
        {stats ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Stats Box */}
            <div className="w-full md:w-1/2 space-y-6 text-lg">
              <div className="grid grid-cols-2 gap-5 text-gray-300">
                <p>
                  <FaCheckCircle className="inline text-teal-400 mr-2" />
                  <span className="font-semibold text-teal-300">Total Solved:</span> {stats.totalSolved}
                </p>
                <p>
                  <FaChartBar className="inline text-teal-400 mr-2" />
                  <span className="font-semibold text-teal-300">Ranking:</span> #{stats.ranking}
                </p>
                <p>🥇 <span className="text-teal-300 font-medium">Easy:</span> {stats.easySolved}</p>
                <p>🥈 <span className="text-teal-300 font-medium">Medium:</span> {stats.mediumSolved}</p>
                <p>🥉 <span className="text-teal-300 font-medium">Hard:</span> {stats.hardSolved}</p>
                <p>
                  📈 <span className="text-teal-300 font-medium">Acceptance:</span> {stats.acceptanceRate}%
                </p>
              </div>

              <a
                href={`https://leetcode.com/${username}/`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-xl shadow-md transition"
              >
                <FaLink />
                View Profile
              </a>
            </div>

            {/* Submission Heatmap */}
            <div className="w-full md:w-1/2">
              <img
                src={`https://leetcard.jacoblin.cool/${username}?theme=dark&ext=heatmap`}
                alt="Leetcode Heatmap"
                className="rounded-xl shadow-lg w-full max-w-xl mx-auto"
              />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg">Fetching Leetcode data...</p>
        )}
      </div>
    </div>
  );
};

export default Leetcode;
