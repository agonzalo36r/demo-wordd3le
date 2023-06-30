import React, { useReducer } from "react";
import Tile from "../Tile";

const Board = (p: { boardTiles: TileType[][]; currentWord: string }) => {
  // const [boardState, dispatch] = useReducer(boardReducer, boardDefaultState);
  const currentWord = "apple";
  return (
    <div className="flex flex-col gap-y-[11px] py-5">
      {p.boardTiles.map((boardRow, index) => (
        <div key={index} className="flex gap-x-[11px]">
          {boardRow.map((tile, index) => (
            <Tile letter={tile.tileValue} key={index} status={tile.tileStatus} />
          ))}
        </div>
      ))}
    </div>
  );
};

export type TileType = {
  tileValue: string;
  tileStatus: number;
};
export default Board;
