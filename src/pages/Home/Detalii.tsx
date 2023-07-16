import React, { useState } from "react";
import Container from "../../components/ui/Container";
import backgroundImage from "../../assets/coding2.jpg";
import Reveal from "../../components/Animation/Reveal";

import { ReactComponent as IdeaSVG } from "../../assets/idea.svg";
import { ReactComponent as WorkShopSVG } from "../../assets/workshop.svg";
import { ReactComponent as RankingSVG } from "../../assets/ranking.svg";
import { ReactComponent as CodingSVG } from "../../assets/coding.svg";
import SlideFromBottom from "../../components/Animation/SlideFromBottom";

export default function Detalii() {
  const [selectedTab, selectTab] = useState("");

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
                  "w-[128px] h-[128px] cursor-pointer p-4 rounded-full " +
                  (selectedTab == "experienta-envision"
                    ? "bg-white/60"
                    : " bg-white")
                }
                onClick={() => selectTab("experienta-envision")}
              >
                <IdeaSVG width={"full"} height={"full"} />
              </div>
              <label>experienta envision</label>
            </div>
          </SlideFromBottom>

          <SlideFromBottom>
            <div className="w-full h-full flex flex-col gap-4 items-center font-bold uppercase text-base lg:text-xl">
              <div
                className={
                  "w-[128px] h-[128px] cursor-pointer p-8 rounded-full " +
                  (selectedTab == "workshop" ? "bg-white/60" : " bg-white")
                }
                onClick={() => selectTab("workshop")}
              >
                <WorkShopSVG width={"full"} height={"full"} />
              </div>
              <label>workshop-uri</label>
            </div>
          </SlideFromBottom>

          <SlideFromBottom>
            <div className="w-full h-full flex flex-col gap-4 items-center font-bold uppercase text-base lg:text-xl">
              <div
                className={
                  "w-[128px] h-[128px] cursor-pointer p-8 rounded-full " +
                  (selectedTab == "proba" ? "bg-white/60" : " bg-white")
                }
                onClick={() => selectTab("proba")}
              >
                <CodingSVG width={"full"} height={"full"} />
              </div>
              <label>Proba blitzkrieg</label>
            </div>
          </SlideFromBottom>

          <SlideFromBottom>
            <div className="w-full h-full flex flex-col gap-4 items-center font-bold uppercase text-base lg:text-xl">
              <div
                className={
                  "w-[128px] h-[128px] cursor-pointer p-8 rounded-full " +
                  (selectedTab == "jurizare" ? "bg-white/60" : " bg-white")
                }
                onClick={() => selectTab("jurizare")}
              >
                <RankingSVG width={"full"} height={"full"} />
              </div>
              <label>jurizare</label>
            </div>
          </SlideFromBottom>
        </div>

        <div
          className={
            "transition-all flex flex-row items-center pt-12 text-xl lg:text-2xl font-base " +
            (selectedTab != "" ? "min-h-[200px]" : "min-h-0")
          }
        >
          {selectedTab == "experienta-envision" && (
            <Reveal color="white">
              <div className="text-white text-justify">
                ENVISION este dorința de a uni programatorii zilei de mâine, a
                crea perspective noi, forma noi echipe și programa împreună,
                spre un viitor mai bun. Timp de două zile vom trăi împreună
                emoțiile subiectelor, adrenalina cronometrului și pasiunea
                pentru programare. Cei ce se vor ridica printre colegi cu cele
                mai bune aplicații vor fi răsplătiți cu premii.
              </div>
            </Reveal>
          )}

          {selectedTab == "workshop" && (
            <Reveal color="white">
              <div className="text-white text-justify pt-8">
                ENVISION oferă participanților 3 workshop-uri realizate de către
                (nume organizatori), în cadrul cărora vor fi oferite informații
                valoroase pentru cei ce vor să urmeze o cariera în domeniul IT.
                Aceste workshop-uri vor dura maxim jumătate de ora și se vor
                realiza sub forma unor "ted-talks". Nu au participare
                obligatorie însă vom încuraja toți concurenții să ia parte la
                acestea.
              </div>
            </Reveal>
          )}

          {selectedTab == "proba" && (
            <Reveal color="white">
              <div className="text-white text-justify pt-8">
                Pe parcursul maratonului se va organiza și un Workshop în care
                vă fi prezentată o paradigmă de programare utilă concurenților.
                Cei ce vor reuși integrarea acestei paradigme în codul lor și
                vor putea explica funcționalitatea acesteia , vor primi un
                premiu special .
              </div>
            </Reveal>
          )}

          {selectedTab == "jurizare" && (
            <Reveal color="white">
              <div className="text-white text-justify pt-8">
                Jurizarea lucrărilor se va realiza imediat după finalizarea
                programului. Fiecărui concurent i se va aloca un timp maxim
                prezentare de către comisia de jurizare, în funcție de numărul
                de concurenți și cerința data. În comisia de jurizare vor
                participa atât membrii tehnici cât și non-tehnici. Echipa
                BINARYTEAM va asigura 3 membri tehnici în comisia de jurizare:
                Catalin , Liviu și Denis, totodată cei ce se vor ocupa și de
                infrastructura digitală a concursului. Propunem ca toți
                organizatorii să aducă membri in juriu. Vor exista două bareme
                de jurizare : Tehnic și Nontehnic. În momentul elaborării
                subiectelor, vor fi scrise și baremele.
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </div>
  );
}
