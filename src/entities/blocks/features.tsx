import React from "react";
import { Ball } from "@/shared/ui/ball";
import { List } from "@/shared/ui/list";

export const Features: React.FC = () => {
  return (
    <section className="px-4 py-14">
      <div className="relative w-full h-full md:max-w-[1120px] md:m-auto md:flex md:flex-col">
        <List />
        <h2 className="bg-accent-pink font-travels px-6 py-6 flex flex-col items-center justify-center rounded-xl text-2xl leading-7 mt-14 uppercase font-bold text-primary-foreground text-center md:mt-20">
          Стань чемпіоном <br /> у своїй справі
        </h2>
        <div className="bg-primary px-7 py-14 rounded-xl md:flex md:flex-row-reverse md:gap-16 md:items-center md:px-[110px]">
          <div className="w-full">
            <h3 className="text-primary-foreground uppercase text-xl font-travels font-bold md:text-3xl">
              Готові вийти за рамки звичайного?
            </h3>
            <p className="mt-4 font-asteriks mb-7 text-base leading-7 text-start md:mt-1 md:mb-0 md:text-lg">
              Наш фестиваль об&apos;єднує найкращих майстрів nail індустрії, щоб
              надихати, навчати та створювати тренди. Відкрий нові горизонти
              своєї карєри у не&apos;єри у незвичному місці - баскетбольній
              арені, де прагнення до перемоги стає реальністю.
            </p>
          </div>
          <Ball className="w-[95px] h-[95px] ml-auto flex flex-row-reverse md:min-w-[162px] md:h-[162px]" />
        </div>
      </div>
    </section>
  );
};
