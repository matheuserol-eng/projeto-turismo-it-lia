import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { CulinaryPage } from "./pages/Culinary";
import { TourismPage } from "./pages/Tourism";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/culinaria" element={<CulinaryPage />} />
        <Route path="/turismo" element={<TourismPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
