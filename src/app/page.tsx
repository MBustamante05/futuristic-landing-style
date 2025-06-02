"use client";
import About from "./about";
import Cards from "./cards";
import Home from "./home";

export default function LandingPage() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="cards">
        <Cards />
      </section>
    </>
  );
}
