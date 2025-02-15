import React, { useState, useCallback, useEffect } from 'react';
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

const Bird = ({ position, rotation }) => (
  <div 
    className="fixed w-6 h-6 transition-transform z-50 pointer-events-none"
    style={{
      top: position,
      left: '50%',
      transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
    }}
  >
    <div className="w-full h-full bg-[#00FF8C] rounded-full shadow-[0_0_10px_#00FF8C]">
      <div className="absolute right-0 w-2 h-2 bg-black rounded-full" />
    </div>
  </div>
);

const Obstacle = ({ position, height, isTop }) => (
  <div 
    className="fixed w-5 bg-[#00FF8C]/40 backdrop-blur-sm pointer-events-none z-40"
    style={{
      left: position,
      top: isTop ? 0 : 'auto',
      bottom: isTop ? 'auto' : 0,
      height: `${height}px`,
      boxShadow: '0 0 10px rgba(0,255,140,0.4)'
    }}
  />
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
  const [score, setScore] = useState(0);
  const [clickEffects, setClickEffects] = useState([]);
  const [showGame, setShowGame] = useState(false);

  const [birdPos, setBirdPos] = useState(300);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [birdRotation, setBirdRotation] = useState(0);
  const [obstacles, setObstacles] = useState([]);
  const [isGameActive, setIsGameActive] = useState(false);
  const [showRestartMessage, setShowRestartMessage] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(3);

  const GRAVITY = 0.4;
  const JUMP_FORCE = -7;
  const GAME_WIDTH = window.innerWidth;
  const GAME_HEIGHT = window.innerHeight;

  const checkCollision = (birdY, obstacles) => {
    const birdSize = 24; 
    const birdX = window.innerWidth / 2;
    const obstacleWidth = 10; 

    return obstacles.some(obs => {
      if (birdX >= obs.x - obstacleWidth && birdX <= obs.x + obstacleWidth) {
        if (birdY - birdSize/2 <= obs.topHeight) {
          return true;
        }
        if (birdY + birdSize/2 >= window.innerHeight - obs.bottomHeight) {
          return true;
        }
      }
      return false;
    });
  };

  useEffect(() => {
    const baseSpeed = 3;
    const speedIncrease = Math.floor(score / 40); 
    const newSpeed = baseSpeed + speedIncrease * 1.5;
    
    setGameSpeed(Math.min(newSpeed, 12));

    if (score > 0 && score % 40 === 0) { 
      const speedIndicator = document.querySelector('.speed-indicator');
      if (speedIndicator) {
        speedIndicator.classList.add('animate-pulse');
        setTimeout(() => {
          speedIndicator.classList.remove('animate-pulse');
        }, 1000);
      }
    }
  }, [score]);

  useEffect(() => {
    if (!isGameActive) return;

    const gameLoop = setInterval(() => {
      setBirdPos(prev => {
        const newPos = prev + birdVelocity;
        
       
        if (newPos < 0 || newPos > GAME_HEIGHT) {
          setIsGameActive(false);
          setShowRestartMessage(true);
          return prev;
        }

        if (checkCollision(newPos, obstacles)) {
          setIsGameActive(false);
          setShowRestartMessage(true);
          return prev;
        }

        return newPos;
      });

      setBirdVelocity(prev => prev + GRAVITY);
      setBirdRotation(birdVelocity * 3);

      setObstacles(prev => {
        const newObstacles = prev
          .map(obs => ({ ...obs, x: obs.x - gameSpeed }))
          .filter(obs => obs.x > -50);

        if (prev.length === 0 || prev[prev.length - 1].x < GAME_WIDTH - 300) {
          const gap = 200;
          const minHeight = 100;
          const maxHeight = GAME_HEIGHT - gap - minHeight;
          const topHeight = Math.random() * (maxHeight - minHeight) + minHeight;
          
          newObstacles.push({
            id: Date.now(),
            x: GAME_WIDTH,
            topHeight,
            bottomHeight: GAME_HEIGHT - topHeight - gap
          });
        }

        prev.forEach(obs => {
          if (obs.x === window.innerWidth / 2) {
            setScore(prev => prev + 5);
          }
        });

        return newObstacles;
      });
    }, 20);

    return () => clearInterval(gameLoop);
  }, [isGameActive, birdVelocity, GAME_HEIGHT, GAME_WIDTH, obstacles, gameSpeed]); 

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseDown = (e) => {
    if (!showGame) return;
    setIsAttacking(true);
    
    if (!isGameActive) {
      setScore(0);
      setGameSpeed(3);
      setIsGameActive(true);
      setBirdPos(window.innerHeight / 2);
      setBirdVelocity(0);
      setObstacles([]);
      setShowRestartMessage(false);
    } else {
      setScore(prev => prev + 1);
      setBirdVelocity(JUMP_FORCE);
    }
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

  const toggleGame = () => {
    setShowGame(prev => !prev);
    if (isGameActive) {
      setIsGameActive(false);
      setScore(0);
      setObstacles([]);
    }
  };

  const scrollToCompetitiveProgramming = () => {
    competitiveProgrammingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className='text-white bg-black relative min-h-screen overflow-hidden cursor-none'
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={() => setIsAttacking(false)}
    >
      <RotatingLines />
      <ArrowShots />

      {/* Game toggle button */}
      <button
        onClick={toggleGame}
        className="fixed top-4 left-4 z-40 
                 text-[#00FF8C] font-mono font-bold
                 bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm
                 border border-[#00FF8C]/20 hover:bg-[#00FF8C]/10
                 transition-all duration-300"
      >
        {showGame ? 'Hide Game' : 'Play Game'}
      </button>

      {/* Main content - Lower z-index */}
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

      {/* Game elements */}
      {showGame && (
        <>
          <div className="fixed top-4 right-4 z-40">
            <div className="text-[#00FF8C] font-mono text-xl font-bold
                         bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm
                         border border-[#00FF8C]/20">
              <div>SCORE: {score}</div>
              <div className="text-sm opacity-70 speed-indicator">
                SPEED: {gameSpeed}x 
                {score > 0 && score % 40 === 0 && (
                  <span className="ml-2 text-[#00FF8C] animate-pulse">↑</span>
                )}
              </div>
              {score > 0 && (
                <div className="text-xs opacity-50">
                  Next speed boost: {40 - (score % 40)} points
                </div>
              )}
            </div>
          </div>

          {!isGameActive && !showRestartMessage && (
            <div className="fixed left-1/2 top-[15%] transform -translate-x-1/2
                         text-[#00FF8C] font-mono text-2xl font-bold z-40
                         bg-black/80 px-4 py-2 rounded-lg backdrop-blur-sm
                         border border-[#00FF8C]/20 animate-pulse">
              Click to Start!
            </div>
          )}

          {showRestartMessage && (
            <div className="fixed left-1/2 top-[15%] transform -translate-x-1/2
                         text-[#00FF8C] font-mono text-2xl font-bold z-40
                         bg-black/80 px-4 py-2 rounded-lg backdrop-blur-sm
                         border border-[#00FF8C]/20 animate-pulse">
              Click to Play Again!
            </div>
          )}

          <Bird position={birdPos} rotation={birdRotation} />
          {obstacles.map(obs => (
            <React.Fragment key={obs.id}>
              <Obstacle position={obs.x} height={obs.topHeight} isTop={true} />
              <Obstacle position={obs.x} height={obs.bottomHeight} isTop={false} />
            </React.Fragment>
          ))}
        </>
      )}

      {clickEffects.map(effect => (
        <ClickEffect key={effect.id} x={effect.x} y={effect.y} />
      ))}

      <CustomCursor position={mousePos} isAttacking={isAttacking} />
    </div>
  );
};

export default Hero;