import React, { useReducer } from "react";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board/Board";
import Keyboard from "./Keyboard/Keyboard";
import { boardDefaultState } from "./Board/BoardDefaultState";
import { defaultGame, gameReducer } from "./GameReducer";
const GameScreen = () => {
  const [gameState, dispatch] = useReducer(gameReducer, defaultGame);
  const [currentWord, setCurrentWord] = useState("APPLE");
  const [currentTry, setCurrentTry] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [boardTiles, setBoardTiles] = useState(boardDefaultState);
  const [winScore, setWinScore] = useState(0);
  const [gameNumber, setGameNumber] = useState(0);

  return (
    <>
      <Header />
      <Board boardTiles={boardTiles} currentWord={currentWord} />
      <Keyboard
        gameState={gameState}
        // currentIndex={currentIndex}
        // currentTry={currentTry}
        // boardTiles={boardTiles}
        // currentWord={currentWord}
        dispatch={dispatch}
        // setCurrentIndex={setCurrentIndex}
        // setCurrentTry={setCurrentTry}
        // setBoardTiles={setBoardTiles}
      />
    </>
  );
};

export default GameScreen;
