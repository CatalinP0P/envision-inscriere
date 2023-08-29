import React, { useEffect, useState } from "react";
import sponsor1 from "../../assets/sponsors/capitalaTineretului.png";
import sponsor2 from "../../assets/sponsors/eurospirit.png";
import sponsor3 from "../../assets/sponsors/laCocoslogo.jpeg";
import sponsor4 from "../../assets/sponsors/obsPrahoveanLogo.png";

const SponsorSlider = () => {
  return (
    <div className="overflow-hidden w-[100vw] min-w-[3000px] mx-auto  bg-white relative h-[120px]">
      <div className="flex slide absolute left-0 bottom-0 top-0 items-center w-[200%]">
        <div className="w-[100%] flex justify-around items-center">
          <img className="px-8 h-[100px] object-contain" src={sponsor1} />
          <img className="px-8 h-[100px] object-contain" src={sponsor2} />
          <img className="px-8 h-[100px] object-contain" src={sponsor3} />
          <img className="px-8 h-[70px] object-contain" src={sponsor4} />
          <img className="px-8 h-[100px] object-contain" src={sponsor1} />
          <img className="px-8 h-[100px] object-contain" src={sponsor2} />
          <img className="px-8 h-[100px] object-contain" src={sponsor3} />
          <img className="px-8 h-[70px] object-contain" src={sponsor4} />
        </div>
        <div className="w-[100%] flex justify-around items-center">
          <img className="px-8 h-[100px] object-contain" src={sponsor1} />
          <img className="px-8 h-[100px] object-contain" src={sponsor2} />
          <img className="px-8 h-[100px] object-contain" src={sponsor3} />
          <img className="px-8 h-[70px] object-contain" src={sponsor4} />
          <img className="px-8 h-[100px] object-contain" src={sponsor1} />
          <img className="px-8 h-[100px] object-contain" src={sponsor2} />
          <img className="px-8 h-[100px] object-contain" src={sponsor3} />
          <img className="px-8 h-[70px] object-contain" src={sponsor4} />
        </div>
      </div>
    </div>
  );
};

export default SponsorSlider;
