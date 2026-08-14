import { Download, FolderOpen, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/profile";

export function ProfileSection() {
  return (
    <section id="profil" className="scroll-mt-20 pt-10 pb-8 md:pt-14 md:pb-10">
      <Reveal>
        <div className="flex  items-start gap-6 md:flex-row md:items-start md:gap-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Curriculum vitae — {profile.location}
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-1.5 text-base text-muted-foreground md:text-lg">
              {profile.title}
            </p>

            <p className="mt-5 max-w-[60ch] text-[15px] leading-relaxed text-ink/80 md:text-base">
              {profile.tagline}
            </p>
          </div>
          <div className=" bg-muted flex items-center justify-center rounded-full  md:mt-0">
            <img
              src={profile.img}
              alt={profile.name}
              className="mt-4 ml-6 mb-0.5 rounded-full  w-50 h-50  "
            />
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild variant="accent">
            <a href={profile.cvFile} download>
              <Download className="h-4 w-4" />
              Télécharger mon CV
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#projets">
              <FolderOpen className="h-4 w-4" />
              Voir mes projets
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Me contacter
            </a>
          </Button>
        </div>

        <div className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {profile.location}
        </div>
      </Reveal>
    </section>
  );
}
