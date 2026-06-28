import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#141410] text-[#a79a7c] overflow-hidden">
      {/* Background */}
      <img
        src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780226402/bgv_pzlgkp.svg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 px-6 md:px-16 py-20 md:py-32">
        {/* Heading */}
        <h1 className="text-5xl md:text-9xl font-large mb-16 group inline-block relative cursor-pointer">
          Let's Talk.
          <span className="absolute left-0 bottom-0 h-0.75 w-0 bg-[#a79a7c] transition-all duration-500 group-hover:w-full"></span>
        </h1>

        {/* Addresses */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 text-sm md:text-base">
          <div>
            <p className="uppercase opacity-60 mb-3">Singapore</p>
            <p>FLEAVA PTE. LTD.</p>
            <p>160 Robinson Road, #14-04</p>
            <p>Singapore Business Federation Centre - 068914</p>
            <p>Singapore</p>
          </div>

          <div>
            <p className="uppercase opacity-60 mb-3">Bali, Indonesia</p>
            <p>PT FLEAVA DIGITAL MEDIA</p>
            <p>Jalan Merta Agung, No.25</p>
            <p>Kerobokan Kelod, Badung</p>
            <p>Bali - 80361, Indonesia</p>
          </div>
        </div>

        {/* Links */}
        <div className="border-y border-[#a79a7c]/20 py-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base">
          <p>Home</p>
          <p>Works 17</p>
          <p>Expertise 06</p>
          <p>About</p>

          <p>Journal 33</p>
          <p>Awards 59</p>
          <p>Brands 141</p>
          <p>Careers 04</p>

          <p>Inquiries</p>
          <p>Transform →</p>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col md:flex-row justify-between gap-6 text-sm md:text-base">
          <p>© 2026 Fleava.</p>

          <div className="flex gap-4">
            <span>Fb</span>
            <span>Ig</span>
            <span>Tw</span>
            <span>In</span>
            <span>Bē</span>
          </div>

          <div className="flex gap-4">
            <p>Terms.</p>
            <p>Sitemap.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
