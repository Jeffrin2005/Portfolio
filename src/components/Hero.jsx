import React, { useState, useCallback } from 'react';
import { ReactTyped } from 'react-typed';

const RotatingLines = () => {
  return (
    <div className="fixed inset-0" style={{ zIndex: 0 }}>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 h-[1px] bg-[#00FF8C]/10"
          style={{
            transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
            transformOrigin: 'center',
            animation: `rotateLine ${15 + i * 2}s linear infinite`,
            width: '140%',
          }}
        >
          <div className="absolute right-0 w-1 h-1 bg-[#00FF8C]/40 rounded-full" />
        </div>
      ))}
    </div>
  );
};

const ArrowShots = () => {
  return (
    <div className="fixed inset-0" style={{ zIndex: 0 }}>
      {[
        { angle: -45, delay: 0, position: 'top-10 right-10' },
        { angle: -15, delay: 0.2, position: 'top-20 right-20' },
        { angle: 15, delay: 0.4, position: 'top-10 left-10' },
        { angle: 45, delay: 0.6, position: 'top-20 left-20' },
        { angle: -135, delay: 0.8, position: 'bottom-10 right-10' },
        { angle: -165, delay: 1, position: 'bottom-20 right-20' },
        { angle: 135, delay: 1.2, position: 'bottom-10 left-10' },
        { angle: 165, delay: 1.4, position: 'bottom-20 left-20' },
      ].map((arrow, i) => (
        <div
          key={i}
          className={`absolute ${arrow.position} w-20 h-[2px] bg-yellow-500`}
          style={{
            transform: `rotate(${arrow.angle}deg)`,
            animation: 'shootArrow 2s infinite',
            animationDelay: `${arrow.delay}s`,
            opacity: 0,
          }}
        >
          <div 
            className="absolute right-0 w-3 h-3 bg-yellow-500"
            style={{
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
            }}
          />
          <div 
            className="absolute left-0 w-full h-full bg-gradient-to-r from-yellow-500/50 to-transparent"
            style={{
              animation: 'flash 0.2s infinite',
              animationDelay: `${arrow.delay}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

const CustomCursor = ({ position, isAttacking }) => (
  <div 
    className="fixed pointer-events-none z-50 transition-transform duration-150"
    style={{
      left: position.x,
      top: position.y,
      transform: `translate(-50%, -50%) ${isAttacking ? 'scale(0.8)' : 'scale(1)'}`,
    }}
  >
    <div className="relative">
      <div className="w-8 h-8 rounded-full border-2 border-[#00FF8C]/50" />
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#00FF8C] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-4 h-[1px] bg-[#00FF8C]/50 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[1px] h-4 bg-[#00FF8C]/50 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  </div>
);

const ClickEffect = ({ x, y }) => (
  <div 
    className="fixed pointer-events-none z-40 select-none"
    style={{
      left: x,
      top: y,
      transform: 'translate(-50%, -50%)'
    }}
  >
    <div className="text-[#00FF8C] font-mono text-sm animate-float-up">
      +1
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-8 h-8 border-2 border-[#00FF8C] rounded-full animate-ripple opacity-0" />
    </div>
  </div>
);

const Hero = ({ competitiveProgrammingRef }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isAttacking, setIsAttacking] = useState(false);
  const [clickEffects, setClickEffects] = useState([]);

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseDown = (e) => {
    setIsAttacking(true);
    
    const newEffect = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setClickEffects(prev => [...prev, newEffect]);
    setTimeout(() => {
      setClickEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
    }, 1000);
  };

  const scrollToCompetitiveProgramming = () => {
    competitiveProgrammingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="text-white bg-black relative min-h-screen overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={() => setIsAttacking(false)}
    >
      <RotatingLines />
      <ArrowShots />

      {/* Main content */}
      <div className="relative z-10">
        <div className='relative max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <div className="relative p-8 rounded-2xl">
            <div className="relative bg-black/80 p-8 rounded-xl backdrop-blur-sm">
              <p className='text-[#00FF8C]/80 font-bold text-xl'>
                Welcome to my Portfolio
              </p>
              
              <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 text-[#00FF8C]'>
                Hi, I'm Jeffrin Jojo
              </h1>
              
              <div className='flex justify-center items-center flex-wrap'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-gray-300'>
                  I am interested in
                </p>
                <ReactTyped 
                  className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00FF8C]'
                  strings={['DSA', 'OPEN SOURCE', 'MERN STACK','Penetration Testing']}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </div>
              
              <p className='md:text-2xl text-xl font-bold text-gray-500 mt-6'>
                Every step you take, no matter how small, brings you closer to your dreams.
              </p>
              
              <button 
                onMouseEnter={() => setIsAttacking(true)}
                onMouseLeave={() => setIsAttacking(false)}
                onClick={scrollToCompetitiveProgramming}
                className='bg-transparent border border-[#00FF8C]/50 
                          w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {clickEffects.map(effect => (
        <ClickEffect key={effect.id} x={effect.x} y={effect.y} />
      ))}

      <CustomCursor position={mousePos} isAttacking={isAttacking} />
    </div>
  );
};

export default Hero;