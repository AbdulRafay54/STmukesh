import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    title: "2PC Unstitched Mukesh Work",
    link: "/mukeshluxury",
    images: [
      "/images/card1(1).jpeg",
      "/images/card1(2).jpeg",
      "/images/card1(3).jpeg",
    ],
  },
  {
    title: "Luxury Bridal Handwork Dupatta",
    link: "/mukeshluxury",
    images: [
      "/images/bridal1(1).jpeg",
      "/images/bridal1(3).jpeg",
      "/images/bridal1(2).jpeg",
    ],
  },
  {
    title: "Mukesh Silk Chikankari Set",
    link: "/resham",
    images: [
      "/images/chickenkari1(1).jpeg",
      "/images/chickenkari1(2).jpeg",
      "/images/chickenkari1(3).jpeg",
    ],
  },
  {
    title: "Antique Gold Elegance",
    link: "/featureproduct",
    images: [
      "/images/saree1(1).jpeg",
      "/images/saree1(2).jpeg",
      "/images/saree1(3).jpeg",
    ],
  },
];

export default function ProductGrid() {
  return (
    <section id="featured" className="w-full px-6 md:px-16 py-16 bg-[#f8f8f8]">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl tracking-[5px] uppercase font-medium">
          Featured Products
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ item }) {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);

  const next = (e) => {
    if (e) e.stopPropagation();
    setIndex((prev) => (prev + 1) % item.images.length);
  };

  const prev = (e) => {
    if (e) e.stopPropagation();
    setIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  const handleStart = (x) => {
    startX.current = x;
  };

  const handleEnd = (x) => {
    if (!startX.current) return;

    const diff = startX.current - x;

    if (diff > 50) next();
    if (diff < -50) prev();

    startX.current = null;
  };

  return (
    <Link href={item.link} className="group relative cursor-pointer block">
      <div
        className="relative w-full aspect-[3/4] overflow-hidden rounded-1xl shadow-sm hover:shadow-xl transition-all duration-500"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={(e) => handleEnd(e.clientX)}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      >
        <Image
          src={item.images[index]}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <FaChevronLeft size={12} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <FaChevronRight size={12} />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-3 w-full flex justify-center gap-1">
          {item.images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* TITLE */}
      <div className="text-center mt-4">
        <h3 className="text-[15px] md:text-[16px] font-medium tracking-wide text-gray-900">
          {item.title}
        </h3>
      </div>
    </Link>
  );
}
