"use client";
import * as React from "react";

export function AccordionFAQ({ items }: { items: { title: string; content: string }[] }){
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <div className="divide-y divide-[--border] rounded-xl border">
      {items.map((it, i) => {
        const active = open === i;
        return (
          <div key={i}>
            <button className="w-full text-left px-4 py-3 font-medium hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]" aria-expanded={active} onClick={() => setOpen(active ? null : i)}>
              {it.title}
            </button>
            {active && <div className="px-4 pb-4 text-sm text-muted-foreground">{it.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
