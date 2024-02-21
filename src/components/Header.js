import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/home">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/track-courier">
          Track Courier
        </Button>
        <Button color="inherit" component={Link} to="/services">
          Services
        </Button>
        <Button color="inherit" component={Link} to="/track-no">
          Track Number
        </Button>
        <Button color="inherit" component={Link} to="/faqs">
          FAQs
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
