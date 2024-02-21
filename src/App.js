import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import TrackingInformation from "./components/TrackingInformation";
import AdminPanel from "./components/AdminPanel";
import ServicesPage from "./components/ServicesPage";
import TrackNumberForm from "./components/TrackNumberForm";
import FAQsPage from "./components/FAQsPage";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Your login authentication logic here
    // For demonstration, let's assume if username and password are not empty, consider the user as logged in
    if (username !== "" && password !== "") {
      setIsLoggedIn(true);
    }
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Public routes accessible to all users */}
          <Route path="/" element={<HomePage />} />
          <Route path="/tracking" element={<TrackingInformation />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/track-number" element={<TrackNumberForm />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Private routes accessible only to authenticated users */}
          <Route
            path="/admin"
            element={isLoggedIn ? <AdminPanel /> : <Navigate to="/login" />}
          />
          {/* Route to handle login */}
          <Route
            path="/login"
            element={<LoginPage handleLogin={handleLogin} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
