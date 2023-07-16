import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Logo";
import Container from "../ui/Container";

export default function Header() {
  const [visible, setVisibility] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: any) => {
    if (window.scrollY <= 10) setVisibility(true);
    else setVisibility(false);
  };

  return (
    <div
      className={
        "transition-all fixed top-0 left-0 w-full z-[10] " +
        (visible ? "opacity-100 " : " opacity-0 translate-y-[-50%]")
      }
    >
      <Container className="py-4 flex flex-row justify-between">
        <Logo />
      </Container>
    </div>
  );
}
