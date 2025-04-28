import React from "react";
import { Link } from "react-router-dom";
import { games } from "../../data/games";

interface GameCardProps {
  title: string;
  image: string;
  subtitle: string;
  stats: {
    category: string;
    maxWin: string;
    volatility: string;
    rtp: string;
  };
  color?: "blue" | "purple" | "green" | "orange";
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  image,
  subtitle,
  stats,
  color = "blue",
}) => {
  const colorClasses = {
    blue: "bg-gradient-to-br from-[#1D2A8B] to-[#1554B1]",
    purple: "bg-gradient-to-br from-[#6C128A] to-[#AD0087]",
    green: "bg-gradient-to-br from-[#1C3D13] to-[#1C7622]",
    orange: "bg-gradient-to-br from-[#C43232] to-[#E98D41]",
  };

  // Find the slug for this game from the shared data
  const game = games.find((g) => g.title === title);
  const slug = game ? game.slug : "";

  return (
    <Link to={`/games/${slug}`} className="block h-full">
      <div
        className={`rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 ${colorClasses[color]}`}
      >
        <div className="relative aspect-[5/4]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="py-2 px-4 text-white">
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-sm text-gray-300 mb-4">{subtitle}</p>

          <div className="grid grid-cols-4 gap-4 text-center text-sm">
            <div>
              <p className="text-gray-400 text-xs mb-1">Category</p>
              <p className="font-medium">{stats.category}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Max Win</p>
              <p className="font-medium">{stats.maxWin}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Volatility</p>
              <p className="font-medium">{stats.volatility}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">RTP</p>
              <p className="font-medium">{stats.rtp}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
