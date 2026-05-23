// src/components/blocks/SliderBlocks.js
// Modern slider/carousel sections with gradient cards

import { useState } from "react";

function ModernSlider({ s, activeColor }) {
  const [index, setIndex] = useState(0);
  const items = [
    { title: "Design Systems", desc: "Build consistent, scalable interfaces", color: `linear-gradient(135deg, ${activeColor}, #7C3AED)` },
    { title: "Rapid Prototyping", desc: "From concept to prototype in minutes", color: `linear-gradient(135deg, #06B6D4, #3B82F6)` },
    { title: "Team Collaboration", desc: "Work together in real-time", color: `linear-gradient(135deg, #F59E0B, #EF4444)` },
  ];
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div style={{
      backgroundColor: s.bgPrimary ? activeColor : s.bgColor,
      borderRadius: "16px",
      padding: "48px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        background: items[index].color,
        borderRadius: "14px",
        padding: "60px 48px",
        textAlign: "center",
        position: "relative",
        minHeight: "240px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
      }}>
        <div style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
        }} />
        <h3 style={{
          color: "#fff",
          fontSize: "28px",
          fontWeight: 800,
          marginBottom: "8px",
          letterSpacing: "-0.02em",
        }}>{items[index].title}</h3>
        <p style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: "16px",
        }}>{items[index].desc}</p>
      </div>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        marginTop: "20px",
      }}>
        <button onClick={prev} style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          border: "1px solid #E2E8F0",
          background: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          color: "#475569",
        }}>◀</button>
        <div style={{ display: "flex", gap: "6px" }}>
          {items.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} style={{
              width: i === index ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: i === index ? activeColor : "#CBD5E1",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }} />
          ))}
        </div>
        <button onClick={next} style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          border: "1px solid #E2E8F0",
          background: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          color: "#475569",
        }}>▶</button>
      </div>
    </div>
  );
}

function TestimonialSlider({ s, activeColor }) {
  const testimonials = [
    { name: "Sarah Chen", role: "Product Designer", text: "Buildify transformed our design workflow. We ship 3x faster now.", initials: "SC", color: "#EDE9FE" },
    { name: "Alex Rivera", role: "Developer", text: "The best page builder I've ever used. Clean code, beautiful output.", initials: "AR", color: "#DBEAFE" },
    { name: "Maya Patel", role: "Founder", text: "We built our entire marketing site in one afternoon. Incredible.", initials: "MP", color: "#FEF3C7" },
  ];
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section style={{
      backgroundColor: s.bgPrimary ? activeColor : s.bgColor,
      borderRadius: "16px",
      padding: "60px 48px",
      textAlign: "center",
    }}>
      <h3 style={{
        color: s.bgPrimary ? "#fff" : s.textColor,
        fontSize: "28px",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        marginBottom: "40px",
      }}>{s.title}</h3>

      <div style={{
        maxWidth: "560px",
        margin: "0 auto",
        padding: "32px",
        borderRadius: "16px",
        background: s.bgPrimary ? "rgba(255,255,255,0.1)" : "#fff",
        border: s.bgPrimary ? "1px solid rgba(255,255,255,0.1)" : "1px solid #F1F5F9",
        boxShadow: s.bgPrimary ? "none" : "0 2px 8px rgba(0,0,0,0.04)",
      }}>
        <div style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: t.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 16px",
          fontWeight: 700,
          fontSize: "16px",
          color: "#475569",
        }}>{t.initials}</div>
        
        <p style={{
          fontSize: "17px",
          fontStyle: "italic",
          color: s.bgPrimary ? "rgba(255,255,255,0.85)" : "#334155",
          lineHeight: 1.7,
          marginBottom: "20px",
        }}>"{t.text}"</p>
        
        <div style={{
          fontWeight: 700,
          fontSize: "14px",
          color: s.bgPrimary ? "#fff" : "#0F172A",
        }}>{t.name}</div>
        <div style={{
          fontSize: "13px",
          color: s.bgPrimary ? "rgba(255,255,255,0.6)" : "#94A3B8",
          marginTop: "2px",
        }}>{t.role}</div>
      </div>

      <div style={{
        display: "flex",
        gap: "8px",
        justifyContent: "center",
        marginTop: "24px",
      }}>
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} style={{
            width: i === index ? "24px" : "8px",
            height: "8px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: i === index ? (s.bgPrimary ? "#fff" : activeColor) : (s.bgPrimary ? "rgba(255,255,255,0.3)" : "#CBD5E1"),
            cursor: "pointer",
            transition: "all 0.2s ease",
          }} />
        ))}
      </div>
    </section>
  );
}

export const SliderBlocks = [
  {
    name: "Gradient Slider",
    key: "slider-basic",
    defaults: {
      bgPrimary: false,
      bgColor: "#F8FAFC",
      textColor: "#0F172A",
    },
    render: (s, activeColor) => (
      <ModernSlider s={s} activeColor={activeColor} />
    ),
  },
  {
    name: "Testimonial Carousel",
    key: "slider-testimonial",
    defaults: {
      title: "What our users say",
      bgPrimary: false,
      bgColor: "#F8FAFC",
      textColor: "#0F172A",
    },
    render: (s, activeColor) => (
      <TestimonialSlider s={s} activeColor={activeColor} />
    ),
  },
];
