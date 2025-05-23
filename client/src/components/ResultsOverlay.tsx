import type React from "react";
import "../assets/styles/ResultsOverlay.css";

type ResultsOverlayProps = {
  show: boolean;
  type: "success" | "error" | null;
  onClose: () => void;
};

const ResultsOverlay: React.FC<ResultsOverlayProps> = ({
  show,
  type,
  onClose,
}) => {
  if (!show || !type) return null;

  return (
    <button
      type="button"
      className={`results-overlay ${show ? "show" : ""}`}
      onClick={onClose}
    >
      <div className={`results-content ${type}`}>
        {type === "success" ? (
          <img
            src="https://cdn.bemaup.com/4_zc4e2bf4ddbd23e0c9d610c11_f119e22fb60bddf6b_d20250522_m152929_c003_v0312027_t0058_u01747927769277"
            alt="Anthony en détente"
          />
        ) : (
          <span role="img" aria-label="error">
            <img
              src="https://cdn.bemaup.com/4_zc4e2bf4ddbd23e0c9d610c11_f1105f5d1f6bb51a2_d20250522_m144224_c003_v0312029_t0009_u01747924944459"
              alt="Ayoub en pétard"
            />
          </span>
        )}
        <p>{type === "success" ? "Great job!" : "Try again!"}</p>
      </div>
    </button>
  );
};

export default ResultsOverlay;
