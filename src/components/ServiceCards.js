"use client";

import { useState } from "react";

const services = [
  {
    title: "Vehicle Transportation",
    description:
      "We transport vehicles safely from OEM plants to dealerships across India, ensuring timely and secure delivery in factory condition.",
    image: "/images/home-service-vehicle.jpg",
  },
  {
    title: "E-Commerce & FMCG Cargo",
    description:
      "We provide efficient transportation for e-commerce and FMCG goods, ensuring fast and reliable delivery to meet customer demands.",
    image: "/images/home-service-ecommerce.jpg",
  },
  {
    title: "Spare Parts, Engines, & General Goods Transport",
    description:
      "We safely transport spare parts, engines, and general goods, ensuring secure and timely deliveries for all types of cargo.",
    image: "/images/home-service-parts.jpg",
  },
];

function ServiceCard({ service, position, onClick }) {
  const isCenter = position === "center";
  const isLeft = position === "left";

  return (
    <div
      onClick={onClick}
      className={`absolute transition-all duration-500 ease-in-out w-[280px] md:w-[396px] h-[380px] md:h-[533px] ${
        isCenter
          ? "z-10 rotate-0 opacity-100 translate-x-0"
          : isLeft
            ? "z-0 -rotate-6 opacity-80 -translate-x-[55%] md:-translate-x-[65%]"
            : "z-0 rotate-6 opacity-80 translate-x-[55%] md:translate-x-[65%]"
      } ${!isCenter ? "cursor-pointer" : ""}`}
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-5 left-5 right-5 flex flex-col gap-2">
          <h4 className="font-['Manrope',sans-serif] font-bold text-xl md:text-[28px] text-white leading-tight">
            {service.title}
          </h4>
          <p
            className={`font-['Manrope',sans-serif] font-medium text-sm md:text-base leading-6 ${
              isCenter ? "text-white/85" : "text-white/70"
            }`}
          >
            {service.description}
          </p>
        </div>
        <div className="absolute inset-0 border border-[#e7e7e8] rounded-xl" />
      </div>
    </div>
  );
}

export default function ServiceCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const getPosition = (index) => {
    if (index === activeIndex) return "center";
    // Calculate relative position
    const diff = (index - activeIndex + services.length) % services.length;
    if (diff === 1) return "right";
    return "left";
  };

  return (
    <div className="w-full flex flex-col gap-12 md:gap-20 items-center mt-16 md:mt-[120px] overflow-hidden">
      <h2 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] text-center tracking-[-0.56px] leading-10">
        How can we help you?
      </h2>

      <div className="relative flex items-center justify-center w-full h-[400px] md:h-[533px]">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            position={getPosition(index)}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
