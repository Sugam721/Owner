import React from "react";

const Intro = ({ scrollY = 0 }) => {
  const rotation = scrollY * 0.1;

  return (
    <div className="bg-black h-screen flex flex-col justify-between text-[#dfdeca] overflow-hidden">
      <div className="px-12 pt-32 lg:pt-52 lg:px-80 md:px-40">
        <h1 className="text-sm lg:text-xl md:text-xl">/Introduction</h1>
        <br />
        <h2 className="text-3xl font-light lg:text-6xl md:text-5xl lg:pt-6">
          Accelerating Global
        </h2>
        <h2 className="text-3xl font-light lg:text-6xl md:text-5xl">
          Brands - Years ahead.
        </h2>
        <br />
        <h2 className="text-lg lg:pt-10 lg:text-2xl">
          We are a world-class team of industry-
        </h2>
        <h2 className="text-lg lg:text-2xl">
          leading professionals, who constantly push
        </h2>
        <h2 className="text-lg lg:text-2xl">new technology to its limits.</h2>
      </div>

      <img
        src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216024/ornament_msrbzj.svg"
        className="h-34 px-12 mb-12 self-start lg:self-end lg:mr-90 lg:mb-24"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.1s linear",
        }}
        alt="Ornament"
      />
    </div>
  );
};

export default Intro;
