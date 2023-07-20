import React from "react";
import Reveal from "../../components/Animation/Reveal";
import podiumImg from "../../assets/podiumEnvision.png";
import SlideFromBottom from "../../components/Animation/SlideFromBottom";

export default function Awards() {
  return (
    <div className="flex flex-col items-center py-24 text-center relative">
      <Reveal>
        <label className="font-bold uppercase text-md text-primary">
          rasplatirea eforturilor si talentului
        </label>
      </Reveal>

      <Reveal>
        <label className="text-4xl lg:text-6xl font-light pb-4">
          Premii pentru castigatori
        </label>
      </Reveal>

      <SlideFromBottom>
        <img src={podiumImg} className="w-[80%] md:w-[60%] mx-auto pt-24" />
      </SlideFromBottom>
    </div>
  );
}
