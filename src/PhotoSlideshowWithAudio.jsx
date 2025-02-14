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


// import React, { useState, useEffect, useRef } from "react";

// function PhotoSlideshowWithAudio() {
//   // Images in public/photos
//   const images = [
//     "photos/pic1.jpg",
//     "photos/pic2.jpg",
//     "photos/pic3.jpg",
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
//       {/* Audio from public/musics */}
//       <audio
//         ref={audioRef}
//         src="musics/mot_doi.mp3"
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



// // src/PhotoSlideshowWithAudio.jsx
import React, { useState, useEffect, useRef } from "react";
// 1) Import Framer Motion
import { motion } from "framer-motion";

function PhotoSlideshowWithAudio() {
  // Each "page" has an image & caption.
  // Make sure you have these files in `public/photos/`.
  const pages = [
    {
      image: "photos/pic1.jpg",
      caption: "Our first date – where everything began.",
    },
    {
      image: "photos/pic2.jpg",
      caption: "Laughs, adventures, and so many sweet memories.",
    },
    {
      image: "photos/pic3.jpg",
      caption: "Looking forward to every new chapter with you.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [audioDuration, setAudioDuration] = useState(null);
  const audioRef = useRef(null);

  // Get audio duration once metadata loads
  const handleLoadedMetadata = (e) => {
    setAudioDuration(e.target.duration);
  };

  // Auto-play audio when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  // Time per page = (song duration in ms) / number of pages
  const pageInterval = audioDuration
    ? (audioDuration * 1000) / pages.length
    : 3000; // fallback 3s if audio not ready

  // Advance pages automatically
  useEffect(() => {
    if (audioDuration !== null && currentIndex < pages.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, pageInterval);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, audioDuration, pageInterval, pages.length]);

  // Determine if we're still showing a page or the final message
  const showPage = currentIndex < pages.length;

  return (
    <div style={styles.bookContainer}>
      {/* Audio element in `public/musics/` */}
      <audio
        ref={audioRef}
        src="musics/mot_doi.mp3"
        onLoadedMetadata={handleLoadedMetadata}
      />

      {showPage ? (
        <div style={styles.page}>
          {/* Image (no animation here, but you could add one if you like) */}
          <img
            src={pages[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            style={styles.pageImage}
          />

          {/* 2) Animate the caption using Framer Motion */}
          <motion.p
            key={currentIndex} // ensures a fresh animation each page
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }} // 1-second fade-in
            style={styles.caption}
          >
            {pages[currentIndex].caption}
          </motion.p>
        </div>
      ) : (
        <div style={styles.finalMessage}>
          <h2>My Sweet Message for You</h2>
          <p>
            Thank you for opening each page of our story with me.
            I can’t wait to write the next chapters together!
          </p>
        </div>
      )}
    </div>
  );
}

// Basic "book-like" styling
const styles = {
  bookContainer: {
    width: "600px",
    maxWidth: "90%",
    minHeight: "400px",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "#fdf8f3", // light paper color
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Georgia, serif",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pageImage: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  caption: {
    marginTop: "1rem",
    fontSize: "1.1rem",
    color: "#555",
  },
  finalMessage: {
    marginTop: "2rem",
    color: "red",
    fontFamily: "Georgia, serif",
  },
};

export default PhotoSlideshowWithAudio;
