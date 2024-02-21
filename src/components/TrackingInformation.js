import React from "react";

function TrackingInformation() {
  // Dummy tracking data for demonstration
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

  return (
    <div>
      <h2>Tracking Information</h2>
      <table>
        <thead>
          <tr>
            <th>Package ID</th>
            <th>Status</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {trackingData.map((item) => (
            <tr key={item.id}>
              <td>{item.packageId}</td>
              <td>{item.status}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrackingInformation;
