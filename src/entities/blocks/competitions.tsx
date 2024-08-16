import React from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "@/shared/ui/section-title";
import { RegisterEvent } from "@/shared/ui/register-event";

type CompetitionCardProps = {
  title: string;
  number: string;
  description: React.ReactNode;
  color: "pink" | "green";
};

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  title,
  number,
  description,
  color,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const bgColor = color === "pink" ? "bg-accent-pink" : "bg-accent-green";
  const textColor =
    color === "pink"
      ? "text-primary-foreground"
      : "text-accent-green-foreground";

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col gap-8 basis-1/2 justify-start rounded-xl ${bgColor} px-5 py-9`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3
        className={`${textColor} w-full uppercase text-xl font-travels font-bold inline-flex justify-between items-center`}
      >
        <span className="w-min">{title}</span>
        <span className="text-5xl font-bold">{number}</span>
      </h3>
      <div
        className={`font-asteriks ${textColor} text-base leading-7 grow text-start`}
      >
        {description}
      </div>
      <RegisterEvent color={color === "pink" ? "white" : "black"} />
      <a href="/rules" className={"block text-black mx-auto"}>
        Умови участі
      </a>
    </motion.div>
  );
};

export const Competitions: React.FC = () => {
  return (
    <section className="px-4 py-14">
      <SectionTitle className="mb-5 md:mb-14">Программа</SectionTitle>
      <div className="relative w-full h-full gap-4 flex flex-col justify-start md:max-w-[1120px] md:m-auto md:flex-row md:gap-8">
        <CompetitionCard
          title="Найрівніший френч"
          number="01"
          color="pink"
          description={
            <>
              <span className="block mb-2 text-xl">
                Продемонструйте свій рівень майстерності!
              </span>
              <span className="block mb-2">
                Френч — це класика, яка завжди в моді, але вимагає відточеного
                вміння. Прийми виклик і доведи, що твій френч — найрівніший!
              </span>
              <span className="block mb-2">
                Змагайся за титул Королеви Френч і вигравай цінні подарунки!
              </span>
              Зареєструйся вже зараз – кількість місць обмежена!
            </>
          }
        />
        <CompetitionCard
          title="Корейські дизайни"
          number="02"
          color="green"
          description={
            <>
              <span className="block mb-2 text-xl">
                Відчуй себе зіркою та створи твій унікальний креативний вибух!
              </span>
              <span className="block mb-2">
                Твій шанс продемонструвати неймовірний рівень креативності,
                майстерності та здобути заслужене визнання!
              </span>
              <span className="block mb-2">
                Прояви свою фантазію та здивуй публіку змагаючись за титул
                &quot;Королева Креативу&quot; та виграй розкішний подарунок!
                Подай заявку вже сьогодні та доведи, що ти справжній ГУРУ
                корейського дизайну!
              </span>
            </>
          }
        />
      </div>
    </section>
  );
};
