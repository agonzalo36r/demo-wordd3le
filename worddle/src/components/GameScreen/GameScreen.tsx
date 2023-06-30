import React, { useReducer } from "react";
import Header from "./Header";
import Board from "./Board/Board";
import Keyboard from "./Keyboard/Keyboard";
import { defaultGame, gameReducer } from "./GameReducer";
const GameScreen = () => {
  const [gameState, dispatch] = useReducer(gameReducer, defaultGame);

  return (
    <>
      <Header />
      <Board boardTiles={gameState.boardTiles} currentWord={gameState.currentWord} />
      <Keyboard gameState={gameState} dispatch={dispatch} />
    </>
  );
};

export default GameScreen;
