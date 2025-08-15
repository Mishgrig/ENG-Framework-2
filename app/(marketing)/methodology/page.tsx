export default function Page(){
  const steps = [
    { name:"Market analysis", desc:"Goals, analogs, risks and success metrics." },
    { name:"Visualization", desc:"User flows, screens and states." },
    { name:"Legal review", desc:"IP filters, guidelines and regional rules." },
    { name:"Assembly", desc:"Templates, integrations and content." },
    { name:"Launch", desc:"Publish to Telegram, events and funnels." },
    { name:"Support", desc:"Iterate, train and scale with SLA." }
  ];
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">6-Step Methodology</h1>
      <p className="mt-2 text-muted-foreground">Managed path from hypothesis to public release.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {steps.map((s,i)=>(
          <article key={s.name} className="relative rounded-xl border bg-card p-4">
            <span className="absolute -top-3 left-4 inline-flex h-6 items-center rounded-full bg-[--primary] px-2 text-xs text-[--primary-foreground]">Step {i+1}</span>
            <h3 className="mt-2 font-medium">{s.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
