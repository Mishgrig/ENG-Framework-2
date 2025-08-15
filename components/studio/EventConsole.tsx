"use client";
import * as React from "react";
export function EventConsole({ events }: { events: string[] }){
  return (
    <div className="h-40 overflow-auto rounded-md border bg-card p-2 font-mono text-xs">
      {events.length===0 ? <div className="text-muted-foreground">No events yet…</div> : events.map((e,i)=>(<div key={i}>{e}</div>))}
    </div>
  );
}
