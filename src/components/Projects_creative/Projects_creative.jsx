import React from "react";
import styles from "./Projects_creative.module.css";
export const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.android}>
        <div className={styles.android_top}>
          <p className={styles.android_heading}>Android Dev</p>
        </div>
        <div className={styles.android_tech}>
          <div className={styles.studio}>
            <p className={styles.studio_text}>Android Studio</p>
          </div>
          <div className={styles.flutter}>
            <p className={styles.flutter_text}>Flutter</p>
          </div>
        </div>
      </div>
      <div className={styles.lang}>
        <div className={styles.lang_top}>
          <p className={styles.lang_heading}>Languages</p>
        </div>
        <div className={styles.lang_tech}>
          <div className={styles.c}>
            <p className={styles.c_text}>C</p>
          </div>
          <div className={styles.cpp}>
            <p className={styles.cpp_text}>C++</p>
          </div>
          <div className={styles.py}>
            <p className={styles.py_text}>Python</p>
          </div>
          <div className={styles.kot}>
            <p className={styles.kot_text}>Kotlin</p>
          </div>
          <div className={styles.JS}>
            <p className={styles.JS_text}>Javascript</p>
          </div>
        </div>
      </div>
      <div className={styles.more}>
        <div className={styles.more_top}>
          <p className={styles.more_heading}>More Projects</p>
        </div>
        <div className={styles.more_tech}>
          <div className={styles.bar}>
            <p className={styles.bar_text}>
              Barcode Detection in fashion images
            </p>
          </div>
          <div className={styles.video}>
            <p className={styles.video_text}>P2P video calling app</p>
          </div>
        </div>
      </div>
      <div className={styles.hardware}>
        <div className={styles.hardware_top}>
          <p className={styles.hardware_heading}>Hardware</p>
        </div>
        <div className={styles.hardware_tech}>
          <div className={styles.voice}>
            <p className={styles.voice_text}>Voice separation from music</p>
          </div>
          <div className={styles.amp}>
            <p className={styles.amp_text}>Differential amp</p>
          </div>
          <div className={styles.irr}>
            <p className={styles.irr_text}>Smart Irrigation System</p>
          </div>
        </div>
      </div>
    </div>
  );
};
