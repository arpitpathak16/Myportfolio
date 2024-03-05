import React from "react";
import styles from "./Projects_creative.module.css";
export const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.android}>
        <div className={styles.android_top}>
          <p className={styles.android_heading}>Code and Design?</p>
        </div>
        <div className={styles.android_tech}>
          <div className={styles.studio}>
            <p className={styles.studio_text}>Hello World!</p>
          </div>
        </div>
      </div>
      <div className={styles.lang}>
        <div className={styles.lang_top}>
          <p className={styles.lang_heading}>Design and Code?</p>
        </div>
        <div className={styles.lang_tech}>
          <div className={styles.c}>
            <p className={styles.c_text}>loren epsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};
