"use client";

import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Real mouse position
  const [follower, setFollower] = useState({ x: 0, y: 0 }); // Delayed follower

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setFollower((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1, // lagging effect
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window === "undefined") return
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Fast moving small dot (real cursor) */}
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: "6px",
          height: "6px",
          backgroundColor: "darkblue",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 10000,
        }}
      ></div>

      {/* Lagging outer circle */}
      <div
        style={{
          position: "fixed",
          top: follower.y,
          left: follower.x,
          width: "40px",
          height: "40px",
          border: "2px solid darkblue",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
