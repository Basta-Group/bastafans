import React from "react";

import OwnershipIcon from "../../assets/advantages-1.png";
import InclusivityIcon from "../../assets/advantages-2.png";
import FreedomIcon from "../../assets/advantages-3.png";
import SafetyIcon from "../../assets/advantages-4.png";

interface Advantage {
  icon: string;
  title: string;
  desc: string;
}

const advantages: Advantage[] = [
  {
    icon: OwnershipIcon,
    title: "Creative Ownership",
    desc: "OnlyFans Creators Own 100% Of Their Content, And Keep 80% Of All Earnings.",
  },
  {
    icon: InclusivityIcon,
    title: "Inclusivity",
    desc: "All Creators And Their Fans (18+) Deserve A Safe And Inclusive Platform To Connect And Share.",
  },
  {
    icon: FreedomIcon,
    title: "Freedom",
    desc: "OnlyFans Creators Are Free To Express Their Most Authentic Selves Through Their Content.",
  },
  {
    icon: SafetyIcon,
    title: "Safety",
    desc: "OnlyFans Strives To Be The Safest Online Platform. We Use Industry-Leading Internal Controls, And We Will Never Monetize Or Sell Your Data.",
  },
];

const AdvantagesSection: React.FC = () => {
  return (
    <section className="bg-[#1f2233] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Advantages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 md:gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="relative backdrop-blur-[20px] bg-gradient-to-r from-[#2a3142] to-transparent border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className="bg-[#20293A] border-[3px] border-[#1F2233] rounded-full absolute top-[-47px]">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-20 h-20 p-4 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mt-10 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
