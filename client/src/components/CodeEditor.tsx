import type React from "react";
import type { CodeLine } from "../types/Level";
import "../assets/styles/CodeEditor.css";

type CodeEditorProps = {
  code: CodeLine[];
  validateResult: { type: "success" | "error" | null; message: string };
  blockPlaced: Record<string, { blockId: string; content: string }>;
  onBlockDrop: (dropzoneId: string, blockId: string, content: string) => void;
  onBlockMove: (fromDropzone: string, toDropzone: string) => void;
};

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  blockPlaced,
  onBlockDrop,
  onBlockMove,
}) => {
  const getLineClass = (lineClass?: string) => {
    return lineClass ?? "";
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    dropzoneId: string,
    blockId: string,
    content: string,
  ) => {
    e.dataTransfer.setData("text/id", blockId);
    e.dataTransfer.setData("text/content", content);
    e.dataTransfer.setData("text/source-dropzone", dropzoneId);
    e.dataTransfer.effectAllowed = "move";

    (e.target as HTMLDivElement).classList.add("dragging");
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    (e.target as HTMLDivElement).classList.remove("dragging");
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    (e.target as HTMLDivElement).classList.add("hover");
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    (e.target as HTMLDivElement).classList.remove("hover");
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    dropzoneId: string,
  ) => {
    e.preventDefault();
    (e.target as HTMLDivElement).classList.remove("hover");

    const blockId = e.dataTransfer.getData("text/id");
    const content = e.dataTransfer.getData("text/content");
    const sourceDropzone = e.dataTransfer.getData("text/source-dropzone");

    if (sourceDropzone && sourceDropzone !== dropzoneId) {
      onBlockMove(sourceDropzone, dropzoneId);
    } else if (!sourceDropzone) {
      onBlockDrop(dropzoneId, blockId, content);
    }
  };

  return (
    <div className="code-area">
      <div className="editor-header">
        <div className="editor-title">Visual Poussin Code</div>
        <div className="editor-tabs">
          <div className="editor-tab active">petitpoussin.test</div>
        </div>
      </div>

      {code.map((line) => (
        <div key={line.id} className="code-line">
          <span className="line-number"> </span>

          <div className={`code-content ${getLineClass(line.class)}`}>
            {line.dropzone && blockPlaced[line.dropzone] ? (
              <div
                className={`placed-block ${line.dropzone.split("-")[0] || ""}`}
                draggable
                onDragStart={(e) =>
                  line.dropzone &&
                  handleDragStart(
                    e,
                    line.dropzone,
                    blockPlaced[line.dropzone].blockId,
                    blockPlaced[line.dropzone].content,
                  )
                }
                onDragEnd={handleDragEnd}
              >
                {blockPlaced[line.dropzone].content}
              </div>
            ) : line.dropzone ? (
              <div
                className="dropzone"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => {
                  if (line.dropzone) {
                    handleDrop(e, line.dropzone);
                  }
                }}
              >
                {/* dropzone */}
              </div>
            ) : (
              line.content
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodeEditor;
