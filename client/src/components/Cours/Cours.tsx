import { useState } from "react";
import CartesCours from "./CartesCours";
import "./CartesCours.css";

type PoussinKey = "" | "poussinyavuz" | "poussinnicolas" | "poussinayoub";

function Cours() {
  const [poussin, setPoussin] = useState<PoussinKey>("");

  const handlePoussinClick = (nom: PoussinKey) => {
    setPoussin(nom);
  };

  return (
    <>
      <div className="cours">
        <h1>Mission 1: Decouvre le code</h1>
      </div>
      <div className="cours2">
        <h2>Clique sur le poussin de ton choix.</h2>
      </div>

      <div className="containerpoussin">
        <button
          type="button"
          onClick={() => handlePoussinClick("poussinyavuz")}
          aria-label="Choisir Poussin Yavuz"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img
            src="src/components/Cours/poussinyavuz.png"
            alt="Poussin Yavuz"
            style={{ display: "block" }}
          />
        </button>

        <button
          type="button"
          onClick={() => handlePoussinClick("poussinnicolas")}
          aria-label="Choisir Poussin Nicolas"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img
            src="src/components/Cours/poussinnicolas.png"
            alt="Poussin Nicolas"
            style={{ display: "block" }}
          />
        </button>

        <button
          type="button"
          onClick={() => handlePoussinClick("poussinayoub")}
          aria-label="Choisir Poussin Ayoub"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img
            src="src/components/Cours/poussinayoub.png"
            alt="Poussin Ayoub"
            style={{ display: "block" }}
          />
        </button>
      </div>

      <CartesCours poussin={poussin} />
    </>
  );
}

export default Cours;
