const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// GET all events
router.get("/", async (req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
});

// POST a new event
router.post("/", async (req, res) => {
  const { title, description, date, location, image } = req.body;
  const newEvent = new Event({ title, description, date, location, image });
  await newEvent.save();
  res.json(newEvent);
});

// DELETE an event
router.delete("/:id", async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
