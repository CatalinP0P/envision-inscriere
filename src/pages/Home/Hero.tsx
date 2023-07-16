import React from "react";
import heroImage from "../../assets/heroImage.jpeg";
import Button from "../../components/ui/Button";
import Reveal from "../../components/Animation/Reveal";

import { ReactComponent as Envision } from "../../assets/Envision2.svg";

export default function Hero() {
  const scrollToSign = () => {
    const div = document
      .getElementById("sign")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDetails = () => {
    const div = document
      .getElementById("details")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen transition-all w-full relative h-full">
      <div className="absolute left-0 top-0 w-full h-full bg-primary/90 z-[2] " />
      <img
        src={heroImage}
        className="absolute left-0 top-0 w-full h-full object-cover z-[1]"
      />
      <div className="z-[3] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-4 text-white text-center text-md ld:text-2xl items-center">
        <Reveal color="white">
          <Envision className="translate-x-[40px]" />
        </Reveal>
        <Reveal color="white">
          <label className="text-white/75 font-semibold">
            Reprezintă un eveniment de tehnologie adresat tinerilor din toată
            tara.
          </label>
          <div className="h-[2px] w-[6rem] my-4 bg-white mx-auto" />
          <p className="text-white/50 font-semibold">
            Competiția ENVISION se desfășoară sub forma unui maraton de
            programare în care concurenții vor dezvolta o aplicație după o
            cerință dată.
          </p>
        </Reveal>
        <Reveal color="white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit pt-16 overflow-visible p-2">
            <Button color="white" onClick={() => scrollToSign()}>
              Inscrie-te Acum
            </Button>
            <Button
              variant="secondary"
              color="white"
              onClick={() => scrollToDetails()}
            >
              Detalii
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
