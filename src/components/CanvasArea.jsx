import { forwardRef } from "react";
import useBuilderStore from "../store/useBuilderStore";
import TextElement from "./TextElement";

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

const CanvasArea = forwardRef(function CanvasArea(props, ref) {
  const blocks = useBuilderStore((s) => s.blocks);
  const textElements = useBuilderStore((s) => s.textElements);
  const selectedBlockId = useBuilderStore((s) => s.selectedBlockId);
  const selectBlock = useBuilderStore((s) => s.selectBlock);
  const deselectAll = useBuilderStore((s) => s.deselectAll);
  const canvasBgColor = useBuilderStore((s) => s.canvasBgColor);
  const canvasBgImage = useBuilderStore((s) => s.canvasBgImage);
  const canvasHeight = useBuilderStore((s) => s.canvasHeight);
  const quickColor = useBuilderStore((s) => s.quickColor);
  const isMobilePreview = useBuilderStore((s) => s.isMobilePreview);
  const isAddingText = useBuilderStore((s) => s.isAddingText);
  const addTextElement = useBuilderStore((s) => s.addTextElement);
  const updateBlockSettings = useBuilderStore((s) => s.updateBlockSettings);

  const handleCanvasClick = (e) => {
    // If adding text, place it where clicked
    if (isAddingText) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addTextElement(
        Math.round(x / 20) * 20,
        Math.round(y / 20) * 20
      );
      return;
    }

    // Click on canvas background → deselect
    if (e.target === e.currentTarget || e.target.dataset?.canvasBg === "true") {
      deselectAll();
    }
  };

  const setBlockImageFromFile = (blockId, file) => {
    const reader = new FileReader();
    reader.onload = (e) =>
      updateBlockSettings(blockId, { imageSrc: e.target.result });
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="flex-1 overflow-auto"
      style={{
        backgroundColor: "#E8ECF1",
        cursor: isAddingText ? "crosshair" : "default",
      }}
    >
      <div
        className="mx-auto"
        style={{
          padding: "24px",
          maxWidth: isMobilePreview ? "423px" : "100%",
          transition: "max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Mobile preview frame */}
        {isMobilePreview && (
          <div
            style={{
              textAlign: "center",
              marginBottom: "12px",
              fontSize: "11px",
              fontWeight: 600,
              color: "#94A3B8",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Mobile Preview — 375px
          </div>
        )}

        <div
          ref={ref}
          onClick={handleCanvasClick}
          data-canvas-bg="true"
          className="canvas-grid"
          style={{
            minHeight: `${canvasHeight}px`,
            backgroundColor: canvasBgColor,
            backgroundImage: canvasBgImage
              ? `url(${canvasBgImage})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: isMobilePreview ? "16px" : "12px",
            boxShadow: isMobilePreview
              ? "0 0 0 8px #1E293B, 0 8px 32px rgba(0,0,0,0.15)"
              : "0 1px 3px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
            position: "relative",
            overflow: "hidden",
            transition: "border-radius 0.3s ease",
          }}
        >
          {/* Blocks */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              padding: "12px",
              gap: "8px",
            }}
          >
            {blocks.map((b) => {
              const comp = findCompByKey(b.key);
              if (!comp) return null;

              const isSelected = selectedBlockId === b.id;
              const widthPercent = b.widthPercent || 100;

              return (
                <div
                  key={b.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectBlock(b.id);
                  }}
                  style={{
                    width:
                      widthPercent === 100
                        ? "100%"
                        : `calc(${widthPercent}% - 4px)`,
                    borderRadius: "8px",
                    border: isSelected
                      ? "2px solid #6366F1"
                      : "2px solid transparent",
                    backgroundColor: isSelected
                      ? "rgba(99, 102, 241, 0.03)"
                      : "transparent",
                    transition: "all 0.15s ease",
                    position: "relative",
                    cursor: "pointer",
                    animation: "fadeIn 0.3s ease-out",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.border = "2px solid #CBD5E1";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.border = "2px solid transparent";
                    }
                  }}
                >
                  {/* Selection corner dots */}
                  {isSelected && (
                    <>
                      {[
                        { top: -4, left: -4 },
                        { top: -4, right: -4 },
                        { bottom: -4, left: -4 },
                        { bottom: -4, right: -4 },
                      ].map((pos, i) => (
                        <div
                          key={i}
                          data-exclude-export="true"
                          style={{
                            position: "absolute",
                            ...pos,
                            width: "8px",
                            height: "8px",
                            borderRadius: "2px",
                            backgroundColor: "#6366F1",
                            border: "2px solid white",
                            zIndex: 5,
                            pointerEvents: "none",
                          }}
                        />
                      ))}
                    </>
                  )}

                  {comp.render(b.settings, quickColor, () => {
                    const input = document.createElement("input");
                    input.type = "file";
                    input.accept = "image/*";
                    input.onchange = (e) => {
                      const file = e.target.files && e.target.files[0];
                      if (file) setBlockImageFromFile(b.id, file);
                    };
                    input.click();
                  })}
                </div>
              );
            })}
          </div>

          {/* Text elements */}
          {textElements.map((textEl) => (
            <TextElement key={textEl.id} element={textEl} />
          ))}

          {/* Empty state */}
          {blocks.length === 0 && textElements.length === 0 && (
            <div
              className="flex flex-col items-center justify-center"
              style={{
                position: "absolute",
                inset: 0,
                padding: "40px",
              }}
            >
              <div
                className="flex items-center justify-center rounded-2xl mb-4"
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "#F1F5F9",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#475569",
                  marginBottom: "4px",
                }}
              >
                Start building
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#94A3B8",
                  textAlign: "center",
                  maxWidth: "280px",
                }}
              >
                Add components from the left sidebar or use the Text tool to place text anywhere
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default CanvasArea;
