import {cn} from "@/shared/utils/cn";

export const SectionTitle = ({ children, className }: { children: string, className?: string }) => {
  return (
    <h2
      className={cn(
        "text-xl text-primary-foreground w-min text-center uppercase font-travels font-bold block mx-auto",
        className
      )}
    >
      {children}
    </h2>
  );
};
