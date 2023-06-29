import React from "react";
import Tile from "../Tile";

const Board = () => {
  const currentWord = "apple";
  return (
    <div className="flex flex-col gap-y-[11px] py-5">
      {boardData.map((boardRow, index) => (
        <div key={index} className="flex gap-x-[11px]">
          {boardRow.map((tile, index) => (
            <Tile letter={tile.value} key={index} status={tile.status} />
          ))}
        </div>
      ))}
    </div>
  );
};

const boardData: TileType[][] = [
  [
    { value: "C", status: 3 },
    { value: "G", status: 2 },
    { value: "T", status: 1 },
    { value: "S", status: 4 },
    { value: "X", status: 0 },
  ],
  [
    { value: "", status: 0 },
    { value: "", status: 0 },
    { value: "", status: 0 },
    { value: "", status: 0 },
    { value: "", status: 0 },
  ],
  [
    { value: "", status: 0 },
    { value: "", status: 0 },
    { value: "", status: 0 },
    { value: "", status: 0 },
    { value: "", status: 0 },
  ],
  [
    { value: "", status: 0 },
    { value: "", status: 0 },
    { value: "", status: 0 },
    { value: "", status: 0 },
    { value: "", status: 0 },
  ],
  [
    { value: "", status: 0 },
    { value: "", status: 0 },
    { value: "", status: 0 },
    { value: "", status: 0 },
    { value: "", status: 0 },
  ],
];

type TileType = {
  value: string;
  status: number;
};
export default Board;
