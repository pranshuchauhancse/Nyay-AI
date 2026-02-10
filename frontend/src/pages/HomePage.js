import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="container">
        <h1>AI Legal Assistant for India</h1>
        <p>Understand Indian laws in simple language.</p>
        <button onClick={() => navigate("/login")}>
          Get Started
        </button>
      </div>
    </>
  );
}

export default HomePage;
