
import React from 'react';
import { Decoration } from './Decoration';

export const About: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl text-white font-medium font-mono"><span className="text-[#C778DD]">#</span>about-me</h2>
        <div className="h-[1px] bg-[#C778DD] flex-grow max-w-[326px]"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-[#ABB2BF] leading-relaxed">
          <p className="mb-6">Hello, i’m Dedecho Jemal!</p>
          <p className="mb-6">
           I am a dedicated software developer with experience in building full-stack applications using modern frameworks. 
          </p>
          <p className="mb-10">
            I focus on writing clean, maintainable code and creating efficient solutions. I’m motivated by problem-solving and continuous learning, and I enjoy working on projects that make an impact.
          </p>
          <button className="border border-[#C778DD] text-white px-6 py-2 hover:bg-[#C778DD]/10 transition-colors">
            Read more -{'>'}
          </button>
        </div>

        <div className="relative">
          <div className="relative z-10 w-72 md:w-80">
            <img
              src="/photo_2026-01-26_23-50-22.jpg"
              alt="Elias Profile"
              className="w-full grayscale border-b-2 border-[#C778DD]"
            />
            {/* Decorations */}
            <div className="absolute -top-10 left-[-20%] z-0">
               <Decoration.Dots rows={5} cols={5} />
            </div>
            <div className="absolute top-[40%] right-[-10%] z-0">
               <Decoration.Dots rows={4} cols={5} />
            </div>
             <div className="absolute bottom-[10%] left-[-25%] z-0">
                <Decoration.Dots rows={3} cols={4} />
            </div>
          </div>
          <div className="absolute bottom-0 left-[-40px] hidden lg:block">
              <div className="h-64 border-l border-[#ABB2BF]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
