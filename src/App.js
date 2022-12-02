import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import RewardsPage from "./pages/RewardsPage/RewardsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rewards" element={<RewardsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
