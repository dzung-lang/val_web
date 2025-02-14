// src/PhotoSlideshowWithAudio.jsx
import React, { useState, useEffect, useRef } from "react";

function PhotoSlideshowWithAudio() {
  // List of image URLs (adjust the list as needed)
  const images = [
    "/photos/pic1.jpg",
    "/photos/pic2.jpg",
    "/photos/pic3.jpg",
    // Add more images here...
  ];

  // State to keep track of the current slide
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to hold the song's duration (in seconds)
  const [audioDuration, setAudioDuration] = useState(null);
  // Reference to the audio element
  const audioRef = useRef(null);

  // When the audio metadata is loaded, get its duration
  const handleLoadedMetadata = (e) => {
    setAudioDuration(e.target.duration);
  };

  // Automatically play the audio when the component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  // Compute how long each slide should be displayed:
  // slideInterval (in ms) = (total song duration in ms) / (number of images)
  const slideInterval = audioDuration
    ? (audioDuration * 1000) / images.length
    : 3000; // Fallback to 3 seconds if audio duration isn't ready

  // Advance to the next slide after the computed interval
  useEffect(() => {
    if (audioDuration !== null && currentIndex < images.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, slideInterval);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, audioDuration, slideInterval, images.length]);

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      {/* Audio element to play the song */}
      <audio
        ref={audioRef}
        src="/song.mp3"
        onLoadedMetadata={handleLoadedMetadata}
      />
      
      {/* Display the current slide if still within the images array */}
      {currentIndex < images.length ? (
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
        // After all slides, display a final sweet message
        <div style={{ marginTop: "2rem", color: "red" }}>
          <h2>My Sweet Message for You</h2>
          <p>
            Thank you for reliving these memories with me – you make my world
            complete!
          </p>
        </div>
      )}
    </div>
  );
}

export default PhotoSlideshowWithAudio;
