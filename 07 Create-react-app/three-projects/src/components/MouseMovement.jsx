import React, { useEffect, useState } from "react";

export default function MouseMovement() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove)

    // return() => {
    //     window.removeEventListener("mousemove", handleMouseMove)	
    // }
  }, []);
  return <div>

    <h2>Mouse Position</h2>
    <p>`mouseX: {mousePosition.x} mouseY:{mousePosition.y}`</p>
  </div>;
}
