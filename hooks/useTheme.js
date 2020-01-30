import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "../theme/theme";
const defaultContextData = {
  dark: false,
  toggle: () => {}
};

const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeMounted: false
  });
  useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true";
    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeState.dark]);
  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();
  if (!themeState.hasThemeMounted) {
    //Show nothing while theme is loading on localStorage
    return <div />;
  }
  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const computedTheme = themeState.dark ? theme("dark") : theme("light");
  return (
    <StyledThemeProvider theme={computedTheme}>
      <ThemeContext.Provider value={{ dark: themeState.dark, toggle }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
export { ThemeProvider, useTheme };
