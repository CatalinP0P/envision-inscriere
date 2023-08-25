import React from "react";
import { ToastContainer } from "react-toastify";
import Container from "../../components/ui/Container";
import Reveal from "../../components/Animation/Reveal";
import Hero from "./Hero";
import SignForm from "../../components/Form/SignForm";
import About from "./About";
import Detalii from "./Detalii";
import Schedule from "./Schedule";
import Sponsors from "./Sponsors";
import SignUp from "./SignUp";
import PersonCard from "../../components/ui/PersonCard";
import Organizators from "./Organizators";
import Awards from "./Awards";
import SponsorSlider from "../../components/ui/SponsorSlider";
import "react-toastify/dist/ReactToastify.css";
import Documents from "./Documents";

export default function Home() {
  return (
    <div>
      <Hero />
      <SponsorSlider />
      <About />
      <Detalii />
      <Schedule />
      <Awards />
      <div className="bg-neutral-100">
        <Documents />
      </div>
      <SignUp />
      {/* <div className="w-full bg-black/5">
        <Organizators />
      </div> */}
      <div className="bg-black/5">
        <Sponsors />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
