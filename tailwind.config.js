/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#F4F8F5',
          100: '#EDF4EF',
          200: '#D4E8DA',
          300: '#B0D4BB',
          400: '#8BB89A',
          500: '#5A8A6A',
          600: '#3D6B4F',
          700: '#2E5440',
          800: '#1E3D2C',
          900: '#122619',
        },
        amber: {
          50:  '#FDF7EE',
          100: '#FBF3E8',
          200: '#F5E0C0',
          300: '#E8C08A',
          400: '#D4924A',
          500: '#C17D2E',
          600: '#A86520',
          700: '#8A5018',
        },
        neutral: {
          0:   '#FFFFFF',
          50:  '#F8F7F4',
          100: '#F2F0EC',
          200: '#E8E6E1',
          300: '#D6D4CE',
          400: '#B5B5AF',
          500: '#8C8C87',
          600: '#6A6A65',
          700: '#4A4A46',
          800: '#2E2E2A',
          900: '#1A1A18',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(26,26,24,0.06), 0 4px 16px rgba(26,26,24,0.06)',
        'card-hover': '0 4px 8px rgba(26,26,24,0.08), 0 12px 32px rgba(26,26,24,0.1)',
        'sage': '0 8px 24px rgba(61,107,79,0.18)',
        'amber': '0 8px 24px rgba(193,125,46,0.22)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
