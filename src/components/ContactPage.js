import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  contactContainer: {
    padding: "20px",
  },
  contactInfo: {
    fontSize: "18px",
    marginBottom: "10px",
  },
});

function ContactPage() {
  const classes = useStyles();

  // Dummy contact information
  const contactInfo = {
    phoneNumber: "123-456-7890",
    emailAddress: "contact@example.com",
    callCenterHours: "Monday - Friday: 9am - 6pm",
  };

  return (
    <div className={classes.contactContainer}>
      <h2>Contact Us</h2>
      <div className={classes.contactInfo}>
        <p>Phone Number: {contactInfo.phoneNumber}</p>
        <p>Email Address: {contactInfo.emailAddress}</p>
        <p>Call Center Hours: {contactInfo.callCenterHours}</p>
      </div>
    </div>
  );
}

export default ContactPage;
