import React from "react";
import { ReactComponent as FacebookSVG } from "../../assets/square-facebook.svg";
import { ReactComponent as Logo } from "../../assets/Envision4.svg";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <div className="border pt-8 pb-2 bg-primary/90">
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
