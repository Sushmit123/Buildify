import { useRef, useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import useBuilderStore from "../store/useBuilderStore";

export default function TextElement({ element }) {
  const updateTextElement = useBuilderStore((s) => s.updateTextElement);
  const selectText = useBuilderStore((s) => s.selectText);
  const selectedTextId = useBuilderStore((s) => s.selectedTextId);
  const isSelected = selectedTextId === element.id;
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef(null);

  useEffect(() => {
    if (isEditing && editRef.current) {
      editRef.current.focus();
      // Place cursor at end
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(editRef.current);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }, [isEditing]);

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (editRef.current) {
      updateTextElement(element.id, { content: editRef.current.innerText });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsEditing(false);
      editRef.current?.blur();
    }
    e.stopPropagation();
  };

  return (
    <Rnd
      bounds="parent"
      position={{ x: element.x, y: element.y }}
      size={{ width: element.width, height: element.height }}
      onDragStop={(e, d) => {
        // Snap to grid (20px)
        const snappedX = Math.round(d.x / 20) * 20;
        const snappedY = Math.round(d.y / 20) * 20;
        updateTextElement(element.id, { x: snappedX, y: snappedY });
      }}
      onResizeStop={(e, dir, ref, delta, position) => {
        updateTextElement(element.id, {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          x: position.x,
          y: position.y,
        });
      }}
      enableResizing={isSelected}
      disableDragging={isEditing}
      style={{ zIndex: isSelected ? 10 : 1 }}
    >
      <div
        data-exclude-export="true"
        onClick={(e) => {
          e.stopPropagation();
          selectText(element.id);
        }}
        onDoubleClick={handleDoubleClick}
        style={{
          width: "100%",
          height: "100%",
          border: isSelected
            ? "2px solid #6366F1"
            : "1px dashed transparent",
          borderRadius: "4px",
          cursor: isEditing ? "text" : "move",
          position: "relative",
          transition: "border-color 0.15s ease",
          padding: "4px",
          boxSizing: "border-box",
        }}
        onMouseEnter={(e) => {
          if (!isSelected) {
            e.currentTarget.style.borderColor = "#CBD5E1";
          }
        }}
        onMouseLeave={(e) => {
          if (!isSelected) {
            e.currentTarget.style.borderColor = "transparent";
          }
        }}
      >
        {isEditing ? (
          <div
            ref={editRef}
            contentEditable
            suppressContentEditableWarning
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            style={{
              width: "100%",
              height: "100%",
              outline: "none",
              fontSize: `${element.fontSize}px`,
              fontWeight: element.fontWeight,
              fontStyle: element.fontStyle,
              textDecoration: element.textDecoration,
              textAlign: element.textAlign,
              color: element.color,
              lineHeight: 1.5,
              wordBreak: "break-word",
            }}
          >
            {element.content}
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              fontSize: `${element.fontSize}px`,
              fontWeight: element.fontWeight,
              fontStyle: element.fontStyle,
              textDecoration: element.textDecoration,
              textAlign: element.textAlign,
              color: element.color,
              lineHeight: 1.5,
              wordBreak: "break-word",
              userSelect: "none",
            }}
          >
            {element.content}
          </div>
        )}

        {/* Resize handles visual indicator */}
        {isSelected && !isEditing && (
          <>
            {[
              { top: -3, left: -3 },
              { top: -3, right: -3 },
              { bottom: -3, left: -3 },
              { bottom: -3, right: -3 },
            ].map((pos, i) => (
              <div
                key={i}
                data-exclude-export="true"
                style={{
                  position: "absolute",
                  ...pos,
                  width: "6px",
                  height: "6px",
                  borderRadius: "2px",
                  backgroundColor: "#6366F1",
                  border: "1px solid white",
                  pointerEvents: "none",
                }}
              />
            ))}
          </>
        )}
      </div>
    </Rnd>
  );
}
