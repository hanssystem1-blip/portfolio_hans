"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section id="projets" eyebrow="03 — Réalisations" title="Projets">
      <Reveal>
        <div className="rounded-lg border border-line">
          <Accordion type="multiple" defaultValue={[projects[0].slug]}>
            {projects.map((project, index) => (
              <AccordionItem key={project.slug} value={project.slug} className="px-5 md:px-6">
                <AccordionTrigger>
                  <span className="flex items-baseline gap-3 text-left">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-ink">{project.name}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pl-7">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          Besoin
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-ink/85">{project.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          Solution
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-ink/85">{project.solution}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Fonctionnalités
                      </p>
                      <ul className="mt-1.5 space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-sm text-ink/85 before:mr-2 before:text-accent before:content-['—']">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Mon rôle
                      </p>
                      <p className="mt-1 text-sm text-ink/85">{project.role}</p>
                    </div> */}

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent"
                          >
                            <ArrowUpRight className="h-3.5 w-3.5" />
                            Code
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Démo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </Section>
  );
}
