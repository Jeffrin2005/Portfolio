/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon_bg: '#E6E6FA',
      },
      keyframes: {
        'border-flow': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.1)' },
        },
        'particle-fade': {
          '0%': { opacity: '0.8', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0)' },
        },
        'spin-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'border-slide': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'border-slide-vertical': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        rotateLine: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
        },
        shootRight: {
          '0%': { 
            transform: 'scaleX(0)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scaleX(1)',
            opacity: '0'
          }
        },
        shootLeft: {
          '0%': { 
            transform: 'scaleX(0)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scaleX(1)',
            opacity: '0'
          }
        },
        shootArrow: {
          '0%': { 
            transform: 'scale(0.3)',
            opacity: 0
          },
          '20%': { 
            transform: 'scale(1)',
            opacity: 1
          },
          '80%': {
            transform: 'scale(1)',
            opacity: 1
          },
          '100%': { 
            transform: 'scale(1.2)',
            opacity: 0
          }
        },
        flash: {
          '0%': { 
            opacity: 1,
            transform: 'scaleX(0.3)'
          },
          '100%': { 
            opacity: 0,
            transform: 'scaleX(1)'
          }
        },
        shootBullet: {
          '0%': { 
            transform: 'translateX(-100px)',
            opacity: 0
          },
          '20%': {
            transform: 'translateX(-80px)',
            opacity: 1
          },
          '80%': {
            transform: 'translateX(80px)',
            opacity: 1
          },
          '100%': { 
            transform: 'translateX(100px)',
            opacity: 0
          }
        },
        targetPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' }
        },
        'float-up': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-20px)', opacity: '0' }
        }
      },
      animation: {
        'border-flow': 'border-flow 3s linear infinite',
        'gradient-x': 'gradient-x 5s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'particle-fade': 'particle-fade 1s forwards',
        'spin-line': 'spin-line 1.5s linear infinite',
        'border-slide': 'border-slide 2s linear infinite',
        'border-slide-vertical': 'border-slide-vertical 2s linear infinite',
        'rotate-line': 'rotateLine 20s linear infinite',
        'shoot-right': 'shootRight 1s linear infinite',
        'shoot-left': 'shootLeft 1s linear infinite',
        'shoot-arrow': 'shootArrow 2s infinite',
        'flash': 'flash 0.2s infinite',
        'shoot-bullet': 'shootBullet 2s infinite',
        'target-pulse': 'targetPulse 2s ease-in-out infinite',
        'ripple': 'ripple 1s ease-out forwards',
        'float-up': 'float-up 1s ease-out forwards'
      }
    },
  },
  plugins: [],
}