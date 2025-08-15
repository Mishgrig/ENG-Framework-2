import * as React from "react";
import { cn } from "@/components/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn("h-10 w-full rounded-md border px-3", className)} {...props} />
  )
);
Input.displayName = "Input";
