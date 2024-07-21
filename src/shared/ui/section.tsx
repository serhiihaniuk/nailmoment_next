import { cn } from "@/shared/utils/cn";
import { motion, MotionStyle } from "framer-motion";

type SectionProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: MotionStyle;
};
export const Section: React.FC<SectionProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <motion.div
      style={style}
      className={cn("min-h-[100svh] relative", className)}
    >
      {children}
    </motion.div>
  );
};
