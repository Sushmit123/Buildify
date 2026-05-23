// src/components/Blocks/GalleryBlocks.jsx
export const GalleryBlocks = [
  {
    name: "Gallery Grid",
    key: "gallery-grid",
    defaults: { title: "Our Work", subtitle: "A showcase of recent projects and designs.", textColor: "#0F172A", bgPrimary: false, bgColor: "#ffffff" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor: s.bgPrimary ? activeColor : s.bgColor, borderRadius: "16px", padding: "60px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ color: s.bgPrimary ? "#fff" : s.textColor, fontSize: "32px", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "8px" }}>{s.title}</h2>
          <p style={{ color: s.bgPrimary ? "rgba(255,255,255,0.7)" : "#64748B", fontSize: "15px" }}>{s.subtitle}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
          {[
            { h: "200px", gradient: `linear-gradient(135deg, ${activeColor}44, #7C3AED44)`, label: "Brand Identity" },
            { h: "160px", gradient: "linear-gradient(135deg, #06B6D444, #3B82F644)", label: "Web Design" },
            { h: "240px", gradient: "linear-gradient(135deg, #F59E0B44, #EF444444)", label: "Mobile App" },
            { h: "240px", gradient: "linear-gradient(135deg, #22C55E44, #06B6D444)", label: "Dashboard" },
            { h: "200px", gradient: `linear-gradient(135deg, #EC489944, ${activeColor}44)`, label: "Marketing" },
            { h: "160px", gradient: "linear-gradient(135deg, #8B5CF644, #EC489944)", label: "Illustration" },
          ].map((item, i) => (
            <div key={i} style={{ height: item.h, borderRadius: "14px", background: item.gradient, display: "flex", alignItems: "flex-end", padding: "16px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)" }} />
              <span style={{ position: "relative", fontSize: "13px", fontWeight: 600, color: "#fff", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    ),
  },
  {
    name: "Gallery Featured",
    key: "gallery-featured",
    defaults: { title: "Featured Projects", textColor: "#0F172A", bgPrimary: false, bgColor: "#F8FAFC" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor: s.bgPrimary ? activeColor : s.bgColor, borderRadius: "16px", padding: "48px" }}>
        <h3 style={{ fontSize: "28px", fontWeight: 800, color: s.bgPrimary ? "#fff" : s.textColor, letterSpacing: "-0.02em", marginBottom: "24px" }}>{s.title}</h3>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "12px" }}>
          <div style={{ height: "320px", borderRadius: "14px", background: `linear-gradient(135deg, ${activeColor}33, #7C3AED33)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>🎨</div>
              <div style={{ fontSize: "15px", fontWeight: 600, color: "#475569" }}>Featured Project</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "12px" }}>
            <div style={{ borderRadius: "14px", background: "linear-gradient(135deg, #06B6D433, #3B82F633)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "24px" }}>📱</span>
            </div>
            <div style={{ borderRadius: "14px", background: "linear-gradient(135deg, #F59E0B33, #EF444433)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "24px" }}>💻</span>
            </div>
          </div>
        </div>
      </section>
    ),
  },
  {
    name: "Portfolio Cards",
    key: "gallery-portfolio",
    defaults: { title: "Portfolio", subtitle: "Selected works from our creative team.", textColor: "#0F172A", bgPrimary: false, bgColor: "#ffffff" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor: s.bgPrimary ? activeColor : s.bgColor, borderRadius: "16px", padding: "60px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ color: s.bgPrimary ? "#fff" : s.textColor, fontSize: "32px", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "8px" }}>{s.title}</h2>
          <p style={{ color: s.bgPrimary ? "rgba(255,255,255,0.7)" : "#64748B", fontSize: "15px" }}>{s.subtitle}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
          {[
            { title: "E-commerce Redesign", tag: "Web Design", gradient: `linear-gradient(135deg, ${activeColor}, #7C3AED)` },
            { title: "SaaS Dashboard", tag: "UI/UX", gradient: "linear-gradient(135deg, #06B6D4, #3B82F6)" },
            { title: "Brand Guidelines", tag: "Branding", gradient: "linear-gradient(135deg, #F59E0B, #EF4444)" },
          ].map((p) => (
            <div key={p.title} style={{ borderRadius: "14px", overflow: "hidden", background: "#fff", border: "1px solid #F1F5F9", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <div style={{ height: "180px", background: p.gradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>✦</div>
              </div>
              <div style={{ padding: "20px" }}>
                <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 600, color: activeColor, background: `${activeColor}12`, marginBottom: "8px" }}>{p.tag}</span>
                <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }}>{p.title}</h4>
                <span style={{ fontSize: "13px", fontWeight: 600, color: activeColor, cursor: "pointer" }}>View project →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    ),
  },
];
