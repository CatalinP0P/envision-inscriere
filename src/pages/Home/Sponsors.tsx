import React from "react";
import Reveal from "../../components/Animation/Reveal";
import Container from "../../components/ui/Container";

import observatorul from "../../assets/obsPrahoveanLogo.png";
import cocos from "../../assets/laCocoslogo.jpeg";
import { ReactComponent as Envision } from "../../assets/EnvisionBlack.svg";
import SlideFromBottom from "../../components/Animation/SlideFromBottom";

export default function Sponsors() {
  return (
    <div className="w-full bg-black/5 py-24 flex flex-col items-center text-center">
      <Reveal>
        <label className="font-bold uppercase text-md text-primary">
          multimim observatorul prahovean si la cocos
        </label>
      </Reveal>

      <Reveal>
        <label className="text-4xl lg:text-6xl font-light pb-4">
          Sponsori pentru Eveniment
        </label>
      </Reveal>

      <SlideFromBottom>
        <Container className="grid grid-cols-3 justify-between items-center pt-24 pb-8">
          <img className="w-full object-contain" src={observatorul} />
          <img className="w-full max-h-[150px] object-contain" src={cocos} />
          <Envision width={"full"} />
        </Container>
      </SlideFromBottom>
    </div>
  );
}
