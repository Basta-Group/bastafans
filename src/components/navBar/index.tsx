import homeLogo from "../../assets/icons/home-logo.png";
import accountLogo from "../../assets/icons/account-logo.png";
import moreLogo from "../../assets/icons/more-logo.png";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center h-full w-full relative">
      {/* Profile Icon */}
      <button className="flex flex-row items-center gap-3 hover:text-white focus:outline-none w-full px-6 py-2">
        <img src={accountLogo} alt="Account" className="w-5 h-5" />
      </button>

      {/* Navigation Items */}
      <div className="flex flex-col gap-4 mt-4 w-full">
        {/* Home */}
        <button className="flex flex-row items-center gap-3 text-[#B0B3C6] hover:text-white focus:outline-none w-full px-6 py-2">
          <img src={homeLogo} alt="Home" className="w-5 h-5" />
          <span className="text-base font-medium">Home</span>
        </button>

        {/* More */}
        <button className="flex flex-row items-center gap-3 text-[#B0B3C6] hover:text-white focus:outline-none w-full px-6 py-2">
          <img src={moreLogo} alt="More" className="w-5 h-5" />
          <span className="text-base font-medium">More</span>
        </button>
      </div>
    </nav>
  );
}
