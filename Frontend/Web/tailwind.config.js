/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 必要に応じて仕様書の色を追加してください
        'main-blue': '#1e40af', 
      },
    },
  },
  plugins: [],
}