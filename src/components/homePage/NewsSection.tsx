import React from "react";
import LargeNewsImage from "../../assets/large-news.png";
import SmallNewsImage from "../../assets/small-news.png";

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: "LATEST FROM THE ECOSYSTEM",
      desc1: "Basta AI: Launch Timeline Announced",
      desc2: "Basta Pay Canada now open for Latin American clients",
      desc3: "Strategic Roadmap 2025–2027 + 5 Casino Launches",
    },
    {
      id: 2,
      title: "LATEST FROM THE ECOSYSTEM",
      desc1: "Basta AI: Launch Timeline Announced",
      desc2: "Basta Pay Canada now open for Latin American clients",
      desc3: "Strategic Roadmap 2025–2027 + 5 Casino Launches",
    },
    {
      id: 3,
      title: "LATEST FROM THE ECOSYSTEM",
      desc1: "Basta AI: Launch Timeline Announced",
      desc2: "Basta Pay Canada now open for Latin American clients",
      desc3: "Strategic Roadmap 2025–2027 + 5 Casino Launches",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-12">NEWS</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Main News */}
          <div className="flex-1 relative">
            <img
              src={LargeNewsImage}
              alt="Main News"
              className="w-full rounded-xl object-cover h-[320px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-xl">
              <h3 className="text-sm font-semibold mb-1 custom-font">
                LATEST FROM THE ECOSYSTEM
              </h3>
              <p className="text-sm custom-font">
                Basta AI: Launch Timeline Announced
              </p>
              <p className="text-sm">
                Basta Pay Canada now open for Latin American clients
              </p>
              <p className="text-sm">
                Strategic Roadmap 2025–2027 + 5 Casino Launches
              </p>
            </div>
          </div>

          {/* Right - News List */}
          <div className="flex-1 flex flex-col gap-6">
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                className="flex items-start gap-4 border-b border-gray-700 pb-4 items-center"
              >
                <img
                  src={SmallNewsImage}
                  alt={`News ${index + 1}`}
                  className="w-24 h-16 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-xs font-semibold mb-1 custom-font">
                    {item.title}
                  </h4>
                  <p className="text-xs">{item.desc1}</p>
                  <p className="text-xs">{item.desc2}</p>
                  <p className="text-xs">{item.desc3}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
