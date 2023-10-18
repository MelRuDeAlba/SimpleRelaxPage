module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      colors: {
        'black': '#141010',
        'blue': '#9BB8ED',
        'purple': '#A39FE1',
        'pink': '#DEB3E0',
        'rose': '#FEC6DF',
        'piggy': '#FFDDE4',
        'yellow': '#FEECD6'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        justAnotherHand: ['Just Another Hand', 'cursive'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
}