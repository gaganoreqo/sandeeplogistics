const regions = [
  {
    name: "EAST",
    cities: ["Kolkata", "Siliguri", "Guwahati", "Dimapur", "Agartala"],
    image: "/images/location-east.jpg",
    imageAlt: "Eastern region landmark",
  },
  {
    name: "WEST",
    cities: ["Ahmedabad", "Mohinwaj", "Nashik", "Bhopal", "Nagpur", "Pune"],
    image: "/images/location-west.jpg",
    imageAlt: "Western region city",
  },
  {
    name: "NORTH",
    cities: ["Gurugram", "Haridwar", "Ramtek"],
    image: "/images/location-north.jpg",
    imageAlt: "Northern region landscape",
  },
  {
    name: "SOUTH",
    cities: [
      "Batala",
      "Chennai",
      "Davanagere (FVP)",
      "Zaheerabad",
      "Hyderabad",
      "Anantapur",
    ],
    image: "/images/location-south.jpg",
    imageAlt: "Southern region waterscape",
  },
];

function LocationIcon() {
  return (
    <svg
      className="size-6 text-[#e82930]"
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
  );
}

function RegionSection({ region, reversed }) {
  const textContent = (
    <div className="flex flex-col gap-6 justify-center flex-1 min-w-0">
      {/* Region heading */}
      <div className="flex items-center gap-3">
        <div className="bg-[rgba(232,41,48,0.1)] rounded-[14px] size-12 flex items-center justify-center shrink-0">
          <LocationIcon />
        </div>
        <h3 className="font-['Inter',sans-serif] font-medium text-[28px] md:text-[32px] text-[#0a0a0a] tracking-[0.4px] leading-10">
          {region.name}
        </h3>
      </div>

      {/* City list */}
      <div className="border-l-4 border-[rgba(232,41,48,0.2)] pl-5 flex flex-col gap-3">
        {region.cities.map((city) => (
          <div key={city} className="flex items-center gap-3">
            <div className="size-2 bg-[#717182] rounded-full shrink-0" />
            <span className="font-['Inter',sans-serif] font-normal text-base text-[#717182] tracking-[-0.31px] leading-6">
              {city}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const imageContent = (
    <div className="relative flex-1 min-w-0 h-[250px] sm:h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
      <img
        src={region.image}
        alt={region.imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      {/* Region badge */}
      <div className="absolute bottom-4 left-4 bg-white/90 rounded-[10px] px-4 pt-2 pb-2">
        <p className="font-['Inter',sans-serif] font-normal text-sm text-[#0a0a0a] tracking-[-0.15px] leading-5">
          {region.name} Region
        </p>
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col md:flex-row gap-8 items-center ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {textContent}
      {imageContent}
    </div>
  );
}

export default function Location() {
  return (
    <div className="bg-white flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 -top-8">
          <img
            src="/images/location-hero.jpg"
            alt="Sandeep Logistics Office"
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

      {/* Main Content */}
      <div className="w-full max-w-[1280px] px-5 md:px-8 mt-16 md:mt-[120px]">
        {/* Section Title */}
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-16">
          <h2 className="font-['Inter',sans-serif] font-medium text-3xl sm:text-4xl md:text-[48px] text-center capitalize tracking-[0.35px] leading-tight md:leading-[60px]">
            <span className="text-[#0a0a0a]">Office and workshop </span>
            <span className="text-[#e82930]">locations</span>
          </h2>
          <div className="w-24 h-1 bg-[#e82930] rounded-full" />
        </div>

        {/* Region Sections */}
        <div className="flex flex-col gap-12 md:gap-[54px]">
          {regions.map((region, index) => (
            <RegionSection
              key={region.name}
              region={region}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Nationwide Coverage Banner */}
        <div
          className="mt-12 md:mt-16 rounded-3xl px-6 md:px-[224px] pt-12 pb-12"
          style={{
            backgroundImage:
              "linear-gradient(169deg, rgb(249,250,251) 0%, rgb(254,242,242) 100%)",
          }}
        >
          <div className="flex flex-col items-center gap-4 max-w-[750px] mx-auto">
            <h3 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] text-center tracking-[0.4px] leading-10">
              Nationwide Coverage
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] text-center tracking-[-0.31px] leading-[26px]">
              With offices and workshop locations strategically positioned
              across India, Sandeep Logistics ensures reliable and efficient
              service delivery to all major cities and regions. Our extensive
              network enables us to provide seamless logistics solutions tailored
              to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Spacing before footer */}
      <div className="h-16 md:h-[120px]" />
    </div>
  );
}
