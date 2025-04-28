import React from "react";
import Slider from "react-slick";
import GameCard from "../GameCard";
import gameImg1 from "../../assets/game-img-1.png";
import gameImg2 from "../../assets/game-img-2.png";
import gameImg3 from "../../assets/game-img-3.png";
import gameImg4 from "../../assets/game-img-4.png";

// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PopularGamesSectionProps {
  title?: string;
}

const PopularGamesSection: React.FC<PopularGamesSectionProps> = ({
  title = "OUR POPULAR GAMES",
}) => {
  // Example popular games data
  const popularGames = [
    {
      title: "BASTA MAGIC CASTLE",
      image: gameImg1,
      provider: "BASTA MAGIC CASTLE",
      subtitle: "Fire On Fire.",
      color: "blue" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA CANDY SPLASH",
      image: gameImg2,
      provider: "BASTA CANDY SPLASH",
      subtitle: "New Way Of Playing.",
      color: "purple" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA WILD GUARDIANS",
      image: gameImg3,
      provider: "BASTA WILD GUARDIANS",
      subtitle: "Particles Out Of The Mechanics",
      color: "green" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA VIKING'S SPIRIT",
      image: gameImg4,
      provider: "BASTA VIKING'S SPIRIT",
      subtitle: "Fire On Fire.",
      color: "orange" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    // Repeat games to show continuous sliding
    {
      title: "BASTA MAGIC CASTLE",
      image: gameImg1,
      provider: "BASTA MAGIC CASTLE",
      subtitle: "Fire On Fire.",
      color: "blue" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
    {
      title: "BASTA CANDY SPLASH",
      image: gameImg2,
      provider: "BASTA CANDY SPLASH",
      subtitle: "New Way Of Playing.",
      color: "purple" as const,
      stats: {
        category: "Instant",
        maxWin: "X3891",
        volatility: "Low",
        rtp: "95%",
      },
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  // Split the title into two parts for styling
  const titleParts = title.split(" ");
  const firstPart = titleParts.slice(0, -1).join(" ");
  const lastPart = titleParts[titleParts.length - 1];

  return (
    <section className="py-16 bg-[#181a29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center">
            <span className="text-white">{firstPart}</span>{" "}
            <span className="text-[#FF6B6B]">{lastPart}</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="game-slider-container">
          <Slider {...settings}>
            {popularGames.map((game, index) => (
              <div key={index} className="px-3">
                <GameCard {...game} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .game-slider-container .slick-dots {
          bottom: -40px;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }
        .game-slider-container .slick-dots li {
          margin: 0;
        }
        .game-slider-container .slick-dots li button {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .game-slider-container .slick-dots li button:before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #bcbec4;
          opacity: 1;
          transition: all 0.2s;
        }
        .game-slider-container .slick-dots li.slick-active button:before {
          background: #fff;
          border: 2px solid #fff;
          box-sizing: border-box;
          width: 8px;
          height: 8px;
        }
        .game-slider-container .slick-dots li.slick-active button:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid #bcbec4;
        }
        .game-slider-container .slick-track {
          padding: 20px 0;
        }
        .game-slider-container .slick-prev,
        .game-slider-container .slick-next {
          width: 40px;
          height: 40px;
          z-index: 1;
        }
        .game-slider-container .slick-prev:before,
        .game-slider-container .slick-next:before {
          color: #FF6B6B;
          font-size: 40px;
        }
        .game-slider-container .slick-prev {
          left: -50px;
        }
        .game-slider-container .slick-next {
          right: -50px;
        }
        @media (max-width: 1024px) {
          .game-slider-container .slick-prev {
            left: -30px;
          }
          .game-slider-container .slick-next {
            right: -30px;
          }
        }
      `}</style>
    </section>
  );
};

export default PopularGamesSection;
