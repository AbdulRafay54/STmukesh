import React, { useRef, useState } from "react";
import Link from "next/link";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const Collection = () => {
  const data = [
    { href: "/luxe-pret", video: "/videos/handwork.mp4", title: "Mukesh Royale" },
    { href: "/silk-prints", video: "/videos/saree.mp4", title: "Mukesh Luxe Veils" },
    { href: "/best-sellers", video: "/videos/resham.mp4", title: "Resham by Mukesh" },
  ];

  return (
    <section id="collection" className="w-full bg-[#f8f8f8] py-16">
      {/* HEADING */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-[22px] md:text-[32px] tracking-[6px] uppercase text-gray-900 font-medium">
          Our Collection
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Season’s top picks crafted for elegance
        </p>
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {data.map((item, i) => (
          <VideoCard key={i} item={item} />
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden lg:grid grid-cols-3 gap-10 px-16 mt-6">
        {data.map((item, i) => (
          <VideoCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

const VideoCard = ({ item }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = (e) => {
    e.preventDefault(); // Link click prevent
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div className="w-full flex-shrink-0 snap-start px-4 lg:px-0">
      <Link href={item.href}>
        {/* VIDEO CARD */}
        <div className="relative h-[480px] lg:h-[520px] rounded-[26px] overflow-hidden bg-black shadow-lg group">
          
          <video
            ref={videoRef}
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />

          {/* soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* SOUND ICON */}
          <button
            onClick={toggleSound}
            className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/20 transition"
          >
            {muted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
          </button>
        </div>

        {/* TITLE BELOW CARD */}
        <div className="mt-4 text-center">
          <h3 className="text-gray-900 text-[18px] md:text-[20px] font-medium tracking-wide">
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm mt-1 tracking-wide">
            Explore Collection →
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Collection;