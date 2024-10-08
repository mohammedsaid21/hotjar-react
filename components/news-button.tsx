import { ChevronRight } from "lucide-react";

export function NewsButton() {
  return (
    <a
      href="/changelog"
      className="inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full border border-input bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    >
      🎉
      <div className="mx-2 h-4 w-px shrink-0 bg-border" role="none" />
      <span>New feature now available!</span>
      <ChevronRight className="ml-1 size-4 text-muted-foreground" />
    </a>
  );
}
