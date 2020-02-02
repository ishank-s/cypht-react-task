const white = "#FFFFFF";
const black = "#181818";

const themeLight = {
  background: white,
  body: black,
  bodyFade: "#868383",
  highLight: "#000",
  boxShadow: "13px 32px 36px -14px rgba(0,0,0,.35)",
  botIcon: "/surveyBot.svg"
};

const themeDark = {
  background: black,
  body: white,
  bodyFade: "#b7b3b3",
  highLight: "#fff",
  boxShadow: "13px 32px 36px -14px rgba(255,255,255,.35)",
  botIcon: "/surveyBotDark.svg"
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
