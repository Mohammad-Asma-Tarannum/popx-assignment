import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container welcome">
      <div className="bottom-content">
        <h1>Welcome to PopX</h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;