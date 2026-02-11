import Link from "next/link";

const features = [
  {
    title: "Nationwide Coverage",
    description:
      "Comprehensive logistics network spanning across all major cities and regions in India.",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Tracking",
    description:
      "Track your shipments in real-time with our advanced GPS tracking system.",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    description:
      "98% on-time delivery rate ensuring your goods reach their destination as scheduled.",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Secure Transportation",
    description:
      "Full insurance coverage and secure handling for all your valuable shipments.",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Flexible Solutions",
    description:
      "Customized logistics solutions tailored to your specific business needs.",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer support to assist you with any queries or concerns.",
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
      </svg>
    ),
  },
];

const checklistItems = [
  "Track shipments in real-time",
  "Get instant delivery updates",
  "Access comprehensive analytics",
  "Optimize logistics costs",
  "Improve customer satisfaction",
  "Reduce delivery delays",
];

const clientLogos = [
  { src: "/images/logo-mahindra.png", alt: "Mahindra" },
  { src: "/images/logo-amul.png", alt: "Amul" },
  { src: "/images/logo-suzuki.png", alt: "Maruti Suzuki" },
  { src: "/images/logo-toyota.png", alt: "Toyota" },
  { src: "/images/logo-hyundai.png", alt: "Hyundai" },
  { src: "/images/logo-kia.png", alt: "Kia" },
  { src: "/images/logo-amazon.png", alt: "Amazon" },
  { src: "/images/logo-pg.png", alt: "P&G" },
  { src: "/images/logo-flipkart.png", alt: "Flipkart" },
];

const services = [
  {
    title: "Vehicle Transportation",
    description:
      "We transport vehicles safely from OEM plants to dealerships across India, ensuring timely and secure delivery in factory condition.",
    image: "/images/home-service-vehicle.jpg",
    rotation: "",
    opacity: "",
    zIndex: "z-10",
  },
  {
    title: "E-Commerce & FMCG Cargo",
    description:
      "We provide efficient transportation for e-commerce and FMCG goods, ensuring fast and reliable delivery to meet customer demands.",
    image: "/images/home-service-ecommerce.jpg",
    rotation: "-rotate-6",
    opacity: "opacity-80",
    zIndex: "z-0",
  },
  {
    title: "Spare Parts, Engines, & General Goods Transport",
    description:
      "We safely transport spare parts, engines, and general goods, ensuring secure and timely deliveries for all types of cargo.",
    image: "/images/home-service-parts.jpg",
    rotation: "rotate-6",
    opacity: "opacity-80",
    zIndex: "z-0",
  },
];

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home-hero.jpg"
            alt="Sandeep Logistics fleet on mountain road"
            className="w-full h-full object-cover rounded-b-[50px]"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 65%, rgba(255,255,255,0.5) 78%, white 100%)",
          }}
        />
      </div>

      {/* Intro Section */}
      <div className="w-full max-w-[1200px] px-5 md:px-[132px] flex flex-col gap-5 items-center mt-16 md:mt-[120px]">
        <h1 className="font-['Inter',sans-serif] font-medium text-3xl md:text-4xl lg:text-[48px] text-center tracking-[-1.34px] leading-tight lg:leading-[60px]">
          <span className="text-[#0a0a0a]">Reliable Vehicle &amp; Cargo </span>
          <span className="text-[#e82930]">Transportation</span>
          <span className="text-[#0a0a0a]"> Across India</span>
        </h1>
        <p className="font-['Inter',sans-serif] font-normal text-base md:text-[17.5px] text-[#717182] text-center tracking-[-0.87px] leading-[24.5px]">
          Sandeep Logistics is a trusted logistics partner for India&apos;s
          leading OEMs, FMCG, and e-commerce companies. We specialize in vehicle
          transportation for major manufacturers including Tata, Maruti Suzuki,
          Hyundai, Kia, Toyota, and Mahindra, as well as container logistics for
          FMCG, engines, spare parts, transmissions, and general goods for brands
          like Amazon, Flipkart, and Delhivery. With a fleet of 800+ vehicles,
          operations across all four zones of India, and over 20 office &amp;
          workshop locations, we deliver reliable, pan-India logistics solutions
          backed by 17+ years of experience.
        </p>
      </div>

      {/* Everything You Need to Excel */}
      <div className="w-full max-w-[1440px] px-5 md:px-[132px] flex flex-col gap-12 md:gap-16 items-center mt-16 md:mt-[120px]">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] text-center tracking-[-0.68px] leading-10">
            Everything You Need to Excel
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base md:text-[17.5px] text-[#717182] text-center tracking-[-0.87px] leading-[24.5px]">
            Comprehensive logistics solutions designed to streamline your
            operations and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-black/8 rounded-xl p-6 flex flex-col gap-4"
            >
              <div>{feature.icon}</div>
              <h3 className="font-['Inter',sans-serif] font-medium text-lg text-[#0a0a0a] tracking-[-0.87px] leading-6">
                {feature.title}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] tracking-[-0.5px] leading-6">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Drive Real Business Results */}
      <div className="w-full max-w-[1440px] px-5 md:px-[132px] flex flex-col md:flex-row gap-10 md:gap-16 items-center mt-16 md:mt-[120px]">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] tracking-[-0.68px] leading-10">
            Drive Real Business Results
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base md:text-[17.5px] text-[#717182] tracking-[-0.87px] leading-[24.5px]">
            Our comprehensive logistics platform helps you manage shipments
            efficiently, reduce costs, and deliver exceptional service to your
            customers.
          </p>
          <div className="flex flex-col gap-4">
            {checklistItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg
                  className="size-4 text-[#e82930] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="font-['Inter',sans-serif] font-normal text-sm text-[#717182] tracking-[-0.5px] leading-[21px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="border border-black/8 rounded-2xl overflow-hidden">
            <img
              src="/images/home-warehouse.jpg"
              alt="Modern warehouse facility"
              className="w-full h-[200px] md:h-[250px] object-cover"
            />
          </div>
          <div className="border border-black/8 rounded-2xl overflow-hidden">
            <img
              src="/images/home-tracking.jpg"
              alt="Package tracking technology"
              className="w-full h-[200px] md:h-[250px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Trusted by Industry Leaders */}
      <div className="w-full overflow-hidden flex flex-col gap-8 md:gap-11 items-center mt-16 md:mt-[120px]">
        <h2 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] text-center tracking-[-0.68px] leading-10 px-5">
          Trusted by Industry Leaders to ease their transportation
        </h2>
        <div className="flex gap-3.5 items-center px-5 md:px-20 overflow-x-auto pb-4 w-full justify-center flex-wrap">
          {clientLogos.map((logo) => (
            <div
              key={logo.alt}
              className="bg-white rounded-lg shadow-[1px_1px_5px_rgba(0,0,0,0.08),-1px_-1px_5px_rgba(0,0,0,0.08)] w-[120px] md:w-[161px] h-[65px] md:h-[85px] flex items-center justify-center p-3 shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* How Can We Help You - Service Cards */}
      <div className="w-full flex flex-col gap-12 md:gap-20 items-center mt-16 md:mt-[120px] overflow-hidden">
        <h2 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] text-center tracking-[-0.56px] leading-10">
          How can we help you?
        </h2>

        <div className="relative flex items-center justify-center w-full h-[400px] md:h-[533px]">
          {/* Left card (tilted) */}
          <div className="absolute -rotate-6 opacity-80 w-[280px] md:w-[396px] h-[380px] md:h-[533px] -translate-x-[55%] md:-translate-x-[65%]">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src={services[1].image}
                alt={services[1].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-5 left-5 right-5 flex flex-col gap-2">
                <h4 className="font-['Manrope',sans-serif] font-bold text-xl md:text-[28px] text-white leading-tight">
                  {services[1].title}
                </h4>
                <p className="font-['Manrope',sans-serif] font-medium text-sm md:text-base text-white/85 leading-6">
                  {services[1].description}
                </p>
              </div>
              <div className="absolute inset-0 border border-[#e7e7e8] rounded-xl" />
            </div>
          </div>

          {/* Center card */}
          <div className="relative z-10 w-[280px] md:w-[396px] h-[380px] md:h-[533px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-5 left-5 right-5 flex flex-col gap-2">
                <h4 className="font-['Manrope',sans-serif] font-bold text-xl md:text-[28px] text-white leading-tight">
                  {services[0].title}
                </h4>
                <p className="font-['Manrope',sans-serif] font-medium text-sm text-white/85 leading-6">
                  {services[0].description}
                </p>
              </div>
              <div className="absolute inset-0 border border-[#e7e7e8] rounded-xl" />
            </div>
          </div>

          {/* Right card (tilted) */}
          <div className="absolute rotate-6 opacity-80 w-[280px] md:w-[396px] h-[380px] md:h-[533px] translate-x-[55%] md:translate-x-[65%]">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src={services[2].image}
                alt={services[2].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-5 left-5 right-5 flex flex-col gap-2">
                <h4 className="font-['Manrope',sans-serif] font-bold text-xl md:text-[28px] text-white leading-tight">
                  {services[2].title}
                </h4>
                <p className="font-['Manrope',sans-serif] font-medium text-sm md:text-[14px] text-white/70 leading-6">
                  {services[2].description}
                </p>
              </div>
              <div className="absolute inset-0 border border-[#e7e7e8] rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="w-full max-w-[1216px] px-5 mt-16 md:mt-[120px]">
        <div
          className="rounded-3xl px-6 md:px-[224px] py-8 flex flex-col items-center gap-4"
          style={{
            backgroundImage:
              "linear-gradient(171deg, rgb(249,250,251) 0%, rgb(254,242,242) 100%)",
          }}
        >
          <h3 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] text-center tracking-[0.4px] leading-10">
            Ready to Transform Your Logistics?
          </h3>
          <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] text-center tracking-[-0.31px] leading-[26px] max-w-[751px]">
            Join hundreds of businesses across India who trust Sandeep Logistics
            for their shipping needs.
          </p>
          <Link
            href="/contact"
            className="bg-[#e82930] text-white font-['Inter',sans-serif] font-medium text-base px-6 py-2.5 rounded-lg hover:bg-[#c00108] transition-colors tracking-[-0.69px]"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Spacing before footer */}
      <div className="h-16 md:h-[120px]" />
    </div>
  );
}
