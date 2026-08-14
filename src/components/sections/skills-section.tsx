"use client";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="competences" eyebrow="02 — Savoir-faire" title="Compétences">
      <Reveal>
        <Tabs defaultValue={skillGroups[0].category}>
          <TabsList>
            {skillGroups.map((group) => (
              <TabsTrigger key={group.category} value={group.category}>
                {group.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillGroups.map((group) => (
            <TabsContent key={group.category} value={group.category}>
              <p className="mb-3 max-w-[55ch] text-sm text-muted-foreground">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>
    </Section>
  );
}
