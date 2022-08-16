/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        primary: 'var(--color-primary)',
        muted: 'var(--color-muted)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
      },
      backgroundColor: {
        primary: 'var(--color-background-primary)',
        muted: 'var(--color-background-muted)',
        secondary: 'var(--color-background-secondary)',
        tertiary: 'var(--color-background-tertiary)',
      },
      borderColor: {
        muted: 'var(--color-muted)',
      },
      borderRadius: {
        base: '8px',
      },
      transitionTimingFunction: {
        base: 'ease-in-out',
      },
      transitionDuration: {
        md: '0.2s',
      },
      fontSize: {
        32: ['32px', { lineHeight: '38px' }],
      },
      letterSpacing: {
        base: '1.2px',
      },
      spacing: {
        15: '60px',
      },
      backgroundImage: {
        'home-gradient':
          'radial-gradient(circle at 10% 90%, hsl(252 40.1% 22.5%), rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 95% 30%, hsl(192 79.3% 12.8%), rgba(255, 255, 255, 0) 25%)',
      },
      keyframes: {
        'ping-right': {
          '0%, 100%': {
            left: 0,
            transform: 'translateX(0)',
          },
          '50%': {
            left: '100%',
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'ping-right': 'ping-right 1s theme(transitionTimingFunction.base) infinite',
      },
    },
  },
  plugins: [],
};
