import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const [cursorColor, setCursorColor] = useState("rgba(255,255,255,0.6)");
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    // Lerp ring
    const animate = () => {
      const lerp = 0.1;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * lerp;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    // Section hover detection
    const addSectionListeners = () => {
      const sections = document.querySelectorAll("[data-cursor]");
      sections.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const label = el.getAttribute("data-cursor-label") || "";
          const color =
            el.getAttribute("data-cursor-color") || "rgba(255,255,255,0.6)";
          const bg = el.getAttribute("data-cursor-bg") || "transparent";
          setCursorLabel(label);
          setCursorColor(color);
          setBgColor(bg);
          setIsHovering(true);
        });
        el.addEventListener("mouseleave", () => {
          setCursorLabel("");
          setCursorColor("rgba(255,255,255,0.6)");
          setBgColor("transparent");
          setIsHovering(false);
        });
      });

      // Regular links/buttons
      const interactives = document.querySelectorAll("a, button");
      interactives.forEach((el) => {
        if (!el.closest("[data-cursor]")) {
          el.addEventListener("mouseenter", () => setIsHovering(true));
          el.addEventListener("mouseleave", () => setIsHovering(false));
        }
      });
    };

    // Wait for DOM
    setTimeout(addSectionListeners, 500);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const ringSize = cursorLabel ? "100px" : isHovering ? "60px" : "36px";
  const ringMargin = cursorLabel ? "-50px" : isHovering ? "-30px" : "-18px";

  return (
    <>
      {/* OUTER RING */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-9999 flex items-center justify-center"
        style={{
          width: ringSize,
          height: ringSize,
          border: `1px solid ${cursorColor}`,
          borderRadius: "50%",
          marginLeft: ringMargin,
          marginTop: ringMargin,
          backgroundColor: bgColor,
          transition:
            "width 0.4s ease, height 0.4s ease, margin 0.4s ease, opacity 0.3s ease, background-color 0.4s ease, border-color 0.4s ease",
          opacity: isHidden ? 0 : 1,
        }}
      >
        {/* LABEL inside ring */}
        {cursorLabel && (
          <span
            style={{
              color: cursorColor,
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "Graphik, sans-serif",
              fontWeight: 400,
              transition: "opacity 0.3s ease",
              opacity: cursorLabel ? 1 : 0,
              whiteSpace: "nowrap",
            }}
          >
            {cursorLabel}
          </span>
        )}
      </div>

      {/* INNER DOT */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-9999"
        style={{
          width: cursorLabel ? "0px" : "5px",
          height: cursorLabel ? "0px" : "5px",
          backgroundColor: cursorLabel ? "transparent" : "white",
          borderRadius: "50%",
          marginLeft: cursorLabel ? "0px" : "-2.5px",
          marginTop: cursorLabel ? "0px" : "-2.5px",
          transition:
            "width 0.3s ease, height 0.3s ease, opacity 0.3s ease, background-color 0.3s ease",
          opacity: isHidden ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
