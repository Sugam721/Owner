import React from "react";
import CenterCard from "./CenterCard";

const reviews = [
  {
    title: "Owner.com + Small Business = BIG Business",
    name: "Anil R.",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634885/download_rvyszt.webp",
  },
  {
    title: "Wonderful Team and Communication from Setup to Launch",
    name: "Andranik A.",
  },
  {
    title: "Seamless Delivery and Marketing Boost",
    name: "Marinos S.",
  },
  {
    title: "Effortless Setup and Remarkable Sales Boost",
    name: "Amin J.",
  },
  {
    title: "Seamless Integration and Marketing Powerhouse",
    name: "James B.",
  },
  {
    title:
      "By far the best trained, competent and friendly customer support staff",
    name: "Lisa B.",
  },
  {
    title: "Effortless Website Transformation with Outstanding Support",
    name: "Kennedy M",
  },
  {
    title: "Seamless Transition and Outstanding Support",
    name: "Waleed F.",
  },
  {
    title:
      "Owner.com actually delivers on its promise to drive online sales for your restaurant!",
    name: "Omar T.",
  },
  {
    title:
      "They are helping us take back more control of our business and compete with larger companies because the technology is great!",
    name: "Michael B",
  },
];

const Center = () => {
  const row1 = reviews.slice(0, 5);
  const row2 = reviews.slice(5);

  return (
    <section
      className="
relative
overflow-hidden
py-32
bg-[#f7f3ee]
"
    >
      {/* TOP IMAGE */}

      {/* <div
        className="
absolute
top-0
left-0
w-full
h-130
bg-cover
bg-center
"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634883/69d931546ebac88f640b3393_testimonials-bg_pemln1.svg)",
        }}
      ></div> */}

      <div
        className="
  absolute
  top-0
  left-0
  w-full
  h-130
  bg-no-repeat
  "
        style={{
          backgroundImage: `
      url(https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634883/69d931546ebac88f640b3393_testimonials-bg_pemln1.svg),
      url(https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634882/69c1abb2034d5fe05a10dc2a_dc5cd79dd360ef682eced16d1932dd49_cta-bg_npjcb6.avif)
    `,
          backgroundSize: `
      100% 700px,
      100% 100%
    `,
          backgroundPosition: `
      center top,
      center bottom
    `,
        }}
      ></div>

      {/* CONTENT */}

      <div
        className="
relative
z-10
"
      >
        <div
          className="
text-center
max-w-4xl
mx-auto
px-5
"
        >
          <h1
            className="
text-5xl
md:text-7xl
font-bold
text-black
"
          >
            See why we’re rated #1 in restaurant tech
          </h1>

          <div
            className="
mt-8
flex
justify-center
gap-4
flex-wrap
"
          >
            <button
              className="
bg-black
text-white
px-7
py-3
rounded-full
"
            >
              Rated #1 Restaurant Software
            </button>

            <button
              className="
bg-white
px-7
py-3
rounded-full
border
"
            >
              Leader in Summer 2026
            </button>
          </div>

          <div
            className="
mt-8
flex
justify-center
gap-3
items-center
"
          >
            <span className="font-bold text-2xl">4.8</span>

            <span className="text-xl">★★★★★</span>

            <span className="text-gray-500">across 1,000+ reviews</span>
          </div>
        </div>

        {/* CARDS */}

        <div className="mt-24 space-y-8">
          <div
            className="
flex
gap-6
animate-scroll-left
"
          >
            {[...row1, ...row1].map((item, index) => (
              <CenterCard key={index} {...item} />
            ))}
          </div>

          <div
            className="
flex
gap-6
animate-scroll-right
"
          >
            {[...row2, ...row2].map((item, index) => (
              <CenterCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM IMAGE */}

      {/* <div
        className="
relative
mt-32
mx-5
h-130
rounded-[40px]
bg-cover
bg-center
overflow-hidden
"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634882/69c1abb2034d5fe05a10dc2a_dc5cd79dd360ef682eced16d1932dd49_cta-bg_npjcb6.avif)",
        }}
      ></div> */}
    </section>
  );
};

export default Center;
