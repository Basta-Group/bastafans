import React from "react";
import OfficeInterior from "../../assets/news-bg.png";
import ContactSection from "../../components/homePage/ContactSection";
import NewsIcon from "../../assets/icons/news-icon.svg";

// Sample news items — you can later fetch these from an API
const newsItems = [
  {
    type: "ANNOUNCEMENT",
    title: "Basta Group's 2025 Chairman's Letter to Investors",
    date: "Apr 11, 2025",
  },
  {
    type: "ANNOUNCEMENT",
    title: "2025 Retirement Summit",
    date: "Apr 11, 2025",
  },
  {
    type: "STATEMENT",
    title:
      "Dismissal of Tennessee Attorney General lawsuit against Basta Group",
    date: "Apr 11, 2025",
  },
  {
    type: "STATEMENT",
    title: "Response to letter from Attorneys General on China Disclosures",
    date: "Apr 11, 2025",
  },
  {
    type: "ANNOUNCEMENT",
    title: "Q4 2024 earnings: Larry Fink interview on CNBC",
    date: "Apr 11, 2025",
  },
  {
    type: "ANNOUNCEMENT",
    title: "Q4 2024 earnings: Basta Rade interview on CNBC",
    date: "Apr 11, 2025",
  },
  // Repeat a few for demonstration
  {
    type: "ANNOUNCEMENT",
    title: "2025 Retirement Summit",
    date: "Apr 11, 2025",
  },
  {
    type: "ANNOUNCEMENT",
    title: "Basta Group's 2025 Chairman's Letter to Investors",
    date: "Apr 11, 2025",
  },
  {
    type: "ANNOUNCEMENT",
    title: "Q4 2024 earnings: Basta Rade interview on CNBC",
    date: "Apr 11, 2025",
  },
  {
    type: "STATEMENT",
    title: "Response to letter from Attorneys General on China Disclosures",
    date: "Apr 11, 2025",
  },
];

const NewsMediaPage: React.FC = () => (
  <div className="min-h-screen bg-black overflow-x-hidden md:pt-[64px]">
    {/* Hero section */}
    <section className="bg-black max-w-7xl mx-auto text-white flex flex-col-reverse md:flex-row items-center justify-between py-12 px-2 gap-2 mt-5">
      <div className="flex-1 flex flex-col justify-center items-start">
        <h2 className="text-4xl lg:text-5xl text-white mb-4 leading-tight">
          Basta Group's Global <br /> Newsroom
        </h2>
        <p className="text-white opacity-90 mb-6 text-base md:text-lg max-w-xl">
          Read our latest announcements, statements, press releases, and facts
          about the business.
        </p>
        <button className="border border-white px-5 py-2 rounded font-medium text-sm md:text-base text-white hover:bg-white hover:text-black transition duration-300">
          MEDIA CONTACTS
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={OfficeInterior}
          alt="Office Environment"
          className="rounded-xl w-full object-cover"
        />
      </div>
    </section>

    {/* News cards section */}
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="border-b border-black pb-6">
              <div className="text-xs font-bold text-black flex items-center gap-1 mb-1">
                <img
                  src={NewsIcon}
                  alt="news icon"
                  title="News announcement"
                  className="w-4 h-4"
                />
                {item.type}
              </div>
              <h3 className="font-bold text-lg text-black leading-snug mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-black">{item.date}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="border border-black px-6 py-2 text-sm font-medium rounded text-black hover:bg-black hover:text-white transition duration-300"
            title="Load more news articles"
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </section>

    {/* Contact section */}
    <ContactSection theme="dark" />
  </div>
);

export default NewsMediaPage;
