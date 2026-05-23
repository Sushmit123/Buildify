import { useState } from "react";
import { toPng } from "html-to-image";
import useBuilderStore from "../store/useBuilderStore";
import ConfirmModal from "./ConfirmModal";

export default function Toolbar({ canvasRef }) {
  const [showNewModal, setShowNewModal] = useState(false);

  const projectName = useBuilderStore((s) => s.projectName);
  const setProjectName = useBuilderStore((s) => s.setProjectName);
  const saveProject = useBuilderStore((s) => s.saveProject);
  const resetCanvas = useBuilderStore((s) => s.resetCanvas);
  const undo = useBuilderStore((s) => s.undo);
  const redo = useBuilderStore((s) => s.redo);
  const historyIndex = useBuilderStore((s) => s.historyIndex);
  const historyLength = useBuilderStore((s) => s.history.length);
  const isMobilePreview = useBuilderStore((s) => s.isMobilePreview);
  const toggleMobilePreview = useBuilderStore((s) => s.toggleMobilePreview);
  const addToast = useBuilderStore((s) => s.addToast);

  const handleSave = () => {
    const ok = saveProject();
    if (ok) {
      addToast("Project saved successfully", "success");
    } else {
      addToast("Failed to save project", "error");
    }
  };

  const handleExportPNG = async () => {
    if (!canvasRef?.current) {
      addToast("Canvas not found", "error");
      return;
    }
    try {
      addToast("Preparing export...", "info");

      // Pre-convert all external images to data URIs to avoid CORS
      const images = canvasRef.current.querySelectorAll("img");
      const originalSrcs = [];
      for (const img of images) {
        originalSrcs.push({ img, src: img.src });
        if (img.src && !img.src.startsWith("data:")) {
          try {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth || 400;
            canvas.height = img.naturalHeight || 300;
            const ctx = canvas.getContext("2d");
            // Draw a gradient placeholder instead of the external image
            const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            grd.addColorStop(0, "#E0E7FF");
            grd.addColorStop(1, "#C7D2FE");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#6366F1";
            ctx.font = "16px Inter, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("Image", canvas.width / 2, canvas.height / 2);
            img.src = canvas.toDataURL("image/png");
          } catch (e) {
            // Hide image if conversion fails
            img.style.visibility = "hidden";
          }
        }
      }

      const dataUrl = await toPng(canvasRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        quality: 1,
        backgroundColor: "#ffffff",
        filter: (node) => {
          if (node.dataset && node.dataset.excludeExport) return false;
          return true;
        },
      });

      // Restore original image sources
      for (const { img, src } of originalSrcs) {
        img.src = src;
        img.style.visibility = "";
      }

      const link = document.createElement("a");
      link.download = `${projectName || "buildify-design"}.png`;
      link.href = dataUrl;
      link.click();
      addToast("PNG exported successfully!", "success");
    } catch (error) {
      console.error("Export failed:", error);
      addToast("Export failed. Try reducing canvas size.", "error");
    }
  };

  const handleExportHTML = () => {
    if (!canvasRef?.current) {
      addToast("Canvas not found", "error");
      return;
    }
    try {
      const canvasHTML = canvasRef.current.innerHTML;
      const htmlDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${projectName || "Buildify Design"}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, sans-serif; -webkit-font-smoothing: antialiased; }
  </style>
</head>
<body>
${canvasHTML}
</body>
</html>`;
      const blob = new Blob([htmlDoc], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = `${projectName || "buildify-design"}.html`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
      addToast("HTML exported successfully!", "success");
    } catch (error) {
      console.error("HTML export failed:", error);
      addToast("HTML export failed", "error");
    }
  };

  const handleNewDesign = () => {
    setShowNewModal(true);
  };

  const confirmNewDesign = () => {
    resetCanvas();
    setShowNewModal(false);
    addToast("New design created", "success");
  };

  const btnBase = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.15s ease",
    border: "1px solid transparent",
    backgroundColor: "transparent",
    color: "#475569",
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          height: "52px",
          padding: "0 16px",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        {/* Left section */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: "30px",
                height: "30px",
                background: "linear-gradient(135deg, #6366F1, #4F46E5)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 40 40" fill="none">
                <rect x="4" y="4" width="14" height="14" rx="3" fill="white" opacity="0.9" />
                <rect x="22" y="4" width="14" height="8" rx="3" fill="white" opacity="0.7" />
                <rect x="4" y="22" width="14" height="8" rx="3" fill="white" opacity="0.7" />
                <rect x="22" y="16" width="14" height="14" rx="3" fill="white" opacity="0.9" />
              </svg>
            </div>
            <span
              className="font-semibold text-sm"
              style={{ color: "#0F172A", letterSpacing: "-0.01em" }}
            >
              Buildify
            </span>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "24px", backgroundColor: "#E2E8F0" }} />

          {/* Project name */}
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="focus-ring"
            style={{
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 500,
              color: "#0F172A",
              border: "1px solid transparent",
              backgroundColor: "transparent",
              width: "180px",
              transition: "all 0.15s ease",
              outline: "none",
            }}
            onFocus={(e) => {
              e.target.style.backgroundColor = "#F1F5F9";
              e.target.style.borderColor = "#E2E8F0";
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.borderColor = "transparent";
            }}
          />
        </div>

        {/* Center section */}
        <div className="flex items-center gap-1">
          {/* Undo */}
          <button
            onClick={undo}
            disabled={historyIndex <= 0}
            style={{
              ...btnBase,
              opacity: historyIndex <= 0 ? 0.4 : 1,
              cursor: historyIndex <= 0 ? "not-allowed" : "pointer",
            }}
            onMouseEnter={(e) => {
              if (historyIndex > 0) e.target.style.backgroundColor = "#F1F5F9";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
            title="Undo (Ctrl+Z)"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7v6h6" /><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6.69 3L3 13" />
            </svg>
          </button>

          {/* Redo */}
          <button
            onClick={redo}
            disabled={historyIndex >= historyLength - 1}
            style={{
              ...btnBase,
              opacity: historyIndex >= historyLength - 1 ? 0.4 : 1,
              cursor: historyIndex >= historyLength - 1 ? "not-allowed" : "pointer",
            }}
            onMouseEnter={(e) => {
              if (historyIndex < historyLength - 1) e.target.style.backgroundColor = "#F1F5F9";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
            title="Redo (Ctrl+Y)"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 7v6h-6" /><path d="M3 17a9 9 0 019-9 9 9 0 016.69 3L21 13" />
            </svg>
          </button>

          <div style={{ width: "1px", height: "20px", backgroundColor: "#E2E8F0", margin: "0 4px" }} />

          {/* Save */}
          <button
            onClick={handleSave}
            style={{
              ...btnBase,
              backgroundColor: "#F0FDF4",
              color: "#166534",
              border: "1px solid #BBF7D0",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#DCFCE7";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#F0FDF4";
            }}
            title="Save (Ctrl+S)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
            Save
          </button>

          {/* New Design */}
          <button
            onClick={handleNewDesign}
            style={{
              ...btnBase,
              backgroundColor: "#EEF2FF",
              color: "#4338CA",
              border: "1px solid #C7D2FE",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#E0E7FF";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#EEF2FF";
            }}
            title="New Design"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New
          </button>

          {/* Export PNG */}
          <button
            onClick={handleExportPNG}
            style={{
              ...btnBase,
              backgroundColor: "#6366F1",
              color: "#FFFFFF",
              border: "1px solid #6366F1",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#4F46E5";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#6366F1";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export PNG
          </button>

          {/* Export HTML */}
          <button
            onClick={handleExportHTML}
            style={{
              ...btnBase,
              backgroundColor: "#F0FDF4",
              color: "#166534",
              border: "1px solid #BBF7D0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#DCFCE7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#F0FDF4";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Export HTML
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          {/* Mobile preview toggle */}
          <button
            onClick={toggleMobilePreview}
            style={{
              ...btnBase,
              backgroundColor: isMobilePreview ? "#EEF2FF" : "transparent",
              color: isMobilePreview ? "#4338CA" : "#475569",
              border: isMobilePreview ? "1px solid #C7D2FE" : "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              if (!isMobilePreview) e.target.style.backgroundColor = "#F1F5F9";
            }}
            onMouseLeave={(e) => {
              if (!isMobilePreview) e.target.style.backgroundColor = "transparent";
            }}
            title="Toggle Mobile Preview"
          >
            {isMobilePreview ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            )}
            {isMobilePreview ? "Mobile" : "Desktop"}
          </button>
        </div>
      </div>

      {/* New Design confirmation modal */}
      {showNewModal && (
        <ConfirmModal
          title="Create New Design"
          message="Do you want to create a new design? This will clear your current canvas. Make sure to save your work first."
          onConfirm={confirmNewDesign}
          onCancel={() => setShowNewModal(false)}
        />
      )}
    </>
  );
}
