export default function ConfirmModal({ title, message, onConfirm, onCancel }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 0.2s ease-out",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onCancel}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(15, 23, 42, 0.5)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />

      {/* Modal Card */}
      <div
        style={{
          position: "relative",
          width: "440px",
          maxWidth: "90vw",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.06)",
          animation: "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Gradient header bar */}
        <div
          style={{
            height: "4px",
            background: "linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)",
          }}
        />

        {/* Content */}
        <div style={{ padding: "32px 32px 28px" }}>
          {/* Icon */}
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #EEF2FF, #E0E7FF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6366F1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="12" x2="12" y2="18" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
          </div>

          {/* Title */}
          <h3
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: 700,
              color: "#0F172A",
              letterSpacing: "-0.02em",
              marginBottom: "8px",
            }}
          >
            {title || "Create New Design"}
          </h3>

          {/* Message */}
          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
              color: "#64748B",
              lineHeight: 1.7,
              maxWidth: "340px",
              margin: "0 auto",
            }}
          >
            {message || "This will clear your current canvas. Make sure to save your work first."}
          </p>
        </div>

        {/* Buttons */}
        <div
          style={{
            padding: "0 32px 28px",
            display: "flex",
            gap: "12px",
          }}
        >
          <button
            onClick={onCancel}
            style={{
              flex: 1,
              padding: "12px 20px",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              backgroundColor: "#F1F5F9",
              color: "#475569",
              border: "1px solid #E2E8F0",
              transition: "all 0.2s ease",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#E2E8F0";
              e.target.style.borderColor = "#CBD5E1";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#F1F5F9";
              e.target.style.borderColor = "#E2E8F0";
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              flex: 1,
              padding: "12px 20px",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              background: "linear-gradient(135deg, #6366F1, #7C3AED)",
              color: "#ffffff",
              border: "none",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 14px rgba(99, 102, 241, 0.35)",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = "0 6px 20px rgba(99, 102, 241, 0.45)";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = "0 4px 14px rgba(99, 102, 241, 0.35)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Yes, create new
          </button>
        </div>

        {/* Subtle footer note */}
        <div
          style={{
            padding: "12px 32px",
            backgroundColor: "#F8FAFC",
            borderTop: "1px solid #F1F5F9",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              color: "#94A3B8",
              fontWeight: 500,
            }}
          >
            💡 Tip: Press Ctrl+S to save before creating a new design
          </span>
        </div>
      </div>
    </div>
  );
}
