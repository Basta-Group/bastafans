import React from "react";
import heartImg from "../../assets/icons/heart.png";

interface CreatorCardProps {
  imageSrc: string;
  name: string;
  handle: string;
  likeCount: string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({
  imageSrc,
  name,
  handle,
  likeCount,
}) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-full bg-[#16192A] w-64 ">
      <div className="rounded-full overflow-hidden w-full mb-4">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex  gap-3 items-center">
          <img
            src={imageSrc}
            alt={name}
            className="w-12 h-12 object-cover border-[3px] border-[#1F2233] rounded-full"
          />
          <div>
            <div className="text-xl font-semibold">{name}</div>
            <div className="text-gray-400 text-sm">@{handle}</div>
          </div>
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <span className="mr-1">
            <img src={heartImg} alt="" />
          </span>{" "}
          {likeCount}
        </div>
      </div>
      <button className="bg-[#1E90FF] hover:bg-[#187bcd] text-white px-2 py-2 rounded-full font-semibold transition w-1/2">
        Sign Up
      </button>
    </div>
  );
};

export default CreatorCard;
