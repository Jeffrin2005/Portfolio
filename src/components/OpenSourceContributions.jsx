import React from 'react';
import { FaGithub } from 'react-icons/fa';

const OpenSourceContributions = () => {
  const pullRequests = [
    {
      organization: "OHC Network",
      description: "Fixed scroll issue in Shifting and Resource",
      link: "https://github.com/ohcnetwork/care_fe/pull/10104",
      techStack: ["React", "TypeScript"]
    },
    {
      organization: "OHC Network",
      description: "Fixed Facility Organization Dropdown",
      link: "https://github.com/ohcnetwork/care_fe/pull/10104",
      techStack: ["React", "TypeScript"]
    },
    {
      organization: "OHC Network",
      description: "Fixed Profile Syncing",
      link: "https://github.com/ohcnetwork/care_fe/pull/9994",
      techStack: ["React", "JavaScript"]
    },
    {
      organization: "OHC Network",
      description: "Fixed Search Bar Reset",
      link: "https://github.com/ohcnetwork/care_fe/pull/9867",
      techStack: ["React", "TypeScript"]
    },
    {
      organization: "OHC Network",
      description: "Fixed hover cursor in encounters",
      link: "https://github.com/ohcnetwork/care_fe/pull/9891",
      techStack: ["React", "TypeScript"]
    }
  ];

  const issues = [
    {
      organization: "OHC Network",
      description: "Exploited XSS Vulnerability in Encounter Comment Section",
      link: "https://github.com/ohcnetwork/care_fe/issues/10430",
      techStack: ["Security", "React"]
    },
    {
      organization: "OHC Network",
      description: "Enhance Facility Organization Dropdown Experience",
      link: "https://github.com/ohcnetwork/care_fe/issues/10060",
      techStack: ["UX", "React"]
    },
    {
      organization: "OHC Network",
      description: "Profile Not Syncing with Sidebar Navigation",
      link: "https://github.com/ohcnetwork/care_fe/issues/9960",
      techStack: ["React", "State Management"]
    },
    {
      organization: "OHC Network",
      description: "Search Bar Fails to Reset When Navigating Between Tabs",
      link: "https://github.com/ohcnetwork/care_fe/issues/9845",
      techStack: ["React", "TypeScript"]
    },
    {
      organization: "OHC Network",
      description: "Cursor Issue: Pointer Active Throughout Encounter Section",
      link: "https://github.com/ohcnetwork/care_fe/issues/9886",
      techStack: ["CSS", "UX"]
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
          <h3 className='text-lg font-bold text-white'>{item.organization}</h3>
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
        <div className='grid md:grid-cols-2 gap-10'>
          <div>
            <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <span className='h-8 w-1 bg-gradient-to-b from-blue-500 to-[#00ff00] rounded-full'></span>
              Pull Requests
            </h3>
            {pullRequests.map((pr, index) => (
              <ContributionCard key={index} item={pr} type="Pull Request" />
            ))}
          </div>
          
          <div>
            <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
              <span className='h-8 w-1 bg-gradient-to-b from-[#00ff00] to-purple-500 rounded-full'></span>
              Issues
            </h3>
            {issues.map((issue, index) => (
              <ContributionCard key={index} item={issue} type="Issue" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceContributions;
