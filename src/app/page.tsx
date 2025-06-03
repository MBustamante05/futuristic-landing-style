"use client";
// import Contact from "@/components/contact";
import About from "../components/about";
import Cards from "../components/cards";
import Home from "../components/home";

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
      {/* <section id="contact">
        <Contact />
      </section> */}
    </>
  );
}
