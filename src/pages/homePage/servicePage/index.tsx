/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import TermsImg from "../../../assets/bussiness-info.png";
import BusinessCardSection from "../../../components/BusinessCardsSection/BusinessCardSection";
import allianceImage1 from "../../../assets/allianz-card-1.png";
import allianceImage2 from "../../../assets/allianz-card-2.png";
import allianceImage3 from "../../../assets/allianz-card-3.png";
import solImg1 from "../../../assets/solutions-card-1.png";
import solImg2 from "../../../assets/solutions-card-2.png";
import solImg3 from "../../../assets/solutions-card-3.png";
import professionalImage1 from "../../../assets/l-card-1.png";
import professionalImage2 from "../../../assets/l-card-2.png";
import professionalImage3 from "../../../assets/l-card-3.png";
import professionalImage4 from "../../../assets/l-card-4.png";
import radeBasta from "../../../assets/rade-basta-img.png";

const ServicePage: React.FC = () => {
  const solutionsData = [
    {
      title: "David - Risk & Regulation",
      image: solImg1,
      quote:
        "I came from traditional banking, Basta showed me what real impact looks like.",
    },
    {
      title: "David - Risk & Regulation",
      image: solImg2,
      quote:
        "I came from traditional banking, Basta showed me what real impact looks like.",
    },
    {
      title: "David - Risk & Regulation",
      image: solImg3,
      quote:
        "I came from traditional banking, Basta showed me what real impact looks like.",
    },
  ];
  const alliancesData = [
    {
      title: "David - Risk & Regulation",
      image: allianceImage1,
      quote:
        "I came from traditional banking, Basta showed me what real impact looks like.",
    },
    {
      title: "David - Risk & Regulation",
      image: allianceImage2,
      quote:
        "I came from traditional banking, Basta showed me what real impact looks like.",
    },
    {
      title: "David - Risk & Regulation",
      image: allianceImage3,
      quote:
        "I came from traditional banking, Basta showed me what real impact looks like.",
    },
  ];
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
  return (
    <div className="min-h-screen bg-black overflow-x-hidden md:pt-[64px]">
      {/* HeroSection */}
      <section className="bg-black max-w-7xl mx-auto text-white flex flex-col-reverse md:flex-row items-center justify-between py-12 px-2 gap-3 mt-5">
        <div className="flex-1 flex flex-col justify-center items-start mt-3">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl mb-4">
            Business Information{" "}
            <span className="inline md:block">Systems</span>
          </h2>

          <div className="flex gap-4 mb-2 text-sm md:text-base">
            <button
              className="bg-transparent border border-white px-2 md:px-5 py-2 rounded font-semibold"
              title="Contact our business solutions team"
            >
              CONTACT US
            </button>
          </div>
          <span className="text-sm text-white font-[500] mt-2">
            Government contractors rely on us to build solutions that enable
            stability and scalability for accelerated business growth.{" "}
          </span>
        </div>
        <div className="flex-1 flex justify-center items-center md:mt-0">
          <img
            src={TermsImg}
            alt="Business Information Systems"
            title="Business Information Systems illustration"
            className="rounded-xl md:w-100 md:h-100 object-contain"
          />
        </div>
      </section>
      {/* content section */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto py-12 px-2 mt-5">
          <h2 className="text-xl font-bold mb-4">
            Many government contractors recognize that their information systems
            and financial processes have not kept pace with their growth and
            changing needs. We can help.
          </h2>
          <p className="mb-4">
            Baker Tilly helps organizations navigate their complex system
            environments. Our team of over 100 consultants have comprehensive
            technical systems knowledge, government contracting accounting
            expertise and full business process reengineering capabilities.
          </p>

          <p className="mb-4">
            We align your strategic vision in the development of integrated and
            compliant systems. Our approach to assessing, planning and
            integrating complex business systems provides our clients benefits
            including:
          </p>

          <ul className="list-disc pl-5 mb-4 opacity-60">
            <li className="mb-2">
              Enhanced ability to support business strategy, compliance
              priorities, employees and customers
            </li>
            <li className="mb-2">
              Rapid time to value in implementing critical enterprise systems
            </li>
            <li className="mb-2">
              Improved processes to drive increased efficiency and enhance
              competitive advantage
            </li>
          </ul>
        </div>
      </section>
      <section>
        <BusinessCardSection
          title="OUR SOLUTIONS"
          cards={solutionsData}
          useSlider={true}
        />{" "}
        <BusinessCardSection
          title="OUR STRATEGIC ALLIANCES"
          subtitle="We have extensive experience with industry-leading software applications, including Detek, Oracle, Tricents, Salesforce.com and many others."
          cards={alliancesData}
          useSlider={true}
        />{" "}
      </section>
      <section className="bg-white text-black">
        <div className="max-w-6xl mx-auto py-12 px-6 mt-5 font-[500]">
          <h2 className="text-2xl font-bold mb-4 uppercase">
            GovCon Specialization
          </h2>
          <p className="mb-1">
            Government contractors face unique challenges and opportunities
            within the U.S. Federal Government marketplace. With constantly
            changing requirements and client needs, contractors need to ensure
            their information systems and business processes keep pace with
            today's challenges and tomorrow's plans. We specialize in helping
            GovCon organizations traverse the complexities of the federal
            marketplace and execute transformational projects.
          </p>
          <p className="mb-1">
            Many of our clients work with the government across industries,
            including aerospace and defense, security, healthcare and
            not-for-profit, among others. In fact, Baker Tilly serves over 800
            government contracting clients, including the majority of the 100
            largest federal contractors.
          </p>
          <p className="mb-10">
            Our team of experts provides tailored solutions to meet the unique
            needs of each contractor, ensuring compliance, efficiency, and
            innovation. We align your strategic vision in the development of
            integrated and compliant systems.
          </p>
          <div className="flex justify-center gap-4 mb-2 text-sm md:text-base">
            <button
              className="bg-transparent border border-black px-2 md:px-5 py-2 rounded font-semibold uppercase"
              title="Learn more about our solutions"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* Rade basta section */}
      <section className="bg-black max-w-7xl mx-auto text-white flex flex-col md:flex-row items-center justify-between py-12 px-6 gap-8 mt-5">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={radeBasta}
            alt="Rade Basta"
            title="Rade Basta - Founder and CEO"
            className="rounded-xl md:w-[450px] h-auto object-cover"
          />
        </div>
        <div className="flex-1 text-left md:pl-10 relative">
          <p className="relative text-lg md:text-xl font-medium opacity-90 leading-relaxed before:content-['“'] before:absolute before:-top-6 before:-left-4 before:text-6xl before:text-white before:leading-none">
            Our clients appreciate the collaborative approach we bring to
            implementations. <br />
            Within a repeatable methodology, we plan and execute a project
            that’s unique to their needs.
          </p>
          <p className="mt-4 text-sm uppercase tracking-wide text-gray-400 custom-font">
            Rade Basta
          </p>
        </div>
      </section>

      <section>
        <BusinessCardSection
          title="OUR PROFESSIONALS"
          cards={professionalsData}
          useSlider={true}
          theme="light"
        />
      </section>
    </div>
  );
};

export default ServicePage;
