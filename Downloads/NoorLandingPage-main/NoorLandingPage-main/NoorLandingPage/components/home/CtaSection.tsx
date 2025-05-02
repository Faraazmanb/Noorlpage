import React from "react";
import styles from "../../index.module.css";
interface CtaSectionProps {
  onBookClick: () => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onBookClick }) => {
  return (
    <section className={`${styles.ctaSection} fade-in-element`}>
      <div className={styles.ctaOverlay}></div>
      <div className={styles.ctaContent}>
        <h2>Experience Luxury Like Never Before</h2>
        <p>
          Book your stay today and enjoy exclusive benefits when you reserve
          directly with us.
        </p>
        <button className={styles.ctaButton} onClick={onBookClick}>
          Book Now
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
