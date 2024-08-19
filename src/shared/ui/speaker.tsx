import Image from "next/image";
export const Speaker = ({
  name,
  image,
  description,
}: {
  name: string;
  image: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-1 text-center justify-start items-center lg:w-full lg:gap-4">
      <div className="rounded-full relative overflow-hidden w-[140px] h-[140px] lg:w-[200px] lg:h-[200px]">
        <Image
          src={image}
          width={140}
          height={140}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="w-min text-accent-green pt-2 uppercase text-base font-travels font-bold lg:mt-5 lg:w-max lg:text-xl">
        {name}
      </h3>
      <p className="text-primary-foreground-muted w-[120px] leading-5 text-base font-asteriks lg:w-full lg:text-xl">
        {description}
      </p>
    </div>
  );
};
