import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MallAppCS = () => {
  return (
    <section id="mallappcs">
      <h3 data-aos="fade-down">Online Mall App Case Study</h3>
      <div className="carousel-info">
        <Carousel>
          <div>
            <img src={require("../assets/mcs-home.png")} />
            <p className="legend">HOA home</p>
          </div>
          <div>
            <img src={require("../assets/mcs-discover.png")} />
            <p className="legend">Mobile signup</p>
          </div>
          <div>
            <img src={require("../assets/mcs-product.png")} />
            <p className="legend">Account page</p>
          </div>
          <div>
            <img src={require("../assets/mcs-reviews.png")} />
            <p className="legend">QR</p>
          </div>
          <div>
            <img src={require("../assets/mcs-bag.png")} />
            <p className="legend">QR scanner</p>
          </div>
          <div>
            <img src={require("../assets/mcs-checkout.png")} />
            <p className="legend">Scan records</p>
          </div>
          <div>
            <img src={require("../assets/mcs-wallet.png")} />
            <p className="legend">Locations and devices manager</p>
          </div>
          <div>
            <img src={require("../assets/mcs-orderplaced.png")} />
            <p className="legend">Bulletin</p>
          </div>
        </Carousel>
        <div className="proj-desc">
          <p></p>

          <h4>Technology</h4>
          <span className="img-span">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              alt="javascript-logo"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default MallAppCS;
