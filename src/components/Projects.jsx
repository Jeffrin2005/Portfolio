import React from 'react';
import { FaReact, FaPython, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'AI Summarizer',
      description: 'Transforms lengthy explanations into brief, precise summaries. This tool is built using Node.js, TailwindCSS, and Redux Toolkit for efficient API management. EssenceAI fetches data through the RapidAPI interface, utilizing an API key for secure transactions.',
      techStack: ['React', 'Tailwind CSS'],
      githubLink: 'https://github.com/YourUsername/react-project',
      icon: <FaReact className="text-6xl text-[#61DAFB] group-hover:text-[#61DAFB] transition-all duration-300 transform group-hover:scale-110" />,
      hoverColor: 'hover:shadow-[0_0_30px_rgba(97,218,251,0.3)]',
      gradientFrom: 'from-[rgba(97,218,251,0.1)]',
      buttonColor: 'bg-[#61DAFB] hover:bg-[#4fa8c2]'
    },
    {
      title: 'Django WeatherApp',
      description: 'WeatherApp is a Django backend that fetches real-time weather data for cities globally using external APIs and an API key for secure data retrieval.',
      techStack: ['Django', 'Python', 'PostgreSQL'],
      githubLink: 'https://github.com/Jeffrin2005/DjangoWeatherTracker',
      icon: <FaPython className="text-6xl text-[#306998] group-hover:text-[#306998] transition-all duration-300 transform group-hover:scale-110" />,
      hoverColor: 'hover:shadow-[0_0_30px_rgba(97,218,251,0.3)]',
      gradientFrom: 'from-[rgba(97,218,251,0.1)]',
      buttonColor: 'bg-[#61DAFB] hover:bg-[#4fa8c2]'
    },
    {
      title: 'Tiny URL Generator',
      description: 'A Tiny URL generator built with Node.js, MongoDB, Bootstrap, and Express.It features a user-friendly interface created with Bootstrap, backed by a powerful Node.js and Express server, and uses MongoDB for efficient data storage and retrieval.',
      techStack: ['React', 'Tailwind CSS'],
      githubLink: 'https://github.com/Jeffrin2005/Tiny_URL',
      icon: <FaReact className="text-6xl text-[#61DAFB] group-hover:text-[#61DAFB] transition-all duration-300 transform group-hover:scale-110" />,
      hoverColor: 'hover:shadow-[0_0_30px_rgba(97,218,251,0.3)]',
      gradientFrom: 'from-[rgba(97,218,251,0.1)]',
      buttonColor: 'bg-[#61DAFB] hover:bg-[#4fa8c2]'
    }
  ];

  return (
    <div className='w-full py-16 px-4 bg-black'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-white mb-2 animate-pulse'>
            Projects
          </h2>
          <div className='h-1 w-24 bg-gradient-to-r from-[#61DAFB] via-purple-500 to-[#306998] mx-auto rounded-full 
                         shadow-[0_0_20px_rgba(97,218,251,0.5)] animate-gradient'></div>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='group relative'>
              <div className={'relative w-full h-full p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 ' +
                            'transform transition-all duration-500 hover:scale-105 ' +
                            project.hoverColor}>
                <div className={'absolute inset-0 rounded-xl bg-gradient-to-r ' + project.gradientFrom + ' to-transparent opacity-0 ' +
                              'group-hover:opacity-10 transition-opacity duration-500'}></div>
                <div className='relative z-10'>
                  <div className='flex justify-center items-center mb-6'>
                    {project.icon}
                  </div>
                  <h3 className={'text-2xl font-bold text-center mb-3 transition-all duration-300 ' +
                               'bg-gradient-to-r bg-clip-text text-transparent ' +
                               'from-white to-gray-400 group-hover:from-white group-hover:to-white'}>
                    {project.title}
                  </h3>
                  <p className='text-gray-400 text-center mb-4 text-sm'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap justify-center gap-2 mb-6'>
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} 
                            className='px-3 py-1 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-md text-xs border border-gray-700
                                     transition-all duration-300 hover:border-gray-500'>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='text-center'>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={'inline-flex items-center gap-2 text-black px-6 py-2 rounded-lg transition-all duration-300 ' +
                                'transform hover:scale-105 ' + project.buttonColor}
                    >
                      <FaGithub className="text-xl" />
                      View on GitHub
                    </a>
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

export default Projects;
