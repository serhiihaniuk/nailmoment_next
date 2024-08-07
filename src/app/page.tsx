import { Ball } from "@/shared/ui/ball";
import { Button } from "@/shared/ui/button";
import { List } from "@/shared/ui/list";
import { SectionTitle } from "@/shared/ui/section-title";
import { Speaker } from "@/shared/ui/speaker";
import Image from "next/image";
import { cn } from "@/shared/utils/cn";

const speakers = {
  belmas: {
    name: "Юлія Бельмас",
    image: "/speakers/speaker.png",
    description: "Факапи викладача та власника салону в Польщі",
  },
  ragoza: {
    name: "Ангеліна Рагоза",
    image: "/speakers/speaker.png",
    description: "Як продавати через Лайв",
  },
  zozylia: {
    name: "Олена Зозуля",
    image: "/speakers/speaker.png",
    description: "Верхні форми",
  },
  mart: {
    name: "Надя Март",
    image: "/speakers/speaker.png",
    description: "Як продавати через Лайв",
  },
  browko: {
    name: "Діана Бровко",
    image: "/speakers/speaker.png",
    description: "Я знімаю відео. А що далі?",
  },
  sulima: {
    name: "Юлія Суліма",
    image: "/speakers/speaker.png",
    description: "Запуски онлайн курсів",
  },
  zemlyanika: {
    name: "Ніка Землянікіна",
    image: "/speakers/speaker.png",
    description: "Алергії та хімія матеріалів",
  },
};

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
      <section className="px-4 py-14 flex flex-col items-stretch gap-4 lines-2 justify-start">
        <SectionTitle>Спікери Фестивалю</SectionTitle>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 mt-4 justify-center items-stretch">
          <Speaker
            name={speakers.belmas.name}
            image={speakers.belmas.image}
            description={speakers.belmas.description}
          />
          <Speaker
            name={speakers.ragoza.name}
            image={speakers.ragoza.image}
            description={speakers.ragoza.description}
          />
          <Speaker
            name={speakers.zozylia.name}
            image={speakers.zozylia.image}
            description={speakers.zozylia.description}
          />
          <Speaker
            name={speakers.mart.name}
            image={speakers.mart.image}
            description={speakers.mart.description}
          />
          <Speaker
            name={speakers.browko.name}
            image={speakers.browko.image}
            description={speakers.browko.description}
          />
          <Speaker
            name={speakers.sulima.name}
            image={speakers.sulima.image}
            description={speakers.sulima.description}
          />
          <Speaker
            name={speakers.zemlyanika.name}
            image={speakers.zemlyanika.image}
            description={speakers.zemlyanika.description}
          />
        </div>
      </section>

      <section className="px-4 py-14 flex flex-col items-stretch gap-4 justify-start">
        <SectionTitle>Программа</SectionTitle>
        <CardSimple
          time="10:00 - 10:15"
          description="Відкриття Реєстрація. Нетворкінг. Nail - Маркет"
        />
        <CardSimple
          time="10:15 - 10:30"
          description="Програма початку фестивалю"
        />
        <CardSpeaker
          time="10:30 - 10:45"
          name={speakers.belmas.name}
          description={speakers.belmas.description}
        />
        <CardSpeaker
          time="10:45 - 11:00"
          name={speakers.ragoza.name}
          description={speakers.ragoza.description}
        />
        <CardSpeaker
          time="11:00 - 11:15"
          name={speakers.zozylia.name}
          description={speakers.zozylia.description}
        />
        <CardSimple
          time="10:00 - 10:15"
          description="Перерва. Конкурси та інтерактиви в залі"
        />
        <CardSpeaker
          time="10:15 - 10:30"
          name={speakers.mart.name}
          description={speakers.mart.description}
        />
        <CardSpeaker
          time="10:30 - 10:45"
          name={speakers.browko.name}
          description={speakers.browko.description}
        />
        <CardSpeaker
          time="10:45 - 11:00"
          name={speakers.sulima.name}
          description={speakers.sulima.description}
          accent
        />
        <CardSpeaker
          time="11:00 - 11:15"
          name={speakers.zemlyanika.name}
          description={speakers.zemlyanika.description}
        />
        <CardSimple
          time="11:15 - 11:30"
          description="Перерва. Конкурси та інтерактиви в залі"
        />
      </section>
    </>
  );
}

const CardSimple = ({
  time,
  description,
}: {
  time: string;
  description: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-1 bg-primary rounded-xl p-5")}>
      <div className="text-primary-foreground font-travels font-bold">
        {time}
      </div>
      <div className="text-primary-foreground-muted font-asteriks">
        {description}
      </div>
    </div>
  );
};

const CardSpeaker = ({
  time,
  name,
  description,
  accent,
}: {
  time: string;
  name: string;
  description: string;
  accent?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex flex-row gap-1 bg-white rounded-xl p-5",
        accent && "bg-accent-green"
      )}
    >
      <div className="grow">
        <div
          className={cn(
            "text-accent-pink font-travels font-bold",
            accent && "text-black"
          )}
        >
          {time}
        </div>
        <div className="text-black font-travels uppercase font-bold">
          {name}
        </div>
        <div className="text-black/70 font-asteriks">{description}</div>
      </div>
      <div className="w-[55px] h-[55px] min-w-[55px] min-h-[55px] bg-accent-pink rounded-full"></div>
    </div>
  );
};
