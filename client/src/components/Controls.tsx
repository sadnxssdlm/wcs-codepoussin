import type React from "react";
import "../assets/styles/Controls.css";

type ControlsProps = {
  onReset: () => void;
  onValidate: () => string[];
};

const Controls: React.FC<ControlsProps> = ({ onReset, onValidate }) => {
  return (
    <div className="controls">
      <button type="button" className="btn reset-btn" onClick={onReset}>
        Réinitialiser
      </button>
      <button type="button" className="btn validate-btn" onClick={onValidate}>
        Valider
      </button>
    </div>
  );
};

export default Controls;
