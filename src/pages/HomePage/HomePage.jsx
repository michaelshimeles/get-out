import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import ScanCard from "../../components/ScanCard/ScanCard";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card.jsx";
import "./HomePage.scss";
import { NavLink } from "react-router-dom";
import bday from "../../assets/images/bday.svg";
import refferal from "../../assets/images/refferal.svg";
import on_the_go from "../../assets/images/on-to-go.svg"
import foryou from "../../assets/images/foryou.svg"


const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />

      <HeroSection />

      <NavLink to="/rewards">
        <ScanCard />
      </NavLink>
      <Footer />
      <div className="homepage__cards">
        <Card
          image={on_the_go}
          header={"REWARDS FOR ON THE G.O."}
          subheader={
            "Concerts, shows, events, festivals - GetOut Rewards has you covered. The gift that unlocks experiences."
          }
        />
        <Card
          image={bday}
          header={"BIRTHDAY REWARDS"}
          subheader={
            "Did someone say birthday? Let us treat you! Enter your birthday information and we'll send you a special gift."
          }
        />
        <Card
          image={refferal}
          header={"REFERRAL PROGRAM"}
          subheader={"Refer friends and get 10 stars for every sign up."}
        />
        <Card
          image={foryou}
          header={"FOR YOU"}
          subheader={"Browse some rewards we think you'll love. "}
        />
      </div>
    </div>
  );
};

export default HomePage;
