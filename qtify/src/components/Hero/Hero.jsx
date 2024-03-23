import React from "react";
import headphonesImage from "../../assests/vibrating-headphone 1.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>100 Thousand Songs, ad-free</h1>
          <p className={styles.subtext}>Over thousands podcast episodes</p>
        </div>
        <img src={headphonesImage} alt="Headphones" className={styles.image} />
      </div>
    </div>
  );
};

export default Hero;
