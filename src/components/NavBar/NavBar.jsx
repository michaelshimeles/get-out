import "./NavBar.scss";
import profile from "../../assets/icons/profile.svg";
import time from "../../assets/icons/time.svg";
import wifi from "../../assets/icons/wifi.svg";
import cellular from "../../assets/icons/cellular.svg";
import capacity from "../../assets/icons/capacity.svg";
const NavBar = () => {
  return (
    <header className="header">
      <div className="header__phone">
        <div className="header__time">
          <img src={time} alt="time icon" />
        </div>
        <div className="header__stats">
          <div>
            <img src={cellular} alt="cellular network icon" />
          </div>
          <div>
            <img src={wifi} alt="wifi icon" />
          </div>
          <div>
            <img src={capacity} alt="battery status icon" />
          </div>
        </div>
      </div>
      <div className="header__title">
        <h1 className="header__text">Welcome, Mike</h1>
      </div>
      <div className="header__section">
        <div className="header__navs">
          <div className="header__navs-left">
            <p>My Rewards</p>
          </div>
          <div className="header__navs-right">
            <p>History</p>
          </div>
        </div>
        <div className="header__navs-icon">
          <img src={profile} alt="user profile icon" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
