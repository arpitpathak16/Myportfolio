import React, { useState, useEffect } from "react";

const Navbar_typer = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing logic goes here

  return <span>{currentText}</span>;
};

export default Navbar_typer;
