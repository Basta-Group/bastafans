import React from "react";
import aboutImg1 from "../assets/about-basta-img-1.png";
import aboutImg2 from "../assets/about-basta-img-2.png";
import aboutImg3 from "../assets/about-basta-img-3.png";
import aboutImg4 from "../assets/about-basta-img-4.png";
import aboutGirl from "../assets/about-basta-girl.png";

const AboutBastaPlay: React.FC = () => {
  return (
    <section className="relative pt-20 bg-gradient-to-r from-[#1E255A] to-[#324ED7] ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-row items-start mb-6 w-full justify-center lg:justify-start">
            <div className="w-1 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-[#FFB347] to-[#FF7B54] rounded-full mr-4"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-left">
              ABOUT BASTA PLAY
            </h2>
          </div>
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-8 max-w-lg">
            Experience The Thrill Of Ultimate Gaming With Exa Gaming. Immerse
            Yourself In A World Of Captivating Slots, Featuring Innovative
            Themes, Stunning Graphics, And Massive Payouts. Enjoy Fair Gameplay,
            Top-Notch Security, And Exceptional Customer Support. Join Our
            Community Of Satisfied Players Today And Unlock A World Of Endless
            Entertainment!
          </p>
          <button className="bg-[#FF6248] hover:bg-[#ff8b6b] text-white px-7 py-3 mb-3 rounded-full font-semibold shadow-lg transition-colors flex items-center gap-2 mx-auto lg:mx-0 text-base sm:text-lg">
            CONTACT US <span className="ml-2">➔</span>
          </button>
        </div>
        {/* Right: Images as grid */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="grid grid-cols-2 gap-4 items-stretch overflow-x-auto">
            {/* 2x2 grid of 4 images on the left */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 h-full min-w-[180px] sm:min-w-[260px] md:min-w-[320px]">
              <img
                src={aboutImg1}
                alt="1200 Games In Plan"
                className="rounded-xl w-full min-w-[80px] sm:min-w-[100px] md:min-w-[120px] h-auto"
              />
              <img
                src={aboutImg2}
                alt="1M Game Launch"
                className="rounded-xl w-full min-w-[80px] sm:min-w-[100px] md:min-w-[120px] h-auto"
              />
              <img
                src={aboutImg3}
                alt="20K+ Daily Users"
                className="rounded-xl w-full min-w-[80px] sm:min-w-[100px] md:min-w-[120px] h-auto"
              />
              <img
                src={aboutImg4}
                alt="80 Games"
                className="rounded-xl w-full min-w-[80px] sm:min-w-[100px] md:min-w-[120px] h-auto"
              />
            </div>
            {/* Girl image on the right, full height */}
            <div className="flex items-center justify-center h-full min-h-[180px] sm:min-h-[260px] md:min-h-[320px]">
              <img
                src={aboutGirl}
                alt="About Basta Girl"
                className="h-full max-h-[320px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBastaPlay;
