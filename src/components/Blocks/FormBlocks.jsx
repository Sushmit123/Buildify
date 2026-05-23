// src/components/blocks/FormBlocks.js
export const FormBlocks = [
  {
    name: "Contact Form",
    key: "form-simple",
    defaults: { title: "Get in touch", buttonText: "Send Message", bgPrimary: false, bgColor: "#ffffff", textColor: "#0F172A" },
    render: (s, activeColor) => {
      const inp = { width:"100%",padding:"12px 16px",borderRadius:"10px",border:"1px solid #E2E8F0",backgroundColor:"#F8FAFC",fontSize:"14px",color:"#334155",outline:"none",fontFamily:"inherit",boxSizing:"border-box" };
      return (
        <section style={{ backgroundColor: s.bgPrimary ? activeColor : s.bgColor, borderRadius:"16px", padding:"48px" }}>
          <div style={{ maxWidth:"540px", margin:"0 auto" }}>
            <h3 style={{ fontSize:"28px",fontWeight:800,color:s.bgPrimary?"#fff":s.textColor,letterSpacing:"-0.02em",marginBottom:"8px" }}>{s.title}</h3>
            <p style={{ fontSize:"14px",color:s.bgPrimary?"rgba(255,255,255,0.7)":"#64748B",marginBottom:"28px" }}>We'll get back to you within 24 hours.</p>
            <form onSubmit={(e)=>e.preventDefault()} style={{ display:"flex",flexDirection:"column",gap:"14px" }}>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px" }}>
                <input style={inp} placeholder="First name" />
                <input style={inp} placeholder="Last name" />
              </div>
              <input style={inp} placeholder="Email address" type="email" />
              <textarea style={{ ...inp,resize:"vertical",minHeight:"100px",fontFamily:"inherit" }} placeholder="Your message..." rows={4} />
              <button style={{ padding:"13px 28px",borderRadius:"10px",border:"none",background:s.bgPrimary?"#fff":`linear-gradient(135deg, ${activeColor}, #7C3AED)`,color:s.bgPrimary?activeColor:"#fff",fontWeight:700,fontSize:"14px",cursor:"pointer",fontFamily:"inherit" }}>{s.buttonText}</button>
            </form>
          </div>
        </section>
      );
    },
  },
  {
    name: "Split Form",
    key: "form-split",
    defaults: { title: "Let's work together", subtitle: "Tell us about your project.", buttonText: "Send", bgPrimary: false, bgColor: "#F8FAFC", textColor: "#0F172A" },
    render: (s, activeColor) => {
      const inp = { width:"100%",padding:"12px 16px",borderRadius:"10px",border:"1px solid #E2E8F0",backgroundColor:"#fff",fontSize:"14px",color:"#334155",outline:"none",fontFamily:"inherit",boxSizing:"border-box" };
      return (
        <section style={{ backgroundColor:s.bgPrimary?activeColor:s.bgColor,borderRadius:"16px",display:"grid",gridTemplateColumns:"1fr 1fr",overflow:"hidden" }}>
          <div style={{ padding:"48px" }}>
            <h3 style={{ fontSize:"28px",fontWeight:800,color:s.bgPrimary?"#fff":s.textColor,letterSpacing:"-0.02em",marginBottom:"8px" }}>{s.title}</h3>
            <p style={{ fontSize:"14px",color:s.bgPrimary?"rgba(255,255,255,0.7)":"#64748B",marginBottom:"28px" }}>{s.subtitle}</p>
            <form onSubmit={(e)=>e.preventDefault()} style={{ display:"flex",flexDirection:"column",gap:"12px" }}>
              <input style={inp} placeholder="Full name" />
              <input style={inp} placeholder="Email" type="email" />
              <textarea style={{ ...inp,resize:"vertical",minHeight:"80px",fontFamily:"inherit" }} placeholder="Message" rows={3} />
              <button style={{ padding:"12px 24px",borderRadius:"10px",border:"none",backgroundColor:activeColor,color:"#fff",fontWeight:700,fontSize:"14px",cursor:"pointer",fontFamily:"inherit" }}>{s.buttonText}</button>
            </form>
          </div>
          <div style={{ background:`linear-gradient(135deg, ${activeColor}, #7C3AED)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"48px" }}>
            <div style={{ width:"56px",height:"56px",borderRadius:"14px",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",marginBottom:"16px" }}>✉️</div>
            <h4 style={{ color:"#fff",fontSize:"18px",fontWeight:700,marginBottom:"6px" }}>Reach out anytime</h4>
            <p style={{ color:"rgba(255,255,255,0.7)",fontSize:"13px",textAlign:"center" }}>We respond within 2 hours.</p>
          </div>
        </section>
      );
    },
  },
  {
    name: "Newsletter",
    key: "form-card",
    defaults: { title: "Stay in the loop", subtitle: "Get the latest updates delivered to your inbox.", buttonText: "Subscribe", bgPrimary: false, bgColor: "#F8FAFC", textColor: "#0F172A" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor:s.bgPrimary?activeColor:s.bgColor,borderRadius:"16px",padding:"60px 48px",textAlign:"center" }}>
        <div style={{ maxWidth:"480px",margin:"0 auto" }}>
          <div style={{ width:"48px",height:"48px",borderRadius:"12px",background:`${activeColor}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",margin:"0 auto 16px" }}>📬</div>
          <h3 style={{ fontSize:"26px",fontWeight:800,color:s.bgPrimary?"#fff":s.textColor,marginBottom:"8px" }}>{s.title}</h3>
          <p style={{ fontSize:"14px",color:s.bgPrimary?"rgba(255,255,255,0.7)":"#64748B",marginBottom:"24px" }}>{s.subtitle}</p>
          <form onSubmit={(e)=>e.preventDefault()} style={{ display:"flex",gap:"10px" }}>
            <input style={{ flex:1,padding:"12px 16px",borderRadius:"10px",border:"1px solid #E2E8F0",backgroundColor:"#fff",fontSize:"14px",outline:"none",fontFamily:"inherit" }} placeholder="Enter your email" type="email" />
            <button style={{ padding:"12px 24px",borderRadius:"10px",border:"none",background:`linear-gradient(135deg, ${activeColor}, #7C3AED)`,color:"#fff",fontWeight:700,fontSize:"14px",cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap" }}>{s.buttonText}</button>
          </form>
          <p style={{ fontSize:"11px",color:"#94A3B8",marginTop:"12px" }}>No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    ),
  },
];
