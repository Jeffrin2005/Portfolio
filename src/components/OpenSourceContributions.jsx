import React from 'react';
import { FaGithub } from 'react-icons/fa';

const OpenSourceContributions = () => {
  
  const organizations = [
    
    {
      name: "layer5",
      pullRequest: {
        description: <b style={{ color: '#FFFFFF', fontSize: '18px' }}>Fixed Image Viewer Usability with Standard Navigation</b>, 
        link: "https://github.com/layer5io/layer5/pull/6379",
        techStack: ["Typescript", "React"]
      },
      issue: {
        description: <b style={{ color: '#FFFFFF', fontSize: '18px' }}>Enhance Image Viewer Usability with Standard Navigation</b>,
        link: "https://github.com/layer5io/layer5/issues/6378",
        techStack: ["UI", "UX"]
      }
    },
    {
      name: "shadcn-phone-input",
      pullRequest: {
        description: <b style={{ color: '#FFFFFF', fontSize: '18px' }}>Fix : Country selection does not clear previous search term</b>, 
        link: "https://github.com/omeralpi/shadcn-phone-input/pull/84",
        techStack: ["React", "Typescript"]
      },
      issue: {
        description: <b style={{ color: '#FFFFFF', fontSize: '18px' }}>Country selection does not clear previous search terme</b>,
        link: "https://github.com/omeralpi/shadcn-phone-input/issues/83",
        techStack: ["Bug", "UX"]
      }
    }
  ];

  const ContributionCard = ({ item, type }) => (
    <div className='relative w-full p-5 my-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700
                    transform transition-all duration-300 hover:scale-[1.02]
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[rgba(0,255,0,0.05)] before:to-transparent 
                    before:opacity-0 before:transition-opacity hover:before:opacity-100'>
      <div className='relative z-10'>
        <div className='flex items-center mb-3'>
          <FaGithub className='text-2xl text-gray-400 mr-3 group-hover:text-[#00ff00]' />
          <h4 className='text-lg font-bold text-white'>{type}</h4>
        </div>
        <p className='text-gray-400 text-sm mb-3 leading-relaxed'>{item.description}</p>
        <div className='flex justify-between items-center'>
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className='text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 transition-colors'
          >
            View {type} →
          </a>
          <div className='flex gap-2'>
            {item.techStack.map((tech, index) => (
              <span key={index} className='px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs border border-gray-700'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='w-full py-16 px-4 bg-black'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-white mb-2'>
            Open Source Contributions
          </h2>
          <div className='h-1 w-48 bg-gradient-to-r from-blue-500 via-[#00ff00] to-purple-500 mx-auto rounded-full'></div>
        </div>
        <div className='space-y-12'>
          {organizations.map((org, orgIndex) => (
            <div key={orgIndex} className='space-y-6'>
              {/* Organization Heading - Left Aligned */}
              <div className='flex items-center gap-3 mb-6'>
                <FaGithub className='text-3xl text-gray-400' />
                <h3 className='text-3xl font-bold text-white'>{org.name}</h3>
                <div className='h-1 w-32 bg-gradient-to-r from-blue-500 via-[#00ff00] to-purple-500 rounded-full ml-4'></div>
              </div>
              
              {/* Pull Request and Issue in original positions */}
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <ContributionCard item={org.pullRequest} type="Pull Request" />
                </div>
                <div>
                  <ContributionCard item={org.issue} type="Issue" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenSourceContributions;
