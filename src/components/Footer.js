import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src="/images/logo.png"
                alt="STMukesh Handwork"
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              Premium handcrafted women wear with elegant Mukesh work and
              traditional detailing. Simple, timeless and made with care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600 text-base">
              <li className="hover:text-black transition">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-black transition">
                <Link href="#collection">Collection</Link>
              </li>
              <li className="hover:text-black transition">
                <Link href="/about" onClick={() => setOpen && setOpen(false)}>
                  About Us
                </Link>
              </li>
              <li className="hover:text-black transition">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-5">
              Connect With Us
            </h3>

            <div className="flex items-center gap-5 text-3xl">
              {/* WhatsApp */}
              <a
                href="https://wa.me/03192772962"
                target="_blank"
                className="text-green-500 hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/stmukeshhandwork?utm_source=qr&igsh=YTE2cjQwampiNDl1"
                target="_blank"
                className="text-pink-500 hover:scale-110 transition"
              >
                <FaInstagram />
              </a>
            </div>

            <p className="text-gray-500 text-base mt-5">
              DM us for orders & custom designs anytime
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} STMukesh Handwork. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
