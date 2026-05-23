import useBuilderStore from "../store/useBuilderStore";

export default function Toast() {
  const toasts = useBuilderStore((s) => s.toasts);

  if (toasts.length === 0) return null;

  const icons = {
    success: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    error: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    warning: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    info: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  };

  const colors = {
    success: { bg: "#F0FDF4", border: "#DCFCE7", text: "#15803D", bar: "#22C55E" },
    error:   { bg: "#FEF2F2", border: "#FECACA", text: "#B91C1C", bar: "#EF4444" },
    warning: { bg: "#FFFBEB", border: "#FDE68A", text: "#92400E", bar: "#F59E0B" },
    info:    { bg: "#EEF2FF", border: "#C7D2FE", text: "#4338CA", bar: "#6366F1" },
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "64px",
        right: "20px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        pointerEvents: "none",
      }}
    >
      {toasts.map((toast) => {
        const c = colors[toast.type] || colors.info;
        return (
          <div
            key={toast.id}
            style={{
              pointerEvents: "auto",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              padding: "14px 18px",
              borderRadius: "14px",
              backgroundColor: "#ffffff",
              border: `1px solid ${c.border}`,
              boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
              minWidth: "300px",
              maxWidth: "400px",
              animation: "toastSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent bar on left */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "4px",
                backgroundColor: c.bar,
                borderRadius: "4px 0 0 4px",
              }}
            />

            {/* Icon container */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                backgroundColor: c.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {icons[toast.type] || icons.info}
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#0F172A",
                  marginBottom: "2px",
                  textTransform: "capitalize",
                }}
              >
                {toast.type}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#64748B",
                  lineHeight: 1.5,
                }}
              >
                {toast.message}
              </div>
            </div>

            {/* Progress bar */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "3px",
                backgroundColor: `${c.bar}15`,
              }}
            >
              <div
                style={{
                  height: "100%",
                  backgroundColor: c.bar,
                  borderRadius: "0 3px 3px 0",
                  animation: "progressFill 3s linear forwards",
                  transformOrigin: "left",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
