import React from "react";
import Image from "next/image";
import { SectionTitle } from "@/shared/ui/section-title";

type Partner = {
  image: string;
  alt: string;
  width: number;
  height: number;
};

export const Partners: React.FC = () => {
  const partners: Partner[] = [
    {
      image: "/assets/partners-1.png",
      alt: "Partner 1",
      width: 74,
      height: 100,
    },
    {
      image: "/assets/partners-2.png",
      alt: "Partner 2",
      width: 80,
      height: 100,
    },
  ];

  const partnerLink = "#TODO:ADD BE A PARTNER LINK";

  return (
    <section className="px-4 py-14">
      <SectionTitle className="w-full px-4 md:mb-6">Партнери</SectionTitle>
      <div className="relative w-full h-full flex flex-col gap-4 justify-start md:max-w-[1120px] md:m-auto">
        <div className="flex gap-2.5 md:justify-center md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full h-[100px] flex items-center justify-center rounded-[20px] bg-primary md:max-w-[160px] md:h-[160px]"
            >
              <Image
                src={partner.image}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="w-auto"
              />
            </div>
          ))}
        </div>
        <a
          href={partnerLink}
          className="text-primary-foreground mx-auto relative h-[54px] w-full max-w-[300px] mt-3 flex items-center justify-center border-[1px] border-[#4C4C4C] rounded-md hover:bg-primary-foreground hover:text-primary transition-all md:mt-6"
        >
          <svg
            className="absolute left-[-1px] top-2/4 -translate-y-1/2"
            width="11"
            height="22"
            viewBox="0 0 11 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20.5137C5.52285 20.5137 10 16.0365 10 10.5137C10 4.99082 5.52285 0.513672 0 0.513672V20.5137Z"
              fill="black"
            />
            <path
              d="M0 20.5137C5.52285 20.5137 10 16.0365 10 10.5137C10 4.99082 5.52285 0.513672 0 0.513672"
              stroke="#4C4C4C"
            />
          </svg>
          <svg
            className="absolute right-[-1px] top-2/4 -translate-y-1/2"
            width="11"
            height="22"
            viewBox="0 0 11 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0.513672C5.47715 0.513671 1 4.99082 1 10.5137C1 16.0365 5.47715 20.5137 11 20.5137L11 0.513672Z"
              fill="black"
            />
            <path
              d="M11 0.513672C5.47715 0.513671 1 4.99082 1 10.5137C1 16.0365 5.47715 20.5137 11 20.5137"
              stroke="#4C4C4C"
            />
          </svg>
          <span className="text-sm font-bold">СТАТИ ПАРТНЕРОМ</span>
        </a>
      </div>
    </section>
  );
};
