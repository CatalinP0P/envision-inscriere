import React from "react";
import Reveal from "../../components/Animation/Reveal";
import podiumImg from "../../assets/awards.svg";
import SlideFromBottom from "../../components/Animation/SlideFromBottom";

export default function Awards() {
  return (
    <div className="flex flex-col items-center py-24 text-center relative">
      <Reveal>
        <label className="font-bold uppercase text-md text-primary">
          rasplatirea eforturilor
        </label>
      </Reveal>

      <Reveal>
        <label className="text-4xl lg:text-6xl font-light pb-4">
          Premiile oferite
        </label>
      </Reveal>

      <SlideFromBottom className="w-full">
        <img src={podiumImg} className="w-[95%] max-w-[40rem] mx-auto pt-32" />
      </SlideFromBottom>
    </div>
  );
}
