"use client";

import { useState, useEffect } from "react";

export default function BackgroundChanger() {
  const [gradient, setGradient] = useState("from-black via-gray-900 via-blue-700 via-blue-600 to-blue-400");

  const gradients = [
    "from-black via-gray-900 via-blue-700 via-blue-600 to-blue-400", // Correct gespeld
    "from-black via-gray-900 via-red-700 via-red-600 to-red-400",
    "from-black via-gray-900 via-green-700 via-green-600 to-green-400",
    "from-black via-gray-900 via-purple-700 via-purple-600 to-purple-400",
    "from-black via-gray-900 via-yellow-700 via-yellow-600 to-yellow-400",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
      setGradient(randomGradient);
    }, 3000); // Wissel elke 3 seconden
    return () => clearInterval(interval); // Opruimen bij unmount
  }, []);

  const changeColor = () => {
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    setGradient(randomGradient);
  };

  return (
    <div
      className={`h-screen w-screen bg-gradient-to-r ${gradient} transition-all duration-500`}
      style={{ backgroundSize: "300%" }} // Breidt het kleurverloop verder uit
    >
      <div className="flex items-center justify-center h-full">
        <button
          onClick={changeColor}
          className="px-4 py-2 bg-white text-black rounded-md shadow-md"
        >
          Verander achtergrondkleur
        </button>
      </div>
    </div>
  );
}
