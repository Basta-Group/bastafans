import React from "react";
import aboutImg1 from "../assets/about-basta-img-1.png";
import aboutImg2 from "../assets/about-basta-img-2.png";
import aboutImg3 from "../assets/about-basta-img-3.png";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#181A29] pt-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Centered Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12 text-center">
          ABOUT <span className="text-[#FF6B6B]">BASTA PLAY</span>
        </h2>

        {/* 2-column layout: images grid left, description right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Left: 2x2 image grid, all images centered */}
          <div className="flex flex-col items-center md:items-center justify-center">
            <div className="flex flex-row gap-4 mb-4 w-full justify-center items-center">
              <div className="flex-1 flex justify-center items-center">
                <img
                  src={aboutImg1}
                  alt="1200 Games In Plan"
                  className="w-32 h-32 object-contain rounded-2xl"
                />
              </div>
              <div className="flex-1 flex justify-center items-center">
                <img
                  src={aboutImg2}
                  alt="1M Game Launch"
                  className="w-32 h-32 object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="flex w-full justify-center items-center">
              <img
                src={aboutImg3}
                alt="20K+ Daily Users"
                className="w-32 h-32 object-contain rounded-2xl"
              />
            </div>
          </div>
          {/* Right: Description */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left h-full">
            <h3 className="text-2xl font-bold text-white mb-4">
              BASTA PLAY —<br />
              INNOVATING THE FUTURE OF GAMBLING ENTERTAINMENT
            </h3>
            <ul className="text-white/80 space-y-2 text-base">
              <li>
                Welcome to Pixmove – where exciting gambling games meet endless
                entertainment! With a cast of colorful characters, our games are
                so lively, you'll feel like you've stepped into a cartoon
                adventure. Dive in, and watch the hours fly by as you enjoy the
                ride!
              </li>
            </ul>
          </div>
        </div>

        {/* Vision and What We Offer Section */}
        <div className="relative mt-16">
          <div className="bg-[#23263a] rounded-2xl p-8 relative z-10 mb-8">
            <h4 className="text-xl font-bold text-white mb-2">OUR VISION</h4>
            <p className="text-white/80">
              At Pixmove, We Envision A World Where Gambling Is Not Just About
              Winning But About The Journey. Our Mission Is To Redefine The
              Online Gambling Landscape By Creating Games That Are Not Only Fair
              And Secure But Also Immersive And Engaging.
            </p>
          </div>
          <div className="bg-[#181A29] flex flex-col md:flex-row items-stretch py-8 px-2 md:px-8 rounded-2xl shadow-lg gap-8 md:gap-0">
            {/* Left: Stacked Heading */}
            <div className="flex flex-col justify-center items-center md:items-start min-w-[120px] md:min-w-[160px] mb-4 md:mb-0">
              <span className="text-white font-extrabold text-2xl md:text-3xl leading-none mb-1 text-center md:text-left">
                WHAT
              </span>
              <span className="text-white font-extrabold text-2xl md:text-3xl leading-none mb-1 text-center md:text-left">
                WE
              </span>
              <span className="text-white font-extrabold text-2xl md:text-3xl leading-none text-center md:text-left">
                OFFER
              </span>
            </div>
            {/* Vertical Bar */}
            <div className=" hidden md:flex flex-col justify-center items-center mb-4 md:mb-0 md:mr-6">
              <div className="w-1 h-12 md:h-24 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full" />
            </div>
            {/* Middle: Offer List */}
            <div className="flex flex-col justify-center flex-1 min-w-[200px] mb-4 md:mb-0 md:mr-8 items-center md:items-start">
              <ul className="text-white text-base md:text-lg space-y-1 text-center md:text-left">
                <li>Innovative Game Design</li>
                <li>Cutting-Edge Technology</li>
                <li>User-Centric Approach</li>
                <li>Our Support At Every Stage</li>
              </ul>
            </div>
            {/* Right: Description */}
            <div className="flex flex-col justify-center flex-1 items-center md:items-start">
              <p className="text-white text-base md:text-lg text-center md:text-left px-2 md:px-0">
                Our Portfolio Features A Wide Array Of Games, From Classic Slots
                To Modern, Interactive Experiences. Each Game Is Crafted With
                Meticulous Attention To Detail, Ensuring A Seamless And
                Enjoyable Gaming Experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
