const white = "#FFFFFF";
const black = "#181818";

const themeLight = {
  background: white,
  body: black,
  bodyFade: "#868383",
  highLight: "#1de9b6"
};

const themeDark = {
  background: black,
  body: white,
  bodyFade: "#b7b3b3",
  highLight: "#1565c0"
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
