"use client";
import { useState } from 'react';
import { Ball } from "@/shared/ui/ball";
import { Button } from "@/shared/ui/button";
import { List } from "@/shared/ui/list";
import { SectionTitle } from "@/shared/ui/section-title";
import { Speaker } from "@/shared/ui/speaker";
import { TicketCard } from "@/shared/ui/ticket-card";
import { TicketButton } from "@/shared/ui/ticket-button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/shared/utils/cn";

import 'swiper/css';

const links = {
  partnerLink: '#TODO:ADD BE A PARTNER LINK',
  telegramLink: '#TODO:ADD BE A PARTNER LINK',
}

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
    image: "/speakers/speaker.png",
    description: "Запуски онлайн курсів",
  },
  zemlyanika: {
    name: "Ніка Землянікіна",
    image: "/speakers/speaker.png",
    description: "Алергії та хімія матеріалів",
  },
};

const tickets = [
  {
    plan: 'Fan',
    price: '359',
    options: ['Місце в залі в категорії фан', 'Виступ спікерів', 'Нетворкінг з учасниками', 'Закритий телеграм канал з учасниками', 'Сертифікат про участь'],
    paymentUrl: '/'
  },
  {
    plan: 'VIP',
    price: '459',
    options: ['Місце в залі в категорії фан', 'Виступ спікерів', 'Нетворкінг з учасниками', 'Закритий телеграм канал з учасниками', 'Сертифікат про участь', 'Нетворкінг зі спікерами'],
    paymentUrl: '/'
  },
  {
    plan: 'PREMIUM',
    price: '839',
    options: ['Місце в залі в категорії фан', 'Виступ спікерів', 'Нетворкінг з учасниками', 'Закритий телеграм канал з учасниками', 'Сертифікат про участь', 'Презентації від спікерів', 'Кава брейк зі спікерами у Преміум - румі', 'Нетворкінг зі спікерами', 'Подарунок від спонсорів', 'Окрема стійка реєстрації'],
    paymentUrl: '/'
  }
];

const feedbacks = [
  {
    name: 'Юлія Бельмас',
    position: 'Майстер манікюру',
    image: '/assets/previous-festivals-1.png',
    text: 'Завдяки цьому курсу мої манікюри стали набагато якіснішими! Тепер клієнти повертаються тільки для нових дизайнів, а не для виправлення старих. Завдяки цьому курсу мої манікюри стали набагато якіснішими! Тепер клієнти повертаються тільки для нових дизайнів, а не для виправлення старих'
  },
  {
    name: 'Юлія Бельмас',
    position: 'Майстер манікюру',
    image: '/assets/previous-festivals-1.png',
    text: 'Завдяки цьому курсу мої манікюри стали набагато якіснішими! Тепер клієнти повертаються тільки для нових дизайнів, а не для виправлення старих. Завдяки цьому курсу мої манікюри стали набагато якіснішими! Тепер клієнти повертаються тільки для нових дизайнів, а не для виправлення старих'
  },
  {
    name: 'Юлія Бельмас',
    position: 'Майстер манікюру',
    image: '/assets/previous-festivals-1.png',
    text: 'Завдяки цьому курсу мої манікюри стали набагато якіснішими! Тепер клієнти повертаються тільки для нових дизайнів, а не для виправлення старих. Завдяки цьому курсу мої манікюри стали набагато якіснішими! Тепер клієнти повертаються тільки для нових дизайнів, а не для виправлення старих'
  }
];

export default function Home() {
  const [frequentlyQuestions, setFrequentlyQuestions] = useState([
    {
      title: 'Як купити квиток?',
      text: 'Ви можете купити квиток через сайт - натиснути кнопку «Придбати», вибрати тариф та зробити оплату. Також, можна придбати квиток через дірект.',
      isActive: false
    },
    {
      title: 'Як отримати фактуру?',
      text: 'TODO: Fill text',
      isActive: false
    },
    {
      title: 'Яке місце проведення фестивалю?',
      text: 'TODO: Fill text',
      isActive: false
    },
    {
      title: 'Як я можу прийняти участь в конкурсі «Найліпший Френч», «Корейський дизайн»?',
      text: 'TODO: Fill text',
      isActive: false
    },
    {
      title: 'Чи потрібно реєструватися щоб взяти участь у конкурсі «Найліпший Френч» та «Корейский дизайн»?',
      text: 'TODO: Fill text',
      isActive: false
    },
    {
      title: 'Я купив(ла) квиток, але змінилися плани і я хочу повернути кошти. Як я можу це зробити?',
      text: 'TODO: Fill text',
      isActive: false
    }
  ])

  const onAccordionClick = (index: number) => {
    setFrequentlyQuestions(prevQuestions =>
      prevQuestions.map((question, i) =>
        i === index ? { ...question, isActive: !question.isActive } : question
      )
    )
  }

  return (
    <>
      <section className="px-4 pt-6 lines-1 relative bg-contain bg-center bg-no-repeat h-[620px]">
        <Image
          src="/assets/hero.png"
          aria-hidden="true"
          alt="Background"
          width={300}
          height={452}
          className="absolute bottom-0 z-0 object-contain object-center left-1/2 -translate-x-1/2 border-b border-b-gray-800"
        />
        <div className="flex font-asteriks flex-col  gap-2 relative z-10">
          <span className="text-primary-foreground text-sm">
            15 жовтня / Баскетбольна арена
          </span>
          <a
            href="TODO:ADD_LINK"
            className="text-primary-foreground-muted text-xs"
          >
            Jozefa Szanajcy 17/19, 03-481 Warszawa
          </a>
        </div>
        <h1 className="w-[282px] flex flex-col gap-2 text-primary-foreground mt-6 text-start relative z-10">
          <span className="text-3xl w-min leading-10 font-travels font-bold">
            NAIL MOMENT
          </span>
          <span className="text-center inline-flex text-accent-pink gap-3 items-center">
            <span className="text-3xl font-travels">&</span>
            <span className="text-base font-asteriks text-nowrap">
              Перший фестиваль-коллаборація
            </span>
          </span>
          <span className="text-3xl w-64 leading-10 font-bold font-travels">
            NAILS
            <br /> OF THE DAY
          </span>
        </h1>
        <Button className="mx-auto absolute bottom-12 -rotate-[13deg] left-1/2 -translate-x-1/2">
          Придбати
        </Button>
      </section>
      <section className="px-4 py-14">
        <List />
        <h2 className="bg-accent-pink font-travels px-6 py-6 flex flex-col items-center justify-center rounded-xl text-2xl leading-7 mt-14 uppercase font-bold text-primary-foreground text-center">
          Стань чемпіоном <br /> у своїй справі
        </h2>
        <div className="bg-primary px-7 py-14 rounded-xl">
          <h3 className="text-primary-foreground uppercase text-xl font-travels font-bold">
            Готові вийти за рамки звичайного?
          </h3>
          <p className="mt-4 font-asteriks mb-7 text-base leading-7 text-start">
            Наш фестиваль об’єднує найкращих майстрів nail індустрії, щоб
            надихати, навчати та створювати тренди. Відкрий нові горизонти своєї
            кар’єри у незвичному місці - баскетбольній арені, де прагнення до
            перемоги стає реальністю.
          </p>
          <Ball className="flex flex-row-reverse" />
        </div>
      </section>
      <section className="px-4 py-14 flex flex-col items-stretch gap-4 lines-2 justify-start">
        <SectionTitle>Спікери Фестивалю</SectionTitle>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 mt-4 justify-center items-stretch">
          <Speaker
            name={speakers.belmas.name}
            image={speakers.belmas.image}
            description={speakers.belmas.description}
          />
          <Speaker
            name={speakers.ragoza.name}
            image={speakers.ragoza.image}
            description={speakers.ragoza.description}
          />
          <Speaker
            name={speakers.zozylia.name}
            image={speakers.zozylia.image}
            description={speakers.zozylia.description}
          />
          <Speaker
            name={speakers.mart.name}
            image={speakers.mart.image}
            description={speakers.mart.description}
          />
          <Speaker
            name={speakers.browko.name}
            image={speakers.browko.image}
            description={speakers.browko.description}
          />
          <Speaker
            name={speakers.sulima.name}
            image={speakers.sulima.image}
            description={speakers.sulima.description}
          />
          <Speaker
            name={speakers.zemlyanika.name}
            image={speakers.zemlyanika.image}
            description={speakers.zemlyanika.description}
          />
        </div>
      </section>

      <section className="px-4 py-14 flex flex-col items-stretch gap-4 justify-start">
        <SectionTitle>Программа</SectionTitle>
        <CardSimple
          time="10:00 - 10:15"
          description="Відкриття Реєстрація. Нетворкінг. Nail - Маркет"
        />
        <CardSimple
          time="10:15 - 10:30"
          description="Програма початку фестивалю"
        />
        <CardSpeaker
          time="10:30 - 10:45"
          name={speakers.belmas.name}
          description={speakers.belmas.description}
        />
        <CardSpeaker
          time="10:45 - 11:00"
          name={speakers.ragoza.name}
          description={speakers.ragoza.description}
        />
        <CardSpeaker
          time="11:00 - 11:15"
          name={speakers.zozylia.name}
          description={speakers.zozylia.description}
        />
        <CardSimple
          time="10:00 - 10:15"
          description="Перерва. Конкурси та інтерактиви в залі"
        />
        <CardSpeaker
          time="10:15 - 10:30"
          name={speakers.mart.name}
          description={speakers.mart.description}
        />
        <CardSpeaker
          time="10:30 - 10:45"
          name={speakers.browko.name}
          description={speakers.browko.description}
        />
        <CardSpeaker
          time="10:45 - 11:00"
          name={speakers.sulima.name}
          description={speakers.sulima.description}
          accent
        />
        <CardSpeaker
          time="11:00 - 11:15"
          name={speakers.zemlyanika.name}
          description={speakers.zemlyanika.description}
        />
        <CardSimple
          time="11:15 - 11:30"
          description="Перерва. Конкурси та інтерактиви в залі"
        />
      </section>
      <section className="px-4 py-14 flex flex-col gap-4 justify-start">
        <SectionTitle>Программа</SectionTitle>
        <div className="flex flex-col gap-8 justify-start rounded-xl bg-accent-pink px-5 py-9 ">
          <h3 className="text-primary-foreground w-full uppercase text-xl font-travels font-bold inline-flex justify-between items-center">
            <span className="w-min"> Найрівніший френч </span>
            <span className="text-5xl font-bold">01</span>
          </h3>
          <p className=" font-asteriks text-base leading-7 text-start">
            На сайті є попередня реєстрація, бо кількість місць обмежена.
            Реєструйся, якщо відчуваєш, що робиш крутий френч, бо прямо на
            заході ми визначимо кращих майстрів, які намалюють найрівніший
            френч. Переможці отримають сертифікати та цінні призи від партнерів.
          </p>
          <Button color="white" className="self-center">
            РЕЄСТРАЦІЯ
          </Button>
        </div>
        <div className="flex flex-col gap-8 text-accent-green-foreground justify-start rounded-xl bg-accent-green px-5 py-9 ">
          <h3 className="text-accent-green-foreground w-full uppercase text-xl font-travels font-bold inline-flex justify-between items-center">
            <span className="w-min">Корейські дизайни</span>
            <span className="text-5xl font-bold">02</span>
          </h3>
          <p className=" font-asteriks text-base leading-7 text-start">
            На сайті є попередня реєстрація, бо кількість місць обмежена.
            Реєструйся, якщо відчуваєш, що робиш крутий френч, бо прямо на
            заході ми визначимо кращих майстрів, які намалюють найрівніший
            френч. Переможці отримають сертифікати та цінні призи від партнерів.
          </p>
          <Button color="black" className="self-center">
            РЕЄСТРАЦІЯ
          </Button>
        </div>
      </section>

      <section className="px-4 py-14 flex flex-col gap-4 justify-start bg-primary">
        <SectionTitle>Квитки</SectionTitle>
        <div className="flex gap-2.5 flex-col flex-wrap">
          {
            tickets.map((ticket, index) => (
              <TicketCard
                key={index}
                plan={ticket.plan}
                price={ticket.price}
                options={ticket.options}
                paymentUrl={ticket.paymentUrl}
              />
            ))
          }
        </div>
      </section>

      <section className="px-4 py-14 flex flex-col gap-4 justify-start">
        <SectionTitle className="w-full px-4">Фото з минулих фестивалів</SectionTitle>
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          slidesPerView={1.4}
          className="w-full"
        >
          <SwiperSlide>
            <Image
              src="/assets/previous-festivals-1.png"
              aria-hidden="true"
              alt="Фото з минулих фестивалів"
              width={363}
              height={284}
              className="rounded-xl w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/previous-festivals-2.png"
              aria-hidden="true"
              alt="Фото з минулих фестивалів"
              width={363}
              height={284}
              className="rounded-xl w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/previous-festivals-3.png"
              aria-hidden="true"
              alt="Фото з минулих фестивалів"
              width={363}
              height={284}
              className="rounded-xl w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/previous-festivals-4.png"
              aria-hidden="true"
              alt="Фото з минулих фестивалів"
              width={363}
              height={284}
              className="rounded-xl w-auto h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/previous-festivals-5.png"
              aria-hidden="true"
              alt="Фото з минулих фестивалів"
              width={363}
              height={284}
              className="rounded-xl w-auto h-auto"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="px-4 py-14 flex flex-col gap-4 justify-start">
        <SectionTitle>Відгуки</SectionTitle>
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          slidesPerView={1.25}
          className="w-full"
        >
          {
            feedbacks.map((feedback, index) => (
              <SwiperSlide key={index}>
                <div className="bg-primary p-5 rounded-xl">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={feedback.image}
                      aria-hidden="true"
                      alt={feedback.name}
                      width={50}
                      height={50}
                      className="rounded-full h-12 w-12 object-cover"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-primary-foreground text-sm font-bold uppercase">{feedback.name}</h3>
                      <h4 className="text-primary-foreground text-sm font-normal opacity-70">{feedback.position}</h4>
                    </div>
                    <svg className="hidden" width="42" height="33" viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M42 10.5339C42 24.7966 34.4494 33 22.746 33L22.746 22.1864L23.8786 22.1864C31.2404 22.1864 34.7325 20.1356 35.6764 15.9407C34.9213 16.1271 34.0718 16.2203 33.2224 16.2203C27.937 16.2203 24.3505 12.7712 24.3505 8.11017C24.3505 3.44915 27.9371 -1.22942e-06 32.7506 -8.08611e-07C38.5079 -3.05292e-07 42 3.44915 42 10.5339ZM19.2539 10.5339C19.2539 24.7966 11.7034 33 0 33L9.45352e-07 22.1864L1.13257 22.1864C8.49436 22.1864 11.9865 20.1356 12.9303 15.9407C12.1753 16.1271 11.3258 16.2203 10.4764 16.2203C5.19098 16.2203 1.60449 12.7712 1.60449 8.11016C1.60449 3.44915 5.19097 -3.21795e-06 10.0045 -2.79714e-06C15.7618 -2.29382e-06 19.2539 3.44915 19.2539 10.5339Z" fill="#FE018A"/>
                    </svg>
                    <svg className="hidden" width="210" height="165" viewBox="0 0 210 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 112.331C0 41.017 37.753 0 96.2698 0V54.0678H90.607C53.798 54.0678 36.3373 64.322 31.6182 85.2966C35.3935 84.3644 39.6408 83.8983 43.888 83.8983C70.3149 83.8983 88.2474 101.144 88.2474 124.449C88.2474 147.754 70.3146 165 46.2472 165C17.4607 165 0 147.754 0 112.331ZM113.731 112.331C113.731 41.017 151.483 0 210 0V54.0678H204.337C167.528 54.0678 150.067 64.322 145.348 85.2966C149.124 84.3644 153.371 83.8983 157.618 83.8983C184.045 83.8983 201.978 101.144 201.978 124.449C201.978 147.754 184.045 165 159.978 165C131.191 165 113.731 147.754 113.731 112.331Z" fill="black"/>
                    </svg>
                  </div>
                  <p className="mt-2.5 text-primary-foreground text-sm font-light opacity-80">{feedback.text}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>

      <section className="px-4 py-14 flex flex-col gap-4 justify-start">
        <SectionTitle>Партнери</SectionTitle>
        <div className="flex gap-2.5">
          <div className="w-full h-[100px] flex items-center justify-center rounded-[20px] bg-primary">
            <Image
              src="/assets/partners-1.png"
              aria-hidden="true"
              alt="logo"
              width={100}
              height={100}
              className="w-[74px]"
            />
          </div>
          <div className="w-full h-[100px] flex items-center justify-center rounded-[20px] bg-primary">
            <Image
              src="/assets/partners-2.png"
              aria-hidden="true"
              alt="logo"
              width={100}
              height={100}
              className="w-[80px]"
            />
          </div>
          <div className="w-full h-[100px] flex items-center justify-center rounded-[20px] bg-primary">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="16.6333" y1="2.18557e-08" x2="16.6333" y2="33" stroke="white"/>
              <line x1="33" y1="17" x2="-4.37114e-08" y2="17" stroke="white"/>
            </svg>
          </div>
        </div>
        <a href={links.partnerLink} className="mx-auto relative h-[54px] w-full max-w-[300px] mt-3 flex items-center justify-center border-[1px] border-[#4C4C4C] rounded-md hover:opacity-80 transition-all">
          <svg className="absolute left-[-1px] top-2/4 -translate-y-1/2" width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20.5137C5.52285 20.5137 10 16.0365 10 10.5137C10 4.99082 5.52285 0.513672 0 0.513672V20.5137Z" fill="black"/>
            <path d="M0 20.5137C5.52285 20.5137 10 16.0365 10 10.5137C10 4.99082 5.52285 0.513672 0 0.513672" stroke="#4C4C4C"/>
          </svg>
          <svg className="absolute right-[-1px] top-2/4 -translate-y-1/2" width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 0.513672C5.47715 0.513671 1 4.99082 1 10.5137C1 16.0365 5.47715 20.5137 11 20.5137L11 0.513672Z" fill="black"/>
            <path d="M11 0.513672C5.47715 0.513671 1 4.99082 1 10.5137C1 16.0365 5.47715 20.5137 11 20.5137" stroke="#4C4C4C"/>
          </svg>
          <span className="text-sm font-bold text-primary-foreground">СТАТИ ПАРТНЕРОМ</span>
        </a>
      </section>

      <section className="px-4 py-14 flex flex-col gap-4 justify-start">
        <SectionTitle className="w-full px-4">Часто задаваємі питання</SectionTitle>

        <div>
          {
            frequentlyQuestions.map((question, index) => (
              <div
                className={cn(
                  "border-t-[1px] border-t-[#4C4C4C] py-5",
                  frequentlyQuestions.length === index + 1 ? 'border-y-[1px] border-y-[#4C4C4C]' : 'border-t-[1px] border-t-[#4C4C4C] py-5'
                )}
                key={index}
              >
                <div className="flex items-center gap-2.5">
                  <div className="min-w-[30px] h-[30px] items-center text-primary-foreground text-lg font-semibold">0{index+1}.</div>
                  <h3 className="w-full text-primary-foreground text-lg font-semibold">{question.title}</h3>
                  <div className="min-w-[30px] h-[30px] bg-accent-pink rounded-full relative" onClick={() => onAccordionClick(index)}>
                    <div
                      className={cn(
                        "w-[1px] h-[11px] bg-primary-foreground absolute top-2/4 left-2/4 -translate-y-1/2 transition-all duration-500",
                        question.isActive ? 'rotate-90' : ''
                      )}
                    ></div>
                    <div
                      className="w-[11px] h-[1px] bg-primary-foreground absolute top-2/4 left-2/4 -translate-x-1/2"></div>
                  </div>
                </div>
                <p
                  className={cn(
                    "max-h-[0] text-lg text-primary-foreground opacity-80 font-light mt-1 overflow-hidden transition-all duration-500",
                    question.isActive ? 'max-h-[200px]' : ''
                  )}
                >{question.text}</p>
              </div>
            ))
          }
        </div>
        <p className="w-[291px] mx-auto text-primary-foreground text-lg font-normal text-center">
          <span className="opacity-70">Якщо залишились питання, напишіть нам в </span>
          <a className="underline" href={links.telegramLink}>телеграм</a>
        </p>
      </section>

      <section className="px-4 py-14 flex flex-col gap-4 justify-start">
        <div className="py-7 px-5 bg-accent-green text-accent-green-foreground rounded-xl">
          <h2 className="w-[296px] mx-auto uppercase text-primary font-bold text-xl text-center mb-2">15 жовтня / Баскетбольна арена</h2>
          <p className="text-primary font-normal text-lg text-center mb-4">Jozefa Szanajcy 17/19, 03-481 Warszawa</p>
          <TicketButton color="black">ЗАБРОНЮВАТИ</TicketButton>
        </div>
      </section>
    </>
  );
}

const CardSimple = ({
  time,
  description,
}: {
  time: string;
  description: string;
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

const CardSpeaker = ({
  time,
  name,
  description,
  accent,
}: {
  time: string;
  name: string;
  description: string;
  accent?: boolean;
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
      <div className="w-[55px] h-[55px] min-w-[55px] min-h-[55px] bg-accent-pink rounded-full"></div>
    </div>
  );
};
