
import React from 'react';

export const Quote: React.FC = () => {
  return (
    <div className="mt-32 max-w-3xl mx-auto relative group">
      <div className="border border-[#ABB2BF] p-8 text-2xl font-medium text-white text-center relative">
        {/* Quote Icons */}
        <div className="absolute -top-4 left-6 bg-[#282C33] px-2 text-[#ABB2BF]">
           <svg width="42" height="29" viewBox="0 0 42 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9231 0V11.2308H0V29H18.0769V11.2308H9.03846L12.9231 0ZM36.8462 0V11.2308H23.9231V29H42V11.2308H32.9615L36.8462 0Z" fill="#ABB2BF"/>
           </svg>s
        </div>
        <p className="font-mono">With great power comes great electricity bill!</p>
        
        <div className="absolute -bottom-4 right-10 bg-[#282C33] px-2 text-[#ABB2BF]">
           <svg width="42" height="29" viewBox="0 0 42 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.0769 29V17.7692H42V0H23.9231V17.7692H32.9615L29.0769 29ZM5.15385 29V17.7692H18.0769V0H0V17.7692H9.03846L5.15385 29Z" fill="#ABB2BF"/>
           </svg>
        </div>
      </div>
      
      <div className="flex justify-end mt-[-1px]">
        <div className="border border-[#ABB2BF] p-4 text-xl text-white font-mono">
          - Dr. Who
        </div>
      </div>

      {/* Background Frame decoration */}
      <div className="absolute -right-20 top-0 hidden lg:block">
          <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="90" height="90" stroke="#ABB2BF"/>
          </svg>
      </div>
    </div>
  );
};
