import React, { useState } from "react";
import ContactSection from "../../components/homePage/ContactSection";

const ContactUsPage: React.FC = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("North America");

  // Office data structured by region
  const regions = [
    {
      name: "North America",
      offices: [
        {
          city: "Atlanta",
          address: "725 Ponce de Leon Ave NE, Atlanta, GA, USA 30306",
          phone: "470-520-5000",
        },
        {
          city: "Boston",
          address: "60 State Street, Boston, MA, USA 02109",
          phone: "617-357-1720",
        },
        {
          city: "Chicago",
          address: "227 West Monroe Street, Chicago, IL, USA 60606",
          phone: "312-395-9300",
        },
        {
          city: "Dallas",
          address: "5910 North Central Expressway, Dallas, TX, USA 75206",
          phone: "214-346-7340",
        },
        {
          city: "Denver",
          address: "44 Cook Street, Denver, CO 80206, USA",
          phone: "303-466-5500",
        },
        {
          city: "Greenwich",
          address: "One Lafayette Place, Greenwich, CT, USA 06830",
          phone: "203-863-6000",
        },
        {
          city: "Houston",
          address: "4201 Main St., Suite 200, Houston, TX, USA 77002",
          phone: "832-944-6600",
        },
        {
          city: "Mexico City",
          address:
            "Torre Virreyes, Pedregal 24, Col. Molino del Rey, Del. Miguel Hidalgo, México City, México 11040",
          phone: "52-555-5241-4300",
        },
        {
          city: "Miami",
          address: "701 Brickell Avenue, Suite 1250, Miami, FL, USA 33131",
          phone: "305-358-1171",
        },
        {
          city: "Montreal",
          address:
            "1000 Sherbrooke Street West, Montreal, Quebec, Canada H3A 0A6",
          phone: "514-843-5128",
        },
        {
          city: "New York",
          address: "50 Hudson Yards, New York, NY 10001, USA",
          phone: "212-810-5800",
        },
        {
          city: "Newport Beach",
          address: "4400 MacArthur Boulevard, Newport Beach, CA, USA 92660",
          phone: "949-623-0700",
        },
        {
          city: "Philadelphia",
          address: "2929 Arch Street, Philadelphia, PA, USA 19104",
          phone: "215-349-9700",
        },
        {
          city: "Princeton",
          address: "1 University Square Drive, Princeton, NJ, USA 08540",
          phone: "609-282-2000",
        },
        {
          city: "San Francisco",
          address: "400 Howard Street, San Francisco, CA, USA 94105",
          phone: "415-670-2000",
        },
        {
          city: "Santa Monica",
          address: "2951 28th Street, Suite 1000, Santa Monica, CA, USA 90405",
          phone: "310-566-1000",
        },
        {
          city: "Seattle",
          address: "601 Union Street, Seattle, WA, USA 98101",
          phone: "206-613-6700",
        },
        {
          city: "Toronto",
          address: "161 Bay Street, Toronto, Ontario, Canada, MJ5 2S1",
          phone: "416-643-4000",
        },
        {
          city: "Washington",
          address: "1401 New York Avenue NW, Washington, DC 20005, USA",
          phone: "202-414-2100",
        },
        {
          city: "West Palm Beach",
          address:
            "360 S Rosemary Ave, Suite 1600, West Palm Beach FL 33401, USA",
          phone: "561-584-9700",
        },
        {
          city: "Wilmington (1)",
          address: "100 Bellevue Parkway, Wilmington, DE, USA 19809",
          phone: "302-797-2900",
        },
        {
          city: "Wilmington (2)",
          address: "400 Bellevue Parkway, Wilmington, DE, USA 19809",
          phone: "302-797-2900",
        },
      ],
    },
    { name: "South America", offices: [] },
    { name: "Europe", offices: [] },
    { name: "The Middle East", offices: [] },
    { name: "Africa", offices: [] },
    { name: "Asia-Pacific", offices: [] },
  ];

  // Tab names for rendering
  const tabNames = regions.map((region) => region.name);

  // Find the active region's offices
  const activeRegion = regions.find((region) => region.name === activeTab);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden md:pt-[64px]">
      <section className="max-w-7xl mx-auto py-16 px-4">
        {/* Existing ContactSection */}
        <ContactSection isSpecialLayout={true} />
      </section>
      <section className="bg-white text-black mt-12">
        {/* Offices by Region Section with Tabs */}
        <div className="mt-12 max-w-7xl mx-auto py-16 px-4">
          <h2 className="uppercase text-3xl lg:text-4xl xl:text-5xl mb-6 text-center text-black">
            Browse offices by region
          </h2>

          {/* Responsive Tabs */}
          <div className="my-6 overflow-x-auto">
            <div className="flex justify-center space-x-1 sm:space-x-2 md:space-x-4 min-w-max">
              {tabNames.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base font-medium ${
                    activeTab === tab
                      ? "border-b-2 border-black text-black"
                      : "text-gray-500 hover:text-black"
                  } transition-colors duration-200 whitespace-nowrap`}
                >
                  {tab.split(" ").length > 2
                    ? tab
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                    : tab === "The Middle East"
                    ? "Middle East"
                    : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Office Listings */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{activeTab}</h3>
            {activeRegion && activeRegion.offices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {activeRegion.offices.map((office) => (
                  <div key={office.city} className="p-4 rounded-lg">
                    <h4 className="text-lg font-semibold">{office.city}</h4>
                    <p className="text-sm text-black font-semibold">
                      {office.address}
                    </p>
                    <p className="text-sm text-black font-semibold">
                      Phone: {office.phone}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No offices available in this region.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
