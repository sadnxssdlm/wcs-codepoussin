import type React from "react";
import { useState } from "react";
import { type LevelType, levels } from "../types/Level";
import BlockContainer from "./BlockContainer";
import CodeEditor from "./CodeEditor";
import Controls from "./Controls";
import Instruction from "./Instructions";
import LevelSelector from "./LevelSelector";
import ResultsOverlay from "./ResultsOverlay";
import "../assets/styles/LevelContainer.css";

const LevelContainer: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState<LevelType>("html");

  const [blockPlaced, setBlockPlaced] = useState<
    Record<string, { blockId: string; content: string }>
  >({});

  const [showresults, setShowresults] = useState(false);

  const [resultsMessage, setresultsMessage] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleLevelChange = (level: LevelType) => {
    setCurrentLevel(level);
    resetLevel();
  };

  const handleBlockDrop = (
    dropzoneId: string,
    blockId: string,
    blockContent: string,
  ) => {
    setBlockPlaced((prev) => {
      const newState = { ...prev };

      if (!dropzoneId) {
        for (const key of Object.keys(newState)) {
          if (newState[key].blockId === blockId) {
            delete newState[key];
          }
        }
      } else {
        if (newState[dropzoneId]) {
          delete newState[dropzoneId];
        }
        newState[dropzoneId] = { blockId, content: blockContent };
      }

      return newState;
    });
  };

  const handleBlockMove = (fromDropzone: string, toDropzone: string) => {
    setBlockPlaced((prev) => {
      const newState = { ...prev };

      if (!newState[fromDropzone]) return prev;

      if (newState[toDropzone]) {
        const temp = newState[toDropzone];
        newState[toDropzone] = newState[fromDropzone];
        newState[fromDropzone] = temp;
      } else {
        newState[toDropzone] = newState[fromDropzone];
        delete newState[fromDropzone];
      }

      return newState;
    });
  };

  const resetLevel = () => {
    setBlockPlaced({});
    setresultsMessage({ type: null, message: "" });
    setShowresults(false);
  };

  const validateSolution = () => {
    const currentSolutions = levels[currentLevel].solutions;
    let isCorrect = true;
    const incorrectDropzones: string[] = [];

    for (const [dropzoneId, solution] of Object.entries(currentSolutions)) {
      if (
        !blockPlaced[dropzoneId] ||
        blockPlaced[dropzoneId].content !== solution
      ) {
        isCorrect = false;
        incorrectDropzones.push(dropzoneId);
      }
    }

    const message = isCorrect
      ? "Félicitations ! Vous avez correctement complété le code !"
      : "Pas tout à fait ! Vérifiez votre code et réessayez.";

    setresultsMessage({
      type: isCorrect ? "success" : "error",
      message,
    });

    setShowresults(true);

    setTimeout(() => {
      setShowresults(false);
    }, 2000);

    return incorrectDropzones;
  };

  return (
    <div className="level-container">
      <h2 className="lvlcontainer-title">Mission 2: Code Blocks</h2>

      <LevelSelector
        currentLevel={currentLevel}
        onLevelChange={handleLevelChange}
      />

      <Instruction instruction={levels[currentLevel].instructions} />

      <CodeEditor
        code={levels[currentLevel].code}
        validateResult={resultsMessage}
        blockPlaced={blockPlaced}
        onBlockDrop={handleBlockDrop}
        onBlockMove={handleBlockMove}
      />

      <BlockContainer
        blocks={levels[currentLevel].blocks}
        level={currentLevel}
        blockPlaced={blockPlaced}
        onBlockDrop={handleBlockDrop}
      />
      <Controls onReset={resetLevel} onValidate={validateSolution} />
      {resultsMessage.type && (
        <div className={`result-message ${resultsMessage.type}`}>
          {resultsMessage.message}
        </div>
      )}

      <ResultsOverlay
        show={showresults}
        type={resultsMessage.type}
        onClose={() => setShowresults(false)}
      />
    </div>
  );
};

export default LevelContainer;
