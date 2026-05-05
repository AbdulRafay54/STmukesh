import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const leftLinks = ["Shop", "Collections"];
  const rightLinks = ["New Arrivals", "Sale"];

  const subLinks = [
    "Embroidered Suits",
    "Chunri",
    "Formal Wear",
    "Festive Edit",
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200">

      {/* TOP BAR */}
      <div className="relative flex items-center justify-between px-6 md:px-16 py-7">

        {/* LEFT */}
        <div className="hidden md:flex gap-10">
          {leftLinks.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-[14px] font-semibold tracking-[2px] uppercase text-gray-700 hover:text-black hover:tracking-[3px] transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="w-[220px] md:w-[300px] h-[100px] relative">
            <Image
              src="/images/logo.png"
              alt="logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex gap-10">
          {rightLinks.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-[14px] font-semibold tracking-[2px] uppercase text-gray-700 hover:text-black hover:tracking-[3px] transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-900"
        >
          ☰
        </button>
      </div>

      {/* SUB NAV */}
      <div className="hidden md:flex justify-center gap-12 py-5 border-t border-gray-100">
        {subLinks.map((item) => (
          <p
            key={item}
            className="text-[12px] font-medium tracking-[4px] uppercase text-gray-500 hover:text-black cursor-pointer transition"
          >
            {item}
          </p>
        ))}
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 py-6 border-t bg-white">

          <div className="flex flex-col gap-6">
            {[...leftLinks, ...rightLinks].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[16px] font-semibold text-gray-800"
              >
                {item}
              </Link>
            ))}
          </div>

          <hr className="my-6 border-gray-900" />

          <div className="flex flex-col gap-3">
            {subLinks.map((item) => (
              <p
                key={item}
                className="text-[12px] uppercase tracking-[4px] text-gray-600"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}