module.exports = {
  darkmode: true,
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",

  ],
  theme: {

    extend: {

      backgroundImage: {
        'hero-pattern': "url('assets/background.svg')",
      },

      colors: {
        "secondary": "#DEF2F1",
        "primary": "#3AAFA9",
        "tertiary":"#2B7A78",
        "slate": "#D7D7D7",
         "white": "#FEFFFF",
        "black": "#17252A"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },


}
