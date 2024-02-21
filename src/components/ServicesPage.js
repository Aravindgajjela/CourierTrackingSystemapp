import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  servicesContainer: {
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  listItem: {
    fontSize: "18px",
    marginBottom: "5px",
  },
  subListItem: {
    fontSize: "16px",
    marginLeft: "20px",
    marginBottom: "5px",
  },
});

function ServicesPage() {
  const classes = useStyles();

  return (
    <div className={classes.servicesContainer}>
      <h2 className={classes.heading}>List of Amazon products and services</h2>
      <ul>
        <li className={classes.listItem}>Retail goods</li>
        <li className={classes.listItem}>Amazon Prime</li>
        <li className={classes.listItem}>Consumer electronics</li>
        <li className={classes.listItem}>
          Digital content
          <ul>
            <li className={classes.subListItem}>Amazon Studios</li>
            <li className={classes.subListItem}>Amazon Games Studios</li>
            <li className={classes.subListItem}>Amazon Luna</li>
          </ul>
        </li>
        <li className={classes.listItem}>
          Amazon Prime Video
          <ul>
            <li className={classes.subListItem}>Video Direct</li>
          </ul>
        </li>
        <li className={classes.listItem}>
          Delivery
          <ul>
            <li className={classes.subListItem}>Groceries</li>
          </ul>
        </li>
        <li className={classes.listItem}>Amazon Business</li>
        <li className={classes.listItem}>Amazon Drive</li>
      </ul>
    </div>
  );
}

export default ServicesPage;
