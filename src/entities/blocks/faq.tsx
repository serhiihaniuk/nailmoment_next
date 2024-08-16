import React, { useState } from "react";
import { SectionTitle } from "@/shared/ui/section-title";
import { cn } from "@/shared/utils/cn";

type FAQItem = {
  title: string;
  text: string;
  isActive: boolean;
};

export const FAQ: React.FC = () => {
  const [frequentlyQuestions, setFrequentlyQuestions] = useState<FAQItem[]>([
    {
      title: "Як купити квиток?",
      text: "Ви можете купити квиток через сайт - натиснути кнопку «Придбати», вибрати тариф та зробити оплату. Також, можна придбати квиток через дірект.",
      isActive: false,
    },
    {
      title: "Як отримати фактуру?",
      text: "Щоб отримати фактуру напишіть нам в дірект ✨",
      isActive: false,
    },
    {
      title: "Яке місце проведення фестивалю?",
      text: `map`,
      isActive: false,
    },
    {
      title:
        "Як я можу прийняти участь в конкурсі «Найліпший Френч», «Корейський дизайн»?",
      text: `Купи квиток на фестиваль Nail Moment & Nail of The Day. 
              На сайті заповни анкету під конкурсом в якому хочеш прийняти участь. 
              В день фестивалю на першій перерві підійди до столів з конкурсу та назви своє імʼя та прізвище. 
              Можете взяти з собою свій пензлик для комфортної роботи ✨
            `,
      isActive: false,
    },
    {
      title:
        "Чи потрібно реєструватися щоб взяти участь у конкурсі «Найліпший Френч» та «Корейский дизайн»?",
      text: "Так, що прийняти участь у конкурсі «Найліпший Френч» та «Корейский дизайн» треба зареєструватися на сайті.",
      isActive: false,
    },
    {
      title:
        "Я купив(ла) квиток, але змінилися плани і я хочу повернути кошти. Як я можу це зробити?",
      text: "Повернення квитка можливе протягом 14 днів з моменту оплати квитка. Також, ми лишаємо за вами право на перепродаж квитка",
      isActive: false,
    },
  ]);

  const onAccordionClick = (index: number) => {
    setFrequentlyQuestions((prevQuestions) =>
      prevQuestions.map((question, i) =>
        i === index ? { ...question, isActive: !question.isActive } : question
      )
    );
  };

  const telegramLink = "https://t.me/+THVRcBRhyWc5OWY0";

  return (
    <section className="px-4 py-14 flex flex-col gap-4 justify-start">
      <SectionTitle className="w-full px-4 md:mb-6">
        Часто задаваємі питання
      </SectionTitle>
      <div className="relative w-full h-full flex flex-col gap-4 md:max-w-[760px] md:m-auto">
        <div>
          {frequentlyQuestions.map((question, index) => (
            <div
              className={cn(
                "border-t-[1px] border-t-[#4C4C4C] py-5 cursor-pointer select-none",
                frequentlyQuestions.length === index + 1
                  ? "border-y-[1px] border-y-[#4C4C4C]"
                  : "border-t-[1px] border-t-[#4C4C4C] py-5"
              )}
              key={index}
              onClick={() => onAccordionClick(index)}
            >
              <div className="flex items-center gap-2.5">
                <div className="min-w-[30px] h-[30px] items-center text-primary-foreground text-lg font-semibold">
                  0{index + 1}.
                </div>
                <h3 className="w-full text-primary-foreground text-lg font-semibold">
                  {question.title}
                </h3>
                <div className="min-w-[30px] flex justify-center items-center leading-none font-asteriks text-2xl min-h-[30px] max-h-[30px] bg-accent-pink rounded-full relative">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground">
                    {question.isActive ? "-" : "+"}
                  </span>
                </div>
              </div>
              <p
                className={cn(
                  "max-h-[0] text-lg text-primary-foreground opacity-80 font-light mt-1 overflow-hidden transition-all duration-500 pl-10",
                  question.isActive ? "max-h-[200px]" : ""
                )}
              >
                {question.text === "map" ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.8578951331633!2d21.02569855860169!3d52.26412550000783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc16560d5e8b%3A0x9376b884b993af61!2sJ%C3%B3zefa%20Szanajcy%2017%2F19%2C%2003-481%20Warszawa!5e0!3m2!1spl!2spl!4v1723571875617!5m2!1spl!2spl"
                    width="200"
                    height="250"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  question.text
                )}
              </p>
            </div>
          ))}
        </div>
        <p className="w-[291px] mx-auto text-primary-foreground text-lg font-normal text-center md:w-full">
          <span className="opacity-70">
            Якщо залишились питання, напишіть нам в{" "}
          </span>
          <a className="underline" href={telegramLink}>
            телеграм
          </a>
        </p>
      </div>
    </section>
  );
};
