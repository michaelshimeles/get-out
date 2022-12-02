import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import ScanCard from "../../components/ScanCard/ScanCard";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card.jsx";
import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />

      <HeroSection />

      <Link to="/rewards">
        <ScanCard />
      </Link>
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
