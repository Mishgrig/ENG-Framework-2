import { PricingTable } from "@/components/PricingTable";

export default function Page(){
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">Pricing & Publisher Model</h1>
      <p className="mt-2 text-muted-foreground">Publisher (share up to 49%), white-label solutions, consulting.</p>
      <div className="mt-6">
        <PricingTable />
      </div>
    </section>
  );
}
