/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffb703',   // molten gold
        secondary: '#fb5607', // ember coral
        accent: '#8338ec',    // dusk violet
        'bg-dark': '#0a0b14',
        'bg-light': '#15172a',
        'text-main': '#f1efe8',
        'text-muted': '#9a97b3',
        'card-bg': 'rgba(255,255,255,0.04)',
        'card-border': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'ember-gradient': 'linear-gradient(135deg, #ffb703, #fb5607, #8338ec)',
        'ember-radial': 'radial-gradient(circle at top, #15172a, #0a0b14)',
      },
      boxShadow: {
        ember: '0 0 20px rgba(255,183,3,0.45)',
        'ember-lg': '0 0 35px rgba(255,183,3,0.75)',
      },
    },
  },
  plugins: [],
}
