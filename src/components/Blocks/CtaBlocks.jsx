// src/components/blocks/CtaBlocks.js
export const CtaBlocks = [
  {
    name: "Gradient CTA",
    key: "cta-centered",
    defaults: { title: "Ready to build something amazing?", subtitle: "Start your free trial today — no credit card required.", buttonText: "Start Free →", textColor: "#ffffff", bgPrimary: true, bgColor: "#6366F1" },
    render: (s, activeColor) => (
      <section style={{
        background: s.bgPrimary ? `linear-gradient(135deg, ${activeColor} 0%, #7C3AED 100%)` : s.bgColor,
        borderRadius: "16px", padding: "64px 48px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position:"absolute",top:"-40px",right:"-40px",width:"160px",height:"160px",borderRadius:"50%",background:"rgba(255,255,255,0.06)" }} />
        <div style={{ position:"absolute",bottom:"-30px",left:"15%",width:"100px",height:"100px",borderRadius:"50%",background:"rgba(255,255,255,0.04)" }} />
        <div style={{ position:"relative",zIndex:1,maxWidth:"560px",margin:"0 auto" }}>
          <h3 style={{ fontSize:"32px",fontWeight:800,color:s.textColor,letterSpacing:"-0.03em",marginBottom:"12px" }}>{s.title}</h3>
          <p style={{ fontSize:"16px",color:"rgba(255,255,255,0.8)",marginBottom:"32px",lineHeight:1.6 }}>{s.subtitle}</p>
          <div style={{ display:"flex",gap:"12px",justifyContent:"center" }}>
            <span style={{ display:"inline-block",padding:"14px 32px",borderRadius:"10px",backgroundColor:"#fff",color:activeColor,fontWeight:700,fontSize:"15px",cursor:"pointer",boxShadow:"0 4px 14px rgba(0,0,0,0.1)" }}>{s.buttonText}</span>
            <span style={{ display:"inline-block",padding:"14px 32px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.3)",color:"#fff",fontWeight:600,fontSize:"15px",cursor:"pointer" }}>Learn More</span>
          </div>
        </div>
      </section>
    ),
  },
  {
    name: "Split CTA",
    key: "cta-split",
    defaults: { title: "Let's create something great together.", subtitle: "Join thousands of creators building with Buildify.", buttonText: "Get Started", textColor: "#0F172A", bgPrimary: false, bgColor: "#F8FAFC" },
    render: (s, activeColor) => (
      <section style={{
        backgroundColor: s.bgPrimary ? activeColor : s.bgColor, borderRadius: "16px",
        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px",
      }}>
        <div style={{ maxWidth: "480px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: 800, color: s.bgPrimary ? "#fff" : s.textColor, letterSpacing: "-0.02em", marginBottom: "8px" }}>{s.title}</h3>
          <p style={{ fontSize: "15px", color: s.bgPrimary ? "rgba(255,255,255,0.7)" : "#64748B", lineHeight: 1.6 }}>{s.subtitle}</p>
        </div>
        <span style={{
          display: "inline-block", padding: "14px 28px", borderRadius: "10px", whiteSpace: "nowrap",
          background: s.bgPrimary ? "#fff" : `linear-gradient(135deg, ${activeColor}, #7C3AED)`,
          color: s.bgPrimary ? activeColor : "#fff", fontWeight: 700, fontSize: "15px", cursor: "pointer",
          boxShadow: s.bgPrimary ? "none" : "0 4px 14px rgba(99,102,241,0.3)",
        }}>{s.buttonText}</span>
      </section>
    ),
  },
  {
    name: "Banner CTA",
    key: "cta-banner",
    defaults: { title: "Start creating stunning pages now!", subtitle: "No credit card required — build your first design today.", buttonText: "Sign Up Free", textColor: "#ffffff", bgPrimary: true, bgColor: "#0F172A" },
    render: (s, activeColor) => (
      <section style={{
        background: s.bgPrimary ? `linear-gradient(135deg, ${activeColor}, ${activeColor}dd)` : s.bgColor,
        borderRadius: "16px", padding: "40px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <h3 style={{ fontSize: "22px", fontWeight: 800, color: s.textColor, letterSpacing: "-0.02em", marginBottom: "4px" }}>{s.title}</h3>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>{s.subtitle}</p>
        </div>
        <span style={{
          display: "inline-block", padding: "12px 24px", borderRadius: "10px", whiteSpace: "nowrap",
          backgroundColor: "#fff", color: activeColor, fontWeight: 700, fontSize: "14px", cursor: "pointer",
        }}>{s.buttonText}</span>
      </section>
    ),
  },
];
