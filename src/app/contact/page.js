export default function Contact() {
  return (
    <div className="bg-white flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">
        <img
          src="/images/contact-us-truck.jpg"
          alt="Sandeep Logistics Truck"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay fading to white */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 65%, rgba(255,255,255,0.5) 78%, white 100%)",
          }}
        />
      </div>

      {/* Contact Info Cards */}
      <div className="w-full max-w-[1320px] px-5 md:px-10 lg:px-[140px] -mt-10 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
          {/* Phone Card */}
          <div className="border border-black/8 rounded-2xl p-6 flex flex-col items-center gap-2.5">
            <div className="flex items-center justify-center">
              <svg
                className="size-6 text-[#0a0a0a]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="font-['Inter',sans-serif] font-medium text-[17.5px] text-[#0a0a0a] text-center tracking-[-0.87px] leading-[26px]">
              Phone
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-sm text-[#717182] text-center tracking-[-0.5px] leading-[21px]">
              +91 7065575500
            </p>
          </div>

          {/* Email Card */}
          <div className="border border-black/8 rounded-2xl p-6 flex flex-col items-center gap-2.5">
            <div className="flex items-center justify-center">
              <svg
                className="size-6 text-[#0a0a0a]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="font-['Inter',sans-serif] font-medium text-[17.5px] text-[#0a0a0a] text-center tracking-[-0.87px] leading-[26px]">
              Email
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-sm text-[#717182] text-center tracking-[-0.5px] leading-[21px]">
              admin@sandeeplogistics.com
            </p>
          </div>

          {/* Office Card */}
          <div className="border border-black/8 rounded-2xl p-6 flex flex-col items-center gap-2.5">
            <div className="flex items-center justify-center">
              <svg
                className="size-6 text-[#c00108]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="font-['Inter',sans-serif] font-medium text-[17.5px] text-[#0a0a0a] text-center tracking-[-0.87px] leading-[26px]">
              Our Office
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-sm text-[#717182] text-center tracking-[-0.5px] leading-[21px]">
              Sector 77, Gurugram, Haryana 122004, India
            </p>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full max-w-[1320px] px-5 md:px-10 mt-16 md:mt-[120px] mb-16 md:mb-[120px]">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.7!2d76.98!3d28.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3defb1bfffff%3A0x3c228b0517364f04!2sSandeep%20Logistics!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sandeep Logistics Location"
          />

          {/* Location Badge Overlay */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 rounded-2xl shadow-[0px_20px_25px_rgba(0,0,0,0.1),0px_8px_10px_rgba(0,0,0,0.1)] px-4 py-3 flex items-center gap-3">
            <div className="bg-[#ffe2e2] rounded-[14px] size-12 flex items-center justify-center shrink-0">
              <svg
                className="size-6 text-[#c00108]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="font-['Inter',sans-serif] font-normal text-sm text-[#6a7282] leading-5 tracking-[-0.15px]">
                Our Location
              </p>
              <p className="font-['Inter',sans-serif] font-medium text-base text-[#0a0a0a] leading-6 tracking-[-0.31px]">
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
