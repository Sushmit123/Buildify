// src/components/blocks/BlogBlocks.js
export const BlogBlocks = [
  {
    name: "Blog Grid",
    key: "blog-grid",
    defaults: { title: "Latest from the Blog", textColor: "#0F172A", bgPrimary: false, bgColor: "#ffffff" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor:s.bgPrimary?activeColor:s.bgColor,borderRadius:"16px",padding:"60px 48px" }}>
        <h3 style={{ fontSize:"28px",fontWeight:800,color:s.bgPrimary?"#fff":s.textColor,letterSpacing:"-0.02em",marginBottom:"32px",textAlign:"center" }}>{s.title}</h3>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px" }}>
          {[
            { tag:"Design",title:"Design tips for fast prototypes",excerpt:"How to iterate quickly and ship efficiently with modern tools.",gradient:`linear-gradient(135deg, ${activeColor}22, #7C3AED22)`,tagColor:activeColor },
            { tag:"Engineering",title:"Component-driven development",excerpt:"Why reusable components make teams faster and code cleaner.",gradient:"linear-gradient(135deg, #06B6D422, #3B82F622)",tagColor:"#3B82F6" },
            { tag:"Strategy",title:"Scaling your design system",excerpt:"Practical advice on managing consistency as your product grows.",gradient:"linear-gradient(135deg, #F59E0B22, #EF444422)",tagColor:"#F59E0B" },
          ].map((p)=>(
            <article key={p.title} style={{ borderRadius:"14px",background:"#FAFBFC",border:"1px solid #F1F5F9",overflow:"hidden" }}>
              <div style={{ height:"140px",background:p.gradient,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <div style={{ width:"48px",height:"48px",borderRadius:"12px",background:"rgba(255,255,255,0.6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px" }}>📝</div>
              </div>
              <div style={{ padding:"20px" }}>
                <span style={{ display:"inline-block",padding:"3px 10px",borderRadius:"6px",fontSize:"11px",fontWeight:600,color:p.tagColor,background:`${p.tagColor}15`,marginBottom:"10px" }}>{p.tag}</span>
                <h4 style={{ fontSize:"16px",fontWeight:700,color:"#0F172A",marginBottom:"6px",lineHeight:1.3 }}>{p.title}</h4>
                <p style={{ fontSize:"13px",color:"#64748B",lineHeight:1.6,marginBottom:"12px" }}>{p.excerpt}</p>
                <span style={{ fontSize:"13px",fontWeight:600,color:activeColor,cursor:"pointer" }}>Read more →</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    ),
  },
  {
    name: "Blog List",
    key: "blog-list",
    defaults: { title: "Recent Articles", textColor: "#0F172A", bgPrimary: false, bgColor: "#F8FAFC" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor:s.bgPrimary?activeColor:s.bgColor,borderRadius:"16px",padding:"48px" }}>
        <h3 style={{ fontSize:"28px",fontWeight:800,color:s.bgPrimary?"#fff":s.textColor,letterSpacing:"-0.02em",marginBottom:"28px" }}>{s.title}</h3>
        <div style={{ display:"flex",flexDirection:"column",gap:"12px" }}>
          {[
            { title:"10 UI mistakes designers still make",excerpt:"Common pitfalls to avoid when crafting modern interfaces.",date:"Apr 28" },
            { title:"How AI is changing creative workflows",excerpt:"Exploring the future of design in the artificial intelligence era.",date:"Apr 22" },
            { title:"From Figma to React: best practices",excerpt:"Turn your design files into clean, responsive components.",date:"Apr 15" },
          ].map((p)=>(
            <div key={p.title} style={{ padding:"20px 24px",borderRadius:"12px",background:"#fff",border:"1px solid #F1F5F9",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"20px" }}>
              <div style={{ flex:1 }}>
                <h4 style={{ fontSize:"15px",fontWeight:700,color:"#0F172A",marginBottom:"4px" }}>{p.title}</h4>
                <p style={{ fontSize:"13px",color:"#64748B",lineHeight:1.5 }}>{p.excerpt}</p>
              </div>
              <div style={{ display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"8px",flexShrink:0 }}>
                <span style={{ fontSize:"12px",color:"#94A3B8",fontWeight:500 }}>{p.date}</span>
                <span style={{ fontSize:"12px",fontWeight:600,color:activeColor,cursor:"pointer" }}>Read →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    ),
  },
  {
    name: "Blog Cards",
    key: "blog-with-images",
    defaults: { title: "From Our Journal", textColor: "#0F172A", bgPrimary: false, bgColor: "#ffffff" },
    render: (s, activeColor) => (
      <section style={{ backgroundColor:s.bgPrimary?activeColor:s.bgColor,borderRadius:"16px",padding:"60px 48px" }}>
        <div style={{ textAlign:"center",marginBottom:"40px" }}>
          <h3 style={{ fontSize:"28px",fontWeight:800,color:s.bgPrimary?"#fff":s.textColor,letterSpacing:"-0.02em",marginBottom:"6px" }}>{s.title}</h3>
          <p style={{ fontSize:"15px",color:"#64748B" }}>Stories, tips, and insights from our team</p>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px" }}>
          {[
            { title:"Modern Web Design Principles",excerpt:"Clean layouts, accessible typography, and visual balance.",color:`linear-gradient(135deg, #818CF8, ${activeColor})`,mins:"5 min" },
            { title:"Crafting a Design System",excerpt:"Steps to unify your brand across all digital products.",color:"linear-gradient(135deg, #34D399, #06B6D4)",mins:"8 min" },
            { title:"Optimizing UX for Growth",excerpt:"Small design tweaks that lead to better engagement.",color:"linear-gradient(135deg, #FBBF24, #F97316)",mins:"4 min" },
          ].map((p)=>(
            <article key={p.title} style={{ borderRadius:"14px",overflow:"hidden",background:"#fff",border:"1px solid #F1F5F9",boxShadow:"0 1px 3px rgba(0,0,0,0.04)" }}>
              <div style={{ height:"140px",background:p.color,display:"flex",alignItems:"flex-end",padding:"16px" }}>
                <span style={{ padding:"4px 10px",borderRadius:"6px",background:"rgba(255,255,255,0.2)",backdropFilter:"blur(4px)",color:"#fff",fontSize:"11px",fontWeight:600 }}>{p.mins} read</span>
              </div>
              <div style={{ padding:"20px" }}>
                <h4 style={{ fontSize:"16px",fontWeight:700,color:"#0F172A",marginBottom:"6px",lineHeight:1.3 }}>{p.title}</h4>
                <p style={{ fontSize:"13px",color:"#64748B",lineHeight:1.6,marginBottom:"12px" }}>{p.excerpt}</p>
                <span style={{ fontSize:"13px",fontWeight:600,color:activeColor,cursor:"pointer" }}>Read more →</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    ),
  },
];
