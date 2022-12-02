import "./RewardsFooter.scss";
import home from "../../assets/icons/home-notclicked.svg";
import scan from "../../assets/icons/scan-clicked.svg";
import offers from "../../assets/icons/offers.svg";
import bazaar from "../../assets/icons/bazaar.svg";
import bar from "../../assets/icons/iphone-bar.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="rewards-footer">
      <div className="rewards-footer__container">
        <div className="rewards-footer__top">
          <Link to="/" className="rewards-footer__link">
            <div className="rewards-footer__home">
              <img src={home} />
              <p>Home</p>
            </div>
          </Link>
          <Link to="/rewards" className="rewards-footer__link">
            <div className="rewards-footer__scan">
              <img src={scan} />
              <p>Scan</p>
            </div>
          </Link>

          <div className="rewards-footer__offers">
            <img src={offers} />
            <p>Offers</p>
          </div>
          <div className="rewards-footer__bazaar">
            {" "}
            <img src={bazaar} />
            <p>Bazaar</p>
          </div>
        </div>
        <div className="rewards-footer__bar">
          <img src={bar} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
