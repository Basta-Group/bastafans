import React, { useState } from "react";
import TestimonialsSlider from "../reusableComponents/TestimonialsSlider/TestimonialsSlider";
import TrustCards from "../reusableComponents/TrustCards/TrustCards";
import manWorkingLaptop from "../../assets/man-working-laptop.png";
import certifyImg1 from "../../assets/certify-img-1.png";
import certifyImg2 from "../../assets/certify-img-2.png";
import certifyImg3 from "../../assets/certify-img-3.png";
import worldMapDotted from "../../assets/world-map-dotted.png";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid with your API key
sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY || "");

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    email: "",
    gameType: "",
    numberOfGames: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      await response.json();

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message:
          "Thank you for joining the waitlist! We will contact you soon.",
      });

      // Reset form
      setFormData({
        companyName: "",
        fullName: "",
        email: "",
        gameType: "",
        numberOfGames: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "There was an error submitting your form. Please try again.",
      });
    }
  };

  const trustCardsData = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 3v4a1 1 0 001 1h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "ISO/IEC 17025 & 27001 Certified",
      bgColor: "bg-[#6b9ef4]",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.541 20.038A9.018 9.018 0 0012 20.972c3.4 0 6.386-1.966 8-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Recognized by NGA, UKGC, Ontario, and more",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "All testing is fully remote and digital",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 7h6m0 10H9m3-14v18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Transparent pricing with fast-track options",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16 2v4M8 2v4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "72-hour express certification available",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 6l-10 7L2 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Certificates include QR verification & regulator-ready format",
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-white py-8 md:py-12 md:min-h-[80vh] ">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:px-8 rounded-lg   shadow-xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/5">
              <h1 className="text-5xl md:text-5xl font-bold text-black mb-6 leading-tight tracking-wide">
                GLOBAL GAME CERTIFICATION. ISO ACCREDITED. 100% ONLINE
              </h1>
              <p className="text-lg text-black opacity-60 mb-4">
                Slot Games, iOS Platforms, MGA Ready, UKGC Compliant, Proven RTF
              </p>
              <p className="text-lg font-bold mb-8">
                Be the first to certify your games with our ISO/IEC
                17025-accredited lab.
              </p>
              <button
                className="bg-[#3147C3] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
                onClick={() => {
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                JOIN THE WAITLIST
              </button>
            </div>
            <div className="md:w-2/5 relative flex flex-col justify-end  min-h-[100px] md:min-h-[400px] ">
              {/* Floating Cards */}
              <div className="absolute -top-4 right-0 z-10 flex gap-2 w-full min-h-32">
                <div className="bg-[#1162ED9E] text-white rounded-xl p-4 flex-1 min-h-32">
                  <div className="text-xl font-bold">Reviews</div>
                  <div className="text-xl font-bold">4.9 Points</div>
                </div>
                <div className="bg-[#3147C3] text-white rounded-xl p-4 flex-1 min-h-32">
                  <div className="text-xl font-bold">Launching</div>
                  <div className="text-xl font-bold">September 1st, 2025</div>
                  <div className="hidden md:block text-xl mt-1 font-medium">
                    - Join the Waitlist
                  </div>
                </div>
              </div>

              {/* Image Box at Bottom */}
              <div className="hidden md:block relative rounded-2xl bg-[#a5d9fe] h-64 mt-auto overflow-visible">
                <img
                  src={manWorkingLaptop}
                  alt="Professional using laptop"
                  className="hidden md:block overflow-visible absolute top-[40%]  left-2/7 w-100 h-100 z-10 transform -translate-x-1/2 -translate-y-1/2 scale-100 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Simple Steps Section */}
      <section className="py-12 md:py-16 bg-[#F4F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Side - Images */}
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="col-span-1">
                <img
                  src={certifyImg1}
                  alt="People discussion"
                  className="rounded-lg w-full h-[300px] sm:h-[395px] object-cover"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-4">
                <img
                  src={certifyImg2}
                  alt="Laptop graph"
                  className="rounded-lg w-full h-[190px] object-cover"
                />
                <img
                  src={certifyImg3}
                  alt="Building view"
                  className="rounded-lg w-full h-[190px] object-cover"
                />
              </div>
            </div>

            {/* Right Side - Text Steps */}
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-5xl font-bold text-black mb-8 leading-tight tracking-wide">
                CERTIFY YOUR GAMES
                <br />
                IN 4 SIMPLE STEPS
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "1. Register",
                    desc: "Create your account on NGLCert.com and access your dashboard.",
                  },
                  {
                    step: "2",
                    title: "2. Upload",
                    desc: "Securely upload your game files or RGS platform for testing.",
                  },
                  {
                    step: "3",
                    title: "3. We Test",
                    desc: "Our ISO/IEC 17025-accredited lab performs in-depth RTP, RNG, and compliance testing.",
                  },
                  {
                    step: "4",
                    title: "4. Get Certified",
                    desc: "Receive a digitally signed certificate and a detailed compliance report.",
                  },
                ].map(({ step, title, desc }) => (
                  <div className="flex items-start" key={step}>
                    <div className="rounded-full bg-[#6b9df4] text-white w-12 h-12 flex items-center justify-center text-sm font-semibold mr-4">
                      {step === "1" && (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      )}
                      {step === "2" && (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                          />
                        </svg>
                      )}
                      {step === "3" && (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      {step === "4" && (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{title}</h3>
                      <p className="text-[#00000099] font-semibold text-sm">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Studios Trust NGL Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-5xl font-bold text-black mb-8 leading-tight tracking-wide text-center">
            WHY STUDIOS & PLATFORMS <br /> TRUST NGL
          </h2>

          <TrustCards cards={trustCardsData} />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 bg-[#F4F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side - 30% */}
            <div className="w-full lg:w-[30%]">
              <h2 className="text-5xl md:text-5xl font-bold text-black mb-6 leading-tight tracking-wide">
                SIMPLE <br className="sm:hidden" />
                PRICING. NO <br className="sm:hidden" />
                HIDDEN FEES.
              </h2>
              <p className="text-gray-600 max-w-md">
                Custom packages available for game studios and aggregators.
              </p>
            </div>

            {/* Right Side - 70% with 3 boxes in one row */}
            <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "RGS CERTIFICATION", price: "€7,500" },
                { title: "ADDITIONAL JURISDICTION", price: "+€2,000" },
                {
                  title: "SLOT GAME TESTING (1–10 GAMES)",
                  price: "€1,500 / game",
                },
                { title: "BULK TESTING (11–50 GAMES)", price: "€1,200 / game" },
                { title: "RE-CERTIFICATION", price: "€500" },
                {
                  title: "FAST-TRACK (5 BUSINESS DAYS)",
                  price: "+€500 / game",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-8 text-center bg-white"
                  style={{ borderColor: "#3147C3", borderWidth: "1px" }}
                >
                  <h3 className="text-md font-bold mb-2">{item.title}</h3>
                  <p className="text-xl font-bold text-blue-600">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left - Contact Form */}
            <div id="contact-form" className="md:w-1/3 w-full">
              <div className="bg-[#a3c2f8] p-6 md:p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-center mb-6 text-black">
                  Contact NGL
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  <input
                    type="text"
                    name="gameType"
                    value={formData.gameType}
                    onChange={handleInputChange}
                    placeholder="Game Type (Slot / RGS / Other)"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  <input
                    type="number"
                    name="numberOfGames"
                    value={formData.numberOfGames}
                    onChange={handleInputChange}
                    placeholder="Estimated Number Of Games"
                    className="w-full p-3 border border-gray-300 rounded bg-white"
                    required
                  />
                  {formStatus.message && (
                    <div
                      className={`p-3 rounded ${
                        formStatus.success
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`w-full bg-[#3147C3] text-white rounded-full py-3 font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300 ${
                      formStatus.submitting
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {formStatus.submitting
                      ? "SUBMITTING..."
                      : "JOIN THE WAITLIST"}
                  </button>
                </form>
              </div>
            </div>

            {/* Right - Text + Image */}
            <div className="md:w-2/3 w-full">
              <h2 className="text-5xl md:text-5xl text-center font-bold text-black mb-8 leading-tight tracking-wide">
                GET EARLY ACCESS – JOIN <br />
                THE WAITLIST
              </h2>
              <p className="text-black opacity-60 mb-3">
                We're launching on September 1st, 2025.
              </p>
              <p className="text-black opacity-60 mb-3">
                Be among the first to certify your games with our accredited
                lab.
              </p>
              <p className="text-black opacity-60 mb-3">
                All early registrations receive a 10% discount on first
                certification.
              </p>
              <img src={worldMapDotted} alt="World map" className="w-full " />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-0">
          <h2 className="text-5xl md:text-5xl font-bold text-black mb-8 leading-tight tracking-wide text-center">
            WHAT OUR CUSTOMER SAID ABOUT US
          </h2>
          <TestimonialsSlider />
        </div>
      </section>
    </div>
  );
};

export default Home;
