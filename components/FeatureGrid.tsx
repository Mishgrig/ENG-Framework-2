export function FeatureGrid() {
  const features = [
    { title: "Template Library", desc: "Reusable UI, logic, monetization and onboarding." },
    { title: "AI Tools", desc: "Prompts to draft interfaces, logic and specs." },
    { title: "Legal-first", desc: "IP filters, guidelines and regional rules before build." },
    { title: "Analytics", desc: "Events, funnels and logging out of the box." },
    { title: "CI/CD", desc: "Lint, typecheck, build and deploy with GitHub Actions." },
    { title: "Studio", desc: "Live JSON-to-UI builder, command bar and shareable URLs." }
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f) => (
        <article key={f.title} className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md">
          <h3 className="text-lg font-semibold">{f.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
        </article>
      ))}
    </section>
  );
}
