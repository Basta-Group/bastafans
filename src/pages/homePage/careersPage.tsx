import React from "react";
import OfficeInterior from "../../assets/office.png";
import SearchIcon from "../../assets/search-white.png";
import BusinessCardSection from "../../components/BusinessCardsSection/BusinessCardSection";

// Sample images for cards
import whatWeDoImage1 from "../../assets/office-img.png";
import whatWeDoImage2 from "../../assets/office-img.png";
import whatWeDoImage3 from "../../assets/office-img.png";
import whatWeDoImage4 from "../../assets/office-img.png";
import davidImage from "../../assets/office-img.png";
import aminaImage from "../../assets/office-img.png";
import carlosImage from "../../assets/office-img.png";

const CareersPage: React.FC = () => {
  const whatWeDoData = [
    {
      image: whatWeDoImage1,
      title: "FinTech Solutions",
      subtitle:
        "Through Basta Pay, we provide digital accounts, international payments, crypto infrastructure, and full regulatory compliance.",
    },
    {
      image: whatWeDoImage2,
      title: "Digital Platforms",
      subtitle:
        "We develop tools for connection, content, and communication, including Basta Social, Basta Fans, and Basta Click.",
    },
    {
      image: whatWeDoImage3,
      title: "AI & Security",
      subtitle:
        "With Basta AI and Basta Secure, we're building the future of open-source artificial intelligence and global cybersecurity systems.",
    },
    {
      image: whatWeDoImage4,
      title: "Infrastructure Development",
      subtitle:
        "We build core technical frameworks that power scalable, global digital services.",
    },
  ];
  const getToKnowOurPeopleData = [
    {
      image: whatWeDoImage1,
      title: "Tech Career at Basta",
      subtitle:
        "What does a tech career at Basta Finance look like? From building wallets to integrating PSPs, our developers lead global solutions.",
      writer: "– Livia, Senior Backend Engineer",
    },
    {
      image: whatWeDoImage1,
      title: "Navigating High-Risk Industries",
      subtitle:
        "Navigating high-risk industries without losing integrity: Why I joined Basta",
      writer: "– Rakesh, Compliance Officer",
    },
    {
      image: whatWeDoImage1,
      title: "Student to Leadership",
      subtitle:
        "From graduation to leadership: How Basta empowers students from emerging markets",
      writer: "– Tatiana, Operations Lead",
    },
  ];
  const employeeStoriesData = [
    {
      image: davidImage,
      title: "David – Risk & Regulation",
      subtitle:
        "“I came from traditional banking. Basta showed me what real impact looks like.”",
    },
    {
      image: aminaImage,
      title: "Amina – Product Designer",
      subtitle:
        "“Designing for gaming and crypto is fun, intense, and real-time. Every day is a sprint.”",
    },
    {
      image: carlosImage,
      title: "Carlos – LATAM Expansion Lead",
      subtitle:
        "“We're building a financial bridge from LATAM to the world — and I'm proud to lead it.”",
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden md:pt-[64px]">
      {/* First Fold */}
      <section className="bg-black text-white max-w-7xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center justify-between gap-10 mt-5">
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
            Our smartest investment is you
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Join the Basta Finance revolution.
          </p>

          <div className="space-y-6">
            <h2 className="text-3xl font-light">
              Search <span className="font-medium">Jobs</span>
            </h2>

            <div className="sm:max-w-[300px] w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Department"
                  className="w-full bg-transparent border-b border-white py-3 pl-2 pr-10 focus:outline-none placeholder-white/60"
                />
                <img
                  src={SearchIcon}
                  alt="Search"
                  className="absolute right-2 top-3 w-5 h-5"
                />
              </div>
            </div>

            <div className="sm:max-w-[300px] w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full bg-transparent border-b border-white py-3 pl-2 pr-10 focus:outline-none placeholder-white/60"
                />
                <img
                  src={SearchIcon}
                  alt="Search"
                  className="absolute right-2 top-3 w-5 h-5"
                />
              </div>
            </div>

            <p className="text-sm underline text-white/60">
              Explore open positions in Malta, Canada, the U.S., Mexico, and
              India.
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={OfficeInterior}
            alt="Office Environment"
            className="rounded-xl object-cover w-full max-w-lg"
          />
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto text-black flex flex-col md:flex-row items-center justify-between py-12 px-6 gap-8 mt-5">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={OfficeInterior}
              alt="Office Setup"
              className="rounded-xl md:w-[450px] h-auto object-cover"
            />
          </div>

          <div className="flex-1 text-left md:pl-10">
            <h2 className="text-3xl md:text-5xl mb-4">Who we are</h2>
            <p className="text-black opacity-80 text-base md:text-lg mb-4">
              Our purpose is to help bold and free-minded people experience
              financial well-being by disrupting outdated systems with speed,
              security, and inclusion.
            </p>
            <p className="text-black opacity-80 text-base md:text-lg">
              At Basta Finance, we're not just building fintech — we're building
              freedom. From gaming and crypto to adult content and influencer
              platforms, our clients don't fit the traditional mold — and
              neither do we. That's why we invest in people who think
              differently and want to build tools that truly matter.
            </p>
          </div>
        </div>
      </section>

      {/* What we do section */}
      <section>
        <BusinessCardSection
          title="WHAT WE DO AT BASTA GROUP"
          subtitle2="Three employees share their journey at Basta Finance:"
          cards={whatWeDoData}
          useSlider={false}
          cardsPerRow={4}
          theme="light"
        />
      </section>
      <section>
        <BusinessCardSection
          title="GET TO KNOW OUR PEOPLE"
          cards={getToKnowOurPeopleData}
          useSlider={false}
          cardsPerRow={3}
          theme="dark"
          hideTitle={true}
        />
      </section>
      <section>
        <BusinessCardSection
          title="A BIT ABOUT BASTA GROUP"
          subtitle2="Three employees share their journey at Basta Group:"
          cards={employeeStoriesData}
          useSlider={false}
          cardsPerRow={3}
          theme="light"
        />
      </section>

      {/* Culture, Benefits, and Career Development Section */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Our Culture */}
          <div className="bg-[#121317] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">OUR CULTURE</h3>
            <p className="text-white/80">
              We promote honesty, courage, and freedom — in the work, and
              innovation.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-[#121317] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">BENEFITS</h3>
            <p className="text-white/80">
              Remote-first culture, equity options, global travel, wellness
              perks, training programs, and more.
            </p>
          </div>

          {/* Career Development */}
          <div className="bg-[#121317] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">CAREER DEVELOPMENT</h3>
            <p className="text-white/80">
              You grow, we grow. Fast-track promotions, mentorship, and
              cross-border role mobility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
