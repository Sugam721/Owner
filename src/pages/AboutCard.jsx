import React from "react";

const AboutCard = ({ image, amount, title, name, owner }) => {
  return (
    <div
      className="
      relative
      w-full
      h-115
      rounded-[20px]
      overflow-hidden
      group
    "
    >
      <img
        src={image}
        alt={owner}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition
          duration-500
          group-hover:scale-110
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-linear-to-t
        from-black/90
        via-black/40
        to-transparent
      "
      />

      <div
        className="
        absolute
        bottom-0
        p-8
        text-white
        z-10
      "
      >
        <h2 className="text-5xl font-bold leading-none">{amount}</h2>

        <p className="text-2xl text-gray-300 mt-2">{title}</p>

        <div className="mt-8 text-gray-300">
          <p className="text-base">{name}</p>

          <p className="text-sm text-gray-400">{owner}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
