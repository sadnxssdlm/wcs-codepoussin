import type React from "react";
import type { LevelType } from "../../types/Level";

type LevelSelectorProps = {
  currentLevel: LevelType;
  onLevelChange: (level: LevelType) => void;
};

const LevelSelector: React.FC<LevelSelectorProps> = ({
  currentLevel,
  onLevelChange,
}) => {
  const levels: { id: LevelType; label: string }[] = [
    { id: "html", label: "Niveau 1: HTML" },
    { id: "css", label: "Niveau 2: CSS" },
    { id: "js", label: "Niveau 3: JavaScript" },
  ];

  return (
    <div className="level-selector">
      {levels.map((level) => (
        <button
          type="button"
          key={level.id}
          className={`level-btn ${currentLevel === level.id ? "active" : ""}`}
          onClick={() => onLevelChange(level.id)}
        >
          {level.label}
        </button>
      ))}
    </div>
  );
};

export default LevelSelector;
