import React, { forwardRef } from 'react';
import { SiCodeforces, SiLeetcode, SiCodechef } from 'react-icons/si';

const CompetitiveProgramming = forwardRef((props, ref) => {
  const platforms = [
    {
      name: 'CodeForces',
      link: 'https://codeforces.com/profile/Jeffrin2005',
      description: 'Competitive Programming',
      icon: <SiCodeforces className="text-5xl text-blue-500" />
    },
    {
      name: 'LeetCode',
      link: 'https://leetcode.com/u/Jeffrin2005/',
      description: 'Problem Solving',
      icon: <SiLeetcode className="text-5xl text-yellow-500" />
    },
    {
      name: 'CodeChef',
      link: 'https://www.codechef.com/users/jeffrin2005',
      description: 'Algorithmic Challenges',
      icon: <SiCodechef className="text-5xl text-orange-500" />
    },
  ];

  return (
    <div ref={ref} className='w-full py-16 px-4 bg-black'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-white mb-2'>
            Competitive Programming
          </h2>
          <div className='h-1 w-24 bg-gradient-to-r from-blue-500 via-[#00ff00] to-yellow-500 mx-auto rounded-full'></div>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {platforms.map((platform, index) => (
            <a
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className='group'
            >
              <div className='relative w-full p-6 rounded-xl bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 
                            transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[rgba(0,255,0,0.1)] before:to-transparent 
                            before:opacity-0 before:transition-opacity hover:before:opacity-100 group'>
                <div className='relative z-10'>
                  <div className='flex justify-center items-center mb-6 transform transition-transform group-hover:scale-110'>
                    {platform.icon}
                  </div>
                  <h3 className='text-2xl font-bold text-center text-white mb-2 group-hover:text-[#00ff00]'>
                    {platform.name}
                  </h3>
                  <p className='text-center text-gray-400 group-hover:text-gray-300'>
                    {platform.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

export default CompetitiveProgramming;
