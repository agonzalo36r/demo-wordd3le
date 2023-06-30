import { TileType } from "./Board/Board";
import { boardDefaultState } from "./Board/BoardDefaultState";

export function gameReducer(state: GameType, action: GameActionType) {
  switch (action.type) {
    case "currentWord": {
      return {
        ...state,
        currentWord: action.value as string,
      };
    }
    case "currentTry": {
      return {
        ...state,
        currentTry: action.value as number,
      };
    }
    case "currentIndex": {
      return {
        ...state,
        currentIndex: action.value as number,
      };
    }
    case "elapsedSeconds": {
      return {
        ...state,
        elapsedSeconds: action.value as number,
      };
    }
    case "boardTiles": {
      return {
        ...state,
        boardTiles: action.value as TileType[][],
      };
    }
    case "winScore": {
      return {
        ...state,
        winScore: action.value as number,
      };
    }
    case "gameNumber": {
      return {
        ...state,
        gameNumber: action.value as number,
      };
    }
    case "reset": {
      return {
        ...defaultGame,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

export type GameActionType = {
  value: string | number | TileType[][];
  type: string;
};
export type GameType = {
  currentWord: string;
  currentTry: number;
  currentIndex: number;
  elapsedSeconds: number;
  boardTiles: TileType[][];
  winScore: number;
  gameNumber: number;
};

export const defaultGame: GameType = {
  currentWord: "APPLE",
  currentTry: 0,
  currentIndex: 0,
  elapsedSeconds: 0,
  boardTiles: boardDefaultState,
  winScore: 0,
  gameNumber: 0,
};
