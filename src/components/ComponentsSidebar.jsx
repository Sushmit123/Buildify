import { useState } from "react";
import useBuilderStore from "../store/useBuilderStore";
import LayersPanel from "./LayersPanel";

import { HeroBlocks } from "./Blocks/HeroBlocks";
import { ContentBlocks } from "./Blocks/ContentBlocks";
import { SliderBlocks } from "./Blocks/SliderBlocks";
import { FormBlocks } from "./Blocks/FormBlocks";
import { ReviewsBlocks } from "./Blocks/ReviewBlocks";
import { CtaBlocks } from "./Blocks/CtaBlocks";
import { BlogBlocks } from "./Blocks/BlogBlocks";
import { NavbarBlocks } from "./Blocks/NavbarBlocks";
import { FooterBlocks } from "./Blocks/FooterBlocks";
import { PricingBlocks } from "./Blocks/PricingBlocks";
import { TeamBlocks } from "./Blocks/TeamBlocks";
import { FAQBlocks } from "./Blocks/FAQBlocks";
import { GalleryBlocks } from "./Blocks/GalleryBlocks";
import { DividerBlocks } from "./Blocks/DividerBlocks";

const componentCategories = [
  { key: "navbar", label: "Navbar", icon: "☰", blocks: NavbarBlocks },
  { key: "hero", label: "Hero", icon: "🏠", blocks: HeroBlocks },
  { key: "content", label: "Content", icon: "📄", blocks: ContentBlocks },
  { key: "pricing", label: "Pricing", icon: "💰", blocks: PricingBlocks },
  { key: "team", label: "Team", icon: "👥", blocks: TeamBlocks },
  { key: "gallery", label: "Gallery", icon: "🖼️", blocks: GalleryBlocks },
  { key: "slider", label: "Slider", icon: "🎠", blocks: SliderBlocks },
  { key: "form", label: "Form", icon: "📝", blocks: FormBlocks },
  { key: "review", label: "Reviews", icon: "⭐", blocks: ReviewsBlocks },
  { key: "faq", label: "FAQ", icon: "❓", blocks: FAQBlocks },
  { key: "cta", label: "CTA", icon: "🎯", blocks: CtaBlocks },
  { key: "blog", label: "Blog", icon: "📰", blocks: BlogBlocks },
  { key: "divider", label: "Dividers", icon: "─", blocks: DividerBlocks },
  { key: "footer", label: "Footer", icon: "🔻", blocks: FooterBlocks },
];

export default function ComponentsSidebar() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState("components");
  const [searchQuery, setSearchQuery] = useState("");

  const addBlock = useBuilderStore((s) => s.addBlock);
  const quickColor = useBuilderStore((s) => s.quickColor);
  const setQuickColor = useBuilderStore((s) => s.setQuickColor);
  const isAddingText = useBuilderStore((s) => s.isAddingText);
  const setIsAddingText = useBuilderStore((s) => s.setIsAddingText);
  const canvasBgColor = useBuilderStore((s) => s.canvasBgColor);
  const setCanvasBgColor = useBuilderStore((s) => s.setCanvasBgColor);
  const setCanvasBgImage = useBuilderStore((s) => s.setCanvasBgImage);
  const canvasHeight = useBuilderStore((s) => s.canvasHeight);
  const setCanvasHeight = useBuilderStore((s) => s.setCanvasHeight);

  const handleBgImageUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setCanvasBgImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Filter categories/blocks by search
  const filteredCategories = searchQuery.trim()
    ? componentCategories
        .map((cat) => ({
          ...cat,
          blocks: cat.blocks.filter((b) =>
            b.name.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((cat) => cat.blocks.length > 0)
    : componentCategories;

  const sectionStyle = {
    padding: "12px 16px",
    borderBottom: "1px solid #E2E8F0",
  };

  const labelStyle = {
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#94A3B8",
    marginBottom: "8px",
    display: "block",
  };

  return (
    <div
      className="flex flex-col h-full"
      style={{
        width: "260px",
        minWidth: "260px",
        backgroundColor: "#FFFFFF",
        borderRight: "1px solid #E2E8F0",
        overflow: "hidden",
      }}
    >
      {/* Tabs */}
      <div
        className="flex"
        style={{
          borderBottom: "1px solid #E2E8F0",
          padding: "0 4px",
        }}
      >
        {[
          { key: "components", label: "Components" },
          { key: "layers", label: "Layers" },
          { key: "settings", label: "Settings" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="cursor-pointer"
            style={{
              flex: 1,
              padding: "10px 0",
              fontSize: "12px",
              fontWeight: 600,
              color: activeTab === tab.key ? "#6366F1" : "#94A3B8",
              backgroundColor: "transparent",
              border: "none",
              borderBottomWidth: "2px",
              borderBottomStyle: "solid",
              borderBottomColor: activeTab === tab.key ? "#6366F1" : "transparent",
              transition: "all 0.15s ease",
              cursor: "pointer",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "components" ? (
          <>
            {/* Search */}
            <div style={sectionStyle}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "7px 12px",
                borderRadius: "8px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#F8FAFC",
                transition: "border-color 0.15s ease",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search blocks..."
                  style={{
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    fontSize: "12px",
                    color: "#334155",
                    width: "100%",
                    fontFamily: "inherit",
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "12px", color: "#94A3B8", padding: 0 }}
                  >✕</button>
                )}
              </div>
            </div>

            {/* Quick Color */}
            {!searchQuery && (
              <div style={sectionStyle}>
                <span style={labelStyle}>Quick Color</span>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={quickColor}
                    onChange={(e) => setQuickColor(e.target.value)}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      border: "2px solid #E2E8F0",
                      cursor: "pointer",
                      padding: "2px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#64748B",
                      fontFamily: "monospace",
                    }}
                  >
                    {quickColor}
                  </span>
                </div>
              </div>
            )}

            {/* Text Tool */}
            {!searchQuery && (
              <div style={sectionStyle}>
                <span style={labelStyle}>Text</span>
                <button
                  onClick={() => setIsAddingText(!isAddingText)}
                  className="cursor-pointer"
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 500,
                    border: "1px solid",
                    borderColor: isAddingText ? "#6366F1" : "#E2E8F0",
                    backgroundColor: isAddingText ? "#EEF2FF" : "#F8FAFC",
                    color: isAddingText ? "#4338CA" : "#475569",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.15s ease",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 7 4 4 20 4 20 7" />
                    <line x1="9" y1="20" x2="15" y2="20" />
                    <line x1="12" y1="4" x2="12" y2="20" />
                  </svg>
                  {isAddingText ? "Click on canvas to place text" : "Add Text"}
                </button>
              </div>
            )}

            {/* Component Categories */}
            <div style={{ padding: "8px 0" }}>
              {!searchQuery && (
                <div style={{ ...sectionStyle, borderBottom: "none", paddingBottom: "4px" }}>
                  <span style={labelStyle}>Sections</span>
                </div>
              )}

              {searchQuery && filteredCategories.length === 0 && (
                <div style={{ padding: "20px 16px", textAlign: "center", color: "#94A3B8", fontSize: "12px" }}>
                  No blocks match "{searchQuery}"
                </div>
              )}

              {filteredCategories.map((cat) => (
                <div key={cat.key}>
                  {/* Category header */}
                  <button
                    onClick={() =>
                      setExpandedCategory(
                        expandedCategory === cat.key ? null : cat.key
                      )
                    }
                    className="cursor-pointer"
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 16px",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#334155",
                      backgroundColor:
                        expandedCategory === cat.key || searchQuery ? "#F8FAFC" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.1s ease",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: "14px" }}>{cat.icon}</span>
                      <span>{cat.label}</span>
                      <span style={{ fontSize: "10px", color: "#CBD5E1", fontWeight: 400 }}>
                        {cat.blocks.length}
                      </span>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform:
                          expandedCategory === cat.key || searchQuery
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Category blocks - auto-expand when searching */}
                  {(expandedCategory === cat.key || searchQuery) && (
                    <div
                      style={{
                        padding: "4px 16px 8px",
                        animation: "slideInDown 0.2s ease-out",
                      }}
                    >
                      {cat.blocks.map((comp) => (
                        <button
                          key={comp.key}
                          onClick={() => addBlock(comp)}
                          className="cursor-pointer"
                          style={{
                            width: "100%",
                            textAlign: "left",
                            padding: "7px 10px",
                            marginBottom: "2px",
                            borderRadius: "6px",
                            fontSize: "12px",
                            fontWeight: 400,
                            color: "#475569",
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                            transition: "all 0.1s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#F1F5F9";
                            e.target.style.color = "#1E293B";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "#475569";
                          }}
                        >
                          {comp.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : activeTab === "layers" ? (
          <LayersPanel />
        ) : (
          /* Settings Tab */
          <>
            <div style={sectionStyle}>
              <span style={labelStyle}>Background Color</span>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={canvasBgColor}
                  onChange={(e) => setCanvasBgColor(e.target.value)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    border: "2px solid #E2E8F0",
                    cursor: "pointer",
                    padding: "2px",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "#64748B",
                    fontFamily: "monospace",
                  }}
                >
                  {canvasBgColor}
                </span>
              </div>
            </div>

            <div style={sectionStyle}>
              <span style={labelStyle}>Background Image</span>
              <label
                className="cursor-pointer"
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
                  transition: "all 0.15s ease",
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
                  className="hidden"
                  style={{ display: "none" }}
                  onChange={handleBgImageUpload}
                />
              </label>
            </div>

            <div style={sectionStyle}>
              <span style={labelStyle}>Canvas Height</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={canvasHeight}
                  onChange={(e) => setCanvasHeight(Number(e.target.value))}
                  min={400}
                  max={10000}
                  step={50}
                  style={{
                    flex: 1,
                    padding: "6px 10px",
                    borderRadius: "6px",
                    border: "1px solid #E2E8F0",
                    fontSize: "13px",
                    color: "#334155",
                    backgroundColor: "#F8FAFC",
                    outline: "none",
                  }}
                />
                <span style={{ fontSize: "12px", color: "#94A3B8" }}>px</span>
              </div>
            </div>

            {/* Clear bg image */}
            <div style={{ ...sectionStyle, borderBottom: "none" }}>
              <button
                onClick={() => setCanvasBgImage(null)}
                className="cursor-pointer"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  color: "#EF4444",
                  backgroundColor: "#FEF2F2",
                  border: "1px solid #FECACA",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                Clear Background Image
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
