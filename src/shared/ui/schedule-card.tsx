import React from "react";
import Image from "next/image";
import { cn } from "@/shared/utils/cn";

type CardSimpleProps = {
  time: string;
  description: string;
};

export const CardSimple: React.FC<CardSimpleProps> = ({
  time,
  description,
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

type CardSpeakerProps = {
  time: string;
  name: string;
  description: string;
  accent?: boolean;
  image: string;
};

export const CardSpeaker: React.FC<CardSpeakerProps> = ({
  time,
  name,
  description,
  accent,
  image,
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
      <div className="w-[55px] h-[55px] overflow-y-hidden relative min-w-[55px] min-h-[55px] bg-accent-pink rounded-full">
        <Image
          src={image}
          width={55}
          height={55}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};
