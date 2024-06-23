import {nextui} from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    /* themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#ff4f00",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#ff4f00",
            foreground: "#ffffff",
          },
          focus: "#BEF264",
        },
      }
    } */
  })],
}
