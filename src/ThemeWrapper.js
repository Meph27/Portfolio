import React, { createContext, useState } from "react";
import Introduction from "./components/Introduction";
import Background from "./components/Background";
import Navigator from "./components/Navigator";
import SincereteaPOS from "./components/SincereteaPOS";
import LessandraPASS from "./components/LessandraPASS";
import MallAppCS from "./components/MallAppCS";
import DigiArts from "./components/DigiArts";
import Contact from "./components/Contact";

const themes = {
  default: {
    id: 1,
    mainFont: "Manrope",
    radius: "2px",
    border: "",
    mainColor: "white",
    secondaryColor: "#bdc6d1",
    accentColor: "#595F60",
    textColor: "#32383e",
    shadow: "", //0px 4px 10px 1px rgba(230, 226, 226, 0.727)
  },
  dark: {
    id: 2,
    mainFont: "Poppins",
    radius: "10px",
    border: "",
    mainColor: "#292c2e",
    secondaryColor: "#6e777c",
    accentColor: "#7e848b",
    textColor: "#dde5e9",
    shadow: "", //0p
  },
};

export const ThemeContext = createContext();

const ThemeWrapper = (props) => {
  const [theme, setTheme] = useState(themes.default);
  document.body.style.backgroundColor = themes.default.mainColor;

  const changeTheme = (id) => {
    document.body.style.backgroundColor = themes.default.mainColor;
    setTheme(themes[id]);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
        id="fullpage"
        style={{
          backgroundColor: theme.mainColor,
          fontFamily: theme.mainFont,
          color: theme.textColor,
        }}
      >
        <Introduction />
        <Background />
        <SincereteaPOS />
        <LessandraPASS />
        <MallAppCS />
        <DigiArts />
        <Contact />
        <Navigator />
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
