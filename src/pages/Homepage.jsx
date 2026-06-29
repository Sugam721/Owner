import React, { useEffect, useRef } from "react";
import About from "./About";
import Details from "./Details";
import Center from "./Center";
import Mid from "./Mid";
import AfterMid from "./AfterMid";

const Homepage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let start = null;
    const duration = 6000;
    const pauseAt = 1;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) % (duration + pauseAt * 1000);
      const progress = Math.min(elapsed / duration, 1);

      const maxScroll = el.scrollHeight - el.clientHeight;
      el.scrollTop = progress * maxScroll;

      if (elapsed > duration) {
        el.scrollTop = 0;
        start = timestamp;
      }

      requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-white font-[STKBureauSans]">
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        {/* Rating */}
        <div className="mt-8 flex items-center justify-center gap-2 font-sans">
          <span className="text-lg font-bold text-[#2C2C2C]">4.8</span>
          <span className="text-lg tracking-wide">★★★★★</span>
          <span className="text-sm text-gray-500">across 1,000+ reviews</span>
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-[#2C2C2C] md:text-7xl">
          We help restaurants grow direct sales and become the
          <span> no. 1 choice </span>
          in your area
        </h1>

        {/* STACKED IMAGE GROUP — was max-w-3xl h-130, now full width and tall */}
        <div
          className="relative mx-auto flex w-full max-w-6xl items-center justify-center"
          style={{ height: "780px", marginTop: "4rem" }}
        >
          {/* Background panel */}
          <img
            src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634882/69c1abb2034d5fe05a10dc2a_dc5cd79dd360ef682eced16d1932dd49_cta-bg_npjcb6.avif"
            alt="background"
            style={{ borderRadius: "2.5rem" }}
            className="absolute left-1/2 top-1/2 z-0 h-[88%] w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          />

          {/* Phone shell */}
          <div className="relative z-10 h-full">
            {/* Phone bezel */}
            <img
              src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634886/screen_m5usj2.avif"
              alt="mobile"
              className="relative z-20 h-full w-auto pointer-events-none"
            />

            {/* Status bar */}
            <img
              src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634880/69b9330c8b70142e4e5f8089_phone-status_ja2jbb.svg"
              alt=""
              width={220}
              className="absolute left-1/2 top-6 z-30 -translate-x-1/2 pointer-events-none"
            />

            {/* Scrollable screen content */}
            <div
              ref={scrollRef}
              className="absolute z-10"
              style={{
                top: "3.5%",
                left: "6.5%",
                right: "6.5%",
                bottom: "3.5%",
                borderRadius: "2.8rem",
                overflow: "hidden",
              }}
            >
              <img
                src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634884/69e0ab67eb24ced53e361424_45a254c070a56b26063b0911e102722b_phone-grader-ui_xm7yzo.avif"
                alt="score"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <About />
        <Details />
        <Center />
        <Mid />
        <AfterMid />
      </section>
    </div>
  );
};

export default Homepage;
