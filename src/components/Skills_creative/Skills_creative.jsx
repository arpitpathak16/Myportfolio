import React from "react";
import styles from "./Skills_creative.module.css";
export const Skills = () => {
  return (
    <div className={styles.skills}>
      {/* <h2 className={styles.h2text}>Skills</h2> */}
      <div className={styles.frontend}>
        <div className={styles.frontend_top}>
          <p className={styles.frontend_heading}>Frontend</p>
        </div>
        <div className={styles.frontend_tech}>
          <div className={styles.html}>
            <p className={styles.html_text}>HTML</p>
          </div>
          <div className={styles.css}>
            <p className={styles.css_text}>CSS</p>
          </div>
          <div className={styles.js}>
            <p className={styles.js_text}>Javascript</p>
          </div>
          <div className={styles.react}>
            <p className={styles.react_text}>React Js</p>
          </div>
          <div className={styles.vite}>
            <p className={styles.vite_text}>Vite Js</p>
          </div>
        </div>
      </div>
      <div className={styles.backend}>
        <div className={styles.backend_top}>
          <p className={styles.backend_heading}>Backend</p>
        </div>
        <div className={styles.backend_tech}>
          <div className={styles.node}>
            <p className={styles.node_text}>Node JS</p>
          </div>
          <div className={styles.express}>
            <p className={styles.express_text}>Express JS</p>
          </div>
        </div>
      </div>
      <div className={styles.database}>
        <div className={styles.database_top}>
          <p className={styles.frontend_heading}>Database</p>
        </div>
        <div className={styles.database_tech}>
          <div className={styles.sql}>
            <p className={styles.sql_text}>MySQL</p>
          </div>
          <div className={styles.mongo}>
            <p className={styles.mongo_text}>MongoDB</p>
          </div>
        </div>
      </div>
      <div className={styles.liabraries}>
        <div className={styles.liabraries_top}>
          <p className={styles.frontend_heading}>Liabraries</p>
        </div>
        <div className={styles.liabraries_tech}>
          <div className={styles.numpy}>
            <p className={styles.numpy_text}>NumPy</p>
          </div>
          <div className={styles.pandas}>
            <p className={styles.pandas_text}>Pandas</p>
          </div>
          <div className={styles.opencv}>
            <p className={styles.opencv_text}>OpenCV</p>
          </div>
          <div className={styles.scipy}>
            <p className={styles.scipy_text}>SciPy</p>
          </div>
          <div className={styles.mat}>
            <p className={styles.mat_text}>Matplotlib</p>
          </div>
        </div>
      </div>
    </div>
  );
};
