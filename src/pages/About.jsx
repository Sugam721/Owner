import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  const stories = [
    {
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634881/69f4f3ec72c98da1d65ceb7b_69f4f3a32cecb8251e926f47_69c9bcdd1fdf6e21eddae5ef_metropizza.jpg_dd9cd8.avif",
      amount: "$40,000",
      title: "Online Sales",
      name: "Said John Smith",
      owner: "Owner of Metro Pizza",
    },
    {
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634881/69f4f3e8c133b021f490c122_69f4f37910945e66967e1908_69c9bd1166bef5d335655619_talkintacos.jpg_c1emev.avif",
      amount: "$9,000",
      title: "Sales in first month",
      name: "David Miller",
      owner: "Owner of ABC Restaurant",
    },
    {
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634881/69f4f3ee72c98da1d65cebc4_69f4f3c31848dc3653e2dd28_69c9bc1ccdb11f1037929a85_cyclo.jpg_ukpzl1.avif",
      amount: "$25,000",
      title: "Monthly Revenue",
      name: "Alex Brown",
      owner: "Owner of Burger House",
    },
    {
      image:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634881/69f4f3ee72c98da1d65cebc4_69f4f3c31848dc3653e2dd28_69c9bc1ccdb11f1037929a85_cyclo.jpg_ukpzl1.avif",
      amount: "$30,000",
      title: "Annual Revenue",
      name: "Sarah Johnson",
      owner: "Owner of XYZ Cafe",
    },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <h1 className="text-black text-5xl md:text-6xl font-bold px-8 mb-14">
        Grow sales like these owners
      </h1>

      <div className="relative w-full overflow-hidden">
        <div
          className="
            flex
            gap-8
            w-max
            animate-marquee
          "
        >
          {[...stories, ...stories].map((story, index) => (
            <div key={index} className="w-90 shrink-0">
              <AboutCard {...story} />
            </div>
          ))}
        </div>
      </div>

      {/* animation */}
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default About;
