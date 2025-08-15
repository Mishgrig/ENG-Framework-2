export function PricingTable() {
  const plans = [
    { name: "Publisher", desc: "Co-publish Mini Apps. Revenue share up to 49%.", highlight: true },
    { name: "White-label", desc: "Branded build and integrations for your org." },
    { name: "Consulting", desc: "Methodology, legal-first, analytics and scaling." }
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map(p => (
        <article key={p.name} className={p.highlight ? "rounded-2xl border p-6 bg-card ring-2 ring-[--primary]" : "rounded-2xl border p-6 bg-card"}>
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          <a href="/contact" className="inline-flex h-10 items-center px-4 rounded-md bg-[--primary] text-[--primary-foreground] mt-4">Contact</a>
        </article>
      ))}
    </section>
  );
}
