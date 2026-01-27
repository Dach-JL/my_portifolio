
import React from 'react';
import { Decoration } from './Decoration';

interface SkillBoxProps {
  title: string;
  items: string[];
}

const SkillBox: React.FC<SkillBoxProps> = ({ title, items }) => (
  <div className="border border-[#ABB2BF] min-w-[150px]">
    <div className="border-b border-[#ABB2BF] p-2 font-semibold text-white">
      {title}
    </div>
    <div className="p-2 text-[#ABB2BF] flex flex-wrap gap-2 text-sm">
      {items.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl text-white font-medium font-mono"><span className="text-[#C778DD]">#</span>skills</h2>
        <div className="h-[1px] bg-[#C778DD] flex-grow max-w-[239px]"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="relative flex-shrink-0 hidden lg:block w-1/3 min-h-[300px]">
            {/* Geometric decorations in background */}
            <div className="absolute top-0 left-0">
                <Decoration.Dots rows={5} cols={5} />
            </div>
            <div className="absolute top-20 right-10">
                 <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="85" height="85" stroke="#ABB2BF"/>
                 </svg>
            </div>
            <div className="absolute top-40 left-10">
                <svg width="113" height="63" viewBox="0 0 113 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="62" height="62" stroke="#C778DD"/>
                  <rect x="50.5" y="0.5" width="62" height="62" stroke="#C778DD"/>
                </svg>
            </div>
            <div className="absolute bottom-0 right-20">
                 <Decoration.Dots rows={5} cols={5} />
            </div>
        </div>

       <div className="flex flex-wrap gap-4 flex-grow justify-end">
  <SkillBox title="Languages" items={['TypeScript','Python', 'JavaScript']} />
  <SkillBox title="Databases" items={['SQLite', 'PostgreSQL', 'Mongo']} />
  <SkillBox title="Tools" items={['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome']} />
  <SkillBox title="Other" items={['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja']} />
  <SkillBox
    title="Frameworks"
    items={[
      'React',
      'Vue',
      'Next.js',
      'NestJS',
      'Disnake',
      'Discord.js',
      'Flask',
      'Express.js',
    ]}
  />
</div>

      </div>
    </div>
  );
};
