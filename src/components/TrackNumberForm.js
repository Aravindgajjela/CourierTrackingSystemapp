import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
  display: block;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  padding: 12px;
  text-align: left;
  font-size: 18px;
  background-color: #f0f0f0;
  color: #333;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  padding: 12px;
  text-align: left;
  font-size: 16px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  text-decoration: none;
  color: #333;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;

function TrackNumberForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    category: "",
    order: "",
  });
  const [trackingData, setTrackingData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrackingData((prevData) => [...prevData, formData]);
    setFormData({
      name: "",
      location: "",
      category: "",
      order: "",
    });
  };

  return (
    <Container>
      <Title>Track Input Form</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="location">Location:</Label>
          <Input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="category">Category:</Label>
          <Input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="order">Order:</Label>
          <Input
            type="text"
            id="order"
            name="order"
            value={formData.order}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
      {trackingData.length > 0 && (
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Location</Th>
              <Th>Category</Th>
              <Th>Order</Th>
            </tr>
          </thead>
          <tbody>
            {trackingData.map((item, index) => (
              <tr key={index}>
                <Td>{item.name}</Td>
                <Td>{item.location}</Td>
                <Td>{item.category}</Td>
                <Td>{item.order}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <BackButton to="/">Back</BackButton>
    </Container>
  );
}

export default TrackNumberForm;
