/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F3',
        navy: '#22304A',
        gold: '#C6A664',
        burgundy: '#7C3048',
        sage: '#A6B89A',
        dove: '#E5E2DD',
      },
    },
  },
  plugins: [],
};
