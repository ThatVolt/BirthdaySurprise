import React, { useEffect, useState } from "react";

import helloKittyImage from '../public/hello_kitty.png';
import calenderImage from '../public/calender.png';

const STICKERS = [
  { className: "sticker-1", content: "🎀" },
  { className: "sticker-2", content: helloKittyImage, isImage: true }, 
  { className: "sticker-3", content: "💕" },
  { className: "sticker-4", content: "🎀" },
  { className: "sticker-5", content: "🌸" },
  { className: "sticker-6", content: "✨" },
  { className: "sticker-7", content: calenderImage, isImage:true }, // NEW STICKER!
];

const StickersAndHearts = ({ triggerHearts }) => {
  const [celebrationHearts, setCelebrationHearts] = useState([]);

  const createHeart = () => {
    const newHeart = {
      id: Date.now() + Math.random(),
      style: {
        left: Math.random() * 100 + "vw",
        animationDelay: Math.random() * 3 + "s",
        fontSize: Math.random() * 20 + 10 + "px",
      },
    };

    setCelebrationHearts((prevHearts) => [...prevHearts, newHeart]);

    // Remove heart after animation duration (6000ms from CSS)
    setTimeout(() => {
      setCelebrationHearts((prevHearts) =>
        prevHearts.filter((h) => h.id !== newHeart.id)
      );
    }, 6000);
  };

  // 1. Logic for Continuous Floating Hearts
  useEffect(() => {
    const interval = setInterval(() => createHeart(), 500); 
    return () => clearInterval(interval);
  }, []);

  // 2. Logic for Celebration Hearts (Triggers when the button is clicked)
  useEffect(() => {
    if (triggerHearts) {
      for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 100);
      }
    }
  }, [triggerHearts]); 

  return (
    <>
      {/* Render the static, position-fixed stickers */}
      {STICKERS.map((sticker, index) => (
        <div key={index} className={`sticker ${sticker.className}`}>
          {sticker.isImage ? (
            // Renders the <img> tag for Hello Kitty
            <img 
                src={sticker.content} 
                alt="Hello Kitty Sticker" 
                style={{ 
                    width: '100%',     
                    height: '100%',    
                    objectFit: 'contain' 
                }}
            />
          ) : (
            // Renders the emoji content otherwise
            sticker.content
          )}
        </div>
      ))}

      {/* Render the dynamically created hearts */}
      {celebrationHearts.map((heart) => (
        <div key={heart.id} className="heart" style={heart.style}>
          💕
        </div>
      ))}
    </>
  );
};

export default StickersAndHearts;