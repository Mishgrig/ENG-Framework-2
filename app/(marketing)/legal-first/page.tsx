export default function Page(){
  const principles = [
    "Legal-first: IP risks assessed before build and publish.",
    "Filters: copyrights, trademarks, user data and regional rules.",
    "Guidelines: safe patterns and restricted mechanics."
  ];
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">Legal-first & IP Safety</h1>
      <p className="mt-2 text-muted-foreground">We mitigate IP risks up-front. No legal guarantees; recommendations only.</p>
      <ul className="mt-6 space-y-2 list-disc pl-6">
        {principles.map(p => <li key={p}>{p}</li>)}
      </ul>
      <div className="mt-6 rounded-2xl border bg-card p-6">
        <h2 className="text-xl font-semibold">Compliance checklist</h2>
        <ul className="mt-2 text-sm text-muted-foreground list-disc pl-6">
          <li>Copyrights and trademarks screening</li>
          <li>User data and consent</li>
          <li>Regional requirements</li>
        </ul>
      </div>
    </section>
  );
}
