import React, { useState } from "react";

function AdminPanel() {
  const [trackingData, setTrackingData] = useState([
    { id: 1, packageId: "PKG123", status: "In Transit", location: "New York" },
    {
      id: 2,
      packageId: "PKG456",
      status: "Out for Delivery",
      location: "Los Angeles",
    },
    { id: 3, packageId: "PKG789", status: "Delivered", location: "Chicago" },
  ]);

  const handleUpdateStatus = (id, newStatus) => {
    const updatedTrackingData = trackingData.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setTrackingData(updatedTrackingData);
  };

  const handleDeleteTrackingInfo = (id) => {
    const updatedTrackingData = trackingData.filter((item) => item.id !== id);
    setTrackingData(updatedTrackingData);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Sample Tracking IDs: PKG123, PKG456, PKG789</p>
      <p>Admin Panel Credentials: Username - admin, Password - admin123</p>
      <table>
        <thead>
          <tr>
            <th>Package ID</th>
            <th>Status</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trackingData.map((item) => (
            <tr key={item.id}>
              <td>{item.packageId}</td>
              <td>{item.status}</td>
              <td>{item.location}</td>
              <td>
                <button
                  onClick={() => handleUpdateStatus(item.id, "Delivered")}
                >
                  Update Status
                </button>
                <button onClick={() => handleDeleteTrackingInfo(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
