import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">Launch Telegram Mini Apps in 14 Days</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
        UI/logic/monetization templates, AI tools, legal-first and CI/CD — from idea to publish.
      </p>
      <div className="mt-6 flex gap-3">
        <a href="/templates"><Button>Browse Templates</Button></a>
        <a href="/methodology"><Button variant="outline">View Methodology</Button></a>
      </div>
    </section>
  );
}
