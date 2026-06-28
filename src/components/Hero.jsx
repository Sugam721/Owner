import React, { useState } from "react";

function Hero() {
  const slides = [
    {
      id: "01",
      title: "Digital Agency",
      desc1: "Elevating Brands through",
      desc2: "Digital Innovation.",
      bg: "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780226402/bgv_pzlgkp.svg",
    },
    {
      id: "02",
      title: "Work-Fine Dine Club",
      desc1: "The World's most Exquisite",
      desc2: "dishes Digital Art.",
      bg: "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216021/02_ac2zkd.webp",
    },
    {
      id: "03",
      title: "Work-Capsll",
      desc1: "Share your Life Stories.",
      desc2: "Generationally.",
      bg: "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216021/03_epk45m.webp",
    },
    {
      id: "04",
      title: "Work-Karma Group",
      desc1: "Revamping Global",
      desc2: "Lifestyle Brand.",
      bg: "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216022/04_rytiqb.webp",
    },
    {
      id: "05",
      title: "Work-The Body Shop®",
      desc1: "Aesthetic Mobile",
      desc2: "Commerce Experience.",
      bg: "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216022/05_oylqik.webp",
    },
  ];

  const [index, setIndex] = useState(0);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundImage: `url(${slide.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content — flex column, space between top label and bottom controls */}
      <div className="relative z-10 flex h-full flex-col justify-between  px-25 py-75 lg:px-52 md:px-24">
        {/* Top: slide ID + title */}
        <div className="flex flex-row gap-12">
          <p className=" text-slate-400 tracking-wide text-sm lg:text-xl">
            / {slide.id}
          </p>
          <p className=" text-slate-400 tracking-wide text-sm lg:text-xl">
            / {slide.title}
          </p>
        </div>

        {/* Middle: main description */}
        <div className="space-y-4">
          <h1 className="text-slate-400 text-3xl tracking-wide lg:text-7xl md:text-5xl">
            {slide.desc1}
          </h1>
          <h1 className="text-slate-400 text-3xl tracking-wide lg:text-7xl md:text-5xl">
            {slide.desc2}
          </h1>
        </div>

        {/* Bottom: prev / next */}
        <div className="flex gap-8 px-12 py-55">
          <button
            onClick={prevSlide}
            className="text-white text-sm tracking-widest uppercase"
          >
            Prev
          </button>
          <p>/</p>
          <button
            onClick={nextSlide}
            className="text-white text-sm tracking-widest uppercase"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
