import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    venue: "",
    description: "",
    photo: null,
    seats: "",
    fees: "",
    durationDays: "", // NEW FIELD
  });

  const [submitted, setSubmitted] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setForm({ ...form, [name]: files[0] });

      if (files[0]) {
        setPhotoPreview(URL.createObjectURL(files[0]));
      } else {
        setPhotoPreview(null);
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    try {
      const res = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        setError("");
        setForm({
          title: "",
          date: "",
          startTime: "",
          endTime: "",
          venue: "",
          description: "",
          photo: null,
          seats: "",
          fees: "",
          durationDays: "",
        });
        setPhotoPreview(null);
        toast.success("Event created successfully!");

      } else {
        const errData = await res.json();
        setError(errData?.error || "Something went wrong.");
        toast.error(errData?.error || "Something went wrong.");

      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Network or server error.");
    }
  };

  return (
    <>
      <DashboardNavbar />
      <div className="min-h-screen bg-primary py-8 px-4 font-['Satoshi'] flex flex-col items-center justify-center">
        <div className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 p-8 w-full max-w-lg shadow-lg">
          <h1 className="text-2xl font-bold text-primary mb-6 font-['ClashDisplay']">
            Create New Event
          </h1>
          {/* {submitted && (
            <div className="text-green-700 font-semibold text-center mb-4">
              Event created successfully!
            </div>
          )} */}
          {/* {error && (
            <div className="text-red-600 font-semibold text-center mb-4">
              {error}
            </div>
          )} */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            encType="multipart/form-data"
          >
            <div>
              <label className="block text-primary font-medium mb-1">
                Event Title
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-white/40 bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-primary font-medium mb-1">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-white/40 bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex-1">
                <label className="block text-primary font-medium mb-1">
                  Duration (Days)
                </label>
                <input
                  type="number"
                  name="durationDays"
                  value={form.durationDays}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-2 rounded-lg border border-white/40 bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-primary font-medium mb-1">
                  Start Time
                </label>
                <input
                  type="time"
                  name="startTime"
                  value={form.startTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-white/40 bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex-1">
                <label className="block text-primary font-medium mb-1">
                  End Time
                </label>
                <input
                  type="time"
                  name="endTime"
                  value={form.endTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-white/40 bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-primary font-medium mb-1">
                Venue
              </label>
              <input
                type="text"
                name="venue"
                value={form.venue}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-white/40 bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-primary font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-white/40 bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <div>
              <label className="block text-primary font-medium mb-1">
                Seats
              </label>
              <input
                type="number"
                name="seats"
                value={form.seats}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-2 rounded-lg border border-white/40 bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-primary font-medium mb-1">
                Event Fees
              </label>
              <input
                type="number"
                name="fees"
                value={form.fees}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="w-full px-4 py-2 rounded-lg border border-white/40 bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-primary font-medium mb-1">
                Event Photo
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-white/40 bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {photoPreview && (
                <img
                  src={photoPreview}
                  alt="Event Preview"
                  className="mt-3 rounded-lg max-h-40 object-contain border border-white/40"
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-primary-button text-white rounded-lg font-bold hover:bg-[#23424A] transition"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateEvent;
