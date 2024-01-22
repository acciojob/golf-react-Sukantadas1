import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [showBall, setShowBall] = useState(false);
  const [ballPosition, setBallPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.keyCode === 39) {
        setBallPosition((prevPosition) => ({
          ...prevPosition,
          left: prevPosition.left + 5,
        }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  const startGame = () => {
    setShowBall(true);
  };

  return (
    <div>
      {!showBall && (
        <button className="start" onClick={startGame}>
          Start
        </button>
      )}
      {showBall && <div className="ball" style={ballPosition}></div>}
    </div>
  );
};

export default App;
