import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import ScanCard from "../../components/ScanCard/ScanCard";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card.jsx";
import "./HomePage.scss";
import { NavLink } from "react-router-dom";

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HomePage;
