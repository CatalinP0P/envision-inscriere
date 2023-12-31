import React from "react";
import Container from "../../components/ui/Container";
import ArticleIcon from "@mui/icons-material/Article";

export default function Documents() {
  return (
    <Container className="grid grid-cols-2 gap-y-6 lg:grid-cols-4 mx-auto justify-between py-8">
      <a
        target="_blank"
        href="https://documente.code-envision.ro/regulament-maraton.docx"
        className="flex w-full flex-col gap-2 items-center text-primary font-semibold cursor-pointer hover:text-primary/50 transition-all"
        rel="noreferrer"
      >
        <div className="text-6xl lg:text-8xl">
          <ArticleIcon fontSize="inherit" />
        </div>
        <label>Regulament maraton</label>
      </a>
      <a
        target="_blank"
        href="https://documente.code-envision.ro/acord-parental.docx"
        className="flex w-full flex-col gap-2  items-center text-primary font-semibold cursor-pointer hover:text-primary/50 transition-all"
        rel="noreferrer"
      >
        <div className="text-6xl lg:text-8xl">
          <ArticleIcon fontSize="inherit" />
        </div>
        <label>Acord Parental</label>
      </a>
      <a
        target="_blank"
        href="https://documente.code-envision.ro/consimtamant_gdpr.png"
        className="flex w-full flex-col gap-2 items-center text-primary font-semibold cursor-pointer hover:text-primary/50 transition-all"
        rel="noreferrer"
      >
        <div className="text-6xl lg:text-8xl">
          <ArticleIcon fontSize="inherit" />
        </div>
        <label>Declaratie de consimtamant</label>
      </a>

      <a
        target="_blank"
        href="https://documente.code-envision.ro/descriere_subiect.pdf"
        className="flex w-full flex-col gap-2  items-center text-primary font-semibold cursor-pointer hover:text-primary/50 transition-all"
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
