
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#ABB2BF] pt-8 mt-20">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H8V8H2V2Z" fill="#C778DD"/>
                <path d="M8 8H14V14H8V8Z" fill="#C778DD"/>
                <path d="M2 14V8H8V14H2Z" fill="#C778DD"/>
                <path d="M14 2V8H8V2H14Z" fill="#C778DD"/>
              </svg>
              <span className="font-bold text-white">Dedecho</span>
            </div>
            <span className="text-[#ABB2BF] text-sm">dedechojemal@gmail.com</span>
          </div>
          <p className="text-white text-sm">Web designer and front-end developer</p>
        </div>

        <div>
          <h4 className="text-2xl text-white font-medium mb-4">Media</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white text-[#ABB2BF] transition-colors">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4C9.37 4 4 9.37 4 16C4 21.3 7.43 25.8 12.21 27.39C12.81 27.5 13.03 27.13 13.03 26.81C13.03 26.52 13.02 25.75 13.01 24.81C9.68 25.54 8.97 23.21 8.97 23.21C8.42 21.82 7.63 21.45 7.63 21.45C6.54 20.71 7.71 20.73 7.71 20.73C8.91 20.81 9.55 21.96 9.55 21.96C10.62 23.79 12.36 23.26 13.04 22.96C13.15 22.18 13.46 21.65 13.81 21.35C11.15 21.05 8.35 20.02 8.35 15.44C8.35 14.13 8.82 13.06 9.59 12.22C9.46 11.91 9.05 10.69 9.7 9.04C9.7 9.04 10.71 8.72 13 10.27C13.96 10 14.98 9.87 16 9.87C17.02 9.87 18.04 10 19 10.27C21.29 8.72 22.3 9.04 22.3 9.04C22.95 10.69 22.54 11.91 22.42 12.22C23.19 13.06 23.65 14.13 23.65 15.44C23.65 20.03 20.85 21.05 18.18 21.34C18.61 21.71 19 22.45 19 23.59C19 25.22 18.99 26.54 18.99 26.81C18.99 27.13 19.21 27.51 19.81 27.39C24.57 25.8 28 21.3 28 16C28 9.37 22.63 4 16 4Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white text-[#ABB2BF] transition-colors">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4ZM21.78 20.59C21.78 20.59 20.79 21.78 16 21.78C11.21 21.78 10.22 20.59 10.22 20.59V11.41C10.22 11.41 11.21 10.22 16 10.22C20.79 10.22 21.78 11.41 21.78 11.41V20.59Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white text-[#ABB2BF] transition-colors">
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4C9.37 4 4 9.37 4 16C4 21.3 7.43 25.8 12.21 27.39C12.81 27.5 13.03 27.13 13.03 26.81C13.03 26.52 13.02 25.75 13.01 24.81C10.2 25.07 8.35 24.14 8.35 24.14C8.35 24.14 7.63 21.45 7.63 21.45" stroke="currentColor" strokeWidth="2"/>
               </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-[#ABB2BF] text-sm pb-8">
        © Copyright 2026. Made by Dedecho
      </div>
    </footer>
  );
};
