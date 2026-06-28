import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Works", href: "#" },
    { label: "Journal", href: "#" },
    { label: "Expertise", href: "#" },
    { label: "About", href: "#" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* TOP NAV BAR*/}
      <nav className="fixed top-0 left-0 w-full z-99 flex items-center justify-end gap-3 px-4 md:px-10 pt-2 md:pt-9">
        {/* LOGO */}
        <img
          src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780246872/1_gjrnyv.svg"
          alt="logo"
          className={`h-16 w-16 md:h-20 md:w-20 transition-all duration-300 ${
            menuOpen ? "opacity-0 scale-75 pointer-events-none" : "opacity-100"
          }`}
        />

        {/* MENU BUTTON */}
        <button onClick={toggleMenu} className="flex items-center gap-3">
          <div className="p-2 bg-[#3f4144] rounded-full">
            <CgMenuRight
              className={`text-xl md:text-2xl text-white transition-transform duration-300 ${
                menuOpen ? "rotate-90" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/*  FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto
    bg-[url('https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780226402/bgv_pzlgkp.svg')]
    bg-no-repeat bg-cover bg-center
    backdrop-blur-xl text-white transition-all duration-500
    ${
      menuOpen
        ? "opacity-100 pointer-events-auto scale-100"
        : "opacity-0 pointer-events-none scale-105"
    }`}
      >
        {/* NAV LINKS */}
        <div className="px-32 md:px-32 pt-65 pb-10">
          <ul className="grid grid-cols-3 gap-6  items-center">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-7xl md:text-[6vw] text-[#ccc7bc] font-light leading-none tracking-tight block transition-all duration-500"
                  style={{
                    transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
                    transform: menuOpen ? "translateY(0)" : "translateY(40px)",
                    opacity: menuOpen ? 1 : 0,
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ───────── FOOTER ───────── */}
        <div className="relative mt-auto overflow-hidden">
          <div className="relative z-10 px-6 md:px-16 py-12 text-[#a79a7c]">
            {/* 4 COLUMN LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base">
              {/* Column 1 */}
              <div>
                <p className="uppercase opacity-60 mb-3">Singapore</p>
                <p>FLEAVA PTE. LTD.</p>
                <p>160 Robinson Road, #14-04</p>
                <p>Singapore Business Federation Centre - 068914</p>
                <p>Singapore</p>
              </div>

              {/* Column 2 */}
              <div>
                <p className="uppercase opacity-60 mb-3">Bali, Indonesia</p>
                <p>PT FLEAVA DIGITAL MEDIA</p>
                <p>Jalan Merta Agung, No.25</p>
                <p>Kerobokan Kelod, Badung</p>
                <p>Bali - 80361, Indonesia</p>
              </div>

              {/* Column 3 */}
              <div>
                <p className="uppercase opacity-60 mb-3">Links</p>
                <p>Awards 59</p>
                <p>Brands 141</p>
                <p>Careers 04</p>
              </div>

              {/* Column 4 */}
              <div>
                <p className="uppercase opacity-60 mb-3">Connect</p>

                <div className="flex gap-4 mb-4">
                  <span>Fb</span>
                  <span>Ig</span>
                  <span>Tw</span>
                  <span>In</span>
                  <span>Bē</span>
                </div>

                <p>Inquiries</p>
                <p>Transform →</p>

                <div className="mt-4">
                  <p>Terms.</p>
                  <p>Sitemap.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
