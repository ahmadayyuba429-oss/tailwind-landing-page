/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        // Tambahkan font lain jika perlu
        // 'poppins': ['Poppins', 'sans-serif'],
        // 'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
