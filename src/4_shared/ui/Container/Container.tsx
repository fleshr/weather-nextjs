import { FC, ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
  className?: string;
};

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className="mx-auto w-full max-w-280 md:px-5">
      <div className={className}>{children}</div>
    </div>
  );
};
