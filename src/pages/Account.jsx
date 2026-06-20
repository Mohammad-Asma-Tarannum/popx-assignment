import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Account() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="mobile-container account-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="account-header">
        <h3>Account Settings</h3>
      </div>

      <div className="profile-section">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
        />

        <div>
          <h4>{user?.fullName || "Marry Doe"}</h4>
          <p>{user?.email || "marrydoe@gmail.com"}</p>
        </div>
      </div>

      <p className="description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
        Dolore Magna Aliquyam Erat, Sed Diam.
      </p>
    </div>
  );
}

export default Account;