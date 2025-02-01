import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent hover:bg-blue-hover hover:scale-[0.97] shadow-button text-white transition-all ease-in-out duration-300 hover:cursor-pointer",
        back: "bg-body-accent hover:bg-body-accent/70 hover:scale-[0.97] shadow-button text-black-text text-sm max-md:text-base font-semibold transition-all ease-in-out duration-300",
      },
      size: {
        default: "h-10 px-6 py-6",
        lg: "h-10 py-7 px-10 max-md:py-6 max-md:px-8",
        thin: "h-9 rounded-[5px] px-3 md:max-xl:text-base md:max-xl:px-4 md:max-xl:h-12",
        card: "h-9 py-6 px-10",
        back: "h-10 py-7 px-20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
