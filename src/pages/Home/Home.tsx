import React from "react";
import Container from "../../components/ui/Container";
import Reveal from "../../components/Animation/Reveal";
import Hero from "./Hero";
import SignForm from "../../components/Form/SignForm";
import About from "./About";
import Detalii from "./Detalii";
import Schedule from "./Schedule";
import Sponsors from "./Sponsors";
import SignUp from "./SignUp";
import image from "../../assets/undraw_pair_programming_re_or4x.svg";
import PersonCard from "../../components/ui/PersonCard";
import Organizators from "./Organizators";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Detalii />
      <Schedule />
      <Sponsors />
      <SignUp />
      <Organizators />
    </div>
  );
}
