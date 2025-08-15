"use client";
import * as React from "react";

export type Device = "mobile" | "tablet" | "full";

export function DeviceSwitch({
  device,
  setDevice,
}: {
  device: Device;
  setDevice: (d: Device) => void;
}) {
  const options: Device[] = ["mobile", "tablet", "full"];
  const label = (d: Device) => d.charAt(0).toUpperCase() + d.slice(1);

  return (
    <div className="inline-flex items-center gap-2">
      {options.map((d) => {
        const active = device === d;
        return (
          <button
            key={d}
            type="button"
            onClick={() => setDevice(d)}
            className={
              "h-8 px-3 text-sm rounded-md border transition " +
              (active ? "bg-card" : "hover:bg-card")
            }
            aria-pressed={active}
            aria-label={`Set device to ${d}`}
          >
            {label(d)}
          </button>
        );
      })}
    </div>
  );
}
