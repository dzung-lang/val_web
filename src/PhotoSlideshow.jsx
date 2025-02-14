// src/PhotoSlideshow.jsx
import React, { useState, useEffect } from "react";

function PhotoSlideshow() {
  // List of image URLs (place your images in public/photos)
  const images = [
    "/photos/pic1.jpg",
    "/photos/pic2.jpg",
    "/photos/pic3.jpg",
    // Add more images as needed...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    if (currentIndex < images.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 3000); // 3 seconds per slide
      return () => clearTimeout(timer);
    } else {
      setShowFinalMessage(true);
    }
  }, [currentIndex, images.length]);

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      {!showFinalMessage && currentIndex < images.length ? (
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{
            width: "400px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "8px",
            border: "2px solid #fff",
          }}
        />
      ) : (
        <div style={{ marginTop: "2rem", color: "red" }}>
          <h2>My Sweet Message for You</h2>
          <p>Thank you for being my everything, today and always!</p>
        </div>
      )}
    </div>
  );
}

export default PhotoSlideshow;
