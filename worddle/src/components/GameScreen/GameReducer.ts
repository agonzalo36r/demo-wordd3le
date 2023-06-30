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
    case "showInstructions": {
      return {
        ...state,
        showInstructions: action.value as boolean,
      };
    }
    case "showStats": {
      return {
        ...state,
        showStats: action.value as boolean,
      };
    }
    case "showWord": {
      return {
        ...state,
        showWord: action.value as boolean,
      };
    }
    case "hasWonRound": {
      return {
        ...state,
        hasWonRound: action.value as boolean,
      };
    }
    case "newWord": {
      const copyTiles = JSON.parse(JSON.stringify(boardDefaultState));
      console.log(copyTiles);
      return {
        ...state,
        boardTiles: copyTiles,
        elapsedSeconds: 0 as number,
        currentIndex: 0 as number,
        currentTry: 0 as number,
        showStats: false,
        hasWonRound: false,
        showWord: false,
        //newword
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
  value: string | number | TileType[][] | boolean;
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
  showInstructions: boolean;
  showStats: boolean;
  hasWonRound: boolean;
  showWord: boolean;
};

export const defaultGame: GameType = {
  currentWord: "APPLE",
  currentTry: 0,
  currentIndex: 0,
  elapsedSeconds: 0,
  boardTiles: JSON.parse(JSON.stringify(boardDefaultState)),
  winScore: 0,
  gameNumber: 0,
  showInstructions: false,
  showStats: false,
  hasWonRound: false,
  showWord: false,
};
