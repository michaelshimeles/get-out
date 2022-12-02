import "./HeroSection.scss"
import star from "../../assets/icons/star.svg"
const HeroSection = () => {
    return (
        <div className="hero">
            <div className="hero__top">
                <div className="hero__star">
                    <h2>100</h2>
                    <img src={star} alt="star"/>
                </div>
                <p className="hero__star-balance">Star Balance</p>
            </div>
            <div className="hero__bar">
            </div>
            <div className="hero__button">
                <div className="hero__button-left">
                    Details
                </div>
                <div className="hero__button-right">
                    Redeem
                </div>
            </div>
        </div>
    )
}

export default HeroSection