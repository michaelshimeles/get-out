import "./Card.scss";

function Card( {image, header, subheader}) {
  return (
    <>
      <div className="card">
        <div className="card__image">
          <img src={image} alt="greybox" />
        </div>

        <div className="card__container">
          <h2 className="card__subtitle">{header}</h2>
          <p className="card__text">
            {subheader}
          </p>

          <div className="card__button">
            <div className="card__button-text">Redeem</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
