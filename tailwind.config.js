/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "www-fptpray-com-1920x859-default-nero": "#fff",
        "www-fptpray-com-1920x859-default-clementine": "#e76701",
        "www-fptpray-com-1920x859-default-silver": "#bdbdbd",
        "www-fptpray-com-1920x859-default-boulder": "#757575",
        "www-fptpray-com-1920x859-default-gallery": "#eee",
      },
      spacing: {},
      fontFamily: {
        "www-fptpray-com-1920x859-default-roboto-regular-16": "Roboto",
      },
    },
    fontSize: {
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
