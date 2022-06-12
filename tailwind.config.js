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
    screens: {
      '2sm': {'max': '480px'},

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    // extend: {
    //   backgroundImage:{
    //     'pig': "url('/img/pig.png')"
    //   },
    //   backgroundSize:{
    //     'cover' : 'cover',
    //     '50%': '50%',
    //     '16': '4rem',
    //     '100%': '100%',
    //   },
    //   position:{
    //     'relative': 'relative'
    //   },
    //   width:{
    //     '100%' : '100%'
    //   },
    //   Height:{
    //     'vh' :'100vh'
    //   }
    // },
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
