import React from "react";
import RadeBastaImg from "../../assets/rade-basta-img.png";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black max-w-7xl mx-auto text-white flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6  gap-2  mt-5 ">
      <div className="flex-1 flex flex-col justify-center items-start mt-3">
        <h1 className="text-3xl lg:text-5xl xl:text-6xl mb-4">
          One Ecosystem.
          <br />
          Infinite Possibilities
        </h1>
        <p className="mb-6 text-sm md:text-lg text-white opacity-60">
          Social networking. Finance. AI. All under one sovereign digital roof.
        </p>
        <div className="flex gap-4 mb-2 text-sm md:text-base">
          <button className="bg-transparent border border-white px-2 md:px-5 py-2 rounded font-semibold">
            EXPLORE DIVISIONS
          </button>
          <button className="bg-transparent border border-white px-2 md:px-5 py-2 rounded font-semibold ">
            INVESTOR DECK
          </button>
        </div>
        <span className="text-sm text-white opacity-60 mt-2">
          Tamma AI mreža, globe visuals, logo centriran
        </span>
      </div>
      <div className="flex-1 flex justify-center items-center md:mt-0">
        <img
          src={RadeBastaImg}
          alt="Rade Basta"
          className="rounded-xl md:w-[450px] h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
