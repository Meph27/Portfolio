import React, { useContext } from "react";
import { ThemeContext } from "../ThemeWrapper";
import Loader from "./Loader";

const Introduction = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id="introduction" style={{ fontFamily: theme.mainFont }}>
      <div style={{ position: "relative" }}>
        <h1>Ralph Montilla</h1>
        <h3>Engineer</h3>
        <h3>Developer</h3>
        <h3>Artist</h3>
      </div>
    </section>
  );
};

export default Introduction;
