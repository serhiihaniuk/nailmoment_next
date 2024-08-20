"use client";
import "swiper/css";
import { Features } from "@/entities/blocks/features";
import { Hero } from "@/entities/blocks/hero";
import { Speakers } from "@/entities/blocks/speakers";
import { Schedule } from "@/entities/blocks/schedule";
import { Competitions } from "@/entities/blocks/competitions";
import { Tickets } from "@/entities/blocks/tickets";
import { Gallery } from "@/entities/blocks/gallery";
import { Testimonials } from "@/entities/blocks/testimonials";
import { Partners } from "@/entities/blocks/partners";
import { FAQ } from "@/entities/blocks/faq";
import { Summary } from "@/entities/blocks/summary";
import { Footer } from "@/entities/blocks/footer";
import { Adress } from "@/entities/blocks/adress";

const speakers = {
  belmas: {
    name: "Юлія Бельмас",
    image: "/speakers/belmas.jpg",
    description: "Факапи викладача та власника салону в Польщі",
  },
  ragoza: {
    name: "Ангеліна Рагоза",
    image: "/speakers/ragoza.jpg",
    description: "Як продавати через Лайв",
  },
  zozylia: {
    name: "Олена Зозуля",
    image: "/speakers/zozylia.jpg",
    description: "Верхні форми",
  },
  mart: {
    name: "Надя Март",
    image: "/speakers/mart.jpg",
    description:
      "Цифрова ера манікюру: як монетизувати з брендами мої таланти?",
  },
  browko: {
    name: "Діана Бровко",
    image: "/speakers/di.jpg",
    description: "Я знімаю відео. А що далі?",
  },
  sulima: {
    name: "Юлі Суліма",
    image: "/speakers/sulima.jpg",
    description: "Запуски онлайн курсів",
  },
  zemlyanika: {
    name: "Ніка Землянікіна",
    image: "/speakers/zemlyanika.jpg",
    description: "Алергії та хімія матеріалів",
  },
};

const scheduleItems = [
  {
    type: "simple",
    time: "9:00 - 10:45",
    description: "Реєстрація. Nail market",
  },
  { type: "simple", time: "10:45 - 11:00", description: "Відкриття" },
  {
    type: "speaker",
    time: "11:00 - 11:30",
    name: speakers.belmas.name,
    image: speakers.belmas.image,
    description: speakers.belmas.description,
  },
  {
    type: "speaker",
    time: "11:40 - 12:10",
    name: speakers.ragoza.name,
    image: speakers.ragoza.image,
    description: speakers.ragoza.description,
  },
  {
    type: "speaker",
    time: "12:20 - 13:20",
    name: speakers.zozylia.name,
    image: speakers.zozylia.image,
    description: speakers.zozylia.description,
  },
  {
    type: "simple",
    time: "13:20 - 15:00",
    description: "Перерва. Конкурси та інтерактиви в залі",
  },
  {
    type: "speaker",
    time: "15:00 - 15:30",
    name: speakers.mart.name,
    image: speakers.mart.image,
    description: speakers.mart.description,
  },
  {
    type: "speaker",
    time: "15:40 - 16:10",
    name: speakers.browko.name,
    image: speakers.browko.image,
    description: speakers.browko.description,
  },
  {
    type: "simple",
    time: "16:10 - 16:50",
    description: "Перерва. Конкурси та інтерактиви в залі",
  },
  {
    type: "speaker",
    time: "16:50 - 17:20",
    name: speakers.sulima.name,
    image: speakers.sulima.image,
    description: speakers.sulima.description,
    accent: true,
  },
  {
    type: "speaker",
    time: "17:30 - 18:00",
    name: speakers.zemlyanika.name,
    image: speakers.zemlyanika.image,
    description: speakers.zemlyanika.description,
  },
  { type: "simple", time: "18:00 - 18:30", description: "Результати змагань" },
];

export default function Home() {
  return (
    <>
      <Hero
        date="13 жовтня"
        location="Jozefa Szanajcy 17/19, 03-481 Warszawa"
        mapUrl="https://maps.app.goo.gl/q2zzTENBh3TEw8Jx9"
      />
      <Features />
      <Speakers speakers={speakers} />
      <Schedule scheduleItems={scheduleItems} />
      <Competitions />
      <Tickets />
      <Gallery />
      <Testimonials />
      <Partners />
      <FAQ />
      <Summary
        date="13 жовтня"
        location="Jozefa Szanajcy 17/19, 03-481 Warszawa"
        mapUrl="https://maps.app.goo.gl/q2zzTENBh3TEw8Jx9"
      />

      <Adress
        location="Jozefa Szanajcy 17/19, 03-481 Warszawa"
        mapUrl="https://goo.gl/maps/xyz123"
        iframeSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.8578951331633!2d21.02569855860169!3d52.26412550000783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc16560d5e8b%3A0x9376b884b993af61!2sJ%C3%B3zefa%20Szanajcy%2017%2F19%2C%2003-481%20Warszawa!5e0!3m2!1spl!2spl!4v1723571875617!5m2!1spl!2spl"
      />
      <Footer
        companyInfo={{
          name: "Nail Moment Anhelina Rahoza",
          address: "Burakowska 16b/162 01-066 Warszawa",
          nip: "5223118965",
          regon: "529210914",
        }}
        contactInfo={{
          email: "nail.moment.wroclaw@gmail.com",
          phone: "662 412 456",
        }}
        socialLinks={{
          instagram:
            "https://www.instagram.com/nail_moment_pl?igsh=YWZpY2JjOTFueXc5",
          telegram: "https://t.me/+THVRcBRhyWc5OWY0",
        }}
      />
    </>
  );
}
