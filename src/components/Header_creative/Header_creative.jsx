import React from "react";
import styles from "./Header_creative.module.css";
export const Header = () => {
  return (
    <div className={styles.head}>
      <h1 className={styles.h1project}>Skills</h1>
      <div className={styles.card1}>
        <div className={styles.cardimage1}></div>
        <div className={styles.project1}>Video Editing</div>
        <div className={styles.tech1}>Premier Pro and Davinci Resolve</div>
        <div className={styles.eye1}></div>
      </div>
      <div className={styles.card2}>
        <div className={styles.cardimage2}></div>
        <div className={styles.project2}>Figma Design</div>
        <div className={styles.tech2}>Design and Prototyping</div>
        <div className={styles.eye2}></div>
      </div>
      <div className={styles.card3}>
        <div className={styles.cardimage3}></div>
        <div className={styles.project3}>Content Creation</div>
        <div className={styles.tech3}>Youtube videos and stories</div>
        <div className={styles.eye3}></div>
      </div>
      <div className={styles.card4}>
        <div className={styles.cardimage4}></div>
        <div className={styles.project4}>Creative Writing</div>
        <div className={styles.tech4}>Fictiona and stories</div>
        <div className={styles.eye4}></div>
      </div>
      <h2 className={styles.h2skills}>Projects</h2>
    </div>
  );
};
