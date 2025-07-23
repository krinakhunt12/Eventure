const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    durationDays: { type: Number, required: true },
    venue: { type: String, required: true },
    description: { type: String, required: true },
    seats: { type: Number, required: true },
    fees: { type: Number, required: true },
    photo: { type: String },
    isApproved: { type: Boolean, default: false }, // 👈 NEW FIELD
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);