import React from "react";
import DialogContainer from "./DialogContainer";
import Tile from "../Board/Tile";
import MainButton from "../Common/MainButton";

const InstructionsDialog = () => {
  return (
    <DialogContainer>
      <div className="flex flex-col justify-center">
        <div className="mx-auto text-[35px] font-bold">Cómo jugar</div>
        <div className="flex flex-col gap-y-6">
          <InstructionText text="Adivina la palabra oculta en cinco intentos." />
          <InstructionText text="Cada intento debe ser una palabra válida de 5 letras.." />
          <InstructionText
            text="Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de
          acertar la palabra."
          />
        </div>
        <Examples />
        <InstructionText
          text="Puede haber letras repetidas. Las pistas son independientes para cada letra."
          margin="py-6"
        />
        <InstructionText text="¡Una palabra nueva cada 5 minutos!" center={true} margin="py-7" />
        <MainButton text="¡Jugar!" />
      </div>
    </DialogContainer>
  );
};

const Examples = () => {
  return (
    <div>
      <div className="text-[19px] font-bold">Ejemplos</div>
      <div className="mb-[6px] mt-[23px]">
        <div className="flex gap-x-[11px]">
          <Tile letter="G" status={1} />
          <Tile letter="A" status={0} />
          <Tile letter="T" status={0} />
          <Tile letter="O" status={0} />
          <Tile letter="S" status={0} />
        </div>
        <div className="mt-[19px] text-[19px]">
          La letra <span className="font-bold">G</span> está en la palabra y en la posición
          correcta.
        </div>
      </div>
      <div className="mb-[6px] mt-[23px]">
        <div className="flex gap-x-[11px]">
          <Tile letter="V" status={0} />
          <Tile letter="O" status={0} />
          <Tile letter="C" status={2} />
          <Tile letter="A" status={0} />
          <Tile letter="L" status={0} />
        </div>
        <div className="mt-[19px] text-[19px]">
          La letra <span className="font-bold">C</span> está en la palabra pero en la posición
          incorrecta.
        </div>
      </div>
      <div className="mb-[6px] mt-[23px]">
        <div className="flex gap-x-[11px]">
          <Tile letter="C" status={0} />
          <Tile letter="A" status={0} />
          <Tile letter="N" status={0} />
          <Tile letter="T" status={0} />
          <Tile letter="O" status={3} />
        </div>
        <div className="mt-[19px] text-[19px]">
          La letra <span className="font-bold">O</span> no está en la palabra.
        </div>
      </div>
    </div>
  );
};
const InstructionText = (p: { text: string; center?: boolean; margin?: string }) => {
  return (
    <div className={`${p.center && "mx-auto"} ${p.margin && p.margin} text-[19px]`}>{p.text}</div>
  );
};
export default InstructionsDialog;
