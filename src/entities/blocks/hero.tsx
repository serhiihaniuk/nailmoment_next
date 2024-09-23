import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TicketButton } from "@/shared/ui/ticket-button";

const images = [
  "/speakers/t/1.PNG",
  "/speakers/t/2.PNG",
  "/speakers/t/3.PNG",
  "/speakers/t/4.PNG",
  "/speakers/t/5.PNG",
  "/speakers/t/6.PNG",
  "/speakers/t/7.PNG",
];

type HeroProps = {
  date: string;
  location: string;
  mapUrl: string;
};

export const Hero: React.FC<HeroProps> = ({ date, location, mapUrl }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 pt-6 lines-1 relative bg-contain bg-center bg-no-repeat h-[780px] md:h-lvh">
      <div className="relative w-full h-full md:max-w-[1120px] md:m-auto md:border-b md:border-b-gray-800 md:flex md:flex-col">
        {/* Multiple Image Components */}
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
            transition={{ duration: 0.875 }}
            className={`absolute bottom-0 w-full z-0 h-[500px] md:h-auto left-1/2 -translate-x-1/2 border-b border-b-gray-800 md:border-0 md:left-auto md:right-[40px] md:w-[600px] md:-translate-x-[0]`}
          >
            <div className="relative w-full h-full pl-8">
              <Image
                src={src}
                alt={`Speaker ${index + 1}`}
                width={1000}
                height={1000}
                quality={80}
                className="object-contain object-center w-full h-full"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute bottom-0 z-10 left-0 w-full h-[20%] bg-gradient-to-t from-black via-black to-transparent" />
            </div>
          </motion.div>
        ))}

        <motion.div
          className="flex font-asteriks flex-col gap-2 relative z-10 md:gap-0 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-primary-foreground text-sm md:text-lg">
            {date} / Баскетбольна арена
          </span>
          <a
            href={mapUrl}
            className="text-primary-foreground-muted text-xs md:text-lg"
          >
            {location}
          </a>
        </motion.div>

        <motion.h1
          className="w-full flex flex-col gap-2 text-primary-foreground mt-6 text-start relative z-10 md:w-[600px] md:my-auto"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="font-travels uppercase font-bold leading-6 text-white text-2xl md:text-3xl">
            <span className="text-base"> Встигни стати учасницею </span>{" "}
            наймасштабнішого{" "}
            <span className="text-base">фестивалю для майстрів манікюру </span>
          </span>
          <motion.span
            className="text-md  leading-10 font-travels font-bold md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            NAIL MOMENT <span className="text-accent-pink">&</span> NAILS OF THE
            DAY
          </motion.span>
          <span className="text-accent-pink font-travels text-base text-nowrap">
            Перший фестиваль-коллаборація
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center items-center gap-2 absolute bottom-12  left-1/2 -translate-x-1/2 md:right-[80px] md:left-auto flex-col w-72"
        >
          <TicketButton href="#tickets" className="mx-auto ">
            Придбати
          </TicketButton>
          <a
            className="block bg-accent-pink text-white w-max font-travels uppercase px-4 py-2 rounded-md font-bold place-items-center leading-none text-sm mt-2"
            target="_blank"
            href="https://buy.stripe.com/3cseWU3Lh3Et0akdRC"
          >
            Зарезервувати місце
          </a>
        </motion.div>
      </div>
    </section>
  );
};
