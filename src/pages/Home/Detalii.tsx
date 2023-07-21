import React, { useState } from "react";
import Container from "../../components/ui/Container";
import backgroundImage from "../../assets/coding2.jpg";
import Reveal from "../../components/Animation/Reveal";

import { ReactComponent as MountainSVG } from "../../assets/mountain.svg";
import { ReactComponent as TargetSVG } from "../../assets/target.svg";
import { ReactComponent as TriangleSVG } from "../../assets/triangle.svg";
import { ReactComponent as PeopleSVG } from "../../assets/people.svg";

import SlideFromBottom from "../../components/Animation/SlideFromBottom";

export default function Detalii() {
  const [selectedTab, selectTab] = useState("cine-suntem");

  return (
    <div className="w-full relative transition-all">
      <img
        className="absolute left-0 top-0 w-full h-full object-cover z-[-2]"
        src={backgroundImage}
      />
      <div className="absolute left-0 top-0 w-full h-full z-[-1] bg-primary/95 transition-all" />
      <Container className="flex flex-col py-16 items-center text-white">
        <Reveal color="white">
          <label className="font-bold uppercase text-md text-white">
            cine suntem si ce facem
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

        <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-4 gap-y-16 pt-16 whitespace-nowrap">
          <SlideFromBottom>
            <div
              className={
                "w-full h-full flex flex-col gap-4 items-center font-bold uppercase text-xs md:text-sm " +
                (selectedTab == "cine-suntem" ? "" : " opacity-60")
              }
            >
              <div
                className={
                  "w-[128px] h-[128px] cursor-pointer relative p-4 rounded-full bg-white active:bg-white/60 "
                }
                onClick={() => selectTab("cine-suntem")}
              >
                <TriangleSVG
                  width={64}
                  height={64}
                  fill="white"
                  className={
                    " left-[50%] translate-x-[-50%] top-[-64px] " +
                    (selectedTab == "cine-suntem" ? " absolute" : " hidden")
                  }
                />
                <PeopleSVG width={"full"} height={"full"} />
              </div>
              <label>Cine suntem?</label>
            </div>
          </SlideFromBottom>

          <SlideFromBottom>
            <div
              className={
                "w-full h-full flex flex-col gap-4 items-center font-bold uppercase text-xs md:text-sm " +
                (selectedTab == "misiunea-noastra" ? "" : " opacity-60")
              }
            >
              <div
                className={
                  "w-[128px] h-[128px] cursor-pointer relative p-4 rounded-full bg-white active:bg-white/60 "
                }
                onClick={() => selectTab("misiunea-noastra")}
              >
                <TriangleSVG
                  width={64}
                  height={64}
                  fill="white"
                  className={
                    " left-[50%] translate-x-[-50%] top-[-64px] " +
                    (selectedTab == "misiunea-noastra"
                      ? " absolute"
                      : " hidden")
                  }
                />
                <MountainSVG width={"full"} height={"full"} />
              </div>
              <label>Care este misiunea noastră?</label>
            </div>
          </SlideFromBottom>

          <SlideFromBottom className="col-span-2 lg:col-span-1">
            <div
              className={
                "w-full h-full flex flex-col gap-4 items-center font-bold uppercase text-xs md:text-sm " +
                (selectedTab == "obiectiv" ? "" : " opacity-60")
              }
            >
              <div
                className={
                  "w-[128px] h-[128px] cursor-pointer relative p-6 rounded-full bg-white active:bg-white/60 "
                }
                onClick={() => selectTab("obiectiv")}
              >
                <TriangleSVG
                  width={64}
                  height={64}
                  fill="white"
                  className={
                    " left-[50%] translate-x-[-50%] top-[-64px] " +
                    (selectedTab == "obiectiv" ? " absolute" : " hidden")
                  }
                />
                <TargetSVG width={"full"} height={"full"} />
              </div>
              <label>Care este obiectivul nostru?</label>
            </div>
          </SlideFromBottom>
        </div>

        <div
          className={
            "transition-all flex flex-row items-center pt-12 text-lg lg:text-xl font-base " +
            (selectedTab != "" ? "min-h-[200px]" : "min-h-0")
          }
        >
          {selectedTab == "cine-suntem" && (
            <Reveal color="white">
              <p className="text-white text-justify indent-8">
                Un grup de inițiativă format din persoane cu experiență în
                diferite domenii, preocupați de identificarea de soluții
                inteligente pentru rezolvarea problemelor comunitare.
              </p>
            </Reveal>
          )}

          {selectedTab == "misiunea-noastra" && (
            <Reveal color="white">
              <p className="text-white text-justify pt-8 indent-8">
                Credem în forța comunicării și a comunității. Chiar dacă este o
                activitate prin excelență individuală, programarea capătă valori
                adeseori neimaginate atunci când se face în context colectiv.
                Apar provocări și necesități care duc la crearea de colaborări
                și alianțe. Se creează comunități. Viziunea Code Envision este
                aceea de a fi un promotor al comunicării între programatori și
                al creării de legături firești, naturale între indivizi și
                comunități.
              </p>
            </Reveal>
          )}

          {selectedTab == "obiectiv" && (
            <Reveal color="white">
              <div className="text-white text-justify pt-8 indent-8">
                Apelăm la resursele pasionaților, profesioniștilor, sau ale
                comunităților de programatori, pentru identificarea într-un timp
                foarte scurt a unei soluții informatice la principala problemă
                care preocupă comunitatea în care organizăm maratonul. Soluția
                va fi pusă în mod gratuit la dispoziția comunității gazdă care
                va fi sprijinită și pentru implementarea ei. Vrem ca
                participanții să cunoască valorile reale ale informaticii, motiv
                pentru care organizăm întâlniri/interacțiuni/workshop-uri cu
                personalități și oameni de succes din informatică și domeniile
                conexe. Știm că visul oricărui programator este să-și vadă la
                lucru, în mod concret, codul. Facem provocări ”blitz” pentru
                identificarea de soluții concrete, cu aplicabilitate imediată,
                la probleme ridicate de sponsori.
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </div>
  );
}
