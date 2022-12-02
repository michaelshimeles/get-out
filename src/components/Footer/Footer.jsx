import "./Footer.scss";
import home from "../../assets/icons/home.svg";
import scan from "../../assets/icons/scan.svg";
import offers from "../../assets/icons/offers.svg";
import bazaar from "../../assets/icons/bazaar.svg";
import bar from "../../assets/icons/iphone-bar.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__home">
            <img src={home} />
            <p>Home</p>
          </div>
          <div className="footer__scan">
            <img src={scan} />
            <p>Scan</p>
          </div>
          <div className="footer__offers">
            <img src={offers} />
            <p>Offers</p>
          </div>
          <div className="footer__bazaar">
            {" "}
            <img src={bazaar} />
            <p>Bazaar</p>
          </div>
        </div>
        <div className="footer__bar">
          <img src={bar} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
