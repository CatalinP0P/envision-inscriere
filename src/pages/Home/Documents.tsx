import React from "react";
import Container from "../../components/ui/Container";
import ArticleIcon from "@mui/icons-material/Article";

export default function Documents() {
  return (
    <Container className="flex flex-row justify-around py-4">
      <a
        target="_blank"
        href="https://documente.code-envision.ro/termeni_conditii.pdf"
        className="flex w-fit flex-col gap-2 items-center text-primary font-semibold cursor-pointer hover:text-primary/50 transition-all"
        rel="noreferrer"
      >
        <div className="text-6xl lg:text-8xl">
          <ArticleIcon fontSize="inherit" />
        </div>
        <label>Termeni si Conditii</label>
      </a>
      <a
        target="_blank"
        href="https://documente.code-envision.ro/descriere_subiect.pdf"
        className="flex w-fit flex-col gap-2  items-center text-primary font-semibold cursor-pointer hover:text-primary/50 transition-all"
        rel="noreferrer"
      >
        <div className="text-6xl lg:text-8xl">
          <ArticleIcon fontSize="inherit" />
        </div>
        <label>Descriere Subiect</label>
      </a>
    </Container>
  );
}
