import { Ball } from "@/shared/ui/ball";
import { Button } from "@/shared/ui/button";
import { List } from "@/shared/ui/list";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="px-4 pt-6 lines-1 relative bg-contain bg-center bg-no-repeat h-[620px]">
        <Image
          src="/assets/hero.png"
          aria-hidden="true"
          alt="Background"
          width={300}
          height={452}
          className="absolute bottom-0 z-0 object-contain object-center left-1/2 -translate-x-1/2 border-b border-b-gray-800"
        />
        <div className="flex font-asteriks flex-col  gap-2 relative z-10">
          <span className="text-primary-foreground text-sm">
            15 жовтня / Баскетбольна арена
          </span>
          <a
            href="TODO:ADD_LINK"
            className="text-primary-foreground-muted text-xs"
          >
            Jozefa Szanajcy 17/19, 03-481 Warszawa
          </a>
        </div>
        <h1 className="w-[282px] flex flex-col gap-2 text-primary-foreground mt-6 text-start relative z-10">
          <span className="text-3xl w-min leading-10 font-travels font-bold">
            NAIL MOMENT
          </span>
          <span className="text-center inline-flex text-accent-pink gap-3 items-center">
            <span className="text-3xl font-travels">&</span>
            <span className="text-base font-asteriks text-nowrap">
              Перший фестиваль-коллаборація
            </span>
          </span>
          <span className="text-3xl w-64 leading-10 font-bold font-travels">
            NAILS
            <br /> OF THE DAY
          </span>
        </h1>
        <Button className="mx-auto absolute bottom-12 -rotate-[13deg] left-1/2 -translate-x-1/2">
          Придбати
        </Button>
      </section>
      <section className="px-4 py-14">
        <List />
        <h2 className="bg-accent-pink font-travels px-6 py-6 flex flex-col items-center justify-center rounded-xl text-2xl leading-7 mt-14 uppercase font-bold text-primary-foreground text-center">
          Стань чемпіоном <br /> у своїй справі
        </h2>
        <div className="bg-primary px-7 py-14 rounded-xl">
          <h3 className="text-primary-foreground uppercase text-xl font-travels font-bold">
            Готові вийти за рамки звичайного?
          </h3>
          <p className="mt-4 mb-7 text-base leading-7 text-start">
            Наш фестиваль об’єднує найкращих майстрів nail індустрії, щоб
            надихати, навчати та створювати тренди. Відкрий нові горизонти своєї
            кар’єри у незвичному місці - баскетбольній арені, де прагнення до
            перемоги стає реальністю.
          </p>
          <Ball className="flex flex-row-reverse" />
        </div>
      </section>
    </>
  );
}
