import React from "react";

import girl from "../../assets/girl-gradient-orignal.png";
import CreatorCard from "../resuableComponents/CreatorCard";
import CreatorCardImg1 from "../../assets/creator-1.png";
import CreatorCardImg2 from "../../assets/creator-2.png";
import CreatorCardImg3 from "../../assets/creator-3.png";
import CreatorCardImg4 from "../../assets/creator-4.png";
import AdvantagesSection from "../resuableComponents/AdvantagesSection";
import GettingStartedSection from "../resuableComponents/GettingStartedSection";
import WhatIsBastaFans from "../resuableComponents/WhatIsBastaFans";
import FAQSection from "../resuableComponents/FAQSection";
import LogoSlider from "../resuableComponents";

const NewHomePage: React.FC = () => {
  const creators = [
    {
      imageSrc: CreatorCardImg1,
      name: "Ari Rae",
      handle: "ariraetv",
      likeCount: "805.4K",
    },
    {
      imageSrc: CreatorCardImg2,
      name: "Ari Rae",
      handle: "ariraetv",
      likeCount: "805.4K",
    },
    {
      imageSrc: CreatorCardImg3,
      name: "Ari Rae",
      handle: "ariraetv",
      likeCount: "805.4K",
    },
    {
      imageSrc: CreatorCardImg4,
      name: "Ari Rae",
      handle: "ariraetv",
      likeCount: "805.4K",
    },
  ];

  return (
    <div>
      <section className="relative text-white bg-[#16192A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-16 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 z-10">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              What Is Basta Fans?
            </h1>
            <p className="text-lg mb-8 line-height-1">
              OnlyFans Is A Platform Built For Creators And Fans. More Than 3
              Million Creators Have Used OnlyFans To Connect With Fans, And To
              Monetize Their Content Safely, Securely, And On Their Own Terms.
            </p>
            <button className="bg-[#1E90FF] hover:bg-[#187bcd] text-white px-8 py-2 rounded-full font-semibold transition">
              Sign Up
            </button>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center">
            <img
              src={girl}
              alt="Girl with gradient background"
              className="relative z-10 w-3/4 md:w-full max-w-md z-1"
            />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="rounded-xl w-full relative top-[-100px] left-0 z-10 backdrop-blur-[20px] bg-gradient-to-r from-[#2a3142] to-[transparent] border border-[rgba(255,255,255,0.1)]">
          <div className="p-8">
            {" "}
            <h2 className="text-center text-4xl font-bold mb-6">
              Join Us In Disrupting The Creator Economy
            </h2>
            <div className="flex flex-wrap justify-around text-center gap-6">
              <div className="mb-4 md:mb-0">
                <div className="text-2xl md:text-4xl font-bold">4500+</div>
                <div className="text-sm md:text-base">
                  Creators Have Earned Over $1M+
                </div>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="text-2xl md:text-4xl font-bold">80%</div>
                <div className="text-sm md:text-base">
                  Keep 80% Of Your Earnings
                </div>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="text-2xl md:text-4xl font-bold">400M+</div>
                <div className="text-sm md:text-base">
                  Total Users Worldwide
                </div>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="text-2xl md:text-4xl font-bold">4M+</div>
                <div className="text-sm md:text-base">Creators Worldwide</div>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="text-2xl md:text-4xl font-bold">$20B+</div>
                <div className="text-sm md:text-base">
                  Paid Over To Creators
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:pb-16 bg-[#1f2233] text-white">
        <h2 className="text-center text-4xl lg:text-6xl mb-6 font-bold mb-12">
          Hear From Our Creators
        </h2>
        <div className="flex justify-center flex-wrap gap-8 ">
          {creators.map((creator, index) => (
            <CreatorCard
              key={index}
              imageSrc={creator.imageSrc}
              name={creator.name}
              handle={creator.handle}
              likeCount={creator.likeCount}
            />
          ))}
        </div>
      </section>
      <AdvantagesSection />
      <GettingStartedSection />
      <WhatIsBastaFans />
      <FAQSection />
      <LogoSlider />
    </div>
  );
};

export default NewHomePage;
