import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./App_light.module.css";
// import styles from "./index.css";
import { Navbar_light } from "./components/Navbar/Navbar_light";
import { Header_light } from "./components/Header/Header_light";
import { Topbar } from "./components/Topbar/Topbar";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";

function App_light() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>{/* <Navbar /> */}</div>
      <div className={styles.dummy_container}>
        <Navbar_light />
      </div>
      <div className={styles.top}>
        <Topbar />
        <Header_light />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App_light;
