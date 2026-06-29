import { useState } from "react";

const features = [
  {
    title: "More Google Traffic",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782665638/1_pjgyme.jpg",
  },
  {
    title: "More Online Orders",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782665638/2_qex0fb.png",
  },
  {
    title: "More Repeat Customers",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782665707/Screenshot_2026-06-28_at_22.37.37_e6yhlp.png",
  },
  {
    title: "More App Downloads",
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782665639/4_tsckkm.jpg",
  },
];

const Details = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            With Owner, you get more
            <br />
            traffic, more sales,
            <br />
            more repeat customers
          </h2>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((feature, index) => (
            <button
              key={feature.title}
              type="button"
              onClick={() => setActive(index)}
              className={`rounded-2xl border p-6 text-left transition-all duration-300 ${
                active === index
                  ? "bg-black text-white border-black shadow-xl"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <h3 className="text-lg font-semibold">{feature.title}</h3>

              <div
                className={`mt-5 h-1 w-12 rounded-full transition-colors ${
                  active === index ? "bg-white" : "bg-black"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Image */}
        <div className="rounded-[36px]  bg-#FFFFFF p-6 overflow-hidden">
          <img
            src={features[active].image}
            alt={features[active].title}
            className="w-full rounded-[28px] object-cover transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Details;
