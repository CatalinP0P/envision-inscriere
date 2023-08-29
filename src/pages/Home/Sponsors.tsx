import React from "react";
import Reveal from "../../components/Animation/Reveal";
import Container from "../../components/ui/Container";

import { ReactComponent as Envision } from "../../assets/EnvisionBlack.svg";
import SlideFromBottom from "../../components/Animation/SlideFromBottom";

import sponsor1 from "../../assets/sponsors/capitalaTineretului.png";
import sponsor2 from "../../assets/sponsors/eurospirit.png";
import sponsor3 from "../../assets/sponsors/laCocoslogo.jpeg";
import sponsor4 from "../../assets/sponsors/obsPrahoveanLogo.png";

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
        <Container className="grid grid-cols-2 md:grid-cols-4 w-full justify-between items-center pt-6">
          <img className="w-full max-h-[100px] object-contain" src={sponsor3} />
          <img className="w-full max-h-[70px] object-contain" src={sponsor4} />
          <img className="w-full max-h-[100px] object-contain" src={sponsor1} />
          <img className="w-full max-h-[100px] object-contain" src={sponsor2} />
        </Container>
      </SlideFromBottom>
    </div>
  );
}
