import React, { useContext } from "react";
import { ThemeContext } from "../ThemeWrapper";
import Loader from "./Loader";

const Background = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id="background" style={{ fontFamily: theme.mainFont }}>
      <div className="proj-desc">
        <h3 data-aos="fade-up">About me</h3>
        <img
          src="https://www.pup.edu.ph/about/images/PUPLogo.png"
          alt="pup logo"
          width={"80px"}
        />
        <h2>Polytechnic University of the Philippines</h2>
        <span> Bachelor of Science in Computer Engineering</span>
        <img
          src="https://edukasyon-production.s3.ap-southeast-1.amazonaws.com/uploads/school/avatar/15854/buting.jpg"
          alt="bshs logo"
          width={"80px"}
        />
        <h2>Buting Senior High School</h2>
        <span>STEM graduated with Honors</span> <br />
      </div>
    </section>
  );
};

export default Background;
