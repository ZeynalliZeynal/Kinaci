/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        base: ['Poppins'],
      },
      fontSize: {
        xxs: '12px',
        xs: '13px',
        sm: '14px',
        md: '15px',
        lg: '17px',
        xl: '18px',
        xxl: '19px',
        '3xl': '20px',
        '4xl': '22px',
        '5xl': '24px',
        '6xl': '55px',

        h2: '30px',
        h1: '56px',

        // 30, 24, 56, 32
      },
      colors: {
        // colors are written as 'color-shade', for example blue-900-10
        icons: {
          twitter: '#00a2e5',
          facebook: '#006af7',
          instagram: '#e80138',
          linkedin: '#0059b1',
        },
        blue: {
          50: '#e9f3f9',
          400: '#00a2e5',
          500: '#3491d0',
          700: '#2582c1',
          800: ' #1a3a50',
          900: '#052841',
          '900-10': '#05284119', // opacity of blue-900
          '900-50': '#0528417F',
        },
        teal: {
          500: '#309a87',
        },
        orange: {
          200: '#ffe2d3',
          500: '#ed6b2c',
        },
        red: {
          600: '#E21743',
        },
      },
      boxShadow: {
        navbar: '0 10px 10px 0 rgba(0, 0, 0, 0.03)',
        'navbar-box': '0 4px 22px 0 rgba(5, 40, 65, 0.1)',
        'filter-box': '0 10px 40px 0 rgba(24, 26, 32, 0.07)',
        language: '0 0px 20px -1px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        button: '.375rem',
      },
    },
  },
  plugins: [],
}
