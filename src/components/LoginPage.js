import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

import Header from "./Header"; // Import Header component

function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState("aravind");
  const [password, setPassword] = useState("123456");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform login authentication using username and password
    handleLogin(username, password);
    // Navigate to home page upon successful login
    navigate("/home"); // Use navigate to navigate to the desired route
  };

  return (
    <div>
      <Header /> {/* Display header component */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
      <div>
        <button onClick={() => console.log("Navigate to create account page")}>
          New to this? Create Account
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
