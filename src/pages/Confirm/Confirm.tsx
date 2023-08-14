import React from "react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate } from "react-router-dom";

export default function Confirm() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-grow flex-col items-center gap-24 justify-between">
      <Container className="text-start flex flex-col">
        <label className="text-4xl lg:text-6xl text-primary font-semibold pt-24 lg:pt-36">
          Te-ai inscris cu succes!
        </label>
        <label className="text-base lg:text-lg opacity-80 ms-2">
          Esti inscris la hackathonul nostu, te asteptam 😁
        </label>
        <div className="text-base w-fit mt-4">
          <Button onClick={() => navigate("/")} variant="primary">
            Mergi inapoi
          </Button>
        </div>
      </Container>
      <div className="bg-neutral-100 py-4 w-full -mb-0.5 z-[10] font-semibold">
        <Container className="grid grid-cols-3 justify-between">
          <div className="flex flex-col gap-2 items-center text-primary font-semibold cursor-pointer hover:text-primary/50 transition-all">
            <div className="text-6xl lg:text-8xl">
              <ArticleIcon fontSize="inherit" />
            </div>
            <label>Terms & Conditions</label>
          </div>
          <div className="flex flex-col gap-2  items-center text-primary font-semibold cursor-pointer hover:text-primary/50 transition-all">
            <div className="text-6xl lg:text-8xl">
              <ArticleIcon fontSize="inherit" />
            </div>
            <label>GDPR</label>
          </div>
          <div className="flex flex-col gap-2 items-center text-primary font-semibold cursor-pointer hover:text-primary/50 transition-all">
            <div className="text-6xl lg:text-8xl">
              <ArticleIcon fontSize="inherit" />
            </div>
            <label>Jurizare</label>
          </div>
        </Container>
      </div>
    </div>
  );
}
