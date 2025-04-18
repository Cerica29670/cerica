const { createThemes } = require('tw-colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: { extend: {} },
  plugins: [
    createThemes({
      coal: {
        background: '#0f0f0f',
        foreground: '#e5e5e5',
        primary:    '#181818',
        accent:     '#262626',
        muted:      '#3d3d3d'
      }
    })
  ]
}
