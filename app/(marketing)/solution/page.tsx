export default function Page(){
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">Solution</h1>
      <p className="mt-2 text-muted-foreground">Production system: templates, AI generation, legal-first and CI/CD.</p>
      <ul className="mt-4 list-disc pl-6 text-sm text-muted-foreground space-y-1">
        <li>Template re-use up to 70% of architecture.</li>
        <li>AI helpers for interfaces, logic, content and specs.</li>
        <li>Legal review before build: IP filters and guidelines.</li>
        <li>Analytics and automated releases.</li>
      </ul>
    </section>
  );
}
