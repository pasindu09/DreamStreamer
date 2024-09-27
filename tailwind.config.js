/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'sidebar-blue': '#3d68ff',
      'cta-blue': '#1947ee',
      'hover-blue': '#0038fd',
      customGray: '#D9D9D9'
      },
      fontFamily: {
        'michroma': ['Michroma', 'sans-serif'],
          karla: ['Karla', 'sans-serif'],
          sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
