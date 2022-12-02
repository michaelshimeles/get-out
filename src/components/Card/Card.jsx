import "./Card.scss"

function Card() {

    return (
        <>
            <div className="card">
                <div className="card__image">

                </div>

                <div className="card__container">
                    <h2 className="card__subtitle">For You</h2>
                    <p>Browse some rewards we think you'll love.</p>
                   
                        <div className="card__button" >
                            <div className="card__button-text">Redeem</div>
                        </div>
                    
                </div>

            </div>
        </>


    );
}

export default Card;