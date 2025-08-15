import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface Template {
  slug: string;
  title: string;
  segment: "Business" | "Education" | "Municipal";
  tags: string[];
  schema: any;
}

export function TemplateCard({ t }: { t: Template }) {
  // encode schema for studio
  const url = `/studio?s=${encodeURIComponent(JSON.stringify(t.schema))}`;
  return (
    <article className="group rounded-2xl border bg-card overflow-hidden hover:shadow-md transition">
      <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900" />
      <div className="p-5">
        <h3 className="text-lg font-semibold">{t.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{t.segment}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {t.tags.map(tag => <span key={tag} className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">{tag}</span>)}
        </div>
        <div className="mt-4 flex gap-3">
          <Link href={`/templates/${t.slug}`}><Button>Details</Button></Link>
          <Link href={url}><Button variant="outline">Open in Studio</Button></Link>
        </div>
      </div>
    </article>
  );
}
