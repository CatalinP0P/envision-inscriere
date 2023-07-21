import React from "react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Reveal from "../../components/Animation/Reveal";

import { ReactComponent as Image } from "../../assets/undraw_proud_coder_re_exuy.svg";
import SlideFromBottom from "../../components/Animation/SlideFromBottom";

export default function About() {
  return (
    <div className="relative">
      <Container
        className="flex flex-col items-center py-24 text-center relative"
        id="details"
      >
        <Image className="block absolute right-4 left-auto bottom-0 md:top-auto min-w-[20rem] w-[30%] max-w-[400px] h-fit z-[25] opacity-75"></Image>
        <Reveal>
          <label className="font-bold uppercase text-md text-primary">
            Ce, Cand si Cum?
          </label>
        </Reveal>

        <Reveal>
          <label className="text-4xl lg:text-6xl font-light pb-4">
            Despre Hackaton
          </label>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-2 pt-8 w-full pb-40 md:pb-24 [&>*]:text-justify [&>p]:indent-8 text-black/60 text-lg md:text-xl">
            <p className="w-[100%] ">
              Competitia envision reprezinta un maraton de programare de 24 de
              ore adresat tinerilor din toata tara in care participantii,
              singuri sau in echipe de 2 persoane, vor crea solutii inteligente
              pentru probleme comunitare ale oraselor din Romania
            </p>
            <p>
              Suntem deschisi spre creativitate si astfel vom lua in considerare
              orice rezolvare, in orice limbaj si cu orice tehnologie. Singura
              cerinta din acest punct de vedere este cunoasterea temeinica a
              limbajului ales.
            </p>
            <p>
              Competitia envision va lua loc in ploiesti , in data de 30
              septembrie. Cazarea este asigurata de organizatori. Timp de două
              zile vom trăi împreună emoțiile subiectelor, adrenalina
              cronometrului și pasiunea pentru programare.
            </p>
            <p>
              Vei putea participa la workshop-uri organizate de persoane
              importante din domeniu .
            </p>
            <div className="flex flex-col md:ms-8 md:flex-row gap-4 items-baseline w-full pt-8">
              <p className="text-black text-center w-full sm:w-fit">
                Inscrierile au inceput, arata-ne ce poti.
              </p>
              <Button
                className="text-sm bg-primary rounded-md text-white px-3 py-2 w-full sm:w-fit"
                onClick={() => {
                  document
                    .getElementById("sign")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Inscrie-te acum
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
