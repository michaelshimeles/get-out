import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import ScanCard from "./components/ScanCard/ScanCard";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card.jsx";

import "./App.scss";
function App() {
  return (
    <div className="app">
      <NavBar />

      <HeroSection />

      <ScanCard />
      <Footer />
      <Card />
    </div>
  );
}

export default App;
