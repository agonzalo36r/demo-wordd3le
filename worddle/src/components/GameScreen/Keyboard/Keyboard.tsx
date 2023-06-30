import React, { Dispatch, SetStateAction } from "react";
import { DeleteKey, EnterKey, WordleKey } from "./Key";
import { TileType } from "../Board/Board";
import { GameActionType, GameType } from "../GameReducer";

const Keyboard = (p: { gameState: GameType; dispatch: React.Dispatch<GameActionType> }) => {
  const handleKeyClick = (keyValue: string) => {
    if (p.gameState.currentIndex < 5 && p.gameState.currentTry < 5) {
      const localBoardTiles = [...p.gameState.boardTiles];
      localBoardTiles[p.gameState.currentTry][p.gameState.currentIndex] = {
        tileValue: keyValue,
        tileStatus: 4,
      };
      p.dispatch({ type: "boardTiles", value: localBoardTiles });
      p.dispatch({ type: "currentIndex", value: p.gameState.currentIndex + 1 });
    }
  };

  const handleDeleteKey = () => {
    if (p.gameState.currentTry < 5) {
      const localBoardTiles = [...p.gameState.boardTiles];
      localBoardTiles[p.gameState.currentTry][p.gameState.currentIndex + 1] = {
        tileValue: "",
        tileStatus: 0,
      };
      p.dispatch({ type: "boardTiles", value: localBoardTiles });
      if (p.gameState.currentIndex > 0) {
        p.dispatch({ type: "currentIndex", value: p.gameState.currentIndex - 1 });
      }
    }
  };

  const handleEnterKey = () => {
    if (p.gameState.currentTry < 5) {
      gameCalculator();
      p.dispatch({ type: "currentTry", value: p.gameState.currentTry + 1 });
      p.dispatch({ type: "currentIndex", value: 0 as number });
    }
  };

  const gameCalculator = () => {
    const updatedTiles = tileCalculator(
      p.gameState.currentWord,
      p.gameState.currentTry,
      p.gameState.boardTiles
    );
    p.dispatch({ type: "boardTiles", value: updatedTiles });
  };

  const tileCalculator = (
    currentWord: string,
    currentTry: number,
    localBoardTiles: TileType[][]
  ): TileType[][] => {
    let j = -1;
    const results = [];
    for (let i = 0; i < 5; i++) {
      //
      console.log(localBoardTiles[currentTry][i].tileValue);
      while ((j = currentWord.indexOf(localBoardTiles[currentTry][i].tileValue, j + 1)) >= 0) {
        results.push(j);
      }
      if (results.length === 0) {
        localBoardTiles[currentTry][i].tileStatus = 3;
      } else if (results.includes(i)) {
        localBoardTiles[currentTry][i].tileStatus = 1;
      } else {
        localBoardTiles[currentTry][i].tileStatus = 2;
      }
      results.length = 0;
    }
    return localBoardTiles;
  };
  return (
    <div className="flex flex-col gap-y-[9px] rounded-[15px] bg-wordle-lighter-gray/30 p-[33px] dark:bg-wordle-lighter-gray/[.03]">
      <div className="flex gap-x-[9px]">
        {keys1.map((key, index) => (
          <WordleKey value={key} key={index} handleKeyClick={handleKeyClick} />
        ))}
      </div>
      <div className="flex gap-x-[9px]">
        {keys2.map((key, index) => (
          <WordleKey value={key} key={index} handleKeyClick={handleKeyClick} />
        ))}
      </div>
      <div className="flex gap-x-[9px]">
        <EnterKey handleEnterKey={handleEnterKey} />
        {keys3.map((key, index) => (
          <WordleKey value={key} key={index} handleKeyClick={handleKeyClick} />
        ))}
        <DeleteKey handleDeleteKey={handleDeleteKey} />
      </div>
    </div>
  );
};

const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

export default Keyboard;