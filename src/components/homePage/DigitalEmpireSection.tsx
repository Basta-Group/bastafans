import React from "react";
import DEmpire1 from "../../assets/d-empire-1.png";
import DEmpire2 from "../../assets/d-empire-2.png";
import DEmpire3 from "../../assets/d-empire-3.png";

const DigitalEmpireSection: React.FC = () => {
  return (
    <section className="bg-white mt-5 py-12 md:py-24 px-6 ">
      <div className="max-w-7xl mx-auto text-black flex flex-col md:flex-row items-center justify-between   gap-2  ">
        <div className="flex-1 h-full">
          <div className="grid grid-cols-2 gap-2">
            <img
              src={DEmpire1}
              alt="Building"
              className="rounded-lg w-full h-[12.5rem] sm:h-[20.2rem] object-cover"
            />
            <div className="flex flex-col gap-2">
              <img
                src={DEmpire2}
                alt="Businessman"
                className="rounded-lg w-full h-24 sm:h-[9.7rem] object-cover"
              />
              <img
                src={DEmpire3}
                alt="Meeting"
                className="rounded-lg w-full h-24 sm:h-[9.7rem] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 md:pl-12">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl mb-4">
            A DIGITAL EMPIRE BORN IN MALTA
          </h2>
          <p className="mb-4 text-black opacity-60 text-sm md:text-lg">
            Basta Group is a Malta-based technology group with a global
            footprint across Social networking, financial services, and
            artificial intelligence. Founded by former Minister of Economy Rade
            Basta, we are building the most complete, regulated, and scalable
            digital ecosystem in the world.
          </p>
          <div className="mb-2 font-bold">Osnovni podaci:</div>
          <ul className="list-disc list-inside text-sm md:text-lg text-black opacity-60">
            <li>
              <b>HQ:</b> Malta
            </li>
            <li>
              <b>Divisions:</b> Social networking | Finance | AI
            </li>
            <li>
              <b>Licenses:</b> EMI, MSB, MGA, Vanuatu, Anjouan, UKGC
            </li>
            <li>
              <b>Offices:</b> USA, Canada, India, Serbia
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DigitalEmpireSection;
