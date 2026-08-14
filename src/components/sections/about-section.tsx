import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <Section id="a-propos" eyebrow="01 — Présentation" title="À propos">
      <Reveal>
        <div className="max-w-[62ch] space-y-4 text-[15px] leading-relaxed text-ink/85">
          <p>{profile.intro}</p>
          <p>
            Je m&apos;intéresse autant à la logique derrière une application qu&apos;à la manière dont
            elle est utilisée au quotidien. Avant d&apos;écrire du code, j&apos;essaie de comprendre le
            besoin réel : qui utilise l&apos;outil, pour quoi faire, et ce qui rendrait son usage plus
            simple.
          </p>
          <p>
            Chaque projet est pour moi une occasion d&apos;apprendre une technologie, une méthode ou une
            façon de structurer un problème plus grand que ce que j&apos;ai déjà fait. C&apos;est cette
            progression, projet après projet, qui définit aujourd&apos;hui ma manière de travailler.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
