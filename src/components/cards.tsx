import React from "react";
import styles from "./cards.module.css";
import { Hand, PlusIcon, Star } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type DataProps = {
  description: string;
  label: string;
  icon: React.ReactNode;
};

function Cards() {
  const cardData: DataProps[] = [
    {
      description: "Digital connections",
      label: "Connection",
      icon: <PlusIcon className="w-6 h-6" />,
    },
    {
      description: "Infinite web of human experience.",
      label: "Identity",
      icon: <Star className="w-6 h-6" />,
    },
    {
      description: "Beautiful chaos of digital existence.",
      label: "Discovery",
      icon: <Hand className="w-6 h-6" />,
    },
    {
      description: "Never to be forgotten.",
      label: "Archive",
      icon: <Hand className="w-6 h-6" />,
    },
  ];

  // Ref para detectar cuando la sección es visible
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Variantes para el contenedor principal
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  // Variantes para el header (título y párrafo)
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
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
        delay: 0.3,
      },
    },
  };

  // Variantes para las imágenes de fondo
  const backgroundImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 0.3,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  // Variantes para el grid de cards
  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  // Variantes para cada card individual
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variantes para el contenido interno de las cards
  const cardContentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };

  // Variantes para los iconos
  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <div 
      ref={ref}
      className="bg-[var(--moon-night)] text-white min-h-screen flex flex-col overflow-hidden font-akira"
    >
      <motion.div 
        className="w-full max-w-[1500px] mx-auto text-center justify-center pt-32 pb-48"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="flex flex-col items-center gap-10"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-7xl text-[var(--sweet-orange)] font-bold tracking-wide"
            variants={headerVariants}
          >
            Consciousness
          </motion.h1>
          <motion.p
            variants={paragraphVariants}
          >
            Exploring the intersection where human consciousness meets digital reality, where memories become data, 
            and connections transcend physical boundaries. In this digital age, we discover new dimensions of what it means to be human.
          </motion.p>
        </motion.div>

        <div className="relative h-full grid grid-cols-5 grid-rows-4 gap-6 mt-10 text-start m-auto">
          <motion.div 
            className="absolute inset-0"
            variants={containerVariants}
          >
            <motion.div
              variants={backgroundImageVariants}
            >
              <Image
                src={"/bg-disturb2.svg"}
                alt=""
                width={700}
                height={200}
                className={`absolute -top-48 opacity-30 ${styles.bgDisturb}`}
              />
            </motion.div>
            <motion.div
              variants={backgroundImageVariants}
            >
              <Image
                src={"/bg-disturb4.svg"}
                alt=""
                width={700}
                height={200}
                className={`absolute top-40 right-0 opacity-30 ${styles.bgDisturb}`}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="contents"
            variants={gridVariants}
          >
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className={`flex flex-col justify-between bg-white/10 border border-gray-100/10 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index === 0 ? "col-span-3 row-span-3" : ""
                } ${index === 1 ? "col-span-2 row-span-2" : ""} ${
                  index === 2 ? "col-span-2 row-span-2" : ""
                } ${index === 3 ? "col-span-3 row-span-1" : ""}`}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="flex justify-between items-center gap-4"
                  variants={cardContentVariants}
                >
                  <motion.h2 
                    className="text-2xl font-bold text-orange-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  >
                    {card.label}
                  </motion.h2>
                  <motion.div 
                    className="p-3 bg-gray-200/10 rounded-full"
                    variants={iconVariants}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {card.icon}
                  </motion.div>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Cards;