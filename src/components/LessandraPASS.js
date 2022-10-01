import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const LessandraPASS = () => {
  return (
    <section id="lessandrapass">
      <h3 data-aos="fade-down">
        Lessandra HOA site and Resident Validation using QR and RFID
      </h3>
      <div className="carousel-info">
        <Carousel>
          <div>
            <img src={require("../assets/lpass-home.png")} />
            <p className="legend">HOA home</p>
          </div>
          <div>
            <img src={require("../assets/lpass-mlogin.png")} />
            <p className="legend">Mobile signup</p>
          </div>
          <div>
            <img src={require("../assets/lpass-account.png")} />
            <p className="legend">Account page</p>
          </div>
          <div>
            <img src={require("../assets/lpass-qr.png")} />
            <p className="legend">QR</p>
          </div>
          <div>
            <img src={require("../assets/lpass-qrscan.png")} />
            <p className="legend">QR scanner</p>
          </div>
          <div>
            <img src={require("../assets/lpass-admin.png")} />
            <p className="legend">Scan records</p>
          </div>
          <div>
            <img src={require("../assets/lpass-locndevices.png")} />
            <p className="legend">Locations and devices manager</p>
          </div>
          <div>
            <img src={require("../assets/lpass-bulletin.png")} />
            <p className="legend">Bulletin</p>
          </div>
        </Carousel>
        <div className="proj-desc">
          <p>
            For our thesis i designed and built a QR and RFID-based resident
            verification and records system along with a home owner’s
            association website. For this project i worked mostly by myself
            designing and coding both for the website and for the embedded
            network device.
          </p>
          <h4>Key Features</h4>
          <p>
            Some of the features include: QR/RFID registration and scanning,
            role-based login, bulletin, notification system, email verification,
            comprehensive entry records, guest and resident management.
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
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg"
              alt="arduino-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
              alt="c++-logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              alt="nodejs-logo"
            />
            <img
              src="https://webimages.mongodb.com/_com_assets/cms/kusb9stg1ndrp7j53-MongoDBLogoBrand1.png?auto=format%252Ccompress"
              alt="mongodb-logo"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default LessandraPASS;
