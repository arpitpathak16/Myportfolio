import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Navbar = () => {
  // const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/page2");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.flexContainer}>
        <div className={styles.circle}></div>
        <a className={styles.techportfolio} href="/">
          Tech Portfolio
        </a>
      </div>

      <div className={styles.socials}>
        <div className={styles.home}>
          <div className={styles.home_img}></div>
          <a href="#home" className={styles.home_text}>
            Home
          </a>
        </div>
        <div className={styles.github}>
          <div className={styles.github_img}></div>
          <a
            href="https://github.com/arpitpathak16"
            target="_blank"
            className={styles.github_text}>
            Github
          </a>
        </div>
        <div className={styles.linkedin}>
          <div className={styles.linkedin_img}></div>
          <a
            href="https://www.linkedin.com/in/arpit-pathak-79600024b/"
            target="_blank"
            className={styles.linkedin_text}>
            Linkedin
          </a>
        </div>
        <div className={styles.yt}>
          <div className={styles.yt_img}></div>
          <a
            href="http://www.youtube.com/@collegeconfessions9116"
            target="_blank"
            className={styles.yt_text}>
            Youtube
          </a>
        </div>
        <div className={styles.insta}>
          <div className={styles.insta_img}></div>
          <a
            href="https://www.instagram.com/arpit_pathak_07/"
            target="_blank"
            className={styles.insta_text}>
            Instagram
          </a>
        </div>
        <div className={styles.resume}>
          <div className={styles.resume_img}></div>
          <a
            href="https://drive.google.com/file/d/1SgjOMPgD3fouxDw_pys3w_9q0yiZLExT/view?usp=sharing"
            target="_blank"
            className={styles.resume_text}>
            Resume
          </a>
        </div>
      </div>
      <div className={styles.mode}></div>
      <Link to={"/page2"}>
        <div className={styles.goto} onClick={handleButtonClick}></div>
      </Link>

      {/* <div className={styles.goto} onClick= {handleCircleClick}></div> */}
      <p className={styles.modetext}>Tech Mode ON</p>
    </nav>
  );
};
export default Navbar;
