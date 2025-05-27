import bastaBg from "../../assets/basta-frame-bg.png";
import bastaLogo from "../../assets/icons/basta-logo-small.svg";
import bastaLogoLg from "../../assets/basta-fans-logo.png";
import checkmark from "../../assets/icons/checkmark.png";
import heart from "../../assets/icons/heart.png";
import people from "../../assets/icons/people.png";
import videoIcon from "../../assets/icons/video-icon.png";
import arrowostingIcon from "../../assets/icons/arrow.png";
import arrowPop from "../../assets/icons/arrow-up.png";
import RecentPost from "../resuableComponents/RecentPost";

const HomePage = () => {
  return (
    <>
      <div className="w-full">
        <div
          className="min-h-[300px] w-full bg-cover bg-center p-0 m-0 relative"
          style={{
            backgroundImage: `url(${bastaBg})`,
          }}
        >
          <div className="p-4 w-full">
            <div className="flex items-center w-full">
              <div>
                <img
                  src={arrowostingIcon}
                  alt="Videos"
                  className="w-8 h-8 mr-1"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center text-2xl font-bold text-white">
                  Basta Fans
                  <img
                    src={checkmark}
                    alt="Verified"
                    className="w-6 h-6 ml-2"
                  />
                </div>
                <div className="flex gap-6 mt-2 text-white font-medium text-base">
                  <span className="flex items-center">
                    <img
                      src={videoIcon}
                      alt="Videos"
                      className="w-5 h-5 mr-1"
                    />{" "}
                    3.6K
                  </span>
                  <span className="flex items-center">
                    <img src={heart} alt="Likes" className="w-5 h-5 mr-1" />{" "}
                    805.4K
                  </span>
                  <span className="flex items-center">
                    <img
                      src={people}
                      alt="Followers"
                      className="w-5 h-5 mr-1"
                    />{" "}
                    3.87K
                  </span>
                </div>
              </div>
            </div>
            {/* Header Section */}
            <div className="pt-6 pl-6 flex items-center w-full">
              <img
                src={bastaLogoLg}
                alt="Basta Logo"
                className="w-auto mx-auto h-[80px] "
              />
            </div>
          </div>
          <img
            src={bastaLogo}
            alt="Basta Logo"
            className="w-[80px] h-[80px] rounded-full absolute left-[30px] bottom-[-40px] z-2"
          />
        </div>

        <div className="bg-[#181B2A] w-full p-6 flex items-center shadow-lg">
          <div className="w-full relative">
            <img
              src={arrowPop}
              alt="Verified"
              className="w-8 h-8 ml-2 absolute right-[10px] top-0"
            />
            <div className="flex items-center text-2xl mt-5 font-bold text-white">
              Basta Fans
              <img src={checkmark} alt="Verified" className="w-5 h-5 ml-2" />
            </div>
            <div className="text-[#8A8FA7] text-base mb-1">@basta_fans</div>
            <div className="text-white text-base mb-1">
              featuring videos by onlyfans creators
            </div>
            <div className="text-[#8A8FA7] text-sm">
              see more:{" "}
              <a
                href="https://bastafans.com/oftv"
                className="text-[#00CFFF] no-underline"
              >
                bastafans.com/oftv
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#181B2A] w-full p-6 flex items-center shadow-lg mt-4">
          <div className="flex w-1/2 ">
            <button className="bg-[#1E90FF] hover:bg-[#187bcd] text-white text-xs rounded-full py-2 px-6 w-full flex justify-between items-center font-semibold transition">
              <span>Sign up</span>
              <span>Free Of Charge</span>
            </button>
          </div>
        </div>
        <div className="bg-[#16192A] w-full flex items-center shadow-lg mt-4">
          <div className="flex w-full">
            <button className="flex-1 py-4 text-white font-medium text-base border-b-2 border-[#1E90FF] ">
              3605 POSTS
            </button>
            <button className="flex-1 py-4 text-white font-medium text-base">
              3605 MEDIA
            </button>
          </div>
        </div>
        <RecentPost modelImage="model1" />
        <RecentPost modelImage="model2" />
        <RecentPost modelImage="model1" />
        <RecentPost modelImage="model2" />
        <RecentPost modelImage="model1" />
        <RecentPost modelImage="model2" />
      </div>
    </>
  );
};

export default HomePage;
