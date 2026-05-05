import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroCarousel() {
  const slides = [
    "/images/slide1.jpeg",
    "/images/slide2.jpeg",
    "/images/slide3.jpeg",
    "/images/slide4.jpeg",
  ];

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const startX = useRef(null);

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

  // FIX LOOP WITHOUT BLACK FRAME
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

  // re-enable transition after snap
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
        {extended.map((img, i) => (
          <div key={i} className="min-w-full h-full relative bg-black">
            <Image
              src={img}
              alt="slide"
              fill
              priority
              className="object-cover"
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

      {/* dots FIXED */}
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