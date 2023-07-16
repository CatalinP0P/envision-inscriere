import React from "react";
import { ReactComponent as Logo } from "../../assets/Envision4.svg";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <div className="border pt-8 pb-2 bg-primary/90">
      <Container className="flex flex-col justify-between gap-4">
        <div>
          <Logo height={"full"} width={256} className="w-fit" />
        </div>
        <label className="text-white/50 font-base text-center inline text-2xl">
          © All Rights Reserved
        </label>
      </Container>
    </div>
  );
}
