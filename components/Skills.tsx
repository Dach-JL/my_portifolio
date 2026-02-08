import React from 'react';
import { Decoration } from './Decoration';
import { 
  SiTypescript,
  SiPython,
  SiJavascript,
  SiSqlite,
  SiPostgresql,
  SiMongodb,
  SiVscodium,
  SiNeovim,
  SiLinux,
  SiFigma,
  SiGit,
  SiHtml5,
  SiCss3,
  SiSass,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiNestjs,
  SiFlask,
  SiExpress,
  SiRunkit,
  SiJinja,
  SiArchlinux
} from 'react-icons/si';

interface SkillIconProps {
  skill: string;
  size?: number;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, size = 24 }) => {
  // Define official brand colors for each technology
  const getBrandColor = (skillName: string) => {
    switch(skillName.toLowerCase()) {
      // Languages
      case 'typescript': return '#3178C6'; // Official TypeScript blue
      case 'python': return '#3776AB'; // Official Python blue
      case 'javascript': return '#F7DF1E'; // Official JavaScript yellow
      
      // Databases
      case 'sqlite': return '#003B57'; // Official SQLite blue
      case 'postgresql': return '#336791'; // Official PostgreSQL blue
      case 'mongo': return '#47A248'; // Official MongoDB green
      
      // Tools
      case 'vscode': return '#007ACC'; // Official VSCode blue
      case 'neovim': return '#57A143'; // Official Neovim green
      case 'linux': return '#FCC624'; // Official Linux orange
      case 'figma': return '#F24E1E'; // Official Figma red
      case 'xfce': return '#2284F2'; // XFCE blue
      case 'arch': return '#1793D1'; // Official Arch Linux cyan
      case 'git': return '#F05032'; // Official Git red
      case 'font awesome': return '#528DD7'; // Font Awesome blue
      
      // Other
      case 'html': return '#E34F26'; // Official HTML orange
      case 'css': return '#1572B6'; // Official CSS blue
      case 'ejs': return '#CB2027'; // EJS red (using red)
      case 'scss': return '#CC6699'; // Official Sass pink
      case 'rest': return '#FF6B00'; // Generic REST API orange
      case 'jinja': return '#B41717'; // Jinja red
      
      // Frameworks
      case 'react': return '#61DAFB'; // Official React blue
      case 'vue': return '#4FC08D'; // Official Vue green
      case 'next.js': return '#000000'; // Official Next.js black
      case 'nestjs': return '#E0234E'; // Official NestJS red
      case 'disnake': return '#5865F2'; // Discord.js purple (Discord color)
      case 'discord.js': return '#5865F2'; // Official Discord purple
      case 'flask': return '#000000'; // Official Flask black
      case 'express.js': return '#000000'; // Official Express black
      
      default: return '#ABB2BF'; // Default color
    }
  };

  const iconProps = { 
    size: size, 
    color: getBrandColor(skill),
    className: "hover:brightness-125 transition-all duration-200 cursor-pointer" 
  };
  
  switch(skill.toLowerCase()) {
    // Languages
    case 'typescript': return <SiTypescript {...iconProps} />;
    case 'python': return <SiPython {...iconProps} />;
    case 'javascript': return <SiJavascript {...iconProps} />;
    
    // Databases
    case 'sqlite': return <SiSqlite {...iconProps} />;
    case 'postgresql': return <SiPostgresql {...iconProps} />;
    case 'mongo': return <SiMongodb {...iconProps} />;
    
    // Tools
    case 'vscode': return <SiVscodium {...iconProps} />;
    case 'neovim': return <SiNeovim {...iconProps} />;
    case 'linux': return <SiLinux {...iconProps} />;
    case 'figma': return <SiFigma {...iconProps} />;
    case 'xfce': return <SiLinux {...iconProps} />; // Using Linux icon
    case 'arch': return <SiArchlinux {...iconProps} />;
    case 'git': return <SiGit {...iconProps} />;
    case 'font awesome': return <SiCss3 {...iconProps} />; // Using a similar icon
    
    // Other
    case 'html': return <SiHtml5 {...iconProps} />;
    case 'css': return <SiCss3 {...iconProps} />;
    case 'ejs': return <SiJavascript {...iconProps} />; // Using JS icon
    case 'scss': return <SiSass {...iconProps} />;
    case 'rest': return <SiRunkit {...iconProps} />; // Using Runkit as substitute
    case 'jinja': return <SiJinja {...iconProps} />;
    
    // Frameworks
    case 'react': return <SiReact {...iconProps} />;
    case 'vue': return <SiVuedotjs {...iconProps} />;
    case 'next.js': return <SiNextdotjs {...iconProps} />;
    case 'nestjs': return <SiNestjs {...iconProps} />;
    case 'disnake': return <SiPython {...iconProps} />; // Using Python icon
    case 'discord.js': return <SiJavascript {...iconProps} />; // Using JS icon
    case 'flask': return <SiFlask {...iconProps} />;
    case 'express.js': return <SiExpress {...iconProps} />;
    
    default: return <span className="text-xs text-[#ABB2BF]">{skill}</span>; // fallback to text
  }
};

interface SkillBoxProps {
  title: string;
  items: string[];
}

const SkillBox: React.FC<SkillBoxProps> = ({ title, items }) => (
  <div className="border border-[#ABB2BF] min-w-[150px]">
    <div className="border-b border-[#ABB2BF] p-2 font-semibold text-white">
      {title}
    </div>
    <div className="p-2 text-[#ABB2BF] flex flex-wrap gap-3 justify-center">
      {items.map((item, i) => (
        <div key={i} title={item} className="cursor-pointer hover:scale-110 transition-transform">
          <SkillIcon skill={item} size={32} />
        </div>
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