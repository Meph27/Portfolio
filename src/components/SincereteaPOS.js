import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SincereteaPOS = () => {
  return (
    <section id="sincereteapos">
      <h3 data-aos="fade-down">Sinceretea Point of Sale</h3>
      <div className="carousel-info">
        <Carousel>
          <div>
            <img src={require("../assets/spos-home.png")} alt="image" />
            <p className="legend">POS Home</p>
          </div>
          <div>
            <img src={require("../assets/spos-item.png")} alt="image" />
            <p className="legend">Item pop up</p>
          </div>
          <div>
            <img src={require("../assets/spos-checkout.png")} alt="image" />
            <p className="legend">Order confirmed</p>
          </div>
          <div>
            <img src={require("../assets/spos-offlinerec.png")} alt="image" />
            <p className="legend">Offline records</p>
          </div>
          <div>
            <img src={require("../assets/spos-custom.png")} alt="image" />
            <p className="legend">Custom item</p>
          </div>
          <div>
            <img src={require("../assets/spos-olreceipt.png")} alt="image" />
            <p className="legend">Online receipt</p>
          </div>
        </Carousel>
        <div className="proj-desc">
          <p>
            For my internship i was part of a team that designed and built a
            test Point of sale website for a milktea shop. I was assigned in
            both back-end and front-end development creating some of the main
            functionalities of the website. During this i learned working with
            REST APIs, subdomains, session based auth, caching, data
            manipulation and user experience.
          </p>
          <h4>Key Features</h4>
          <p>
            Some of the features includes: point of sale system, branch-based
            login, offline functionality, online receipt, and sales record.
          </p>
          <h4>Technology</h4>
          <span className="img-span">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              alt="javascript-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="react-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
              alt="laravel-logo"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SincereteaPOS;
