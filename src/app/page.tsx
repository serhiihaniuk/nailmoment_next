"use client";
import { useState } from "react";
import { SectionTitle } from "@/shared/ui/section-title";
import { TicketButton } from "@/shared/ui/ticket-button";
import Image from "next/image";
import { cn } from "@/shared/utils/cn";
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

const links = {
  partnerLink: "#TODO:ADD BE A PARTNER LINK",
  telegramLink: "https://t.me/+THVRcBRhyWc5OWY0",
  instagramLink:
    "https://www.instagram.com/nail_moment_pl?igsh=YWZpY2JjOTFueXc5",
  phoneNumber: "662 412 456",
  email: "Nail.moment.wroclaw@gmail.com",
};

const speakers = {
  belmas: {
    name: "Юлія Бельмас",
    image: "/speakers/speaker.png",
    description: "Факапи викладача та власника салону в Польщі",
  },
  ragoza: {
    name: "Ангеліна Рагоза",
    image: "/speakers/speaker.png",
    description: "Як продавати через Лайв",
  },
  zozylia: {
    name: "Олена Зозуля",
    image: "/speakers/speaker.png",
    description: "Верхні форми",
  },
  mart: {
    name: "Надя Март",
    image: "/speakers/speaker.png",
    description: "Як продавати через Лайв",
  },
  browko: {
    name: "Діана Бровко",
    image: "/speakers/speaker.png",
    description: "Я знімаю відео. А що далі?",
  },
  sulima: {
    name: "Юлія Суліма",
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
  const [frequentlyQuestions, setFrequentlyQuestions] = useState([
    {
      title: "Як купити квиток?",
      text: "Ви можете купити квиток через сайт - натиснути кнопку «Придбати», вибрати тариф та зробити оплату. Також, можна придбати квиток через дірект.",
      isActive: false,
    },
    {
      title: "Як отримати фактуру?",
      text: "Щоб отримати фактуру напишіть нам в дірект ✨",
      isActive: false,
    },
    {
      title: "Яке місце проведення фестивалю?",
      text: `map`,
      isActive: false,
    },
    {
      title:
        "Як я можу прийняти участь в конкурсі «Найліпший Френч», «Корейський дизайн»?",
      text: `Купи квиток на фестиваль Nail Moment & Nail of The Day. 
              На сайті заповни анкету під конкурсом в якому хочеш прийняти участь. 
              В день фестивалю на першій перерві підійди до столів з конкурсу та назви своє імʼя та прізвище. 
              Можете взяти з собою свій пензлик для комфортної роботи ✨
            `,
      isActive: false,
    },
    {
      title:
        "Чи потрібно реєструватися щоб взяти участь у конкурсі «Найліпший Френч» та «Корейский дизайн»?",
      text: "Так, що прийняти участь у конкурсі «Найліпший Френч» та «Корейский дизайн» треба зареєструватися на сайті.",
      isActive: false,
    },
    {
      title:
        "Я купив(ла) квиток, але змінилися плани і я хочу повернути кошти. Як я можу це зробити?",
      text: "Повернення квитка можливе протягом 14 днів з моменту оплати квитка. Також, ми лишаємо за вами право на перепродаж квитка",
      isActive: false,
    },
  ]);

  const onAccordionClick = (index: number) => {
    setFrequentlyQuestions((prevQuestions) =>
      prevQuestions.map((question, i) =>
        i === index ? { ...question, isActive: !question.isActive } : question
      )
    );
  };

  return (
    <>
      <Hero
        date="15 жовтня"
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
        date="15 жовтня"
        location="Jozefa Szanajcy 17/19, 03-481 Warszawa"
        mapUrl="https://maps.app.goo.gl/q2zzTENBh3TEw8Jx9"
      />
      <Footer
        companyInfo={{
          name: "Nail Moment Anhelina Rahoza",
          address: "Burakowska 16b/162 01-066 Warszawa",
          nip: "5223118965",
          regon: "529210914",
        }}
        contactInfo={{
          email: "Nail.moment.wroclaw@gmail.com",
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
