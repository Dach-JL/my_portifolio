
import React from 'react';

export const Contacts: React.FC = () => {
  return (
    <div className="pb-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl text-white font-medium font-mono"><span className="text-[#C778DD]">#</span>contacts</h2>
        <div className="h-[1px] bg-[#C778DD] flex-grow max-w-[127px]"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-lg text-[#ABB2BF]">
          <p>
            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
          </p>
        </div>

        <div className="border border-[#ABB2BF] p-4 min-w-[200px]">
          <h4 className="font-semibold text-white mb-4">Message me here</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 group cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-white">
                <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#ABB2BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 7L12 13L21 7" stroke="#ABB2BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm group-hover:text-white transition-colors">!Dedecho Jemal</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-white">
                <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#ABB2BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 7L12 13L21 7" stroke="#ABB2BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm group-hover:text-white transition-colors">dedechojemal@gmail.com </span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-white">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#ABB2BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" rx="1" stroke="#ABB2BF" strokeWidth="2"/>
                <circle cx="4" cy="4" r="2" stroke="#ABB2BF" strokeWidth="2"/>
              </svg>
              <a href="https://www.linkedin.com/in/dedecho-jemal-2416683a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-sm group-hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
