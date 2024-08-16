import React from "react";
import { SectionTitle } from "@/shared/ui/section-title";
import { Speaker } from "@/shared/ui/speaker";

type SpeakerType = {
  name: string;
  image: string;
  description: string;
};

type SpeakersProps = {
  speakers: Record<string, SpeakerType>;
};

export const Speakers: React.FC<SpeakersProps> = ({ speakers }) => {
  return (
    <section className="px-4 py-14 lines-2">
      <SectionTitle className="mb-5 md:mb-14">Спікери Фестивалю</SectionTitle>
      <div className="relative w-full h-full md:max-w-[1120px] md:m-auto md:flex md:flex-col">
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 mt-4 justify-center items-stretch md:grid-cols-4 md:gap-y-16 md:gap-x-8">
          {Object.values(speakers).map((speaker, index) => (
            <Speaker
              key={index}
              name={speaker.name}
              image={speaker.image}
              description={speaker.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
