import React from "react";
import { ReactComponent as FacebookSVG } from "../../assets/square-facebook.svg";
import { ReactComponent as Logo } from "../../assets/Envision4.svg";
import Container from "../ui/Container";
import coding from "../../assets/coding.jpeg";

export default function Footer() {
  return (
    <div className="relative border pt-8 pb-2">
      <div className="bg-primary/90 z-[-1] absolute left-0 top-0 w-full h-full" />
      <img
        className="absolute left-0 top-0 w-full h-full object-cover z-[-2]"
        src={coding}
      />

      <Container className="flex flex-col justify-between gap-4">
        <div className="flex flex-row items-center w-full justify-between">
          <Logo height={"full"} width={256} className="w-fit" />
          <FacebookSVG className="w-[32px] h-[32px] fill-white cursor-pointer" />
        </div>
        <label className="text-white/50 font-base text-center inline text-2xl">
          © All Rights Reserved
        </label>
      </Container>
    </div>
  );
}
