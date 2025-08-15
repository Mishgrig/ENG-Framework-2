import * as React from "react";
import { cn } from "@/components/utils";
export const Select = ({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select className={cn("h-10 w-full rounded-md border px-3", className)} {...props} />
);
