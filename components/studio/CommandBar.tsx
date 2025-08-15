"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

type Cmd = { cmd: string, args: Record<string,string> };

function parse(input: string): Cmd | null {
  // format: /add type key=value key2="value 2"
  if (!input.startsWith("/")) return null;
  const parts = input.trim().match(/(?:"[^"]*"|'[^']*'|\S+)/g) || [];
  const cmd = parts[0]?.slice(1) || "";
  const args: Record<string,string> = {};
  for (let i=1;i<parts.length;i++){
    const [k,...rest] = parts[i].split("=");
    if(!k || !rest.length) continue;
    let v = rest.join("=");
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1,-1);
    args[k] = v;
  }
  return { cmd, args };
}

export function CommandBar({ onAdd }: { onAdd: (block:any)=>void }){
  const [val, setVal] = React.useState("");
  const handle = () => {
    const parsed = parse(val);
    if (!parsed) return;
    if (parsed.cmd === "add"){
      const type = parsed.args["type"] || parsed.args["_"] || "text";
      const label = parsed.args["label"] || "Button";
      const text = parsed.args["text"] || "Text";
      let block:any = null;
      if (type==="button") block = { type:"button", props:{ label } };
      else if (type==="input") block = { type:"input", props:{ placeholder:text } };
      else block = { type:"text", props:{ text } };
      onAdd(block);
    }
    setVal("");
  };
  return (
    <div className="flex gap-2">
      <input className="h-10 w-full rounded-md border px-3 font-mono text-sm" placeholder="Type commands like /add type=button label='Get Started'" value={val} onChange={e=>setVal(e.target.value)} onKeyDown={(e)=>{ if(e.key==="Enter") handle(); }} />
      <Button onClick={handle}>Run</Button>
    </div>
  );
}
