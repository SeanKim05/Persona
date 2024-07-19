import { useState, useEffect } from "react";

export default function Cursor({ isHovered }: { isHovered: boolean }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor relative"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      {isHovered && (
        <div
          style={{
            top: 24,
            left: 24,
          }}
          className="absolute pointer-events-none text-sm text-white animate-fade-in"
        >
          Click
        </div>
      )}
    </div>
  );
}
