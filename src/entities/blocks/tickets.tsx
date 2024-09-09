import React from "react";
import { SectionTitle } from "@/shared/ui/section-title";
import { TicketCard } from "@/shared/ui/ticket-card";

type TicketOption = {
  value: string;
  type: "default" | "premium";
};

type Ticket = {
  plan: string;
  price: string;
  oldPrice: string;
  options: TicketOption[];
  paymentUrl: string;
};

const tickets: Ticket[] = [
  {
    plan: "КВИТОК FAN",
    price: "389",
    oldPrice: "429",
    options: [
      { value: "Місце в залі в категорії ФАН", type: "default" },
      { value: "Виступ спікерів", type: "default" },
      { value: "Нетворкінг з учасниками", type: "default" },
      { value: "Закритий телеграм канал з учасниками", type: "default" },
    ],
    paymentUrl: "https://buy.stripe.com/5kA5mk0z51wlaOY5l2",
  },
  {
    plan: "КВИТОК VIP",
    price: "499",
    oldPrice: "529",
    options: [
      { value: "Місце в залі в категорії ВІП", type: "default" },
      { value: "Виступ спікерів", type: "default" },
      { value: "Нетворкінг з учасниками", type: "default" },
      { value: "Закритий телеграм канал з учасниками", type: "default" },
      { value: "Презентації від спікерів", type: "premium" },
    ],
    paymentUrl: "https://buy.stripe.com/fZe1640z55MB7CM28R",
  },
  {
    plan: "КВИТОК PREMIUM",
    price: "999",
    oldPrice: "999",
    options: [
      { value: "Місце в залі в категорії ПРЕМІУМ", type: "default" },
      { value: "Виступ спікерів", type: "default" },
      { value: "Нетворкінг з учасниками", type: "default" },
      { value: "Закритий телеграм канал з учасниками", type: "default" },
      { value: "Презентації від спікерів", type: "premium" },
      { value: "Кава брейк зі спікерами у Преміум - румі", type: "premium" },
      { value: "Нетворкінг зі спікерами", type: "premium" },
      { value: "Окрема стійка реєстрації", type: "premium" },
    ],
    paymentUrl: "https://buy.stripe.com/9AQcOM81x0sh1eo3cW",
  },
];

export const Tickets: React.FC = () => {
  return (
    <section
      id="tickets"
      className="px-4 py-8 flex flex-col gap-4 justify-start bg-primary"
    >
      <SectionTitle className="mb-5 w-max text-3xl md:mb-14">
        ТАРИФИ УЧАСТІ
      </SectionTitle>
      <div className="relative w-full h-full gap-4 flex flex-col justify-start md:max-w-[1120px] md:m-auto">
        <div className="flex gap-2.5 flex-col md:grid md:grid-cols-[400px] md:gap-6 md:items-start md:justify-center lg:flex-row">
          {tickets.map((ticket, index) => (
            <TicketCard
              key={index}
              plan={ticket.plan}
              price={ticket.price}
              options={ticket.options}
              paymentUrl={ticket.paymentUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
