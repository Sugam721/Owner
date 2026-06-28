import React, { useRef, useCallback, useState, useEffect } from "react";

function Stories() {
  const stories = [
    {
      category: "Insight - Marketing",
      title: "Human—centric Brand & Marketing",
      img: "https://images.prismic.io/fleava/4b5693d3-a5f5-478f-97df-124696bb0449_human-centric-brand-marketing.webp?auto=compress,format",
      bg: "#1E2A2E",
      description: (
        <>
          Building an emotional connection <br />
          with customers is the core <br />
          principle of human-centered <br />
          design.
        </>
      ),
    },
    {
      category: "Insight - Technology",
      title: "Discover how No-Code Development changing the future of tech",
      img: "https://images.prismic.io/fleava/6d65cded-3176-48b4-811e-b872fce428c4_no-code-future-of-tech.jpg?auto=compress,format",
      bg: "#121212",
      description: (
        <>
          No-code platforms will be familiar <br />
          to anyone who is interested in the <br />
          future of software and how we will <br />
          interact with computers in a few <br />
          years. No-Code isn't only <br />
          something from the future; it's also <br />a thing right now.
        </>
      ),
    },
    {
      category: "News & Stories",
      title: "Fleava is nominated as the 2020 Agency of the Year on Awwwards",
      img: "https://images.prismic.io/fleava/e6312755-7a8d-4ad4-b903-1f1cfc5c1eec_agency-of-the-year-2020.webp?auto=compress,format",
      bg: "#0B1B2B",
      description: (
        <>
          Awwwards recognizes the talent <br />
          and effort of industry-leading web <br />
          professionals and agencies all <br />
          around the world. This year, Fleava <br />
          is nominated as the Agency of the <br />
          Year on their 2020 Annual Awards.
        </>
      ),
    },
  ];

  const [hoveredStory, setHoveredStory] = useState(null);

  const sectionRef = useRef(null);
  const previewRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const active = useRef(false);

  const onMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    mouse.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  // ✅ preview follows inside section only
  const trackPreview = useCallback(() => {
    if (!previewRef.current || !active.current || !sectionRef.current) return;

    const width = 280;
    const height = 180;
    const offset = 24;

    const rect = sectionRef.current.getBoundingClientRect();

    let x = mouse.current.x + offset;
    let y = mouse.current.y + offset;

    if (x + width > rect.width) {
      x = mouse.current.x - width - offset;
    }

    if (y + height > rect.height) {
      y = mouse.current.y - height - offset;
    }

    previewRef.current.style.left = `${x}px`;
    previewRef.current.style.top = `${y}px`;

    rafId.current = requestAnimationFrame(trackPreview);
  }, []);

  const onRowEnter = useCallback(
    (story) => {
      setHoveredStory(story);
      active.current = true;

      if (previewRef.current) {
        previewRef.current.style.opacity = "1";
        previewRef.current.style.transform = "scale(1) rotate(0deg)";
      }

      cancelAnimationFrame(rafId.current);
      trackPreview();
    },
    [trackPreview],
  );

  const onRowLeave = useCallback(() => {
    active.current = false;
    cancelAnimationFrame(rafId.current);

    if (previewRef.current) {
      previewRef.current.style.opacity = "0";
      previewRef.current.style.transform = "scale(.88) rotate(-2deg)";
    }
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-[#dfdeca] py-24 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: hoveredStory?.bg || "#000",
      }}
      onMouseMove={onMouseMove}
    >
      {/* Floating Preview (NOW INSIDE SECTION) */}
      <div
        ref={previewRef}
        className="absolute w-70 h-45 overflow-hidden pointer-events-none z-50 rounded-sm"
        style={{
          opacity: 0,
          top: 0,
          left: 0,
          transform: "scale(.88) rotate(-2deg)",
          transition:
            "opacity .3s cubic-bezier(.16,1,.3,1), transform .3s cubic-bezier(.16,1,.3,1)",
        }}
      >
        {hoveredStory && (
          <img
            key={hoveredStory.img}
            src={hoveredStory.img}
            alt={hoveredStory.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* CENTERED CONTENT */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-[#dfdeca]/40 mb-14">
          / Featured Stories
        </p>

        <div className="border-t border-white/10">
          {stories.map((story, index) => (
            <div
              key={index}
              className="grid md:grid-cols-12 gap-6 md:gap-8 py-10 border-b border-white/10 cursor-pointer group"
              onMouseEnter={() => onRowEnter(story)}
              onMouseLeave={onRowLeave}
            >
              <div className="md:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#dfdeca]/40">
                  {story.category}
                </p>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-light leading-tight transition-opacity duration-300 group-hover:opacity-50">
                  {story.title}
                </h3>
              </div>

              <div className="md:col-span-6">
                <p className="text-base md:text-lg leading-relaxed text-[#dfdeca]/65 group-hover:text-[#dfdeca]">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-light">
            <span>Explore the Journal</span>
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Stories;
