import Link from "next/link";
import { t, type Lang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Navbar({ lang = "en" as Lang }) {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">Telegram MiniApps Framework</Link>
        <div className="hidden md:flex items-center gap-6">
          <Link className="text-sm text-muted-foreground hover:text-foreground" href="/solution">{t(lang,"nav.solution")}</Link>
          <Link className="text-sm text-muted-foreground hover:text-foreground" href="/methodology">{t(lang,"nav.methodology")}</Link>
          <Link className="text-sm text-muted-foreground hover:text-foreground" href="/templates">{t(lang,"nav.templates")}</Link>
          <Link className="text-sm text-muted-foreground hover:text-foreground" href="/legal-first">{t(lang,"nav.legal")}</Link>
          <Link className="text-sm text-muted-foreground hover:text-foreground" href="/pricing">{t(lang,"nav.pricing")}</Link>
          <Link className="text-sm text-muted-foreground hover:text-foreground" href="/studio">{t(lang,"nav.studio")}</Link>
          <Link className="text-sm text-muted-foreground hover:text-foreground" href="/about">{t(lang,"nav.about")}</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/contact"><Button>{t(lang,"cta.requestTemplate")}</Button></Link>
        </div>
      </div>
    </nav>
  );
}
