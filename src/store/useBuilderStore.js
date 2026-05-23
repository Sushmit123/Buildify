import { create } from "zustand";

const STORAGE_KEY = "buildify_project_data";
const AUTO_SAVE_DELAY = 3000;

let autoSaveTimer = null;

const getInitialState = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      return {
        projectName: data.projectName || "My Project",
        blocks: data.blocks || [],
        textElements: data.textElements || [],
        canvasBgColor: data.canvasBgColor || "#ffffff",
        canvasBgImage: data.canvasBgImage || null,
        canvasHeight: data.canvasHeight || 2000,
        quickColor: data.quickColor || "#6366F1",
      };
    }
  } catch (e) {
    console.warn("Failed to load saved project:", e);
  }
  return {
    projectName: "My Project",
    blocks: [],
    textElements: [],
    canvasBgColor: "#ffffff",
    canvasBgImage: null,
    canvasHeight: 2000,
    quickColor: "#6366F1",
  };
};

const initialState = getInitialState();

const useBuilderStore = create((set, get) => ({
  // Project
  projectName: initialState.projectName,
  setProjectName: (name) => {
    set({ projectName: name });
    get()._scheduleAutoSave();
  },

  // Blocks
  blocks: initialState.blocks,
  selectedBlockId: null,

  addBlock: (comp) => {
    const block = {
      id: `block_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      key: comp.key,
      settings: { ...comp.defaults },
      widthPercent: 100,
    };
    const newBlocks = [...get().blocks, block];
    get()._pushHistory(newBlocks, get().textElements);
    set({ blocks: newBlocks, selectedBlockId: block.id, selectedTextId: null });
    get()._scheduleAutoSave();
  },

  updateBlockSettings: (id, patch) => {
    const newBlocks = get().blocks.map((b) =>
      b.id === id ? { ...b, settings: { ...b.settings, ...patch } } : b
    );
    set({ blocks: newBlocks });
    get()._scheduleAutoSave();
  },

  setBlockWidth: (id, widthPercent) => {
    const newBlocks = get().blocks.map((b) =>
      b.id === id ? { ...b, widthPercent } : b
    );
    set({ blocks: newBlocks });
    get()._scheduleAutoSave();
  },

  deleteBlock: (id) => {
    const newBlocks = get().blocks.filter((b) => b.id !== id);
    get()._pushHistory(newBlocks, get().textElements);
    set({ blocks: newBlocks, selectedBlockId: null });
    get()._scheduleAutoSave();
  },

  duplicateBlock: (id) => {
    const block = get().blocks.find((b) => b.id === id);
    if (!block) return;
    const clone = {
      ...block,
      id: `block_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      settings: { ...block.settings },
    };
    const idx = get().blocks.findIndex((b) => b.id === id);
    const newBlocks = [...get().blocks];
    newBlocks.splice(idx + 1, 0, clone);
    get()._pushHistory(newBlocks, get().textElements);
    set({ blocks: newBlocks });
    get()._scheduleAutoSave();
  },

  moveBlockUp: (id) => {
    const blocks = [...get().blocks];
    const idx = blocks.findIndex((b) => b.id === id);
    if (idx > 0) {
      [blocks[idx], blocks[idx - 1]] = [blocks[idx - 1], blocks[idx]];
      get()._pushHistory(blocks, get().textElements);
      set({ blocks });
      get()._scheduleAutoSave();
    }
  },

  moveBlockDown: (id) => {
    const blocks = [...get().blocks];
    const idx = blocks.findIndex((b) => b.id === id);
    if (idx < blocks.length - 1) {
      [blocks[idx], blocks[idx + 1]] = [blocks[idx + 1], blocks[idx]];
      get()._pushHistory(blocks, get().textElements);
      set({ blocks });
      get()._scheduleAutoSave();
    }
  },

  selectBlock: (id) => {
    set({ selectedBlockId: id, selectedTextId: null });
  },

  // Text Elements
  textElements: initialState.textElements,
  selectedTextId: null,
  isAddingText: false,

  setIsAddingText: (val) => set({ isAddingText: val }),

  addTextElement: (x, y) => {
    const textEl = {
      id: `text_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      content: "Click to edit",
      x,
      y,
      width: 200,
      height: 40,
      fontSize: 16,
      fontWeight: "400",
      fontStyle: "normal",
      textDecoration: "none",
      textAlign: "left",
      color: "#0F172A",
    };
    const newTexts = [...get().textElements, textEl];
    get()._pushHistory(get().blocks, newTexts);
    set({
      textElements: newTexts,
      selectedTextId: textEl.id,
      selectedBlockId: null,
      isAddingText: false,
    });
    get()._scheduleAutoSave();
  },

  updateTextElement: (id, patch) => {
    const newTexts = get().textElements.map((t) =>
      t.id === id ? { ...t, ...patch } : t
    );
    set({ textElements: newTexts });
    get()._scheduleAutoSave();
  },

  deleteTextElement: (id) => {
    const newTexts = get().textElements.filter((t) => t.id !== id);
    get()._pushHistory(get().blocks, newTexts);
    set({ textElements: newTexts, selectedTextId: null });
    get()._scheduleAutoSave();
  },

  duplicateTextElement: (id) => {
    const el = get().textElements.find((t) => t.id === id);
    if (!el) return;
    const clone = {
      ...el,
      id: `text_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      x: el.x + 20,
      y: el.y + 20,
    };
    const newTexts = [...get().textElements, clone];
    get()._pushHistory(get().blocks, newTexts);
    set({ textElements: newTexts });
    get()._scheduleAutoSave();
  },

  selectText: (id) => {
    set({ selectedTextId: id, selectedBlockId: null });
  },

  // Canvas Settings
  canvasBgColor: initialState.canvasBgColor,
  canvasBgImage: initialState.canvasBgImage,
  canvasHeight: initialState.canvasHeight,

  setCanvasBgColor: (color) => {
    set({ canvasBgColor: color });
    get()._scheduleAutoSave();
  },
  setCanvasBgImage: (img) => {
    set({ canvasBgImage: img });
    get()._scheduleAutoSave();
  },
  setCanvasHeight: (h) => {
    set({ canvasHeight: h });
    get()._scheduleAutoSave();
  },

  // Quick Color
  quickColor: initialState.quickColor,
  setQuickColor: (color) => {
    set({ quickColor: color });
    get()._scheduleAutoSave();
  },

  // Mobile Preview
  isMobilePreview: false,
  toggleMobilePreview: () => set((s) => ({ isMobilePreview: !s.isMobilePreview })),

  // Undo/Redo
  history: [],
  historyIndex: -1,

  _pushHistory: (blocks, textElements) => {
    const { history, historyIndex } = get();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({
      blocks: JSON.parse(JSON.stringify(blocks)),
      textElements: JSON.parse(JSON.stringify(textElements)),
    });
    // Keep max 50 history entries
    if (newHistory.length > 50) newHistory.shift();
    set({ history: newHistory, historyIndex: newHistory.length - 1 });
  },

  undo: () => {
    const { history, historyIndex } = get();
    if (historyIndex > 0) {
      const prev = history[historyIndex - 1];
      set({
        blocks: prev.blocks,
        textElements: prev.textElements,
        historyIndex: historyIndex - 1,
        selectedBlockId: null,
        selectedTextId: null,
      });
      get()._scheduleAutoSave();
    }
  },

  redo: () => {
    const { history, historyIndex } = get();
    if (historyIndex < history.length - 1) {
      const next = history[historyIndex + 1];
      set({
        blocks: next.blocks,
        textElements: next.textElements,
        historyIndex: historyIndex + 1,
        selectedBlockId: null,
        selectedTextId: null,
      });
      get()._scheduleAutoSave();
    }
  },

  // Save/Load
  saveProject: () => {
    const state = get();
    const data = {
      projectName: state.projectName,
      blocks: state.blocks,
      textElements: state.textElements,
      canvasBgColor: state.canvasBgColor,
      canvasBgImage: state.canvasBgImage,
      canvasHeight: state.canvasHeight,
      quickColor: state.quickColor,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error("Failed to save:", e);
      return false;
    }
  },

  _scheduleAutoSave: () => {
    if (autoSaveTimer) clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
      get().saveProject();
    }, AUTO_SAVE_DELAY);
  },

  // Reset
  resetCanvas: () => {
    set({
      projectName: "My Project",
      blocks: [],
      textElements: [],
      selectedBlockId: null,
      selectedTextId: null,
      canvasBgColor: "#ffffff",
      canvasBgImage: null,
      canvasHeight: 2000,
      quickColor: "#6366F1",
      history: [],
      historyIndex: -1,
      isMobilePreview: false,
      isAddingText: false,
    });
    localStorage.removeItem(STORAGE_KEY);
  },

  // Deselect all
  deselectAll: () => {
    set({ selectedBlockId: null, selectedTextId: null });
  },

  // Toast state
  toasts: [],
  addToast: (message, type = "success") => {
    const id = Date.now();
    set((s) => ({ toasts: [...s.toasts, { id, message, type }] }));
    setTimeout(() => {
      set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }));
    }, 3000);
  },
}));

export default useBuilderStore;
