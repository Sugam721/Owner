import React, { useState } from "react";

const Expertise = () => {
  const [hovered, setHovered] = useState(null);

  const sections = [
    {
      id: "digital-strategy",
      title: "Digital Strategy",
      number: "01",
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216025/strategy_jvj5qs.jpg",
      bg: "bg-blue-200",
    },
    {
      id: "branding",
      title: "Branding",
      number: "02",
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216023/branding_gvwv6q.jpg",
      bg: "bg-green-200",
    },
    {
      id: "web-dev",
      title: "Web + App Development",
      number: "03",
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216023/development_kbfscd.jpg",
      bg: "bg-purple-200",
    },
    {
      id: "user-experience",
      title: "User Experience",
      number: "04",
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216022/ux_aaej3m.jpg",
      bg: "bg-yellow-100",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      number: "05",
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216024/marketing_oulaqy.jpg",
      bg: "bg-red-200",
    },
    {
      id: "media-production",
      title: "Media Production",
      number: "06",
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216025/production_ia0dvo.jpg",
      bg: "bg-indigo-200",
    },
  ];

  const Item = ({ item }) => (
    <span
      onMouseEnter={() => setHovered(item)}
      onMouseLeave={() => setHovered(null)}
      className="cursor-pointer transition-all duration-300 hover:text-white"
    >
      {item.title}
      <sup className="text-sm lg:text-xl ml-1 relative -top-5">
        {item.number}
      </sup>
    </span>
  );

  return (
    <section className="relative overflow-hidden bg-black text-[#e8e3d8] py-24">
      {/* Soft Background Color */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          hovered?.bg || "bg-black"
        } ${hovered ? "opacity-15" : "opacity-0"}`}
      />

      {/* Floating Preview Image */}
      <div
        className={`absolute left-[30%] top-[32%] z-20
        w-70 h-90 lg:w-85 lg:h-107.5
        overflow-hidden pointer-events-none
        transition-all duration-500
        ${
          hovered
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-95"
        }`}
      >
        {hovered && (
          <img
            src={hovered.image}
            alt={hovered.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 lg:px-60 mb-20">
        <h2 className="text-lg mb-8">/ Expertise</h2>

        <div className="text-lg lg:text-2xl leading-relaxed">
          <p>We are passionate about uncovering the best</p>
          <p>digital innovations for forward-thinking</p>
          <p>brands looking to push boundaries and drive</p>
          <p>significant impact.</p>
        </div>
      </div>

      {/* Expertise List */}
      <div className="relative z-10 px-6 lg:px-40">
        <div className="text-4xl md:text-6xl lg:text-6xl font-light leading-[1.35]">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-14">
            <Item item={sections[0]} />
            <span>/</span>
            <Item item={sections[1]} />
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-14">
            <Item item={sections[2]} />
            <span>/</span>
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-14">
            <Item item={sections[3]} />
            <span>/</span>
            <Item item={sections[4]} />
          </div>

          {/* Row 4 */}
          <div>
            <Item item={sections[5]} />
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-16 lg:ml-152">
          <button className="group flex items-center gap-4 text-lg">
            <span>Explore all Expertise</span>
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
