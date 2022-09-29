import React, { useContext } from "react";
import { ThemeContext } from "../ThemeWrapper";

const Background = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id="background" style={{ fontFamily: theme.mainFont }}>
      <div className="proj-desc">
        <h3 data-aos="fade-up">About me</h3>
        <div id="abtme-cont">
          <div id="bg-educ">
            <h2>Education</h2>
            <h4>Polytechnic University of the Philippines</h4>
            <span> Bachelor of Science in Computer Engineering</span>
            <h4>Buting Senior High School</h4>
            <span>STEM graduated with Honors</span>
          </div>
          <div id="desc-me">
            <p id="p-me">
              A computer engineer with the passion for learning and creating.
              With a can-do attitude I face life's obstacles head-on and
              eventually strive in it. I like working alone but I also excel
              working in a group.
              <br />
              <br />
              People classify me as quiet because I always try to keep things
              straight to the point but always empathetic. As an artist I like
              to incorporate attractiveness and interest to what I create.
              Clean, intuitive, and reliable is what I strive for where of
              course I have yet a lot to learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
