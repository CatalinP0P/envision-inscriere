import React from "react";
import Reveal from "../../components/Animation/Reveal";
import Container from "../../components/ui/Container";

import observatorul from "../../assets/obsPrahoveanLogo.png";
import cocos from "../../assets/laCocoslogo.jpeg";
import { ReactComponent as Envision } from "../../assets/EnvisionBlack.svg";
import SlideFromBottom from "../../components/Animation/SlideFromBottom";

export default function Sponsors() {
  return (
    <div className="w-full py-16 flex flex-col items-center text-center">
      <Reveal>
        <label className="font-bold uppercase text-md text-primary">
          sustin performanta
        </label>
      </Reveal>

      <Reveal>
        <label className="text-4xl lg:text-6xl font-light pb-4">
          Sponsorii evenimentului
        </label>
      </Reveal>

      <SlideFromBottom className="w-full">
        <Container className="grid grid-cols-2 w-full justify-between items-center pt-6">
          <img
            className="w-full max-h-[100px] object-contain"
            src={observatorul}
          />
          <img className="w-full max-h-[150px] object-contain" src={cocos} />
        </Container>
      </SlideFromBottom>
    </div>
  );
}
