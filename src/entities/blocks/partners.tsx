import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SectionTitle } from "@/shared/ui/section-title";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { LoaderIcon } from "lucide-react";

type Partner = {
  image: string;
  alt: string;
  width: number;
  height: number;
  url: string;
};

const formSchema = z.object({
  full_name: z
    .string()
    .min(2, "Ім'я та прізвище повинні містити мінімум 2 символи"),
  phone: z.string().min(9, "Введіть коректний номер телефону"),
  email: z.string().email("Введіть коректну email адресу"),
  brand_name: z.string().min(1, "Введіть назву бренду"),
});

type FormValues = z.infer<typeof formSchema>;

export const Partners: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      phone: "",
      email: "",
      brand_name: "",
    },
  });

  const partners: Partner[] = [
    {
      image: "/assets/partners-1.png",
      alt: "Partner 1",
      width: 74,
      height: 100,
      url: "https://partner1-website.com",
    },
    {
      image: "/assets/partners-2.png",
      alt: "Partner 2",
      width: 80,
      height: 100,
      url: "https://partner2-website.com",
    },
    {
      image: "/assets/partners-3.png",
      alt: "Partner 3",
      width: 80,
      height: 100,
      url: "https://partner3-website.com",
    },
    {
      image: "/assets/partners-4.png",
      alt: "Partner 4",
      width: 80,
      height: 100,
      url: "https://partner4-website.com",
    },
    {
      image: "/assets/partners-5.png",
      alt: "Partner 5",
      width: 80,
      height: 100,
      url: "https://partner5-website.com",
    },
  ];

  const onSubmit = async (data: FormValues) => {
    try {
      // Replace with your actual API endpoint
      setIsLoading(true);
      const response = await fetch(
        "https://dashboard.nailmoment.pl/api/partner-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setIsLoading(false);
  };

  return (
    <section className="px-4 py-14">
      <SectionTitle className="w-full px-4 md:mb-6">Партнери</SectionTitle>
      <div className="relative w-full h-full flex flex-col gap-4 justify-start md:max-w-[1120px] md:m-auto">
        <div className="grid grid-cols-2 gap-2.5 md:justify-center md:gap-8">
          {partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[100px] flex items-center justify-center rounded-[20px] bg-primary md:max-w-[160px] md:h-[160px] transition-opacity hover:opacity-80"
            >
              <Image
                src={partner.image}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="w-auto"
              />
            </Link>
          ))}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="text-primary-foreground mx-auto relative h-[54px] w-full max-w-[300px] mt-3 flex items-center justify-center border-[1px] border-[#4C4C4C] rounded-md hover:bg-primary-foreground hover:text-primary transition-all md:mt-6">
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
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] flex flex-col px-0 overflow-y-hidden max-h-[90vh]">
            {!isSubmitted ? (
              <>
                <DialogHeader>
                  <DialogTitle className="text-center text-xl font-bold">
                    СТАТИ ПАРТНЕРОМ
                  </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 py-4 overflow-y-auto px-6"
                  >
                    <FormField
                      control={form.control}
                      name="full_name"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Ім&apos;я та прізвище</Label>
                          <FormControl>
                            <Input placeholder="Ім'я та прізвище" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Номер телефону</Label>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Номер телефону"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Імейл</Label>
                          <FormControl>
                            <Input placeholder="Імейл" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="brand_name"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Назва бренду</Label>
                          <FormControl>
                            <Input placeholder="Назва бренду" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      disabled={isLoading}
                      type="submit"
                      className="w-full"
                    >
                      {isLoading && (
                        <LoaderIcon
                          size={12}
                          className="animate-spin h-5 w-5 mr-2"
                        />
                      )}{" "}
                      НАДІСЛАТИ
                    </Button>
                  </form>
                </Form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <svg
                  width="100"
                  height="75"
                  viewBox="0 0 100 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.1114 2.41785C74.0641 0.465234 77.2299 0.465236 79.1825 2.41786L97.9938 21.2291C99.9464 23.1817 99.9464 26.3476 97.9938 28.3002L53.3002 72.9938C51.3476 74.9464 48.1817 74.9464 46.2291 72.9938L1.53556 28.3002C-0.417063 26.3476 -0.417068 23.1817 1.53556 21.2291L20.3468 2.41786C22.2994 0.465236 25.4653 0.465239 27.4179 2.41786L46.2291 21.2291C48.1818 23.1817 51.3476 23.1817 53.3002 21.2291L72.1114 2.41785Z"
                    fill="#FE018A"
                  />
                </svg>
                <h2 className="mt-4 text-xl font-bold">
                  ДЯКУЄМО ЗА ВАШУ ЗАЦІКАВЛЕНІСТЬ У ПАРТНЕРСТВІ. МИ
                  ЗВ&apos;ЯЖЕМОСЯ З ВАМИ НАЙБЛИЖЧИМ ЧАСОМ!
                </h2>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
