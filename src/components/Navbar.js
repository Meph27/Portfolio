import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../ThemeWrapper";

const PageProgress = () => {
  const { theme } = useContext(ThemeContext);
  const [prog, setProg] = useState(0);
  const toggleTracker = useRef();
  let timeout;
  const getScrollPercent = () => {
    const a = window.scrollY;
    const b = document.body.scrollHeight - window.innerHeight;
    const progress = Math.round((a / b) * 100);
    setProg(progress);
    console.log(progress);
    if (progress < 20) {
      toggleTracker.current.style.opacity = 0;
    } else toggleTracker.current.style.opacity = 1;
    window.clearTimeout(timeout);

    timeout = setTimeout(function () {
      toggleTracker.current.style.opacity = 0;
    }, 1500);
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPercent, false);
    return () => {
      window.removeEventListener("scroll", getScrollPercent);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <div id="progress-cont" ref={toggleTracker}>
        <div className="track-cont">
          <svg
            id="eU1Y3567LmT1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            width="100px"
          >
            <path
              d="M149.999997,28.673553c19.639351-9.181757,77.863626,109.077987,80.209284,121.326442c2.445668,12.770682-52.345035,41.390627-80.209284,50.40792-12.630081,4.087286-25.932444-.912273-25.818018-14.186752.071012-8.238107,10.392742-11.272943,14.560342-18.379458c20.109307-34.290021-19.499339-113.984908,11.257676-139.168152Z"
              transform="matrix(1.506763 0 0 1.546153-103.968031-28.7018)"
              fill="none"
              stroke={theme.secondaryColor}
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="track-cont">
          <svg
            id="eU1Y3567LmT1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            width="100px"
          >
            <path
              d="M149.999997,28.673553c19.639351-9.181757,77.863626,109.077987,80.209284,121.326442c2.445668,12.770682-52.345035,41.390627-80.209284,50.40792-12.630081,4.087286-25.932444-.912273-25.818018-14.186752.071012-8.238107,10.392742-11.272943,14.560342-18.379458c20.109307-34.290021-19.499339-113.984908,11.257676-139.168152Z"
              transform="matrix(1.506763 0 0 1.546153-103.968031-28.7018)"
              fill="none"
              stroke={
                prog
                  ? "linear-gradient(304deg, rgba(29,29,31,.4) 0%, rgba(91,91,103,.4) 45%, rgba(161,186,190,.4) 100%)"
                  : ""
              }
              strokeWidth="10"
              strokeLinecap="round"
              className="progress-path"
              style={{
                stroke: prog > 10 ? "url(#0)" : "none",
                strokeDasharray: document.body.scrollHeight,
                strokeDashoffset: prog
                  ? document.body.scrollHeight - prog * 4.5
                  : 2000,
              }}
            />
          </svg>
        </div>
      </div>
      <svg height="0" width="0">
        <defs>
          <linearGradient id="0" x1="0" y1="0.5" x2="1" y2="0.5">
            <stop offset="0%" stopColor="#3182ce" />
            <stop offset="14.29%" stopColor="#348fc5" />
            <stop offset="28.57%" stopColor="#389ac2" />
            <stop offset="42.86%" stopColor="#3ca5c1" />
            <stop offset="57.14%" stopColor="#41b0c2" />
            <stop offset="71.43%" stopColor="#45bbc3" />
            <stop offset="100%" stopColor="#4fd1c5" />
          </linearGradient>
        </defs>
        <rect fill="url(#0)" height="100%" width="100%" />
        <rect fill="url(#1)" height="100%" width="100%" />
      </svg>
    </div>
  );
};

export default PageProgress;
