import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Stepper } from "@/components/Stepper";
import Link from "next/link";

export default function Page(){
  return (
    <>
      <Hero />
      <section className="mt-10">
        <FeatureGrid />
      </section>
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">6-Step Methodology</h2>
        <Stepper />
        <div className="mt-6"><Link href="/methodology" className="underline underline-offset-4">See methodology</Link></div>
      </section>
      <section className="mt-10 rounded-2xl border bg-card p-6 md:flex md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold">Ready to start in 14 days?</h3>
          <p className="text-sm text-muted-foreground">Legal-first: assess IP risks before building.</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <a href="/templates" className="inline-flex h-10 items-center px-4 rounded-md bg-[--primary] text-[--primary-foreground]">Browse Templates</a>
          <a href="/contact" className="inline-flex h-10 items-center px-4 rounded-md border">Get Consulting</a>
        </div>
      </section>
    </>
  );
}
