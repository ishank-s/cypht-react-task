const white = "#FFFFFF";
const black = "#181818";

const themeLight = {
  background: white,
  body: black,
  bodyFade: "#868383",
  highLight: "#000",
  boxShadow: "0 2px 12px 0 rgba(0,0,0,.35)"
};

const themeDark = {
  background: black,
  body: white,
  bodyFade: "#b7b3b3",
  highLight: "#fff",
  boxShadow: "0 2px 12px 0 rgba(0,0,0,.35)"
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
