/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '840px',
      'lg': '1025px',
      'xl': '1560px',
      '1920': '1920px',
    },
    extend: {
      backgroundImage: {
        'gradient-banner': 'linear-gradient(to right, rgba(210, 213, 255, 1), rgba(240, 241, 255, 0))',
      },
      blur: {
        'banner': '80px',
      },
      boxShadow: {
        'primary': '0 0 0 4px rgba(85, 89, 221, 0.4)',
        'menu': '0 0 0 1px rgba(85, 89, 221, 0.1)',
      },
      colors: {
        gradient: {
          start: '#eef3fe',
          middle: '#f3ebfb',
          end: '#fdefed',
        },
        primary: {
          active: '#292DB8',
          default: '#565add',
          focus: '#6569ff',
          hover: '#6469FF',
          light: '#F0F1FF',
          dark: '#252a3f',
          dark2: '#2e334b',
        },
        purple: {
          dark: '#2b1c50',
          darkest: '#1b0448',
          darkest2: '#271454',
          darkest2Light: '#4f2a82',
          light: '#4b42ae',
          medium: '#3d2e7c',
        },
        neutral: {
          background: '#fcfcfc',
          border: '#ebeff6',
          overlay: '#e0daf3',
          text: '#7f879e',
        },
        secondary: '#2e334b',
        'secondary-dark': '#252a3f',
        'secondary-dark-2': '#f59a73',
        'secondary-light': '#3d425a',
        'text-neutral': '#7f879e',
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        seravek: ['Seravek', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '22': '22px',
        '28': '28px',
        '8': '32px',
        '32': '32px',
        '10': '40px',
        '62': '62px',
        '16': '64px',
        '20': '80px',
        '90': '90px',
      },
      height: {
        '13': '52px',
        '15': '60px',
        '22': '88px',
        '25': '100px',
        '28': '112px',
        '30': '120px',
        '37': '37px',
        '65': '260px',
        '70': '70px',
        '75': '300px',
        '77': '77px',
        '119': '119px',
        '182': '182px',
        '206': '206px',
        '209': '209px',
        '312': '312px',
        '350': '350px',
        '355': '355px',
        '373': '373px',
        '388': '388px',
        '420': '420px',
        '200': '800px',
      },
      lineHeight: {
        '18': '18px',
        '25.20': '25.20px',
        '28.80': '28.80px',
        '42.67': '42.67px',
        '46.80': '46.80px',
        '15': '60px',
        '72': '72px',
        '83.20': '83.20px',
        '26': '104px',
      },
      margin: {
        '13': '13px',
        '30': '120px',
        '31': '124px',
        '38': '152px',
        '39': '156px',
        '55': '220px',
        '60': '240px',
        '65': '260px',
        '70': '280px',
        '75': '300px',
        '79': '316px',
        '98': '392px',
        '152': '152px',
      },
      maxWidth: {
        '200': '200px',
        '332': '332px',
        '432': '432px',
        '464': '464px',
        '500': '500px',
        '520': '520px',
        '531': '531px',
        '600': '600px',
        '824': '824px',
        '920': '920px',
        '1200': '1200px',
        '1236': '1236px',
        '1536': '1536px',
      },
      padding: {
        '15': '60px',
        '25': '100px',
        '30': '120px',
        '50': '200px',
        '90': '360px',
        '148': '148px',
      },
      spacing: {
        '15': '60px',
        '30': '30',
        '34': '34px',
      },
      width: {
        '15': '60px',
        '30': '120px',
        '54': '216px',
        '75': '300px',
        '90': '360px',
        '100': '400px',
        '110': '440px',
        '118': '118px',
        '162': '162px',
        '180': '180px',
        '230': '230px',
        '306': '306px',
        '342': '342px',
        '343': '343px',
        '412': '412px',
        '432': '432px',
        '435': '435px',
        '469': '469px',
        '480': '480px',
        '530': '530px',
        '531': '531px',
        '532': '532px',
        '560': '560px',
        '586': '586px',
        '636': '636px',
        '824': '824px',
        '1056': '1056px',
        '1200': '1200px',
        '1448': '1448px',
      },
    },
  },
  plugins: [],
}
