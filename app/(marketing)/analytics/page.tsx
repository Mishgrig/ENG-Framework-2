export default function Page(){
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">Analytics & CI/CD</h1>
      <p className="mt-2 text-muted-foreground">Events, funnels, logging and automated releases.</p>
      <div className="mt-6 space-y-2">
        <div className="text-sm"><strong>Default events:</strong> sign_up, template_view, template_clone, contact_submit</div>
        <div className="text-sm"><strong>CI/CD:</strong> lint, typecheck, build and deploy</div>
      </div>
    </section>
  );
}
