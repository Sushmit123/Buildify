import { useRef, useEffect } from "react";
import useBuilderStore from "../store/useBuilderStore";
import Toolbar from "../components/Toolbar";
import ComponentsSidebar from "../components/ComponentsSidebar";
import CanvasArea from "../components/CanvasArea";
import InspectorPanel from "../components/InspectorPanel";
import Toast from "../components/Toast";

export default function CanvasPage() {
  const canvasRef = useRef(null);
  const undo = useBuilderStore((s) => s.undo);
  const redo = useBuilderStore((s) => s.redo);
  const saveProject = useBuilderStore((s) => s.saveProject);
  const addToast = useBuilderStore((s) => s.addToast);
  const deselectAll = useBuilderStore((s) => s.deselectAll);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept when editing text inputs
      const tag = e.target.tagName;
      const isEditable = e.target.contentEditable === "true";
      if (
        (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || isEditable) &&
        !(e.ctrlKey || e.metaKey)
      ) {
        return;
      }

      if (e.ctrlKey || e.metaKey) {
        if (e.key === "z") {
          e.preventDefault();
          undo();
        } else if (e.key === "y") {
          e.preventDefault();
          redo();
        } else if (e.key === "s") {
          e.preventDefault();
          const ok = saveProject();
          if (ok) addToast("Project saved", "success");
        }
      }

      // Escape to deselect
      if (e.key === "Escape") {
        deselectAll();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undo, redo, saveProject, addToast, deselectAll]);

  return (
    <div
      className="flex flex-col h-screen"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      {/* Toolbar */}
      <Toolbar canvasRef={canvasRef} />

      {/* Main layout */}
      <div
        className="flex flex-1"
        style={{ marginTop: "52px", overflow: "hidden" }}
      >
        {/* Left sidebar */}
        <ComponentsSidebar />

        {/* Canvas */}
        <CanvasArea ref={canvasRef} />

        {/* Right inspector */}
        <InspectorPanel />
      </div>

      {/* Toast notifications */}
      <Toast />
    </div>
  );
}
