import React, { useState } from "react";
import Container from "../../components/ui/Container";
import backgroundImage from "../../assets/coding2.jpg";
import Reveal from "../../components/Animation/Reveal";

import { ReactComponent as IdeaSVG } from "../../assets/idea.svg";
import { ReactComponent as WorkShopSVG } from "../../assets/workshop.svg";
import { ReactComponent as RankingSVG } from "../../assets/ranking.svg";
import { ReactComponent as CodingSVG } from "../../assets/coding.svg";
import { ReactComponent as TriangleSVG } from "../../assets/triangle.svg";

import { ReactComponent as HammerSVG } from "../../assets/hammer.svg";
import { ReactComponent as PeopleSVG } from "../../assets/people.svg";

import SlideFromBottom from "../../components/Animation/SlideFromBottom";

export default function Detalii() {
  const [selectedTab, selectTab] = useState("experienta-envision");

  return (
    <div className="w-full relative transition-all">
      <img
        className="absolute left-0 top-0 w-full h-full object-cover z-[-2]"
        src={backgroundImage}
      />
      <div className="absolute left-0 top-0 w-full h-full z-[-1] bg-primary/95 transition-all" />
      <Container className="flex flex-col py-24 items-center text-white">
        <Reveal color="white">
          <label className="font-bold uppercase text-md text-white">
            Program, Proba, Jurizare
          </label>
        </Reveal>

        <Reveal color="white">
          <label
            className="text-4xl lg:text-6xl text-white/90 font-light pb-4"
            onClick={() => selectTab("detalii-maraton")}
          >
            Detalii Maraton
          </label>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-4 gap-y-16 justify-between pt-24 whitespace-nowrap">
          <SlideFromBottom>
            <div className="w-full h-full flex flex-col gap-4 items-center font-bold uppercase text-base lg:text-xl">
              <div
                className={
                  "w-[128px] h-[128px] cursor-pointer relative p-4 rounded-full bg-white active:bg-white/60 "
                }
                onClick={() => selectTab("experienta-envision")}
              >
                <TriangleSVG
                  width={64}
                  height={64}
                  fill="white"
                  className={
                    " left-[50%] translate-x-[-50%] top-[-64px] " +
                    (selectedTab == "experienta-envision"
                      ? " absolute"
                      : " hidden")
                  }
                />
                <IdeaSVG width={"full"} height={"full"} />
              </div>
              <label>experienta envision</label>
            </div>
          </SlideFromBottom>

          <SlideFromBottom>
            <div className="w-full h-full flex flex-col gap-4 items-center font-bold uppercase text-base lg:text-xl">
              <div
                className={
                  "w-[128px] h-[128px] cursor-pointer relative p-8 rounded-full bg-white active:bg-white/60 "
                }
                onClick={() => selectTab("participare")}
              >
                <TriangleSVG
                  width={64}
                  height={64}
                  fill="white"
                  className={
                    " left-[50%] translate-x-[-50%] top-[-64px] " +
                    (selectedTab == "participare" ? " absolute" : " hidden")
                  }
                />
                <PeopleSVG width={"full"} height={"full"} />
              </div>
              <label>Participarea in competitie</label>
            </div>
          </SlideFromBottom>

          <SlideFromBottom>
            <div className="w-full h-full flex flex-col gap-4 items-center font-bold uppercase text-base lg:text-xl">
              <div
                className={
                  "w-[128px] h-[128px] cursor-pointer relative p-8 rounded-full bg-white active:bg-white/60 "
                }
                onClick={() => selectTab("proba")}
              >
                <TriangleSVG
                  width={64}
                  height={64}
                  fill="white"
                  className={
                    " left-[50%] translate-x-[-50%] top-[-64px] " +
                    (selectedTab == "proba" ? " absolute" : " hidden")
                  }
                />
                <CodingSVG width={"full"} height={"full"} />
              </div>
              <label>Proba blitzkrieg</label>
            </div>
          </SlideFromBottom>

          <SlideFromBottom>
            <div className="w-full h-full flex flex-col gap-4 items-center font-bold uppercase text-base lg:text-xl">
              <div
                className={
                  "w-[128px] h-[128px] cursor-pointer relative p-8 rounded-full bg-white active:bg-white/60 "
                }
                onClick={() => selectTab("jurizare")}
              >
                <TriangleSVG
                  width={64}
                  height={64}
                  fill="white"
                  className={
                    " left-[50%] translate-x-[-50%] top-[-64px] " +
                    (selectedTab == "jurizare" ? " absolute" : " hidden")
                  }
                />
                <RankingSVG width={"full"} height={"full"} />
              </div>
              <label>jurizare</label>
            </div>
          </SlideFromBottom>
        </div>

        <div
          className={
            "transition-all flex flex-row items-center pt-12 text-lg lg:text-xl font-base " +
            (selectedTab != "" ? "min-h-[200px]" : "min-h-0")
          }
        >
          {selectedTab == "experienta-envision" && (
            <Reveal color="white">
              <div className="text-white text-justify indent-8">
                Envision este dorința de a uni programatorii zilei de mâine, a
                crea perspective noi, forma noi echipe și programa împreună,
                spre un viitor mai bun. Timp de două zile vom trăi împreună
                emoțiile subiectelor, adrenalina cronometrului și pasiunea
                pentru programare. Cei ce se vor ridica printre colegi cu cele
                mai bune aplicații vor fi răsplătiți cu premii.
              </div>
            </Reveal>
          )}

          {selectedTab == "participare" && (
            <Reveal color="white">
              <div className="text-white text-justify pt-8  indent-8">
                Participarea este individuala sau in echipe a cate 2 concurenti.
                Fiecare concurent va putea lua parte intr-o singura echipa.
                Participarea la competitia envision este conditionata de
                urmatoarele:
                <div className="flex flex-col gap-1 indent-8">
                  <label>
                    1) Inscrierea pe platforma code-envision.ro pana in data de
                    25 septembrie
                  </label>
                  <label>
                    2) Prezentarea la locul de desfasurare al competitiei.{" "}
                  </label>
                  <label>
                    3) Completarea acordului parental cu privire la : deplasare,
                    cazare, masa.
                  </label>
                  <label>
                    4) Completarea acordului cu privire la prelucrarea datelor
                    cu caracter personal in cadrul competitiei cat si in afara
                    ei.
                  </label>
                </div>
                Participarea va fi confirmata in momentul in care concurentii
                vor fi contactati de catre organizatori, in saptamana 20-24
                septembrie.
              </div>
            </Reveal>
          )}

          {selectedTab == "proba" && (
            <Reveal color="white">
              <div className="text-white text-justify pt-8 indent-8">
                Subiectul de concurs va fi distribuit tututor participantilor in
                momentul deschiderii oficiale a competitiei. Cerinta va fi
                efectuata de catre concurenti in orice limbaj le este la
                indemana, cu orice tehnologie. Singurul aspect important din
                acest punct de vedere este cunoasterea temeinica a
                tehnologiei/limbajulii ales. Concurentii vor avea la dispozitie
                24 de ore pentru implementarea cerintei. Participantii au libera
                alegere pentru determinarea perioadelor de lucru, odihna,
                distractie, s.a.m.d. Totodata , le revine completa raspundere
                asupra starii de sanatate generata de lipsa odihnei.
              </div>
            </Reveal>
          )}

          {selectedTab == "jurizare" && (
            <Reveal color="white">
              <div className="text-white text-justify pt-8 indent-8">
                Criteriile de jurizare pentru proiectele realizate vor fi
                distribuite impreuna cu subiectele. Proiectele care se vor
                juriza vor fi prezentate de catre realizatori comisiei de
                jurizare , organizatorilor si bineinteles, intregului public
                interesat. Vor participa la jurizare doar proiectele care
                respecta conditiile minime de jurizare. Fiecare membru al
                juriului acorda un punctaj , 0-100, conform baremului de
                corectare. Scorul final al unui proiect reprezinta media
                aritmetica a tuturor scorurilor din juriu. Nu se admit
                contestatii sau re-evaluari ale proiectelor.
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </div>
  );
}
