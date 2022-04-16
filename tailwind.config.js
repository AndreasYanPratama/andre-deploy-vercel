// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'pig': "url('/img/pig.png')"
      },
      backgroundSize:{
        'cover' : 'cover',
        '50%': '50%',
        '16': '4rem',
        '100%': '100%',
      },
      position:{
        'relative': 'relative'
      },
      width:{
        '100%' : '100%'
      },
      Height:{
        'vh' :'100vh'
      }
    },
  variants: {
    extend: {
      // visibility: ['group-hover'],
      // divideColor: ['group-hover'],
      // display: ["group-hover"],
    },
  },
  plugins: [],
  }
}

// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
