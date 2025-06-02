import bastaLogo from "../../assets/basta-fans-logo.png";
import facebookIcon from "../../assets/icons/facebook-logo.png";
import instagramIcon from "../../assets/icons/insta-logo.svg";
import youtubeIcon from "../../assets/icons/yt-logo.svg";
import xIcon from "../../assets/icons/x-logo.svg";

const NewFooter = () => {
  return (
    <footer className="w-full bg-[#16192A] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left section: Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <img src={bastaLogo} alt="Logo" className="w-auto h-8 mb-2" />{" "}
          {/* Adjust size as needed */}
          <span className="text-[#B0B3C6] text-sm">
            © 2025 OnlyFans. All Rights Reserved
          </span>
        </div>

        {/* Center section: Social Icons and Links */}
        <div className="flex flex-col items-center md:items-center gap-4">
          <div className="flex gap-4">
            <a href="#" className="text-[#00CFFF] hover:opacity-80 transition">
              {/* Placeholder for Facebook icon */}
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#00CFFF] hover:opacity-80 transition">
              {/* Placeholder for Instagram icon */}
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#00CFFF] hover:opacity-80 transition">
              {/* Placeholder for X (Twitter) icon */}
              <img src={xIcon} alt="X" className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#00CFFF] hover:opacity-80 transition">
              {/* Placeholder for Youtube icon */}
              <img src={youtubeIcon} alt="Youtube" className="w-6 h-6" />
            </a>
          </div>
          <div className="flex items-center text-xs text-[#B0B3C6]">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <span className="mx-2 text-[#B0B3C6] text-xs align-middle">•</span>
            <a href="#" className="hover:text-white transition">
              Terms Of Service
            </a>
            <span className="mx-2 text-[#B0B3C6] text-xs align-middle">•</span>
            <a href="#" className="hover:text-white transition">
              CCPA
            </a>
          </div>
        </div>

        {/* Right section: Sign Up button */}
        <div className="flex items-center">
          <button className="bg-[#1E90FF] hover:bg-[#187bcd] text-white px-6 py-2 rounded-full font-semibold transition">
            Sign Up
          </button>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
