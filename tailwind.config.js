const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        greenGradient: 'rgba(2, 185, 75, 0.84)',
        blueGradient: 'rgba(4, 106, 180, 0)',
      },
      clipPath: {
        'slide-left': 'polygon(0px 180px, 5px 113px, 74px 91px, 147px 94px, 192px 118px, 443px 471px, 625px 664px, 0px 665px, 0px 443px, 0px 253px)',
        'slide-right': 'polygon(588px 0px, 818px 0px, 818px 74px, 719px 211px, 408px 266px, 290px 433px, 195px 536px, 447px 438px, 570px 313px, 589px 259px, 588px 100px)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.slide-left': {
          position: 'absolute',
          width: '948.44px',
          height: '664.94px',
          top: '250.43px',
          left: '-10px',
          background: 'linear-gradient(180deg, rgba(2, 185, 75, 0.84) 43.23%, rgba(4, 106, 180, 0) 105.07%)',
          clipPath: 'polygon(0px 180px, 5px 113px, 74px 91px, 147px 94px, 192px 118px, 443px 471px, 625px 664px, 0px 665px, 0px 443px, 0px 253px)',
        },
        '.slide-right': {
          position: 'absolute',
          top: '-150px',
          right: '-75px',
          borderRadius: '0% 66% 25% 0% / 25% 45% 0% 25%',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(2, 185, 75, 0.84) 56.93%, rgba(4, 106, 180, 0) 112.55%)',
          width: '818.82px',
          height: '685px',
          clipPath: 'polygon(588px 0px, 818px 0px, 818px 74px, 719px 211px, 408px 266px, 290px 433px, 195px 536px, 447px 438px, 570px 313px, 589px 259px, 588px 100px)',
        },
      });
    }),
  ],
};
