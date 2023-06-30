import React, { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import Board from "./Board/Board";
import Keyboard from "./Keyboard/Keyboard";
import { defaultGame, gameReducer } from "./GameReducer";
import InstructionsDialog from "../Dialogs/InstructionsDialog";
import { Stats } from "fs";
import StatsDialog from "../Dialogs/StatsDialog";
const GameScreen = () => {
  const [gameState, dispatch] = useReducer(gameReducer, defaultGame);
  useEffect(() => {
    if (gameState.hasWonRound) {
      dispatch({ type: "showStats", value: true });
    }
  }, [gameState.hasWonRound]);

  return (
    <div className="grid h-full w-full grid-cols-1 grid-rows-1 justify-center">
      <div className="z-0 col-span-1 col-start-1 row-span-1 row-start-1 flex flex-col items-center justify-center self-start">
        <Header
          showStats={gameState.showStats}
          showInstructions={gameState.showInstructions}
          dispatch={dispatch}
        />
        <Board boardTiles={gameState.boardTiles} currentWord={gameState.currentWord} />
        <Keyboard gameState={gameState} dispatch={dispatch} />
      </div>
      {gameState.showInstructions && <InstructionsDialog dispatch={dispatch} />}
      {gameState.showStats && <StatsDialog dispatch={dispatch} gameState={gameState} />}
    </div>
  );
};

export default GameScreen;
