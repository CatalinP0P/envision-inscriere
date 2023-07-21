import React from "react";
import Container from "../../components/ui/Container";
import Reveal from "../../components/Animation/Reveal";

import { ReactComponent as Image } from "../../assets/undraw_proud_coder_re_exuy.svg";
import SlideFromBottom from "../../components/Animation/SlideFromBottom";

export default function About() {
  return (
    <div className="relative">
      <Container className="flex flex-col items-center py-24 text-center relative" id="details">
        <Image className="hidden md:block absolute right-4 left-auto bottom-4 md:top-auto w-[30%] max-w-[400px] h-fit z-[25] opacity-75"></Image>
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
          <p className="w-[100%] text-black/60 indent-8 text-justify pt-8 text-xl">
            Envision se va desfășura în format fizic în orașul Ploiești, pe
            parcursul a două zile (30 septembrie , 1 octombrie). Competiția
            începe oficial pe 30 septembrie, ora 8 dimineața și va dura 30 de
            ore, adică până pe 1 octombrie, ora 16, urmând apoi jurizarea și
            festivitatea de premiere. După primirea subiectelor, concurenții vor
            avea la dispoziție 30 de ore pentru a crea:
          </p>
        </Reveal>
        <SlideFromBottom>
          <ul className="list-disc pt-16 text-xl ps-14 text-start">
            <li>
              <p className="font-semibold">Aplicația, după cerința dată:</p>
              <ul
                className="list-[circle] list-inside font-normal text-black/75 text-base"
                style={{ listStyleType: "revert" }}
              >
                <li>Se admite orice tehnologie/limbaj de programare</li>
                <li>Concurenții vor lucra pe propriile dispozitive </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold">Documentația aplicației</p>
              <ul
                className="list-[circle] list-inside font-normal text-black/75 text-base"
                style={{ listStyleType: "revert" }}
              >
                <li>Conceptul și adaptarea sa la cerință</li>
                <li>În format .pdf , minim 2 pagini.</li>
              </ul>
            </li>

            <li>
              <p className="font-semibold">Prezentarea aplicației</p>
              <ul
                className="list-[circle] list-inside font-normal text-black/75 text-base"
                style={{ listStyleType: "revert" }}
              >
                <li>Pregătirea unei prezentări în fata juriului</li>
                <li>Format PPT, maxim 10 minute.</li>
              </ul>
            </li>
          </ul>
        </SlideFromBottom>
      </Container>
    </div>
  );
}
