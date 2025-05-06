import React from "react";
import Img1 from "../../assets/JoinMovementSection-1.png"; // top left
import Img2 from "../../assets/JoinMovementSection-2.png"; // bottom left
import Img3 from "../../assets/JoinMovementSection-3.png"; // right side

const JoinMovementSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start mt-3">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl mb-4 text-black">
            Join the Movement
          </h2>
          <p className="mb-6 text-sm md:text-lg text-black opacity-60">
            We’re building a future-proof digital empire. From AI engineers to
            game designers and compliance experts, we’re hiring globally.{" "}
          </p>
          <div className="flex gap-4 mb-2 text-black">
            <button className="bg-transparent border border-black px-2 md:px-5 py-2 rounded font-semibold uppercase">
              Apply Now{" "}
            </button>
            <button className="bg-transparent border border-black px-2 md:px-5 py-2 rounded font-semibold uppercase">
              Open Roles{" "}
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img
              src={Img1}
              alt="Building 1"
              className="rounded-xl object-cover w-full  md:h-[180px]"
            />
            <img
              src={Img2}
              alt="Building 2"
              className="rounded-xl object-cover w-full md:h-[180px]"
            />
          </div>
          <img
            src={Img3}
            alt="Building 3"
            className="rounded-xl object-cover w-full h-full md:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinMovementSection;
