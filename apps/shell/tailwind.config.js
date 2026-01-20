const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/**/*.{js,jsx,ts,tsx}',
    path.resolve(__dirname, 'src/**/*.{js,jsx,ts,tsx}'),
    
    // kakaobank 코드도 shell에서 렌더링되므로 포함
    path.resolve(__dirname, '../../packages/kakaobank/src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
