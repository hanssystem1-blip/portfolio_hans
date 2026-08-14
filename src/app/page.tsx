import { StickyNav } from "@/components/layout/sticky-nav";
import { Footer } from "@/components/layout/footer";
import { ProfileSection } from "@/components/sections/profile-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <StickyNav />
      <main className="mx-auto w-full max-w-210 flex-1 px-5 md:px-0">
        <ProfileSection />
        <Separator />
        <AboutSection />
        <Separator />
        <SkillsSection />
        <Separator />
        <ProjectsSection />
        <Separator />
        <ExperienceSection />
        <Separator />
        <ContactSection />
        <Footer />
      </main>
      <WhatsAppButton floating />
    </>
  );
}
