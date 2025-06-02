import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bet1 from "../../assets/slider-1.png";
import bet2 from "../../assets/slider-2.png";
import bet3 from "../../assets/slider-3.png";

const LogoSlider: React.FC = () => {
  const posts = [
    {
      name: "Bet Partner 1",
      image: bet1,
      title:
        "Reaching The Right Audience With Strategic Marketing Approach And Dedicated Website",
      date: "Sep 19, 2025",
    },
    {
      name: "Bet Partner 2",
      image: bet2,
      title:
        "Boosting Subscriber Base Through Personalized Engagement Techniques",
      date: "Sep 20, 2025",
    },
    {
      name: "Bet Partner 3",
      image: bet3,
      title:
        "Building Brand Visibility With Creative Storytelling And Social Proof",
      date: "Sep 21, 2025",
    },
    {
      name: "Bet Partner 4",
      image: bet1,
      title:
        "Converting Viewers Into Paying Fans Using Smart Funnel Optimization",
      date: "Sep 22, 2025",
    },
    {
      name: "Bet Partner 5",
      image: bet2,
      title:
        "Retaining Loyal Followers With Exclusive Content And Consistent Value",
      date: "Sep 23, 2025",
    },
    {
      name: "Bet Partner 6",
      image: bet3,
      title:
        "Tracking Performance Metrics To Improve Revenue And Fan Satisfaction",
      date: "Sep 24, 2025",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className="logo-slider pb-10"
          role="region"
          aria-label="Logo carousel"
        >
          <Slider {...settings}>
            {posts.map((post, index) => (
              <div key={index} className="p-4">
                <div className=" rounded-xl p-2 h-full flex flex-row  gap-2">
                  <img
                    src={post.image}
                    alt={post.name}
                    className="w-[200px] h-[100px] object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-base  line-clamp-3">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 ">{post.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .logo-slider .slick-track {
          display: flex;
          align-items: stretch;
        }
        .logo-slider .slick-slide {
          transition: all 0.3s ease;
          height: inherit;
        }
        .logo-slider .slick-slide > div {
          margin: 0 0.5rem;
          height: 100%;
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

        @media (max-width: 640px) {
          .logo-slider .slick-dots {
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoSlider;
