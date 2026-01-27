
import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col items-center fixed left-4 top-0 z-50">
      <div className="h-48 w-[1px] bg-[#ABB2BF]"></div>
      <div className="flex flex-col gap-4 my-4">
        <a href="#" className="text-[#ABB2BF] hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.47 2 2 6.47 2 12C2 17 5.3 21.2 9.8 22.7C10.3 22.8 10.5 22.5 10.5 22.2C10.5 22 10.5 21.3 10.5 20.4C7.3 21.1 6.6 19.1 6.6 19.1C6.1 17.7 5.3 17.3 5.3 17.3C4.2 16.6 5.4 16.6 5.4 16.6C6.6 16.7 7.2 17.8 7.2 17.8C8.3 19.6 10 19.1 10.7 18.8C10.8 18 11.1 17.5 11.5 17.1C8.9 16.8 6.2 15.8 6.2 11.2C6.2 9.9 6.7 8.8 7.5 8C7.4 7.7 7 6.5 7.6 4.9C7.6 4.9 8.6 4.6 10.9 6.1C11.8 5.8 12.9 5.7 13.9 5.7C14.9 5.7 16 5.8 16.9 6.1C19.2 4.6 20.2 4.9 20.2 4.9C20.8 6.5 20.4 7.7 20.3 8C21.1 8.8 21.6 9.9 21.6 11.2C21.6 15.8 18.9 16.8 16.3 17.1C16.7 17.5 17.1 18.2 17.1 19.3C17.1 20.9 17.1 22.2 17.1 22.5C17.1 22.8 17.3 23.2 17.8 23.1C22.3 21.6 25.6 17.4 25.6 12.4C25.6 6.47 21.1 2 15.6 2H12Z" fill="currentColor"/>
          </svg>
        </a>
        <a href="#" className="text-[#ABB2BF] hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </a>
        <a href="#" className="text-[#ABB2BF] hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </a>
      </div>
    </div>
  );
};
