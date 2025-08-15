"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

function Block({ b }: { b:any }){
  switch(b.type){
    case "button":
      return <Button>{b.props?.label || "Button"}</Button>;
    case "input":
      return <input className="h-10 rounded-md border px-3" placeholder={b.props?.placeholder || "Type..."} />;
    case "list":
      return <ul className="list-disc pl-6">{(b.props?.items||[]).map((it:any,i:number)=>(<li key={i}>{it}</li>))}</ul>;
    case "text":
    default:
      return <p className="text-sm text-muted-foreground">{b.props?.text || "Text"}</p>;
  }
}

export function Renderer({ schema }: { schema: any }){
  const blocks = Array.isArray(schema?.blocks) ? schema.blocks : [];
  return (
    <div className="space-y-4">
      {blocks.map((b:any, i:number)=>(<Block key={i} b={b} />))}
    </div>
  );
}
