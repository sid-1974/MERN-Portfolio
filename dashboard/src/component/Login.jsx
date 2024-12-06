import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const predefinedUsername = "admin";
  const predefinedPassword = "12345";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (!username || !password) {
      setError("Both fields are required.");
    } else if (username === predefinedUsername && password === predefinedPassword) {
      setError("");
      localStorage.setItem("authToken", "true"); // Save auth token
      setIsAuthenticated(true); // Update authentication state
      alert("Login successful!");
      navigate("/dashboard", { replace: true });
    } else {
      setError("Invalid username or password.");
    }
  };
  
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
