export function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6 lg:px-8 py-10 text-sm text-muted-foreground">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <div className="font-semibold text-foreground mb-2">Product</div>
            <ul className="space-y-1">
              <li><a href="/solution">Solution</a></li>
              <li><a href="/templates">Templates</a></li>
              <li><a href="/studio">Studio</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-2">Company</div>
            <ul className="space-y-1">
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-2">Legal</div>
            <ul className="space-y-1">
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-2">Build</div>
            <ul className="space-y-1">
              <li><a href="/analytics">Analytics & CI/CD</a></li>
              <li><a href="/legal-first">Legal-first</a></li>
              <li><a href="/docs/guides">Docs</a></li>
            </ul>
          </div>
        </div>
        <p>© {new Date().getFullYear()} Telegram MiniApps Framework. Not affiliated with Telegram.</p>
      </div>
    </footer>
  );
}
