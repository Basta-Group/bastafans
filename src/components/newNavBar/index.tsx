import homeLogo from "../../assets/basta-fans-logo.png";

const NewNavBar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 bg-[#16192A]">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src={homeLogo} alt="Logo" className="w-auto h-8" />
      </div>

      {/* Log in button on the right */}
      <div>
        <button className="bg-[#3a3c4e] hover:bg-[#4b4d60] text-white px-4 py-[5px] rounded-full font-semibold transition">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default NewNavBar;
