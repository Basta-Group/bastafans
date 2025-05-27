import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" flex flex-col items-center ">
      <div className="bg-[#16192A] flex flex-col justify-between h-full w-full items-center py-2">
        {/* Subscription Section */}
        <div className="w-full flex flex-col  p-4">
          <span className="text-[#B0B3C6] text-base mb-4 font-bold">
            Subscription
          </span>

          <div className="flex w-full ">
            <button className="bg-[#1E90FF] hover:bg-[#187bcd] text-white text-xs rounded-full py-2 px-6 w-full flex justify-between items-center font-semibold transition">
              <span>Sign up</span>
              <span>Free Of Charge</span>
            </button>
          </div>
        </div>
      </div>
      {/* Footer Links */}
      <div className="flex items-center mb-4 text-xs text-[#B0B3C6] whitespace-nowrap">
        <a href="#" className="hover:text-white transition font-bold">
          Privacy
        </a>
        <span className="mx-2 text-[#B0B3C6] text-lg align-middle">•</span>
        <a href="#" className="hover:text-white transition font-bold">
          Cookie Notice
        </a>
        <span className="mx-2 text-[#B0B3C6] text-lg align-middle">•</span>
        <a href="#" className="hover:text-white transition font-bold">
          Terms Of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
