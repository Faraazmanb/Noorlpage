import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../index.module.css";

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const locations = ["Now in Chennai", "Now in Bengaluru"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < locations[index].length) {
        setCurrentText((prev) => prev + locations[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % locations.length);
        }, 1500);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <div className={styles.heroContent} id="home">
      <div className={`${styles.welcomeToParent} fade-in-element`}>
        <div className={`${styles.welcomeTo} ${styles.blinkingText}`}>
          Welcome to
        </div>
        <h1 className={`${styles.hotelHeading} ${styles.fadeSlideDelay}`}>
          Al Noor Group of Hotels
        </h1>
        <p className={`${styles.hotelDescription} ${styles.fadeSlideDelay2}`}>
          Experience unparalleled luxury and comfort at Al Noor Hotels. Our
          commitment to exceptional service and elegant accommodations ensures a
          memorable stay for all our guests.
        </p>
        <a href="#about" className={styles.ctaButton}>
          <span>Explore More</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <div className={styles.blinkingText}>{currentText}</div>
        <div className={styles.blinkingTagline}>
          Escape into Comfort & Elegance
        </div>
      </div>
    </div>
  );
};

export default Hero;
