import React from "react";

const AfterMid = () => {
  const beliefs = [
    {
      title: "We believe that performance beats endless customization.",

      text: (
        <>
          <p>
            Everyone else promises you everything. We won't. Partnering with
            Owner means giving up some control over how your digital presence
            looks and feels.
          </p>

          <p className="mt-6">
            In return, you get a proven system built to grow your business. Our
            numbers prove it. It's why our customers outperform their
            competition.
          </p>
        </>
      ),
    },

    {
      title: "We believe that all businesses should benefit from AI.",

      text: (
        <>
          <p>
            Corporations have teams working on the latest AI and tech. Most
            small businesses have no one. Owner changes this.
          </p>

          <p className="mt-6">
            Our team of experts puts AI and the newest tech to work for you. You
            get the same capabilities as a global restaurant brand, without
            spending millions to get there.
          </p>
        </>
      ),
    },

    {
      title: "We believe in growing your profits above all else.",

      text: (
        <>
          <p>
            A lot of restaurant tech companies make money whether you grow or
            not. We think that's wrong.
          </p>

          <p className="mt-6">
            Owner is built around one question: is this restaurant growing sales
            profitably? That’s what we wake up thinking about.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="
grid
grid-cols-1
lg:grid-cols-3
gap-16
"
        >
          {/* COLUMN 1 */}

          <div>
            <h2
              className="
text-5xl
font-bold
leading-tight
text-gray-900
"
            >
              3 beliefs that guide our company
            </h2>

            <div className="mt-16">
              <p
                className="
text-2xl
font-semibold
"
              >
                Adam Guild
              </p>

              <p
                className="
text-gray-500
text-lg
mt-2
"
              >
                Co-Founder and CEO at Owner
              </p>
            </div>
          </div>

          {/* COLUMN 2 - ONLY BELIEFS */}

          <div
            className="
space-y-20
"
          >
            {beliefs.map((item, index) => (
              <div
                key={index}
                className="
border-t
border-gray-200
pt-8
"
              >
                <h3
                  className="
text-3xl
font-bold
leading-tight
text-gray-900
"
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* COLUMN 3 - ONLY TEXT */}

          <div
            className="
space-y-20
"
          >
            {beliefs.map((item, index) => (
              <div
                key={index}
                className="
border-t
border-gray-200
pt-8
text-lg
leading-relaxed
text-gray-600
"
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterMid;
