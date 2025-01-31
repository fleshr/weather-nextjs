import { cn } from "@/4_shared/lib";
import { FC } from "react";
import { TbMenu2, TbX } from "react-icons/tb";

type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
};

export const MenuButton: FC<MenuButtonProps> = ({
  isOpen,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={cn(
        "relative z-10 flex size-12.5 cursor-pointer items-center justify-center dark:text-white",
        className,
      )}
    >
      {isOpen ? <TbX size={28} /> : <TbMenu2 size={28} />}
    </button>
  );
};
