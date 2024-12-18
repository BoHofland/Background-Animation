"use client";

import { useState, useEffect } from "react";

export default function BackgroundChanger() {
  const [currentGradient, setCurrentGradient] = useState(
    "from-black via-gray-900 via-blue-700 via-blue-600 to-blue-400"
  );
  const [nextGradient, setNextGradient] = useState("");
  const [isFading, setIsFading] = useState(false);

  const gradients = [
    "from-black via-gray-900 via-blue-700 via-blue-600 to-blue-400",
    "from-black via-gray-900 via-orange-700 via-orange-600 to-orange-400",
    "from-black via-gray-900 via-yellow-700 via-yellow-600 to-yellow-400",
    "from-black via-gray-900 via-purple-700 via-purple-600 to-purple-400",
    "from-black via-gray-900 via-green-700 via-green-600 to-green-400"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleGradientChange();
    }, 5000); // Wissel elke 5 seconden
    return () => clearInterval(interval); // Opruimen bij unmount
  }, []);

  const handleGradientChange = () => {
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    if (randomGradient === currentGradient) return; // Vermijd dezelfde gradient

    setNextGradient(randomGradient);
    setIsFading(true);

    setTimeout(() => {
      setCurrentGradient(randomGradient); // Maak de nieuwe kleur definitief
      setIsFading(false); // Beëindig fade-in
    }, 3050); // Fade-in duurt iets langer om conflicten te vermijden
  };

  const changeColor = () => {
    handleGradientChange();
  };

  return (
    <div className="h-screen w-screen relative">
      {/* Huidige achtergrondkleur */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${currentGradient} transition-opacity duration-500`}
        style={{
          zIndex: isFading ? 1 : 2,
        }}
      ></div>

      {/* Nieuwe achtergrondkleur die langzaam tevoorschijn komt */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${nextGradient}`}
        style={{
          zIndex: 2,
          opacity: isFading ? 1 : 0,
          transition: "opacity 3s ease-in-out",
        }}
      ></div>

      {/* Inhoud */}
      <div className="relative z-10 flex items-center justify-center h-full">
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
