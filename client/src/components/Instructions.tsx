import type React from "react";
import "../assets/styles/Instructions.css";

interface InstructionProps {
  instruction: string;
}

const Instruction: React.FC<InstructionProps> = ({ instruction }) => {
  return (
    <div className="instruction">
      <h3>Instructions:</h3>
      <p>{instruction}</p>
    </div>
  );
};

export default Instruction;
