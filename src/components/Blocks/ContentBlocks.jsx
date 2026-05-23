// src/components/blocks/ContentBlocks.js
// Modern content/features sections with premium card designs

export const ContentBlocks = [
  {
    name: "Features Grid",
    key: "content-features-grid",
    defaults: {
      title: "Everything you need to build faster",
      paragraph: "Powerful tools that help you move from idea to production in record time.",
      textColor: "#0F172A",
      bgPrimary: false,
      bgColor: "#ffffff",
    },
    render: (s, activeColor) => (
      <section style={{
        backgroundColor: s.bgPrimary ? activeColor : s.bgColor,
        borderRadius: "16px",
        padding: "60px 48px",
      }}>
        <div style={{ textAlign: "center", marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px" }}>
          <h2 style={{
            color: s.bgPrimary ? "#fff" : s.textColor,
            fontSize: "32px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "12px",
          }}>{s.title}</h2>
          <p style={{
            color: s.bgPrimary ? "rgba(255,255,255,0.7)" : "#64748B",
            fontSize: "16px",
            lineHeight: 1.7,
          }}>{s.paragraph}</p>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
          {[
            { icon: "⚡", title: "Lightning Fast", desc: "Optimized for speed from the ground up.", color: "#FEF3C7", accent: "#F59E0B" },
            { icon: "🎨", title: "Beautiful Design", desc: "Premium templates that look professional.", color: "#EDE9FE", accent: "#8B5CF6" },
            { icon: "🧩", title: "Modular System", desc: "Mix and match components effortlessly.", color: "#DBEAFE", accent: "#3B82F6" },
          ].map((f) => (
            <div key={f.title} style={{
              padding: "28px",
              borderRadius: "14px",
              border: "1px solid #F1F5F9",
              background: "#FAFBFC",
              transition: "all 0.2s ease",
            }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                backgroundColor: f.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                marginBottom: "16px",
              }}>{f.icon}</div>
              <h3 style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#0F172A",
                marginBottom: "8px",
              }}>{f.title}</h3>
              <p style={{
                fontSize: "14px",
                color: "#64748B",
                lineHeight: 1.6,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    ),
  },

  {
    name: "Icon Features",
    key: "content-icons",
    defaults: {
      title: "Why creators love us",
      paragraph: "Everything you need to create amazing digital experiences, in one place.",
      textColor: "#0F172A",
      bgPrimary: false,
      bgColor: "#F8FAFC",
    },
    render: (s, activeColor) => (
      <section style={{
        backgroundColor: s.bgPrimary ? activeColor : s.bgColor,
        borderRadius: "16px",
        padding: "60px 48px",
      }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{
            color: s.bgPrimary ? "#fff" : s.textColor,
            fontSize: "32px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "12px",
          }}>{s.title}</h2>
          <p style={{
            color: s.bgPrimary ? "rgba(255,255,255,0.7)" : "#64748B",
            fontSize: "16px",
          }}>{s.paragraph}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
          {[
            { icon: "🚀", title: "Ship Faster", desc: "Go from idea to live page in minutes, not days.", gradient: `linear-gradient(135deg, ${activeColor}11, ${activeColor}22)` },
            { icon: "💎", title: "Pixel Perfect", desc: "Every component is crafted with attention to detail.", gradient: `linear-gradient(135deg, #7C3AED11, #7C3AED22)` },
            { icon: "🔄", title: "Iterate Quickly", desc: "Make changes in real-time and see results instantly.", gradient: `linear-gradient(135deg, #06B6D411, #06B6D422)` },
          ].map((f) => (
            <div key={f.title} style={{
              padding: "32px",
              borderRadius: "16px",
              background: "#ffffff",
              border: "1px solid #F1F5F9",
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: f.gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                margin: "0 auto 20px",
              }}>{f.icon}</div>
              <h3 style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#0F172A",
                marginBottom: "8px",
              }}>{f.title}</h3>
              <p style={{
                fontSize: "14px",
                color: "#64748B",
                lineHeight: 1.6,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    ),
  },

  {
    name: "Stats Section",
    key: "content-split",
    defaults: {
      title: "Trusted by teams worldwide",
      paragraph: "Join thousands of designers and developers who build with Buildify every day.",
      textColor: "#0F172A",
      bgPrimary: false,
      bgColor: "#ffffff",
    },
    render: (s, activeColor) => (
      <section style={{
        backgroundColor: s.bgPrimary ? activeColor : s.bgColor,
        borderRadius: "16px",
        padding: "60px 48px",
        textAlign: "center",
      }}>
        <h2 style={{
          color: s.bgPrimary ? "#fff" : s.textColor,
          fontSize: "32px",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          marginBottom: "8px",
        }}>{s.title}</h2>
        <p style={{
          color: s.bgPrimary ? "rgba(255,255,255,0.7)" : "#64748B",
          fontSize: "16px",
          marginBottom: "48px",
        }}>{s.paragraph}</p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "24px",
        }}>
          {[
            { num: "50K+", label: "Active Users", color: activeColor },
            { num: "1M+", label: "Pages Created", color: "#7C3AED" },
            { num: "99.9%", label: "Uptime", color: "#22C55E" },
            { num: "4.9/5", label: "User Rating", color: "#F59E0B" },
          ].map((stat) => (
            <div key={stat.label} style={{
              padding: "28px 20px",
              borderRadius: "14px",
              background: s.bgPrimary ? "rgba(255,255,255,0.1)" : "#F8FAFC",
              border: s.bgPrimary ? "1px solid rgba(255,255,255,0.1)" : "1px solid #F1F5F9",
            }}>
              <div style={{
                fontSize: "32px",
                fontWeight: 800,
                color: s.bgPrimary ? "#fff" : stat.color,
                letterSpacing: "-0.02em",
                marginBottom: "4px",
              }}>{stat.num}</div>
              <div style={{
                fontSize: "13px",
                fontWeight: 500,
                color: s.bgPrimary ? "rgba(255,255,255,0.6)" : "#94A3B8",
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    ),
  },
];
