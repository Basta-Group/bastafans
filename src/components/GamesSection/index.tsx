import React, { useState } from "react";
import GameCard from "../GameCard";
import game1 from "../../assets/game-images/all-games-1.png";
import game2 from "../../assets/game-images/all-games-2.png";
import game3 from "../../assets/game-images/all-games-3.png";
import game4 from "../../assets/game-images/all-games-4.png";
import game5 from "../../assets/game-images/all-games-5.png";
import game6 from "../../assets/game-images/all-games-6.png";
import game7 from "../../assets/game-images/all-games-7.png";
import game8 from "../../assets/game-images/all-games-8.png";

// Tab type definition
type TabType =
  | "All Games"
  | "Slots"
  | "Original Games"
  | "Table Games"
  | "Virtual Games";

const GamesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("All Games");

  const tabs: TabType[] = [
    "All Games",
    "Slots",
    "Original Games",
    "Table Games",
    "Virtual Games",
  ];

  const games = [
    {
      title: "CHINESE TREASURE",
      image: game1,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "blue" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA COMIX SAGA",
      image: game2,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "green" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "GODS OF ANCIENT GREECE",
      image: game3,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "purple" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA SHADOW SAMURAI",
      image: game4,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "orange" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA MAFIA BOSS",
      image: game5,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "blue" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "CHEF FORTUNE",
      image: game6,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "purple" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA MAGICAL RUSH",
      image: game7,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "green" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA EGYPTIAN MYSTERIES",
      image: game8,
      provider: "BASTA MAGIC CASTLE",
      subtitle:
        "Trigger Free Games, Multiply Wins, And Enjoy A Cascade Of Golden Wealth",
      color: "orange" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
  ];

  return (
    <section className="py-16 bg-[#151929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold">
            <span className="text-white">ALL</span>{" "}
            <span className="text-[#FF6B6B]">GAMES</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-base font-medium transition-all duration-300  bg-[#23263a] text-white focus:outline-none ${
                activeTab === tab
                  ? "bg-[#FF6B6B] text-white"
                  : "bg-[#1a1f2e] text-white/70 hover:bg-[#FF6B6B]/10"
              }`}
              style={{
                clipPath:
                  "polygon(10% 0, 90% 0, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0 75%, 0 25%)",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-12 text-center">
          <button
            className="px-8 py-2 bg-[#1a1f2e] text-white font-bold rounded-full transition-colors uppercase shadow-none border-none outline-none"
            style={{ minWidth: 120, fontSize: 18 }}
          >
            SHOW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
