import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      {/* TOP BAR */}
      <div className="relative flex items-center justify-between px-6 md:px-16 py-7">
        {/* LEFT */}
        <div className="hidden md:flex gap-10">
          <Link
            href="/#"
            className="text-[14px] font-semibold tracking-[2px] uppercase text-gray-700 hover:text-black hover:tracking-[3px] transition-all duration-300"
          >
            Shop
          </Link>

          <Link
            href="#collection"
            className="text-[14px] font-semibold tracking-[2px] uppercase text-gray-700 hover:text-black hover:tracking-[3px] transition-all duration-300"
          >
            Collections
          </Link>
        </div>

        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="relative w-[220px] md:w-[300px] h-[100px]">
            <Image
              src="/images/logo.png"
              alt="logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex gap-10">
          <Link
            href="/#featured"
            className="text-[14px] font-semibold tracking-[2px] uppercase text-gray-700 hover:text-black hover:tracking-[3px] transition-all duration-300"
          >
            New Arrivals
          </Link>

          <Link
           href="https://wa.me/923192772962?text=Hi%20I%20want%20to%20see%20your%20catalogue"
            target="_blank"
            className="text-[14px] font-semibold tracking-[2px] uppercase text-gray-700 hover:text-black hover:tracking-[3px] transition-all duration-300"
          >
            Sale
          </Link>
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
        <Link
          href="/mukeshroyale"
          className="text-[12px] font-medium tracking-[4px] uppercase text-gray-500 hover:text-black transition"
        >
          Mukesh Royale
        </Link>

        <Link
          href="/mukeshluxury"
          className="text-[12px] font-medium tracking-[4px] uppercase text-gray-500 hover:text-black transition"
        >
          Mukesh Luxe Studio
        </Link>

        <Link
          href="/resham"
          className="text-[12px] font-medium tracking-[4px] uppercase text-gray-500 hover:text-black transition"
        >
          Resham by Mukesh
        </Link>

        <Link
          href="/featureproduct"
          className="text-[12px] font-medium tracking-[4px] uppercase text-gray-500 hover:text-black transition"
        >
          Featured Products
        </Link>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 py-6 border-t bg-white">
          <div className="flex flex-col gap-6">
            <Link
              href="/#"
              onClick={() => setOpen(false)}
              className="text-[16px] font-semibold text-gray-800"
            >
              Shop
            </Link>

            <Link
              href="/#collection"
              onClick={() => setOpen(false)}
              className="text-[16px] font-semibold text-gray-800"
            >
              Collections
            </Link>

            <Link
              href="/#featured"
              onClick={() => setOpen(false)}
              className="text-[16px] font-semibold text-gray-800"
            >
              New Arrivals
            </Link>

            <Link
               href="https://wa.me/923192772962?text=Hi%20I%20want%20to%20see%20your%20catalogue"
              target="_blank"
              onClick={() => setOpen(false)}
              className="text-[16px] font-semibold text-gray-800"
            >
              Sale
            </Link>
          </div>

          <hr className="my-6 border-gray-900" />

          <div className="flex flex-col gap-3">
            <Link
              href="/mukeshroyale"
              onClick={() => setOpen(false)}
              className="text-[12px] uppercase tracking-[4px] text-gray-600"
            >
              Mukesh Royale
            </Link>

            <Link
              href="/mukeshluxury"
              onClick={() => setOpen(false)}
              className="text-[12px] uppercase tracking-[4px] text-gray-600"
            >
              Mukesh Luxe Studio
            </Link>

            <Link
              href="/resham"
              onClick={() => setOpen(false)}
              className="text-[12px] uppercase tracking-[4px] text-gray-600"
            >
              Resham by Mukesh
            </Link>

            <Link
              href="/featureproduct"
              onClick={() => setOpen(false)}
              className="text-[12px] uppercase tracking-[4px] text-gray-600"
            >
              Featured Products
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
