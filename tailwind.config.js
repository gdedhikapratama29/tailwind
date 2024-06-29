/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        " Circular STD": [' Circular STD']
      },
      colors : {
        "unggu" : '#5D50C6',
        "blue" : '#3b82f6',
        "pink" : '#ec4899'
      },
      dropShadow : {
        "sm-shadow" : [
         '0px 548px 219px rgba(0,0,0, 0.01)',
           '0px 308px 185px rgba(0,0,0, 0.04)',
            '0px 137px 137px rgba(0,0,0, 0.06)',
           '0px 34px 75px rgba (0,0,0, 0.07)',
             ' 0px 0px 0px rgba(0,0,0, 0.07)'
        ],
        "lg-shadow" : [
          '0px 81px 32px rgba(0,0,0, 0.01)',
          '0px 45px 27px rgba(0,0,0, 0.05)',
          '0px 20px 20px rgba(0,0,0, 0.09)',
          '0px 5px 11px rgba(0,0,0, 0.1)',
          '0px 0px 0px rgba(0,0,0, 0.1)'
        ]
      },
    },
  },
  plugins: [],
}

