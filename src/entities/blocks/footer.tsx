import React from "react";
import { SectionTitle } from "@/shared/ui/section-title";

type FooterProps = {
  companyInfo: {
    name: string;
    address: string;
    nip: string;
    regon: string;
  };
  contactInfo: {
    email: string;
    phone: string;
  };
  socialLinks: {
    instagram: string;
    telegram: string;
  };
};

export const Footer: React.FC<FooterProps> = ({
  companyInfo,
  contactInfo,
  socialLinks,
}) => {
  return (
    <footer className="px-4 pt-14 pb-7 max-w-[700px] mx-auto">
      <div className="relative w-full h-full flex flex-col gap-4 justify-start md:max-w-[1120px] md:m-auto">
        <div className="flex flex-col gap-4 justify-start mb-6 md:flex-row">
          <div className="w-full">
            <SectionTitle className="w-full px-4 mb-2 md:text-start md:p-0">
              дані компанії
            </SectionTitle>
            <p className="font-normal text-base text-primary-foreground opacity-80 text-center mb-7 md:text-start">
              {companyInfo.name} <br />
              {companyInfo.address} <br />
              <br />
              NIP: {companyInfo.nip} <br />
              REGON: {companyInfo.regon} <br />
            </p>
          </div>
          <div className="w-full">
            <SectionTitle className="w-full px-4 mb-2 md:text-start md:p-0">
              Контактна точка
            </SectionTitle>
            <p className="font-normal text-base text-primary-foreground opacity-80 text-center mb-7 md:text-start">
              Nail Moment <br />
              {contactInfo.phone} <br />
              <br />
              <a href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>{" "}
              <br />
            </p>
          </div>
          <div className="w-full flex flex-col">
            <SectionTitle className="w-full px-4 mb-2 md:text-start md:p-0">
              Відділ турботи
            </SectionTitle>
            <p className="font-normal text-base text-primary-foreground opacity-80 text-center mb-2 md:text-start">
              Якщо виникли питання, пишіть на:
            </p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="font-bold text-base text-primary-foreground text-center mb-7 md:text-start"
            >
              {contactInfo.phone}
            </a>

            <div className="hidden justify-start gap-4 mt-auto md:flex">
              <a
                href={socialLinks.instagram}
                className="opacity-50 transition-all hover:opacity-100"
              >
                {/* Instagram SVG icon */}
              </a>
              <a
                href={socialLinks.telegram}
                className="opacity-50 transition-all hover:opacity-100"
              >
                {/* Telegram SVG icon */}
              </a>
            </div>
          </div>
          <div className="w-full border-y-[1px] border-y-[#4C4C4C] py-10 md:hidden">
            <p className="text-lg text-center font-normal text-primary-foreground mb-7">
              Договір оферти
            </p>
            <div className="flex justify-center gap-4">
              {/* Mobile social icons */}
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-between md:border-t-[1px] md:border-t-[#4C4C4C] pt-5">
          <p className="text-center text-primary-foreground text-lg">
            ©{new Date().getFullYear()} Всі права захищено
          </p>
          <p className="hidden text-lg text-center font-normal text-primary-foreground md:block">
            Договір оферти
          </p>
        </div>
      </div>
    </footer>
  );
};
