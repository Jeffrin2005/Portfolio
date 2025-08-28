import React from 'react';
import { FaGithub, FaMapMarkerAlt, FaClock, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "OHC Network",
      position: "Junior Full Stack Engineer Intern",
      duration: "March 2024 - August 2024 (6 months)",
      location: "Remote",
      companyUrl: "https://github.com/ohcnetwork",
      description: "Worked as a Full Stack Engineer, developing responsive web applications using TypeScript, React, Python, and Django. Designed and implemented user interfaces, identified and fixed security vulnerabilities, conducted code reviews, and collaborated with cross-functional teams to deliver high-quality software solutions.",
      techStack: {
        frontend: ["TypeScript", "React"],
        backend: ["Python", "Django"]
      }
    }
  ];

  return (
    <div className='w-full py-16 px-4 bg-black'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-white mb-2'>
            Experience
          </h2>
          <div className='h-1 w-32 bg-gradient-to-r from-blue-500 via-[#00ff00] to-purple-500 mx-auto rounded-full'></div>
          {experiences.map((exp, index) => (
            <div key={index} className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10'>
              <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
                <div>
                  <div className='flex items-center gap-3 mb-1'>
                    <FaBriefcase className='text-blue-400' />
                    <h3 className='text-2xl font-bold text-white'>{exp.position}</h3>
                  </div>
                  <div className='flex items-center gap-2 text-gray-300 mb-2'>
                    <a href={exp.companyUrl} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 hover:text-blue-400 transition-colors'>
                      <FaGithub className='text-lg' />
                      <span className='text-lg'>{exp.company}</span>
                    </a>
                  </div>
                  <div className='flex flex-wrap gap-4 text-sm text-gray-400'>
                    <div className='flex items-center gap-1'>
                      <FaClock />
                      <span>{exp.duration}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className='mt-6 text-gray-300 leading-relaxed text-left'>
                {exp.description}
              </p>

              {/* Two Column Layout - Reversed */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                {/* Left Column - Backend Tech */}
                <div className='order-2 md:order-1'>
                  <h4 className='text-white font-semibold mb-3 flex items-center gap-2 text-lg'>
                    <span className='h-2 w-2 bg-green-500 rounded-full'></span>
                    Backend Technologies
                  </h4>
                  <div className='flex gap-2 flex-wrap'>
                    {exp.techStack.backend.map((tech, techIndex) => (
                      <span key={techIndex} className='px-3 py-1.5 bg-green-900/30 text-green-300 rounded-md text-sm border border-green-700'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Right Column - Frontend Tech */}
                <div className='order-1 md:order-2 md:border-l md:border-gray-700 md:pl-8'>
                  <h4 className='text-white font-semibold mb-3 flex items-center gap-2 text-lg'>
                    <span className='h-2 w-2 bg-blue-500 rounded-full'></span>
                    Frontend Technologies
                  </h4>
                  <div className='flex gap-2 flex-wrap'>
                    {exp.techStack.frontend.map((tech, techIndex) => (
                      <span key={techIndex} className='px-3 py-1.5 bg-blue-900/30 text-blue-300 rounded-md text-sm border border-blue-700'>
                        {tech}
                      </span>
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

export default Experience;
