/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins, sans-serif',
      },
      colors: {
        'primary-main': '#55e6a5',
        'primary-dark': '#02050a',
        'primary-gray': '#09101a',
        'primary-blue-gray': '#141c27',
      }
    },
  },
  plugins: [],
}
