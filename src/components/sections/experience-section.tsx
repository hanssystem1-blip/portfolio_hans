import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

const typeLabel: Record<string, string> = {
  formation: "Formation",
  experience: "Expérience",
  certification: "Certification",
  projet: "Projet",
};

export function ExperienceSection() {
  return (
    <Section id="parcours" eyebrow="04 — Parcours" title="Formations & expériences">
      <Reveal>
        <ol className="space-y-0">
          {experience.map((item, index) => (
            <li
              key={`${item.title}-${index}`}
              className="grid grid-cols-[auto_1fr] gap-4 border-l border-line py-4 pl-5 first:pt-0"
            >
              <span className="-ml-[27px] mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              <div className="-mt-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="accent">{typeLabel[item.type]}</Badge>
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                </div>
                <h3 className="mt-1.5 text-sm font-medium text-ink">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.organization}</p>
                <p className="mt-1.5 max-w-[55ch] text-sm leading-relaxed text-ink/80">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
