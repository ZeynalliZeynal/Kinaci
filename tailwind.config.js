/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        DEFAULT: '1170px',
      },
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

        newBadge: '24px',
      },
      colors: {
        // colors are written as 'color-shade', for example blue-900-10
        section: {
          newestates: '#2582c1',
        },
        icons: {
          twitter: '#00a2e5',
          facebook: '#006af7',
          instagram: '#bc1888',
          linkedin: '#0059b1',
          youtube: '#FF0000',
        },
        blue: {
          50: '#e9f3f9',
          400: '#00a2e5',
          500: '#3677F9FF',
          700: '#2563EBFF',
          800: '#1a3a50',
          900: '#052841',
          '900-10': '#05284119', // opacity of blue-900
          '900-50': '#0528417F',
        },
        teal: {
          500: '#0D9470FF',
        },
        orange: {
          100: '#fdf0ea',
          200: '#ffe2d3',
          500: '#FF5300FF',
          600: '#e84900',
        },
        red: {
          600: '#e21717',
        },
        gray: {
          100: '#f7f7f7',
          200: '#e9e9e9',
        },
      },
      boxShadow: {
        navbar: '0 10px 10px 0 rgba(0, 0, 0, 0.03)',
        'navbar-box': '0 4px 22px 0 rgba(5, 40, 65, 0.1)',
        'filter-box': '0 10px 40px 0 rgba(24, 26, 32, 0.07)',
        language: '0 0px 20px -1px rgba(0, 0, 0, 0.2)',
        nestedLink: '0 4px 22px 0 rgba(5, 40, 65, 0.1)',
        section: '0 1px 4px 0 rgba(24, 26, 32, 0.07)',
        tooltip: '0 2px 4px  rgba(0, 0, 0, 0.3)',
        button: '0 2px 8px 0 rgba(0, 0, 0, 0.14)',
        comments: '0 4px 22px 0 rgba(0, 0, 0, 0.06)',
        blogs: '0 1px 4px 0 rgba(24, 26, 32, 0.07);',
      },
      borderRadius: {
        button: '6px',
        selectBtn: '10px',
      },
    },
  },
  plugins: [],
}
