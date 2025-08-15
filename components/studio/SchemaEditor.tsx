"use client";
import * as React from "react";
import { Textarea } from "@/components/ui/textarea";

export function SchemaEditor({ value, onChange }: { value: string; onChange: (v:string)=>void }){
  return (
    <div className="h-full flex flex-col">
      <label className="text-sm font-medium mb-2">Schema (JSON)</label>
      <Textarea className="flex-1 font-mono text-sm" value={value} onChange={e=>onChange(e.target.value)} />
    </div>
  );
}
