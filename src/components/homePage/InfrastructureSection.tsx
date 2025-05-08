import React from "react";
import OfficeImage from "../../assets/office-img.png";
import PDFIcon from "../../assets/PDF_file_icon.svg";

const InfrastructureSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 text-black">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl mb-4 ">
            A VERTICAL, LICENSED, <br /> AND SELF-OWNED INFRASTRUCTURE
          </h2>
          <div className="mb-3 font-bold ">Highlights:</div>
          <ul className="space-y-2 text-sm opacity-60 font-semibold  list-disc list-inside">
            {[
              "100% ownership of IP, licenses, and backend",
              "Regulated in 6+ jurisdictions",
              "Integrated payment, Social networking, and AI systems",
              "Scalable and modular white-label products",
              "Tax-efficient structure (5% Malta corporate)",
            ].map((point, i) => (
              <li
                key={i}
                className="truncate overflow-hidden whitespace-nowrap text-ellipsis"
              >
                {point}
              </li>
            ))}
          </ul>

          {/* PDF Button */}
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold underline"
          >
            <img src={PDFIcon} alt="PDF icon" className="w-4 h-4" />
            PDF download
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={OfficeImage}
            alt="Office"
            className="rounded-xl w-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
