import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col overflow-x-hidden"
    >
      <Header />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}
