import React from 'react'

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-6 py-16">

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12">

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-light tracking-[6px] uppercase text-gray-900 mb-12">
          Contact Us
        </h1>

        {/* Info Box */}
        <div className="space-y-8 text-center">

          {/* Name */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Name
            </p>
            <p className="text-lg font-medium text-gray-900 mt-2">
             STMukesh Handwork
            </p>
          </div>

          {/* Phone */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Phone
            </p>
            <p className="text-lg font-medium text-gray-900 mt-2">
             03192772962
            </p>
          </div>

          {/* Email */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Email
            </p>
            <p className="text-lg font-medium text-gray-900 mt-2">
              info@mukeshcollection.com
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Address
            </p>
            <p className="text-lg font-medium text-gray-900 mt-2 leading-relaxed">
            Taj baba market Paposh nagar block 5 
              <br />
             Near Habib metro bank
            </p>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400 tracking-wide">
            We usually respond within 24 hours
          </p>
        </div>

      </div>

    </section>
  );
}

