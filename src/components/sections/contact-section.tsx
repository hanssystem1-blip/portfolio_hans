import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="05 — Contact" title="Discutons de votre projet">
      <Reveal>
        <Card className="p-5 md:p-6">
          <p className="max-w-[55ch] text-[15px] leading-relaxed text-ink/85">
            Étudiant, disponible pour des collaborations, des stages ou des projets concrets à
            développer ensemble. N&apos;hésitez pas à me contacter directement.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <WhatsAppButton label="Écrire sur WhatsApp" />
            <Button asChild variant="outline">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                M&apos;écrire un email
              </a>
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4 text-sm text-muted-foreground">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-ink">
              <ArrowUpRight className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-ink">
              <ArrowUpRight className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-ink">
              <MessageCircle className="h-3.5 w-3.5" />
              +{profile.whatsapp}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              {profile.email}
            </span>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
