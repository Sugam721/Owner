import React, { useState } from "react";

// ── Product dropdown data ──────────────────────────────────────────
const productSections = [
  {
    heading: "Grow online discovery",
    items: [
      {
        label: "Restaurant Website",
        href: "https://www.owner.com/restaurant-website-ai",
      },
      { label: "Restaurant SEO", href: "https://www.owner.com/restaurant-seo" },
      { label: "Online Menu", href: "https://www.owner.com/online-menu" },
      { label: "Reviews Engine", href: "https://www.owner.com/reviews-engine" },
      {
        label: "Listings Management",
        href: "https://www.owner.com/listings-management",
      },
    ],
  },
  {
    heading: "Grow online sales",
    items: [
      {
        label: "Online Ordering",
        href: "https://www.owner.com/online-ordering",
      },
      { label: "Smart Upsells", href: "https://www.owner.com/smart-upsells" },
      { label: "Delivery", href: "https://www.owner.com/delivery" },
      { label: "Catering", href: "https://www.owner.com/catering" },
      {
        label: "AI Phone Ordering",
        href: "https://www.owner.com/ai-phone-ordering",
      },
      {
        label: "Waitlist",
        href: "https://www.owner.com/ai-phone-ordering",
        tag: true,
      },
    ],
  },
  {
    heading: "Grow repeat orders",
    items: [
      {
        label: "Branded Restaurant App",
        href: "https://www.owner.com/branded-apps",
      },
      {
        label: "Marketing Campaigns",
        href: "https://www.owner.com/automatic-marketing",
      },
      {
        label: "Email & Text Marketing",
        href: "https://www.owner.com/email-sms-marketing",
      },
      {
        label: "Push Notifications Marketing",
        href: "https://www.owner.com/push-notifications",
      },
      {
        label: "Loyalty & Rewards",
        href: "https://www.owner.com/loyalty-rewards",
      },
    ],
  },
  {
    heading: "Run your restaurant",
    items: [
      { label: "Owner App", href: "https://www.owner.com/mobile" },
      {
        label: "Reporting & Analytics",
        href: "https://www.owner.com/reporting-analytics",
      },
      { label: "Kitchen Tablet", href: "https://www.owner.com/kitchen-tablet" },
      {
        label: "POS Integrations",
        href: "https://www.owner.com/pos-integrations",
      },
    ],
  },
];

const caseStudies = [
  {
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634882/69ca8c42c03290b86ed72c17_nav_talkin-taco_wkkm43.avif",
    text: "How Mo and Omar from Talkin Tacos grew direct online sales to $120K/m",
    href: "https://www.owner.com/case-studies/talkin-tacos",
  },
  {
    image:
      "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782634880/6a2b35973921a6af3458d117_hillcrust-pizza_nfjuxq.avif",
    text: "How HillCrust Pizza saved thousands and ranked higher on Google with Owner.com",
    href: "https://www.owner.com/case-studies/hillcrust-pizza",
  },
];

// ── Resources dropdown data ────────────────────────────────────────
const resourceItems = ["Blog", "Guides", "Help Center"];

// ── Product Dropdown ───────────────────────────────────────────────
const ProductDropdown = () => (
  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-215nded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden z-50">
    <div className="flex">
      {/* LEFT: 4-column links grid — 40% width */}
      <div className="w-[58%] p-6 grid grid-cols-2 gap-x-6 gap-y-0">
        {productSections.map((section) => (
          <div key={section.heading} className="mb-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
              {section.heading}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-black font-medium py-1 rounded-lg hover:bg-gray-50 px-2 -mx-2 transition-colors"
                  >
                    {item.label}
                    {item.tag && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 font-semibold px-1.5 py-0.5 rounded-full">
                        New
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* RIGHT: Case study image cards — 42% width */}
      <div className="w-[42%] bg-[#f7f3ee] p-4 flex flex-col gap-3 justify-center">
        {caseStudies.map((cs) => (
          <a
            key={cs.href}
            href={cs.href}
            className="group relative rounded-xl overflow-hidden block h-35 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Background image */}
            <img
              src={cs.image}
              alt={cs.text}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
            {/* Text on image */}
            <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-semibold leading-snug">
              {cs.text}
            </p>
          </a>
        ))}
      </div>
    </div>
  </div>
);

// ── Simple Resources Dropdown ──────────────────────────────────────
const ResourcesDropdown = () => (
  <div className="absolute left-0 top-full mt-3 w-44 rounded-xl bg-white border border-gray-100 shadow-xl p-2 z-50">
    {resourceItems.map((item) => (
      <a
        key={item}
        href="#"
        className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors"
      >
        {item}
      </a>
    ))}
  </div>
);

// ── Navbar ─────────────────────────────────────────────────────────
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const isOpen = openDropdown !== null;

  return (
    <>
      {/* Blur backdrop — appears behind dropdown, above page content */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/10"
          style={{ top: "80px" }}
          onMouseEnter={() => setOpenDropdown(null)}
        />
      )}

      {/* <nav className="w-full z-50 bg-white relative"> */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white ">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* LEFT: Logo */}
          <div className="flex items-center">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1782637183/Logo_jndblg.avif"
                alt="Logo"
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* CENTER: Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("Product")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 rounded-lg px-4 py-2 font-medium text-sm transition-colors ${
                  openDropdown === "Product"
                    ? "text-black bg-gray-100"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                }`}
              >
                Product
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openDropdown === "Product" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openDropdown === "Product" && <ProductDropdown />}
            </div>

            {/* Pricing */}
            <a
              href="#"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
            >
              Pricing
            </a>

            {/* How it works */}
            <a
              href="#"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
            >
              How it works
            </a>

            {/* Order */}
            <a
              href="#"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
            >
              Order
            </a>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("Resources")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 rounded-lg px-4 py-2 font-medium text-sm transition-colors ${
                  openDropdown === "Resources"
                    ? "text-black bg-gray-100"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                }`}
              >
                Resources
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openDropdown === "Resources" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openDropdown === "Resources" && <ResourcesDropdown />}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Login
            </button>
            <button className="rounded-lg bg-[#2C2C2C] px-5 py-2.5 text-sm font-medium text-[#F3EEE8] hover:bg-[#111] transition-colors">
              Get a Free Demo
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
