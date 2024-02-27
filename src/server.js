// server.js
const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize SQLite database
const db = new sqlite3.Database(":memory:");

// Create tracking table
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS tracking (id INTEGER PRIMARY KEY, packageId TEXT, status TEXT, location TEXT)"
  );
});

// Middleware to parse JSON bodies
app.use(express.json());

// Routes for creating, updating, and retrieving tracking information
app.post("/api/tracking", (req, res) => {
  const { packageId, status, location } = req.body;
  db.run(
    "INSERT INTO tracking (packageId, status, location) VALUES (?, ?, ?)",
    [packageId, status, location],
    function (err) {
      if (err) {
        console.error(err.message);
        return res
          .status(500)
          .json({ error: "Failed to create tracking information" });
      }
      res.json({
        message: "Tracking information created successfully",
        id: this.lastID,
      });
    }
  );
});

app.put("/api/tracking/:id", (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  db.run(
    "UPDATE tracking SET status = ? WHERE id = ?",
    [status, id],
    function (err) {
      if (err) {
        console.error(err.message);
        return res
          .status(500)
          .json({ error: "Failed to update tracking information" });
      }
      res.json({ message: "Tracking information updated successfully" });
    }
  );
});

app.get("/api/tracking/:id", (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM tracking WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ error: "Failed to retrieve tracking information" });
    }
    if (!row) {
      return res.status(404).json({ error: "Tracking information not found" });
    }
    res.json(row);
  });
});

// Admin API routes for managing courier tracking data
app.post("/api/admin/tracking", (req, res) => {
  const { packageId, status, location } = req.body;
  db.run(
    "INSERT INTO tracking (packageId, status, location) VALUES (?, ?, ?)",
    [packageId, status, location],
    function (err) {
      if (err) {
        console.error(err.message);
        return res
          .status(500)
          .json({ error: "Failed to create tracking information (admin)" });
      }
      res.json({
        message: "Tracking information created successfully (admin)",
        id: this.lastID,
      });
    }
  );
});

app.put("/api/admin/tracking/:id", (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  db.run(
    "UPDATE tracking SET status = ? WHERE id = ?",
    [status, id],
    function (err) {
      if (err) {
        console.error(err.message);
        return res
          .status(500)
          .json({ error: "Failed to update tracking information (admin)" });
      }
      res.json({
        message: "Tracking information updated successfully (admin)",
      });
    }
  );
});

app.delete("/api/admin/tracking/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM tracking WHERE id = ?", [id], function (err) {
    if (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({ error: "Failed to delete tracking information (admin)" });
    }
    res.json({ message: "Tracking information deleted successfully (admin)" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
