// // src/PhotoSlideshowWithAudio.jsx
// import React, { useState, useEffect, useRef } from "react";

// function PhotoSlideshowWithAudio() {
//   // Point to images in the public folder, including your repo subfolder.
//   const images = [
//     "/val_web/photos/pic1.jpg",
//     "/val_web/photos/pic2.jpg",
//     "/val_web/photos/pic3.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [audioDuration, setAudioDuration] = useState(null);
//   const audioRef = useRef(null);

//   // Get audio duration when metadata loads
//   const handleLoadedMetadata = (e) => {
//     setAudioDuration(e.target.duration);
//   };

//   // Auto-play audio on mount
//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   }, []);

//   // Each slide’s display time = total song duration / number of images
//   const slideInterval = audioDuration
//     ? (audioDuration * 1000) / images.length
//     : 3000; // fallback to 3s if audio not ready

//   // Advance to the next slide after 'slideInterval'
//   useEffect(() => {
//     if (audioDuration !== null && currentIndex < images.length) {
//       const timer = setTimeout(() => {
//         setCurrentIndex(currentIndex + 1);
//       }, slideInterval);
//       return () => clearTimeout(timer);
//     }
//   }, [currentIndex, audioDuration, slideInterval, images.length]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "1rem" }}>
//       {/* Audio element references the file in public/musics/ */}
//       <audio
//         ref={audioRef}
//         src="/val_web/musics/mot_doi.mp3"
//         onLoadedMetadata={handleLoadedMetadata}
//       />

//       {/* Show current image until we reach the end */}
//       {currentIndex < images.length ? (
//         <img
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           style={{
//             width: "400px",
//             height: "300px",
//             objectFit: "cover",
//             borderRadius: "8px",
//             border: "2px solid #fff",
//           }}
//         />
//       ) : (
//         // After the last slide, show your sweet message
//         <div style={{ marginTop: "2rem", color: "red" }}>
//           <h2>My Sweet Message for You</h2>
//           <p>
//             Thank you for reliving these memories with me – you make my world
//             complete!
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PhotoSlideshowWithAudio;
// src/PhotoSlideshowWithAudio.jsx


import React, { useState, useEffect, useRef } from "react";

function PhotoSlideshowWithAudio() {
  // Images in public/photos
  const images = [
    "photos/pic1.jpg",
    "photos/pic2.jpg",
    "photos/pic3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [audioDuration, setAudioDuration] = useState(null);
  const audioRef = useRef(null);

  // Get audio duration when metadata loads
  const handleLoadedMetadata = (e) => {
    setAudioDuration(e.target.duration);
  };

  // Auto-play audio on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  // Each slide’s display time = total song duration / number of images
  const slideInterval = audioDuration
    ? (audioDuration * 1000) / images.length
    : 3000; // fallback to 3s if audio not ready

  // Advance to the next slide after 'slideInterval'
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
      {/* Audio from public/musics */}
      <audio
        ref={audioRef}
        src="musics/mot_doi.mp3"
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* Show current image until we reach the end */}
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
        // After the last slide, show your sweet message
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
