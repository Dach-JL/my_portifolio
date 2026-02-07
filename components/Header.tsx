
import React from 'react';

export const Header: React.FC = () => {


  return (
    <header className="flex justify-between items-center py-8 bg-[#282C33] sticky top-0 z-50">
      <div className="flex items-center gap-2 cursor-pointer group">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
          <path d="M2 2H8V8H2V2Z" fill="#C778DD"/>
          <path d="M8 8H14V14H8V8Z" fill="#C778DD"/>
          <path d="M2 14V8H8V14H2Z" fill="#C778DD"/>
          <path d="M14 2V8H8V2H14Z" fill="#C778DD"/>
        </svg>
        <span className="font-bold text-white tracking-tight">Dedecho</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
        <a href="#home" className="hover:text-white transition-colors"><span className="text-[#C778DD]">#</span>home</a>
        <a href="#works" className="hover:text-white transition-colors"><span className="text-[#C778DD]">#</span>works</a>
        <a href="#about-me" className="hover:text-white transition-colors"><span className="text-[#C778DD]">#</span>about-me</a>
        <a href="#contacts" className="hover:text-white transition-colors"><span className="text-[#C778DD]">#</span>contacts</a>
        

      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21M3 6H21M3 18H21" stroke="#ABB2BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </header>
  );
};
