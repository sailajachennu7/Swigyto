import React, { useState, useEffect } from "react";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 5, y: 5 };
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

const OfflineGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(DIRECTIONS.ArrowRight);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (DIRECTIONS[event.key]) {
        setDirection(DIRECTIONS[event.key]);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const gameLoop = setInterval(() => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const head = {
          x: newSnake[0].x + direction.x,
          y: newSnake[0].y + direction.y,
        };

        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE || newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          return prevSnake;
        }

        newSnake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
          setFood({ x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) });
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 200);

    return () => clearInterval(gameLoop);
  }, [direction, food, gameOver]);

  return (
    <div className="flex flex-col items-center mt-10 font-sans">
      <h2 className="text-xl font-bold mb-4">You're Offline! Play Snake Game</h2>
      {gameOver ? (
        <>
          <h3 className="text-red-600 font-semibold">Game Over!</h3>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => {
              setSnake(INITIAL_SNAKE);
              setFood(INITIAL_FOOD);
              setDirection(DIRECTIONS.ArrowRight);
              setGameOver(false);
            }}
          >
            Restart Game
          </button>
        </>
      ) : (
        <div className="relative w-[400px] h-[400px] border-4 border-black bg-green-200 grid grid-cols-20 grid-rows-20">
          {Array.from({ length: GRID_SIZE }).map((_, y) =>
            Array.from({ length: GRID_SIZE }).map((_, x) => (
              <div
                key={`${x}-${y}`}
                className={`w-5 h-5 ${snake[0].x === x && snake[0].y === y ? 'bg-blue-500 rounded-full' : snake.some(segment => segment.x === x && segment.y === y) ? 'bg-green-700 rounded-full' : food.x === x && food.y === y ? 'bg-red-500 rounded-full' : ''}`}
              ></div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default OfflineGame;
