import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "white",
            primary: {
              DEFAULT: "#222",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
        light: {
          colors: {
            background: "white",
            primary: {
              DEFAULT: "#222",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
    require('tailwindcss-animated')
  ],
}
