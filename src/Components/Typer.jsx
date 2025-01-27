import React, { useEffect, useState } from "react";

// Custom hook to handle the typing effect for multiple strings
const useTypewriter = (texts, speed = 50, delay = 1000) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0); // To track the current text being typed

  useEffect(() => {
    let i = 0;
    const currentText = texts[index];
    const typingInterval = setInterval(() => {
      if (i < currentText.length) {
        setDisplayText(currentText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          // Move to the next string, and loop back to the first string if we reach the end
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setDisplayText(""); // Clear text for the next string
        }, delay);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [index, texts, speed, delay]);

  return displayText;
};

const Typer = ({ texts, speed, delay }) => {
  const displayText = useTypewriter(texts, speed, delay);
  return <p className="text-2xl">{displayText}</p>;
};

export default Typer;
