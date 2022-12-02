import "./RewardsRefer.scss";
import socials from "../../assets/icons/social.svg"

function RewardsRefer() {
  return (
    <>
      <section className="rewards-refer">
        <h3 className="rewards-refer__text">
          Refer your friends, get 10 stars!
        </h3>
        <div className="rewards-refer__button">
          <div className="rewards-refer__button-text">Copy Link</div>
        </div>
        <p className="rewards-refer__text-bottom">Share on social media</p>
        <img src={socials} />
      </section>
    </>
  );
}

export default RewardsRefer;
