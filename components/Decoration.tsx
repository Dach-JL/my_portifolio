
import React from 'react';

const Dots: React.FC<{ rows: number; cols: number }> = ({ rows, cols }) => {
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 4px)` }}>
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div key={i} className="w-1 h-1 bg-[#ABB2BF] rounded-full"></div>
      ))}
    </div>
  );
};

export const Decoration = {
  Dots,
};
