import React from "react";
import Image from "next/image";
import { SectionTitle } from "@/shared/ui/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Gallery: React.FC = () => {
  return (
    <section className="px-4 py-14 md:px-0">
      <SectionTitle className="w-full px-4">
        Фото з минулих фестивалів
      </SectionTitle>
      <Swiper
        spaceBetween={30}
        className="prev"
        grabCursor={true}
        slidesPerView={1.1}
        breakpoints={{
          1024: {
            slidesPerView: 1.5,
            centeredSlides: true,
            initialSlide: 0,
          },
        }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <SwiperSlide key={i}>
            <Image
              src={`/prev/${i + 1}.jpg`}
              aria-hidden="true"
              alt="Фото з минулих фестивалів"
              className="rounded-xl w-full h-full"
              fill
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
