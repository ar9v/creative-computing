module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
	  screens: {
		  sm: '640px',
		  md: '768px',
		  lg: '1024px',
		  xl: '1280px',
      },
      extend: {
		  colors: {
			  black: "#111",
			  white: "#fffff8",
		  }
	  },
	  fontFamily: {
		  display: ['Helvetica', 'sans-serif'],
		  body: ['Helvetica', 'sans-serif']
	  }
  },
  variants: {},
  plugins: [],
}
