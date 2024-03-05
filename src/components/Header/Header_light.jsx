import React from "react";
import styles from "./Header_light.module.css";
export const Header_light = () => {
  return (
    <div className={styles.head}>
      <h1 className={styles.h1project}>Projects</h1>
      <div className={styles.card1}>
        <div className={styles.cardimage1}></div>
        <div className={styles.project1}>Amazon Clone</div>
        <div className={styles.tech1}>HTML CSS JS</div>
        <div className={styles.eye1}></div>
      </div>
      <div className={styles.card2}>
        <div className={styles.cardimage2}></div>
        <div className={styles.project2}>Spotify Clone</div>
        <div className={styles.tech2}>HTML CSS JS</div>
        <div className={styles.eye2}></div>
      </div>
      <div className={styles.card3}>
        <div className={styles.cardimage3}></div>
        <div className={styles.project3}>Youtube Clone</div>
        <div className={styles.tech3}>HTML CSS JS</div>
        <div className={styles.eye3}></div>
      </div>
      <div className={styles.card4}>
        <div className={styles.cardimage4}></div>
        <div className={styles.project4}>Medium Clone</div>
        <div className={styles.tech4}>HTML CSS JS</div>
        <div className={styles.eye4}></div>
      </div>
      <h2 className={styles.h2skills}>Skills</h2>
    </div>
  );
};

export default Header_light;
