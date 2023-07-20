/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  corePlugins: {
    aspectRatio: false
  },
  plugins: [
    //require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin')
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { "50": "#e3ffbf", "100": "#d4fc9f", "200": "#c2f57f", "300": "#aceb59", "400": "#60a5fa", "500": "#3b82f6", "600": "#498003", "700": "#417301", "800": "#376101", "900": "#2c4d01", "950": "#172554" }
      }
    },
    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  }
};

