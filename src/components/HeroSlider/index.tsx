import React from "react";
import bannerImg1 from "../../assets/banner-img-1.png";
import bannerImg2 from "../../assets/banner-img-2.png";
import bannerImg3 from "../../assets/banner-img-3.png";
import bannerBg from "../../assets/banner-bg.png";

const HeroSection: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <div
        className="min-h-[300px] md:min-h-[200px] rounded-[16px] md:rounded-[32px] m-2 md:m-4 relative"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full sm:w-[80%] mx-auto relative ">
          <div className="absolute inset-0 bg-[#F26747]/90 sm:bg-gradient-to-r sm:from-[#FF7B54]/90 sm:to-[#FFB347]/90 rounded-[16px] md:rounded-[32px] "></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-0 relative z-10 mt-25 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Characters - Now shown first on mobile */}
              <div className="md:w-1/2 relative mb-8 md:mb-0 md:order-2">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  {/* Mobile view - all three images in a row, centered */}
                  <div
                    className="md:hidden relative flex justify-center items-end gap-2"
                    style={{ minHeight: "320px" }}
                  >
                    <img
                      src={bannerImg2}
                      alt="Viking Character"
                      className="h-[300px] w-auto"
                    />
                    <img
                      src={bannerImg1}
                      alt="Warrior Character"
                      className="h-[360px] w-auto"
                    />
                    {/* <img
                      src={bannerImg3}
                      alt="Girl Character"
                      className="h-[300px] w-auto"
                    /> */}
                    {/* Shadow/Fade effect at the bottom */}
                  </div>
                  {/* Desktop view - all three images with absolute positioning */}
                  <div className="hidden md:block relative h-full ">
                    <img
                      src={bannerImg3}
                      alt="Warrior Character"
                      className="absolute right-[90px] sm:right-[120px] md:right-[166px] top-10 z-40 h-[240px] sm:h-[320px] md:h-[600px] w-auto"
                    />
                    <img
                      src={bannerImg1}
                      alt="Viking Character"
                      className="absolute right-[180px] sm:right-[240px] md:right-[170px] top-10 z-30 h-[240px] sm:h-[320px] md:h-[600px] w-auto"
                    />
                    <img
                      src={bannerImg2}
                      alt="Girl Character"
                      className="absolute right-[-100px] top-10 z-20 h-[240px] sm:h-[320px] md:h-[500px] w-auto hidden xl:block"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content - Now shown second on mobile */}
              <div className="md:w-1/2 text-white text-center md:text-left md:order-1 z-100">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-4  leading-tight ">
                  Take Your
                  <br />
                  GamingBusiness To
                  <br />
                  The Next Level
                </h1>
                <p className="text-sm sm:text-base md:text-base lg:text-lg mb-6 md:mb-2 opacity-90 max-w-xl mx-auto md:mx-0">
                  We Provide Unique Gamified Products Using Cutting-Edge
                  Technologies. Your Platform With Our Games Will Be The Best
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center justify-center md:justify-start">
                  <a
                    href="#games"
                    className="w-full sm:w-auto bg-[#4A90FF] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-4xl font-medium hover:bg-[#4A90FF]/90 transition-colors text-sm md:text-base"
                  >
                    SEE ALL GAMES
                  </a>
                  <a
                    href="#contact"
                    className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white px-6 md:px-8 py-2.5 mb-2 md:mb-0 md:py-3 rounded-4xl font-medium hover:bg-white/30 transition-colors text-sm md:text-base"
                  >
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
