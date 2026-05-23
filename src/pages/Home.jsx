import { useState } from "react";
import Modal from "../components/Modal";
import logo from "../assets/logo1.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSaveProject = (name) => {
    setProjects([...projects, { name }]);
    setShowModal(false);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10" />
            <h2 className="text-2xl font-bold">Buildify</h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
              👤
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-3 gap-6">
          <div
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center border-2 border-dashed border-gray-400 rounded-2xl h-40 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <span className="text-5xl font-light">+</span>
          </div>

          {projects.map((project, i) => (
            <div
              key={i}
              className="border rounded-2xl p-6 bg-white dark:bg-gray-800 shadow"
            >
              <h3 className="font-semibold text-lg">{project.name}</h3>
            </div>
          ))}
        </div>

        {showModal && (
          <Modal
            onSave={handleSaveProject}
            onCancel={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}
