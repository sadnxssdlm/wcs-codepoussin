import type React from "react";
import "../../assets/styles/BlockContainer.css";
import type { LevelType } from "../../types/Level";

type BlockContainerProps = {
  blocks: string[];
  level: LevelType;
  blockPlaced: Record<string, { blockId: string; content: string }>;
  onBlockDrop: (dropzoneId: string, blockId: string, content: string) => void;
};

const BlockContainer: React.FC<BlockContainerProps> = ({
  blocks,
  level,
  blockPlaced,
  onBlockDrop,
}) => {
  const availableBlocks = blocks.filter((_, index) => {
    const blockId = index.toString();
    return !Object.values(blockPlaced).some(
      (block) => block.blockId === blockId,
    );
  });

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    blockId: string,
    content: string,
  ) => {
    e.dataTransfer.setData("text/id", blockId);
    e.dataTransfer.setData("text/content", content);
    e.dataTransfer.effectAllowed = "move";

    (e.target as HTMLDivElement).classList.add("dragging");
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    (e.target as HTMLDivElement).classList.remove("dragging");
  };

  return (
    <div
      className="block-container"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const blockId = e.dataTransfer.getData("text/id");
        const content = e.dataTransfer.getData("text/content");
        onBlockDrop("", blockId, content);
      }}
    >
      {availableBlocks.map((blockContent) => {
        const blockId = blocks.indexOf(blockContent).toString();
        return (
          <div
            key={blockId}
            className={`drag-block ${level}`}
            draggable
            onDragStart={(e) => handleDragStart(e, blockId, blockContent)}
            onDragEnd={handleDragEnd}
          >
            {blockContent}
          </div>
        );
      })}
    </div>
  );
};

export default BlockContainer;
