export default function Department() {
  return (
    <div className="bg-white flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 -top-8">
          <img
            src="/images/dept-hero.jpg"
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

      {/* Main Content */}
      <div className="w-full max-w-[1280px] px-5 md:px-10 flex flex-col gap-16 md:gap-[100px] items-center mt-16 md:mt-[120px]">
        {/* CEO / People First Card */}
        <div className="bg-white rounded-[20px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.1)] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
          {/* CEO Image */}
          <div className="shrink-0">
            <div className="size-48 md:size-64 lg:size-72 rounded-full border-8 border-white shadow-[0px_0px_0px_4px_#f3f4f6,0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden p-2">
              <img
                src="/images/dept-ceo.jpg"
                alt="Sandeep Kaliraman, CEO"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <h2 className="font-['Inter',sans-serif] font-medium text-3xl md:text-4xl lg:text-[48px] tracking-[0.37px] leading-tight lg:leading-[60px]">
              <span className="text-[#0a0a0a]">People First: </span>
              <span className="text-[#e82930]">The Heart and Soul</span>
              <span className="text-[#0a0a0a]"> of Our Success</span>
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] tracking-[-0.31px] leading-[26px]">
              <span className="font-bold">Mr. Sandeep Kaliraman</span> strongly
              believes that organizations are built by people, and without them
              they are nothing but a lot of idle machines and technology. He
              believes that the employees are the internal customers of the
              company. For any business to be successful, its customers need to
              be happy and satisfied.
            </p>
          </div>
        </div>

        {/* Our Workforce Section */}
        <div className="flex flex-col gap-12 md:gap-16 w-full px-0 md:px-5">
          {/* Section Heading */}
          <div className="flex flex-col items-center">
            <h2 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] text-center tracking-[0.37px] leading-10">
              Our Workforce: The Heart of the Business
            </h2>
          </div>

          {/* Content Blocks */}
          <div className="flex flex-col gap-16 md:gap-[84px]">
            {/* Block 1: Employee Types (text left, image right) */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1 flex flex-col gap-6 p-4 md:p-6 rounded-3xl">
                <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] tracking-[-0.31px] leading-[26px]">
                  There are basically two sets of employees here
                </p>

                <div className="flex flex-col gap-4">
                  {/* Admin Department */}
                  <div className="flex gap-4 items-start">
                    <div className="size-2 bg-[#e82930] rounded-full shrink-0 mt-2.5" />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-['Inter',sans-serif] font-medium text-lg text-[#0a0a0a] tracking-[-0.44px] leading-[27px]">
                        The Administration Department Personnel
                      </h3>
                      <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] tracking-[-0.31px] leading-6">
                        who facilitate the smooth functioning and coordination of
                        the entire business.
                      </p>
                    </div>
                  </div>

                  {/* Drivers */}
                  <div className="flex gap-4 items-start">
                    <div className="size-2 bg-[#e82930] rounded-full shrink-0 mt-2.5" />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-['Inter',sans-serif] font-medium text-lg text-[#0a0a0a] tracking-[-0.44px] leading-[27px]">
                        The Drivers
                      </h3>
                      <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] tracking-[-0.31px] leading-6">
                        who spend considerable time on the road and are critical
                        to timely deliveries. With an eye out for the internal
                        customers, these are hired employees that do Standard
                        Logistics.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] tracking-[-0.31px] leading-[26px]">
                  With employees as the internal customers, there are various
                  initiatives here at Sandeep Logistics.
                </p>
              </div>

              <div className="flex-1 min-h-[250px] md:min-h-[388px] rounded-lg overflow-hidden">
                <img
                  src="/images/dept-workforce.jpg"
                  alt="Sandeep Logistics fleet"
                  className="w-full h-full object-cover min-h-[250px] md:min-h-[388px]"
                />
              </div>
            </div>

            {/* Block 2: Recognizing Drivers (image left, text right) */}
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
              <div className="flex-1 flex flex-col gap-5">
                <h3 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] tracking-[0.4px] leading-10">
                  Recognizing Excellence: Celebrating Our Drivers
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] tracking-[-0.31px] leading-[26px]">
                  Every year in August we give rewards like &quot;The Best Driver
                  of the Year&quot;, The Driver Who Made the Maximum Trips, The
                  Driver Who Made Maximum Early Deliveries etc. Apart from the
                  appreciation they&apos;re given gifts of daily use like Washing
                  Machines, Television or something that the driver desires of.
                </p>
              </div>

              <div className="flex-1 min-h-[250px] md:min-h-[388px] rounded-lg overflow-hidden">
                <img
                  src="/images/dept-drivers.jpg"
                  alt="Celebrating our drivers"
                  className="w-full h-full object-cover min-h-[250px] md:min-h-[388px]"
                />
              </div>
            </div>

            {/* Block 3: Team Spirit (text left, image right) */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1 flex flex-col gap-5">
                <h3 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] tracking-[0.4px] leading-10">
                  Building Team Spirit: Fun and Fellowship in the Office
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] tracking-[-0.31px] leading-[26px]">
                  As for the administration, regular small parties in the office
                  take place with the amount collected as fines from employees if
                  they do not follow rules and regulations. This creates a fun
                  and enjoyable working environment.
                </p>
              </div>

              <div className="flex-1 min-h-[250px] md:min-h-[388px] rounded-lg overflow-hidden">
                <img
                  src="/images/dept-team.jpg"
                  alt="Team building and fun at office"
                  className="w-full h-full object-cover min-h-[250px] md:min-h-[388px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment Banner */}
        <div
          className="w-full max-w-[1216px] rounded-3xl px-6 md:px-[224px] pt-12 pb-12"
          style={{
            backgroundImage:
              "linear-gradient(169deg, rgb(249,250,251) 0%, rgb(254,242,242) 100%)",
          }}
        >
          <div className="flex flex-col items-center gap-6 max-w-[736px] mx-auto">
            <h3 className="font-['Inter',sans-serif] font-medium text-2xl md:text-[32px] text-[#0a0a0a] text-center tracking-[0.4px] leading-10">
              Our Commitment to Excellence
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-base text-[#717182] text-center tracking-[-0.31px] leading-[26px]">
              At Sandeep Logistics, we believe that our people are our greatest
              asset. By investing in their growth, recognizing their
              achievements, and fostering a positive work environment, we create
              a foundation for sustainable success and exceptional service
              delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Spacing before footer */}
      <div className="h-16 md:h-[120px]" />
    </div>
  );
}
