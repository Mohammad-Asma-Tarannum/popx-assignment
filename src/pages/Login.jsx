import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No account found. Please register first.");
      return;
    }

    if (
      email === user.email &&
      password === user.password
    ) {
      navigate("/account");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="mobile-container">
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1>
        Signin to your
        <br />
        PopX account
      </h1>

      <p>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <input
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="login-btn"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;