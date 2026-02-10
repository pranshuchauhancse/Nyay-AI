import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("token", "mock-token");
    navigate("/query");
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
    </>
  );
}

export default LoginPage;
