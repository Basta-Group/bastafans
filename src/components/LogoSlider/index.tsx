import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bet2 from "../../assets/logo-slider/bet-2.png";
import bet3 from "../../assets/logo-slider/bet-3.png";
import bet4 from "../../assets/logo-slider/bet-4.png";

const LogoSlider: React.FC = () => {
  const logos = [
    {
      name: "Bet Partner 1",
      image: bet3,
    },
    {
      name: "Bet Partner 2",
      image: bet2,
    },
    {
      name: "Bet Partner 3",
      image: bet3,
    },
    {
      name: "Bet Partner 4",
      image: bet4,
    },
    // Repeat for continuous effect
    {
      name: "Bet Partner 1",
      image: bet3,
    },
    {
      name: "Bet Partner 2",
      image: bet2,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
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

  return (
    <section className="py-12 bg-[#0F1123]">
      <div className="max-w-7xl mx-auto">
        <div className="logo-slider pb-10">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="pb-6">
                <div className="flex items-center justify-center h-32 bg-[#151832] rounded-lg">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .logo-slider .slick-track {
          display: flex;
          align-items: center;
        }
        .logo-slider .slick-slide {
          transition: all 0.3s ease;
        }
        .logo-slider .slick-slide > div {
          margin: 0 0.5rem;
        }
        .logo-slider .slick-dots {
          bottom: -30px;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }
        .logo-slider .slick-dots li {
          margin: 0;
        }
        .logo-slider .slick-dots li button {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .logo-slider .slick-dots li button:before {
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
        .logo-slider .slick-dots li.slick-active button:before {
          background: #fff;
          border: 2px solid #fff;
          box-sizing: border-box;
          width: 8px;
          height: 8px;
        }
        .logo-slider .slick-dots li.slick-active button:after {
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
      `}</style>
    </section>
  );
};

export default LogoSlider;
