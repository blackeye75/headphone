/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#aa6d6b",
        brandDark: "#151616",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-thin': {
          '::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#4A5568',
            borderRadius: '4px',
          },
          '::-webkit-scrollbar-track': {
            background: '#EDF2F7',
          },
        },
        '.scrollbar-none': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
};