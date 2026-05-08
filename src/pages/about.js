import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* HERO */}
      <section className="bg-[#fafafa] py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[3px] text-[11px] text-gray-500 mb-4">
            STMukesh Handwork
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Timeless Eastern Wear
          </h1>

          <p className="mt-6 text-[15px] md:text-[16px] leading-8 text-gray-600 max-w-2xl mx-auto">
            Elegant handcrafted outfits designed with Mukesh detailing,
            premium fabrics, and timeless silhouettes for modern women.
          </p>

        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src="/images/about1.jpg"
            alt="About STMukesh"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* TEXT */}
        <div>
          <p className="uppercase tracking-[2px] text-[11px] text-gray-500 mb-3">
            Our Story
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
            Crafted with tradition & elegance
          </h2>

          <p className="text-gray-600 leading-8 text-[15px] md:text-[16px] mb-5">
            STMukesh Handwork started with a vision to bring traditional
            craftsmanship into modern fashion. Each piece is carefully designed
            with attention to detail and elegance.
          </p>

          <p className="text-gray-600 leading-8 text-[15px] md:text-[16px]">
            We focus on timeless designs that reflect culture, grace, and
            premium quality in every stitch.
          </p>
        </div>

      </section>

      {/* CARDS */}
      <section className="bg-[#fafafa] py-20 px-6 md:px-16">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[2px] text-[11px] text-gray-500 mb-3">
            What We Do
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Our Craft
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {/* CARD 1 */}
          <div>
            <div className="relative h-[360px] rounded-2xl overflow-hidden bg-white">
              <Image
                src="/images/potrait4.jpeg"
                alt="Mukesh Work"
                fill
                className="object-cover object-top"
              />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-gray-900">
              Mukesh Handwork
            </h3>

            <p className="text-gray-600 text-[15px] leading-7 mt-2">
              Traditional handcrafted Mukesh detailing for elegant festive wear.
            </p>
          </div>

          {/* CARD 2 */}
          <div>
            <div className="relative h-[360px] rounded-2xl overflow-hidden bg-white">
              <Image
                src="/images/about1.jpg"
                alt="Fabric Work"
                fill
                className="object-cover object-top"
              />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-gray-900">
              Premium Fabrics
            </h3>

            <p className="text-gray-600 text-[15px] leading-7 mt-2">
              Soft, high-quality fabrics selected for comfort and luxury feel.
            </p>
          </div>

          {/* CARD 3 */}
          <div>
            <div className="relative h-[360px] rounded-2xl overflow-hidden bg-white">
              <Image
                src="/images/about4.jpg"
                alt="Custom Design"
                fill
                className="object-cover object-top"
              />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-gray-900">
              Custom Designs
            </h3>

            <p className="text-gray-600 text-[15px] leading-7 mt-2">
              Personalized outfits designed according to your style and occasion.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL */}
      <section className="py-20 px-6 md:px-16 text-center">

        <div className="max-w-3xl mx-auto">

          <p className="uppercase tracking-[2px] text-[11px] text-gray-500 mb-3">
            STMukesh Handwork
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
            Designed for elegance & grace
          </h2>

          <p className="text-gray-600 text-[15px] md:text-[16px] leading-8">
            Every piece we create is a blend of tradition, craftsmanship,
            and modern aesthetics made for timeless fashion lovers.
          </p>

        </div>

      </section>

    </div>
  );
}