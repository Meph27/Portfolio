import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeWrapper";

const Card = ({ info }) => {
  const { theme } = useContext(ThemeContext);
  const rating = Math.floor(info.rating / 10);
  const elements = [];

  for (let i = 0; i < 10; i++) {
    const element = (
      <span
        className="rating-load"
        style={{
          borderRadius: theme.radius,
          marginRight: theme.radius ? "2px" : "0",
          backgroundColor:
            i < rating ? theme.accentColor : theme.secondaryColor,
          zIndex: 1,
        }}
        key={i}
      ></span>
    );

    elements.push(element);
  }

  return (
    // <AnimationOnScroll animateIn="animate__fadeInUp">
    <div
      className="card"
      data-aos="fade-up"
      data-aos-duration="700"
      style={{
        border: theme.border,
        borderRadius: theme.radius,
        boxShadow: theme.shadow,
        fontFamily: theme.mainFont,
      }}
    >
      <span style={{ borderRadius: theme.radius }}>
        <img
          src={info.src}
          style={{ borderRadius: theme.radius }}
          alt={info.text}
        />
      </span>

      <span>
        <h2>{info.title}</h2>
      </span>
      <span className="card-rating">{elements.map((el) => el)}</span>

      <span>
        <h4>{info.text}</h4>
      </span>
    </div>
  );
};

export default Card;
