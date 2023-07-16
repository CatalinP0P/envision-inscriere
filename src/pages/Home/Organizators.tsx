import React from "react";
import Reveal from "../../components/Animation/Reveal";
import Container from "../../components/ui/Container";
import PersonCard from "../../components/ui/PersonCard";

import image from "../../assets/undraw_programming_re_kg9v.svg";

export default function Organizators() {
  return (
    <div className="py-24 bg-black/5 flex flex-col items-center">
      <Reveal>
        <label className="font-bold uppercase text-md text-primary">
          carduri Organizatori
        </label>
      </Reveal>

      <Reveal>
        <label className="text-4xl lg:text-6xl font-light pb-6">
          Organizatori ( testing )
        </label>
      </Reveal>

      <Container className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-8 pt-24">
        <PersonCard imageURL={image} name="Nume Prenume" position="Pozitie" />
        <PersonCard imageURL={image} name="Nume Prenume" position="Pozitie" />
        <PersonCard imageURL={image} name="Nume Prenume" position="Pozitie" />
        <PersonCard imageURL={image} name="Nume Prenume" position="Pozitie" />
        <PersonCard imageURL={image} name="Nume Prenume" position="Pozitie" />
      </Container>
    </div>
  );
}
