/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ini menyuruh Tailwind cek semua folder di dalam src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}