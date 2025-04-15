/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right,rgb(174, 218, 209), #94b9ff)',
      },
      colors: {
        primary: '#4caac7',
        secondary: '#6bb3c7',
        accent: '#8abcc8',
        light: '#aac6c9',
        background: '#f3f0e8',
        dark: '#3a1a6a',
        blue: '#94b9ff',
        lightdark: '#292929'
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
