import React from "react";

const CenterCard = ({ image, title, name }) => {
  return (
    <div
      className="
min-w-95
h-65
rounded-[28px]
bg-white
shadow-xl
p-8
flex
flex-col
justify-between
"
    >
      <div>
        {image && (
          <img
            src={image}
            alt={name}
            className="
w-14
h-14
rounded-full
object-cover
mb-5
"
          />
        )}

        <p
          className="
text-xl
font-medium
leading-relaxed
text-[#222]
"
        >
          “{title}”
        </p>
      </div>

      <div>
        <p
          className="
font-semibold
text-lg
"
        >
          {name}
        </p>

        <p
          className="
text-sm
text-gray-400
"
        >
          Owner.com Customer
        </p>
      </div>
    </div>
  );
};

export default CenterCard;
