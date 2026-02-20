"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }

      if (ringRef.current) {
        ringRef.current.animate(
          {
            transform: `translate(${clientX}px, ${clientY}px)`,
          },
          {
            duration: 300,
            fill: "forwards",
          }
        );
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"
      />

      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </>
  );
}