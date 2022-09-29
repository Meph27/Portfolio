import React, { useContext } from "react";
import { ThemeContext } from "../ThemeWrapper";

const Introduction = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id="introduction" style={{ fontFamily: theme.mainFont }}>
      <img
        id="my-pic"
        src={require("../assets/my-pic.jpeg")}
        alt="profile photo"
      />
      <h1>Ralph Montilla</h1>
      <span id="titles">
        <h3>Engineer</h3>
        <h3>Developer</h3>
        <h3>Artist</h3>
      </span>
    </section>
  );
};

export default Introduction;
