import React from "react";

const Mid = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2
            className="
          text-4xl
          md:text-6xl
          font-bold
          leading-tight
          text-gray-900
          "
          >
            Give your restaurant the same tech
            <br />
            as the big brands
          </h2>
        </div>

        {/* Image */}

        <div
          className="
        rounded-[36px]
        bg-gray-50
        p-6
        overflow-hidden
        "
        >
          <img
            src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782667503/Screenshot_2026-06-28_at_23.09.17_zist1e.png"
            alt="Restaurant technology"
            className="
          w-full
          rounded-[28px]
          object-cover
          transition-all
          duration-500
          "
          />
        </div>
      </div>
    </section>
  );
};

export default Mid;
