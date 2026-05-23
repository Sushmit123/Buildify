// src/components/Blocks/DividerBlocks.jsx
export const DividerBlocks = [
  {
    name: "Gradient Divider",
    key: "divider-gradient",
    defaults: { bgPrimary: false, bgColor: "#ffffff" },
    render: (s, activeColor) => (
      <div style={{ backgroundColor: s.bgPrimary ? activeColor : s.bgColor, padding: "24px 48px", borderRadius: "8px" }}>
        <div style={{ height: "3px", borderRadius: "2px", background: `linear-gradient(90deg, transparent, ${activeColor}, #7C3AED, transparent)` }} />
      </div>
    ),
  },
  {
    name: "Wave Divider",
    key: "divider-wave",
    defaults: { bgPrimary: true, bgColor: "#6366F1" },
    render: (s, activeColor) => (
      <div style={{ overflow: "hidden", borderRadius: "8px" }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "80px", display: "block" }}>
          <path d="M0,40 C200,100 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z" fill={s.bgPrimary ? activeColor : s.bgColor} opacity="0.3" />
          <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z" fill={s.bgPrimary ? activeColor : s.bgColor} opacity="0.5" />
          <path d="M0,80 C200,40 400,100 600,80 C800,60 1000,100 1200,80 L1200,120 L0,120 Z" fill={s.bgPrimary ? activeColor : s.bgColor} opacity="0.8" />
        </svg>
      </div>
    ),
  },
  {
    name: "Spacer",
    key: "divider-spacer",
    defaults: { height: "80", bgPrimary: false, bgColor: "transparent" },
    render: (s) => (
      <div style={{ height: `${s.height}px`, backgroundColor: s.bgColor, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "11px", color: "#CBD5E1", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.height}px spacer</span>
      </div>
    ),
  },
  {
    name: "Dotted Divider",
    key: "divider-dotted",
    defaults: { bgPrimary: false, bgColor: "#ffffff" },
    render: (s, activeColor) => (
      <div style={{ backgroundColor: s.bgPrimary ? activeColor : s.bgColor, padding: "20px 48px", borderRadius: "8px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: `${activeColor}55` }} />
          ))}
        </div>
      </div>
    ),
  },
];
