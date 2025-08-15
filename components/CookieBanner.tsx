"use client";
import * as React from "react";
export function CookieBanner(){
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="mx-auto max-w-[1240px] m-4 p-4 rounded-xl border bg-[--primary] text-[--primary-foreground] shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="text-sm">We use analytics events to improve the site. See details in the Privacy Policy.</div>
        <div className="flex gap-2">
          <a className="underline underline-offset-4" href="/privacy">Privacy Policy</a>
          <button onClick={()=>setOpen(false)} className="h-9 px-4 rounded-md bg-white text-[--primary]">OK</button>
        </div>
      </div>
    </div>
  );
}
