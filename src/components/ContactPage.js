import React from "react";
import "./contactPage.css";

function ContactPage() {
  const contactInfo = {
    phoneNumber: "6302509023",
    emailAddress: "aravindgajjela07@gmail.com",
    callCenterHours: "Monday - Friday: 9am - 6pm",
  };

  return (
    <div className="contactContainer">
      <h2>Contact Us</h2>
      <div className="contactInfo">
        <p>Phone Number: {contactInfo.phoneNumber}</p>
        <p>Email Address: {contactInfo.emailAddress}</p>
        <p>Call Center Hours: {contactInfo.callCenterHours}</p>
      </div>
    </div>
  );
}

export default ContactPage;
