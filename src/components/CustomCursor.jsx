import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const hoverTargets = document.querySelectorAll("a, button");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => setHover(true));
      el.addEventListener("mouseleave", () => setHover(false));
    });

    const animate = () => {
      // smooth follow (LERP)
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;

      if (dotRef.current && ringRef.current) {
        // CENTERED DOT
        dotRef.current.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`;

        // CENTERED RING
        ringRef.current.style.transform = `translate(${pos.current.x - 18}px, ${pos.current.y - 18}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 bg-cyan-400 rounded-full pointer-events-none"
      />

      {/* outer ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border transition-[width,height,border] duration-200
          ${hover ? "w-14 h-14 border-purple-400" : "w-9 h-9 border-cyan-400"}
        `}
        style={{
          boxShadow: "0 0 30px rgba(34,211,238,0.6)",
        }}
      />
    </>
  );
};

export default CustomCursor;
