import RewardsFooter from "../../components/RewardsFooter/RewardsFooter";
import RewardsCard from "../../components/RewardsCard/RewardsCard";
import "./RewardsPage.scss";
import RewardsHeader from "../../components/RewardsHeader/RewardsHeader.jsx";
import RewardsRefer from "../../components/RewardsRefer/RewardsRefer";

const RewardsPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="rewardspage">
      <RewardsHeader />
      <div className="rewardspage__card">
        <RewardsCard />
        <RewardsRefer />
      </div>
      <RewardsFooter />
    </div>
  );
};

export default RewardsPage;
