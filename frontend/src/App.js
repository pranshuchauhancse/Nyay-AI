import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LegalQueryPage from "./pages/LegalQueryPage";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/query" element={<LegalQueryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
