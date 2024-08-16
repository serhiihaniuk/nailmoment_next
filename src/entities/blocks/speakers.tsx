import React from "react";
import { motion, useInView } from "framer-motion";
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

const AnimatedSpeaker: React.FC<SpeakerType & { index: number }> = ({
  name,
  image,
  description,
  index,
}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Speaker name={name} image={image} description={description} />
    </motion.div>
  );
};

export const Speakers: React.FC<SpeakersProps> = ({ speakers }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="px-4 py-14 lines-2" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle className="mb-5 md:mb-14">Спікери Фестивалю</SectionTitle>
      </motion.div>
      <div className="relative w-full h-full md:max-w-[1120px] md:m-auto md:flex md:flex-col">
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 mt-4 justify-center items-stretch md:grid-cols-4 md:gap-y-16 md:gap-x-8">
          {Object.values(speakers).map((speaker, index) => (
            <AnimatedSpeaker
              key={index}
              index={index}
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
