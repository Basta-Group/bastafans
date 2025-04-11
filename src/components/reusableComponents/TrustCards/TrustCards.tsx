import React from "react";

interface TrustCardProps {
  icon: React.ReactNode;
  title: string;
  bgColor?: string;
}

const TrustCard: React.FC<TrustCardProps> = ({
  icon,
  title,
  bgColor = "bg-[#6b9ef4]",
}) => {
  return (
    <div className={`${bgColor} text-white p-6 rounded-lg text-center`}>
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
    </div>
  );
};

interface TrustCardsProps {
  cards: TrustCardProps[];
}

const TrustCards: React.FC<TrustCardsProps> = ({ cards }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
        {cards.map((card, index) => (
          <TrustCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default TrustCards;
