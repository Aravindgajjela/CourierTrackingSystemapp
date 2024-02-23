import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-image: url("https://res.cloudinary.com/djllxgzm0/image/upload/v1708546545/wallpaperflare.com_wallpaper_34_ktncnt.jpg"); /* Set background image */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function TrackingInformation() {
  // Dummy tracking data for demonstration
  const [trackNumber, setTrackNumber] = useState("");
  const trackingData = [
    { id: 1, packageId: "PKG123", status: "In Transit", location: "New York" },
    {
      id: 2,
      packageId: "PKG456",
      status: "Out for Delivery",
      location: "Los Angeles",
    },
    { id: 3, packageId: "PKG789", status: "Delivered", location: "Chicago" },
    // Add more dummy tracking data as needed
  ];

  const handleTrackNumberChange = (event) => {
    setTrackNumber(event.target.value);
  };

  const handleTrack = () => {
    // Handle tracking logic here
    console.log("Track number:", trackNumber);
  };

  return (
    <Container>
      <Title>Tracking Information</Title>
      <div>
        <Input
          type="text"
          placeholder="Enter Track Number"
          value={trackNumber}
          onChange={handleTrackNumberChange}
        />
        <Button onClick={handleTrack}>Track</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <Th>Package ID</Th>
            <Th>Status</Th>
            <Th>Location</Th>
          </tr>
        </thead>
        <tbody>
          {trackingData.map((item) => (
            <tr key={item.id}>
              <Td>{item.packageId}</Td>
              <Td>{item.status}</Td>
              <Td>{item.location}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default TrackingInformation;
