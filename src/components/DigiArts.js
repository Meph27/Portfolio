import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DigiArts = () => {
  return (
    <section id="darts">
      <h3 data-aos="fade-down">Digital Arts</h3>
      <div className="carousel-info">
        <Carousel>
          <div>
            <img src={require("../assets/dart-1.png")} />
          </div>
          <div>
            <img src={require("../assets/dart-2.jpg")} />
          </div>
          <div>
            <img src={require("../assets/dart-3.png")} />
          </div>
          <div>
            <img src={require("../assets/dart-4.jpeg")} />
          </div>
          <div>
            <img src={require("../assets/dart-5.jpg")} />
          </div>
          <div>
            <img src={require("../assets/dart-6.jpg")} />
          </div>
          <div>
            <img src={require("../assets/dart-7.jpg")} />
          </div>
        </Carousel>
        <div className="proj-desc">
          <p>
            I love creating, be it portraits of people, pixel art for a game, or
            the UI of an website. With continuous practice of my craft I have
            learnt a lot when it comes to making things look appealing.
            Functionality and appearance are two sides of the same coin when it
            comes to development.
          </p>

          <h4>Technology</h4>
          <span className="img-span">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
              alt="photoshop-logo"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default DigiArts;
