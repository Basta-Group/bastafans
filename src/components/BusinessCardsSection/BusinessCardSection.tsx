import React from "react";
import Slider from "react-slick";

// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BusinessCard from "../resuableComponents/BusinessCard";

interface CardData {
  title: string;
  image: string;
  quote?: string;
  bulletPoints?: string[];
  subtitle?: string;
  writer?: string;
  linkedinUrl?: string;
}

interface BusinessCardSectionProps {
  title: string;
  subtitle?: string;
  subtitle2?: string;
  cards: CardData[];
  useSlider?: boolean;
  cardsPerRow?: 3 | 4;
  theme?: "light" | "dark";
  hideTitle?: boolean;
}

const BusinessCardSection: React.FC<BusinessCardSectionProps> = ({
  title,
  subtitle,
  subtitle2,
  cards,
  useSlider = true,
  cardsPerRow = 3,
  theme = "dark",
  hideTitle = false,
}) => {
  const isLightTheme = theme === "light";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(cards.length, useSlider ? 4 : 3),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(cards.length, 3),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(cards.length, 2),
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Decide grid column class based on cardsPerRow
  const gridColsClass = cardsPerRow === 4 ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <section
      className={`pt-6 pb-16 md:py-16 ${
        isLightTheme ? "bg-white" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`mb-2 md:mb-8 ${
            subtitle ? "md:flex justify-between" : ""
          }`}
        >
          <h2 className="text-3xl lg:text-5xl text-center ">
            <span className={isLightTheme ? "text-black" : "text-white"}>
              {title}
            </span>
          </h2>
          {subtitle && (
            <p
              className={`text-center mt-2 md:max-w-[550px] mx-auto ${
                isLightTheme ? "text-black" : "text-white"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Subtitle2 */}
        {subtitle2 && (
          <p
            className={`text-center mt-2 md:mt-4 md:max-w-[650px] mx-auto ${
              isLightTheme ? "text-black" : "text-white"
            }`}
          >
            {subtitle2}
          </p>
        )}

        {/* Cards (with or without Slider) */}
        <div className="business-slider-container mt-8">
          {useSlider ? (
            <Slider {...settings}>
              {cards.map((card, index) => (
                <div key={index} className="px-3">
                  <BusinessCard
                    {...card}
                    isLightTheme={isLightTheme}
                    hideTitle={hideTitle}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div
              className={`max-w-6xl mx-auto grid grid-cols-1 ${gridColsClass} gap-6`}
            >
              {cards.map((card, index) => (
                <BusinessCard
                  key={index}
                  {...card}
                  isLightTheme={isLightTheme}
                  hideTitle={hideTitle}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .business-slider-container .slick-dots {
          bottom: -40px;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }
        .business-slider-container .slick-dots li {
          margin: 0;
        }
        .business-slider-container .slick-dots li button {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .business-slider-container .slick-dots li button:before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: ${isLightTheme ? "#d1d1d1" : "#bcbec4"};
          opacity: 1;
          transition: all 0.2s;
        }
        .business-slider-container .slick-dots li.slick-active button:before {
          background: ${isLightTheme ? "#d1d1d1" : "#fff"};
          border: 2px solid ${isLightTheme ? "#d1d1d1" : "#fff"};
          box-sizing: border-box;
          width: 8px;
          height: 8px;
        }
        .business-slider-container .slick-dots li.slick-active button:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid ${isLightTheme ? "#d1d1d1" : "#bcbec4"};
        }
        .business-slider-container .slick-track {
          padding: 20px 0;
        }
        @media (max-width: 768px) {
          .business-slider-container .slick-dots {
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default BusinessCardSection;
