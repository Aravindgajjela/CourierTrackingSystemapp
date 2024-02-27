import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-image: url("https://res.cloudinary.com/djllxgzm0/image/upload/v1708580400/240_F_291946449_Pew7nZBn2L5R8eZKfugu1h5XG63VRuih_kykhks.jpg");
  background-size: cover;
`;

const Sidebar = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const StyledButtonLink = styled(Link)`
  display: block;
  padding: 10px 20px;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const StyledBackButton = styled(Link)`
  display: block;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  text-decoration: none;
  color: #333;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

function HomeRoute() {
  return (
    <Container>
      <Sidebar>
        <h2>Welcome, Hi </h2>
        <p>Explore our features</p>
        <StyledButtonLink to="/dashboard">Dashboard</StyledButtonLink>
        <StyledButtonLink to="/shipments">Shipments</StyledButtonLink>
        <StyledButtonLink to="/clients">Clients</StyledButtonLink>
        <StyledButtonLink to="/drivers">Drivers</StyledButtonLink>
        <StyledButtonLink to="/settings">Settings</StyledButtonLink>
        <StyledBackButton to="/">Back</StyledBackButton>
      </Sidebar>
      <Content></Content>
    </Container>
  );
}

export default HomeRoute;
