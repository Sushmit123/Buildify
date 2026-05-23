// src/components/blocks/ReviewBlocks.js
export const ReviewsBlocks = [
  {
    name: "Review Cards",
    key: "reviews-simple",
    defaults: { title: "What customers say", bgPrimary: false, bgColor: "#ffffff", textColor: "#0F172A" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor:s.bgPrimary?activeColor:s.bgColor,borderRadius:"16px",padding:"48px" }}>
        <h3 style={{ fontSize:"28px",fontWeight:800,color:s.bgPrimary?"#fff":s.textColor,letterSpacing:"-0.02em",marginBottom:"32px",textAlign:"center" }}>{s.title}</h3>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px" }}>
          {[
            { name:"Asha M.",text:"Amazing tool — shipped our MVP in days!",rating:5,initials:"AM",color:"#EDE9FE" },
            { name:"Ravi K.",text:"Simple, powerful, and beautifully designed.",rating:5,initials:"RK",color:"#DBEAFE" },
            { name:"Priya S.",text:"Our team productivity doubled overnight.",rating:4,initials:"PS",color:"#FEF3C7" },
            { name:"Dev P.",text:"The best builder I've ever used. Period.",rating:5,initials:"DP",color:"#D1FAE5" },
          ].map((r)=>(
            <div key={r.name} style={{ padding:"24px",borderRadius:"14px",background:s.bgPrimary?"rgba(255,255,255,0.1)":"#F8FAFC",border:s.bgPrimary?"1px solid rgba(255,255,255,0.1)":"1px solid #F1F5F9" }}>
              <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px" }}>
                <div style={{ width:"40px",height:"40px",borderRadius:"10px",background:r.color,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"13px",color:"#475569" }}>{r.initials}</div>
                <div>
                  <div style={{ fontWeight:700,fontSize:"14px",color:s.bgPrimary?"#fff":"#0F172A" }}>{r.name}</div>
                  <div style={{ color:"#F59E0B",fontSize:"12px",letterSpacing:"2px" }}>{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</div>
                </div>
              </div>
              <p style={{ fontSize:"14px",color:s.bgPrimary?"rgba(255,255,255,0.8)":"#475569",lineHeight:1.6,fontStyle:"italic" }}>"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>
    ),
  },
  {
    name: "Testimonial Grid",
    key: "reviews-grid",
    defaults: { title: "Loved by creators", subtitle: "See what our users are saying.", bgPrimary: false, bgColor: "#F8FAFC", textColor: "#0F172A" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor:s.bgPrimary?activeColor:s.bgColor,borderRadius:"16px",padding:"60px 48px",textAlign:"center" }}>
        <h3 style={{ fontSize:"28px",fontWeight:800,color:s.bgPrimary?"#fff":s.textColor,letterSpacing:"-0.02em",marginBottom:"6px" }}>{s.title}</h3>
        <p style={{ fontSize:"15px",color:s.bgPrimary?"rgba(255,255,255,0.7)":"#64748B",marginBottom:"40px" }}>{s.subtitle}</p>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px" }}>
          {[
            { name:"Sneha R.",text:"The drag-and-drop editor is a game changer!",role:"Designer",initials:"SR",color:"#EDE9FE" },
            { name:"Vikram T.",text:"Built my first landing page in 10 minutes flat.",role:"Founder",initials:"VT",color:"#DBEAFE" },
            { name:"Neha G.",text:"Intuitive and gorgeous — can't stop using it!",role:"Developer",initials:"NG",color:"#FEF3C7" },
          ].map((r)=>(
            <div key={r.name} style={{ padding:"28px",borderRadius:"14px",background:"#fff",border:"1px solid #F1F5F9",boxShadow:"0 1px 3px rgba(0,0,0,0.04)",textAlign:"center" }}>
              <div style={{ width:"48px",height:"48px",borderRadius:"50%",background:r.color,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"14px",color:"#475569",margin:"0 auto 16px" }}>{r.initials}</div>
              <div style={{ color:"#F59E0B",fontSize:"13px",marginBottom:"12px",letterSpacing:"2px" }}>★★★★★</div>
              <p style={{ fontSize:"14px",color:"#475569",lineHeight:1.6,fontStyle:"italic",marginBottom:"16px" }}>"{r.text}"</p>
              <div style={{ fontWeight:700,fontSize:"14px",color:"#0F172A" }}>{r.name}</div>
              <div style={{ fontSize:"12px",color:"#94A3B8" }}>{r.role}</div>
            </div>
          ))}
        </div>
      </section>
    ),
  },
  {
    name: "Featured Review",
    key: "reviews-highlight",
    defaults: { title: "Our users love Buildify", bgPrimary: false, bgColor: "#ffffff", textColor: "#0F172A" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor:s.bgPrimary?activeColor:s.bgColor,borderRadius:"16px",padding:"60px 48px",textAlign:"center" }}>
        <div style={{ maxWidth:"600px",margin:"0 auto" }}>
          <div style={{ width:"56px",height:"56px",borderRadius:"50%",background:`${activeColor}22`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"18px",color:activeColor,margin:"0 auto 20px" }}>KS</div>
          <div style={{ color:"#F59E0B",fontSize:"16px",marginBottom:"16px",letterSpacing:"3px" }}>★★★★★</div>
          <h3 style={{ fontSize:"24px",fontWeight:800,color:s.bgPrimary?"#fff":s.textColor,letterSpacing:"-0.02em",marginBottom:"16px" }}>{s.title}</h3>
          <p style={{ fontSize:"17px",color:s.bgPrimary?"rgba(255,255,255,0.8)":"#475569",lineHeight:1.7,fontStyle:"italic",marginBottom:"20px" }}>"I've used many tools, but Buildify's workflow is the fastest and most intuitive. Absolutely recommend it to every designer!"</p>
          <div style={{ fontWeight:700,color:s.bgPrimary?"#fff":"#0F172A",fontSize:"15px" }}>Karan Shah</div>
          <div style={{ fontSize:"13px",color:s.bgPrimary?"rgba(255,255,255,0.6)":"#94A3B8" }}>Lead Product Designer</div>
        </div>
      </section>
    ),
  },
];
