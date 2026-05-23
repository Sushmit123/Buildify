import { useRef, useState, useEffect } from "react";
import { toPng } from "html-to-image";
import { Rnd } from "react-rnd";

import { NavbarBlocks } from "../components/Blocks/NavbarBlocks";
import { HeroBlocks } from "../components/Blocks/HeroBlocks";
import { FooterBlocks } from "../components/Blocks/FooterBlocks";
import { ContentBlocks } from "../components/Blocks/ContentBlocks";
import { SliderBlocks } from "../components/Blocks/SliderBlocks";
import { FormBlocks } from "../components/Blocks/FormBlocks";
import { ReviewsBlocks } from "../components/Blocks/ReviewBlocks";
import { CtaBlocks } from "../components/Blocks/CtaBlocks";
import { BlogBlocks } from "../components/Blocks/BlogBlocks";

export default function Canvas() {
  const canvasRef = useRef(null);
  const [projectName, setProjectName] = useState("My Project");
  const [blocks, setBlocks] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [activeColor, setActiveColor] = useState("#3b82f6");
  const [selectedBlockId, setSelectedBlockId] = useState(null);
  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const [canvasBgColor, setCanvasBgColor] = useState("#ffffff");
  const [canvasBgImage, setCanvasBgImage] = useState(null);
  const [canvasHeight, setCanvasHeight] = useState(2000);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [inspectorOpen, setInspectorOpen] = useState(true);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Undo/Redo functionality
  const saveToHistory = (newBlocks) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newBlocks);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setBlocks(newBlocks);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setBlocks(history[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setBlocks(history[historyIndex + 1]);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === "z") {
          e.preventDefault();
          undo();
        } else if (e.key === "y") {
          e.preventDefault();
          redo();
        } else if (e.key === "s") {
          e.preventDefault();
          saveProject();
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [history, historyIndex]);

  // Save/Load project
  const saveProject = () => {
    const projectData = {
      name: projectName,
      blocks,
      shapes,
      bgColor: canvasBgColor,
      bgImage: canvasBgImage,
      primaryColor: activeColor,
      canvasHeight,
    };
    localStorage.setItem(
      `buildify_project_${projectName}`,
      JSON.stringify(projectData)
    );
    alert("✅ Project saved!");
  };

  const makeBlock = (key, defaults = {}) => ({
    id: Date.now() + Math.random(),
    key,
    settings: { x: 0, y: 0, w: "100%", h: "auto", ...defaults },
  });

  const components = {
    navbar: NavbarBlocks,
    hero: HeroBlocks,
    content: ContentBlocks,
    slider: SliderBlocks,
    form: FormBlocks,
    review: ReviewsBlocks,
    cta: CtaBlocks,
    blog: BlogBlocks,
    footer: FooterBlocks,
  };

  const findCompByKey = (key) => {
    for (const cat of Object.values(components)) {
      for (const c of cat) if (c.key === key) return c;
    }
    return null;
  };

  const addBlock = (comp) => {
    const block = makeBlock(comp.key, { ...comp.defaults });
    const newBlocks = [...blocks, block];
    saveToHistory(newBlocks);
    setSelectedBlockId(block.id);
  };

  const updateBlockSettings = (id, patch) => {
    const newBlocks = blocks.map((b) =>
      b.id === id ? { ...b, settings: { ...b.settings, ...patch } } : b
    );
    setBlocks(newBlocks);
  };

  const deleteBlock = (id) => {
    const newBlocks = blocks.filter((b) => b.id !== id);
    saveToHistory(newBlocks);
    setSelectedBlockId(null);
  };

  const moveBlockUp = (id) => {
    const index = blocks.findIndex((b) => b.id === id);
    if (index > 0) {
      const newBlocks = [...blocks];
      [newBlocks[index], newBlocks[index - 1]] = [
        newBlocks[index - 1],
        newBlocks[index],
      ];
      saveToHistory(newBlocks);
    }
  };

  const moveBlockDown = (id) => {
    const index = blocks.findIndex((b) => b.id === id);
    if (index < blocks.length - 1) {
      const newBlocks = [...blocks];
      [newBlocks[index], newBlocks[index + 1]] = [
        newBlocks[index + 1],
        newBlocks[index],
      ];
      saveToHistory(newBlocks);
    }
  };

  const duplicateBlock = (id) => {
    const block = blocks.find((b) => b.id === id);
    if (block) {
      const clone = { ...block, id: Date.now() + Math.random() };
      const newBlocks = [...blocks, clone];
      saveToHistory(newBlocks);
    }
  };

  const setBlockImageFromFile = (id, file) => {
    const reader = new FileReader();
    reader.onload = (e) =>
      updateBlockSettings(id, { imageSrc: e.target.result });
    reader.readAsDataURL(file);
  };

  // Shapes
  const addShape = (shapeType) => {
    setShapes((s) => [
      ...s,
      {
        id: Date.now() + Math.random(),
        shape: shapeType,
        color: activeColor,
        x: 50,
        y: 50,
        w: 120,
        h: 80,
      },
    ]);
  };

  const updateShape = (id, patch) => {
    setShapes((prev) =>
      prev.map((sh) => (sh.id === id ? { ...sh, ...patch } : sh))
    );
  };

  const deleteShape = (id) => {
    setShapes((prev) => prev.filter((sh) => sh.id !== id));
    if (selectedShapeId === id) setSelectedShapeId(null);
  };

  const duplicateShape = (id) => {
    const sh = shapes.find((s) => s.id === id);
    if (!sh) return;
    const clone = {
      ...sh,
      id: Date.now() + Math.random(),
      x: sh.x + 20,
      y: sh.y + 20,
    };
    setShapes((prev) => [...prev, clone]);
  };

  const setCanvasBgImageFromFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => setCanvasBgImage(e.target.result);
    reader.readAsDataURL(file);
  };

  const downloadPNG = async () => {
    if (!canvasRef.current) return;
    try {
      // Create a temporary element to avoid CORS issues
      const tempCanvas = canvasRef.current.cloneNode(true);

      // Remove all external images to prevent CORS errors
      const images = tempCanvas.querySelectorAll("img");
      images.forEach((img) => {
        img.crossOrigin = "anonymous";
        // Optionally remove external images
        if (img.src && !img.src.startsWith("data:")) {
          img.style.display = "none";
        }
      });

      const dataUrl = await toPng(tempCanvas, {
        cacheBust: true,
        allowTaint: true,
        useCORS: false,
        pixelRatio: 2,
        quality: 1,
        backgroundColor: "#ffffff",
      });

      const link = document.createElement("a");
      link.download = `${projectName}.png`;
      link.href = dataUrl;
      link.click();
      alert("✅ PNG exported successfully!");
    } catch (error) {
      console.error("Failed to export PNG:", error);
      alert(
        "⚠️ Export failed. Try:\n1. Removing external images\n2. Using local image uploads instead\n3. Reducing canvas size"
      );
    }
  };

  const RenderShapeSVG = ({ s }) => {
    const { w, h, color, shape } = s;
    const commonProps = {
      width: "100%",
      height: "100%",
      viewBox: `0 0 ${w} ${h}`,
      preserveAspectRatio: "none",
    };

    if (shape === "rect") {
      return (
        <svg {...commonProps}>
          <rect x="0" y="0" width={w} height={h} fill={color} />
        </svg>
      );
    }
    if (shape === "circle") {
      const r = Math.min(w, h) / 2;
      return (
        <svg {...commonProps}>
          <circle cx={w / 2} cy={h / 2} r={r} fill={color} />
        </svg>
      );
    }
    if (shape === "ellipse") {
      return (
        <svg {...commonProps}>
          <ellipse cx={w / 2} cy={h / 2} rx={w / 2} ry={h / 2} fill={color} />
        </svg>
      );
    }
    if (shape === "triangle") {
      return (
        <svg {...commonProps}>
          <polygon points={`${w / 2},0 0,${h} ${w},${h}`} fill={color} />
        </svg>
      );
    }
    if (shape === "line") {
      return (
        <svg {...commonProps}>
          <line
            x1="0"
            y1={h / 2}
            x2={w}
            y2={h / 2}
            stroke={color}
            strokeWidth={Math.max(2, Math.min(w, h) / 8)}
            strokeLinecap="round"
          />
        </svg>
      );
    }
    return (
      <svg {...commonProps}>
        <rect x="0" y="0" width={w} height={h} fill={color} />
      </svg>
    );
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Top Toolbar */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 p-3 flex justify-between items-center z-50 shadow-lg">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">🎨 Buildify</h1>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="bg-gray-700 text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Project name"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={undo}
            disabled={historyIndex <= 0}
            className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
            title="Ctrl+Z"
          >
            ↶
          </button>
          <button
            onClick={redo}
            disabled={historyIndex >= history.length - 1}
            className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
            title="Ctrl+Y"
          >
            ↷
          </button>
          <div className="w-px h-6 bg-gray-600"></div>
          <button
            onClick={saveProject}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
            title="Ctrl+S"
          >
            💾 Save
          </button>
          <button
            onClick={downloadPNG}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            📥 Export PNG
          </button>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Left Sidebar */}
      {sidebarOpen && (
        <div className="w-80 bg-gray-800 border-r border-gray-700 p-4 overflow-y-auto mt-16">
          <h2 className="text-lg font-bold mb-4">🛠️ Components</h2>

          <div className="mb-4">
            <label className="text-sm font-semibold">Primary Color</label>
            <input
              type="color"
              value={activeColor}
              onChange={(e) => setActiveColor(e.target.value)}
              className="w-full h-10 rounded mt-2 cursor-pointer"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-semibold">Quick Colors</label>
            <div className="grid grid-cols-6 gap-2 mt-2">
              {[
                "#3b82f6",
                "#ef4444",
                "#22c55e",
                "#facc15",
                "#a855f7",
                "#14b8a6",
              ].map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveColor(c)}
                  style={{ backgroundColor: c }}
                  className="w-8 h-8 rounded-lg border-2 border-gray-600 hover:border-gray-400"
                />
              ))}
            </div>
          </div>

          <div className="border-t border-gray-600 pt-4 mb-4">
            <p className="font-semibold mb-2">Shapes</p>
            <div className="flex flex-wrap gap-2">
              {[
                { type: "rect", label: "▭" },
                { type: "circle", label: "●" },
                { type: "ellipse", label: "◯" },
                { type: "triangle", label: "▲" },
                { type: "line", label: "─" },
              ].map((s) => (
                <button
                  key={s.type}
                  onClick={() => addShape(s.type)}
                  className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-600 pt-4">
            <p className="font-semibold mb-2">Canvas Settings</p>
            <div className="space-y-3">
              <div>
                <label className="text-xs">Background Color</label>
                <input
                  type="color"
                  value={canvasBgColor}
                  onChange={(e) => setCanvasBgColor(e.target.value)}
                  className="w-full h-8 rounded mt-1"
                />
              </div>
              <div>
                <label className="text-xs">Background Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full mt-1 text-xs"
                  onChange={(e) => {
                    const file = e.target.files && e.target.files[0];
                    if (file) setCanvasBgImageFromFile(file);
                  }}
                />
              </div>
              <div>
                <label className="text-xs">
                  Canvas Height: {canvasHeight}px
                </label>
                <input
                  type="range"
                  min={800}
                  max={6000}
                  step={100}
                  value={canvasHeight}
                  onChange={(e) => setCanvasHeight(Number(e.target.value))}
                  className="w-full mt-1"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-4 mt-4">
            {Object.entries(components).map(([category, comps]) => (
              <div key={category} className="mb-3">
                <h3 className="text-sm font-bold capitalize mb-2 text-blue-400">
                  📦 {category}
                </h3>
                <div className="space-y-1">
                  {comps.map((comp) => (
                    <button
                      key={comp.key}
                      onClick={() => addBlock(comp)}
                      className="block w-full text-left px-2 py-2 text-xs bg-gray-700 hover:bg-gray-600 rounded"
                    >
                      {comp.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Canvas Area */}
      <div className="flex-1 flex flex-col mt-16 overflow-auto bg-gray-700">
        <div
          ref={canvasRef}
          className="flex-1 p-6 mx-auto w-full"
          style={{
            backgroundColor: canvasBgColor,
            backgroundImage: canvasBgImage ? `url(${canvasBgImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="mx-auto rounded-lg shadow-2xl"
            style={{
              minHeight: `${canvasHeight}px`,
              maxWidth: "100%",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            {blocks.map((b) => {
              const comp = findCompByKey(b.key);
              return (
                <div
                  key={b.id}
                  onClick={() => {
                    setSelectedBlockId(b.id);
                    setSelectedShapeId(null);
                  }}
                  className={`mb-4 p-3 rounded border-2 transition relative z-10 ${
                    selectedBlockId === b.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {comp &&
                    comp.render(b.settings, activeColor, () => {
                      const input = document.createElement("input");
                      input.type = "file";
                      input.accept = "image/*";
                      input.onchange = (e) => {
                        const file = e.target.files && e.target.files[0];
                        if (file) setBlockImageFromFile(b.id, file);
                      };
                      input.click();
                    })}
                </div>
              );
            })}

            {shapes.map((s) => (
              <Rnd
                key={s.id}
                bounds="parent"
                default={{ x: s.x, y: s.y, width: s.w, height: s.h }}
                onDragStop={(e, d) => updateShape(s.id, { x: d.x, y: d.y })}
                onResizeStop={(e, dir, ref, delta, position) =>
                  updateShape(s.id, {
                    w: ref.offsetWidth,
                    h: ref.offsetHeight,
                    x: position.x,
                    y: position.y,
                  })
                }
              >
                <div
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    setSelectedShapeId(s.id);
                    setSelectedBlockId(null);
                  }}
                  className={`w-full h-full rounded ${
                    selectedShapeId === s.id ? "ring-2 ring-blue-500" : ""
                  }`}
                  style={{ cursor: "move", zIndex: 20 }}
                >
                  <RenderShapeSVG s={s} />
                </div>
              </Rnd>
            ))}
          </div>
        </div>
      </div>

      {/* Right Inspector */}
      {inspectorOpen && (
        <div className="w-96 bg-gray-800 border-l border-gray-700 p-4 overflow-y-auto mt-16">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">🔧 Inspector</h3>
            <button
              onClick={() => setInspectorOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {selectedShapeId ? (
            (() => {
              const shape = shapes.find((s) => s.id === selectedShapeId);
              if (!shape)
                return <div className="text-gray-400">Shape not found</div>;
              return (
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-blue-400">
                    Shape: {shape.shape}
                  </div>

                  <div>
                    <label className="text-xs font-semibold">Color</label>
                    <input
                      type="color"
                      className="w-full h-8 rounded mt-1"
                      value={shape.color}
                      onChange={(e) =>
                        updateShape(shape.id, { color: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs">X</label>
                      <input
                        type="number"
                        className="w-full p-2 bg-gray-700 rounded text-sm"
                        value={shape.x}
                        onChange={(e) =>
                          updateShape(shape.id, { x: Number(e.target.value) })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-xs">Y</label>
                      <input
                        type="number"
                        className="w-full p-2 bg-gray-700 rounded text-sm"
                        value={shape.y}
                        onChange={(e) =>
                          updateShape(shape.id, { y: Number(e.target.value) })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-xs">Width</label>
                      <input
                        type="number"
                        className="w-full p-2 bg-gray-700 rounded text-sm"
                        value={shape.w}
                        onChange={(e) =>
                          updateShape(shape.id, { w: Number(e.target.value) })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-xs">Height</label>
                      <input
                        type="number"
                        className="w-full p-2 bg-gray-700 rounded text-sm"
                        value={shape.h}
                        onChange={(e) =>
                          updateShape(shape.id, { h: Number(e.target.value) })
                        }
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="flex-1 px-3 py-2 bg-red-600 hover:bg-red-700 rounded text-sm"
                      onClick={() => deleteShape(shape.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="flex-1 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm"
                      onClick={() => duplicateShape(shape.id)}
                    >
                      Duplicate
                    </button>
                  </div>
                </div>
              );
            })()
          ) : selectedBlockId ? (
            (() => {
              const block = blocks.find((b) => b.id === selectedBlockId);
              if (!block)
                return <div className="text-gray-400">Block not found</div>;
              const comp = findCompByKey(block.key);
              if (!comp)
                return <div className="text-gray-400">Component not found</div>;
              const s = block.settings;
              return (
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-blue-400">
                    Component: {comp.name}
                  </div>

                  {/* Dynamic fields based on settings */}
                  {Object.entries(s).map(([key, value]) => {
                    if (typeof value === "string" && value.startsWith("#")) {
                      return (
                        <div key={key}>
                          <label className="text-xs font-semibold capitalize">
                            {key}
                          </label>
                          <input
                            type="color"
                            className="w-full h-8 rounded mt-1"
                            value={value}
                            onChange={(e) =>
                              updateBlockSettings(block.id, {
                                [key]: e.target.value,
                              })
                            }
                          />
                        </div>
                      );
                    }
                    if (typeof value === "string") {
                      return (
                        <div key={key}>
                          <label className="text-xs font-semibold capitalize">
                            {key}
                          </label>
                          <textarea
                            className="w-full p-2 bg-gray-700 rounded text-sm mt-1"
                            value={value}
                            onChange={(e) =>
                              updateBlockSettings(block.id, {
                                [key]: e.target.value,
                              })
                            }
                            rows={2}
                          />
                        </div>
                      );
                    }
                    return null;
                  })}

                  {/* Image upload */}
                  {"imageSrc" in s && (
                    <div>
                      <label className="text-xs font-semibold">
                        Upload Image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        className="w-full mt-1 text-xs"
                        onChange={(e) => {
                          const file = e.target.files && e.target.files[0];
                          if (file) setBlockImageFromFile(block.id, file);
                        }}
                      />
                    </div>
                  )}

                  <div className="flex gap-2">
                    <button
                      className="flex-1 px-3 py-2 bg-red-600 hover:bg-red-700 rounded text-sm"
                      onClick={() => deleteBlock(block.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="flex-1 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm"
                      onClick={() => duplicateBlock(block.id)}
                    >
                      Duplicate
                    </button>
                  </div>

                  <div className="flex gap-1">
                    <button
                      className="flex-1 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs"
                      onClick={() => moveBlockUp(block.id)}
                    >
                      ↑ Up
                    </button>
                    <button
                      className="flex-1 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs"
                      onClick={() => moveBlockDown(block.id)}
                    >
                      ↓ Down
                    </button>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="text-gray-400 text-sm">
              Select a component or shape to edit
            </div>
          )}
        </div>
      )}
    </div>
  );
}
