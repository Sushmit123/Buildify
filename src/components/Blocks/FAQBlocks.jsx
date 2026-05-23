// src/components/Blocks/FAQBlocks.jsx
import { useState } from "react";

function FAQAccordionBlock({ s, activeColor }) {
  const [openIndex, setOpenIndex] = useState(0);
  const items = [
    { q: "How does Buildify work?", a: "Buildify is a visual page builder. Drag components from the sidebar, customize them in the inspector, and export your design as PNG or HTML." },
    { q: "Is there a free plan?", a: "Yes! Our free plan includes 3 projects, basic blocks, and PNG export. Upgrade to Pro for unlimited access." },
    { q: "Can I use my own images?", a: "Absolutely. Upload images directly to any block that supports them. All images are stored locally in your browser." },
    { q: "How do I export my design?", a: "Click the Export PNG button in the toolbar to download your canvas as a high-resolution image." },
  ];

  return (
    <section style={{ backgroundColor: s.bgPrimary ? activeColor : s.bgColor, borderRadius: "16px", padding: "60px 48px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ color: s.bgPrimary ? "#fff" : s.textColor, fontSize: "32px", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "8px" }}>{s.title}</h2>
        <p style={{ color: s.bgPrimary ? "rgba(255,255,255,0.7)" : "#64748B", fontSize: "15px" }}>{s.subtitle}</p>
      </div>
      <div style={{ maxWidth: "640px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item, i) => (
          <div key={i} style={{ borderRadius: "12px", background: s.bgPrimary ? "rgba(255,255,255,0.08)" : "#F8FAFC", border: s.bgPrimary ? "1px solid rgba(255,255,255,0.08)" : "1px solid #F1F5F9", overflow: "hidden" }}>
            <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} style={{ width: "100%", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
              <span style={{ fontSize: "14px", fontWeight: 600, color: s.bgPrimary ? "#fff" : "#0F172A", textAlign: "left" }}>{item.q}</span>
              <span style={{ fontSize: "18px", color: s.bgPrimary ? "rgba(255,255,255,0.5)" : "#94A3B8", transform: openIndex === i ? "rotate(45deg)" : "none", transition: "transform 0.2s ease", flexShrink: 0, marginLeft: "12px" }}>+</span>
            </button>
            {openIndex === i && (
              <div style={{ padding: "0 20px 16px", fontSize: "13px", color: s.bgPrimary ? "rgba(255,255,255,0.7)" : "#64748B", lineHeight: 1.7 }}>{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export const FAQBlocks = [
  {
    name: "FAQ Accordion",
    key: "faq-accordion",
    defaults: { title: "Frequently asked questions", subtitle: "Everything you need to know about Buildify.", textColor: "#0F172A", bgPrimary: false, bgColor: "#ffffff" },
    render: (s, activeColor) => <FAQAccordionBlock s={s} activeColor={activeColor} />,
  },
  {
    name: "FAQ Grid",
    key: "faq-grid",
    defaults: { title: "Common questions", textColor: "#0F172A", bgPrimary: false, bgColor: "#F8FAFC" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor: s.bgPrimary ? activeColor : s.bgColor, borderRadius: "16px", padding: "60px 48px" }}>
        <h2 style={{ color: s.bgPrimary ? "#fff" : s.textColor, fontSize: "32px", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "40px", textAlign: "center" }}>{s.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {[
            { q: "What is Buildify?", a: "A visual drag-and-drop page builder for creating stunning websites." },
            { q: "Is it free to use?", a: "Yes, we have a generous free plan with core features." },
            { q: "Can I export my designs?", a: "Export as PNG or HTML with a single click." },
            { q: "Do I need coding skills?", a: "Not at all. Everything is visual and intuitive." },
            { q: "How do I save my work?", a: "Projects auto-save to your browser, or save manually with Ctrl+S." },
            { q: "Can I collaborate?", a: "Team features are coming soon in our Pro plan." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "24px", borderRadius: "14px", background: "#fff", border: "1px solid #F1F5F9" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: `${activeColor}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: activeColor, fontWeight: 700, flexShrink: 0 }}>?</div>
                <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A" }}>{item.q}</h4>
              </div>
              <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.6, paddingLeft: "34px" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    ),
  },
];
