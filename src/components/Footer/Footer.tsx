import React from "react";
import { ReactComponent as FacebookSVG } from "../../assets/square-facebook.svg";
import { ReactComponent as Logo } from "../../assets/Envision4.svg";
import { ReactComponent as InstagramSVG } from "../../assets/instagram.svg";
import Container from "../ui/Container";
import coding from "../../assets/coding.jpeg";

export default function Footer() {
  return (
    <div className="relative border pt-8 pb-2">
      <div className="bg-primary/90 z-[-1] absolute left-0 top-0 w-full h-full" />
      <img
        className="absolute left-0 top-0 w-full h-full object-cover z-[-2]"
        src={coding}
      />

      <Container className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 pb-2 gap-y-8 md:gap-y-4">
        <div className="flex flex-col w-full col-span-2 md:col-span-1 ">
          <Logo className="w-[75%] mx-auto md:mx-0 h-fit translate-y-[-20%]" />
        </div>
        <div className="w-full flex flex-col gap-2 items-center text-white text-lg">
          <div className="w-fit flex flex-col gap-2 items-start text-start first-letter:uppercase [&>*]:first-letter:uppercase">
            <a className="cursor-pointer">termeni si conditii</a>
            <a className="cursor-pointer">accord GDPR</a>
            <a className="cursor-pointer">despre noi</a>
            <a className="cursor-pointer">join us</a>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 items-center text-start text-white">
          <div className="w-fit text-start items-start flex flex-col gap-2">
            <label className="font-bold text-2xl">Find us at</label>
            <a className="cursor-pointer [&>*]:pointer-events-none">
              <div className="flex flex-row gap-4 items-center cursor-pointer">
                <FacebookSVG className="w-6 h-6 fill-white" />
                <label>Envision</label>
              </div>
            </a>
            <a
              href="asfdasw"
              target="_blank"
              className="cursor-pointer [&>*]:pointer-events-none"
            >
              <div className="flex flex-row gap-4 items-center">
                <FacebookSVG className="w-6 h-6 fill-white " />
                <label>Observatorul Prahovean</label>
              </div>
            </a>
            <a className="cursor-pointer [&>*]:pointer-events-none">
              <div className="flex flex-row gap-4 items-center cursor-pointer">
                <InstagramSVG className="w-6 h-6 fill-white" />
                <label>envision_code</label>
              </div>
            </a>
          </div>
        </div>
        <div className="col-span-full text-white/80 text-center md:ps-6 md:text-start">
          <label>© All Rights Reserved {new Date().getFullYear()}</label>
        </div>
      </Container>
    </div>
  );
}
