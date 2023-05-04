import React from "react";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import TypeScript from "../assets/typescript.png";
import ReactJS from "../assets/react.png";
import TaiwindCSS from "../assets/tailwind.png";
import NextJS from "../assets/nextjs.png";
import MaterialUI from "../assets/materialUI.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 w-full h-full flex flex-col justify-center">
        <div className="w-full px-12">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        {/* Container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="" />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TypeScript} alt="" />
            <p className="my-4">TypeScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactJS} alt="" />
            <p className="my-4">React JS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TaiwindCSS} alt="" />
            <p className="my-4">Taiwind CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NextJS} alt="" />
            <p className="my-4">NextJS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MaterialUI} alt="" />
            <p className="my-4">MaterialUI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
