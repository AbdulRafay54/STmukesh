import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroCarousel() {

  // ✅ UPDATED SLIDES (desktop + mobile)
  const slides = [
    {
      desktop: "/images/landscape1.jpeg",
      mobile: "/images/potrait1.jpeg",
    },
    {
      desktop: "/images/landscape2.jpeg",
      mobile: "/images/potraitimg2.jpeg",
    },
    {
      desktop: "/images/landscape3.jpeg",
      mobile: "/images/potrait3.jpeg",
    },
    {
      desktop: "/images/landscape4.jpeg",
      mobile: "/images/potrait4.jpeg",
    },
  ];

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const startX = useRef(null);

  // ✅ SAME LOOP LOGIC (no change)
  const extended = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  // autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  // loop fix
  const onTransitionEnd = () => {
    if (index === extended.length - 1) {
      setTransition(false);
      setIndex(1);
    }

    if (index === 0) {
      setTransition(false);
      setIndex(extended.length - 2);
    }
  };

  useEffect(() => {
    if (!transition) {
      const t = setTimeout(() => setTransition(true), 50);
      return () => clearTimeout(t);
    }
  }, [transition]);

  const next = () => setIndex((p) => p + 1);
  const prev = () => setIndex((p) => p - 1);

  const start = (x) => (startX.current = x);

  const end = (x) => {
    if (!startX.current) return;

    const diff = startX.current - x;

    if (diff > 50) next();
    if (diff < -50) prev();

    startX.current = null;
  };

  return (
    <section
      className="relative w-full h-[90vh] overflow-hidden bg-black cursor-grab active:cursor-grabbing"
      onMouseDown={(e) => start(e.clientX)}
      onMouseUp={(e) => end(e.clientX)}
      onTouchStart={(e) => start(e.touches[0].clientX)}
      onTouchEnd={(e) => end(e.changedTouches[0].clientX)}
    >
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transition
            ? "transform 700ms ease-in-out"
            : "none",
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {extended.map((slide, i) => (
          <div key={i} className="min-w-full h-full relative bg-black">

            {/* ✅ Desktop Image */}
            <Image
              src={slide.desktop}
              alt="slide"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover hidden md:block"
            />

            {/* ✅ Mobile Image */}
            <Image
              src={slide.mobile}
              alt="slide"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover block md:hidden"
            />

          </div>
        ))}
      </div>

      {/* arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl opacity-40 hover:opacity-100 cursor-pointer"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl opacity-40 hover:opacity-100 cursor-pointer"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i + 1)}
            className={`h-2 rounded-full cursor-pointer transition-all ${
              index === i + 1
                ? "w-8 bg-white"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}