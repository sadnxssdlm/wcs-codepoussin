import type React from "react";
import { useState } from "react";
import { type LevelType, levels } from "../../types/Level";
import Instruction from "./Instructions";
import LevelSelector from "./LevelSelector";

const LevelContainer: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState<LevelType>("html");

  const handleLevelChange = (level: LevelType) => {
    setCurrentLevel(level);
  };

  return (
    <div className="level-container">
      <LevelSelector
        currentLevel={currentLevel}
        onLevelChange={handleLevelChange}
      />

      <Instruction instruction={levels[currentLevel].instructions} />
    </div>
  );
};

export default LevelContainer;
