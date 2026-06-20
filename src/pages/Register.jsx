import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");

  const handleRegister = () => {
  if (!fullName || !phone || !email || !password) {
    alert("Please fill all required fields");
    return;
  }

  const user = {
    fullName,
    phone,
    email,
    password,
    company,
  };

  localStorage.setItem("user", JSON.stringify(user));

  navigate("/account");
};

  return (
    <div className="mobile-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>
        Create your
        <br />
        PopX account
      </h1>

      <input
        type="text"
        placeholder="Full Name*"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone Number*"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email Address*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password*"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <div className="radio-group">
        <p>Are you an Agency?</p>

        <label>
          <input type="radio" name="agency" /> Yes
        </label>

        <label>
          <input type="radio" name="agency" /> No
        </label>
      </div>

      <button
        className="primary-btn register-btn"
        onClick={handleRegister}
      >
        Create Account
      </button>
    </div>
  );
}

export default Register;