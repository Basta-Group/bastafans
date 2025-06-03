import React from "react";
import profileImg from "../../assets/icons/basta-logo-small.svg";
import verifiedImg from "../../assets/icons/checkmark.png";
import model1 from "../../assets/models-1.png";
import model2 from "../../assets/models-2.png";
import likeImg from "../../assets/icons/heart.png";
import commentImg from "../../assets/icons/comment.svg";
import tipImg from "../../assets/icons/coin-stack.svg";
import searchImg from "../../assets/icons/search.svg";
import gridImg from "../../assets/icons/grid.png";
import hamburgerImg from "../../assets/icons/hamburger.png";
import saveImg from "../../assets/icons/save.svg";

interface RecentPostProps {
  modelImage?: "model1" | "model2";
}

const RecentPost: React.FC<RecentPostProps> = ({ modelImage = "model1" }) => {
  const selectedModel = modelImage === "model1" ? model1 : model2;

  return (
    <div className="bg-[#16192A] p-6 mt-4">
      <div className="flex justify-between">
        <div className="text-[#8A8FA7] text-lg font-semibold mb-2">RECENT</div>
        <div className="flex items-center gap-3 mt-2 ">
          <img src={searchImg} alt="Search" className="w-5 h-5" />
          <img src={gridImg} alt="Grid" className="w-5 h-5" />
          <img src={hamburgerImg} alt="Hamburger" className="w-5 h-5" />
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex mt-2 gap-2">
              <img
                src={profileImg}
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-white font-semibold">Basta Fans</span>
                <span className="text-[#8A8FA7] text-xs">@basta fans</span>
              </div>
              <img src={verifiedImg} alt="Verified" className="w-4 h-4" />
            </div>
          </div>
          <div className="text-white mt-2 text-base">
            In his new music video for "Code", @dymezworld wakes up in a jungle
            with @ariaretv and @stargirlsetzv. The sultry R&B and smooth rap
            will have you hooked. 🔥🎶
            <br />
            BastaFans.com/dymezworld / BastaFans.com/ariaetv /
            BastaFans.com/stargirlsetztv
          </div>
        </div>
      </div>
      <div className="mt-4">
        {/*  on full screen */}
        <img src={selectedModel} alt="" />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-8 mt-6 text-white text-sm font-medium">
          <span className="flex items-center gap-2">
            <img src={likeImg} alt="Likes" className="w-5 h-5" />
            805.4K
          </span>
          <span className="flex items-center gap-2">
            <img src={commentImg} alt="Comments" className="w-5 h-5" />
            3.6K
          </span>
          <span className="flex items-center gap-2 ">
            <img src={tipImg} alt="Send Tip" className="w-5 h-5" />
            Send Tip
          </span>
        </div>
        <div className="flex items-center gap-3 mt-2 ">
          <img src={saveImg} alt="Search" className="w-5 h-5" />
        </div>{" "}
      </div>
    </div>
  );
};

export default RecentPost;
