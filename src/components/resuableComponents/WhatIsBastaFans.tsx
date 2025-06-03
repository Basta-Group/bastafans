// components/WhatIsBastaFans.tsx
import hero1 from "../../assets/fans-1.png";
import hero2 from "../../assets/fans-2.png";
import hero3 from "../../assets/fans-3.png";
import hero4 from "../../assets/fans-4.png";
import hero5 from "../../assets/fans-5.png";

const WhatIsBastaFans = () => {
  return (
    <section className=" text-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">What Is Basta Fans?</h2>
      <p className="max-w-3xl mx-auto text-lg mb-6">
        BFTV Is A Free On-Demand Video Streaming Platform And App That Hosts
        Video Content From BastaFans Creators Of All Genres, Including Fitness,
        Cooking, Music, Comedy, And Educational. BFTV Also Creates High-Quality
        Original Scriptless Programming Including Competition Shows, Reality
        Series, And More.
      </p>
      <button className="bg-[#009BFF] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600">
        Sign Up
      </button>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 px-6 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <img
            src={hero1}
            alt="hero1"
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          <img
            src={hero2}
            alt="hero2"
            className="rounded-xl w-full object-cover"
          />
          <img
            src={hero3}
            alt="hero3"
            className="rounded-xl w-full object-cover"
          />
          <img
            src={hero4}
            alt="hero4"
            className="rounded-xl w-full object-cover"
          />
          <img
            src={hero5}
            alt="hero5"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsBastaFans;
