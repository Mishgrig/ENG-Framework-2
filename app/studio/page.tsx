import { Suspense } from "react";
import StudioClient from "./StudioClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-muted-foreground">Loading Studio…</div>}>
      <StudioClient />
    </Suspense>
  );
}
