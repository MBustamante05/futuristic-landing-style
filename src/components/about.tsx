"use client";
import React, { useState } from "react";
import styles from "./about.module.css";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type WordContentProps = {
  word: string;
  content: string;
  img: string;
};

function About() {
  const [wordChoice, setWordChoice] = useState<string>("Future");
  const words = ["Past", "Future", "Philosophy", "Beautiful", "Memories"];
  
  // Ref para detectar cuando la sección es visible
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const wordContent: WordContentProps[] = [
    {
      word: "Past",
      content:
        "The past is a treasure trove of experiences, shaping who we are today.",
      img: "/images/past.jpeg",
    },
    {
      word: "Future",
      content:
        "The future is a canvas of possibilities, waiting to be painted with our dreams.",
      img: "/images/future.jpeg",
    },
    {
      word: "Philosophy",
      content:
        "Philosophy is the pursuit of wisdom, exploring the fundamental nature of knowledge and existence.",
      img: "/images/philosophy.jpeg",
    },
    {
      word: "Beautiful",
      content:
        "Beauty is found in the simplest moments, in the laughter shared and the love given.",
      img: "/images/beautiful.jpeg",
    },
    {
      word: "Memories",
      content:
        "Memories are the echoes of our past, cherished moments that shape our identity.",
      img: "/images/memories.jpeg",
    },
  ];


  // Variantes específicas para cada columna - entrada recta
  const leftColumnVariants = {
    hidden: {
      opacity: 0,
      x: -300,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const rightColumnVariants = {
    hidden: {
      opacity: 0,
      x: 300,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  // Variantes para animar las palabras individualmente
  const wordsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variantes para el contenido de la derecha
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div 
      ref={ref}
      className="relative bg-orange-600/80 text-white min-h-screen flex flex-col overflow-hidden"
    >
      <motion.div 
        className="w-full mx-auto max-w-[1500px] pt-32 pb-10 grid grid-cols-5 gap-5"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className={`col-span-3 font-akira text-[6rem] font-bold ${styles.wordsContainer}`}
          variants={leftColumnVariants}
        >
          <motion.div
            variants={wordsContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            {words.map((word, index) => (
              <motion.div
                className={wordChoice === word ? styles.wordActive : styles.flipBox}
                key={index}
                onClick={() => setWordChoice(word)}
                variants={wordVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.flipInner}>
                  <span className={styles.flipFront}>{word}</span>
                  <span className={styles.flipBack}>{word}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Columna derecha - Contenido */}
        <motion.div 
          className="col-span-2"
          variants={rightColumnVariants}
        >
          {wordChoice &&
            (() => {
              const item = wordContent.find(
                (item: WordContentProps) => item.word === wordChoice
              );
              return (
                item && (
                  <motion.div 
                    className="flex flex-col gap-7 text-2xl font-bold p-5 bg-white/10 rounded-lg backdrop-blur-md font-akira w-fit"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    key={wordChoice} // Re-anima cuando cambia el contenido
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {item.content}
                    </motion.span>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Image
                        src={item.img}
                        alt={item.word}
                        width={500}
                        height={625}
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl object-cover max-w-full max-h-[625px]"
                      />
                    </motion.div>
                  </motion.div>
                )
              );
            })()}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;