import "./Card.scss";

function Card({ image, header, subheader, buttonText }) {
  return (
    <div className="card">
      <div className="card__section">
        <div className="card__image">
          <img src={image} alt="greybox" />
        </div>

        <div className="card__container">
          <div className="card__info">
            <h2 className="card__subtitle">{header}</h2>
            <p className="card__text">{subheader}</p>
          </div>

          <div className="card__button">
            <div className="card__button-section">
              <div className="card__button-text">{buttonText}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
