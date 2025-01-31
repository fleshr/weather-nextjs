import { cn } from "@/4_shared/lib";
import { FC, ReactNode } from "react";

type SectionProps = {
  className?: string;
  children?: ReactNode;
  position?: "top" | "bottom";
};

export const Section: FC<SectionProps> = ({
  className,
  children,
  position = "top",
}) => {
  return (
    <section
      className={cn(
        "bg-white shadow-black/10 md:rounded-2xl md:inset-ring-1 md:inset-ring-black/10 dark:bg-blue-800 dark:shadow-white/10 max-md:dark:ring-white/10 md:dark:inset-ring-white/10",
        position === "top"
          ? "max-md:shadow-t-px max-md:rounded-t-2xl"
          : "max-md:shadow-b-px max-md:rounded-b-2xl",
        className,
      )}
    >
      {children}
    </section>
  );
};
