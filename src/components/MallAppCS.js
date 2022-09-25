import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MallAppCS = () => {
  return (
    <section id="mallappcs">
      <h3 data-aos="fade-down">Online Mall App UI/UX Case Study</h3>
      <div className="carousel-info">
        <Carousel>
          <div>
            <img src={require("../assets/mcs-home.png")} />
          </div>
          <div>
            <img src={require("../assets/mcs-discover.png")} />
          </div>
          <div>
            <img src={require("../assets/mcs-product.png")} />
          </div>
          <div>
            <img src={require("../assets/mcs-reviews.png")} />
          </div>
          <div>
            <img src={require("../assets/mcs-bag.png")} />
          </div>
          <div>
            <img src={require("../assets/mcs-checkout.png")} />
          </div>
          <div>
            <img src={require("../assets/mcs-wallet.png")} />
          </div>
          <div>
            <img src={require("../assets/mcs-orderplaced.png")} />
          </div>
        </Carousel>
        <div className="proj-desc">
          <p>
            Using Figma I visualized how it would look like if we apply more
            modern UI trends on an online mall app. I tried to show more use of
            whitespace, heirarchy of text, and highlighting CTAs with a
            minimalist and clean interface.
          </p>

          <h4>Technology</h4>
          <span className="img-span">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              alt="figma-logo"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default MallAppCS;
