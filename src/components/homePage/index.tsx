import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <section className="bg-white py-12 h-[80vh]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              GLOBAL GAME CERTIFICATION. ISO ACCREDITED. 100% ONLINE
            </h1>
            <p className="text-gray-600 mb-6">
              NGL Games, iOS Platforms, Xbox Ready, WBGC Compliant, Protect IP!
            </p>
            <p className="font-medium mb-6">
              Be the first to certify your games with our ISO/IEC
              17025-accredited lab.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
              JOIN THE WAITLIST
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute top-0 right-0 bg-blue-500 text-white rounded-lg p-4 w-40 md:w-48">
              <div className="mb-1">Reviews</div>
              <div className="font-bold">4.9 Points</div>
              <div className="text-sm mt-2">Launching</div>
              <div className="text-sm">September 1st, 2025</div>
              <div className="text-sm">Join the Waitlist</div>
            </div>
            <img
              src="/api/placeholder/500/350"
              alt="Professional using laptop"
              className="rounded-lg ml-auto"
            />
          </div>
        </div>
      </section>

      {/* Four Simple Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 grid grid-cols-2 gap-4 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1700168333952-3d44a3f427af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Office space"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1700168333952-3d44a3f427af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Laptop detail"
                className="rounded-lg"
              />
              {/* <img src="https://images.unsplash.com/photo-1700168333952-3d44a3f427af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Woman working" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1700168333952-3d44a3f427af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Technology" className="rounded-lg" /> */}
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-8">
                CERTIFY YOUR GAMES IN 4 SIMPLE STEPS
              </h2>

              <div className="mb-6 flex">
                <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg">Register</h3>
                  <p className="text-gray-600">
                    Create your account on NGLCERT.com and access your
                    dashboard.
                  </p>
                </div>
              </div>

              <div className="mb-6 flex">
                <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg">Upload</h3>
                  <p className="text-gray-600">
                    Securely upload your game files or RSS platform for testing.
                  </p>
                </div>
              </div>

              <div className="mb-6 flex">
                <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg">We Test</h3>
                  <p className="text-gray-600">
                    Our ISO/IEC 17025-accredited lab performs in-depth RTF, RPG,
                    and compliance testing.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg">Get Certified</h3>
                  <p className="text-gray-600">
                    Receive a digitally signed certificate and a detailed
                    compliance report.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Studios Trust NGL Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            WHY STUDIOS & PLATFORMS TRUST NGL
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
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
              </div>
              <h3 className="text-lg font-semibold mb-2">
                ISO/IEC 17025 & 27001 Certified
              </h3>
            </div>

            <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
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
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Recognized by NGA, UKGC, Ontario, and more
              </h3>
            </div>

            <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
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
              </div>
              <h3 className="text-lg font-semibold mb-2">
                All testing is fully remote and digital
              </h3>
            </div>

            <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
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
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Transparent pricing with fast-track options
              </h3>
            </div>

            <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
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
              </div>
              <h3 className="text-lg font-semibold mb-2">
                72-hour express certification available
              </h3>
            </div>

            <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
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
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Certificates include QR verification & regulator-ready format
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">
              SIMPLE PRICING. NO HIDDEN FEES.
            </h2>
            <p className="text-gray-600">
              Custom packages available for game studios and aggregators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">RGS CERTIFICATION</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">€7,500</p>
              <ul className="text-gray-600 mb-6"></ul>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">
                ADDITIONAL JURISDICTION
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">+€2,000</p>
              <ul className="text-gray-600 mb-6"></ul>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">
                BULK GAME PRICING (10+ GAMES)
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                €1,500 / game
              </p>
              <ul className="text-gray-600 mb-6"></ul>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">
                BULK TESTING (5-10 GAMES)
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                €1,750 / game
              </p>
              <ul className="text-gray-600 mb-6"></ul>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">RNG CERTIFICATION</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">€950</p>
              <ul className="text-gray-600 mb-6"></ul>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">
                FAST-TRACK (5 BUSINESS DAYS)
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                +€650 / game
              </p>
              <ul className="text-gray-600 mb-6"></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-center mb-4">
                  Contact NGL
                </h3>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Game Type (RNG / RSP / Other)"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="number"
                      placeholder="Estimated number of Games"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700">
                    JOIN THE WAITLIST
                  </button>
                </form>
              </div>
            </div>

            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">
                GET EARLY ACCESS – JOIN THE WAITLIST
              </h2>
              <p className="text-gray-600 mb-4">
                We're launching on September 1st, 2025.
              </p>
              <p className="text-gray-600 mb-4">
                Be among the first to certify your games with our accredited
                lab.
              </p>
              <p className="text-gray-600 mb-6">
                All early registrations receive a 15% discount on first
                certification.
              </p>

              <div className="mt-8">
                <img
                  src="/api/placeholder/600/200"
                  alt="World map"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            WHAT OUR CUSTOMER SAID ABOUT US
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/api/placeholder/48/48"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">CTO, FastPath Studios</h4>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Finally a real platform that understands how fast game studios
                move.
              </p>
              <a href="#" className="text-blue-600 text-sm font-medium">
                Read more
              </a>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/api/placeholder/48/48"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">CFO, Titan Slots</h4>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                NGL gave us everything we needed to enter the digital iGaming
                market. Their reports were accepted by our regulators.
              </p>
              <a href="#" className="text-blue-600 text-sm font-medium">
                Read more
              </a>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/api/placeholder/48/48"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">CPO, FastPath Studios</h4>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Finally, a real platform that understands how fast game studios
                move.
              </p>
              <a href="#" className="text-blue-600 text-sm font-medium">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
