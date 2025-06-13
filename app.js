const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const eventRoutes = require("./routes/eventRoutes");
app.use("/api/events", eventRoutes); // 🔥 This is the key line

// Default route
app.get("/", (req, res) => {
  res.send("Backend is working");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log("✅ MongoDB Connected");
      console.log("🚀 Server listening on http://localhost:5000");
    });
  })
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));
