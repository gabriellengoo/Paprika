module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        paprika: {
          black: '#0B0B0B',
          dark: '#6E6E6E',
          grey: '#D9D9D9',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        apercu: ['ApercuPro', 'sans-serif'],
      },
      spacing: {
        'gap-big': '32px',
        'gap-mid': '16px',
        'gap-sm': '8px',
        'gap-tiny': '2px',

        'border-w': '50px',
        'border-h': '40px',
      },
      fontSize: {
        h1: '128px',
        h2: '50px',
        button: '35px',
        base24: '24px',
        subtitle: '15px',
      }
    }
  }
}
