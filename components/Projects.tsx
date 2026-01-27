
import React from 'react';

interface ProjectCardProps {
  image: string;
  tech: string[];
  title: string;
  description: string;
  liveLink?: string;
  cachedLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, tech, title, description, liveLink, cachedLink }) => {
  return (
    <div className="border border-[#ABB2BF] flex flex-col group h-full">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="border-y border-[#ABB2BF] p-2 text-sm text-[#ABB2BF] font-mono">
        {tech.join(' ')}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-2xl text-white font-medium mb-4">{title}</h3>
        <p className="text-[#ABB2BF] mb-6 flex-grow">{description}</p>
        <div className="flex gap-4">
          {liveLink ? (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <button className="border border-[#C778DD] text-white px-4 py-1 hover:bg-[#C778DD]/10 transition-colors flex items-center gap-2">
                Live <span className="font-mono text-xs">{'<~>'}</span>
              </button>
            </a>
          ) : (
            <button className="border border-[#C778DD] text-white px-4 py-1 hover:bg-[#C778DD]/10 transition-colors flex items-center gap-2">
              Live <span className="font-mono text-xs">{'<~>'}</span>
            </button>
          )}
          {cachedLink && (
            <button className="border border-[#ABB2BF] text-[#ABB2BF] px-4 py-1 hover:text-white hover:border-white transition-colors">
              Cached ≥
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Clinic Booking',
      tech: ['React', 'TypeScript', 'Vite'],
      description: 'Medical Appointment Booking System',
      image: 'https://picsum.photos/400/300?random=4',
      liveLink: 'https://booking-system-ten-beige.vercel.app/'
    },
    {
      title: 'ChertNodes',
      tech: ['HTML', 'SCSS', 'Python', 'Flask'],
      description: 'Minecraft servers hosting',
      image: 'https://picsum.photos/400/300?random=1',
      cachedLink: '#'
    },
    {
      title: 'ProtectX',
      tech: ['React', 'Express', 'Discord.js', 'Node.js'],
      description: 'Discord anti-crash bot',
      image: 'https://picsum.photos/400/300?random=2'
    },
    {
      title: 'Kahoot Answers Viewer',
      tech: ['CSS', 'Express', 'Node.js'],
      description: 'Get answers to your kahoot quiz',
      image: 'https://picsum.photos/400/300?random=3'
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4 flex-grow">
          <h2 className="text-3xl text-white font-medium font-mono"><span className="text-[#C778DD]">#</span>projects</h2>
          <div className="h-[1px] bg-[#C778DD] hidden sm:block flex-grow max-w-[511px]"></div>
        </div>
        <a href="#" className="text-white hover:underline text-sm md:text-base">View all ~~{'>'}</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </div>
  );
};
