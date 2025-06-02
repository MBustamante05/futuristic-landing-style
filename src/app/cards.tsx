import React from "react";
import styles from "./cards.module.css";
import { Hand, PlusIcon, Star } from "lucide-react";
import Image from "next/image";

type DataProps = {
  description: string;
  label: string;
  icon: React.ReactNode;
};
function Cards() {
  const cardData: DataProps[] = [
    {
      description: "Lorem ipsum",
      label: "Lorem",
      icon: <PlusIcon className="w-6 h-6" />,
    },
    {
      description: "Lorem ipsum",
      label: "Lorem",
      icon: <Star className="w-6 h-6" />,
    },
    {
      description: "Lorem ipsum",
      label: "Lorem",
      icon: <Hand className="w-6 h-6" />,
    },

    {
      description: "Lorem ipsum",
      label: "Lorem",
      icon: <Hand className="w-6 h-6" />,
    },
  ];
  return (
    <div className="bg-[var(--moon-night)] text-white min-h-screen flex flex-col overflow-hidden font-akira">
      <div className="w-full max-w-[1500px]  mx-auto text-center justify-center pt-32 pb-10">
        
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-7xl text-[var(--sweet-orange)] font-bold tracking-wide">
            Lorem ipsum dolor sit amet.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            cum, accusantium atque natus tempore facere cupiditate velit
            officia, sunt possimus soluta impedit corrupti. Qui sit quasi eum
            modi, temporibus minus.
          </p>
        </div>
        <div className="relative h-full grid grid-cols-5 grid-rows-5 gap-6 mt-10 text-start m-auto">
          <div className="absolute inset-0">
          <Image
            src={"/bg-disturb2.svg"}
            alt=""
            width={700}
            height={200}
            className={`absolute -top-48 opacity-30 ${styles.bgDisturb}`}
          />
          <Image
            src={"/bg-disturb4.svg"}
            alt=""
            width={700}
            height={200}
            className={`absolute top-40 right-0 opacity-30 ${styles.bgDisturb}`}
          />
        </div>
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between bg-white/10 border border-gray-100/10 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                index === 0 ? "col-span-3 row-span-3" : ""
              } ${index === 1 ? "col-span-2 row-span-2" : ""} ${
                index === 2 ? "col-span-2 row-span-2" : ""
              } ${index === 3 ? "col-span-3 row-span-1" : ""}`}
            >
              <div className="flex justify-between items-center gap-4 ">
                <h2 className="text-2xl font-bold text-orange-300">{card.label}</h2>
                <div className="p-3 bg-gray-200/10 rounded-full">{card.icon}</div>
              </div>
              
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
