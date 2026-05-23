import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Check if returning user
  useEffect(() => {
    const hasSavedProject = localStorage.getItem("buildify_project_data");
    if (hasSavedProject) {
      setShowSkip(true);
    }
  }, []);

  // Progress animation — 20 seconds
  useEffect(() => {
    const duration = 20000;
    const interval = 50;
    const step = (100 / duration) * interval;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, interval);
    return () => clearInterval(timer);
  }, []);

  // Navigate when progress completes
  useEffect(() => {
    if (progress >= 100) {
      setFadeOut(true);
      setTimeout(() => navigate("/canvas"), 600);
    }
  }, [progress, navigate]);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => navigate("/canvas"), 400);
  };

  return (
    <div
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease-out",
      }}
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #f8fafc 0%, #eef2ff 25%, #f8fafc 50%, #e0e7ff 75%, #f8fafc 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 8s ease infinite",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              background: `linear-gradient(135deg, ${
                ["#c7d2fe", "#ddd6fe", "#bfdbfe", "#a5b4fc", "#e0e7ff", "#c4b5fd"][i]
              }, transparent)`,
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div
          className="mb-8"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          <div
            className="flex items-center justify-center rounded-2xl"
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #6366F1, #4F46E5)",
              boxShadow: "0 8px 32px rgba(99, 102, 241, 0.3)",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4" width="14" height="14" rx="3" fill="white" opacity="0.9" />
              <rect x="22" y="4" width="14" height="8" rx="3" fill="white" opacity="0.7" />
              <rect x="4" y="22" width="14" height="8" rx="3" fill="white" opacity="0.7" />
              <rect x="22" y="16" width="14" height="14" rx="3" fill="white" opacity="0.9" />
              <rect x="4" y="34" width="32" height="4" rx="2" fill="white" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* Brand name */}
        <h1
          className="text-4xl font-bold mb-2"
          style={{
            color: "#0F172A",
            letterSpacing: "-0.02em",
            animation: "slideInUp 0.8s ease-out",
          }}
        >
          Buildify
        </h1>
        <p
          className="text-base mb-12"
          style={{
            color: "#64748B",
            animation: "slideInUp 0.8s ease-out 0.2s both",
          }}
        >
          Preparing your workspace
          <span className="inline-flex ml-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="inline-block w-1 h-1 rounded-full mx-0.5"
                style={{
                  backgroundColor: "#64748B",
                  animation: "dotPulse 1.4s infinite ease-in-out",
                  animationDelay: `${i * 0.16}s`,
                }}
              />
            ))}
          </span>
        </p>

        {/* Progress bar */}
        <div
          className="relative overflow-hidden rounded-full"
          style={{
            width: "280px",
            height: "4px",
            backgroundColor: "#E2E8F0",
            animation: "slideInUp 0.8s ease-out 0.4s both",
          }}
        >
          <div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #6366F1, #818CF8)",
              transition: "width 0.1s linear",
            }}
          />
          {/* Shimmer effect */}
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2s infinite",
            }}
          />
        </div>

        {/* Progress percentage */}
        <p
          className="mt-4 text-xs font-medium"
          style={{
            color: "#94A3B8",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {Math.round(progress)}%
        </p>

        {/* Skip button for returning users */}
        {showSkip && (
          <button
            onClick={handleSkip}
            className="mt-8 px-5 py-2 rounded-lg text-sm font-medium cursor-pointer"
            style={{
              color: "#6366F1",
              backgroundColor: "transparent",
              border: "1px solid #E2E8F0",
              transition: "all 0.2s ease",
              animation: "fadeIn 1s ease-out 2s both",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#EEF2FF";
              e.target.style.borderColor = "#C7D2FE";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.borderColor = "#E2E8F0";
            }}
          >
            Skip to workspace →
          </button>
        )}
      </div>
    </div>
  );
}
