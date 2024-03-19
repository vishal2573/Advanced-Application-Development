import React, { useState } from "react";
import "../assets/css/LoginOrg.css";
import { Label } from "reactstrap";
import yourLogo from "../assets/images/giftcraft.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function from useNavigate hook

  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [showSkillsPopup, setShowSkillsPopup] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!username.trim()) {
      validationErrors.username = "Username is required";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Navigate to "/explore" when "Sign In" button is clicked
    navigate("/explore");
  };

  const handleCreateAccountClick = () => {
    navigate("/signup"); // Navigate to "/signup" when "Create an Account" link is clicked
  };

  const toggleSkill = (skillId) => {
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills(selectedSkills.filter((id) => id !== skillId));
    } else {
      setSelectedSkills([...selectedSkills, skillId]);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="login-vol-login-page">
        <div className="login-vol-background-image"></div>
        <div className="login-vol-login-container">
          <div className="beaut-text">
            <div className="logo-and-text">
              <img
                src={yourLogo}
                alt="Your Logo"
                className="login-vol-logo"
                style={{ width: "60px", height: "auto", marginBottom: "20px" }}
              />
              <div className="logo-text">GiftCraft</div>
            </div>
            <div className="abov-text" style={{ color: "black" }}>
              <h3>Welcome to Your Gift Store!👋🏻</h3>
              <p>Please Sign-in to your account and start your journey</p>
            </div>
            <form>
              <div className="input-container">
                <div className="floating-label-group">
                  <input
                    type="text"
                    id="username"
                    className="form-control23"
                    autoFocus
                    required
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <label className="floating-label">Username</label>
                </div>

                <div className="floating-label-group">
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    className="form-control23"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label className="floating-label">Password</label>
                </div>
              </div>

              <div className="login-vol-form-group">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="login-vol-checkbox"
                  onClick={() => {
                    setShow(!show);
                  }}
                />
                <Label style={{ fontWeight: "normal", marginLeft: "5px" }}>
                  Show Password
                </Label>
              </div>
              {errors.username && (
                <p style={{ color: "red" }} className="error">
                  {errors.username}
                </p>
              )}
              {errors.password && (
                <p style={{ color: "red" }} className="error">
                  {errors.password}
                </p>
              )}

              <button
                type="submit"
                className="login-vol-btn"
                onClick={handleSignIn}
              >
                Sign In
              </button>
              <p style={{ textAlign: "center" }}>
                New on our platform?
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  className="link-sign-up"
                  onClick={handleCreateAccountClick}
                >
                  Create an Account
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
