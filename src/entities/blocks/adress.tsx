import { Link } from "@/shared/ui/link";
import React from "react";

type SummaryWithMapProps = {
  location: string;
  mapUrl: string;
  iframeSrc: string;
};

export const Adress: React.FC<SummaryWithMapProps> = ({
  location,
  mapUrl,
  iframeSrc,
}) => {
  return (
    <section className="px-4 pb-14">
      <div className="relative w-full h-full flex flex-col gap-4 md:max-w-[1120px] md:m-auto">
        <div className="bg-primary-green flex flex-col items-center text-primary-foreground rounded-xl">
          <div className="flex justify-center mb-4">
            <iframe
              src={iframeSrc}
              width="350"
              height="250"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg border-2 border-gray-300"
            />
          </div>
          <Link href={mapUrl}>{location}</Link>
        </div>
      </div>
    </section>
  );
};
