'use client';
import About from "./about";
import Home from "./home";

export default function LandingPage() {
  return (
    <>
    <section id="home">
      <Home />
    </section>
    <section>
      <About />
    </section>
    </>
  );
}
