import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const MaxWidthWrapper = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
      {...props}
    />
  );
};

export default MaxWidthWrapper;
