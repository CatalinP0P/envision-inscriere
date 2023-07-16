import React from "react";
import Reveal from "../../components/Animation/Reveal";
import Container from "../../components/ui/Container";
import SignForm from "../../components/Form/SignForm";

export default function SignUp() {
  return (
    <Container className="py-24 flex flex-col items-center" id="sign">
      <Reveal>
        <label className="font-bold uppercase text-md text-primary"></label>
      </Reveal>

      <Reveal>
        <label className="text-4xl lg:text-6xl font-light pb-4">
          Inscrie-te Acum!
        </label>
      </Reveal>
      <SignForm />
    </Container>
  );
}
