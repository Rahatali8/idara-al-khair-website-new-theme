import React, { useState, forwardRef, useImperativeHandle } from "react";

/**
 * AutoCaptcha.jsx
 * Using pre-saved topic-based images for reliable CAPTCHA
 * Happy robot to sad robot image change on verification
 * 9 images total - 3 correct, 6 incorrect
 */

// Pre-saved images for each topic (RELIABLE images only)
const topicImages = {
  "cats": [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300",
    "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=300", 
    "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=300"
  ],
  "dogs": [
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300",
    "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=300",
    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=300"
  ],
  "cars": [
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300",
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300",
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300"
  ],
  "flowers": [
    "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=300",
    "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=300",
    "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=300"
  ],
  "trees": [
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300",
    "https://images.unsplash.com/photo-1462143338528-eca9936a4d09?w=300",
    "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=300"
  ]
};

const topics = Object.keys(topicImages);

const makeImageSet = (topic) => {
  const shuffleArray = (array) => {
    const newArray = [...array];
    // Use a seeded random number generator to ensure consistent results
    let seed = 12345; // Fixed seed for consistent shuffling
    const seededRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Get 3 CORRECT images from reliable sources for the topic
  const correctImages = [...topicImages[topic]];
  
  // Get INCORRECT images from other topics
  const otherTopics = topics.filter(t => t !== topic);
  const incorrectImages = [];
  
  // Take 2 reliable images from each other topic
  otherTopics.forEach(otherTopic => {
    const otherImages = topicImages[otherTopic].slice(0, 2);
    incorrectImages.push(...otherImages);
  });

  // Take exactly 6 incorrect images
  const selectedIncorrect = shuffleArray(incorrectImages).slice(0, 6);
  
  // Combine and shuffle all images - 3 correct + 6 incorrect = 9 total
  const allImages = [
    ...correctImages.map(url => ({ 
      url, 
      isCorrect: true, 
      loading: true, 
      error: false 
    })),
    ...selectedIncorrect.map(url => ({ 
      url, 
      isCorrect: false, 
      loading: true, 
      error: false 
    }))
  ];

  return shuffleArray(allImages);
};

const AutoCaptcha = forwardRef((props, ref) => {
  const [verified, setVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [challengeTopic, setChallengeTopic] = useState("");
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState([]);
  const [message, setMessage] = useState("");

  // Robot images from public folder
  const happyRobot = "/happyrobort.png";
  const sadRobot = "/sadrobort.png";

  // Expose methods to parent component via ref
  useImperativeHandle(ref, () => ({
    getToken: () => {
      if (verified) {
        // Use a more predictable token generation
        return "auto-captcha-verified-token-" + Math.floor(Math.random() * 1000000);
      }
      return null;
    },
    reset: () => {
      setVerified(false);
      setShowModal(false);
      setSelected([]);
      setMessage("");
    },
    isVerified: () => verified
  }));

  const startChallenge = () => {
    const topic = topics[0]; // Use first topic for consistency
    setChallengeTopic(topic);
    setImages(makeImageSet(topic));
    setSelected([]);
    setMessage("");
    setShowModal(true);
  };

  const handleImageClick = (idx) => {
    setSelected((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]));
  };

  const handleVerify = () => {
    if (selected.length === 0) {
      setMessage("❌ Please select at least one image!");
      return;
    }

    // Count correct and incorrect selections
    const correctSelected = selected.filter(idx => images[idx].isCorrect);
    const incorrectSelected = selected.filter(idx => !images[idx].isCorrect);
    const totalCorrect = images.filter(img => img.isCorrect).length;

    // User must select ALL 3 correct images and NO incorrect images
    if (correctSelected.length === totalCorrect && incorrectSelected.length === 0) {
      setVerified(true);
      setShowModal(false);
      setMessage("");
    } else {
      setMessage(`❌ Select exactly ${totalCorrect} ${challengeTopic} images!`);
      setTimeout(() => {
        setSelected([]);
      }, 1500);
    }
  };

  const handleImgLoad = (idx) => {
    setImages((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], loading: false, error: false };
      return copy;
    });
  };

  const handleImgError = (idx) => {
    setImages((prev) => {
      const copy = [...prev];
      // Try to replace broken image with a reliable one
      // Use a deterministic approach instead of random
      const reliableTopic = topics[idx % topics.length];
      const reliableImage = topicImages[reliableTopic][0];
      
      copy[idx] = { 
        ...copy[idx], 
        url: reliableImage,
        loading: false, 
        error: false 
      };
      return copy;
    });
  };

  return (
    <div className="p-2">
      {/* Checkbox with Image AFTER text */}
      <div className="flex items-center space-x-2">
        {/* When NOT verified - Show checkbox + text + happy robot */}
        {!verified && (
          <>
            <label className="flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={false}
                onChange={startChallenge}
                className="w-5 h-5 accent-indigo-600 cursor-pointer"
              />
              <span className="text-gray-800 font-medium">I'm not a robot</span>
            </label>
            
            {/* Happy Robot Image - Clickable */}
            <div 
              onClick={startChallenge}
              className="cursor-pointer transition-all duration-300 hover:scale-105"
              style={{ width: '60px', height: '60px' }}
            >
              <img
                src={happyRobot}
                alt="robot"
                className="w-full h-full object-contain"
              />
            </div>
          </>
        )}

        {/* When VERIFIED - Show only verified text + sad robot */}
        {verified && (
          <>
            <span className="text-green-600 font-medium">✅ Verified</span>
            
            {/* Sad Robot Image - Not clickable */}
            <div 
              style={{ width: '60px', height: '60px' }}
            >
              <img
                src={sadRobot}
                alt="robot"
                className="w-full h-full object-contain"
              />
            </div>
          </>
        )}
      </div>

      {/* Modal - NO CLOSE BUTTON, NO RELOAD BUTTON */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-[9999]">
          <div className="bg-white rounded-xl shadow-xl w-[92vw] sm:w-[520px] p-4 relative">
            {/* Header - NO CLOSE BUTTON */}
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                Select all images with <span className="text-indigo-600">{challengeTopic}</span>
              </h3>
            </div>

            <p className="text-sm text-gray-600 mb-3 text-center">
              Click on all 3 images that show <strong>{challengeTopic}</strong>
            </p>

            {/* Grid - 9 images (3x3) */}
            <div className="grid grid-cols-3 gap-2">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => handleImageClick(idx)}
                  className={`relative rounded-md overflow-hidden cursor-pointer border-4 transition-all ${
                    selected.includes(idx) 
                      ? "border-indigo-600 ring-2 ring-indigo-300" 
                      : "border-transparent hover:border-gray-300"
                  }`}
                  style={{ height: 100 }}
                >
                  {/* loader */}
                  {img.loading && !img.error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="w-6 h-6 border-2 border-t-indigo-600 rounded-full animate-spin" />
                    </div>
                  )}

                  {/* broken fallback */}
                  {img.error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-xs px-2 text-red-500 text-center">
                      Loading...
                    </div>
                  )}

                  {/* actual image */}
                  <img
                    src={img.url}
                    alt={`captcha-${idx}`}
                    onLoad={() => handleImgLoad(idx)}
                    onError={() => handleImgError(idx)}
                    className="w-full h-full object-cover"
                    style={{ display: (img.loading || img.error) ? "none" : "block" }}
                  />
                </div>
              ))}
            </div>

            {/* Selected counter */}
            <div className="text-center mt-2 text-sm text-gray-600">
              Selected: {selected.length} of 3 required
            </div>

            {/* Footer - ONLY VERIFY BUTTON */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-red-500">{message}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleVerify}
                  disabled={selected.length === 0}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

AutoCaptcha.displayName = "AutoCaptcha";

export default AutoCaptcha;