import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

import { db } from "../Firebase/firebase";

import { collection, onSnapshot, query, where } from "firebase/firestore";

export default function Resham() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "products"),
      where("category", "==", "resham"),
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(data);
    });

    return () => unsub();
  }, []);

  return (
    <>
      <section className="w-full px-4 md:px-10 lg:px-16 py-12 bg-[#f8f8f8]">
        {/* HEADING */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl tracking-[5px] uppercase font-medium">
            Resham By Mukesh
          </h1>
        </div>

        {/* GRID / EMPTY STATE */}
        {products.length === 0 ? (
          <div className="w-full text-center py-20">
            <h2 className="text-xl md:text-2xl font-medium text-gray-500">
              No Products Found
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onOpen={() => setSelectedProduct(item)}
              />
            ))}
          </div>
        )}
      </section>

      {/* MODAL */}
      {selectedProduct && (
        <ProductModal
          item={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

function ProductCard({ item, onOpen }) {
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
    <div className="group relative cursor-pointer" onClick={onOpen}>
      {/* CARD */}
      <div
        className="relative w-full aspect-[3/4] overflow-hidden  shadow-sm hover:shadow-2xl transition-all duration-500 bg-white"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={(e) => handleEnd(e.clientX)}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      >
        {/* IMAGE */}
        <Image
          src={item.images?.[index]}
          alt={item.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
        >
          <FaChevronLeft size={12} />
        </button>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
        >
          <FaChevronRight size={12} />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-3 w-full flex justify-center gap-1">
          {item.images?.map((_, i) => (
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
      <div className="text-center mt-3 px-1">
        <h3 className="text-[13px] md:text-[16px] font-medium tracking-wide text-gray-900 line-clamp-1">
          {item.title}
        </h3>
      </div>
    </div>
  );
}

function ProductModal({ item, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  const whatsappNumber = "03192772962";

  const message = `Hello, I would like to get complete details about "${item.title}".`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="fixed inset-0 z-[99999] bg-[#ece5dc] overflow-y-auto">
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full bg-white shadow-xl text-black flex items-center justify-center hover:scale-110 transition-all duration-300"
      >
        <FaTimes size={16} />
      </button>

      <div className="min-h-screen grid lg:grid-cols-[1.1fr_.9fr]">
        {/* LEFT */}
        <div className="bg-[#e8dfd3] p-3 md:p-6">
          {/* BIG IMAGE */}
          <div className="relative w-full h-[62vh] md:h-[92vh] overflow-hidden rounded-[30px] shadow-2xl">
            <Image
              src={item.images?.[activeImage]}
              alt={item.title}
              fill
              unoptimized
              className="object-cover hover:scale-105 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          {/* THUMBS */}
          <div className="flex gap-3 mt-5 overflow-x-auto pb-2">
            {item.images?.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative min-w-[85px] h-[110px] rounded-[18px] overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeImage === i
                    ? "ring-2 ring-black scale-95 shadow-lg"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt="thumb"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#f8f4ee] flex items-center">
          <div className="w-full px-7 md:px-16 py-12 md:py-20">
            {/* COLLECTION */}
            <p className="uppercase tracking-[6px] text-[11px] font-semibold text-[#9a7b5f] mb-4">
              Premium Resham Collection
            </p>

            {/* TITLE */}
            <h2 className="text-[34px] md:text-[58px] leading-[1.1] font-semibold text-[#1f1f1f]">
              {item.title}
            </h2>

            {/* PRICE */}
            {item.price && (
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#9a7b5f]" />

                <p className="text-[26px] md:text-[34px] font-bold text-[#111]">
                  Rs. {item.price}
                </p>
              </div>
            )}

            {/* DESCRIPTION BOX */}
            <div className="mt-10 bg-white rounded-[28px] p-6 md:p-8 shadow-lg border border-[#eee2d4]">
              <h3 className="uppercase tracking-[4px] text-[13px] font-bold text-[#8d6f55] mb-5">
                Product Details
              </h3>

              <p className="text-[15px] md:text-[16px] leading-[34px] text-[#555] font-medium">
                {item.description}
              </p>
            </div>

            {/* CONTACT */}
            <div className="mt-10">
              <p className="text-[15px] leading-8 text-[#666] font-medium">
                For pricing details, customization, and order assistance,
                connect with us directly on WhatsApp.
              </p>

              {/* BUTTON */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-4 bg-[#111] text-white px-8 py-5 rounded-full shadow-xl hover:scale-[1.03] hover:bg-black transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center">
                  <FaWhatsapp size={22} />
                </div>

                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-[3px] text-white/60">
                    Direct Support
                  </span>

                  <span className="text-[15px] font-semibold">
                    Contact on WhatsApp
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
