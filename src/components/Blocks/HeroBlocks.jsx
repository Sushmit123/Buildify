// src/components/blocks/HeroBlocks.js
// Modern hero sections with gradients, glassmorphism, and premium design

export const HeroBlocks = [
  {
    name: "Gradient Hero",
    key: "hero-image",
    defaults: {
      title: "Build beautiful websites visually",
      subtitle: "The modern page builder that turns your ideas into stunning, responsive designs — no code required.",
      buttonText: "Start Building →",
      textColor: "#ffffff",
      bgPrimary: true,
      bgColor: "#6366F1",
    },
    render: (s, activeColor) => (
      <section style={{
        background: s.bgPrimary
          ? `linear-gradient(135deg, ${activeColor} 0%, ${activeColor}cc 50%, #7C3AED 100%)`
          : `linear-gradient(135deg, ${s.bgColor} 0%, ${s.bgColor}cc 100%)`,
        borderRadius: "16px",
        padding: "80px 48px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-40px",
          left: "20%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
        }} />
        
        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px" }}>
          <div style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.9)",
            fontSize: "12px",
            fontWeight: 600,
            marginBottom: "20px",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>✨ Now in beta — try it free</div>
          
          <h1 style={{
            color: s.textColor,
            fontSize: "42px",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}>{s.title}</h1>
          
          <p style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "17px",
            lineHeight: 1.7,
            marginBottom: "32px",
            maxWidth: "520px",
          }}>{s.subtitle}</p>
          
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <span style={{
              display: "inline-block",
              padding: "14px 28px",
              borderRadius: "10px",
              backgroundColor: "#fff",
              color: activeColor,
              fontWeight: 700,
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            }}>{s.buttonText}</span>
            <span style={{
              display: "inline-block",
              padding: "14px 28px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "15px",
              cursor: "pointer",
            }}>Watch Demo</span>
          </div>
        </div>
      </section>
    ),
  },
  {
    name: "Centered Hero",
    key: "hero-centered",
    defaults: {
      title: "Design Smarter, Ship Faster",
      subtitle: "Drag, drop, and export stunning designs in minutes. No coding skills needed.",
      buttonText: "Get Started Free",
      textColor: "#0F172A",
      bgPrimary: false,
      bgColor: "#F8FAFC",
    },
    render: (s, activeColor) => (
      <section style={{
        backgroundColor: s.bgPrimary ? activeColor : s.bgColor,
        borderRadius: "16px",
        padding: "80px 48px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Grid pattern overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
        
        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 16px",
            borderRadius: "999px",
            border: "1px solid #E2E8F0",
            background: "#fff",
            fontSize: "12px",
            fontWeight: 600,
            color: "#64748B",
            marginBottom: "24px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          }}>
            <span style={{ color: activeColor }}>●</span> Trusted by 10,000+ creators
          </div>
          
          <h1 style={{
            color: s.bgPrimary ? "#fff" : s.textColor,
            fontSize: "48px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}>{s.title}</h1>
          
          <p style={{
            color: s.bgPrimary ? "rgba(255,255,255,0.8)" : "#64748B",
            fontSize: "18px",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}>{s.subtitle}</p>
          
          <span style={{
            display: "inline-block",
            padding: "14px 32px",
            borderRadius: "10px",
            background: s.bgPrimary ? "#fff" : `linear-gradient(135deg, ${activeColor}, #7C3AED)`,
            color: s.bgPrimary ? activeColor : "#fff",
            fontWeight: 700,
            fontSize: "15px",
            cursor: "pointer",
            boxShadow: s.bgPrimary ? "none" : "0 4px 14px rgba(99,102,241,0.35)",
          }}>{s.buttonText}</span>
        </div>
      </section>
    ),
  },
  {
    name: "Split Hero",
    key: "hero-split",
    defaults: {
      title: "Create Exceptional Digital Experiences",
      subtitle: "A powerful visual builder for designers and developers who want to move fast.",
      buttonText: "Start Creating",
      textColor: "#0F172A",
      bgPrimary: false,
      bgColor: "#ffffff",
    },
    render: (s, activeColor) => (
      <section style={{
        backgroundColor: s.bgPrimary ? activeColor : s.bgColor,
        borderRadius: "16px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        padding: "60px 48px",
        alignItems: "center",
      }}>
        <div>
          <h1 style={{
            color: s.bgPrimary ? "#fff" : s.textColor,
            fontSize: "40px",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}>{s.title}</h1>
          
          <p style={{
            color: s.bgPrimary ? "rgba(255,255,255,0.7)" : "#64748B",
            fontSize: "16px",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}>{s.subtitle}</p>
          
          <div style={{ display: "flex", gap: "12px" }}>
            <span style={{
              display: "inline-block",
              padding: "12px 24px",
              borderRadius: "10px",
              background: s.bgPrimary ? "#fff" : activeColor,
              color: s.bgPrimary ? activeColor : "#fff",
              fontWeight: 700,
              fontSize: "14px",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}>{s.buttonText}</span>
          </div>
          
          <div style={{
            display: "flex",
            gap: "24px",
            marginTop: "32px",
          }}>
            {[
              { num: "10K+", label: "Users" },
              { num: "50K+", label: "Pages Built" },
              { num: "99%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: s.bgPrimary ? "#fff" : activeColor,
                }}>{stat.num}</div>
                <div style={{
                  fontSize: "12px",
                  color: s.bgPrimary ? "rgba(255,255,255,0.6)" : "#94A3B8",
                  fontWeight: 500,
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Visual placeholder - gradient card stack */}
        <div style={{ position: "relative", height: "320px" }}>
          <div style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            borderRadius: "16px",
            background: `linear-gradient(135deg, ${activeColor}22, ${activeColor}44)`,
            border: `1px solid ${activeColor}33`,
            transform: "rotate(3deg)",
          }} />
          <div style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            right: "10px",
            bottom: "10px",
            borderRadius: "16px",
            background: `linear-gradient(135deg, ${activeColor}33, ${activeColor}55)`,
            border: `1px solid ${activeColor}44`,
            transform: "rotate(-1deg)",
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            borderRadius: "16px",
            background: `linear-gradient(135deg, ${activeColor}11, ${activeColor}22)`,
            border: `1px solid ${activeColor}22`,
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            gap: "12px",
          }}>
            <div style={{ height: "12px", width: "60%", borderRadius: "6px", background: `${activeColor}33` }} />
            <div style={{ height: "12px", width: "80%", borderRadius: "6px", background: `${activeColor}22` }} />
            <div style={{ height: "12px", width: "45%", borderRadius: "6px", background: `${activeColor}22` }} />
            <div style={{ flex: 1, borderRadius: "12px", background: `${activeColor}15`, marginTop: "8px" }} />
          </div>
        </div>
      </section>
    ),
  },
];
