import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./App_page2.module.css";
import { Navbar } from "./components/Navbar_creative/Navbar_creative";
import { Header } from "./components/Header_creative/Header_creative";
import { Topbar } from "./components/Topbar_creative/Topbar_creative";
import { Skills } from "./components/Skills_creative/Skills_creative";
import { Projects } from "./components/Projects_creative/Projects_creative";

function App_page2() {
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

export default App_page2;
