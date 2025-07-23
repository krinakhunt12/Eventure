const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Event = require("../models/Event");

// Multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// POST route to create event
router.post("/", upload.single("photo"), async(req, res) => {
    try {
        const {
            title,
            date,
            startTime,
            endTime,
            durationDays,
            venue,
            description,
            seats,
            fees
        } = req.body;


        const newEvent = new Event({
            title,
            date,
            startTime,
            endTime,
            durationDays,
            venue,
            description,
            seats,
            fees,
            photo: req.file ? `/uploads/${req.file.filename}` : null,
            isApproved: false, // 👈 Force unapproved
        });

        await newEvent.save();
        res.status(201).json({ message: "Event created", event: newEvent });
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// GET: Fetch all events
router.get("/", async(req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });
        res.status(200).json(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: "Failed to fetch events" });
    }
});

// GET /api/events/pending
router.get("/pending", async(req, res) => {
    try {
        const pendingEvents = await Event.find({ isApproved: false });
        res.json({ events: pendingEvents }); // ✅ wrap in object with `events` key
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch pending events." });
    }
});


// PUT /api/events/approve/:id
router.put("/approve/:id", async(req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(
            req.params.id, { isApproved: true }, { new: true }
        );
        if (!event) return res.status(404).json({ error: "Event not found" });
        res.json({ message: "Event approved", event });
    } catch (error) {
        res.status(500).json({ error: "Failed to approve event" });
    }
});

// GET /api/events/organizer/:organizerId
router.get('/organizer/:id', async(req, res) => {
    try {
        const events = await Event.find({ organizerId: req.params.id });
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;