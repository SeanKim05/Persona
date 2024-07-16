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
    <>
      {isHovered && (
        <div
          className="fixed pointer-events-none text-sm text-red-500"
          style={{
            top: `${position.y + 10}px`,
            left: `${position.x + 10}px`,
          }}
        >
          click
        </div>
      )}
    </>
  );
}
