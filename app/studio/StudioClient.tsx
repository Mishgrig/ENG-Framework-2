"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SchemaEditor } from "@/components/studio/SchemaEditor";
import { Renderer } from "@/components/studio/Renderer";
import { CommandBar } from "@/components/studio/CommandBar";
import { EventConsole } from "@/components/studio/EventConsole";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import LZString from "lz-string";

function tryParse(json: string) {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export default function StudioClient() {
  const search = useSearchParams();
  const router = useRouter();
  const s = search.get("s");
  const lz = search.get("lz");
  const initial = lz ? LZString.decompressFromEncodedURIComponent(lz) : s;

  const [schemaText, setSchemaText] = React.useState<string>(() =>
    initial || JSON.stringify({ blocks: [{ type: "text", props: { text: "Hello Studio!" } }] }, null, 2)
  );
  const [device, setDevice] = React.useState<"mobile" | "tablet" | "full">("full");
  const [events, setEvents] = React.useState<string[]>([]);

  const schema = tryParse(schemaText) || { blocks: [] };

  const addBlock = (b: any) => {
    const next = { ...schema, blocks: [...(schema.blocks || []), b] };
    setSchemaText(JSON.stringify(next, null, 2));
    setEvents((e) => [...e, `add_block type=${b.type}`]);
  };

  const share = (mode: "json" | "lz") => {
    const val = schemaText;
    if (mode === "lz") {
      const enc = LZString.compressToEncodedURIComponent(val);
      const url = `${location.origin}/studio?lz=${enc}`;
      navigator.clipboard.writeText(url);
      setEvents((e) => [...e, "share:lz copied to clipboard"]);
    } else {
      const url = `${location.origin}/studio?s=${encodeURIComponent(val)}`;
      navigator.clipboard.writeText(url);
      setEvents((e) => [...e, "share:json copied to clipboard"]);
    }
  };

  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4 gap-3">
        <h1 className="text-2xl md:text-3xl font-semibold">Studio</h1>
        <div className="flex gap-2">
          <Button onClick={() => share("lz")}>Share (LZ URL)</Button>
          <Button variant="outline" onClick={() => share("json")}>Share (JSON URL)</Button>
        </div>
      </div>

      <div className="rounded-xl border overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-4 border-b lg:border-b-0 lg:border-r">
            <CommandBar onAdd={addBlock} />
            <div className="mt-3 h-[420px]">
              <SchemaEditor value={schemaText} onChange={setSchemaText} />
            </div>
          </div>
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Live Preview</div>
              <div className="flex gap-2 text-sm">
                {(["mobile", "tablet", "full"] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDevice(d)}
                    className={"h-8 px-3 rounded-md border " + (device === d ? "bg-card" : "")}
                  >
                    {d[0].toUpperCase() + d.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div
              className={clsx("border rounded-md bg-white mx-auto", {
                "w-[360px] h-[640px] p-4 overflow-auto": device === "mobile",
                "w-[768px] h-[1024px] p-5 overflow-auto": device === "tablet",
                "w-full p-6": device === "full",
              })}
            >
              <Renderer schema={schema} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm font-medium mb-2">Event console</div>
        <EventConsole events={events} />
      </div>
    </section>
  );
}
