import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Agency from "./components/Agency";
import Expertise from "./components/Expertise";
import Stories from "./components/Stories";
import Img from "./components/Img";
import CustomCursor from "./components/CustomCursor";
import Industry from "./components/Industry";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const sections = gsap.utils.toArray(".animate-section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        },
      );
    });

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <CustomCursor />

      <div className="bg-black text-white">
        <Navbar />

        {/* Hero */}
        <section className="fixed  z-0 inset-0 ">
          <Hero />
        </section>

        {/* Content starts after Hero */}
        <div className="relative z-10 mt-[100vh]  bg-black">
          <div className="animate-section">
            <Intro scrollY={scrollY} />
          </div>

          <div className="animate-section">
            <Agency scrollY={scrollY} />
          </div>

          <div className="animate-section">
            <Expertise />
          </div>

          <div className="animate-section">
            <div className="bg-[#AAAAAA] text-black">
              <Industry />
            </div>
            <div className=" bg-black text-white">
              <Img />
              <Stories />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
