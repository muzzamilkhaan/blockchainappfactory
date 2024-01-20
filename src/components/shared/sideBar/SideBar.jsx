import React, { useState, useEffect } from "react";
import "./SideBarStyle.css";
const SideBar = () => {
  const [color, setColor] = useState(0);
  const [showCard, setShowCard] = useState(true);
  useEffect(() => {
    // Check if the user has visited the site before
    const hasVisitedBefore = localStorage.getItem("visitedBefore");
    const hasSkippedCard = localStorage.getItem("skippedCard");

    console.log("hasVisitedBefore:", hasVisitedBefore);
    console.log("hasSkippedCard:", hasSkippedCard);

    // If the user has not visited before or has not skipped the card, show the card
    if (!hasVisitedBefore || !hasSkippedCard) {
      setShowCard(true);

      // Set the flag in local storage to indicate that the user has visited
      localStorage.setItem("visitedBefore", true);
    } else {
      // If the user has visited before and has skipped the card, hide the card
      setShowCard(false);
    }
  }, []);
  const handleSkipClick = () => {
    // Update the state to hide the card
    setShowCard(false);

    // Set the flag in local storage to indicate that the user has skipped the card
    localStorage.setItem("skippedCard", true);
  };
  return (
    <div id="side-bar">
      {showCard && (
        <div className="sideBar-wrapper">
          <p>Where did you hear about us?</p>
          <button
            className={`btn ${color === 0 ? "btnactive" : ""}`}
            onClick={() => {
              setColor(0);
            }}
          >
            <span></span>Search Engine (Google)
          </button>
          <button
            className={`btn ${color === 1 ? "btnactive" : ""}`}
            onClick={() => {
              setColor(1);
            }}
          >
            <span></span>Social Media
          </button>
          <button
            className={`btn ${color === 2 ? "btnactive" : ""}`}
            onClick={() => {
              setColor(2);
            }}
          >
            <span></span>LinkedIn
          </button>
          <button
            className={`btn ${color === 3 ? "btnactive" : ""}`}
            onClick={() => {
              setColor(3);
            }}
          >
            <span></span>Other (Please Specify)
          </button>

          <div className="side-btn">
            <button onClick={handleSkipClick}>Skip</button>
            <button>Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
