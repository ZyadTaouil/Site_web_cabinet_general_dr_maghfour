export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EDED',
          100: '#CCDCDC',
          200: '#99B9B9',
          300: '#669595',
          400: '#337272',
          500: '#2C7373',
          600: '#236262',
          700: '#1A5151',
          800: '#124040',
          900: '#092F2F',
        },
        accent: {
          50: '#FFF8E6',
          100: '#FFEFC0',
          200: '#FFE299',
          300: '#FFD066',
          400: '#FFC23F',
          500: '#FFB619',
          600: '#E69F00',
          700: '#CC8C00',
          800: '#B37A00',
          900: '#996800',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'highlight': '0 0 15px rgba(44, 115, 115, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'medical-pattern': "url('/images/medical-pattern.png')",
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}