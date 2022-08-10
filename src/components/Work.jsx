import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import RealEstate from "../assets/realestate.jpg";
import WorkCard from "./WorkCard";
import Weblog from "../assets/weblog.jpg";
import FoodApp from "../assets/food-app.jpg";
import TravelApp from "../assets/travel-app.jpg";

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
        <div className="grid md:grid-cols-3 gap-4">
          <WorkCard
            image={Weblog}
            demoUrl="https://weblog-application.netlify.app/"
            codeUrl="https://github.com/babaei-mostafa/Weblog"
          />
          <WorkCard
            image={FoodApp}
            demoUrl="https://food-app-with-react-and-tailwind.netlify.app/"
            codeUrl="https://github.com/babaei-mostafa/food-app"
          />
          <WorkCard
            image={TravelApp}
            demoUrl="https://travel-website-with-react-and-tailwind.netlify.app/"
            codeUrl="https://github.com/babaei-mostafa/travel-website"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
