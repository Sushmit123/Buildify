// src/components/blocks/FooterBlocks.js
export const FooterBlocks = [
  {
    name: "Modern Footer",
    key: "footer-simple",
    defaults: { brand: "Buildify", tagline: "Design tools for modern creators.", text: "© 2025 Buildify. All rights reserved.", bgPrimary: false, bgColor: "#0F172A", textColor: "#ffffff" },
    render: (s, activeColor) => (
      <footer style={{
        background: s.bgPrimary ? `linear-gradient(135deg, ${activeColor}, ${activeColor}dd)` : s.bgColor,
        borderRadius: "16px", padding: "48px",
      }}>
        <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"40px",marginBottom:"32px" }}>
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px" }}>
              <div style={{ width:"28px",height:"28px",borderRadius:"7px",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"12px",color:"#fff" }}>B</div>
              <span style={{ color:s.textColor,fontWeight:700,fontSize:"16px" }}>{s.brand}</span>
            </div>
            <p style={{ color:"rgba(255,255,255,0.5)",fontSize:"13px",lineHeight:1.6,maxWidth:"260px" }}>{s.tagline}</p>
          </div>
          {[
            { title:"Product",links:["Features","Pricing","Changelog"] },
            { title:"Company",links:["About","Blog","Careers"] },
            { title:"Legal",links:["Privacy","Terms","License"] },
          ].map((col)=>(
            <div key={col.title}>
              <div style={{ fontSize:"12px",fontWeight:600,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"14px" }}>{col.title}</div>
              {col.links.map((l)=>(
                <div key={l} style={{ fontSize:"13px",color:"rgba(255,255,255,0.65)",marginBottom:"8px",cursor:"pointer" }}>{l}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:"20px",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
          <span style={{ fontSize:"12px",color:"rgba(255,255,255,0.4)" }}>{s.text}</span>
          <div style={{ display:"flex",gap:"12px" }}>
            {["𝕏","in","▶"].map((icon,i)=>(
              <div key={i} style={{ width:"32px",height:"32px",borderRadius:"8px",background:"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",color:"rgba(255,255,255,0.5)",cursor:"pointer" }}>{icon}</div>
            ))}
          </div>
        </div>
      </footer>
    ),
  },
  {
    name: "Minimal Footer",
    key: "footer-links",
    defaults: { brand: "Buildify", text: "© 2025 Buildify. All rights reserved.", bgPrimary: false, bgColor: "#F8FAFC", textColor: "#0F172A" },
    render: (s, activeColor) => (
      <footer style={{ backgroundColor:s.bgPrimary?activeColor:s.bgColor,borderRadius:"16px",padding:"32px 48px" }}>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
          <div style={{ display:"flex",alignItems:"center",gap:"8px" }}>
            <div style={{ width:"24px",height:"24px",borderRadius:"6px",background:`linear-gradient(135deg, ${activeColor}, #7C3AED)`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"10px",color:"#fff" }}>B</div>
            <span style={{ fontWeight:700,fontSize:"15px",color:s.bgPrimary?"#fff":s.textColor }}>{s.brand}</span>
          </div>
          <div style={{ display:"flex",gap:"28px" }}>
            {["About","Features","Pricing","Contact"].map((l)=>(
              <span key={l} style={{ fontSize:"13px",fontWeight:500,color:s.bgPrimary?"rgba(255,255,255,0.7)":"#64748B",cursor:"pointer" }}>{l}</span>
            ))}
          </div>
          <span style={{ fontSize:"12px",color:s.bgPrimary?"rgba(255,255,255,0.5)":"#94A3B8" }}>{s.text}</span>
        </div>
      </footer>
    ),
  },
  {
    name: "Social Footer",
    key: "footer-social",
    defaults: { brand: "Buildify", text: "© 2025 Buildify. All rights reserved.", tagline: "Building better tools for designers.", bgPrimary: true, bgColor: "#0F172A", textColor: "#ffffff" },
    render: (s, activeColor) => (
      <footer style={{
        background: s.bgPrimary ? `linear-gradient(135deg, ${activeColor}, #7C3AED)` : s.bgColor,
        borderRadius: "16px", padding: "48px", textAlign: "center",
      }}>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"12px" }}>
          <div style={{ width:"32px",height:"32px",borderRadius:"8px",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"14px",color:"#fff" }}>B</div>
          <span style={{ color:s.textColor,fontWeight:700,fontSize:"18px" }}>{s.brand}</span>
        </div>
        <p style={{ color:"rgba(255,255,255,0.6)",fontSize:"14px",marginBottom:"24px" }}>{s.tagline}</p>
        <div style={{ display:"flex",gap:"10px",justifyContent:"center",marginBottom:"28px" }}>
          {[
            { name:"Twitter",icon:"𝕏" },
            { name:"LinkedIn",icon:"in" },
            { name:"GitHub",icon:"<>" },
            { name:"YouTube",icon:"▶" },
          ].map((scl)=>(
            <div key={scl.name} style={{ width:"40px",height:"40px",borderRadius:"10px",background:"rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",color:"rgba(255,255,255,0.8)",cursor:"pointer",border:"1px solid rgba(255,255,255,0.1)" }}>{scl.icon}</div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:"20px" }}>
          <span style={{ fontSize:"12px",color:"rgba(255,255,255,0.4)" }}>{s.text}</span>
        </div>
      </footer>
    ),
  },
];
