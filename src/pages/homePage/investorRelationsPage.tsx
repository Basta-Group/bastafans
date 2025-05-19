import React from "react";
import ContactSection from "../../components/homePage/ContactSection";
import EarIcon from "../../assets/icons/earning-icon.png";
import EarIcon2 from "../../assets/icons/earning-2.png";
import micImg from "../../assets/icons/mic.png";
import divisionsBg from "../../assets/division-bg.png";
import buildingBg from "../../assets/building-bg.png";

const InvestorRelationsPage: React.FC = () => {
  // Array of press releases
  const pressReleases = [
    {
      title:
        "Basta Group Reports First Quarter 2025 Diluted EPS of $9.64, or $11.30 as adjusted",
      date: "Apr 11, 2025",
    },
    {
      title: "Basta Group to Report First Quarter 2025 Earnings on April 11th",
      date: "Apr 1, 2025",
    },
    {
      title:
        "Basta Group Nominates Gregory Fleming and Kathleen Murphy to Board of Directors",
      date: "Apr 1, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden md:pt-[64px]">
      <section className="max-w-7xl mx-auto py-16 px-4">
        {/* Left Column */}
        <div className="flex-1 flex flex-col md:flex-row justify-between md:gap-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
              Investor <br /> Relations
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-xl">
              Latest information for interested parties of <br /> Basta Group
              stock (NYSE: BLK)
            </p>
            <ul className="opacity-60 list-disc list-inside text-white/80 mb-12">
              <li className="mb-2">
                <a href="#" className=" hover:text-white">
                  See our latest quarterly results
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white">
                  See our latest press releases
                </a>
              </li>
            </ul>
          </div>
          {/* Right Column: Stock Info */}
          <div className="bg-black text-white w-full max-w-xs font-serif">
            <div className="border-b border-white pb-2">
              <span className="text-sm text-white">NYSE: BLK</span>
            </div>

            <div className="border-b border-white py-4">
              <div className="flex justify-between">
                <span className="text-5xl font-light">$920.53</span>
                <div className="text-right">
                  <div className=" text-2xl ">-8.67</div>
                  <div className=" text-2xl">(-0.93%)</div>
                </div>
              </div>
            </div>

            <div className="border-b border-white py-4">
              <div className="flex justify-between text-lg">
                <span>Market Cap:</span>
                <span>$142.70B</span>
              </div>
            </div>

            <div className="pt-0">
              <span className="text-xs text-white">
                20 minutes min. delay | May 5, 2025 4:00 PM ET
              </span>
            </div>
          </div>
        </div>
        {/* Buttons Section */}
        <div className="max-w-5xl">
          {/* Headings Div */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 items-end mt-8">
            <div>
              <h3 className="text-2xl font-semibold leading-snug">
                2025 Annual <br /> Meeting Of <br /> Shareholders
              </h3>
            </div>
            <div>
              <h3 className="text-2xl font-semibold leading-snug">
                Annual Report <br /> And Proxy
              </h3>
            </div>
            <div>
              <h3 className="text-2xl font-semibold leading-snug">
                2023 <br /> Investor Day
              </h3>
            </div>
          </div>

          {/* Buttons Div */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-semibold">
            {/* 2025 Annual Meeting Buttons */}
            <div>
              <button className="w-full border border-white py-3 px-4 rounded hover:bg-white hover:text-black transition mb-4">
                WEBCAST
              </button>
              <button className="w-full border border-white py-3 px-4 rounded hover:bg-white hover:text-black transition mb-4">
                SHAREHOLDER QUESTION SUBMISSION
              </button>
              <button className="w-full border border-white py-3 px-4 rounded hover:bg-white hover:text-black transition">
                ANNUAL MEETING INFORMATION
              </button>
            </div>

            {/* Annual Report Buttons */}
            <div>
              <button className="w-full border border-white py-3 px-4 rounded hover:bg-white hover:text-black transition mb-4">
                2024 ANNUAL REPORT
              </button>
              <button className="w-full border border-white py-3 px-4 rounded hover:bg-white hover:text-black transition">
                2025 PROXY
              </button>
            </div>

            {/* Investor Day Buttons */}
            <div>
              <button className="w-full border border-white py-3 px-4 rounded hover:bg-white hover:text-black transition mb-4">
                FULL PRESENTATION
              </button>
              <button className="w-full border border-white py-3 px-4 rounded hover:bg-white hover:text-black transition">
                AGENDA
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* "Who We Are" Section */}
      <section className="bg-white text-black min-h-[450px] flex items-center">
        <div className="max-w-7xl mx-auto py-16 px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Who We Are</h2>
          <p className="text-black mb-6 max-w-3xl mx-auto font-[500]">
            Basta Group is a global investment manager and our purpose is to
            help more and more people experience financial well-being. As a
            fiduciary to investors and a leading provider of financial
            technology, our clients turn to us for the solutions they need when
            planning for their most important goals.
          </p>
          <button className="border border-black py-3 px-6 rounded hover:bg-black hover:text-white transition font-semibold text-sm">
            LEARN MORE
          </button>
        </div>
      </section>
      <section
        className="bg-gray-900 min-h-[500px] text-white flex items-center"
        style={{
          backgroundImage: `url(${divisionsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto py-16 px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-2">Divisions</h2>
          <p className="text-lg text-white/80 mb-8">Q1 2025</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Earnings Release", icon: EarIcon },
              { label: "Earnings Supplement", icon: EarIcon2 },
              { label: "Webcast", icon: micImg },
            ].map((item, index) => (
              <button
                key={index}
                className="flex items-center py-3 px-6 rounded font-semibold text-sm "
              >
                <img
                  src={item.icon}
                  alt={`${item.label} icon`}
                  className="w-5 h-5 mr-2"
                />
                {item.label}
              </button>
            ))}
          </div>
          <button className="mt-8 border border-white py-3 px-6 rounded hover:bg-white hover:text-black transition font-semibold text-sm">
            All Quarters
          </button>
        </div>
      </section>
      {/* Updated "Press Releases" Section with Array and Map */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <h2 className="text-4xl md:text-5xl mb-8">Press Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="border border-black rounded p-6">
                <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                <p className="text-xs text-black/70 mb-2">{release.date}</p>
                <a
                  href="#"
                  className="text-sm font-bold underline hover:text-black/80"
                >
                  Read full release
                </a>
              </div>
            ))}
          </div>
          <button className="border border-black py-3 px-6 rounded hover:bg-black hover:text-white transition font-semibold text-sm">
            ALL RELEASES
          </button>
        </div>
      </section>
      <section className="flex flex-col md:flex-row min-h-[500px] ">
        {/* Left Side with Image Background */}
        <div className="relative md:w-1/2 text-white py-16 px-10">
          {/* Background with overlay */}
          <div
            style={{
              backgroundImage: `url(${buildingBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="absolute inset-0 items-center"
          ></div>
          {/* Overlay with 35% opacity */}
          <div className="absolute inset-0 bg-black/55"></div>
          {/* Content */}
          <div className="relative z-10 justify-center flex flex-col h-full">
            <h3 className="text-2xl md:text-3xl mb-4">
              Basta Group, Inc. 2023 Investor Day
            </h3>
            <p className="text-lg mb-4">Jun 14, 2023</p>
            <ul className="list-disc list-inside text-white/80">
              {[
                "Shareholder Value Presentation",
                "Agenda",
                "Full Presentation",
              ].map((item, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="hover:text-white font-bold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 bg-black text-white flex flex-col justify-center py-16 px-10">
          <div>
            {" "}
            <h2 className="text-4xl md:text-5xl mb-8">Events</h2>
            <button className="border border-white py-3 px-6 rounded hover:bg-white hover:text-black transition font-semibold text-sm">
              All Events
            </button>
          </div>
        </div>
      </section>

      <ContactSection theme="light" />
    </div>
  );
};

export default InvestorRelationsPage;
