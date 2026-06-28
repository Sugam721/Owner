import React, { useState } from "react";

const Industry = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.1"
        className="bg-[#AAAAAA] h-150 lg:h-252.5"
      >
        <h1 className="px-12 pt-16 lg:text-xl lg:px-64 lg:pt-36 ">
          /Industry Recognition
        </h1>

        <div className="px-12 pt-5 text-2xl lg:text-6xl  lg:px-64 lg:pt-12 ">
          <h1>Nominated as Agency of</h1>
          <h1>the Year amongst best</h1>
          <h1>Digital Agencies</h1>
          <h1>Worldwide.</h1>
        </div>
        <div className=" grid grid-cols gap-4 ">
          <div className="px-12 pt-5 lg:px-64 lg:text-2xl lg:w-8/12 lg:pt-24">
            We're passionate about doing the best digital
            <br />
            innovation we can and pushing new
            <br />
            technology to its limits. And we achieve
            <br />
            results we're proud of.
          </div>
        </div>

        <div className="pt-7 px-10 lg:pl-265 lg:pt-0.5 ">
          <img
            src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216022/badge_izb5fn.png"
            alt="img"
            className="h-12 lg:h-16 "
          />
        </div>
      </div>
    </>
  );
};

export default Industry;
