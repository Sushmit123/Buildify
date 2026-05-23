import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoadingScreen from "./pages/LoadingScreen";
import CanvasPage from "./pages/CanvasPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/canvas" element={<CanvasPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
