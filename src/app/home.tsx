"use client";
import Image from "next/image";
import styles from "./landing-page.module.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative bg-[var(--moon-night)] text-white min-h-screen flex flex-col overflow-hidden"
    >
      {/* <Image src={"/bg-blur1.svg"} alt="background blur" width={850} height={850} className="absolute -top-40 left-0 z-0 opacity-70"/>
      <Image src={"/bg-blur2.svg"} alt="background blur" width={850} height={850} className="absolute -bottom-40 right-0 z-0 opacity-70"/> */}

      <div className="w-full max-w-[1300px] mx-auto px-4 py-8 z-10">
        <nav className="fixed left-1/2 top-6 transform -translate-x-1/2 flex justify-between w-full max-w-[784px] py-3 px-7 bg-white/10 rounded-full shadow-lg backdrop-blur-md z-50 items-center">
          <h3 className="text-lg font-bold font-dune cursor-pointer">
            B<span className="text-orange-300">Dev</span>.{" "}
          </h3>
          <ul className="flex space-x-4 text-[15px] tracking-wide ">
            <li>
              <a href="#home" className="hover:text-orange-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-200">
                About
              </a>
            </li>
            <li>
              <a href="#cards" className="hover:text-orange-200">
                Cards
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.gradientReveal}>
          <span className="font-bold text-[13rem] font-akira">Memories</span>
          <span className="font-bold  font-SFDistantOutline tracking-widest text-[15rem] ">
            Survive
          </span>
        </div>

        <Image
          src="/person.svg"
          alt="Futuristic Hand"
          width={1050}
          height={1050}
          className={styles.personImage}
        />

        <div className={styles.typingSubtitle}>The future starts now.</div>
      </div>
    </motion.div>
  );
}

export default Home;
