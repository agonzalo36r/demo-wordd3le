import React from "react";
import DialogContainer from "./DialogContainer";
import MainButton from "../Common/MainButton";
import { GameActionType, GameType } from "../GameScreen/GameReducer";

const StatsDialog = (p: { gameState: GameType; dispatch: React.Dispatch<GameActionType> }) => {
  const handleButton = () => {
    if (p.gameState.hasWonRound) {
      p.dispatch({ type: "newWord", value: 0 });
    } else if (p.gameState.currentTry === 5) {
      p.dispatch({ type: "newWord", value: false });
    } else {
      p.dispatch({ type: "showStats", value: false });
    }
  };
  return (
    <DialogContainer>
      <div className="flex flex-col justify-center">
        <div className="mx-auto text-[35px] font-bold">Estadísticas</div>
        <div className="flex justify-between">
          <Stat value={p.gameState.gameNumber} type="Jugadas" />
          <Stat value={p.gameState.winScore} type="Victorias" />
        </div>
        {p.gameState.showWord && (
          <div className="my-7 flex items-center justify-center gap-x-2">
            <div className="text-[19px]">La palabra era:</div>
            <div className="text-[19px] font-bold uppercase">{p.gameState.currentWord}</div>
          </div>
        )}

        <div className="mb-6 flex flex-col items-center">
          <div className="text-[19px] uppercase">Siguiente palabra</div>
          <div className="text-[19px] font-bold">04:10</div>
        </div>
        <MainButton text="Aceptar" buttonAction={handleButton} />
      </div>
    </DialogContainer>
  );
};

const Stat = (p: { value: number; type: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-[35px] font-extrabold">{p.value}</div>
      <div className="text-[21px]">{p.type}</div>
    </div>
  );
};
export default StatsDialog;
