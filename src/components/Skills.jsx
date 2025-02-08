import React from 'react';
import { FaReact, FaPython, FaTools, FaGithub, FaDocker, FaCode } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiJavascript, SiPostgresql, SiVisualstudiocode } from 'react-icons/si';

const Skills = () => {
  const skillSections = [
    {
      title: 'Frontend',
      icon: <FaReact className="text-5xl text-[#61DAFB] group-hover:text-[#61DAFB] transition-all duration-300" />,
      hoverColor: 'hover:shadow-[0_0_30px_rgba(97,218,251,0.3)]',
      gradientFrom: 'from-[rgba(97,218,251,0.1)]',
      skills: [
        { name: 'React', icon: <FaReact className="text-2xl text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-2xl text-[#38B2AC]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-2xl text-[#F7DF1E]" /> },
        { name: 'HTML/CSS', icon: <FaCode className="text-2xl text-[#E34F26]" /> }
      ]
    },
    {
      title: 'Backend',
      icon: <FaPython className="text-5xl text-[#306998] group-hover:text-[#306998] transition-all duration-300" />,
      hoverColor: 'hover:shadow-[0_0_30px_rgba(48,105,152,0.3)]',
      gradientFrom: 'from-[rgba(48,105,152,0.1)]',
      skills: [
        { name: 'Django', icon: <SiDjango className="text-2xl text-[#092E20]" /> },
        { name: 'Python', icon: <FaPython className="text-2xl text-[#306998]" /> },
        { name: 'REST APIs', icon: <FaCode className="text-2xl text-blue-400" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-2xl text-[#336791]" /> }
      ]
    },
    {
      title: 'Tools & Others',
      icon: <FaTools className="text-5xl text-[#FFA500] group-hover:text-[#FFA500] transition-all duration-300" />,
      hoverColor: 'hover:shadow-[0_0_30px_rgba(255,165,0,0.3)]',
      gradientFrom: 'from-[rgba(255,165,0,0.1)]',
      skills: [
        { name: 'Git', icon: <FaGithub className="text-2xl text-white" /> },
        { name: 'GitHub', icon: <FaGithub className="text-2xl text-white" /> },
        { name: 'VS Code', icon: <SiVisualstudiocode className="text-2xl text-[#007ACC]" /> },
        { name: 'Docker', icon: <FaDocker className="text-2xl text-[#2496ED]" /> }
      ]
    }
  ];

  return (
    <div className='w-full py-16 px-4 bg-black'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-white mb-2 animate-pulse'>
            Skills & Tools
          </h2>
          <div className='h-1 w-32 bg-gradient-to-r from-[#61DAFB] via-[#306998] to-[#FFA500] mx-auto rounded-full
                         shadow-[0_0_20px_rgba(97,218,251,0.5)] animate-gradient'></div>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {skillSections.map((section, index) => (
            <div key={index} className='group'>
              <div className={'relative w-full h-full p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 ' +
                            'transform transition-all duration-500 hover:scale-105 ' +
                            section.hoverColor}>
                <div className={'absolute inset-0 rounded-xl bg-gradient-to-r ' + section.gradientFrom + ' to-transparent opacity-0 ' +
                              'group-hover:opacity-10 transition-opacity duration-500'}></div>
                <div className='relative z-10'>
                  <div className='flex justify-center items-center mb-6 transform transition-transform group-hover:scale-110'>
                    {section.icon}
                  </div>
                  <h3 className={'text-2xl font-bold text-center mb-6 transition-all duration-300 ' +
                               'bg-gradient-to-r bg-clip-text text-transparent ' +
                               'from-white to-gray-400 group-hover:from-white group-hover:to-white'}>
                    {section.title}
                  </h3>
                  <div className='grid grid-cols-2 gap-4'>
                    {section.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} 
                           className='flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm p-2 rounded-lg border border-gray-700
                                    transition-all duration-300 hover:border-gray-500 hover:scale-105'>
                        {skill.icon}
                        <span className='text-gray-300 text-sm'>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
