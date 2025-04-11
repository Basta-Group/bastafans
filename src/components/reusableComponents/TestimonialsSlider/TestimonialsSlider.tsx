import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fastspinCooImage from "../../../assets/testimonials/testimonial-image-2.jpeg";
import titanSlotsCtoImage from "../../../assets/testimonials/titan-slots-cto.jpg";
import fastspinCoo2Image from "../../../assets/testimonials/fastspin-coo-2.jpg";

const TestimonialsSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "CFO, OneThing Design Studios",
      rating: 5,
      image: fastspinCooImage,
      text: "NGLCert's platform has revolutionized our certification process, making it faster and more efficient than ever before.",
    },
    {
      name: "CTO, Titan Slots",
      rating: 4,
      image: titanSlotsCtoImage,
      text: "NGLCert gave us everything we needed to enter the market quickly. Their reports were accepted by our regulator instantly.",
    },
    {
      name: "COO, FastSpin Studios",
      rating: 4,
      image: fastspinCoo2Image,
      text: "Finally, a cert platform that understands how fast game studios move.",
    },
  ];

  return (
    <div className=" pb-16 px-0">
      <Slider
        {...settings}
        className="[&_.slick-track]:flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full [&_.slick-slide>div]:w-full [&_.slick-dots]:mt-6 [&_.slick-dots_li]:inline-block [&_.slick-dots_li]:mx-1 [&_.slick-dots_button]:w-2 [&_.slick-dots_button]:h-2 [&_.slick-dots_button]:bg-gray-600 [&_.slick-dots_button]:rounded-full [&_.slick-dots_.slick-active_button]:bg-gray-600 [&_.slick-dots_button]:opacity-50 [&_.slick-dots_.slick-active_button]:opacity-100"
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-[#A3C2F8] p-6 rounded-xl flex flex-col h-full min-h-[240px] ">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < testimonial.rating
                            ? "text-black"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 flex-grow">{testimonial.text}</p>
              <button className="text-gray-600 text-sm font-medium hover:text-gray-800 text-left">
                read more
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
