// src/components/Blocks/TeamBlocks.jsx
export const TeamBlocks = [
  {
    name: "Team Grid",
    key: "team-grid",
    defaults: { title: "Meet our team", subtitle: "The talented people behind Buildify.", textColor: "#0F172A", bgPrimary: false, bgColor: "#ffffff" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor: s.bgPrimary ? activeColor : s.bgColor, borderRadius: "16px", padding: "60px 48px", textAlign: "center" }}>
        <h2 style={{ color: s.bgPrimary ? "#fff" : s.textColor, fontSize: "32px", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "8px" }}>{s.title}</h2>
        <p style={{ color: s.bgPrimary ? "rgba(255,255,255,0.7)" : "#64748B", fontSize: "15px", marginBottom: "48px" }}>{s.subtitle}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "20px" }}>
          {[
            { name: "Arjun Patel", role: "CEO & Founder", initials: "AP", color: "#EDE9FE" },
            { name: "Meera Sharma", role: "Lead Designer", initials: "MS", color: "#DBEAFE" },
            { name: "Vikram Singh", role: "CTO", initials: "VS", color: "#FEF3C7" },
            { name: "Priya Nair", role: "Product Lead", initials: "PN", color: "#D1FAE5" },
          ].map((m) => (
            <div key={m.name} style={{ padding: "32px 20px", borderRadius: "16px", background: s.bgPrimary ? "rgba(255,255,255,0.1)" : "#F8FAFC", border: s.bgPrimary ? "1px solid rgba(255,255,255,0.1)" : "1px solid #F1F5F9" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: m.color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontWeight: 700, fontSize: "18px", color: "#475569" }}>{m.initials}</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: s.bgPrimary ? "#fff" : "#0F172A", marginBottom: "4px" }}>{m.name}</div>
              <div style={{ fontSize: "12px", color: s.bgPrimary ? "rgba(255,255,255,0.6)" : "#94A3B8", fontWeight: 500, marginBottom: "16px" }}>{m.role}</div>
              <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                {["𝕏", "in"].map((icon, i) => (
                  <div key={i} style={{ width: "30px", height: "30px", borderRadius: "8px", background: s.bgPrimary ? "rgba(255,255,255,0.1)" : `${activeColor}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: s.bgPrimary ? "rgba(255,255,255,0.6)" : activeColor, cursor: "pointer" }}>{icon}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    ),
  },
  {
    name: "Team Cards",
    key: "team-cards",
    defaults: { title: "Leadership", subtitle: "Experienced leaders driving innovation.", textColor: "#0F172A", bgPrimary: false, bgColor: "#F8FAFC" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor: s.bgPrimary ? activeColor : s.bgColor, borderRadius: "16px", padding: "60px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ color: s.bgPrimary ? "#fff" : s.textColor, fontSize: "32px", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "8px" }}>{s.title}</h2>
          <p style={{ color: s.bgPrimary ? "rgba(255,255,255,0.7)" : "#64748B", fontSize: "15px" }}>{s.subtitle}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
          {[
            { name: "Rahul Verma", role: "CEO", bio: "10+ years building SaaS products.", initials: "RV", gradient: `linear-gradient(135deg, ${activeColor}, #7C3AED)` },
            { name: "Ananya Das", role: "CTO", bio: "Full-stack engineer passionate about design.", initials: "AD", gradient: "linear-gradient(135deg, #06B6D4, #3B82F6)" },
            { name: "Karan Mehta", role: "Design Lead", bio: "Crafting beautiful interfaces for 8 years.", initials: "KM", gradient: "linear-gradient(135deg, #F59E0B, #EF4444)" },
          ].map((m) => (
            <div key={m.name} style={{ borderRadius: "16px", overflow: "hidden", background: "#fff", border: "1px solid #F1F5F9", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <div style={{ height: "6px", background: m.gradient }} />
              <div style={{ padding: "28px" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: m.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", color: "#fff", marginBottom: "16px" }}>{m.initials}</div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", marginBottom: "2px" }}>{m.name}</div>
                <div style={{ fontSize: "12px", color: activeColor, fontWeight: 600, marginBottom: "12px" }}>{m.role}</div>
                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.6 }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    ),
  },
];
