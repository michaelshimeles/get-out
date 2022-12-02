import "./RewardsCard.scss";
import star from "../../assets/icons/star-card.svg";
import smallstar from "../../assets/icons/small-star.svg";
import qr from "../../assets/icons/qr.svg";
import logo from "../../assets/icons/logo.svg";

const RewardsCard = () => {
  return (
    <div className="rewards">
      <div className="rewards__top">
        <div className="rewards__star">
          <img src={star} alt="rewards star icon"/>
        </div>
      </div>

      <div className="rewards__middle">
        <div className="rewards__middle-container">
          <div className="rewards__title">
            <h1>Scan to earn Stars</h1>
          </div>
          <div className="rewards__points">
            <div className="rewards__points-section">
              <div className="rewards__info">
                <p>Earn 1</p>
                <img src={smallstar} alt="small rewards star"/>
              </div>
              <div className="rewards__stats">
                <p>Per $1</p>
              </div>
            </div>
          </div>

          <div className="rewards__bottom">
            <div className="rewards__qr">
              <img src={qr} alt="points card qr code" />
            </div>
            <div className="rewards__logo">
              <img src={logo} alt="get out logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsCard;
