import { useState } from "react";
import logo from "../assets/logo2.png";
import bg from "../assets/bg.png";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      onLoginSuccess();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white shadow-2xl p-16">
        {/* Logo and Name side by side at top left */}
        <div className="flex items-center gap-4 mb-16 self-start">
          <img
            src={logo}
            alt="Buildify Logo"
            className="w-20 h-20 object-contain"
          />
          <h1 className="text-4xl font-bold text-gray-800">Buildify</h1>
        </div>

        {/* Form centered */}
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-8">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-gray-500 text-sm">Or</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Demo credentials:{" "}
              <span className="font-semibold">admin / admin</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div
        className="w-1/2 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay for better text visibility if needed */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      </div>
    </div>
  );
}
