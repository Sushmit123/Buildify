// src/components/Blocks/PricingBlocks.jsx
// Premium pricing section designs with modern card layouts

export const PricingBlocks = [
  {
    name: "Pricing Table",
    key: "pricing-table",
    defaults: {
      title: "Simple, transparent pricing",
      subtitle: "Choose the plan that fits your needs. Upgrade or downgrade anytime.",
      textColor: "#0F172A",
      bgPrimary: false,
      bgColor: "#F8FAFC",
    },
    render: (s, activeColor) => {
      const plans = [
        {
          name: "Starter",
          price: "$9",
          period: "/month",
          desc: "Perfect for side projects",
          features: ["5 projects", "Basic analytics", "Email support", "1 team member"],
          popular: false,
        },
        {
          name: "Pro",
          price: "$29",
          period: "/month",
          desc: "Best for growing teams",
          features: ["Unlimited projects", "Advanced analytics", "Priority support", "10 team members", "Custom domain"],
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$99",
          period: "/month",
          desc: "For large organizations",
          features: ["Everything in Pro", "Dedicated manager", "SLA guarantee", "Unlimited members", "API access"],
          popular: false,
        },
      ];

      return (
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
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto",
            }}>{s.subtitle}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", alignItems: "start" }}>
            {plans.map((plan) => (
              <div key={plan.name} style={{
                padding: "32px 28px",
                borderRadius: "16px",
                background: plan.popular
                  ? `linear-gradient(135deg, ${activeColor}, #7C3AED)`
                  : "#ffffff",
                border: plan.popular ? "none" : "1px solid #F1F5F9",
                boxShadow: plan.popular ? "0 8px 32px rgba(99,102,241,0.2)" : "0 1px 3px rgba(0,0,0,0.04)",
                position: "relative",
                transform: plan.popular ? "scale(1.03)" : "none",
              }}>
                {plan.popular && (
                  <div style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "4px 16px",
                    borderRadius: "999px",
                    background: "#fff",
                    color: activeColor,
                    fontSize: "11px",
                    fontWeight: 700,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    letterSpacing: "0.02em",
                  }}>MOST POPULAR</div>
                )}

                <div style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: plan.popular ? "rgba(255,255,255,0.9)" : "#475569",
                  marginBottom: "16px",
                }}>{plan.name}</div>

                <div style={{ marginBottom: "8px" }}>
                  <span style={{
                    fontSize: "40px",
                    fontWeight: 800,
                    color: plan.popular ? "#fff" : s.textColor,
                    letterSpacing: "-0.03em",
                  }}>{plan.price}</span>
                  <span style={{
                    fontSize: "14px",
                    color: plan.popular ? "rgba(255,255,255,0.7)" : "#94A3B8",
                    fontWeight: 500,
                  }}>{plan.period}</span>
                </div>

                <p style={{
                  fontSize: "13px",
                  color: plan.popular ? "rgba(255,255,255,0.7)" : "#64748B",
                  marginBottom: "24px",
                  lineHeight: 1.5,
                }}>{plan.desc}</p>

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "28px",
                }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "13px",
                      color: plan.popular ? "rgba(255,255,255,0.85)" : "#475569",
                    }}>
                      <span style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: plan.popular ? "rgba(255,255,255,0.2)" : `${activeColor}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        color: plan.popular ? "#fff" : activeColor,
                        flexShrink: 0,
                      }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                <span style={{
                  display: "block",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  textAlign: "center",
                  background: plan.popular ? "#fff" : `linear-gradient(135deg, ${activeColor}, #7C3AED)`,
                  color: plan.popular ? activeColor : "#fff",
                  fontWeight: 700,
                  fontSize: "14px",
                  cursor: "pointer",
                  boxShadow: plan.popular ? "none" : "0 2px 8px rgba(99,102,241,0.2)",
                }}>Get Started</span>
              </div>
            ))}
          </div>
        </section>
      );
    },
  },

  {
    name: "Pricing Simple",
    key: "pricing-simple",
    defaults: {
      title: "Start building for free",
      subtitle: "No credit card required. Upgrade when you're ready.",
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
          fontSize: "15px",
          marginBottom: "40px",
        }}>{s.subtitle}</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", maxWidth: "680px", margin: "0 auto" }}>
          {[
            { name: "Free", price: "$0", features: ["3 projects", "Basic blocks", "PNG export"], bg: "#F8FAFC", border: "#F1F5F9" },
            { name: "Pro", price: "$19", features: ["Unlimited projects", "All blocks", "HTML export", "Priority support"], bg: `linear-gradient(135deg, ${activeColor}, #7C3AED)`, border: "none" },
          ].map((plan) => (
            <div key={plan.name} style={{
              padding: "36px 28px",
              borderRadius: "16px",
              background: plan.bg,
              border: plan.border !== "none" ? `1px solid ${plan.border}` : "none",
              textAlign: "center",
            }}>
              <div style={{
                fontSize: "13px",
                fontWeight: 600,
                color: plan.name === "Pro" ? "rgba(255,255,255,0.8)" : "#94A3B8",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "12px",
              }}>{plan.name}</div>
              <div style={{
                fontSize: "48px",
                fontWeight: 800,
                color: plan.name === "Pro" ? "#fff" : s.textColor,
                letterSpacing: "-0.03em",
                marginBottom: "4px",
              }}>{plan.price}</div>
              <div style={{
                fontSize: "13px",
                color: plan.name === "Pro" ? "rgba(255,255,255,0.6)" : "#94A3B8",
                marginBottom: "24px",
              }}>per month</div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "28px" }}>
                {plan.features.map((f) => (
                  <div key={f} style={{
                    fontSize: "13px",
                    color: plan.name === "Pro" ? "rgba(255,255,255,0.85)" : "#475569",
                  }}>✓ {f}</div>
                ))}
              </div>

              <span style={{
                display: "block",
                padding: "12px 24px",
                borderRadius: "10px",
                background: plan.name === "Pro" ? "#fff" : activeColor,
                color: plan.name === "Pro" ? activeColor : "#fff",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
              }}>{plan.name === "Free" ? "Get Started" : "Upgrade Now"}</span>
            </div>
          ))}
        </div>
      </section>
    ),
  },

  {
    name: "Pricing Comparison",
    key: "pricing-comparison",
    defaults: {
      title: "Compare plans",
      subtitle: "Find the perfect plan for your workflow.",
      textColor: "#0F172A",
      bgPrimary: false,
      bgColor: "#ffffff",
    },
    render: (s, activeColor) => {
      const features = [
        { name: "Projects", free: "3", pro: "Unlimited" },
        { name: "Team Members", free: "1", pro: "25" },
        { name: "Storage", free: "500MB", pro: "50GB" },
        { name: "Custom Domain", free: "✗", pro: "✓" },
        { name: "Analytics", free: "Basic", pro: "Advanced" },
        { name: "Priority Support", free: "✗", pro: "✓" },
      ];

      return (
        <section style={{
          backgroundColor: s.bgPrimary ? activeColor : s.bgColor,
          borderRadius: "16px",
          padding: "60px 48px",
        }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{
              color: s.bgPrimary ? "#fff" : s.textColor,
              fontSize: "32px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "8px",
            }}>{s.title}</h2>
            <p style={{
              color: s.bgPrimary ? "rgba(255,255,255,0.7)" : "#64748B",
              fontSize: "15px",
            }}>{s.subtitle}</p>
          </div>

          <div style={{
            maxWidth: "640px",
            margin: "0 auto",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid #F1F5F9",
          }}>
            {/* Header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              background: "#F8FAFC",
              padding: "16px 24px",
              borderBottom: "1px solid #F1F5F9",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#94A3B8" }}>Feature</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#94A3B8", textAlign: "center" }}>Free</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: activeColor, textAlign: "center" }}>Pro</div>
            </div>

            {/* Rows */}
            {features.map((f, i) => (
              <div key={f.name} style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                padding: "14px 24px",
                borderBottom: i < features.length - 1 ? "1px solid #F8FAFC" : "none",
                background: "#fff",
              }}>
                <div style={{ fontSize: "13px", fontWeight: 500, color: "#334155" }}>{f.name}</div>
                <div style={{
                  fontSize: "13px",
                  textAlign: "center",
                  color: f.free === "✗" ? "#E2E8F0" : "#64748B",
                  fontWeight: f.free === "✗" ? 400 : 500,
                }}>{f.free}</div>
                <div style={{
                  fontSize: "13px",
                  textAlign: "center",
                  color: f.pro === "✓" ? "#22C55E" : activeColor,
                  fontWeight: 600,
                }}>{f.pro}</div>
              </div>
            ))}
          </div>
        </section>
      );
    },
  },
];
