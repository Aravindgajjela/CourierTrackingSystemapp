import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import HomeRoute from "./components/HomeRoute";
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
    if (username !== "" && password !== "") {
      setIsLoggedIn(true);
    }
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomeRoute />} />
          <Route path="/Track-courier" element={<TrackingInformation />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/track-no" element={<TrackNumberForm />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route
            path="/admin"
            element={isLoggedIn ? <AdminPanel /> : <Navigate to="/login" />}
          />

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
