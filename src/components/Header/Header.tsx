import React from "react";
import lacocos from "../../assets/sponsors/lacocos.jpg";
import Container from "../ui/Container";

export default function Header() {
  return (
    <div className="bg-white w-full sticky top-0 z-[100] -mb-16">
      <Container>
        <img className="h-[4rem] mx-auto" src={lacocos} alt="lacocos" />
      </Container>
    </div>
  );
}
