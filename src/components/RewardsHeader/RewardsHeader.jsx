import "./RewardsHeader.scss";
import time from "../../assets/icons/time.svg";
import wifi from "../../assets/icons/wifi.svg";
import cellular from "../../assets/icons/cellular.svg";
import capacity from "../../assets/icons/capacity.svg";
import star from "../../assets/icons/star.svg"

function RewardsHeader() {
    return (
        <>
            <div className="rewards-header">
                <div className="rewards-header__phone">
                    <div className="rewards-header__time">
                        <img src={time} alt="time icon" />
                    </div>
                    <div className="rewards-header__stats">
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

                <div className="rewards-header__container">

                    <p className="rewards-header__balance">100</p>
                    <img className="rewards-header__star" src={star} alt="star" />

                    <h1 className="rewards-header__title" >Mike</h1>
                </div>

                <div className="rewards-header__navs">
                    <div className="rewards-header__navs-left">
                        <p>Scan to collect</p>
                    </div>
                    <div className="rewards-header__navs-right">
                        <p>Scan to pay</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default RewardsHeader;