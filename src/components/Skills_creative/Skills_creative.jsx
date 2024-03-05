import React from "react";
import styles from "./Skills_creative.module.css";
export const Skills = () => {
  return (
    <div className={styles.skills}>
      {/* <h2 className={styles.h2text}>Skills</h2> */}
      <div className={styles.frontend}>
        <div className={styles.frontend_top}>
          <p className={styles.frontend_heading}>Individual work</p>
        </div>
        <div className={styles.frontend_tech}>
          <div className={styles.html}>
            <p className={styles.html_text}>IP1</p>
          </div>
          <div className={styles.css}>
            <p className={styles.css_text}>IP2</p>
          </div>
        </div>
      </div>
      <div className={styles.backend}>
        <div className={styles.backend_top}>
          <p className={styles.backend_heading}>Teamwork</p>
        </div>
        <div className={styles.backend_tech}>
          <div className={styles.node}>
            <p className={styles.node_text}>TWP1</p>
          </div>
          <div className={styles.express}>
            <p className={styles.express_text}>TWP2</p>
          </div>
        </div>
      </div>
    </div>
  );
};
