import React from "react";
import WorkCard from "./WorkCard";
import { works } from "../constants/works";

const Work = () => {
  return (
    <div name="work" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-[140px] md:pt-1 text-gray-300">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {works &&
            works.length > 0 &&
            works.map((work, index) => (
              <WorkCard
                key={index}
                image={work.image}
                demoUrl={work.demo}
                codeUrl={work.code}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
