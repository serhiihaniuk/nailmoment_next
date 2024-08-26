import React from "react";
import { SectionTitle } from "@/shared/ui/section-title";
import { CardSimple, CardSpeaker } from "@/shared/ui/schedule-card";

type ScheduleItem = {
  type: string;
  time: string;
  description: string;
  name?: string;
  image?: string;
  accent?: boolean;
};

type ScheduleProps = {
  scheduleItems: ScheduleItem[];
};

export const Schedule: React.FC<ScheduleProps> = ({ scheduleItems }) => {
  return (
    <section className="px-4 py-14 max-w-[500px]">
      <SectionTitle className="mb-5 md:mb-14">Програма</SectionTitle>
      <div className="relative w-full h-full gap-4 flex flex-col md:max-w-[1120px] md:m-auto">
        {scheduleItems.map((item, index) =>
          item.type === "simple" ? (
            <CardSimple
              key={index}
              time={item.time}
              description={item.description}
            />
          ) : (
            <CardSpeaker
              key={index}
              time={item.time}
              name={item.name!}
              image={item.image!}
              description={item.description}
              accent={item.accent}
            />
          )
        )}
      </div>
    </section>
  );
};
