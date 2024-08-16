import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";

type LinkWithIconProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const Link: React.FC<LinkWithIconProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`underline text-sky-400 inline-flex items-center gap-1 ${className}`}
      href={href}
    >
      {children}
      <SquareArrowOutUpRight size={12} />
    </a>
  );
};
