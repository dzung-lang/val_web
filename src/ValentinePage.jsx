// src/ValentinePage.jsx
import React, { useState } from "react";
// import PhotoSlideshow from "./PhotoSlideshow"; // Your previous slideshow (if needed)
import PhotoSlideshowWithAudio from "./PhotoSlideshowWithAudio";

function ValentinePage() {
  const [message, setMessage] = useState("");
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showAudioSlideshow, setShowAudioSlideshow] = useState(false);

  const loveMessages = [
    "You make my heart skip a beat! ❤️",
    "You're my forever Valentine! 💖",
    "Love you to the moon and back! 🌙✨",
    "You complete me! 💕",
    "Every day with you is special! 😍",
  ];

  const showMessage = () => {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    setMessage(loveMessages[randomIndex]);
  };

  const toggleSlideshow = () => {
    setShowSlideshow((prev) => !prev);
  };

  const toggleSchedule = () => {
    setShowSchedule((prev) => !prev);
  };

  const toggleAudioSlideshow = () => {
    setShowAudioSlideshow((prev) => !prev);
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffc0cb, #ff99cc)",
      }}
    >
      <h2>Valentine’s Day Special</h2>

      {/* Love Message Section */}
      <p>Click the button below for a special love message:</p>
      <button
        onClick={showMessage}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "#ff6b6b",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Show Love Message
      </button>
      {message && (
        <p style={{ color: "red", marginTop: "1rem", fontWeight: "bold" }}>
          {message}
        </p>
      )}

      {/* Photo Slideshow Section
      <button
        onClick={toggleSlideshow}
        style={{
          marginTop: "2rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "#ff6b6b",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {showSlideshow ? "Hide Photo Slideshow" : "Show Photo Slideshow"}
      </button>
      {showSlideshow && <PhotoSlideshow />} */}

      {/* Schedule Section */}
      <button
        onClick={toggleSchedule}
        style={{
          marginTop: "2rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "#ff6b6b",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {showSchedule ? "Hide Schedule" : "Show Schedule"}
      </button>
      {showSchedule && (
        <img
          src="val_web/valentine_schedule.png"
          alt="Valentine Schedule"
          style={{
            marginTop: "1rem",
            width: "400px",
            height: "auto",
            border: "2px solid #fff",
            borderRadius: "8px",
          }}
        />
      )}

      {/* Photo Slideshow with Audio Section */}
      <button
        onClick={toggleAudioSlideshow}
        style={{
          marginTop: "2rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "#ff6b6b",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {showAudioSlideshow
          ? "Hide Slideshow with Song"
          : "Show Slideshow with Song"}
      </button>
      {showAudioSlideshow && <PhotoSlideshowWithAudio />}
    </div>
  );
}

export default ValentinePage;
