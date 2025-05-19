import React from "react";
import OfficeInterior from "../../../assets/office.png";
import RadeBastaImage from "../../../assets/rade-basta-img.png";
import BusinessCardSection from "../../../components/BusinessCardsSection/BusinessCardSection";
import professionalImage1 from "../../../assets/d-empire-2.png";
import professionalImage2 from "../../../assets/d-empire-2.png";
import professionalImage3 from "../../../assets/d-empire-2.png";
import professionalImage4 from "../../../assets/d-empire-2.png";
import ContactSection from "../../../components/homePage/ContactSection";

const AboutUs: React.FC = () => {
  const professionalsData = [
    {
      title: "JOHN SMITH",
      image: professionalImage1,
      subtitle: "CEO, Bionic Group",
      linkedinUrl: "linkedin.com/in/johnsmith",
    },
    {
      title: "FIONA MILLER",
      image: professionalImage2,
      subtitle: "CEO, Bionic Group",
      linkedinUrl: "linkedin.com/in/johnsmith",
    },
    {
      title: "BEN GIBSON",
      image: professionalImage3,
      subtitle: "CEO, Bionic Group",
      linkedinUrl: "linkedin.com/in/johnsmith",
    },
    {
      title: "GINY BERGEN",
      image: professionalImage4,
      subtitle: "CEO, Bionic Group",
      linkedinUrl: "linkedin.com/in/johnsmith",
    },
  ];
  const corePrinciplesData = [
    {
      title: "ADD VALUE TO OTHERS",
      image: professionalImage1,
      subtitle:
        "Adding value to others entails valuing them first as an individual. Next, we listen, understand, and meet their needs to build a trusted and productive relationship.",
    },
    {
      title: "MAKE TOMORROW BETTER",
      image: professionalImage2,
      subtitle:
        "Adding value to others entails valuing them first as customers and partners. Next, we listen to their needs to build a trusted and productive relationship first to build a better tomorrow.",
    },
    {
      title: "SELL RESULTS NOT TIME",
      image: professionalImage3,
      subtitle:
        "Our customer satisfaction is our top priority, so we ensure value and solutions. We don’t sell our clients a timeline; we provide them with a service that ensures their success.",
    },
  ];
  const differenceData = [
    {
      title: "OUR EXPERIENCE",
      image: professionalImage1,
      subtitle:
        "We’re driven to share our passion by helping others achieve success in their business endeavors. Our ramp-up process is designed to empower your team and outfit them with the tools they need to succeed. Our 20+ years of industry experience enables us to support your growth, limit your turnover, and put you on a solid track to success and profit.",
    },
    {
      title: "OUR GOAL",
      image: professionalImage2,
      subtitle:
        "We strive to teach you all of the time and guidance you deserve. We train new business mentors are key to business success. We know when it comes to client selection, it can be very particular. Whether you’re seeking a strategic alliance or a special skill set or tool, we can partner with you to create a refined plan for success.",
    },
    {
      title: "OUR APPROACH",
      image: professionalImage3,
      subtitle:
        "Our service includes a comprehensive consultation to help identify gaps and opportunities — a comprehensive report that includes a project plan with timelines and milestones, a cost analysis, and a schedule. We also offer a suite of quality products that will help you get there quickly and smoothly to ensure your success.",
    },
  ];
  return (
    <div className="min-h-screen bg-black overflow-x-hidden md:pt-[64px]">
      <section className="bg-black max-w-7xl mx-auto text-white flex flex-col-reverse md:flex-row items-center justify-between py-12 px-2 gap-2 mt-5">
        <div className="flex-1 flex flex-col justify-center items-start">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
            Who We Are
          </h1>
          <p className="text-white opacity-90 mb-4 text-base md:text-lg">
            We are a team of professionals with combined experience in every
            aspect of the supply chain. Our team of consultants possesses the
            front and back-end knowledge you need to maximize your operations.
          </p>
          <p className="text-white opacity-90 mb-4 text-base md:text-lg">
            Improve your business today with our tailor-made, digitized
            solutions for your supply chain and warehouse management needs.
          </p>
          <ul className="text-white opacity-60 text-base md:text-lg space-y-2 mb-6 list-disc pl-4">
            <li>Software Implementation and Support</li>
            <li>Businnes Optimization</li>
            <li>Streamlining Start-ups</li>
            <li>Driving Efficiency and Communication</li>
          </ul>
          <button className="bg-transparent border border-white px-5 py-2 rounded font-semibold text-sm md:text-base hover:bg-white hover:text-black transition duration-300">
            GET IN TOUCH WITH US
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={OfficeInterior}
            alt="Office Environment"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </section>
      <section className="bg-white ">
        <div className="max-w-7xl mx-auto text-black flex flex-col md:flex-row items-center justify-between py-12 px-6 gap-8 mt-5">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={RadeBastaImage}
              alt="Rade Basta"
              className="rounded-xl md:w-[450px] h-auto object-cover"
            />
          </div>
          <div className="flex-1 text-left md:pl-10">
            <h2 className="text-3xl md:text-5xl  mb-4">Our Founder</h2>
            <ul className="text-black opacity-70 text-base md:text-lg space-y-2">
              <li>
                <strong>Founder:</strong> Rade Basta
              </li>
              <li>Former Minister of Economy</li>
              <li>Visionary behind Basta Group's global expansion</li>
              <li>
                Mission-driven to unite Gaming, FinTech, and AI technologies
                into a powerful digital empire
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* linkdin cards */}
      <section>
        <BusinessCardSection
          title=""
          cards={professionalsData}
          useSlider={true}
          theme="dark"
        />
      </section>{" "}
      {/* core principles cards */}
      <section>
        <BusinessCardSection
          title="OUR CORE PRINCIPLES"
          cards={corePrinciplesData}
          useSlider={false}
          theme="light"
        />
      </section>{" "}
      {/* core principles cards */}
      <section>
        <BusinessCardSection
          title="HOW WE MAKE A DIFFERENCE"
          cards={differenceData}
          useSlider={false}
          theme="dark"
        />
      </section>{" "}
      <ContactSection theme="light" />
    </div>
  );
};

export default AboutUs;
