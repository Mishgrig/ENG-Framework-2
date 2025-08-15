"use client";
import * as React from "react";
export function DeviceSwitch({ device, setDevice }: { device: "mobile"|"tablet"|"full"; setDevice: (d:any)=>void }){
  return (
    <div className="flex gap-2 text-sm">
      {["mobile","tablet","full"].map((d)=> (
        <button key={d} onClick={()=>setDevice(d as any)} className={"h-8 px-3 rounded-md border " + (device===d ? "bg-card" : "")}>{d.title()}</button>
      ))}
    </div>
  );
}
