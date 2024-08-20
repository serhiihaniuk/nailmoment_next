import React from "react";
import { TicketButton } from "@/shared/ui/ticket-button";

type SummaryProps = {
  date: string;
  location: string;
  mapUrl: string;
};

export const Summary: React.FC<SummaryProps> = ({ date, location, mapUrl }) => {
  return (
    <section className="px-4 pb-14">
      <div className="relative w-full h-full flex flex-col gap-4 md:max-w-[1120px] md:m-auto">
        <div className="py-7 px-5 bg-accent-green text-accent-green-foreground rounded-xl md:py-9">
          <h2 className="w-[296px] font-travels mx-auto uppercase text-primary font-bold text-xl text-center mb-2 md:w-full md:text-4xl">
            {date} / Баскетбольна арена
          </h2>
          <p className="text-primary font-normal text-lg text-center mb-4 md:text-2xl md:mb-10">
            <a href={mapUrl}>{location}</a>
          </p>
          <TicketButton
            href="#tickets"
            className="m-auto font-travels"
            color="black"
          >
            ЗАБРОНЮВАТИ
          </TicketButton>
        </div>
      </div>
    </section>
  );
};
