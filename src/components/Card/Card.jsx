import "./Card.scss"
import greyBox from "../../assets/images/Frame 155 (1).png"

function Card() {

    return (
        <>
            <div className="card">
                <div className="card__image">
                <img src={greyBox} alt="greybox"/>
                </div>

                <div className="card__container">
                    <h2 className="card__subtitle">subhead</h2>
                    <p className="card__text">Browse some rewards we think you'll love.Browse some rewards we think you'll love.</p>

                    <div className="card__button" >
                        <div className="card__button-text">Redeem</div>
                    </div>

                </div>

            </div>

            <div className="card">
                    <div className="card__image">
                <img src={greyBox} alt="greybox"/>
                </div>

                <div className="card__container">
                    <h2 className="card__subtitle">subhead</h2>
                    <p className="card__text">Browse some rewards we think you'll love.Browse some rewards we think you'll love.</p>

                    <div className="card__button" >
                        <div className="card__button-text">Redeem</div>
                    </div>

                </div>

            </div>

            <div className="card">
                <div className="card__image">
                        <img src={greyBox} alt="greybox"/>
                </div>

                <div className="card__container">
                    <h2 className="card__subtitle">subhead</h2>
                    <p className="card__text">Browse some rewards we think you'll love.Browse some rewards we think you'll love.</p>

                    <div className="card__button" >
                        <div className="card__button-text">Redeem</div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Card;