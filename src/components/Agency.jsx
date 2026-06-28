import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Agency() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        {
          scale: gsap.getProperty(sectionRef.current, "scale"),
        },
        {
          scale: 1.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",

            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        imgRef.current,
        {
          yPercent: 20,
          scale: 1.1,
          filter: "brightness(2) ",
        },
        {
          yPercent: -20,
          scale: 1,
          opacity: 0,
          filter: "brightness(3) ",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
      );

      gsap.to(overlayRef.current, {
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.fromTo(
        contentRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.85,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative scale-90 h-screen overflow-hidden bg-black"
    >
      <div
        ref={imgRef}
        className="absolute inset-0 h-full w-full overflow-hidden"
      >
        <img
          src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216022/about_zc10es.webp"
          alt="Agency"
          className=" w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div ref={overlayRef} className="absolute inset-0 bg-black opacity-60" />

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="agency-content relative z-10 flex h-screen items-center"
      >
        <div className="px-10 text-[#FFDCA8] md:px-24 lg:px-56">
          <p className="text-sm uppercase tracking-widest opacity-80">
            / The Agency
          </p>

          <h1 className="mt-6 text-4xl font-light leading-none md:text-7xl lg:text-8xl">
            We Provoke
            <br />
            What's Possible.
          </h1>

          <p className="mt-8 max-w-2xl text-lg opacity-90 md:text-xl">
            We're an award-winning strategic digital innovation agency.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Agency;
