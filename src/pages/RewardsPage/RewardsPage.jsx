import RewardsFooter from "../../components/RewardsFooter/RewardsFooter";
import RewardsCard from "../../components/RewardsCard/RewardsCard";
import "./RewardsPage.scss";

const RewardsPage = () => {
  return (
    <div className="rewardspage">
      <div className="rewardspage__card">
        <RewardsCard />
      </div>
      <RewardsFooter />
    </div>
  );
};

export default RewardsPage;
