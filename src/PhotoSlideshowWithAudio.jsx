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



// src/PhotoSlideshowWithAudio.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function PhotoSlideshowWithAudio() {
  // Each "page" has an image & caption.
  const pages = [
    {
      image: "photos/hi.jpg",
      caption: "Hi, anh làm web này hơi vội nên là ghép được xíu ảnh dô. Mong là ebe xem thấy dui",
    },
    {
      image: "photos/totinh.jpg",
      caption: "Lúc anh tỏ tình ebe nè",
    },
    {
      image: "photos/moa.jpg",
      caption: "Hihi, ebe đồng ý nè. Moahhhh, Moahhh",
    },
    {
      image: "photos/moiyeu.jpg",
      caption: "Hồi mới yêu, hai đứa đi studydate nè",
    },
    {
      image: "photos/gau.jpg",
      caption: "Mình cũm studydate online nè, bảo học với gấu không ai tin =))))",
    },
    {
      image: "photos/dichoi.jpg",
      caption: "Tuy học nhiều nhưng mà hai đứa vẫn dành thời gian đi chơi xíu"
    },
    {
      image: "photos/cute.jpg",
      caption: "Ebe thì cute nè",
    },
    {
      image: "photos/cute1.jpg",
      caption: "Cute nữa nè. Moahhhhh",
    },
    {
      image: "photos/phongcach.jpg",
      caption: "Ebe còn phong cách, oách xà lách nuôn",
    },
    {
      image: "photos/o_ananh.jpg",
      caption: "Còn a thì không ăn ảnh nè =))))",
    },
    {
      image: "photos/tylamtoc.jpg",
      caption: "Nên là a nhờ Tý làm tóc choa a",
    },
    {
      image: "photos/toctylam.jpg",
      caption: "Hehe, tóc Tý làm trông cũm đẹp đóa chớ",
    },
    {
      image: "photos/fdate2.jpg",
      caption: "Đẹp trai oài, mình đi date hoai",
    },
    {
      image: "photos/fdate.jpg",
      caption: "Ebe đi date xinh gái chưa nè",
    },
    {
      image: "photos/doi.jpg",
      caption: "Ebe dỗi",
    },
    {
      image: "photos/quansu.jpg",
      caption: "A i quân sự được ebe lên thăm. Moahhh",
    },
  

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [audioDuration, setAudioDuration] = useState(null);
  const audioRef = useRef(null);

  // When audio metadata loads, store its duration
  const handleLoadedMetadata = (e) => {
    setAudioDuration(e.target.duration);
  };

  // Auto-play the audio on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  // Calculate display time per page
  const pageInterval = audioDuration
    ? (audioDuration * 1000) / pages.length
    : 3000; // fallback 3s if audio not ready

  // Advance to next page after pageInterval
  useEffect(() => {
    if (audioDuration !== null && currentIndex < pages.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, pageInterval);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, audioDuration, pageInterval, pages.length]);

  const showPage = currentIndex < pages.length;

  return (
    // Open-book animation: the container rotates on the Y-axis from 90° to 0°
    <motion.div
      style={styles.bookContainer}
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Audio element from public/musics */}
      <audio
        ref={audioRef}
        src="musics/mot_doi.mp3"
        onLoadedMetadata={handleLoadedMetadata}
      />

      {showPage ? (
        <div style={styles.page}>
          <img
            src={pages[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            style={styles.pageImage}
          />
          {/* Caption with fade-in animation */}
          <motion.p
            key={currentIndex} // re-run animation on page change
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={styles.caption}
          >
            {pages[currentIndex].caption}
          </motion.p>
        </div>
      ) : (
        // Final sweet message after the last page
        <div style={styles.finalMessage}>
          <h2>My Sweet Message for You</h2>
          <p>
            Thank you for opening each page of our story with me.
            I can’t wait to write the next chapters together!
          </p>
        </div>
      )}
    </motion.div>
  );
}

const styles = {
  bookContainer: {
    width: "600px",
    maxWidth: "90%",
    minHeight: "400px",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "#fdf8f3", // light paper-like color
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Georgia, serif",
    perspective: "1000px", // for a realistic 3D effect
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



