"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Button as EventButton } from "./button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { LoaderIcon } from "lucide-react";

const formSchema = z.object({
  first_name: z.string().min(2, "Ім'я повинно містити мінімум 2 символи"),
  last_name: z.string().min(2, "Прізвище повинно містити мінімум 2 символи"),
  phone: z.string().min(9, "Введіть коректний номер телефону"),
  email: z.string().email("Введіть коректну email адресу"),
  instagram: z.string().min(1, "Введіть ваш Instagram"),
  category: z.string().min(1, "Оберіть вид змагання"),
});

type FormValues = z.infer<typeof formSchema>;

export function RegisterEvent({ color }: { color: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: undefined,
      email: "",
      instagram: "",
      category: "1",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      // Replace with your actual API endpoint
      const response = await fetch(
        "https://dashboard.nailmoment.pl/api/concurs",
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
        // Handle error
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <EventButton color={color as any} className="mx-auto">
          Реєстрація
        </EventButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col px-0 overflow-y-hidden max-h-[90vh]">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-bold">
                РЕЄСТРАЦІЯ НА ЗМАГАННЯ
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 py-4 overflow-y-auto px-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Ім&apos;я</Label>
                        <FormControl>
                          <Input placeholder="Ім'я" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Прізвище</Label>
                        <FormControl>
                          <Input placeholder="Прізвище" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Телефон</Label>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Введіть телефон"
                          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
                      <Label>Email</Label>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Нік Instagram</Label>
                      <FormControl>
                        <Input placeholder="Нік Instagram" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Вид змагання</Label>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Оберіть вид змагання" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">Найрівніший френч</SelectItem>
                          <SelectItem value="2">Корейські дизайни</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  {isLoading && (
                    <LoaderIcon
                      size={12}
                      className="animate-spin h-5 w-5 mr-2"
                    />
                  )}{" "}
                  РЕЄСТРАЦІЯ
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
              ДЯКУЄМО ЗА РЕЄСТРАЦІЮ НА УЧАСТЬ У КОНКУРСІ, ЗОВСІМ СКОРО ТИ
              ОТРИМАЄШ ІНФОРМАЦІЮ ДЛЯ УЧАСТІ У КОНКУРСІ
            </h2>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
