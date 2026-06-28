import React from "react";

const Img = () => {
  return (
    <div className="w-full h-[66vh] bg-black flex items-center justify-center overflow-hidden">
      <video
        className="h-full w-auto object-contain"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dgfp5n7bn/video/upload/v1780216022/trophy_lrxgsy.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Img;
