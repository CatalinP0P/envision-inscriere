import React from "react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function Confirm() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <Container className="text-start flex flex-col">
        <label className="text-4xl lg:text-6xl text-primary font-semibold">
          Te-ai inscris cu succes!
        </label>
        <label className="text-base lg:text-lg opacity-80 ms-2">
          Esti inscris la hackatonul nostu, te asteptam 😁
        </label>
        <div className="text-base w-fit mt-4">
          <Button onClick={() => navigate("/")} variant="primary">
            Mergi inapoi
          </Button>
        </div>
      </Container>
    </div>
  );
}
