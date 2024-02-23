import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  servicesContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundImage: `url("https://res.cloudinary.com/djllxgzm0/image/upload/v1708580319/240_F_314209989_NwKevyiNyMvXcM4mMkWjhUn0TAyO4i6I_jxtqur.jpg")`, // Replace "your-background-image-url" with the URL of your image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: 0.9,
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#fff",
  },
  box: {
    width: "300px",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    border: "2px solid transparent",
    transition: "all 0.3s ease",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  boxHover: {
    border: "2px solid #fff",
  },
});

function ServicesPage() {
  const classes = useStyles();

  return (
    <div className={classes.servicesContainer}>
      <h2 className={classes.heading}>List of Amazon products and services</h2>
      <div className={`${classes.box} ${classes.retailGoods}`}>
        Retail goods
      </div>
      <div className={`${classes.box} ${classes.amazonPrime}`}>
        Amazon Prime
      </div>
      <div className={`${classes.box} ${classes.consumerElectronics}`}>
        Consumer electronics
      </div>
      <div className={`${classes.box} ${classes.digitalContent}`}>
        Digital content
      </div>
      <div className={`${classes.box} ${classes.amazonPrimeVideo}`}>
        Amazon Prime Video
      </div>
      <div className={`${classes.box} ${classes.delivery}`}>Delivery</div>
      <div className={`${classes.box} ${classes.amazonBusiness}`}>
        Amazon Business
      </div>
      <div className={`${classes.box} ${classes.amazonDrive}`}>
        Amazon Drive
      </div>
    </div>
  );
}

export default ServicesPage;
