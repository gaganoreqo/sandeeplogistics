const coreValues = [
  {
    title: "Safety First",
    description:
      "GPS monitoring and strict speed limits ensure every shipment arrives safely",
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "People-Centered",
    description:
      "We invest in our team through recognition programs and professional development",
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Innovation Driven",
    description:
      "Cutting-edge technology for real-time tracking and operational excellence",
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Excellence in Service",
    description:
      "Committed to delivering exceptional logistics solutions across India",
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const techOperations = [
  {
    title: "Harnessing Cutting-Edge Technology for Operational Excellence",
    content:
      "For instance, Maruti Suzuki wants to transport a car from its Manesar plant to Ahmedabad. We load the cars from the Manesar plant into our trailer, transport them and deliver it to the destined dealer in Ahmedabad, doing so in a safe and timely fashion.",
  },
  {
    title: "Innovative Technology Driving Operational Precision",
    content:
      "On the technological side, we use GPS to monitor not only location, but also the speed of the vehicles. If the driver is over speeding, we get a notification at the very same instant. This way we can ensure that the driver is driving safely and well under the speed limits. Integration of all such elements into our custom ERP solution helps us to propel forward proactively. We also have a strong administrative team with around 95+ latest manned computers in place to ensure the smooth functioning of the business. Our entire process is systematic and computerized from as little as the creation of vouchers.",
  },
];

const safetyItems = [
  "Seat belt compliance monitoring to ensure driver safety",
  "Speed limit enforcement - drivers are instructed to travel at around 60 KM per hour, ensuring complete control of the vehicle and a safe journey",
  "Vehicle safety standard checks and monitoring",
  "Integration of all such elements into our custom ERP solution helps us to propel forward proactively.",
];

const techFeatures = [
  "Real-time GPS tracking for all shipments",
  "Cloud-based monitoring and route optimization",
  "Driver safety monitoring and speed control",
  "Automated fraud detection and prevention",
];

function BulletItem({ children, light }) {
  return (
    <div className="flex items-start gap-4">
      <div className="size-1.5 bg-[#e82930] rounded-full shrink-0 mt-[9px]" />
      <p
        className={`font-['Inter',sans-serif] ${
          light ? "font-light" : "font-normal"
        } text-base text-[#717182] tracking-[-0.5px] leading-6`}
      >
        {children}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 -top-8">
          <img
            src="/images/about-hero.jpg"
            alt="Sandeep Logistics truck on mountain road"
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

      {/* About Us Intro */}
      <div className="w-full max-w-[800px] px-5 flex flex-col gap-6 items-center mt-16 md:mt-[120px]">
        <p className="font-['Inter',sans-serif] font-medium text-[11px] text-[#0a0a0a] text-center uppercase tracking-[-0.21px] leading-[16.5px]">
          About Us
        </p>
        <h1 className="font-['Inter',sans-serif] font-medium text-3xl md:text-4xl lg:text-[48px] text-center tracking-[-1.34px] leading-tight lg:leading-[60px]">
          <span className="text-[#0a0a0a]">Connecting India Through </span>
          <span className="text-[#e82930]">Reliable Logistics</span>
        </h1>
        <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] text-center tracking-[-0.87px] leading-6">
          Sandeep Logistics is into transportation of vehicles from OEM business
          customers (Tata, Maruti Suzuki, Hyundai Motors, Kia, Toyota, Mahindra
          etc.) and transportation in container segment with transportation of
          FMCG Cargo Segment, E-Commerce, Engines, Spare Parts, Transmission,
          Coal and General Goods. with OEM Customers (Amazon, Delhivery,
          Flipkart, Maruti etc) presently operating Pan India across the four
          geographical zones of India, namely Eastern, Western, Southern and
          Northern India
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="w-full max-w-[1200px] px-6 flex flex-col gap-10 mt-16 md:mt-[120px]">
        <h2 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] text-center tracking-[-0.68px] leading-10">
          Our Mission &amp; Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Mission */}
          <div className="border border-black/8 rounded-xl p-5 flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5">
              <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <h3 className="font-['Inter',sans-serif] font-medium text-lg text-[#0a0a0a] tracking-[-0.15px] leading-6">
                Our Mission
              </h3>
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-sm text-[#717182] tracking-[-0.15px] leading-[21px]">
              To be India&apos;s most trusted logistics provider — growing with
              care for our drivers and commitment to excellence.
            </p>
          </div>

          {/* Vision */}
          <div className="border border-black/8 rounded-xl p-5 flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5">
              <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <h3 className="font-['Inter',sans-serif] font-medium text-lg text-[#0a0a0a] tracking-[-0.15px] leading-6">
                Our Vision
              </h3>
            </div>
            <ul className="list-disc ml-5 flex flex-col gap-1 font-['Inter',sans-serif] font-normal text-sm text-[#717182] tracking-[-0.15px] leading-[21px]">
              <li>
                Deliver factory-condition vehicles and cargo with complete
                customer satisfaction.
              </li>
              <li>
                Expand our fleet from 800+ to 5,000 vehicles, strengthening
                capacity and nationwide reach.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="w-full max-w-[1200px] px-6 flex flex-col gap-10 mt-16 md:mt-[120px]">
        <h2 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] text-center tracking-[-0.68px] leading-10">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="border border-black/8 rounded-xl p-5 flex flex-col gap-4 items-center"
            >
              <div className="size-14 rounded-full bg-gradient-to-b from-[#f5f5f5] to-[#e8e8e8] flex items-center justify-center">
                {value.icon}
              </div>
              <h3 className="font-['Inter',sans-serif] font-medium text-lg text-[#0a0a0a] text-center tracking-[-0.69px] leading-6">
                {value.title}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] text-center tracking-[-0.32px] leading-6">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology & Operations */}
      <div className="w-full max-w-[1200px] px-6 flex flex-col gap-12 mt-16 md:mt-[120px]">
        <h2 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] text-center tracking-[-0.68px] leading-10">
          Technology &amp; Operations
        </h2>

        <div className="flex flex-col gap-10">
          {/* Card 1 & 2 */}
          {techOperations.map((item) => (
            <div
              key={item.title}
              className="border border-black/8 rounded-xl p-6 flex flex-col gap-4"
            >
              <h3 className="font-['Inter',sans-serif] font-medium text-lg text-[#0a0a0a] tracking-[-0.87px] leading-6">
                {item.title}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] tracking-[-0.5px] leading-6">
                {item.content}
              </p>
            </div>
          ))}

          {/* Card 3: Safety */}
          <div className="border border-black/8 rounded-xl p-6 flex flex-col gap-4">
            <h3 className="font-['Inter',sans-serif] font-medium text-lg text-[#0a0a0a] tracking-[-0.87px] leading-6">
              Commitment to Driver Safety and Success
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] tracking-[-0.5px] leading-6">
              On the technological side, we use GPS to monitor not only location,
              but also the internal operations of vehicles to ensure safety
              standards are met. Our comprehensive monitoring includes:
            </p>
            <div className="flex flex-col gap-3">
              {safetyItems.map((item, i) => (
                <BulletItem key={i}>{item}</BulletItem>
              ))}
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] tracking-[-0.5px] leading-6">
              Our comprehensive approach ensures every shipment is protected from
              start to finish, overcoming all obstacles along the way.
            </p>
          </div>
        </div>
      </div>

      {/* Powered by Technology Section (gray bg) */}
      <div className="w-full bg-[#f9fafb] mt-16 md:mt-[120px] py-12 md:py-20 px-6 md:px-[132px]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Text */}
          <div className="flex-1 flex flex-col gap-6">
            <p className="font-['Inter',sans-serif] font-medium text-[11px] text-[#e82930] uppercase tracking-[-0.21px] leading-[16.5px]">
              Technology
            </p>
            <h2 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] tracking-[-0.68px] leading-10">
              Powered by Cutting-Edge Technology
            </h2>
            <p className="font-['Inter',sans-serif] font-light text-lg text-[#717182] tracking-[-0.87px] leading-7">
              Our fleet is equipped with advanced GPS technology and cloud-based
              monitoring systems for real-time tracking, ensuring transparency,
              security, and efficiency in every delivery.
            </p>
            <div className="flex flex-col gap-3">
              {techFeatures.map((item, i) => (
                <BulletItem key={i} light>
                  {item}
                </BulletItem>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 min-h-[250px] md:min-h-[350px] rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/images/about-tech.jpg"
              alt="GPS Tracking Technology"
              className="w-full h-full object-cover min-h-[250px] md:min-h-[350px]"
            />
          </div>
        </div>
      </div>

      {/* Nationwide Coverage Banner */}
      <div className="w-full max-w-[1216px] px-5 mt-16 md:mt-[120px]">
        <div
          className="rounded-3xl px-6 md:px-[224px] pt-12 pb-12"
          style={{
            backgroundImage:
              "linear-gradient(169deg, rgb(249,250,251) 0%, rgb(254,242,242) 100%)",
          }}
        >
          <div className="flex flex-col items-center gap-4 max-w-[751px] mx-auto">
            <h3 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] text-center tracking-[0.4px] leading-10">
              Nationwide Coverage
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] text-center tracking-[-0.31px] leading-[26px]">
              With offices and workshop locations strategically positioned across
              India, Sandeep Logistics ensures reliable and efficient service
              delivery to all major cities and regions. Our extensive network
              enables us to provide seamless logistics solutions tailored to your
              needs.
            </p>
          </div>
        </div>
      </div>

      {/* Spacing before footer */}
      <div className="h-16 md:h-[120px]" />
    </div>
  );
}
