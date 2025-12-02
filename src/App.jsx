import React, { useState } from "react";
import "./styles.css";
import StickersAndHearts from "./StickersAndHearts.jsx";

import photo1Image from '../public/photo1.png';
import photo2Image from '../public/photo2.png';
import photo3Image from '../public/photo3.png';
import photo4Image from '../public/photo4.png';
import photo5Image from '../public/photo5.png';
import photo6Image from '../public/photo6.png';
import photo7Image from '../public/photo7.png';
import photo8Image from '../public/photo8.png';
import photo9Image from '../public/photo9.png';

const WISH_MESSAGES = [
  "🎉 You deserve the entire worlddd!! 🎉",
  "✨ May all your dreams come true! ✨",
  "💕 Wishing you the best wala best year! 💕",
  "🌟 You deserve all the happiness! 🌟",
];

const MEMORIES = [
  {
    id: 1,
    url:photo1Image,
    caption: "Your cutieyyeee si pic of you when you were younger!🎀",
  },
  {
    id: 2,
    url: photo2Image,
    caption: "My favourite picture of you when you were younger!💕",
  },
  { id: 3, url: photo3Image, caption: "Our favourite  picc !!❤️" },
  {
    id: 4,
    url: photo4Image,
    caption:
      "We spend more than 30mins together and i got 2 hairclips of you!✨",
  },
  {
    id: 5,
    url: photo5Image,
    caption: "The best time we had!😍",
  },
  {
    id: 6,
    url: photo6Image,
    caption: "Bro EID day! Holdingg your hand was the best!😊",
  },
  {
    id: 7,
    url: photo7Image,
    caption: "You are jussss soo soo soo pretyyyyyy!!💖",
  },
  {
    id: 8,
    url: photo8Image,
    caption: "Bro Corniche Date was so FUN!🥂",
  },
  {
    id: 9,
    url: photo9Image,
    caption:
      "Yourrr Eyessssss are soooooo beutifullll!! and perfectt mahn!!!🌸",
  },
];

const App = () => {
  const [wishMessage, setWishMessage] = useState("");
  const [flippedIds, setFlippedIds] = useState([]);
  const [heartsTrigger, setHeartsTrigger] = useState(0);

  const handleFlip = (id) => {
    setFlippedIds((prevFlippedIds) => {
      if (prevFlippedIds.includes(id)) {
        return prevFlippedIds.filter((currentId) => currentId !== id);
      } else {
        return [...prevFlippedIds, id];
      }
    });
  };

  const handleBlowCandles = () => {
    const randomMessage =
      WISH_MESSAGES[Math.floor(Math.random() * WISH_MESSAGES.length)];

    setWishMessage(randomMessage);
    setHeartsTrigger((prev) => prev + 1);
  };

  return (
    <>
      <StickersAndHearts triggerHearts={heartsTrigger} />

      <div className="container">
        <div className="header">
          <div className="bow">🎀</div>
          <h1>Happy Birthday!</h1>
          <div className="subtitle">
            To the most amazing girlfriend in the world ✨
          </div>
        </div>

        {/* Card 1: Message */}
        <div className="card">
          <div className="message">
            <p>Happy birthday to my kuchi puchi! 💕</p>
            <p style={{ marginTop: "20px" }}>
              I hope your day is as sweet and special as you are!
              <br></br>You are the best person i could ever meet!!<br></br> I
              hope the future brings you the besttt happiness and no pain
              mylove!!
            </p>
          </div>
        </div>

        {/* Card 2: Reasons */}
        <div className="card">
          <h2
            style={{
              textAlign: "center",
              color: "#ff1493",
              marginBottom: "30px",
              fontSize: "2em",
            }}
          >
            Reasons Why You're Amazing 🌸
          </h2>
          <ul className="reasons-list">
            <li>
              <span className="sparkle">✨</span> Staring into your eyes is the
              best thingggg for me!!
            </li>
            <li>
              <span className="sparkle">💖</span> You make everything juss the
              best by beingg there
            </li>
            <li>
              <span className="sparkle">🌟</span> You're the bestttt wali
              bestttt mwuahuh!
            </li>
            <li>
              <span className="sparkle">🎀</span> You understand me like no one
              else
            </li>
            <li>
              <span className="sparkle">💕</span> Every moment with you is
              special
            </li>
          </ul>
        </div>

        {/* Card 3: Photos (3D Flip Card Implementation with Captions) */}
        <div className="card">
          <h2
            style={{
              textAlign: "center",
              color: "#ff1493",
              marginBottom: "30px",
              fontSize: "2em",
            }}
          >
            Our Memories 📸
          </h2>
          <div className="photos-grid">
            {MEMORIES.map((memory) => (
              <div key={memory.id} className="flip-card-container">
                <div
                  className={`flip-card ${
                    flippedIds.includes(memory.id) ? "flipped" : ""
                  }`}
                  onClick={() => handleFlip(memory.id)}
                >
                  <div className="flip-card-inner">
                    {/* FRONT FACE: The Emoji Placeholder */}
                    <div className="flip-card-front">
                      {memory.id === 1 && "🎀"}
                      {memory.id === 2 && "💕"}
                      {memory.id === 3 && "✨"}
                      {memory.id === 4 && "🌸"}
                      {memory.id === 5 && "💖"}
                      {memory.id === 6 && "😊"}
                      {memory.id === 7 && "🥂"}
                      {memory.id === 8 && "😍"}
                      {memory.id === 9 && "👀"}
                    </div>

                    {/* BACK FACE: The Image */}
                    <div className="flip-card-back">
                      <img
                        src={memory.url}
                        alt={`Memory ${memory.id}`}
                        className="flip-card-image"
                      />
                    </div>
                  </div>
                </div>

                {/* Caption below the card */}
                <div className="flip-card-caption">{memory.caption}</div>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#ff69b4",
              fontStyle: "italic",
            }}
          >
            Click the emoji to reveal the memory! 👆
          </p>
        </div>

        {/* Card 4: Wish Button (Interactive) */}
        <div className="card" style={{ textAlign: "center" }}>
          <h2
            style={{ color: "#ff1493", marginBottom: "20px", fontSize: "2em" }}
          >
            Make a Birthday Wish! 🎂
          </h2>
          <button className="button" onClick={handleBlowCandles}>
            Blow Out the Candles 🕯️
          </button>

          <div
            id="wish-message"
            style={{
              marginTop: "20px",
              fontSize: "1.3em",
              color: "#ff1493",
              fontWeight: 600,
            }}
          >
            {wishMessage}
          </div>
        </div>

        <div className="footer">
          <p>Love you always! 💕🎀✨</p>
        </div>
      </div>
    </>
  );
};

export default App;
