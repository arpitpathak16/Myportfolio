import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./App.module.css";
// import styles from "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Topbar } from "./components/Topbar/Topbar";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>{/* <Navbar /> */}</div>
      <div className={styles.dummy_container}>
        <Navbar />
      </div>
      <div className={styles.top}>
        <Topbar />
        <Header />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
