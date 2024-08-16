import React, { useState } from "react";
import { SectionTitle } from "@/shared/ui/section-title";
import { cn } from "@/shared/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "@/shared/ui/link";

type FAQItem = {
  title: string;
  content: React.ReactNode;
};

const FAQItem: React.FC<
  FAQItem & { index: number; isActive: boolean; onClick: () => void }
> = ({ title, content, index, isActive, onClick }) => (
  <div
    className={cn(
      "border-t-[1px] border-t-[#4C4C4C] py-5 cursor-pointer select-none",
      index === 0 && "border-t-0"
    )}
    onClick={onClick}
  >
    <div className="flex items-center gap-2.5">
      <div className="min-w-[30px] h-[30px] items-center text-primary-foreground text-lg font-semibold">
        {String(index + 1).padStart(2, "0")}.
      </div>
      <h3 className="w-full text-primary-foreground text-lg font-semibold">
        {title}
      </h3>
      <div className="min-w-[30px] flex justify-center items-center leading-none font-asteriks text-2xl min-h-[30px] max-h-[30px] bg-accent-pink rounded-full relative">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground">
          {isActive ? "-" : "+"}
        </span>
      </div>
    </div>
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="text-lg text-primary-foreground opacity-80 font-light mt-1 pl-10">
            {content}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQ: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqItems: FAQItem[] = [
    {
      title: "Як купити квиток?",
      content: (
        <>
          Ви можете купити квиток через сайт - натиснути кнопку «Придбати»,
          вибрати тариф та зробити оплату. Також, можна придбати квиток{" "}
          <Link href="https://www.instagram.com/direct/t/17845724366996507">
            через дірект.
          </Link>
        </>
      ),
    },
    {
      title: "Як отримати фактуру?",
      content: (
        <>
          Щоб отримати фактуру напишіть нам{" "}
          <Link href="https://www.instagram.com/direct/t/17845724366996507">
            в дірект
          </Link>
        </>
      ),
    },
    {
      title: "Яке місце проведення фестивалю?",
      content: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.8578951331633!2d21.02569855860169!3d52.26412550000783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc16560d5e8b%3A0x9376b884b993af61!2sJ%C3%B3zefa%20Szanajcy%2017%2F19%2C%2003-481%20Warszawa!5e0!3m2!1spl!2spl!4v1723571875617!5m2!1spl!2spl"
          className="mx-auto"
          width="350"
          height="250"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ),
    },
    {
      title:
        "Як я можу прийняти участь в конкурсі «Найліпший Френч», «Корейський дизайн»?",
      content: (
        <>
          1. Купи квиток на фестиваль Nail Moment & Nail of The Day.
          <br />
          2. На сайті заповни анкету під конкурсом в якому хочеш прийняти
          участь.
          <br />
          3. В день фестивалю на першій перерві підійди до столів з конкурсу та
          назви своє імʼя та прізвище.
          <br />
          Можете взяти з собою свій пензлик для комфортної роботи ✨
        </>
      ),
    },
    {
      title:
        "Чи потрібно реєструватися щоб взяти участь у конкурсі «Найліпший Френч» та «Корейский дизайн»?",
      content: (
        <>
          Так, щоб прийняти участь у конкурсі{" "}
          <span className="text-accent-pink">«Найліпший Френч»</span> та{" "}
          <span className="text-accent-green">«Корейский дизайн»</span> треба
          зареєструватися на сайті.
        </>
      ),
    },
    {
      title:
        "Я купив(ла) квиток, але змінилися плани і я хочу повернути кошти. Як я можу це зробити?",
      content:
        "Повернення квитка можливе протягом 14 днів з моменту оплати квитка. Також, ми лишаємо за вами право на перепродаж квитка",
    },
  ];

  const telegramLink = "https://t.me/+THVRcBRhyWc5OWY0";

  return (
    <section className="px-4 py-14 flex flex-col gap-4 justify-start">
      <SectionTitle className="w-full px-4 md:mb-6">
        Найпоширеніші запитання
      </SectionTitle>
      <div className="relative w-full h-full flex flex-col gap-4 md:max-w-[760px] md:m-auto">
        <div>
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              {...item}
              index={index}
              isActive={activeIndices.includes(index)}
              onClick={() => toggleQuestion(index)}
            />
          ))}
        </div>
        <p className="w-[291px] mx-auto text-primary-foreground text-lg font-normal text-center md:w-full">
          <span className="opacity-70">
            Якщо залишились питання, напишіть нам в{" "}
          </span>
          <Link className="underline" href={telegramLink}>
            телеграм
          </Link>
        </p>
      </div>
    </section>
  );
};
