import React from 'react';
import { FaCode, FaLaptopCode, FaBrain, FaRobot } from 'react-icons/fa';

const InterestCard = ({ title, icon, description }) => (
  <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 
                  rounded-xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(0,255,149,0.2)]
                  transform transition-all duration-500 hover:scale-105">
    <div className="flex flex-col items-center">
      <div className="mb-4 transform transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-300 mb-4">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  </div>
);

const Interests = () => {
  const interests = [
    {
      title: 'Competitive Programming',
      icon: <FaCode className="text-5xl text-[#00ff95] group-hover:text-[#00ff95] transition-all duration-500" />,
      description: 'Solving complex algorithmic problems and participating in coding competitions to enhance problem-solving skills.'
    },
    {
      title: 'Full Stack Development',
      icon: <FaLaptopCode className="text-5xl text-[#00ff95] group-hover:text-[#00ff95] transition-all duration-500" />,
      description: 'Building end-to-end web applications using modern technologies and best practices in software development.'
    },
    {
      title: 'Machine Learning',
      icon: <FaBrain className="text-5xl text-[#00ff95] group-hover:text-[#00ff95] transition-all duration-500" />,
      description: 'Exploring the fascinating world of AI and implementing machine learning algorithms to solve real-world problems.'
    },
    {
      title: 'Open Source',
      icon: <FaRobot className="text-5xl text-[#00ff95] group-hover:text-[#00ff95] transition-all duration-500" />,
      description: 'Contributing to open-source projects and collaborating with developers worldwide to create impactful solutions.'
    }
  ];

  return (
    <div className='w-full py-16 px-4 bg-black'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold mb-2'>
            <span className='text-[#00ff95]'>Interests</span>
          </h2>
          <div className='h-1 w-32 bg-[#00ff95] mx-auto rounded-full
                         shadow-[0_0_20px_rgba(0,255,149,0.5)]'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {interests.map((interest, index) => (
            <div key={index} className='group'>
              <InterestCard {...interest} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interests;