import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  inputField: {
    marginBottom: "20px",
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
});

function TrackNumberForm() {
  const classes = useStyles();
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
    console.log("Tracking number submitted:", trackingNumber);
    // Reset input field after submission
    setTrackingNumber("");
  };

  return (
    <div className={classes.formContainer}>
      <h2>Track Number</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.inputField}
          label="Enter Tracking Number"
          variant="outlined"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <Button
          className={classes.submitButton}
          variant="contained"
          type="submit"
        >
          Track
        </Button>
      </form>
    </div>
  );
}

export default TrackNumberForm;
