import useBuilderStore from "../store/useBuilderStore";

import { NavbarBlocks } from "./Blocks/NavbarBlocks";
import { HeroBlocks } from "./Blocks/HeroBlocks";
import { ContentBlocks } from "./Blocks/ContentBlocks";
import { SliderBlocks } from "./Blocks/SliderBlocks";
import { FormBlocks } from "./Blocks/FormBlocks";
import { ReviewsBlocks } from "./Blocks/ReviewBlocks";
import { CtaBlocks } from "./Blocks/CtaBlocks";
import { BlogBlocks } from "./Blocks/BlogBlocks";
import { FooterBlocks } from "./Blocks/FooterBlocks";
import { PricingBlocks } from "./Blocks/PricingBlocks";
import { TeamBlocks } from "./Blocks/TeamBlocks";
import { FAQBlocks } from "./Blocks/FAQBlocks";
import { GalleryBlocks } from "./Blocks/GalleryBlocks";
import { DividerBlocks } from "./Blocks/DividerBlocks";

const allBlocks = [
  ...NavbarBlocks,
  ...HeroBlocks,
  ...ContentBlocks,
  ...SliderBlocks,
  ...FormBlocks,
  ...ReviewsBlocks,
  ...CtaBlocks,
  ...BlogBlocks,
  ...FooterBlocks,
  ...PricingBlocks,
  ...TeamBlocks,
  ...FAQBlocks,
  ...GalleryBlocks,
  ...DividerBlocks,
];

const findCompByKey = (key) => allBlocks.find((c) => c.key === key) || null;

export default function InspectorPanel() {
  const selectedBlockId = useBuilderStore((s) => s.selectedBlockId);
  const selectedTextId = useBuilderStore((s) => s.selectedTextId);
  const blocks = useBuilderStore((s) => s.blocks);
  const textElements = useBuilderStore((s) => s.textElements);
  const updateBlockSettings = useBuilderStore((s) => s.updateBlockSettings);
  const setBlockWidth = useBuilderStore((s) => s.setBlockWidth);
  const deleteBlock = useBuilderStore((s) => s.deleteBlock);
  const duplicateBlock = useBuilderStore((s) => s.duplicateBlock);
  const moveBlockUp = useBuilderStore((s) => s.moveBlockUp);
  const moveBlockDown = useBuilderStore((s) => s.moveBlockDown);
  const updateTextElement = useBuilderStore((s) => s.updateTextElement);
  const deleteTextElement = useBuilderStore((s) => s.deleteTextElement);
  const duplicateTextElement = useBuilderStore((s) => s.duplicateTextElement);

  const labelStyle = {
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#94A3B8",
    marginBottom: "6px",
    display: "block",
  };

  const inputStyle = {
    width: "100%",
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid #E2E8F0",
    fontSize: "13px",
    color: "#334155",
    backgroundColor: "#F8FAFC",
    outline: "none",
    transition: "border-color 0.15s ease",
  };

  const sectionStyle = {
    padding: "12px 16px",
    borderBottom: "1px solid #F1F5F9",
  };

  const btnDanger = {
    flex: 1,
    padding: "7px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 500,
    color: "#EF4444",
    backgroundColor: "#FEF2F2",
    border: "1px solid #FECACA",
    cursor: "pointer",
    transition: "all 0.15s ease",
  };

  const btnSecondary = {
    flex: 1,
    padding: "7px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 500,
    color: "#475569",
    backgroundColor: "#F1F5F9",
    border: "1px solid #E2E8F0",
    cursor: "pointer",
    transition: "all 0.15s ease",
  };

  // Text element inspector
  if (selectedTextId) {
    const textEl = textElements.find((t) => t.id === selectedTextId);
    if (!textEl) {
      return (
        <InspectorShell>
          <div style={{ padding: "16px", color: "#94A3B8", fontSize: "13px" }}>
            Element not found
          </div>
        </InspectorShell>
      );
    }

    return (
      <InspectorShell>
        <div style={sectionStyle}>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#6366F1",
              marginBottom: "4px",
            }}
          >
            Text Element
          </div>
          <div style={{ fontSize: "11px", color: "#94A3B8" }}>
            Double-click on canvas to edit
          </div>
        </div>

        {/* Position: W | H */}
        <div style={sectionStyle}>
          <span style={labelStyle}>Dimensions</span>
          <div className="flex gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <span style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 600 }}>W</span>
                <input
                  type="number"
                  value={textEl.width}
                  onChange={(e) =>
                    updateTextElement(textEl.id, { width: Number(e.target.value) })
                  }
                  style={{ ...inputStyle, padding: "5px 8px" }}
                />
                <span style={{ fontSize: "10px", color: "#CBD5E1" }}>px</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <span style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 600 }}>H</span>
                <input
                  type="number"
                  value={textEl.height}
                  onChange={(e) =>
                    updateTextElement(textEl.id, { height: Number(e.target.value) })
                  }
                  style={{ ...inputStyle, padding: "5px 8px" }}
                />
                <span style={{ fontSize: "10px", color: "#CBD5E1" }}>px</span>
              </div>
            </div>
          </div>
        </div>

        {/* Font Size */}
        <div style={sectionStyle}>
          <span style={labelStyle}>Font Size</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={textEl.fontSize}
              onChange={(e) =>
                updateTextElement(textEl.id, { fontSize: Number(e.target.value) })
              }
              min={8}
              max={200}
              style={{ ...inputStyle, width: "80px" }}
            />
            <span style={{ fontSize: "11px", color: "#94A3B8" }}>px</span>
          </div>
        </div>

        {/* Font Weight */}
        <div style={sectionStyle}>
          <span style={labelStyle}>Font Weight</span>
          <select
            value={textEl.fontWeight}
            onChange={(e) =>
              updateTextElement(textEl.id, { fontWeight: e.target.value })
            }
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="300">Light (300)</option>
            <option value="400">Regular (400)</option>
            <option value="500">Medium (500)</option>
            <option value="600">Semibold (600)</option>
            <option value="700">Bold (700)</option>
            <option value="800">Extra Bold (800)</option>
            <option value="900">Black (900)</option>
          </select>
        </div>

        {/* Text Color */}
        <div style={sectionStyle}>
          <span style={labelStyle}>Text Color</span>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={textEl.color}
              onChange={(e) =>
                updateTextElement(textEl.id, { color: e.target.value })
              }
              style={{
                width: "36px",
                height: "32px",
                borderRadius: "6px",
                border: "2px solid #E2E8F0",
                cursor: "pointer",
                padding: "2px",
              }}
            />
            <span style={{ fontSize: "12px", color: "#64748B", fontFamily: "monospace" }}>
              {textEl.color}
            </span>
          </div>
        </div>

        {/* Text Alignment */}
        <div style={sectionStyle}>
          <span style={labelStyle}>Alignment</span>
          <div className="flex gap-1">
            {[
              { value: "left", icon: "≡" },
              { value: "center", icon: "≡" },
              { value: "right", icon: "≡" },
            ].map((align) => (
              <button
                key={align.value}
                onClick={() =>
                  updateTextElement(textEl.id, { textAlign: align.value })
                }
                className="cursor-pointer"
                style={{
                  flex: 1,
                  padding: "6px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 500,
                  backgroundColor:
                    textEl.textAlign === align.value ? "#EEF2FF" : "#F8FAFC",
                  color:
                    textEl.textAlign === align.value ? "#4338CA" : "#64748B",
                  border: `1px solid ${
                    textEl.textAlign === align.value ? "#C7D2FE" : "#E2E8F0"
                  }`,
                  cursor: "pointer",
                  textTransform: "capitalize",
                  transition: "all 0.15s ease",
                }}
              >
                {align.value}
              </button>
            ))}
          </div>
        </div>

        {/* Style toggles: Bold, Italic, Underline */}
        <div style={sectionStyle}>
          <span style={labelStyle}>Style</span>
          <div className="flex gap-1">
            <StyleToggle
              label="B"
              active={textEl.fontWeight === "700" || textEl.fontWeight === "800" || textEl.fontWeight === "900"}
              fontWeight="bold"
              onClick={() =>
                updateTextElement(textEl.id, {
                  fontWeight: textEl.fontWeight >= "700" ? "400" : "700",
                })
              }
            />
            <StyleToggle
              label="I"
              active={textEl.fontStyle === "italic"}
              fontStyle="italic"
              onClick={() =>
                updateTextElement(textEl.id, {
                  fontStyle: textEl.fontStyle === "italic" ? "normal" : "italic",
                })
              }
            />
            <StyleToggle
              label="U"
              active={textEl.textDecoration === "underline"}
              textDecoration="underline"
              onClick={() =>
                updateTextElement(textEl.id, {
                  textDecoration:
                    textEl.textDecoration === "underline" ? "none" : "underline",
                })
              }
            />
          </div>
        </div>

        {/* Actions */}
        <div style={{ ...sectionStyle, borderBottom: "none" }}>
          <div className="flex gap-2">
            <button
              onClick={() => deleteTextElement(textEl.id)}
              style={btnDanger}
              className="cursor-pointer"
            >
              Delete
            </button>
            <button
              onClick={() => duplicateTextElement(textEl.id)}
              style={btnSecondary}
              className="cursor-pointer"
            >
              Duplicate
            </button>
          </div>
        </div>
      </InspectorShell>
    );
  }

  // Block inspector
  if (selectedBlockId) {
    const block = blocks.find((b) => b.id === selectedBlockId);
    if (!block) {
      return (
        <InspectorShell>
          <div style={{ padding: "16px", color: "#94A3B8", fontSize: "13px" }}>
            Block not found
          </div>
        </InspectorShell>
      );
    }

    const comp = findCompByKey(block.key);
    if (!comp) {
      return (
        <InspectorShell>
          <div style={{ padding: "16px", color: "#94A3B8", fontSize: "13px" }}>
            Component type not found
          </div>
        </InspectorShell>
      );
    }

    const s = block.settings;

    // Separate color fields and text fields
    const colorFields = [];
    const textFields = [];
    const otherFields = [];

    Object.entries(s).forEach(([key, value]) => {
      if (key === "x" || key === "y" || key === "w" || key === "h") return;
      if (key === "bgPrimary") return; // skip boolean
      if (key === "imageSrc") return; // handled separately
      if (key === "features") return; // complex object

      if (typeof value === "string" && value.startsWith("#") && value.length <= 9) {
        colorFields.push({ key, value });
      } else if (typeof value === "string") {
        textFields.push({ key, value });
      } else {
        otherFields.push({ key, value });
      }
    });

    return (
      <InspectorShell>
        {/* Component info */}
        <div style={sectionStyle}>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#6366F1",
              marginBottom: "4px",
            }}
          >
            {comp.name}
          </div>
          <div style={{ fontSize: "11px", color: "#94A3B8" }}>
            Section component
          </div>
        </div>

        {/* Width control */}
        <div style={sectionStyle}>
          <span style={labelStyle}>Width</span>
          <div className="flex gap-1">
            {[50, 100].map((w) => (
              <button
                key={w}
                onClick={() => setBlockWidth(block.id, w)}
                className="cursor-pointer"
                style={{
                  flex: 1,
                  padding: "6px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 500,
                  backgroundColor:
                    (block.widthPercent || 100) === w ? "#EEF2FF" : "#F8FAFC",
                  color:
                    (block.widthPercent || 100) === w ? "#4338CA" : "#64748B",
                  border: `1px solid ${
                    (block.widthPercent || 100) === w ? "#C7D2FE" : "#E2E8F0"
                  }`,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {w}%
              </button>
            ))}
          </div>
        </div>

        {/* Color fields — same row */}
        {colorFields.length > 0 && (
          <div style={sectionStyle}>
            <span style={labelStyle}>Colors</span>
            <div
              className="flex flex-wrap gap-3"
              style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
            >
              {colorFields.map(({ key, value }) => (
                <div key={key} className="flex items-center gap-2">
                  <input
                    type="color"
                    value={value}
                    onChange={(e) =>
                      updateBlockSettings(block.id, { [key]: e.target.value })
                    }
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "6px",
                      border: "2px solid #E2E8F0",
                      cursor: "pointer",
                      padding: "1px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#64748B",
                      textTransform: "capitalize",
                    }}
                  >
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Text fields */}
        {textFields.map(({ key, value }) => (
          <div key={key} style={sectionStyle}>
            <span style={labelStyle}>
              {key.replace(/([A-Z])/g, " $1").trim()}
            </span>
            <input
              type="text"
              value={value}
              onChange={(e) =>
                updateBlockSettings(block.id, { [key]: e.target.value })
              }
              style={inputStyle}
            />
          </div>
        ))}

        {/* Image upload */}
        {"imageSrc" in s && (
          <div style={sectionStyle}>
            <span style={labelStyle}>Image</span>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "10px",
                borderRadius: "8px",
                border: "1px dashed #CBD5E1",
                backgroundColor: "#F8FAFC",
                color: "#64748B",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              Upload image
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files && e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev) =>
                      updateBlockSettings(block.id, {
                        imageSrc: ev.target.result,
                      });
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </label>
          </div>
        )}

        {/* Actions */}
        <div style={sectionStyle}>
          <div className="flex gap-2 mb-2">
            <button
              onClick={() => deleteBlock(block.id)}
              style={btnDanger}
              className="cursor-pointer"
            >
              Delete
            </button>
            <button
              onClick={() => duplicateBlock(block.id)}
              style={btnSecondary}
              className="cursor-pointer"
            >
              Duplicate
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => moveBlockUp(block.id)}
              style={btnSecondary}
              className="cursor-pointer"
            >
              ↑ Move Up
            </button>
            <button
              onClick={() => moveBlockDown(block.id)}
              style={btnSecondary}
              className="cursor-pointer"
            >
              ↓ Move Down
            </button>
          </div>
        </div>
      </InspectorShell>
    );
  }

  // Nothing selected
  return (
    <InspectorShell>
      <div
        className="flex flex-col items-center justify-center"
        style={{ padding: "40px 20px", textAlign: "center" }}
      >
        <div
          className="flex items-center justify-center rounded-xl mb-3"
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#F1F5F9",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
          </svg>
        </div>
        <p style={{ fontSize: "13px", color: "#64748B", fontWeight: 500 }}>
          Select an element
        </p>
        <p style={{ fontSize: "11px", color: "#94A3B8", marginTop: "4px" }}>
          Click on a component or text to edit its properties
        </p>
      </div>
    </InspectorShell>
  );
}

function InspectorShell({ children }) {
  return (
    <div
      className="flex flex-col h-full"
      style={{
        width: "280px",
        minWidth: "280px",
        backgroundColor: "#FFFFFF",
        borderLeft: "1px solid #E2E8F0",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #E2E8F0",
          fontSize: "12px",
          fontWeight: 600,
          color: "#0F172A",
        }}
      >
        Inspector
      </div>
      {/* Content */}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}

function StyleToggle({ label, active, onClick, ...styleProps }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer"
      style={{
        flex: 1,
        padding: "6px",
        borderRadius: "6px",
        fontSize: "13px",
        fontWeight: label === "B" ? "bold" : "normal",
        fontStyle: label === "I" ? "italic" : "normal",
        textDecoration: label === "U" ? "underline" : "none",
        backgroundColor: active ? "#EEF2FF" : "#F8FAFC",
        color: active ? "#4338CA" : "#64748B",
        border: `1px solid ${active ? "#C7D2FE" : "#E2E8F0"}`,
        cursor: "pointer",
        transition: "all 0.15s ease",
      }}
    >
      {label}
    </button>
  );
}
