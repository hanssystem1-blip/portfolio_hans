"use client";

import * as React from "react";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const links = [
  { href: "#profil", label: "Profil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export function StickyNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur supports-backdrop-filter:bg-paper/80">
      <div className="mx-auto flex h-14 max-w-210 items-center justify-between px-5 md:px-0">
        <a href="#profil" className="font-mono text-sm font-medium tracking-tight text-ink">
          KHans<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" variant="accent">
            <a href={profile.cvFile} download>
              <Download className="h-3.5 w-3.5" />
              CV
            </a>
          </Button>
        </div>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-line transition-[grid-template-rows] duration-300 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-5 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-ink hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cvFile}
              download
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white"
            >
              <Download className="h-3.5 w-3.5" />
              Télécharger mon CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
