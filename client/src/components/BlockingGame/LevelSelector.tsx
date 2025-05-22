import type React from "react";
import type { LevelType } from "../../types/Level";
import "../../assets/styles/LevelSector.css";

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
          className={`continue-application ${currentLevel === level.id ? "active" : ""}`}
          onClick={() => onLevelChange(level.id)}
        >
          <div>
            <div className="pencil" />
            <div className="folder">
              <div className="top">
                <svg viewBox="0 0 24 27" aria-labelledby="folder-icon-title">
                  <title id="folder-icon-title">Folder Icon</title>
                  <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z" />
                </svg>
              </div>
              <div className="paper" />
            </div>
          </div>
          {level.label}
        </button>
      ))}
    </div>
  );
};

export default LevelSelector;
