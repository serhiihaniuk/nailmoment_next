import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TicketButton } from "@/shared/ui/ticket-button";

type HeroProps = {
  date: string;
  location: string;
  mapUrl: string;
};

export const Hero: React.FC<HeroProps> = ({ date, location, mapUrl }) => {
  return (
    <section className="px-4 pt-6 lines-1 relative bg-contain bg-center bg-no-repeat h-[620px] md:h-lvh">
      <div className="relative w-full h-full md:max-w-[1120px] md:m-auto md:border-b md:border-b-gray-800 md:flex md:flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Image
            src="/assets/hero.png"
            aria-hidden="true"
            alt="Background"
            width={2000}
            height={2000}
            quality={100}
            className="absolute bottom-0 z-0 object-contain object-center left-1/2 -translate-x-1/2 border-b border-b-gray-800 md:border-0 md:left-auto md:right-[40px] md:w-[600px] md:-translate-x-[0]"
          />
        </motion.div>
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
          className="w-[282px] flex flex-col gap-2 text-primary-foreground mt-6 text-start relative z-10 md:w-[600px] md:my-auto"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span
            className="text-3xl w-min leading-10 font-travels font-bold md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            NAIL MOMENT
          </motion.span>
          <motion.span
            className="text-center inline-flex text-accent-pink gap-3 items-center md:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="text-3xl font-travels md:text-7xl ">&</span>
            <span className="text-base font-asteriks text-nowrap">
              Перший фестиваль-коллаборація
            </span>
          </motion.span>
          <motion.span
            className="text-3xl w-64 leading-10 font-bold font-travels md:text-7xl md:w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            NAILS
            <br /> OF THE DAY
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <TicketButton
            href="#tickets"
            className="mx-auto absolute bottom-12 -rotate-[13deg] left-1/2 -translate-x-1/2 md:right-[80px] md:left-auto"
          >
            Придбати
          </TicketButton>
        </motion.div>
      </div>
    </section>
  );
};
