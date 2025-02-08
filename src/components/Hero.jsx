import React from 'react';
import { ReactTyped } from 'react-typed'; 

const Hero = ({ competitiveProgrammingRef }) => {
  const scrollToCompetitiveProgramming = () => {
    competitiveProgrammingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='text-white bg-[#0A0A0A] relative'>
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[10px] h-[10px] bg-[#FF3072] opacity-20 blur-[100px] rounded-full"></div>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[200px] h-[200px] bg-[#FF3072] opacity-[0.15] blur-[120px] rounded-full
                    animate-pulse"></div>
      
      <div className='relative max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className="relative group p-8 rounded-2xl neon-edge">
          {/* Moving neon border */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF3072] to-transparent animate-scan" />
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF3072] to-transparent animate-scan" />
          <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF3072] to-transparent animate-scan-vertical" />
          <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF3072] to-transparent animate-scan-vertical" />

          <div className="relative space-y-6">
            <p className='text-[#FF3072] font-bold text-xl drop-shadow-[0_0_8px_rgba(255,48,114,0.5)]'>
              Welcome to my Portfolio
            </p>
            
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 text-white
                         drop-shadow-[0_0_12px_rgba(255,48,114,0.6)]'>
              Hi, I'm Jeffrin
            </h1>
            
            <div className='flex justify-center items-center flex-wrap'>
              <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-gray-200' 
                 style={{ whiteSpace: 'nowrap' }}>
                I am interested in
              </p>
              <ReactTyped 
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#FF3072]
                          drop-shadow-[0_0_8px_rgba(255,48,114,0.5)]'
                strings={['DSA', 'OPEN SOURCE', 'MERN STACK', 'JEFFRIN2005']}
                typeSpeed={120}
                backSpeed={140}
                loop
                style={{ whiteSpace: 'nowrap' }}
              />
            </div>
            
            <p className='md:text-2xl text-xl font-bold text-gray-400
                         drop-shadow-[0_0_8px_rgba(255,48,114,0.3)]'>
              Every step you take, no matter how small, brings you closer to your dreams.
            </p>
            
            <button 
              onClick={scrollToCompetitiveProgramming} 
              className='bg-[#FF3072] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white
                       shadow-[0_0_20px_rgba(255,48,114,0.3)] hover:shadow-[0_0_30px_rgba(255,48,114,0.5)]
                       transition-all duration-300 transform hover:scale-105 neon-edge'
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
