import React, { useEffect, useRef, useState } from "react";

const OfflineGame = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [obstacleLeft, setObstacleLeft] = useState(300);
  const [gameOver, setGameOver] = useState(false);
  const dinoRef = useRef(null);
  const obstacleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (obstacleLeft > 0) {
        setObstacleLeft((prev) => prev - 5);
      } else {
        setObstacleLeft(300);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [obstacleLeft]);

  useEffect(() => {
    const checkCollision = setInterval(() => {
      if (
        dinoRef.current &&
        obstacleRef.current &&
        obstacleLeft < 50 &&
        obstacleLeft > 0 &&
        !isJumping
      ) {
        setGameOver(true);
      }
    }, 50);

    return () => clearInterval(checkCollision);
  }, [obstacleLeft, isJumping]);

  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 500);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>You're Offline! Play This Game</h2>
      {gameOver ? (
        <h3>Game Over! Refresh to Play Again</h3>
      ) : (
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "150px",
            border: "2px solid black",
            margin: "auto",
            overflow: "hidden",
          }}
        >
          <div
            ref={dinoRef}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "green",
              position: "absolute",
              bottom: isJumping ? "80px" : "0px",
              left: "30px",
              transition: "bottom 0.3s",
            }}
          ></div>
          <div
            ref={obstacleRef}
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "red",
              position: "absolute",
              bottom: "0px",
              left: `${obstacleLeft}px`,
            }}
          ></div>
        </div>
      )}
      {!gameOver && <p>Press Spacebar to Jump</p>}
      <button onClick={handleJump} disabled={gameOver}>
        Jump
      </button>
    </div>
  );
};

export default OfflineGame;
