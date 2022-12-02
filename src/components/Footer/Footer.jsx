import "./Footer.scss";
import home from "../../assets/icons/home.svg";
import scan from "../../assets/icons/scan.svg";
import offers from "../../assets/icons/offers.svg";
import bazaar from "../../assets/icons/bazaar.svg";
import bar from "../../assets/icons/iphone-bar.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <Link to="/" className="footer__link">
            <div className="footer__home">
              <img src={home} alt="Home Icon"/>
              <p>Home</p>
            </div>
          </Link>
          <Link to="/rewards" className="footer__link">
            <div className="footer__scan">
              <img src={scan} alt="Scan Icon"/>
              <p>Scan</p>
            </div>
          </Link>

          <div className="footer__offers">
            <img src={offers} alt="Offers Icon"/>
            <p>Offers</p>
          </div>
          <div className="footer__bazaar">
            {" "}
            <img src={bazaar} alt="Bazaar Icon"/>
            <p>Bazaar</p>
          </div>
        </div>
        <div className="footer__bar">
          <img src={bar} alt="Swipe Up Icon"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
