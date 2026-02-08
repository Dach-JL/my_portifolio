import React from 'react';
import { Decoration } from './Decoration';

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-12 md:mt-20">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-8">
          Dedecho is a <span className="text-[#C778DD]">full-stack developer</span> specializing in <span className="text-[#C778DD]">modern web technologies</span>
        </h1>
        <p className="text-[#ABB2BF] mb-8 text-lg">
          Transforming ideas into interactive experiences using React, TypeScript, and cutting-edge web technologies
        </p>
        <button className="border border-[#C778DD] text-white px-6 py-2 font-medium hover:bg-[#C778DD]/10 transition-all">
          Contact me!!
        </button>
      </div>

      <div className="relative">
        <div className="relative z-10 w-72 h-72 md:w-[400px] md:h-[400px]">
          {/* Main Hero Image */}
          <img
            src="./photo_2026-01-26_23-50-22.jpg"
            alt="Elias"
            className="w-full h-full object-cover grayscale brightness-75 border-b-2 border-[#C778DD]"
          />

          {/* Decorative SVG Shapes around image */}
          <div className="absolute -top-10 -left-10 z-0">
             <svg width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
                <rect x="0.5" y="0.5" width="85" height="85" stroke="#ABB2BF"/>
                <rect x="55.5" y="55.5" width="85" height="85" stroke="#C778DD"/>
             </svg>
          </div>

          <div className="absolute bottom-10 right-0 z-20">
             <Decoration.Dots rows={5} cols={5} />
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-4 border border-[#ABB2BF] p-2 flex items-center gap-2 text-sm bg-[#282C33] relative z-20">
          <div className="w-4 h-4 bg-[#C778DD]"></div>
          <span className="text-[#ABB2BF]">Currently working on <span className="text-white">Portfolio</span></span>
        </div>
      </div>
    </div>
  );
};