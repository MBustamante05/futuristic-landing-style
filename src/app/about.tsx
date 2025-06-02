"use client";
import React, { useState } from "react";
import styles from "./about.module.css";
import Image from "next/image";

type WordContentProps = {
  word: string;
  content: string;
  img: string;
};
function About() {
  const [wordChoice, setWordChoice] = useState<string>("Future");
  const words = ["Past", "Future", "Philosophy", "Beautiful", "Memories"];
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
  return (
    <div className="relative bg-orange-600/80 text-white min-h-screen flex flex-col overflow-hidden">
      <div className="w-full mx-auto px-32 pt-32 pb-10 grid grid-cols-5 gap-5">
        <div
          className={`col-span-3 flex flex-col font-akira text-[6rem] font-bold ${styles.wordsContainer}`}
        >
          {words.map((word, index) => (
            <div
              className={wordChoice === word ? styles.wordActive : styles.flipBox}
              key={index}
              onClick={() => setWordChoice(word)}
            >
              <div className={styles.flipInner}>
                <span className={styles.flipFront}>{word}</span>
                <span className={styles.flipBack}>{word}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2">
          {wordChoice &&
            (() => {
              const item = wordContent.find(
                (item: WordContentProps) => item.word === wordChoice
              );
              return (
                item && (
                  <div className="flex flex-col gap-7 text-2xl font-bold p-5 bg-white/10 rounded-lg backdrop-blur-md font-akira w-fit">
                    <span>
                      {item.content}
                    </span>
                    <Image
                      src={item.img}
                      alt={item.word}
                      width={500}
                      height={625}
                      className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl object-cover max-w-full max-h-[625px] "
                    />
                  </div>
                )
              );
            })()}
        </div>
      </div>
    </div>
  );
}

export default About;
