import React, { useContext, useEffect, useRef, useState } from "react";
import { elementScrollIntoViewPolyfill } from "seamless-scroll-polyfill";
import { ThemeContext } from "../ThemeWrapper";

const stopPoints = [
  {
    to: "introduction",
    label: "",
    start: 0,
    stop: 15,
  },
  { to: "background", label: "About Me", start: 16, stop: 48 },
  { to: "sincereteapos", label: "Sinceretea POS", start: 81, stop: 100 },
  {
    to: "lessandrapass",
    label: "Lessandra HOA",
    start: 100,
    stop: 200,
  },
  {
    to: "mallappcs",
    label: "UI Case Study",
    start: 100,
    stop: 200,
  },
];
elementScrollIntoViewPolyfill();

const Navigator = () => {
  const [prog, setProg] = useState(0);
  const [transY, setTransY] = useState(window.innerWidth > 1099);
  const wH = window.innerHeight;
  const { theme } = useContext(ThemeContext);
  const linksRef = useRef([]);
  const getScrollPercent = () => {
    const a = window.scrollY;
    const b = document.body.scrollHeight - wH;
    const progress = (a / b) * -100;
    if (progress) {
      updNav(-progress);
    }
    setProg(progress <= 100 ? progress : 100);
  };
  const updNav = (progress) => {
    stopPoints.forEach((obj, ind) => {
      if (progress >= obj.start && progress <= obj.stop) {
        linksRef.current[ind].classList.add("active");
      } else linksRef.current[ind].classList.remove("active");
    });
  };
  const getDevW = () => {
    setTransY(window.innerWidth > 1099);
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPercent, false);
    window.addEventListener("resize", getDevW, false);
    return () => {
      window.removeEventListener("scroll", getScrollPercent);
      window.removeEventListener("resize", getDevW);
      setProg(0);
    };
  }, []);
  return (
    <div
      id="navigator-cont"
      style={{
        transform:
          "translate3d(" +
          (transY ? 0 : prog + "%") +
          "," +
          (transY ? prog + "%" : 0) +
          ",0)",
      }}
    >
      <span id="navprog-cont">
        <span
          id="nav-prog"
          style={
            transY
              ? {
                  backgroundColor: theme.accentColor,
                  transform: `scaleY(${-prog / 100})`,
                  height: "100%",
                }
              : {
                  backgroundColor: theme.accentColor,
                  width: -prog + "%",
                }
          }
        ></span>
      </span>

      <span id="navigator">
        {stopPoints.map((el, ind) => {
          const progr = -prog;
          const activ = progr >= el.start && progr <= el.stop;
          const op = progr >= el.start ? 1 : 0.4;
          return (
            <span
              className={"a-cont " + (activ ? "active" : "")}
              key={ind}
              onClick={() => {
                const element = document.getElementById(el.to);
                console.log(el.to);
                element.scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                });
              }}
            >
              <span className="link-label">
                {ind ? (
                  <span
                    style={{
                      color: theme.accentColor,
                      backgroundColor: theme.mainColor,
                      opacity: op,
                    }}
                  >
                    {el.label}
                  </span>
                ) : null}
              </span>
              <span
                data-index={ind}
                ref={(ref) => (linksRef.current[ind] = ref)}
                style={{
                  backgroundColor: theme.accentColor,
                  opacity: op,
                  width: !ind && "0px",
                }}
                className={"button "}
              ></span>
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default Navigator;
