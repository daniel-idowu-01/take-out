/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      colors: {
        'logo-color': '#FFD600',
        'border-color': '#EF904B'
      },
      backgroundImage: {
        'bgImage': "url('/src/images/Rectangle1.png')",
        'mobilebgImage': "url('/src/images/Rectangle3.png')"
      },
      backgroundSize: {
        '50%': '50%',
        '75%': '75%',
        '130%': '130%',
      },
      height: {
        '100': '25rem'
      },
      width: {
        '85': '25rem'
      }
    },
  },
  plugins: [],
}