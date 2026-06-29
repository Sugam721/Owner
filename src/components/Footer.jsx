import React from "react";

const Footer = () => {
  const firstRow = [
    {
      title: "Grow online discovery",
      links: [
        "Restaurant Website",
        "Restaurant SEO",
        "Online Menu",
        "Reviews Engine",
        "Listings Management",
      ],
    },
    {
      title: "Grow repeat orders",
      links: [
        "Branded Restaurant App",
        "Marketing Campaigns",
        "Email & SMS Marketing",
        "Push Notifications Marketing",
        "Loyalty & Rewards",
      ],
    },
    {
      title: "Grow online sales",
      links: ["Online Ordering", "Smart Upsells", "Delivery", "Catering"],
    },
    {
      title: "Run your restaurant",
      links: [
        "Owner App",
        "Reporting & Analytics",
        "Kitchen Tablet",
        "POS Integrations",
      ],
    },
  ];

  const secondRow = [
    {
      title: "Resources",
      links: [
        "Case Studies",
        "Restaurant Marketing Guide",
        "SEO for Restaurants",
        "Restaurant Email Marketing",
        "Restaurant Mobile App",
        "Online Ordering Systems",
        "Restaurant Website Builders",
        "Best Restaurant Websites",
      ],
    },
    {
      title: "Company",
      links: [
        "About",
        "Careers",
        "Leadership",
        "Builders Wanted",
        "Press",
        "Partner with Owner",
      ],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Support", "Documentation"],
    },
  ];

  const FooterLinks = ({ data }) => (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((column) => (
        <div key={column.title}>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-black">
            {column.title}
          </h3>
          <ul className="space-y-3">
            {column.links.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-gray-600 hover:text-black">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <footer
      className="bg-white text-black"
      style={{
        borderRadius: "2.5rem 2.5rem 0 0",
        boxShadow: "0 -4px 24px 0 rgba(0,0,0,0.06)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* CTA — Logo left, buttons right */}
        <div className="mb-14 flex flex-col gap-5 border-b border-gray-200 pb-12 md:flex-row md:items-center md:justify-between">
          {/* Left: Logo */}
          <img
            src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782637183/Logo_jndblg.avif"
            alt="Owner.com"
            className="h-10 w-auto"
          />

          {/* Right: Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button className="rounded-full bg-[#084413] px-7 py-3 font-semibold text-white transition hover:bg-[#06330d]">
              Get a free demo
            </button>
            <button className="rounded-full bg-gray-200 px-7 py-3 font-semibold text-black transition hover:bg-gray-300">
              See how it works
            </button>
          </div>
        </div>

        {/* First row */}
        <FooterLinks data={firstRow} />

        {/* Second row */}
        <div className="mt-14">
          <FooterLinks data={secondRow} />
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-6 border-t border-gray-200 pt-8 text-sm text-gray-600 md:flex-row md:justify-between">
          {/* Left: Logo + contact */}
          <div className="flex flex-col gap-3">
            <img
              src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782637183/Logo_jndblg.avif"
              alt="Owner.com"
              className="h-7 w-auto opacity-60"
            />
            <div>
              <p className="font-medium text-black">Need help?</p>
              <p className="mt-1">1-844-24-OWNER · support@owner.com</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            {[
              "Cookie Settings",
              "Privacy",
              "Website Terms",
              "Disclaimer",
              "Restaurant Agreements",
              "Platform Terms",
              "Accessibility",
            ].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-black">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          © 2026 Owner.com | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
