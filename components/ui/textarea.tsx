import * as React from "react";
import { cn } from "@/components/utils";
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn("w-full rounded-md border p-3", className)} {...props} />
  )
);
Textarea.displayName = "Textarea";
