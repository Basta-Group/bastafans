import React from "react";
import divisionCard1 from "../../assets/divisionCards/division-card-1.png";
import divisionCard2 from "../../assets/divisionCards/division-card-2.png";
import divisionCard3 from "../../assets/divisionCards/division-card-3.png";

const divisions = [
  {
    title: "BASTA Social ",
    image: divisionCard1, // Use imported image
    points: [
      "A next-generation social networking platform.",
      "Seamlessly connect, chat, create, and share",
      "Advanced image/video editing tools, immersive social features and Powerful built-in AI",
      "Launching soon — get ready to experience social media, redefined",
    ],
  },
  {
    title: "BASTA FINANCE",
    image: divisionCard2, // Use imported image
    points: [
      "Licensed in Malta, Canada, USA",
      "Basta Pay – multi-currency accounts, crypto IBANs, prepaid cards",
      "24/7 compliance & secure APIs",
    ],
  },
  {
    title: "BASTA AI (LAUNCHING 2026)",
    image: divisionCard3, // Use imported image
    points: [
      "BastaGPT 4 & 5 (LLM models)",
      "Basta Code (AI dev tools)",
      "Basta Sova (compliance AI)",
      "Module B (AI module marketplace)",
    ],
  },
];

const DivisionsSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-center text-3xl lg:text-5xl xl:text-6xl mb-12">
        DIVISIONS
      </h2>
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {divisions.map((division, idx) => (
          <div
            key={idx}
            className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={division.image}
              alt={division.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 custom-font">
                {division.title}
              </h3>
              <ul className="space-y-2 text-sm opacity-80 list-disc list-inside">
                {division.points.map((point, i) => (
                  <li
                    key={i}
                    className="truncate overflow-hidden whitespace-nowrap text-ellipsis"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DivisionsSection;
