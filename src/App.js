import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection"
import ScanCard from "./components/ScanCard/ScanCard"
import "./App.scss";
function App() {
  return (
    <div className="app">
      <NavBar />
      <HeroSection />
      <ScanCard />
    </div>
  );
}

export default App;
