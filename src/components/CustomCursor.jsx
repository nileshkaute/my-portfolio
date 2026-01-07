import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // 1. The Main Crosshair (Instant)
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });

      // 2. The Fluid Follower (Elastic Lag)
      gsap.to(followerRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const handleHoverEnter = (e) => {
      const isLink = e.target.closest("a, button, .hover-target");
      if (isLink) {
        // Morph the follower into a wide rectangle lens
        gsap.to(followerRef.current, {
          width: 100,
          height: 40,
          borderRadius: "4px",
          backgroundColor: "rgba(194, 65, 12, 0.2)",
          duration: 0.3,
        });
        gsap.to(labelRef.current, { opacity: 1, y: -20, duration: 0.2 });
      }
    };

    const handleHoverLeave = () => {
      gsap.to(followerRef.current, {
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "transparent",
        duration: 0.3,
      });
      gsap.to(labelRef.current, { opacity: 0, y: 0, duration: 0.2 });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHoverEnter);
    window.addEventListener("mouseout", handleHoverLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverEnter);
      window.removeEventListener("mouseout", handleHoverLeave);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[99999]">
      {/* 1. Technical Crosshair */}
      <div ref={cursorRef} className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-6 h-6">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-orange-600/60"></div>
            {/* Vertical Line */}
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-orange-600/60"></div>
            {/* Center Dot */}
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* 2. Fluid Follower (The Lens) */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-5 h-5 border border-orange-500/30 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
        style={{ boxShadow: "0 0 20px rgba(194, 65, 12, 0.2)" }}
      >
        {/* Floating Tooltip Label */}
        <span 
          ref={labelRef} 
          className="absolute opacity-0 text-[8px] font-mono text-orange-500 uppercase tracking-widest whitespace-nowrap"
        >
          View Project
        </span>
      </div>
    </div>
  );
};

export default CustomCursor;