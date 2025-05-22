import type React from "react";
import type { CodeLine } from "../../types/Level";
import "../../assets/styles/CodeEditor.css";

type CodeEditorProps = {
  code: CodeLine[];
  validateResult: { type: "success" | "error" | null; message: string };
};

const CodeEditor: React.FC<CodeEditorProps> = ({ code }) => {
  const getLineClass = (lineClass?: string) => {
    return lineClass ? lineClass : "";
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
            {line.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodeEditor;
