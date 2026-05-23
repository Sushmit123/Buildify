// src/components/LayersPanel.jsx
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
  ...NavbarBlocks, ...HeroBlocks, ...ContentBlocks, ...SliderBlocks,
  ...FormBlocks, ...ReviewsBlocks, ...CtaBlocks, ...BlogBlocks,
  ...FooterBlocks, ...PricingBlocks, ...TeamBlocks, ...FAQBlocks,
  ...GalleryBlocks, ...DividerBlocks,
];

const findCompByKey = (key) => allBlocks.find((c) => c.key === key) || null;

// Category icons lookup
const categoryIcons = {
  "navbar": "☰", "hero": "🏠", "content": "📄", "slider": "🎠",
  "form": "📝", "review": "⭐", "cta": "🎯", "blog": "📰",
  "footer": "🔻", "pricing": "💰", "team": "👥", "faq": "❓",
  "gallery": "🖼️", "divider": "─",
};

function getBlockCategory(key) {
  const prefix = key.split("-")[0];
  return categoryIcons[prefix] || "📦";
}

export default function LayersPanel() {
  const blocks = useBuilderStore((s) => s.blocks);
  const textElements = useBuilderStore((s) => s.textElements);
  const selectedBlockId = useBuilderStore((s) => s.selectedBlockId);
  const selectedTextId = useBuilderStore((s) => s.selectedTextId);
  const selectBlock = useBuilderStore((s) => s.selectBlock);
  const selectText = useBuilderStore((s) => s.selectText);
  const moveBlockUp = useBuilderStore((s) => s.moveBlockUp);
  const moveBlockDown = useBuilderStore((s) => s.moveBlockDown);
  const deleteBlock = useBuilderStore((s) => s.deleteBlock);
  const deleteTextElement = useBuilderStore((s) => s.deleteTextElement);

  const labelStyle = {
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#94A3B8",
    marginBottom: "8px",
    display: "block",
    padding: "0 16px",
  };

  return (
    <div style={{ padding: "12px 0" }}>
      {/* Blocks */}
      <span style={labelStyle}>Blocks ({blocks.length})</span>
      {blocks.length === 0 && (
        <div style={{ padding: "12px 16px", fontSize: "12px", color: "#CBD5E1" }}>
          No blocks added yet
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "0 8px" }}>
        {blocks.map((b, index) => {
          const comp = findCompByKey(b.key);
          const isSelected = selectedBlockId === b.id;
          return (
            <div
              key={b.id}
              onClick={() => selectBlock(b.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "7px 10px",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: isSelected ? "#EEF2FF" : "transparent",
                border: isSelected ? "1px solid #C7D2FE" : "1px solid transparent",
                transition: "all 0.12s ease",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) e.currentTarget.style.backgroundColor = "#F8FAFC";
              }}
              onMouseLeave={(e) => {
                if (!isSelected) e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {/* Icon */}
              <span style={{ fontSize: "12px", flexShrink: 0, width: "18px", textAlign: "center" }}>
                {getBlockCategory(b.key)}
              </span>

              {/* Name */}
              <span style={{
                flex: 1,
                fontSize: "12px",
                fontWeight: isSelected ? 600 : 400,
                color: isSelected ? "#4338CA" : "#475569",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
                {comp ? comp.name : b.key}
              </span>

              {/* Order indicator */}
              <span style={{ fontSize: "10px", color: "#CBD5E1", fontWeight: 500, flexShrink: 0 }}>
                #{index + 1}
              </span>

              {/* Quick actions on selected */}
              {isSelected && (
                <div style={{ display: "flex", gap: "2px", flexShrink: 0 }}>
                  <button
                    onClick={(e) => { e.stopPropagation(); moveBlockUp(b.id); }}
                    style={{ width: "20px", height: "20px", borderRadius: "4px", border: "none", background: "#F1F5F9", cursor: "pointer", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B" }}
                  >↑</button>
                  <button
                    onClick={(e) => { e.stopPropagation(); moveBlockDown(b.id); }}
                    style={{ width: "20px", height: "20px", borderRadius: "4px", border: "none", background: "#F1F5F9", cursor: "pointer", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B" }}
                  >↓</button>
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteBlock(b.id); }}
                    style={{ width: "20px", height: "20px", borderRadius: "4px", border: "none", background: "#FEF2F2", cursor: "pointer", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444" }}
                  >✕</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Text Elements */}
      {textElements.length > 0 && (
        <>
          <span style={{ ...labelStyle, marginTop: "16px" }}>Text ({textElements.length})</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "0 8px" }}>
            {textElements.map((t) => {
              const isSelected = selectedTextId === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => selectText(t.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "7px 10px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    backgroundColor: isSelected ? "#EEF2FF" : "transparent",
                    border: isSelected ? "1px solid #C7D2FE" : "1px solid transparent",
                    transition: "all 0.12s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.backgroundColor = "#F8FAFC";
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <span style={{ fontSize: "12px", flexShrink: 0, width: "18px", textAlign: "center" }}>T</span>
                  <span style={{
                    flex: 1,
                    fontSize: "12px",
                    fontWeight: isSelected ? 600 : 400,
                    color: isSelected ? "#4338CA" : "#475569",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                    {t.content.substring(0, 24)}{t.content.length > 24 ? "…" : ""}
                  </span>

                  {isSelected && (
                    <button
                      onClick={(e) => { e.stopPropagation(); deleteTextElement(t.id); }}
                      style={{ width: "20px", height: "20px", borderRadius: "4px", border: "none", background: "#FEF2F2", cursor: "pointer", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444", flexShrink: 0 }}
                    >✕</button>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
