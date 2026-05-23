// src/components/blocks/NavbarBlocks.js
// Modern, premium navbar designs with glassmorphism and elegant styling

export const NavbarBlocks = [
  {
    name: "Modern Navbar",
    key: "navbar-simple",
    defaults: {
      title: "Buildify",
      textColor: "#0F172A",
      bgPrimary: false,
      bgColor: "#ffffff",
    },
    render: (s, activeColor) => (
      <nav
        style={{
          backgroundColor: s.bgPrimary ? activeColor : s.bgColor,
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 32px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: `linear-gradient(135deg, ${activeColor}, ${activeColor}dd)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 800,
              fontSize: "14px",
            }}>B</div>
            <span style={{
              color: s.textColor,
              fontWeight: 700,
              fontSize: "18px",
              letterSpacing: "-0.02em",
            }}>{s.title}</span>
          </div>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {["Home", "About", "Services", "Contact"].map((item) => (
              <span key={item} style={{
                color: s.bgPrimary ? "#ffffffcc" : "#64748B",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "color 0.2s",
              }}>{item}</span>
            ))}
            <span style={{
              padding: "8px 20px",
              borderRadius: "8px",
              backgroundColor: s.bgPrimary ? "rgba(255,255,255,0.2)" : activeColor,
              color: s.bgPrimary ? "#fff" : "#fff",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
            }}>Get Started</span>
          </div>
        </div>
      </nav>
    ),
  },
  {
    name: "Centered Nav",
    key: "navbar-centered",
    defaults: {
      textColor: "#0F172A",
      bgPrimary: false,
      bgColor: "#F8FAFC",
    },
    render: (s, activeColor) => (
      <nav style={{
        backgroundColor: s.bgPrimary ? activeColor : s.bgColor,
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "48px",
          padding: "18px 32px",
        }}>
          {["Home", "Projects", "Blog", "About", "Contact"].map((item) => (
            <span key={item} style={{
              color: s.bgPrimary ? "#ffffffcc" : "#475569",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              letterSpacing: "0.01em",
              position: "relative",
            }}>{item}</span>
          ))}
        </div>
      </nav>
    ),
  },
  {
    name: "Glass Navbar",
    key: "navbar-logo-left",
    defaults: {
      logoText: "Buildify",
      textColor: "#ffffff",
      bgColor: "#0F172A",
      bgPrimary: false,
    },
    render: (s, activeColor) => (
      <nav style={{
        background: s.bgPrimary
          ? `linear-gradient(135deg, ${activeColor}, ${activeColor}ee)`
          : `linear-gradient(135deg, ${s.bgColor}, ${s.bgColor}ee)`,
        padding: "16px 32px",
        borderRadius: "12px",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: "16px" }}>B</span>
            </div>
            <span style={{
              color: s.textColor,
              fontWeight: 700,
              fontSize: "18px",
              letterSpacing: "-0.02em",
            }}>{s.logoText}</span>
          </div>
          <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <span key={item} style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
              }}>{item}</span>
            ))}
            <span style={{
              padding: "8px 20px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(4px)",
            }}>Sign Up</span>
          </div>
        </div>
      </nav>
    ),
  },
];
