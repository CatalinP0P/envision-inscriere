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
            experienta, participare, proba
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

        <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-4 gap-y-16  pt-24 whitespace-nowrap">
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

          <SlideFromBottom className="col-span-2 lg:col-span-1">
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
              <label>Subiectul competitiei</label>
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
                spre un viitor mai bun.Credem în forța comunicării și a
                comunității. Chiar dacă este o activitate prin excelență
                individuală, programarea capătă valori adeseori neimaginate
                atunci când se face în context colectiv. Apar provocări și
                necesități care duc la crearea de colaborări și alianțe. Se
                creează comunități.
              </div>
            </Reveal>
          )}

          {selectedTab == "participare" && (
            <Reveal color="white">
              <div className="text-white text-justify pt-8  indent-8">
                Participarea in competitia envision iti va putea oferi multe
                indicii despre viitoarea ta cariera in domeniu, cat si o
                experienta de neuitat alaturi de programatori, asemenea tie.
                Pentru a te inscrie in competitie, trebuie doar sa completezi
                formularul de mai jos si te vom contacta noi, in luna
                septembrie. Ai nelamuriri? Contacteaza-ne oricand, la telefon
                sau pe whatsapp: +40762542431.
              </div>
            </Reveal>
          )}

          {selectedTab == "proba" && (
            <Reveal color="white">
              <div className="text-white text-justify pt-8 indent-8">
                Apelăm la resursele pasionaților, profesioniștilor, sau ale
                comunităților de programatori, pentru identificarea într-un timp
                foarte scurt a unei soluții informatice la principala problemă
                care preocupă comunitatea în care organizăm maratonul. Știm că
                visul oricărui programator este să-și vadă la lucru, în mod
                concret, codul. Creeam provocari pentru identificarea de soluții
                concrete, cu aplicabilitate imediată.
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </div>
  );
}
