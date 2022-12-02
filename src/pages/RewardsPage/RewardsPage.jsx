import RewardsFooter from "../../components/RewardsFooter/RewardsFooter";
import RewardsCard from "../../components/RewardsCard/RewardsCard";
import "./RewardsPage.scss";
import RewardsHeader from "../../components/RewardsHeader/RewardsHeader.jsx"


const RewardsPage = () => {
  return (
    <div className="rewardspage">
    <RewardsHeader />
      <div className="rewardspage__card">
        <RewardsCard />
      </div>
      <RewardsFooter />
    </div>
  );
};

export default RewardsPage;
