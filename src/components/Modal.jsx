import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ onSave, onCancel }) {
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (projectName.trim()) {
      onSave(projectName);
      navigate("/canvas"); // later you’ll add this screen
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Create New Project</h2>
        <input
          type="text"
          placeholder="Project Name"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
