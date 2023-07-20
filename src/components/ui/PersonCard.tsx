import React from "react";
import { StringMappingType } from "typescript";
import Reveal from "../Animation/Reveal";
import SlideFromBottom from "../Animation/SlideFromBottom";

export default function PersonCard({
  imageURL,
  name,
  position,
}: {
  imageURL: string;
  name: string;
  position: string;
}) {
  return (
    <SlideFromBottom>
      <div className="w-full h-full px-2 pt-8 pb-16 bg-white rounded-md shadow-xl flex flex-col items-center text-black gap-2 transition-all cursor-pointer hover:scale-105">
        <div className="relative w-[50%] h-0 pb-[50%] bg-black/5 rounded-full overflow-hidden">
          <img className="absolute left-0 top-0 w-full h-full" src={imageURL} />
        </div>
        <div className="h-[1px] border border-black/5 w-[75%] my-8" />
        <label className="text-2xl font-semibold">{name}</label>

        <label className="font-bold text-base text-black/50 uppercase">
          {position}
        </label>
      </div>
    </SlideFromBottom>
  );
}
