/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '840px',
      'lg': '1025px',
      'xl': '1560px',
    },
    extend: {
      colors: {
        primary: {
          default: '#565add',
          hover: '#6469FF',
          active: '#292DB8',
          light: '#F0F1FF',
          focus: '#6569ff',
        },
        purple: {
          dark: '#2b1c50',
          medium: '#3d2e7c',
          light: '#4b42ae',
          darkest: '#1b0448',
        },
        neutral: {
          background: '#fcfcfc',
          border: '#ebeff6',
          overlay: '#e0daf3',
        }
      },
      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        seravek: ['Seravek', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'primary': '0 0 0 4px rgba(85, 89, 221, 0.4)',
        'menu': '0 0 0 1px rgba(85, 89, 221, 0.1)',
      },
      blur: {
        'banner': '80px',
      },
      backgroundImage: {
        'gradient-banner': 'linear-gradient(to right, rgba(210, 213, 255, 1), rgba(240, 241, 255, 0))',
      },
      height: {
        '13': '52px',
        '15': '60px',
        '22': '88px',
        '25': '100px',
        '30': '120px',
        '70': '70px',
        '74': '74px',
        '75': '300px',
        '206': '206px',
        '209': '209px',
      },
      width: {
        '15': '60px',
        '30': '120px',
        '50': '200px',
        '54': '216px',
        '75': '300px',
        '118': '118px',
        '230': '230px',
        '343': '343px',
        '435': '435px',
        '560': '560px',
        '586': '586px',
        '636': '636px',
        '780': '780px',
        '824': '824px',
        '1056': '1056px',
        '1200': '1200px',
        '1448': '1448px',
      },
      padding: {
        '25': '100px',
        '30': '120px',
      },
      borderWidth: {
      },
      fontSize: {
        '22': '22px',
        '23': '92px',
        '26': '26px',
        '28': '28px',
        '32': '32px',
        '63': '63px',
      },
      maxWidth: {
        '200': '200px',
        '500': '500px',
        '824': '824px',
        '1236': '1236px',
        '1536': '1536px',
      },
      margin: {
        '13': '13px',
        '30': '120px',
        '31': '124px',
        '50': '200px',
        '55': '220px',
        '57': '228px',
        '60': '240px',
        '65': '260px',
        '70': '280px',
        '75': '300px',
        '98': '392px',
        '152': '152px',
      },
      lineHeight: {
        '15': '60px',
        '18': '18px',
        '42.67': '42.67px',
      },
    },
  },
  plugins: [],
}

